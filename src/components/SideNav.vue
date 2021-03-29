<template>
    <div class="sidebar-all">
        <div class="side-profile">
            <div class="image-and-text">
                <div class="profile-image">
                    <b-img v-bind="profileImg" rounded="circle" alt="Profile Image" src=""
                        class="mb-2">
                    </b-img>
                </div>
                <div class="profile-image-text">
                <h6>{{ currentApplicant["first_name"] }}
                        {{ currentApplicant["last_name"] }}</h6>
                    <p>{{ currentApplicant["email"] }}</p>
                </div>
                </div>
            </div>

            <div class="nav-link">
                <b-nav>
                <b-nav-item href="#" @click="toDashboard"  active>
                <img src="../assets/Dashboard.svg" alt="" class="mr-3 d-inline-block">
                    Dashboard
                </b-nav-item>

            <b-nav-item href="#" @click="takeAssessment">
                <img src="../assets/assessment.svg" alt="assessment"
                class="mr-3 d-inline-block" >
                    Assessment
                </b-nav-item>
                <div class="logout">
                <b-nav-item href="#">
                <img src="../assets/Logout.svg" alt="" class="mr-3 d-inline-block" >
                    LogOut
                </b-nav-item>
                </div>

                </b-nav>
                </div>
            </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SideNav',
  data() {
    return {
      visible: true,
      profileImg: {
        blank: true, blankColor: '#777', width: 100, height: 100, class: 'mt-0',
      },
    };
  },
  methods: {
    ...mapActions(['loginUser', 'getQuestions']),
    takeAssessment() {
      this.getQuestions();
      this.$router.push('/questions');
    },
    toDashboard() {
      this.$router.push('/client');
    },
  },
  computed: {
    ...mapGetters(['loggedInUser', 'currentApplicant']),
  },
};
</script>

<style scoped>
.sidebar-all{
    height: 100vh;
    width: 292px;
    background: #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.side-profile{
    width: 292px;
    height: 200px;
    background-color: #7557d3;
}
.image-and-text{
    padding-top: 75px;
    text-align: center;
}
.profile-image{
    margin: -20px auto;
    width: 100px;
    height: 100px;
}
.profile-image img{
    width: 100%;
    height: 100%;
}
.profile-image-text{
    margin-top: 13px;
}
.profile-image-text h6{
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    color: #fff;
}
.profile-image-text p{
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    color: #fff;
}
.nav-link{
    margin-top: 10px;
}
a {
color: #2b3c4e;
border-left: 4px solid transparent;
}
a:hover {
color: #7557d3;
font-weight: 700;
border-left-color: #7557d3;
}
.logout{
    margin-top: 57px;
}

</style>
