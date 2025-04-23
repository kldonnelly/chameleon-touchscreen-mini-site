<template>
  <div class="page page--advertising">
    <div class="advertising-background">
      <img src="https://ucarecdn.com/1beb4d4e-b0c2-43b9-ac1f-cc2376079628/-/format/auto/" alt />
    </div>
    <div class="advertising-form">
      <div class="advertising-form__input">
        <label for>Contact us</label>
        <input type="text" v-model="email" :placeholder="emailInputPlaceholder" />
      </div>
      <div class="advertising-form__submit">
        <button @click="emailSubmit" :disabled="disableSendButton">Submit</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      email: '',
      disableSendButton: false,
      emailInputPlaceholder: 'Enter your email to contact us',
    }
  },
  methods: {
    emailSubmit: function() {

      if (this.email.length < 5) {
        this.emailInputPlaceholder = 'Invalid email address';
        return;
      }

      let endpoint = 'https://us-central1-chameleon-isb.cloudfunctions.net/api/mail-inquire';

      if (window.location.hostname === 'localhost') {
        endpoint = 'http://localhost:5001/chameleon-isb/us-central1/api/mail-inquire';
      }

      fetch(`${endpoint}`, {
        method: 'POST',
        headers: {
          'x-secret': 'chameleon-isb-mini-site'
        },
        body:JSON.stringify({ email: this.email })
      })
          .then(res => res.json())
          .then(() => {
            this.disableSendButton = true;
            this.email = '';
            this.emailInputPlaceholder = 'You\'ll get an email soon.';
            setTimeout(() => {
              this.disableSendButton = false;
            }, 10000);
          })
          .catch(e => {
            console.log(e);
          });
    }
  }
}
</script>