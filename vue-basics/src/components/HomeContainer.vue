<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Student v-for="student in students"
             :key="student.id"
             :data="student"
             @alert="alert"
    />
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
  name: 'HelloWorld',
  components: {Student},
  props: {
    msg: String
  },
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
      passScore: 50,
    }
  },
  methods: {
    alert: (data) => {
      window.alert(data.score);
    }
  },
  computed: {
    filteredStudents() {
      return this.students.filter(student => student.passed && student.score >= this.passScore);
    }
  },
  watch: {
    /*passScore(next, prev) {
      console.log("Pass score changed. ", prev, " => ", next);
    }*/
  },
  mounted() {
    /*setInterval(() => this.passScore = 70, 2000);*/
  },
}
</script>


<style scoped>

</style>
