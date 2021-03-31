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
<b-form-input id="inline-form-input-name"
class="input" type="text" v-model.lazy="$v.firstName.$model"
:class="{ 'is-invalid': $v.firstName.$error,
'is-valid': !$v.firstName.$invalid }">
</b-form-input>
<div class="valid-feedback">Your first name is valid</div>
<div class="invalid-feedback">
<span v-if="!$v.firstName.required">
First name is required.</span>
<span v-if="!$v.firstName.minLength">
First name must have at least
{{$v.firstName.$params.minLength.min}} letters.</span>
<span v-if="!$v.firstName.maxLength">
First name must have at most
{{$v.firstName.params.maxLength.max}} letters.</span>
<span v-if="!$v.firstName.alpha">
First name should be alphabet.</span>
</div>
</div>

<div class="form-child-2">
<label>Last Name</label>
<b-form-input class="input" id="inline-form-input-lastname"
type="text" v-model.lazy="$v.lastName.$model" :class="{
'is-invalid': $v.lastName.$error, 'is-valid': !$v.lastName.$invalid }">
</b-form-input>
<div class="valid-feedback">Your last name is valid</div>
<div class="invalid-feedback">
<span v-if="!$v.lastName.required">
Last name is required.</span>
<span v-if="!$v.lastName.minLength">
Last name must have at least
{{$v.lastName.$params.minLength.min}} characters.</span>
<span v-if="!$v.lastName.maxLength">
Last name must have at most
{{$v.lastName.params.maxLength.max}} characters.</span>
<span v-if="!$v.lastName.alpha">
Last name should be alphabet.</span>
</div>
</div>
</div>

<div class="form-wrapper-2">
<div class="form-child-1">
<label>Email Address</label>
<b-form-input id="inline-form-input-email" class="input"
type="email" v-model.lazy="$v.email.$model" :class="{
'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid }">
</b-form-input>
<div class="valid-feedback">Your email is valid</div>
<div class="invalid-feedback">
<span v-if="!$v.email.required">
Email is required.</span>
<span v-if="!$v.email.email">
Email is not a properly formatted email address</span>
</div>
</div>
<div class="form-child-2">
<label>Phone Number</label>
<b-form-input id="inline-form-input-phonenumber" class="input"
type="text" v-model.lazy="$v.phoneNumber.$model" :class="{
'is-invalid': $v.phoneNumber.$error, 'is-valid': !$v.phoneNumber.$invalid }">
</b-form-input>
<div class="valid-feedback">Your phone number is valid</div>
<div class="invalid-feedback">
<span v-if="!$v.phoneNumber.required">
Phone number is required.</span>
<span v-if="!$v.phoneNumber.numeric">
Phone number must be numeric.</span>
<span v-if="!$v.phoneNumber.minLength">
Phone number must have at least
{{$v.phoneNumber.$params.minLength.min}} letters.</span>
<span v-if="!$v.phoneNumber.maxLength">
Phone number must have at most
{{$v.phoneNumber.params.maxLength.max}} letters.</span>
</div>
</div>
</div>

<div class="form-wrapper-2">
<div class="form-child-1">
<label>Password</label>
<b-form-input id="inline-form-input-password" class="input"
 :type="showPassword ? 'text' : 'password'" v-model.lazy="$v.password.$model" :class="{
'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }">
</b-form-input>
<span @click="togglePassword" v-show='showPassword'>
<i class="fas fa-eye-slash"></i>
</span>
<span @click="togglePassword" v-show="!showPassword">
<i class="fas fa-eye"></i>
</span>
<div class="valid-feedback">Your password is valid</div>
<div class="invalid-feedback">
<span v-if="!$v.password.required">
Password is required.</span>
<span v-if="!$v.password.minLength">
Password must have at least
{{$v.password.$params.minLength.min}}characters.</span>
</div>
</div>
<div class="form-child-2">
<label>Confirm Password</label>
<b-form-input id="inline-form-input-confirmpassword" class="input"
type="password" v-model.lazy="$v.confirmPassword.$model" :class="{
'is-invalid': $v.confirmPassword.$error,
'is-valid': !$v.confirmPassword.$invalid }">
</b-form-input>
<div class="valid-feedback">Your password is valid</div>
<div class="invalid-feedback">
<span v-if="!$v.confirmPassword.sameAsPassword">
Password must be same.</span>
</div>
</div>

</div>
<div class="signup-bottom">
<b-button type="submit" block variant="light" id="signup"
@click.prevent="save">
Sign Up</b-button>
<br/>
<p class="signup-footer">
Already have an account? <a :href="'/userlogin'">Sign in</a>
</p>
</div>
</b-form>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import {
  required, minLength, maxLength, sameAs, email, numeric, alpha,
} from 'vuelidate/lib/validators';

export default {
  name: 'UserSignUp',
  data() {
    return {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: '',
      form: {},
      agreement: false,
      showPassword: false,
    };
  },
  validations: {
    firstName: {
      required, minLength: minLength(3), maxLength: maxLength(100), alpha,
    },
    lastName: {
      required, minLength: minLength(3), maxLength: maxLength(100), alpha,
    },
    email: {
      required, email,
    },
    phoneNumber: {
      required, numeric, minLength: minLength(11), maxLength: maxLength(11),

    },
    password: {
      required, minLength: minLength(7),
    },
    confirmPassword: {
      sameAsPassword: sameAs('password'),
    },

  },
  methods: {
    togglePassword() {
      this.showPassword = true;
    },
    save() {
      this.agreement = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.onSubmit();
      console.log('form submitted');
      // this.$router.push('/userLogin');
    },
    ...mapActions(['userSignUp']),
    onSubmit() {
      const form = {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        phoneNumber: this.phoneNumber,
        password: this.password,
        confirmPassword: this.confirmPassword,
      };
      this.userSignUp(form);
      console.log(this.form);
    },
    // method from store
  },
  watch: {
    registeredUsers: {
      deep: true,
      handler() {
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
text-decoration: none;
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
.invalid-feedback{
color: red;
}
.valid-feedback{
color: green;
}
.fas {
    cursor:pointer;
    }
</style>
