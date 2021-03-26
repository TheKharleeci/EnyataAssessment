<template>
    <div class="container">
        <div class="header">
            <div class="sub-header">
            <img src="../assets/new_logo.svg" alt="logo">
            <h3>Applicant Sign Up</h3>
            </div>
        </div>
        <b-form>
        <div class="form-wrapper">
            <div class="form-child-1">
                <label>First Name</label>
                <b-form-input id="inline-form-input-name" class="input"
                type="text" v-model.trim="$v.firstName.$model" :class="{
                'is-invalid': $v.firstName.$error, 'is-valid': !$v.firstName.$invalid }">
                <div class="valid-feedback">Your first name is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.firstName.required">First name is required.</span>
                    <span v-if="!$v.firstName.minLength">First name must have at least
                        {{$v.firstName.$params.minLength.min}} letters.</span>
                    <span v-if="!$v.firstName.maxLength">First name must have at most
                        {{$v.firstName.params.maxLength.max}} letters.</span>
                </div>
                </b-form-input>
            </div>

            <div class="form-child-2">
                <label>Last Name</label>
                <b-form-input class="input" id="inline-form-input-lastname"
                    type="text" v-model.trim="$v.lastName.$model" :class="{
                'is-invalid': $v.lastName.$error, 'is-valid': !$v.lastName.$invalid }">
                <div class="valid-feedback">Your last name is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.lastName.required">Last name is required.</span>
                    <span v-if="!$v.lastName.minLength">Last name must have at least
                        {{$v.lastName.$params.minLength.min}} letters.</span>
                    <span v-if="!$v.lastName.maxLength">Last name must have at most
                        {{$v.lastName.params.maxLength.max}} letters.</span>
                </div>
                </b-form-input>
            </div>
        </div>

        <div class="form-wrapper-2">
            <div class="form-child-1">
                <label>Email Address</label>
                <b-form-input id="inline-form-input-email" class="input"
                type="email" v-model.trim="$v.email.$model" :class="{
                'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid }">
                <div class="valid-feedback">Your email is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.email.required">Email is required.</span>
                    <span v-if="!$v.email.email">
                        Email is not a properly formatted email address</span>
                </div>
                </b-form-input>
                </div>
            <div class="form-child-2">
                <label>Phone Number</label>
                <b-form-input id="inline-form-input-phonenumber" class="input"
                type="text" v-model.trim="$v.phoneNumber.$model" :class="{
                'is-invalid': $v.phoneNumber.$error, 'is-valid': !$v.phoneNumber.$invalid }">
                <div class="valid-feedback">Your phone number is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.phoneNumber.required">Phone number is required.</span>
                    <span v-if="!$v.phoneNumber.numeric">Phone number must be numeric.</span>
                    <span v-if="!$v.phoneNumber.minLength">Phone number must have at least
                        {{$v.phoneNumber.$params.minLength.min}} letters.</span>
                    <span v-if="!$v.phoneNumber.maxLength">Phone number must have at most
                        {{$v.phoneNumber.params.maxLength.max}} letters.</span>
                </div>
                </b-form-input>
            </div>
        </div>

        <div class="form-wrapper-2">
            <div class="form-child-1">
                <label>Password</label>
                <b-form-input id="inline-form-input-password" class="input"
                type="password" v-model.trim="$v.password.$model" :class="{
                'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid }">
                <div class="valid-feedback">Your password is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.password.required">Password is required.</span>
                    <span v-if="!$v.password.minLength">Password must have at least
                        {{$v.password.$params.minLength.min}}letters.</span>
                </div>
                <b-form-input-append is-text>
                <b-icon icon="eye-fill" aria-hidden="true" style="font-size:24px, color:gray;">
                </b-icon>
                </b-form-input-append>
                </b-form-input>
            </div>
            <div class="form-child-2">
                <label>Confirm Password</label>
                <b-form-input id="inline-form-input-confirmpassword" class="input"
                type="password" v-model.trim="$v.confirmPassword.$model" :class="{
                'is-invalid': $v.confirmPassword.$error,
                'is-valid': !$v.confirmPassword.$invalid }">
                <div class="valid-feedback">Your password is valid</div>
                <div class="invalid-feedback">
                    <span v-if="!$v.confirmPassword.sameAsPassword">Password must be same.</span>
                </div>
                <b-input-group-prepend is-text>
                <b-icon icon="eye-fill" aria-hidden="true" style="font-size:24px, color:gray;">
                </b-icon>
                </b-input-group-prepend>
                </b-form-input>
            </div>
        </div>
        <div class="signup-bottom">
        <b-button block variant="light" id="signup"
        @click="save">
            Sign Up</b-button>
        <br/>
        <p class="signup-footer">
            Already have an account? <a href="#">Sign in</a>
        </p>
        </div>
        </b-form>
    </div>
</template>

<script>
import {
  required, minLength, maxLength, sameAs, email, numeric,
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
      agreement: false,
    };
  },
  validations: {
    firstName: {
      required, minLength: minLength(3), maxLength: maxLength(100),
    },
    lastName: {
      required, minLength: minLength(3), maxLength: maxLength(100),
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
    save() {
      this.agreement = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log('form submitted');
      this.$router.push('/dashboard');
    },
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

</style>
