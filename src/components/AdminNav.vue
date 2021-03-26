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
                    <h6>Jane Doe</h6>
                    <p>doe@enyata.com</p>
                </div>
            </div>
        </div>

        <div class="nav-link">
        <b-nav vertical>
            <b-nav-item href="#" active class="admin-menu">
                <img src="../assets/dashboard.svg" alt="" class="mr-3 d-inline-block">
                    Dashboard
            </b-nav-item>
            <b-nav-item href="#" >
                <img src="../assets/create_application.svg" alt="" class="mr-3 d-inline-block">
                    Create Application
            </b-nav-item>
            <b-nav-item href="#" >
                <img src="../assets/application_entries.svg" alt=""
                    class="mr-3 d-inline-block">
                    Application Entries
            </b-nav-item>
            <b-nav-item href="#" >
                <img src="../assets/compose_assessment.svg" alt="" class="mr-3 d-inline-block">
                    Compose Assessment
            </b-nav-item>
            <b-nav-item href="#" >
                <img src="../assets/assessment_history.svg" alt="" class="mr-3 d-inline-block">
                    Assessment History
            </b-nav-item>
            <b-nav-item href="#" >
                <img src="../assets/results.svg" alt="" class="mr-3 d-inline-block">
                    Results
            </b-nav-item>
            <b-nav-item href="#" >
                <img src="../assets/Setting.svg" alt="" class="mr-3 d-inline-block">
                    Settings
            </b-nav-item>
    </b-nav>
        </div>
            <div class="logout">
            <b-nav-item href="#" >
                <img src="../assets/logout.svg" alt="" class="mr-3 d-inline-block">
                    LogOut
            </b-nav-item>
            </div>

    </div>
</template>

<script>
export default {
  name: 'AdminNav',
  data() {
    return {
      visible: true,
      profileImg: {
        blank: true, blankColor: '#777', width: 100, height: 100, class: 'mt-4',
      },
    };
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
    height: 255px;
    background-color: #7557d3;
}
.image-and-text{
    padding-top: 75px;
}
.profile-image{
    width: 80px;
    height: 80px;
    text-align: center;
    background: #fff;
    border-radius: 50%;
    margin: auto;
    padding: 20px;
}
.profile-image img{
    width: 100%;
    height: 100%;
}
.profile-image-text{
    text-align: center;
    margin-top: 13px;
}
.profile-image-text h6{
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    font-style: normal;
    color: #fff;
}
.profile-image-text p{
    text-align: center;
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
/* background: cadetblue; */
font-weight: 700;
border-left-color: #7557d3;
}
.logout{
    margin-top: 231pxp;
}
</style>
