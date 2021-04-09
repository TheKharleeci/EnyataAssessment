<template>
  <div class="body-all">
    <div>
      <AdminSideBar/>
    </div>
        <div class="body-right">
            <h1>Compose Assessment</h1>
            <div class="right-wrapper-one">
                <div class="right-wrapper-left">
                    <!-- <p>15/30</p> -->
                    <p> {{ questionNumber }}/5</p>
                    <button>+ Choose file</button>
                </div>
            </div>
            <b-form>
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
                    :class="{'selected': correctAnswer === form.optionA}"
                    @dblclick="makeCorrect(form.optionA)">
                </b-form-input>
                </div>
                <div class="right-wrapper-two-right">
                    <label>Option B</label>
                <b-form-input
                    v-model="form.optionB"
                    id="inline-form-input-optionb"
                    class="input"
                    :class="{'selected': correctAnswer === form.optionB}"
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
                    :class="{'selected': correctAnswer === form.optionC}"
                    @dblclick="makeCorrect(form.optionC)">
                </b-form-input>
                </div>
                <div class="right-wrapper-three-right">
                    <label>Option D</label>
                <b-form-input
                    v-model="form.optionD"
                    id="inline-form-input-batchid"
                    class="input"
                    :class="{'selected': correctAnswer === form.optionD}"
                    @dblclick="makeCorrect(form.optionD)">
                </b-form-input>
                </div>
            </div>
            </b-form>
            <!-- <div>
                <AssessmentQuestions />
            </div> -->
            <div class="right-wrapper-four">
                <div>
                <b-button class="toggle" v-if="questionNumber === 1"
                disabled>Previous</b-button>
                <b-button class="toggle" v-else @click="previousQuestion">Previous</b-button>
                </div>
                <div>
                <!-- <b-button class="toggle"
                v-if="questionNumber === numberOfSetQuestions.length"
                disabled >Next</b-button> -->
                <!-- <b-button class="toggle" :disabled="questionLength" @click="newQuestion">
                  Next
                </b-button> -->
                <b-button class="toggle" v-if="questionNumber >= 5" disabled>
                  Next
                </b-button>
                <b-button class="toggle" v-else @click="newQuestion">
                  Next
                </b-button>
                </div>
            </div>
            <div class="btn d-flex">
                <b-button id="button" v-if="questionNumber <= 4"
                disabled @click.prevent="onSubmit">Finish</b-button>
                <b-button id="button" v-else @click.prevent="onSubmit">Finish</b-button>
            </div>
        </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/AdminSideBar.vue';
import { mapActions, mapGetters } from 'vuex';
// import AssessmentQuestions from '@/components/AssessmentQuestions.vue';

export default {
  name: 'ComposeAssessment',
  components: {
    AdminSideBar,
    // AssessmentQuestions,
  },
  data() {
    return {
      form: {
      },
      correctAnswer: '',
      selectedAnswer: false,
      deleteClicked: false,
    };
  },
  methods: {
    ...mapActions(['createQuestion', 'setNewQuestion', 'showPrevQuestion']),
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
      // const payload = { ...this.form, correctAnswer: this.correctAnswer };
      this.newQuestion();
      const data = this.viewQuestions;
      console.log(data);
      this.createQuestion(data);
      // this.form = {
      //   title: '',
      //   optionA: '',
      //   optionB: '',
      //   optionC: '',
      //   optionD: '',
      //   correctAnswer: '',
      // };
    },
    newQuestion() {
      const payload = { ...this.form, correctAnswer: this.correctAnswer };
      this.setNewQuestion(payload);
      this.form = {
        title: '',
        optionA: '',
        optionB: '',
        optionC: '',
        optionD: '',
        correctAnswer: null,
      };
    },
    previousQuestion() {
      this.showPrevQuestion();
    },
  },
  watch: {
    // questionNumber: {
    //   handler() {
    //     if (this.questionNumber > 5) {
    //       this.questionNumber = 5;
    //     }
    //   },
    // },
    // questionNumber(newCount, oldCount) {
    //   if (newCount >= 6) {
    // this.questionNumber = oldCount;
    // this.$set(this.questionNumber, oldCount);
    //   }
    //   console.log('new', newCount);
    //   console.log('old', oldCount);
    // },
    showCurrentSetQuestion: {
      deep: true,
      handler() {
        if (this.showCurrentSetQuestion) {
          this.form = { ...this.showCurrentSetQuestion };
        }
      },
    },
  },
  computed: {
    ...mapGetters(['numberOfSetQuestions', 'questionNumber', 'showCurrentSetQuestion', 'viewQuestions']),
  },
};
</script>

<style scoped>
.red {
  background-color: red;
}
.selected {
  background-color: #31D283;
  color: #000;
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
    margin-bottom: 20px;
    justify-content: space-around;
}
.toggle{
    width: 125px;
    height: 41px;
    border-radius: 4px;
    color: #fff;
    background:  #7557D3;
}
.btn{
    justify-content: center;
    /* margin-top: 55px; */
    /* margin-bottom: 97px; */
}
#button{
    width: 205px;
    height: 41px;
}
</style>
