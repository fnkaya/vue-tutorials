<template>
  <div>
    <h1 class="title">{{title}}</h1>
    <div class="questions">
      <div v-for="question in questions" :key="question.id" class="box"
           :style="{ borderColor: getRandomColor() }">
        {{question.text}}
      </div>
    </div>
  </div>
</template>

<script>
import { listenDataChanges } from "@/firestore";
import { borderColors } from "@/constants/colors";

export default {
  name: 'Session',
  components: {},
  data: function () {
    return {
      sessionId: undefined,
      title: "",
      questions: [],
    }
  },
  methods: {
    setQuestions: function ({ title, questions }) {
      this.title = title;
      this.questions = questions;
    },
    getRandomColor: function () {
      const color = borderColors.shift();
      borderColors.push(color);
      return color;
    },
  },
  created() {
    this.sessionId = this.$route.params.sessionId;
  },
  mounted() {
    listenDataChanges(this.sessionId, this.setQuestions)
  },
}
</script>

<style scoped>
.title {
  margin-bottom: 24px;
}
.questions {
  column-count: 3;
  column-gap: 10px;
  min-height: 100%;
}
.box {
  padding: 16px;
  border: 1px solid grey;
  border-radius: 8px;
  word-wrap: break-word;
  break-inside: avoid;
  margin: 5px 0;
  font-size: 1.25em;
  opacity: .5;
}
</style>
