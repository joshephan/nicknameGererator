<template>
  <div class="sentence-box">
    <div class="history">
      <transition name="fade" v-for="(nickname, i) in sentence" :key="i">
        <h1 v-show="nickname.show" class="sentence">{{ nickname.text }}</h1>
      </transition>
    </div>
    <v-btn fab large dark @click="loop" id="sun-btn">
      <v-avatar>
        <img src="/sun.png" />
      </v-avatar>
    </v-btn>
  </div>
</template>
<script>
import twoWord from "@/assets/2-word.txt";
import threeWord from "@/assets/3-word.txt";
import etcWord from "@/assets/etc-word.txt";

export default {
  data() {
    return {
      sentence: [],
      twoChracterWord: twoWord.split(","),
      threeChracterWord: threeWord.split(","),
      etcChracterWord: etcWord.split(",")
    };
  },
  created() {
    this.createSentence();
  },
  methods: {
    checkBatchimEnding(word) {
      if (typeof word !== "string") return null;

      var lastLetter = word[word.length - 1];
      var uni = lastLetter.charCodeAt(0);

      if (uni < 44032 || uni > 55203) return null;

      return (uni - 44032) % 28 != 0;
    },
    randomWordType() {
      const idx = Math.floor(Math.random() * 10);
      if (idx >= 8) {
        return "three word";
      }
      return idx >= 5 ? "two word" : "etc word";
    },
    cut() {
      const array = this.sentence;
      setTimeout(()=>{
        array[array.length - 1].show = true;
      });
    },
    loop() {
      const self = this;
      if(self.sentence.length >= 3) {
        self.sentence.map(v => v.show = false);
        self.sentence = [];
        setTimeout(() => {
          self.createSentence();
        });  
      } else {
        self.createSentence();
      }
    },
    createSentence() {
      const wordType = this.randomWordType();
      switch (wordType) {
        case "two word":
          this.sentence.push({show: false, text: this.twoChracterWord[Math.floor(Math.random() * this.twoChracterWord.length)]});
          break;
        case "three word":
          this.sentence.push({show: false, text: this.threeChracterWord[Math.floor(Math.random() * this.threeChracterWord.length)]});
          break;
        case "etc word":
          const firstWord = this.etcChracterWord[Math.floor(Math.random() * this.etcChracterWord.length)];
          const isExist = this.checkBatchimEnding(firstWord);
          const middleText = ["의", isExist ? "과" : "와"];
          this.sentence.push({show: false, text: `${firstWord}${
            middleText[Math.floor(Math.random() * middleText.length)]
          } ${this.etcChracterWord[Math.floor(Math.random() * this.etcChracterWord.length)]}`});
          break;
      }
      this.cut();
    }
  }
};
</script>
<style lang="scss" scoped>
.sentence-box {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-family: Noto Serif KR;
}
.history {
  height: 30vh;
  margin: 2rem 0 10rem;
}
.sentence {
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0);
  transition: 1s ease;
  width: 100%;
  text-align: center;
  &:nth-child(1) {
    top: 5%;
  }
  &:nth-child(2) {
    top: 27.5%;
  }
  &:nth-child(3) {
    top: 50%;
  }
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
#sun-btn {
  position: absolute;
  bottom: 12%;
}
</style>
