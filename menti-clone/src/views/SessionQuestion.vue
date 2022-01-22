<template>
  <div class="session-question-container">
    <b-form @submit.prevent="submit" class="question-form">
      <b-form-textarea size="lg" rows="6"
                       no-resize placeholder="Enter your question..."
                       class="question-input"
                       :state="!$v.question.$dirty ? null : !$v.question.$error"
                       v-model.trim="$v.question.$model"
      />
      <b-button type="submit" variant="info" block>SUBMIT</b-button>
    </b-form>
  </div>
</template>

<script>
import { uniqueId } from "lodash";
import {addQuestion} from "@/firestore";
import {minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'SessionQuestion',
  data: function () {
    return {
      question: "",
    }
  },
  validations: {
    question: {
      required,
      minLength: minLength(10),
    },
  },
  methods: {
    submit: async function () {
      const sessionId = this.$route.params.sessionId;
      const questionObj = { id: uniqueId('Q' + Date.now()), text: this.question }
      try {
        this.$v.$touch();
        if (!this.$v.$invalid) {
          await addQuestion(sessionId, questionObj);
          await this.$router.push({name: 'Session', params: {sessionId}})
        }
      } catch (error) {
        console.error(error);
      }
    },
  },
}
</script>

<style scoped>
.session-question-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
.question-form {
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.question-input {
  background-color: transparent;
  border: 1px solid lightseagreen;
  border-radius: 4px;
}
</style>
