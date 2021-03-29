<template>
  <div>
    <b-row no-gutters >
      <b-col cols="3">
        <h2>test this</h2>
        <ApplicantSideBar />
      </b-col>
      <b-col cols="9">
        <b-row no-gutters >
          <b-col cols="8">
            <div class="text-left">
              <h2>Take Assessment</h2>
              <p class="intro-text"><i>Click the finish button below to submit assessment,
                you can go back at any time to edit your answers.</i></p>
            </div>
          </b-col>
          <b-col cols="1"></b-col>
          <b-col cols="3">
            <div class="text-left">
            <p class="timer">Timer</p>
            <h3 >{{ getMinutes(timerCount) }}<span>
              <small>min</small></span> {{ getSeconds(timerCount) }}<span>
                <small>sec</small></span></h3>
            </div>
          </b-col>
        </b-row>
        <b-row no-gutters class="mb-3">
          <b-col cols="3"></b-col>
          <b-col cols="5" class="">
            <h6><i>Question {{ countQuestions }} </i></h6>
            <div>
              <p class="questions"><i>{{ showCurrentQuestion['title']}} </i></p>
              <div class="options text-left">
                <ul class="list-group">
                  <li class="list-group-item d-flex">
                    <input class="check" id="a"
                    @click="getAnswer"
                    type="radio" name="option" aria-label="">
                      <label class="option" for="a">
                      <i>A. {{ showCurrentQuestion['option_a']}}</i></label>
                  </li>
                  <li class="list-group-item d-flex">
                    <input  class="check" id="b" type="radio" name="option"  aria-label="">
                      <label class="option" for="b">
                        <i>B. hello {{ showCurrentQuestion['option_b']}}</i></label>
                  </li>
                  <li class="list-group-item d-flex">
                    <input class="check" id="c" type="radio" name="option" aria-label="">
                      <label class="option" for="c">
                      <i>C. {{ showCurrentQuestion['option_c']}}</i></label>
                  </li>
                  <li class="list-group-item d-flex">
                    <input class="check" id="d" type="radio" name="option" aria-label="">
                      <label class="option" for="d">
                      <i>D. {{ showCurrentQuestion['option_d']}}</i></label>
                  </li>
              </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>
        <b-row no-gutters>
          <b-col cols="3">
            <div>
              <b-button type=""
                v-if="countQuestions === 1"
                @click="prev" disabled
                class="prevBtn" variant="light">
                Previous
                </b-button>
                <b-button type=""
                v-else
                @click="prev"
                class="prevBtn" variant="light">
                Previous
                </b-button>
            </div>
          </b-col>
          <b-col cols="6"></b-col>
          <b-col cols="3">
            <div>
              <b-button type=""
                v-if="countQuestions === getAllQuestions.length"
                @click="next" disabled
                class="quizBtn" variant="light">
                Next
                </b-button>
                <b-button type=""
                v-else
                @click="next"
                class="quizBtn" variant="light">
                Next
                </b-button>
            </div>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-5">
          <b-col cols="3"></b-col>
          <b-col cols="5">
            <div>
              <b-button  v-if="countQuestions === getAllQuestions.length" class="finishBtn"
                type="submit" variant="dark" @click="submitTest">
                Finish
              </b-button>
              <b-button class="finishBtn" v-else
                type="submit" variant="dark" disabled>
                Finish
              </b-button>
            </div>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import ApplicantSideBar from '@/components/ApplicantSideBar.vue';

export default {
  name: 'Questions',
  components: {
    ApplicantSideBar,
  },
  data() {
    return {
      timerCount: 360,
      selected: false,
      selectedAnswer: '',
    };
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount -= 1;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  methods: {
    ...mapActions(['getQuestions', 'selectQuestion', 'prevQuestion', 'nextQuestion', 'selectAnswer']),
    next() {
      this.nextQuestion();
    },
    prev() {
      this.prevQuestion();
    },
    getAnswer() {
      this.select = true;
      // console.log(this.selectedAnswer);
    },
    getMinutes(number) {
      const time = number;
      const minutes = Math.floor(time / 60);
      return `${minutes}`;
    },
    getSeconds(number) {
      const time = number;
      let seconds = time % 60;
      seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${seconds}`;
    },
    submitTest() {
      this.$router.push('/successfulPage');
    },
  },
  computed: {
    ...mapGetters(['getAllQuestions', 'loggedInUser', 'showCurrentQuestion', 'countQuestions', 'currentQuestionIndex']),
  },
};
</script>

<style scoped>
/* .endQuiz {

} */

.timer {
  margin-top: 60px;
  margin-top: 50px;
  margin-bottom: 10px ;
}
h2 {
  font-weight: 300;
  font-size: 48px;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
  margin-top: 50px;
  margin-bottom: 10px ;
}
h3 {
  font-weight: 300;
  font-size: 38px;
  line-height: 58px;
  color: #2B3C4E;
}
.headerText {
  margin-top: 50px;
  margin-bottom: 10px ;
}
h6 {
  margin-top: 64px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #4F4F4F;
}
p {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.intro-text {
  font-style: italic;
  font-weight: 500;
  font-size: 17px;
  line-height: 19px;
  color: #2B3C4E;
  margin-top: 14px;
  margin-bottom: 40px;
}
.check {
  margin-right: 27px;
}
label {
  width: 355px;
  height: 33px;
}
li {
  border: none;
}
.option:hover {
  background-color: #31D283;
  width: 355px;
  height: 33px;
}

/* input[type="radio"]:checked + label {
  background-color: #31D283;
} */
.options {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}
.finishBtn {
  width: 205px;
  height: 40px;
  background: #7557D3;
  border-radius: 4px;
  border: none;
  font-weight: bold;
}
h1 {
  font-weight: 300;
  font-size: 48px;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
h6 {
  margin-top: 30px;
  font-family: Lato;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #2B3C4E;
  margin-bottom: 14px;
}
.questions {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
  margin-bottom: 30px;
}
.quizBtn, .prevBtn {
  width: 125px;
  height: 40px;
  border-radius: 4px;
  background-color: #7557D3;
  color: #fff;
  outline: none;
}
.prevBtn {
  background-color: #fff;
  color: #211F26;
  border: 1px solid rgba(0, 0, 0, 0.25);
  outline: none;
}
 input.active {
  color: red;
}

</style>
