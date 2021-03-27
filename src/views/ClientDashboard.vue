<template>
  <div>
    <div>
      <b-row no-gutters >
        <b-col cols="3">
          <ApplicantSideBar />
        </b-col>
        <b-col cols="9">
           <b-row no-gutters >
            <b-col class="text-left">
              <h2 class="headerText">Dashboard</h2>
              <p class="intro-text"><i>Your Application is currently being reviewed,
                you wil be notified if successful</i></p>
            </b-col>
          </b-row>
          <b-row no-gutters >
            <b-col cols="3" class="text-left">
                <p>Date of Application</p>
                <h2>{{ applicationDate }} </h2>
                <span id="spanA"></span>
                <h6>4 days since applied</h6>
              </b-col>
              <b-col cols="1"></b-col>
              <b-col cols="3" class="text-left">
                <p>Application Status</p>
                <h2>Pending</h2>
                <span id="spanB"></span>
                <h6>We will get back to you</h6>
              </b-col>
          </b-row>
          <b-row no-gutters class="mt-5">
              <b-col cols="5" class="text-left">
                <div class="box">
                  <p class="boxHeader">Updates</p>
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
              </b-col>
              <b-col cols="1"></b-col>
              <b-col cols="4" class="text-left">
                <div class="box">
                  <p class="boxHeader">Take Assessment</p>
                  <div class="note mt-4 text-center ">
                    <p id="note">We have 4 days left until the next assessment Watch this space</p>
                    <div>
                      <b-button type="submit"
                      @click="takeAssessment"
                      class="btn-color" block variant="secondary" >
                        Take Assessment
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ApplicantSideBar from '@/components/ApplicantSideBar.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Dashbord',
  components: {
    ApplicantSideBar,
  },
  methods: {
    ...mapActions(['loginUser', 'getQuestions']),
    takeAssessment() {
      this.getQuestions();
      this.$router.push('/questions');
    },
  },
  computed: {
    ...mapGetters(['loggedInUser', 'currentApplicant', 'applicationDate', 'getAllQuestions']),
  },
  // mounted() {
  //   this.loginUser();
  // },
};
</script>

<style scoped>

.headerText {
  margin-top: 50px;
  margin-bottom: 10px ;
}
.btn-color {
  background-color: #7557D3;
  border: none;
}
a {
  color: #4f4f4f;
  border: transparent;
  border-left: 4px solid transparent;
}
a:hover {
  color: #2B3C4E;
  border-left-color: #5ABEFD;
  border-color: #5ABEFD;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}

.intro-text {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
  margin-top: 14px;
  margin-bottom: 40px;
}
#spanA, #spanB {
  display:block;
  width:60%;
  border-top: 4px solid #006DF0;
  border-radius: 4px;
}
#spanB {
  border-top: 4px solid  #F09000;
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
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
h6 {
  margin-top: 9px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #4F4F4F;
  /* margin-bottom: 20px; */
}
.boxHeader {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}

p {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.line {
  border-bottom: 1px solid #CECECE;
  height: 50px;
}
.box {
  width: 400px;
  min-height: 320px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
  /* margin-bottom: 20px; */
}
.note {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 200px;
  width: 350px;
  flex-direction: column;
}
#note {
font-weight: normal;
font-size: 16px;
line-height: 23px;
color: #4F4F4F;
}

.btnText {
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}
</style>
