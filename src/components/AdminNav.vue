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
                    <h6>{{ loggedInAdmin["first_name"] }}
                        {{ loggedInAdmin["last_name"] }}
                    </h6>
                    <p>{{ loggedInAdmin["email"] }}</p>
                </div>
            </div>
        </div>

        <div class="nav-link">
        <b-nav>
            <b-nav-item href="#" @click="toDashboard"
            active class="admin-menu">
                <img src="../assets/Dashboard.svg" alt="" class="mr-3 d-inline-block">
                    Dashboard
            </b-nav-item>
            <b-nav-item href="#" @click="createApplication">
                <img src="../assets/create_application.svg" alt="" class="mr-3 d-inline-block">
                    Create Application
            </b-nav-item>
            <b-nav-item href="#" @click="viewEntries">
                <img src="../assets/application_entries.svg" alt=""
                    class="mr-3 d-inline-block">
                    Application Entries
            </b-nav-item>
            <b-nav-item href="#" @click="composeAssessment"  >
                <img src="../assets/compose_assessment.svg" alt="" class="mr-3 d-inline-block">
                    Compose Assessment
            </b-nav-item>
            <b-nav-item href="#" @click="history"  >
                <img src="../assets/assessment_history.svg" alt="" class="mr-3 d-inline-block">
                    Assessment History
            </b-nav-item>
            <b-nav-item href="#" @click="results">
                <img src="../assets/results.svg" alt="" class="mr-4 d-inline-block">
                    Results
            </b-nav-item>
            <b-nav-item href="#" @click="settings">
                <img src="../assets/Setting.svg" alt="" class="mr-4 d-inline-block">
                    Settings
            </b-nav-item>
            <div class="logout">
            <b-nav-item href="#" >
                <img src="../assets/Logout.svg" alt="" class="mr-3 d-inline-block">
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
  name: 'AdminNav',
  data() {
    return {
      visible: true,
      profileImg: {
        blank: true, blankColor: '#777', width: 100, height: 100, class: 'mt-0',
      },
    };
  },
  methods: {
    ...mapActions(['loginUser']),
    toDashboard() {
      this.$router.push('/dashboard');
    },
    createApplication() {
      this.$router.push('/application');
    },
    viewEntries() {
      this.$router.push('/entries');
    },
    composeAssessment() {
      this.$router.push('/compose');
    },
    history() {
      this.$router.push('/history');
    },
    results() {
      this.$router.push('/results');
    },
    settings() {
      this.$router.push('/adminProfile');
    },
  },
  computed: {
    ...mapGetters(['loggedInAdmin']),
  },
};
</script>

<style scoped>
.sidebar-all{
    min-height: 100vh;
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
    width: 100px;
    height: 100px;
    margin: -20px auto;
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
    margin-top: 231px;
}
</style>
