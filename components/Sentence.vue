<template>
  <div class="sentence-box">
    <div class="history">
      <h1 class="sentence">{{ sentence.text }}</h1>
    </div>
    <v-btn fab large dark @click="createSentence" id="sun-btn">
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
      sentence: null,
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
    createSentence() {
      const wordType = this.randomWordType();
      switch (wordType) {
        case "two word":
          this.sentence = {
            show: false,
            text: this.twoChracterWord[
              Math.floor(Math.random() * this.twoChracterWord.length)
            ]
          };
          break;
        case "three word":
          this.sentence = {
            show: false,
            text: this.threeChracterWord[
              Math.floor(Math.random() * this.threeChracterWord.length)
            ]
          };
          break;
        case "etc word":
          const firstWord = this.etcChracterWord[
            Math.floor(Math.random() * this.etcChracterWord.length)
          ];
          const isExist = this.checkBatchimEnding(firstWord);
          const middleText = ["의", isExist ? "과" : "와"];
          this.sentence = {
            show: false,
            text: `${firstWord}${
              middleText[Math.floor(Math.random() * middleText.length)]
            } ${
              this.etcChracterWord[
                Math.floor(Math.random() * this.etcChracterWord.length)
              ]
            }`
          };
          break;
      }
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
  font-family: Noto Serif KR;
}
.history {
  display: flex;
  align-items: center;
  height: 30vh;
}
.sentence {
  transition: 1s ease;
  width: 100%;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
