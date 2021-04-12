<template>
  <div>
    <div>
      <b-row no-gutters >
        <b-col cols="3">
          <h2>test this</h2>
          <AdminSideBar />
        </b-col>
        <b-col cols="9">
           <b-row no-gutters >
            <b-col class="text-left">
              <h2 class="headerText">Dashboard</h2>
            </b-col>
          </b-row>
          <b-row no-gutters >
            <b-col cols="3" class="text-left">
              <p>Current Applications</p>
              <h2> {{ getNumberOfApplicants }} </h2>
              <span id="spanA"></span>
              <h6>Academy 2.0</h6>
              <!-- <h2> {{ userCount }} </h2> -->
            </b-col>
            <b-col cols="3" class="text-left">
              <p>Total Applications</p>
              <h2>{{ getNumberOfApplicants }} </h2>
              <span id="spanB"></span>
              <h6>All entries so far</h6>
            </b-col>
            <b-col cols="3" class="text-left">
              <p>Academy's</p>
              <h2>4</h2>
              <span id="spanC"></span>
              <h6>So far</h6>
            </b-col>
            <b-col cols="3"></b-col>
          </b-row>
          <b-row no-gutters class="mt-5">
            <b-col cols="5">
              <div>
                <div class="text-left">
                <p class="boxHeader">History</p>
                <p> <small>Last Update <span>18:24, 22/02/19</span></small> </p>
                </div>
                <b-list-group class="text-left">
                  <b-list-group-item href="#" class="batch">
                    <b-row no-gutters>
                      <b-col cols="5">Academy Batch 1</b-col>
                      <b-col cols="3">15 students</b-col>
                      <b-col cols="4">started 11/09/15</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item href="#" class="batch">
                    <b-row no-gutters>
                      <b-col cols="5">Academy Batch 2</b-col>
                      <b-col cols="3">15 students</b-col>
                      <b-col cols="4">started 11/09/15</b-col>
                    </b-row>
                  </b-list-group-item>
                  <b-list-group-item href="#" class="batch">
                    <b-row no-gutters>
                      <b-col cols="5">Academy Batch 2</b-col>
                      <b-col cols="3">15 students</b-col>
                      <b-col cols="4">started 11/09/15</b-col>
                    </b-row>
                  </b-list-group-item>
                </b-list-group>
              </div>
            </b-col>
            <b-col cols="1"></b-col>
            <b-col cols="4">
              <div class="box">
                  <p class="boxHeader">Create Assessment</p>
                  <div class="note mt-4 text-center ">
                    <p id="note">Create test question for incoming academy students</p>
                    <div>
                      <b-button class="btnText" type="submit" @click="createAssessment"
                      block variant="secondary" >
                        Create Assessment
                      </b-button>
                    </div>
                  </div>
              </div>
            </b-col>
            <b-col cols=""></b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/AdminSideBar.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'Dashbord',
  components: {
    AdminSideBar,
  },
  methods: {
    createAssessment() {
      this.$router.push('/compose');
    },
  },
  mounted() {
    this.$store.dispatch('getAllApplicants');
  },
  computed: {
    ...mapGetters(['totalApplications', 'getNumberOfApplicants', 'userCount']),
  },
};
</script>

<style scoped>
.box {
  width: 250px;
  min-height: 352px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
.headerText {
  margin-top: 60px;
  margin-bottom: 40px ;
}
a {
  color: #4f4f4f;
  border: transparent;
  border-left: 4px solid transparent;
  /* border: none; */
}
a:hover {
  color: #2B3C4E;
  /* background: cadetblue; */
  /* font-weight: 550; */
  /* border-left-color: #5ABEFD; */
  border-color: #7557D3;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}
/* .bar {
  width: 21%;
} */
/* .wrapper {
  min-height: 100vh;
}
b-container {
  margin: 0;
}*/
.main-page {
  padding-top: 80px;
  padding-bottom: 15px;
  /* margin-left: 0; */
}
/*.intro-text {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
  margin-top: 14px;
  margin-bottom: 60px;
} */
#spanA, #spanB, #spanC {
  display:block;
  width:65%;
  border-top: 4px solid #006DF0;
  /* background: #006DF0; */
  border-radius: 4px;
}
#spanB {
  border-top: 4px solid #00F026;;
}
#spanC {
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
.batch {
font-weight: normal;
font-size: 14px;
line-height: 22px;
color: #4F4F4F;
/* width: 482px; */
/* height: 66px; */
}
/* .batchText {
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #4F4F4F;
} */
/*
p {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.line {
  border-bottom: 1px solid #CECECE;
  height: 60px;
} */
.box {
  width: 400px;
  min-height: 320px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
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
background-color: #7557D3; ;
}
</style>
