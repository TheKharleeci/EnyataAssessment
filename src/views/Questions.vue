<template>
    <div class="wrapper">
      <b-row class="text-center">
        <!-- <b-col cols="3" class="adm">First End
          <ApplicantSideBar />
        </b-col>
        <b-col cols="1">Spacing</b-col>
        <b-col>second end</b-col> -->
        <b-col cols="3" >
          <b-row>
            <ApplicantSideBar />
          </b-row>
        </b-col>
        <b-col cols="9" class="main-page">
          <b-row >
            <b-col cols="8">
              <div class="text-left">
                <h1>Take Assessment</h1>
                <p class="intro-text"><i>Click the finish button below to submit assessment,
                  you can go back at any time to edit your answers.</i></p>
              </div>
            </b-col>
            <b-col cols="1"></b-col>
            <b-col cols="3">
              <div class="text-left">
              <p>Timer</p>
              <h3>00 <span> <small>min</small></span> 010<span> <small>sec</small></span></h3>
              </div>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col cols=""></b-col>
            <b-col cols="7">
              <h6><i>Question 1</i></h6>
              <p class="questions"><i>What is the purpose of HDR technology?</i></p>
              <div class="options text-left">
                <ul class="list-group">
                  <li class="list-group-item d-flex justify-content-between"><i>
                    <input type="checkbox" aria-label="">
                    A. To reduce the file size of images and videos.</i>
                  </li>
                  <li class="list-group-item"><i>
                    <input type="checkbox" aria-label="">
                    B. To speed up 3D rendering performance.</i></li>
                  <li class="list-group-item"><i>
                    <input type="checkbox" aria-label="">
                    C. To support higher resolutions.</i></li>
                  <li class="list-group-item"><i>
                    <input type="checkbox" aria-label="">
                    D. To display more colors in images and videos.</i></li>
              </ul>
              </div>
            </b-col>
            <b-col cols=""></b-col>
          </b-row>
          <b-row>
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
          <b-row class="mt-5">
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
body {
  min-height: 100vh;
  min-width: 100vw;
}
/* .wrapper {
  min-height: 100vh;
} */
.main-page {
  padding-top: 80px;
  padding-bottom: 15px;
  /* margin-left: 0; */
}
.adm {
  border: 1px solid #ECECF9;
  width: 50vw;
}
li::selection {
  background-color: yellow;
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
.intro-text {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
  margin-top: 14px;
  margin-bottom: 60px;
}
#spanA, #spanB {
  display:block;
  width:80%; /*or whatever width you want the effect of <hr>*/
  border-top: 4px solid #006DF0;
  /* background: #006DF0; */
  border-radius: 4px;
}
#spanB {
  border-top: 4px solid #F09000;;
}
h1 {
  font-weight: 300;
  font-size: 48px;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
h2 {
  font-weight: 300;
  font-size: 48px;
  line-height: 58px;
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
  margin-bottom: 48px;
}
p {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
</style>
