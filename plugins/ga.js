import router from '~router'
/*
** 클라이언트 사이드와 프로덕션 모드에서만 실행됩니다
*/
if (process.env.NODE_ENV === 'production') {
  /*
  ** Google 애널리틱스 스크립트를 include
  */
  (function (i, s, o, g, r, a, m) {
    i.GoogleAnalyticsObject = r; i[r] = i[r] || function () {
      (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
    m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga')
  /*
  ** 현재 페이지를 설정
  */
  ga('create', 'UA-76327717-7', 'auto')
}

export default ({ app: { router }, store }) => {
  /*
  ** 라우트가 변경될 때마다 실행 (초기 설정 시에도 실행됨)
  */
  router.afterEach((to, from) => {
    /*
    ** Google 애널리틱스에게 페이지뷰가 추가된 것을 전달
    */
    ga('set', 'page', to.fullPath)
    ga('send', 'pageview')
  })
}