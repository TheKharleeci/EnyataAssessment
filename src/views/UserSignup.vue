<template>
  <div class="container">
    <div class="header">
      <div class="sub-header">
        <!-- <img src="../assets/new_logo.svg" alt="logo"> -->
        <h3>Applicant Sign Up</h3>
      </div>
    </div>
    <b-form @submit.prevent="onSubmit">
      <div class="form-wrapper">
              <div class="form-child-1">
              <label>First Name</label>
              <b-form-input
                  id="inline-form-input-name"
                  class="input"
                  type="text"
                  v-model="form.firstName"
                  placeholder="">
              </b-form-input>
          </div>

          <div class="form-child-2">
              <label>Last Name</label>
              <b-form-input
                  class="input"
                  id="inline-form-input-lastname"
                  v-model="form.lastName"
                  type="text"
                  placeholder="">
              </b-form-input>
          </div>
      </div>

      <div class="form-wrapper-2">
          <div class="form-child-1">
              <label>Email Address</label>
              <b-form-input
              id="inline-form-input-email"
              class="input"
              type="email"
              v-model="form.email"
              placeholder="">
              </b-form-input>
              </div>
          <div class="form-child-2">
              <label>Phone Number</label>
              <b-form-input
              id="inline-form-input-phonenumber"
              class="input"
              v-model="form.phoneNumber"
              placeholder="">
              </b-form-input>
          </div>
      </div>

      <div class="form-wrapper-2">
          <div class="form-child-1">
              <label>Password</label>
              <b-form-input
              id="inline-form-input-password"
              class="input"
              v-model="form.password"
              type="password"
              placeholder=""
              ><b-form-input-append is-text>
              <b-icon icon="eye-fill" aria-hidden="true" style="font-size:24px, color:gray;">
              </b-icon>
              </b-form-input-append>
              </b-form-input>
          </div>
          <div class="form-child-2">
              <label>Confirm Password</label>
              <b-form-input
              id="inline-form-input-confirmpassword"
              class="input"
              type="password"
              v-model="form.confirmPassword"
              placeholder="">
              <b-input-group-prepend is-text>
              <b-icon icon="eye-fill" aria-hidden="true" style="font-size:24px, color:gray;">
              </b-icon>
              </b-input-group-prepend>
              </b-form-input>
          </div>
      </div>
      <div class="signup-bottom">
      <!-- <router-link :to = "{dashboard: '/dashboard'}"> -->
      <b-button type="submit" block variant="light" id="signup">
          Sign Up</b-button>
          <!-- </router-link> -->
      <br/>
      <p class="signup-footer">
          Already have an account? <a href="#">Sign in</a>
      </p>
      </div>
    </b-form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'UserSignUp',
  data() {
    return {
      form: {
      },
    };
  },
  methods: {
    ...mapActions(['userSignUp']),
    onSubmit() {
      this.userSignUp(this.form);
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      };
    },
  },
  watch: {
    registeredUsers: {
      deep: true,
      handler() {
        // this.isLoading = false;
        this.$router.push('/userLogin');
      },
    },
  },
  computed: {
    ...mapGetters(['registeredUsers', 'currentApplicant']),
  },
};
</script>

<style scoped>
.header{
    margin: 0 auto;
    padding-top: 100px;
}
.sub-header{
    text-align: center;
}
.sub-header h3{
    font-style: italic ;
    font-size: 24px;
    font-weight: 500;
    padding-top: 24px;
    color: #2b3c4e;
}
.sub-header h1{
   font-style: normal;
   font-weight: 700;
   font-size: 31.4px;
}
.signup-footer{
    text-align: center;
    color: #4F4F4F;
    font-size: 14px;
    font-style: italic;
    margin-top: -15px;
}
.signup-footer a{
    color: #4F4F4F;
}
#signup{
    margin-top: 44px;
    height: 50px;
    background: #7557d3;
    color: #fff;
    border-radius: 4px;
}
.form-wrapper {
    margin-top: 78px;
}
.form-wrapper-2, .form-wrapper {
    display: flex;
    justify-content: center;
    gap: 62px;
}
.form-wrapper-2{
    margin-top: 29px;
}
.form-child-1,.form-child-2 {
    margin: 0px 10px;
}
.form-child-1 label, .form-child-2 label{
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: #4F4F4F;
}
.signup-bottom{
    width: 520px;
    text-align: center;
    margin: auto;
}
.input{
    width: 379px;
    border: 1.5px solid #bdbdbd;
    height: 48px;
    border-radius: 4px;
    box-sizing: border-box;
}
label{
    font-size: 14px;
    color: #4F4F4F;
    font-weight: normal;
    font-style: normal;
}
</style>
