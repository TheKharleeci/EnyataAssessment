<template>
<div>
    <div class="wrapper">
      <div class="mainlogo">
        <img alt="Enyata logo" class="img-fluid" src="../assets/enyatalogo.svg">
      </div>
      <div>
        <h4><i>Reset Password</i></h4>
      </div>
    </div>
    <div class="row no-gutters justify-content-center mt-4">
      <div class="col-lg-4 mb-5">
      <b-form @submit.prevent = "resetPassword" method= 'put'>
        <b-form-group
        id="input-group-2"
        label="Password"
        label-for="input-2"
        class="text-left label"
        >
          <div>
            <b-form-input
            id="input-2"
            v-model="password"
            placeholder="Enter new password"
            type="password"
            data-toggle="password"
            required
            @keypress="onTypePassword"
          ></b-form-input>
          <small class="invalid"> {{ passwordError }} </small>
          </div> <br><br>
          <div>
            <b-form-input
            id="input-3"
            v-model="confirmPassword"
            placeholder="Confirm new password"
            type="password"
            data-toggle="password"
            required
            @keyup="onTypeConfirmPassword"
          ></b-form-input>
          <small class="invalid" > {{ confirmPasswordError }}</small>
          </div>
          <br>
        </b-form-group>
        <div >
        <b-button type="submit" class="button" block variant="dark" >
          Change Password</b-button>
        </div>
      </b-form>
      </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'ResetPassword',
  data() {
    return {
      password: '',
      confirmPassword: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  },
  methods: {
    ...mapActions(['newPassword']),
    resetPassword() {
      console.log(this.$route.params.token);
      const obj = {
        password: this.password,
        confirmPassword: this.confirmPassword,
        token: this.$route.params.token,
      };
      this.newPassword(obj);
      this.$router.push('/resetSuccessful');
    },
    onTypePassword() {
      this.passwordError = '';
      const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/;
      if (!re.test(this.password)) {
        this.passwordError = 'password should be at least 7 chanracters with a lowercase, uppercase letter and number';
        // document.querySelector('button').enabled = true;
      }
    },
    onTypeConfirmPassword() {
      this.confirmPasswordError = '';
      if (this.password !== this.confirmPassword) {
        this.confirmPasswordError = 'Password must match';
      } else {
        this.confirmPasswordError = 'All good';
      }
    },
  },
};
</script>

<style scoped>
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
  /* background-color: ; */
  background: #7557D3;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 45px;
  border: none;
  margin-bottom: 12px;
  /* line-height: 19px; */
}
a {
  text-decoration-line: underline;
}
input {
  border: 1.5px solid #BDBDBD;
  box-sizing: border-box;
  border-radius: 4px;
  /* height: 48px;
  width: 379px; */
}
</style>
