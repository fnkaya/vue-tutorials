<template>
  <div class="home-container">
    <b-input-group>
      <b-form-input v-model.trim="$v.title.$model"
                    :state="!$v.title.$dirty ? null : !$v.title.$error"
                    placeholder="Enter question title..."
      />
      <b-button variant="danger"
                @click="createSession"
                :disabled="$v.title.$invalid">
        Create Session
      </b-button>
    </b-input-group>

    <div v-if="sessionUrl" class="session-url">
      <b-input-group>
        <b-form-input :value="sessionUrl" disabled />
        <b-button variant="secondary" @click="copyToClipboard">
          <b-icon icon="clipboard" />
        </b-button>
      </b-input-group>
      <router-link :to="{ name: 'Session', params: { sessionId } }" target="_blank">
        <b-button variant="info">Go to Session</b-button>
      </router-link>
    </div>
  </div>
</template>

<script>
import { createSession } from '@/firestore';
import {BIcon} from 'bootstrap-vue';
import {minLength, required} from "vuelidate/lib/validators";

export default {
  name: 'Home',
  components: {
    BIcon,
  },
  data: function () {
    return {
      title: undefined,
      sessionId: undefined,
      sessionUrl: undefined,
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(10),
    },
  },
  methods: {
    createSession: async function () {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sessionId = await createSession(this.title);
      }
    },
    copyToClipboard: function () {
      navigator.clipboard.writeText(this.sessionUrl);
    },
  },
  watch: {
    sessionId: function () {
      this.sessionUrl = `${location.host}/${this.sessionId}/question`;
    },
  },
  mounted() {
    console.log(process.env)
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
}
.session-url {
  display: flex;
  justify-content: center;
  gap: 24px;
  width: 100%;
}
.session-url > .input-group, .home-container > .input-group {
  width: 50%;
}
</style>
