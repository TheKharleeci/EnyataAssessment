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
            <!-- <h4>{{ picked }}</h4> -->
            <div>
              <p class="questions">
                <i>{{ showCurrentQuestion['title']}} </i></p>
              <div class="options text-left">
                <ul class="list-group">
                  <li class="list-group-item d-flex">
                    <input class="check"
                    @change="displayRadioValue"
                    :key="'a_' + `${countQuestions}`"
                    :id="'a_' + `${countQuestions}`"
                    :value="showCurrentQuestion['option_a']"
                    v-model="picked"
                    type="radio" name="option" aria-label="">
                      <label class="option" :for="'a_' + `${countQuestions}`">
                      <i>A. <span class="ml-3">{{ showCurrentQuestion['option_a']}}
                        </span></i></label>
                  </li>
                  <li class="list-group-item d-flex">
                    <input  class="check"
                    @change="displayRadioValue"
                    :key="'b_' + `${countQuestions}`"
                    :id="'b_' + `${countQuestions}`"
                    :value="showCurrentQuestion['option_b']"
                    v-model="picked"
                    type="radio" name="option"  aria-label="">
                      <label class="option" :for="'b_' + `${countQuestions}`">
                        <i>B. <span class="ml-3">{{ showCurrentQuestion['option_b']}}
                          </span></i></label>
                  </li>
                  <li class="list-group-item d-flex">
                    <input class="check"
                    @change="displayRadioValue"
                    :key="'c_' + `${countQuestions}`"
                    :id="'c_' + `${countQuestions}`"
                    :value="showCurrentQuestion['option_c']"
                    v-model="picked"
                    type="radio" name="option" aria-label="">
                      <label class="option" :for="'c_' + `${countQuestions}`">
                      <i>C. <span class="ml-3">{{ showCurrentQuestion['option_c']}}
                        </span></i></label>
                  </li>
                  <li class="list-group-item d-flex">
                    <input class="check"
                    @change="displayRadioValue"
                    :key="'d_' + `${countQuestions}`"
                    :id="'d_' + `${countQuestions}`"
                    :value="showCurrentQuestion['option_d']"
                    v-model="picked"
                    type="radio" name="option" aria-label="">
                      <label class="option" :for="'d_' + `${countQuestions}`">
                      <i>D. <span class="ml-3">{{ showCurrentQuestion['option_d']}}
                        </span></i></label>
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
                type="submit" @click="submitTest" variant="dark" disabled>
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
      timerCount: 360, // this.quizTime
      picked: '',
      answers: {
      },
    };
  },
  // for timer use else and call the finish function
  watch: {
    quizTime: {
      immediate: true,
      handler() {
        console.log(this.quizTime);
        console.log(this.timerCount);
        if (!Number.isNaN(this.quizTime)) {
          console.log(this.quizTime);
          console.log(this.timerCount);
          this.timerCount = this.quizTime;
        }
      },
    },
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount -= 1;
          }, 1000);
        } else {
          alert('Time Up!');
          this.submitTest();
        }
      },
      immediate: true,
    },
    // picked: {
    //   console.log(this.picked),
    // },
  },
  methods: {
    ...mapActions(['getQuestions', 'selectQuestion', 'prevQuestion', 'submitAnswers', 'nextQuestion', 'selectAnswer']),
    next() {
      this.nextQuestion();
    },
    prev() {
      this.prevQuestion();
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
    displayRadioValue() {
      const { id } = this.showCurrentQuestion;
      const answer = this.picked;
      // console.log(id, answer);
      this.answers[id] = answer;
      console.log(this.answers);
      // console.log(this.picked);
    },
    submitTest() {
      console.log(this.answers);
      this.submitAnswers(this.answers);
      this.$router.push('/successfulPage');
    },
  },
  computed: {
    ...mapGetters(['getAllQuestions', 'quizTime', 'loggedInUser', 'showCurrentQuestion', 'countQuestions', 'currentQuestionIndex']),
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

input[type="radio"]:checked + label {
  background-color: #31D283;
}
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
