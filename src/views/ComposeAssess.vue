<template>
  <div class="body-all">
    <div>
      <AdminSideBar/>
    </div>
        <div class="body-right">
            <h1>Compose Assessment</h1>
            <b-form @submit.prevent="onSubmit" enctype="multipart/form-data">
                <div class="right-wrapper-one">
                <div class="right-wrapper-left">
                    <p>1/5</p>
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
                        :helpText="'+ Choose file'"
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
                    <!-- <button>+ Choose file</button> -->
                </div>
            </div>
            <div class="instruction">
                <label>Questions</label>
                <b-form-input
                  v-model="form.title"
                  class="instruction-input">
                </b-form-input>
            </div>

            <div class="right-wrapper-two">
                <div class="right-wrapper-two-left">
                    <label>Option A</label>
                <b-form-input
                    v-model="form.optionA"
                    id="inline-form-input-optiona"
                    class="input"
                    @dblclick="makeCorrect(form.optionA)">
                </b-form-input>
                </div>
                <div class="right-wrapper-two-right">
                    <label>Option B</label>
                <b-form-input
                    v-model="form.optionB"
                    id="inline-form-input-optionb"
                    class="input"
                    @dblclick="makeCorrect(form.optionB)">
                </b-form-input>
                </div>
            </div>

            <div class="right-wrapper-three">
                <div class="right-wrapper-three-left">
                    <label>Option C</label>
                <b-form-input
                    v-model="form.optionC"
                    id="inline-form-input-closuredate"
                    class="input"
                    @dblclick="makeCorrect(form.optionC)">
                </b-form-input>
                </div>
                <div class="right-wrapper-three-right">
                    <label>Option D</label>
                <b-form-input
                    v-model="form.optionD"
                    id="inline-form-input-batchid"
                    class="input"
                    @dblclick="makeCorrect(form.optionD)">
                </b-form-input>
                </div>
            </div>
            <div class="right-wrapper-four">
            <b-button class="toggle">Previous</b-button>
            <b-button class="toggle">Next</b-button>
            </div>

            <div class="btn d-flex">
                <b-button id="button" type="submit">Finish</b-button>
            </div>
            </b-form>
        </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/AdminSideBar.vue';
import { mapActions } from 'vuex';

export default {
  name: 'ComposeAssessment',
  components: {
    AdminSideBar,
  },
  data() {
    return {
      form: {
      },
      correctAnswer: '',
      selectedAnswer: false,
      deleteClicked: false,
      photo: '',
      fileRecordsPhoto: [],
      uploadUrl: 'https://enyata-recruitment-portal.herokuapp.com/upload', // change this to the backend endpoint on heroku
      uploadHeaders: { 'X-Test-Header': 'vue-file-agent' },
      fileRecordsForPhoto: [],
    };
  },
  methods: {
    ...mapActions(['createQuestion']),
    addClass() {
      this.selectedAnswer = !this.selectedAnswer;
    },
    makeCorrect(selected) {
      this.correctAnswer = selected;
      this.selectedAnswer = true;
      console.log(this.correctAnswer);
    },
    onSubmit() {
      console.log(this.correctAnswer);
      const payload = { ...this.form, correctAnswer: this.correctAnswer };
      this.createQuestion(payload);
      this.form = {
        title: '',
        photo: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: '',
      };
    },
    photosSelected(fileRecordsNewlySelected) {
      const validFileRecords = fileRecordsNewlySelected.filter((fileRecord) => !fileRecord.error);
      this.form.photo = validFileRecords[0].file;
    },
  },
};
</script>

<style scoped>
.red {
  background-color: red;
}
.green {
    background-color: #31D283;;
}
/* .green input[type=text] {
  background-color: #3CBC8D;
  color: white;
} */
.body-all{
    display: flex;
    min-height: 100vh;
}
.body-right{
    margin-left: 47px;
    margin-top: 60px;
}
h1{
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
color: #2B3C4E;
letter-spacing: -0.02em;
}
.right-wrapper-one{
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
}
.right-wrapper-left button{
    width: 456px;
    height: 108px;
    border: 1.55172px dashed #2B3C4E;
    box-sizing: border-box;
    border-radius: 6.2069px;
    background: #fff;
    font-size: 16px;
    color: #2B3C4E;
}
.right-wrapper-right h2{
    font-weight: 300;
    font-style: normal;
    font-size: 48px;
    color: #2b3c4e;
}
.right-wrapper-right small{
    font-weight: 400;
    font-size: 12px;
    color: #2b3c4e;
}
.instruction{
    justify-content: center;
    margin-top: 25px;
}
label{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #2B3C4E;
}
.input, .instruction-input{
    width: 456px;
    border: 1.5px solid #2B3C4E;
    box-sizing: border-box;
    border-radius: 4px;
    /* margin-right: 80px; */
}
/* .input:hover{
    background: #31d282;
} */
.instruction-input{
    width: 976px;
    height: 166px;
}
.right-wrapper-two, .right-wrapper-three{
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
}
.right-wrapper-four{
    display: flex;
    margin-top: 52px;
    justify-content: space-around;
}
.toggle{
    width: 125px;
    height: 41px;
    border-radius: 4px;
    color: #fff;
    background: #2B3C4E;
}
.btn{
    justify-content: center;
    margin-top: 55px;
    margin-bottom: 97px;
}
#button{
    width: 205px;
    height: 41px;
}
</style>
