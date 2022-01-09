<template>
  <div class="container">
    <div>
      <span>Min score: </span>
      <input type="text" class="score-input" v-model="passScore"/>
    </div>
    <Student v-for="student in filteredStudents"
             :key="student.id"
             :data="student"
             @showScore="showScore"
    />
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
  name: 'HomeContainer',
  components: {Student},
  data() {
    return {
      students: [
        {id: 1, name: "student1", retakeCount: 1, score: 68, passed: true},
        {id: 2, name: "student2", retakeCount: 5, score: 90, passed: true},
        {id: 3, name: "student3", retakeCount: 4, score: 50, passed: false},
        {id: 4, name: "student4", retakeCount: 2, score: 90, passed: true},
        {id: 5, name: "student5", retakeCount: 2, score: 40, passed: false},
        {id: 6, name: "student6", retakeCount: 3, score: 67, passed: true},
        {id: 7, name: "student7", retakeCount: 1, score: 32, passed: false},
        {id: 8, name: "student8", retakeCount: 1, score: 15, passed: false},
      ],
      passScore: 0,
    }
  },
  methods: {
    showScore: (score) => {
      window.alert(score);
    }
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student => student.score >= this.passScore);
    }
  },
  watch: {
    passScore(next, prev) {
      const alertText = `Pass score changing... Previous value: ${prev}, Next value: ${next}`
      window.alert(alertText);
    }
  },
  beforeCreated() {
    console.log("instance has been initialized...")
  },
  created() {
    console.log("instance is created...")
  },
  beforeMount() {
    console.log("mounted beginning...")
  },
  mounted() {
    console.log("instance has been mounted...")
  },
  beforeUpdate() {
    console.log("some data changed...")
  },
  updated() {
    console.log("DOM re-rendered...")
  },
  activated() {
    console.log("component is activated...")
  },
  deactivated() {
    console.log("component is deactivated...")
  },
  beforeUnmount() {
    console.log("called component instance unmounted...")
  },
  unmounted() {
    console.log("instance has been unmounted...")
  },
  //errorCaptured(err, vm, info) {
    // err: error trace
    // vm: component in which error occurred
    // info: vue specific error information such as lifecycle hooks, events etc.
    // return false to stop propagation of errors further to parent or global error
  //}
}
</script>


<style scoped>
.container {
  width: 50vw;
  display: flex;
  flex-direction: column;
  margin: 64px auto;
}
.score-input {
  padding: 8px;
  width: 20px;
  margin: 16px auto;
  text-align: center;
}
</style>
