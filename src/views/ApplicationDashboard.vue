<template>
    <div class="container">
        <div class="header">
            <div class="sub-header">
            <img src="../assets/enyatalogo.svg" alt="logo">
            <h3>Application Form</h3>
            </div>
        </div>
        <div class="form-body">
            <b-form enctype="multipart/form-data">
                <div class="uploads">
                <div class="body-upload-1">
                      <VueFileAgent
                        ref="vueFileAgent"
                        :theme="'list'"
                        :multiple="false"
                        :deletable="false"
                        :meta="true"
                        :accept="'.pdf, .doc'"
                        :maxSize="'2MB'"
                        :maxFiles="1"
                        :helpText="'+ Upload CV'"
                        :errorText="{
                          type: 'Invalid file type. Only .doc, .pdf Allowed',
                          size: 'Files should not exceed 2MB in size',
                        }"
                        @select="filesSelected($event)"
                        @beforedelete="onBeforeDelete($event)"
                        @delete="fileDeleted($event)"
                        v-model="fileRecordsCV">
                      </VueFileAgent>
                </div>

                <div class="body-upload-2">
                <VueFileAgent
                        ref="vueFileAgent"
                        :theme="'list'"
                        :multiple="false"
                        :deletable="false"
                        :meta="true"
                        :accept="'.jpg, .png'"
                        :maxSize="'2MB'"
                        :maxFiles="1"
                        :helpText="'+ Upload Photo'"
                        :errorText="{
                          type: 'Invalid file type. Only .jpg, .png Allowed',
                          size: 'Files should not exceed 2MB in size',
                        }"
                        @select="photosSelected($event)"
                        @beforedelete="onBeforeDelete($event)"
                        @delete="fileDeleted($event)"
                        v-model="fileRecordsPhoto">
                      </VueFileAgent>
                </div>
                </div>

                <div class="form-wrapper">
                    <div class="form-child-1">
                        <label>First Name</label>
                        <b-form-input id="inline-form-input-firstname" class="input"
                        type="text" v-model="form.firstName">{{users.firstName}}
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>Last Name</label>
                        <b-form-input class="input" v-model="form.lastName"
                            id="inline-form-input-lastname" type="text">{{users.lastName}}
                        </b-form-input>
                    </div>
                </div>

                <div class="form-wrapper-2">
                    <div class="form-child-1">
                        <label>Email</label>
                        <b-form-input id="inline-form-input-email"
                            class="input" type="email" v-model="form.email"> {{users.email}}
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>Date of Birth</label>
                        <b-form-input
                            id="inline-form-input-phonenumber"
                            class="input" type="text" v-model="form.dob">
                            <!--v-model.lazy="$v.dob.$model"
                            :class="{ 'is-invalid': $v.dob.$error,
                            'is-valid': !$v.dob.$invalid }"-->
                        </b-form-input>
                        <!--div class="valid-feedback">Date of birth is valid</div>
                        <div class="invalid-feedback">
                          <span v-if="!$v.dob.required">
                            Date of birth is required.</span>
                          <span v-if="!$v.dob.alphaNum">
                            Date of birth should be format mm-dd-yyyy</span>
                      </div-->
                    </div>
                </div>

                <div class="form-wrapper-2">
                    <div class="form-child-1">
                        <label>Address</label>
                        <b-form-input
                            id="inline-form-input-address"
                            class="input" type="text" v-model="form.address">
                        </b-form-input>
                    </div>
                    <div class="form-child-2">
                        <label>University</label>
                        <b-form-input
                            id="inline-form-input-university"
                            class="input" type="text" v-model="form.university">
                        </b-form-input>
                    </div>
                </div>

                <div class="form-wrapper-2">
                    <div class="form-child-1">
                        <label>Course of Study</label>
                        <b-form-input
                            id="inline-form-input-course"
                            class="input" type="text" v-model="form.course">
                        </b-form-input>
                        <!--div class="valid-feedback">Course of study is valid</div>
                        <div class="invalid-feedback">
                          <span v-if="!$v.course.required">
                            Course of study is required.</span>
                            <span v-if="!$v.course.minLength">
                              Course of study must have at least
                        {{$v.course.$params.minLength.min}} letters.</span>
                          <span v-if="!$v.course.maxLength">
                              Course of study must have at most
                        {{$v.course.params.maxLength.max}} letters.</span>
                      </div-->
                    </div>
                    <div class="form-child-2">
                        <label>CGPA</label>
                        <b-form-input
                            id="inline-form-input-cgpa"
                            class="input" type="text" v-model="form.cgpa">
                            <!--v-model.lazy="$v.cgpa.$model"
                            :class="{ 'is-invalid': $v.cgpa.$error,
                            'is-valid': !$v.cgpa.$invalid }"-->
                        </b-form-input>
                        <!--div class="valid-feedback">CGPA is valid</div>
                        <div class="invalid-feedback">
                          <span v-if="!$v.cgpa.required">
                            CGPA is required.</span>
                          <span v-if="!$v.cgpa.decimal">
                            CGPA should be format 5.00</span>
                      </div-->
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
  required, minLength, maxLength, decimal, alphaNum,
} from 'vuelidate/lib/validators';

export default {
  name: 'DashboardForm',
  data() {
    return {
      fileRecordsCV: [],
      fileRecordsPhoto: [],
      uploadUrl: 'http://localhost:3000/upload', // change this to the backend endpoint on heroku
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
      fileRecordsForCV: [],
      fileRecordsForPhoto: [],
      form: {
      },
      error: {},
      valid: true,
      users: {},
    };
  },
  validations: {
    dob: {
      required, alphaNum,
    },
    address: {
      required, minLength: minLength(3), maxLength: maxLength(100), alphaNum,
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
        photo: '',
        agreement: false,
      };
    },
    watch: {
      getUserDetail: {
        deep: true,
        handler() {
          // this.isLoading = false;
          this.$router.push('/client');
        },
      },
    },
    loadUserDetail(response) {
      this.autoGetDetail(this.users = response);
    },
    save() {
      this.agreement = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        return;
      }
      console.log('form submitted');
      this.$router.push('/dashboard');
    },
    filesSelected(fileRecordsNewlySelected) {
      console.log(fileRecordsNewlySelected);
      const validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
      this.form.cv = validFileRecords[0].file;
      console.log(validFileRecords);
      console.log(this.form.cv);
    },
    photosSelected(fileRecordsNewlySelected) {
      const validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
      this.form.photo = validFileRecords[0].file;
    },
  },
  computed: {
  },
  // mounted() {
  //   this.loadUserDetail();
  // },
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
