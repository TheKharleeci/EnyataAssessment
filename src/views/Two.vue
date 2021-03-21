<template>
  <div class="wrapper">
    <b-container class="bv-example-row">
      <b-row class="text-center">
        <div class="d-flex">
          <b-col cols="2" >
            <!-- <b-row> -->
              <ApplicantSideBar />
            <!-- </b-row> -->
          </b-col>
          <b-col cols="10" class="main-page">
            <b-row>
              <b-col>
                <div class="text-left">
                <h1>Dashboard</h1>
                <p class="intro-text"><i>Your Application is currently being reviewed,
                  you wil be notified if successful</i></p>
                </div>
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3" class="text-left">
                <p>Date of Application</p>
                <h2>09.09.19</h2>
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
            <b-row class="mt-5">
              <b-col cols="7" class="text-left">
                <div class="box">
                  <p class="boxHeader">Updates</p>
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                  <div class="line"></div>
                </div>
              </b-col>
              <b-col cols="5" class="text-left">
                <div class="box">
                  <p class="boxHeader">Take Assessment</p>
                  <div class="note mt-4 text-center ">
                    <p id="note">We have 4 days left until the next assessment Watch this space</p>
                    <div>
                      <b-button type="submit" block variant="secondary" disabled>
                        Take Assessment
                      </b-button>
                    </div>
                  </div>
                </div>
              </b-col>
            </b-row>
          </b-col>
        </div>
      </b-row>
    </b-container>
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
.wrapper {
  min-height: 100vh;
}
.main-page {
  padding-top: 80px;
  padding-bottom: 15px;
  /* margin-left: 0; */
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
  margin-top: 9px;
  /* font-family: Lato; */
  /* font-style: normal; */
  /* font-weight: normal; */
  font-size: 12px;
  line-height: 14px;
  color: #4F4F4F;
  /* margin-bottom: 20px; */
}
.box {
  width: 482px;
  min-height: 352px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
p {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.line {
  border-bottom: 1px solid #CECECE;
  height: 60px;
}
.boxHeader {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
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
font-size: 17px;
line-height: 20px;
color: #4F4F4F;
}
</style>
