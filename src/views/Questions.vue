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
            <h3 >00 <span>
              <small>min</small></span> 010<span> <small>sec</small></span></h3>
            </div>
          </b-col>
        </b-row>
        <b-row no-gutters class="mb-3">
          <b-col cols="3"></b-col>
          <b-col cols="5" class="center-block">
            <h6><i>Question 1</i></h6>
            <div>
              <p class="questions"><i>What is the purpose of HDR technology?</i></p>
              <div class="options text-left">
                <ul class="list-group">
                  <li class="list-group-item d-flex">
                    <input class="check" id="a" type="radio" name="option" aria-label="">
                    <div class="option">
                      <label for="a"><i>A. To reduce the file size of images and videos.</i></label>
                    </div>
                  </li>
                  <li class="list-group-item d-flex">
                    <input  class="check" id="b" type="radio" name="option"  aria-label="">
                    <div class="option">
                      <label for="b"><i>B. To speed up 3D rendering performance.</i></label>
                    </div>
                  </li>
                  <li class="list-group-item d-flex">
                    <input class="check" id="c" type="radio" name="option" aria-label="">
                    <div class="option">
                      <label for="c"><i>C. To support higher resolutions.</i></label>
                    </div>
                  </li>
                  <li class="list-group-item d-flex">
                    <input class="check" id="d" type="radio" name="option" aria-label="">
                    <div class="option d-flex align-middle">
                      <label for="d"><i>D. To display more colors in images and videos.</i></label>
                    </div>
                  </li>
              </ul>
              </div>
            </div>
          </b-col>
          <b-col cols="3"></b-col>
        </b-row>
        <b-row no-gutters>
          <b-col cols="">
          <b-button type="" block variant="dark">
          Previous</b-button>
          </b-col>
          <b-col cols="7">
            <!-- <b-button type="" block variant="dark" disabled>
          Finish</b-button> -->
          </b-col>
          <b-col cols="">
          <b-button type="" block variant="dark">
          Next</b-button>
          </b-col>
        </b-row>
        <b-row no-gutters class="mt-5">
          <b-col></b-col>
          <b-col cols="7">
            <b-button class="finishBtn" type="submit" variant="dark" disabled>
          Finish</b-button>
          </b-col>
          <b-col></b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ApplicantSideBar from '@/components/ApplicantSideBar.vue';

export default {
  name: 'Dashbord',
  components: {
    ApplicantSideBar,
  },
};
</script>

<style scoped>

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
  /* margin-bottom: 20px; */
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
  margin-bottom: 60px;
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
}
.options {
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
}
.finishBtn {
  width: 205px;
  background: #CECECE;
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

</style>
