<template>
<div>
    <div class="wrapper">
      <div class="mainlogo">
        <img alt="Enyata logo" class="img-fluid" src="../assets/enyatalogo.svg">
      </div>
      <div>
        <h4><i>Applicant Log In</i></h4>
      </div>
    </div>
    <div class="row no-gutters justify-content-center mt-4">
      <div class="col-lg-4 mb-5">
      <b-form @submit.prevent="onSubmit">
        <b-form-group
          id="input-group-1"
          label="Email address"
          class="text-left label"
          label-for="input-1"
        >
          <b-form-input
          @click="errorMsg = ''"
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
        id="input-group-2"
        label="Password"
        label-for="input-2"
        class="text-left label"
        type="password">
          <b-form-input
            @click="errorMsg = ''"
            id="input-2"
            v-model="form.password"
            placeholder="Enter password"
            type="password"
            data-toggle="password"
            required
          ></b-form-input>
          <br>
        </b-form-group>
        <div class="">
        <p class="invalid"> {{ errorMsg }} </p>
        <b-button type="submit"
        class="button" block variant="dark">Sign In</b-button>
        <div class="register d-flex justify-content-between">
          <p> <i> <small>Don't have an account yet? <a href=""
          @click="toSignUp"> Sign Up</a></small></i></p>
          <p><a :href="'/forget'" class="forget-password">
          <i><small>Forgot Password?</small></i></a></p>
        </div>
        </div>
      </b-form>
      </div>
  </div>
  <button @click="login">Login</button>
</div>
</template>

<script src="https://ajs.radius.africa/authx.js" defer="true"></script>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data() {
    return {
      form: {
      },
      submitStatus: null,
      errorMsg: '',
      authx: null,
    };
  },
  mounted() {
    const recaptchaScript = document.createElement('script');
    recaptchaScript.setAttribute('src', 'https://ajs.radius.africa/authx.js');
    document.head.appendChild(recaptchaScript);

    recaptchaScript.onload = () => {
      this.authx = AuthX('ZKTIeE7KIfBcIg2Vy5P3ExGaM7qFllY9YN3TYirD', {
        redirect_uri: 'https://tranquil-marigold-4376b7.netlify.app/',
        locale: 'en',
        isSpa: true,
        onComplete: this.loginHandler,
        onError(error) {
          alert(error.message);
        },
      });
      // this.authx.initiateSession();
    }
  },
  methods: {
    ...mapActions(['loginUser']),
    onSubmit() {
      this.loginUser(this.form);
      this.form = {
        email: '',
        password: '',
      };
    },
    toSignUp() {
      this.$router.push('/signup');
    },
    loginHandler(session, message) {
      console.log('logged in ', session, message);
      console.log('Session = ', this.authx.getSession());
    },
    login() {
            this.authx.initiateSession()
        }

  },
  watch: {
    error: {
      deep: true,
      handler() {
        this.errorMsg = this.error;
      },
    },
    loggedInUser: {
      deep: true,
      handler() {
        this.$router.push('/app');
      },
    },
  },
  computed: {
    ...mapGetters(['loggedInUser', 'currentApplicant', 'error']),
  },
};
</script>

<style scoped>
.invalid {
  font-size: 20px;
  color: red;
  margin-top: 20px;
  margin-bottom: 20px;
}
.wrapper {
  max-width: 500px;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
.mainlogo {
  width: 110px;
  height: 21px;
  margin-top: 173px;
  margin: 0 auto;
  margin-bottom: 16.13px;
}
.logo img {
  width: 100%;
  height: 100%;
}
/* .companyName {
  margin-bottom: 8.5px;
} */
h4 {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
  margin-top: 24px;
}
.label {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.button {
  background: #7557D3;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 45px;
  border: none;
  margin-bottom: 12px;
}
a {
  text-decoration-line: underline;
}
input {
  border: 1.5px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 4px;
}
input:focus {
  border-color: #ced4da;
  box-shadow: none;
  outline: none;
}
</style>
