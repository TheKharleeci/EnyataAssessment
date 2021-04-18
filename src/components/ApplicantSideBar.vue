<template>
  <div class="d-flex">
    <div>
      <b-sidebar id="sidebar-no-header" v-model='visible'
      aria-labelledby="sidebar-no-header-title"
      bg-variant="white"
      width="21%"
      class="border border-dark"
      no-header shadow>
        <div class="sidebar-top">
          <b-img v-bind="profileImg" rounded="circle"
          alt="Profile Image" :src="userPicture"
          class="mb-2">
          </b-img>
          <div class="text-white">
            <p>{{ currentApplicant["first_name"] }} {{ currentApplicant["last_name"] }}</p>
            <p id="email"> <i>{{ currentApplicant["email"] }}</i> </p>
          </div>
        </div>
        <div class="sidebar-body text-left p-3">
          <nav class="mb-3">
            <b-nav vertical>
              <b-nav-item href="#" @click="toDashboard" active class="admin-menu">
                <img src="../assets/Dashboard.svg" alt="" class="mr-3 d-inline-block">
                Dashboard
              </b-nav-item>
              <b-nav-item href="#" @click="takeAssessment" >
                <img src="../assets/compose.svg" alt=""
                class="mr-3 d-inline-block">
                Assessment
              </b-nav-item> <br>
              <b-nav-item href="#" @click="tologout">
                <img src="../assets/Logout.svg" alt="" class="mr-3 d-inline-block">
                Log Out
              </b-nav-item>
            </b-nav>
          </nav>
        </div>
      </b-sidebar>
    </div>
    <div class="mainBar"></div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Sidebar',
  data() {
    return {
      visible: true,
      profileImg: {
        width: 100, height: 100, class: 'mt-4',
      },
    };
  },
  methods: {
    ...mapActions(['loginUser', 'getQuestions', 'logout', 'userAvi']),
    getPhoto() {
      this.userAvi();
    },
    // getProfilePhoto() {
    //   return '../assets/enyatalogo.svg'.this.photo;
    // },
    takeAssessment() {
      this.$router.push('/takeAssess');
    },
    //  takeAssessment() {
    //   this.getQuestions();
    //   this.$router.push('/questions');
    // },
    toDashboard() {
      this.$router.push('/client');
    },
    tologout() {
      this.logout();
      this.$router.push('/');
    },
  },
  computed: {
    ...mapGetters(['loggedInUser', 'currentApplicant', 'getUserData']),

    // check this for Modupe including mapGetters
    userPicture() {
      return this.getUserData && this.getUserData.picture
        ? this.getUserData.picture : this.currentApplicant.picture;
    },
  },
};
</script>

<style scoped>
.sidebar-top {
background-color: #7557D3;
padding-bottom: 20px;
}
p {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  font-family: Lato;
  font-style: normal;
  font-size: 20px;
  line-height: 24px;
}
#email {
  font-size: 16px;
  font-weight: 400;
  line-height: 19px;
}
.sidebar-body {
  font-size: 16px;
  font-weight: 400;
  /* font-family: Lato; */
}
a {
  color: #2B3C4E;
  border-left: 4px solid transparent;
}
a:hover {
  color: #2B3C4E;
  /* background: cadetblue; */
  font-weight: 550;
  border-left-color: #7557D3;
}
</style>
