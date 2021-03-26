<template>
    <div class="container">
        <div class="header">
            <div class="sub-header">
            <img src="../assets/new_logo.svg" alt="logo">
            <h3>Application Form</h3>
            </div>
        </div>
        <div class="form-body">
            <b-form enctype="multipart/form-data">
                <div class="uploads">
                <div class="body-upload-1">
                    <button class="upload-cv">
                    <input type="file" @change="onFileSelected"
                    ref="fileInput"> + Upload CV
                    </button>
                </div>

                <div class="body-upload-2">
                <button class="upload-cv">
                    <input type="file" :class="{'is-invalid': $v.selectedPhoto.$error}"
                    @change="onPhotoSelected" accept="image/png, image/jpeg"
                    ref="photoInput"> + Upload Photo</button>
                </div>
                </div>

                <div class="form-wrapper">
                    <div class="form-child-1">
                        <label>First Name</label>
                        <b-form-input id="inline-form-input-firstname" class="input"
                        type="text" v-model="form.firstName">
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>Last Name</label>
                        <b-form-input class="input" v-model="form.lastName"
                            id="inline-form-input-lastname" type="text">
                        </b-form-input>
                    </div>
                </div>

                <div class="form-wrapper-2">
                    <div class="form-child-1">
                        <label>Email</label>
                        <b-form-input id="inline-form-input-email"
                            class="input" v-model="form.email" type="email">
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>Date of Birth</label>
                        <b-form-input
                            id="inline-form-input-phonenumber"
                            class="input" v-model="form.dob"
                            placeholder="">
                        </b-form-input>
                    </div>
                </div>

                <div class="form-wrapper-2">
                    <div class="form-child-1">
                        <label>Address</label>
                        <b-form-input
                            id="inline-form-input-address"
                            class="input" v-model="form.address"
                            placeholder=""
                            >
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>University</label>
                        <b-form-input
                            id="inline-form-input-university"
                            class="input" v-model="form.university"
                            placeholder=""
                            >
                        </b-form-input>
                    </div>
                </div>

                <div class="form-wrapper-2">
                    <div class="form-child-1">
                        <label>Course of Study</label>
                        <b-form-input
                            id="inline-form-input-course"
                            class="input" v-model="form.courseOfStudy"
                            placeholder="">
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>CGPA</label>
                        <b-form-input
                            id="inline-form-input-cgpa"
                            class="input" v-model="form.cgpa"
                            placeholder="">
                        </b-form-input>
                    </div>
                </div>
            <div class="submit-bottom">
            <b-button block variant="light" id="signup" @click="applicantRegister">
                Submit</b-button>
            </div>
        </b-form>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import {
  required, minLength, maxLength, decimal, email, alphaNum,
} from 'vuelidate/lib/validators';

export default {
  name: 'DashboardForm',
  data() {
    return {
      selectedFile: null,
      selectedPhoto: null,
      form: {
      },
    };
  },
  validations: {
    selectedPhoto: {
      required,
    },
    firstName: {
      required, minLength: minLength(3), maxLength: maxLength(100),
    },
    lastName: {
      required, minLength: minLength(3), maxLength: maxLength(100),
    },
    email: {
      required, email,
    },
    dob: {
      required, alphaNum,
    },
    address: {
      required, minLength: minLength(3), maxLength: maxLength(100),
    },
    university: {
      required,
    },
    course: {
      required, minLength: minLength(3), maxLength: maxLength(100),
    },
    cgpa: {
      required, decimal,
    },
  },
  methods: {
    ...mapActions(['getUserDetail']),
    applicantRegister() {
      console.log(this.form);
      this.getUserDetail(this.form);
      this.form = {
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        address: '',
        university: '',
        courseOfStudy: '',
        cgpa: '',
        cv: '',
        agreement: false,
      };
      this.agreement = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      this.$router.push('/assessment');
    },
    onFileSelected(event) {
      const { files: [file] } = event.target;
      this.form.selectedFile = file;
      // console.log(file);
    },
    onPhotoSelected(event) {
      const { files: [file] } = event.target;
      if (!file.length) {
        return;
      }
      this.form.selectedPhoto = file;
    },
  },
  computed: {

  },
};
</script>

<style scoped>
.header{
    margin: 0 auto;
    padding-top: 20px;
}
.sub-header{
    text-align: center;
}
.sub-header h3{
    font-style: italic ;
    font-size: 24;
    font-weight: 500;
    padding-top: 28px;
}
.sub-header h1{
    font-style: normal;
    font-weight: 700;
    font-size: 31.4px;
}
.form-body{
    background: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    /* margin-top: 26px;
    margin-bottom: 50px; */
    margin: 30px auto;
    height: 643px;
    width: 963px;
}
.uploads{
    padding-top: 53px;
    display: flex;
    justify-content: center;
    gap: 32px;
}
.upload-cv{
    height: 50px;
    width: 211px;
    border: 1.5px dashed #2b3c4e;
    box-sizing: border-box;
    border-radius: 2.77px;
    text-align: center;
    margin: auto;
    background-color: #fff;
}
.form-wrapper {
    margin-top: 54px;
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
.input{
    width: 379px;
    border: 1.5px solid #2b3c4e;
}
#signup{
    width: 379px;
    height: 50px;
    text-align: center;
    margin: auto;
    color: #fff;
    background: #7557d3;
}
.submit-bottom{
    margin-top: 50px;
    margin-bottom: 39px;
}
</style>
