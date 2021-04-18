<template>
  <div class="container">
    <div class="header">
      <div class="sub-header">
        <img src="../assets/enyatalogo.svg" alt="logo">
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
                  placeholder=""
                  @keydown="onTypeFirstName">
              </b-form-input>
              <small class="invalid"> {{ firstNameError }} </small>
          </div>

          <div class="form-child-2">
              <label>Last Name</label>
              <b-form-input
                  class="input"
                  id="last"
                  v-model="form.lastName"
                  type="text"
                  placeholder=""
                  @keydown="onTypeLastName">
              </b-form-input>
              <small class="invalid"> {{ lastNameError }} </small>
          </div>
      </div>

      <div class="form-wrapper-2">
          <div class="form-child-1">
              <label>Email Address</label>
              <b-form-input
              id="inline-form-input-email"
              class="input"
              v-model="form.email"
              @keydown="onTypeEmail"
              placeholder="">
              </b-form-input>
              <small class="invalid"> {{ emailError }} </small>

              </div>
          <div class="form-child-2">
              <label>Phone Number</label>
              <b-form-input
              type = "tel"
              id="inline-form-input-phonenumber"
              class="input"
              v-model="form.phoneNumber"
              @keyup="onTypeNumber"
              placeholder="">
              </b-form-input>
              <small class="invalid"> {{ phoneNoError }} </small>
          </div>
      </div>

      <div class="form-wrapper-2">
          <div class="form-child-1">
              <label>Password</label>
              <b-form-input
              id="password"
              class="input"
              v-model="form.password"
              type="password"
              @keydown="onTypePassword"
              placeholder=""
              ><b-form-input-append is-text>
              <p></p>
              <b-icon icon="eye-fill" aria-hidden="true" style="font-size:24px, color:gray;">
              </b-icon>
              </b-form-input-append>
              </b-form-input>
              <br>
              <small class="invalid"><span>{{ passwordError }}</span> </small>
          </div>
          <div class="form-child-2">
              <label>Confirm Password</label>
              <b-form-input
              id="confirmpassword"
              class="input"
              type="password"
              v-model="form.confirmPassword"
              @keydown="onTypeConfirmPassword"
              placeholder="">
              <b-input-group-prepend is-text>
              <b-icon icon="eye-fill" aria-hidden="true" style="font-size:24px, color:gray;">
              </b-icon>
              </b-input-group-prepend>
              </b-form-input>
              <small class="invalid" > {{ confirmPasswordError }}</small>
          </div>
      </div>
      <div class="signup-bottom">
      <!-- <router-link :to = "{dashboard: '/dashboard'}"> -->
      <b-button type="submit" block variant="light" id="signup" >
          Sign Up</b-button>
          <!-- </router-link> -->
      <br/>
      <p class="signup-footer">
          Already have an account? <a :href="'/userLogin'">Sign in</a>
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
      passwordError: '',
      confirmPasswordError: '',
      phoneNoError: '',
      emailError: '',
      firstNameError: '',
      lastNameError: '',
    };
  },
  methods: {
    ...mapActions(['userSignUp']),
    onTypeFirstName() {
      this.firstNameError = '';
      if (this.form.firstName === undefined) {
        this.firstNameError = 'First name is required';
      } else if (this.form.firstName !== undefined && this.form.firstName.length < 3) {
        this.firstNameError = 'First name length should be greater than 3';
      }
    },
    onTypeLastName() {
      this.lastNameError = '';
      if (this.form.lastName === undefined || this.form.lastName === '') {
        this.lastNameError = 'last name is required';
      } else if (this.form.lastName !== undefined && this.form.lastName.length < 3) {
        this.lastNameError = 'last name length should be greater than 3';
      }
    },
    onTypePassword() {
      this.passwordError = '';
      const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}/;
      if (!re.test(this.form.password)) {
        this.passwordError = 'Password should contain at least 7 characters ';
      } else {
        document.getElementById('signup').disabled = false;
        // $('#signup').prop('disabled', false);
        document.getElementById('confirmpassword').disabled = false;
      }
    },
    // Recheck this one...
    onTypeConfirmPassword() {
      this.confirmPasswordError = '';
      if (this.form.confirmPassword === this.form.password) {
        this.confirmPasswordError = 'All good';
      } else {
        this.confirmPasswordError = 'Password must match';
      }
    },
    onTypeEmail() {
      this.emailError = '';
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if (!re.test(this.form.email)) {
        this.emailError = 'Please enter a valid email';
      }
    },
    onTypeNumber() {
      this.phoneNoError = '';
      const reg = new RegExp('^[0-9]+$');
      if (this.form.phoneNumber.length < 11 || !reg.test(this.form.phoneNumber)) {
        this.phoneNoError = 'Phone number should be at least 11 digits';
      }
    },
    // onType() {
    //   this.passwordError = '';
    //   this.confirmPasswordError = '';
    //   this.phoneNoError = '';
    //   this.emailError = '';
    //   this.firstNameError = '';
    //   this.lastNameError = '';

    //   // if (this.form.password.length < 7) {
    //   //   this.passwordError = 'Please make sure your password is at least 7 characters.';
    //   // }
    //   if (this.form.firstName === undefined) {
    //     this.firstNameError = 'First name is required';
    //   }
    //   if (this.form.lastName === undefined) {
    //     this.lastNameError = 'Last name is required';
    //   }
    //   if (this.form.password !== this.form.confirmPassword) {
    //     this.confirmPasswordError = 'Password must be the same.';
    //   }
    //   // if (this.form.phoneNumber.length < 11) {
    //   //   this.phoneNoError = 'Phone number should be at least 11 digits';
    //   // }
    //   // const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@
    //   // ((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]
    // {2,}))$/;
    //   // if (!re.test(this.form.email.toLowerCase())) {
    //   //   this.emailError = 'Please enter a valid email';
    //   // }
    //   const errors = [this.passwordError, this.confirmPasswordError,
    //     this.phoneNoError, this.emailError, this.firstNameError, this.lastNameError];
    //   for (let i = 0; i < errors.length; i += 1) {
    //     if (errors[i]) {
    //       // console.log(" there's an error");
    //       return;
    //     }
    //   }
    //   // this.userSignUp(this.form);
    //   // this.form = {
    //   //   firstName: '',
    //   //   lastName: '',
    //   //   email: '',
    //   //   phoneNumber: '',
    //   //   password: '',
    //   //   confirmPassword: '',
    //   // };
    //   console.log('hello');
    // },
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
.container {
  text-align: left;
}
.invalid {
  font-size: 15px;
  color: red;
  /* margin-top: 20px;
  margin-bottom: 20px; */
}
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
    margin-top: 64px;
    height: 50px;
    background: #7557d3;
    color: #fff;
    border-radius: 4px;
}
.form-wrapper {
    margin-top: 78px;
    height: 100px;
}
.form-wrapper-2, .form-wrapper {
    display: flex;
    justify-content: center;
    gap: 62px;
    height: 100px;
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
input:focus {
  border-color: #ced4da;
  box-shadow: none;
  outline: none;
}
</style>
