/**
 * 위키 낱말 사전 사이트에 불필요한 로드를 주지 않기 위해
 * 단어 뭉치 생성 때만 사용했습니다.
 */
const axios = require("axios");
const cheerio = require("cheerio");
const fs = require('fs');
const _ = require('lodash');

let result = [];
let page = 0;

// 아래의 url은 "https://ko.wiktionary.org/w/index.php?title=분류:한국어_명사" 가 변형된 것입니다.
let url = 'https://ko.wiktionary.org/w/index.php?title=%EB%B6%84%EB%A5%98:%ED%95%9C%EA%B5%AD%EC%96%B4_%EB%AA%85%EC%82%AC';

const getHtml = async () => {
  try {
    return await axios.get(url);
  } catch (error) {
    console.error(error);
  }
};

const parsingLoop = () => {
  getHtml()
  .then(html => {
    const $ = cheerio.load(html.data);
    const $bodyList = $(".mw-category-group > ul > li").children("a");
    const next = $('#mw-pages > a:last-child');
    $bodyList.each(function(i, elem) {
      result.push($(this).text())
    });
    if(next.text() == '이전 페이지') {
      return false;
    }
    url = `https://ko.wiktionary.org${next.attr('href')}`;
    return true;
  })
  .then(res => {
    if(!res) {
      return fs.writeFile('word.txt', result, 'utf8', (err) => {
        console.log(`${result.length}개 단어 저장 완료`);
      });
    } 
    page++;
    console.log(`진행 중: ${page / 1.3357}% 완료`);
    parsingLoop();
  });
}

// parsingLoop();

// 단어 필터링 후 단어 뭉치 만들기
// fs.readFile('./assets/not-two-letters.txt', 'utf8', (err, data) => {
//   const result = _.filter(data.split(','), (o) => { return o.length === 3; } )
//   fs.writeFile('./assets/3-word.txt', result, 'utf8', (err) => {
//     console.log(`${result.length}개 단어 저장 완료`);
//   });
// });