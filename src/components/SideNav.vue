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

                <div class="side-nav">
                    <div active class="dashboard">
                        <img src="../assets/dashboard.svg" alt="dashboard">
                        <a href="#" class="sidebaroption">Dashboard</a>
                    </div>
                    <div class="assessment">
                        <img src="../assets/assessment.svg" alt="assessment">
                        <a href="#" class="sidebaroption">Assessment</a>
                    </div>
                    <div class="logout">
                        <img src="../assets/logout.svg" alt="logOut">
                        <a href="#" class="sidebaroption">LogOut</a>
                    </div>
                </div>
            </div>
</template>

<script>
export default {
  name: 'SideNav',
  data() {
    return {
      visible: true,
      profileImg: {
        blank: true, blankColor: '#fff', width: 100, height: 100, class: 'mt-4',
      },
    };
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
.side-nav{
    margin-top: 27px;
}
.dashboard img{
    margin-left: 43px;
    height: 12.37px;
    width: 14.44px;
}
.dashboard a, .assessment a, .logout a{
    text-decoration: none;
    font-weight: 400;
    font-style: normal;
    font-size: 16px;
    color: #2b3c4e;
    margin-left: 16.56px;
}
.dashboard, .assessment, .logout{
    border-left: 4px solid transparent;
    color: #2b3c4e;
}
.dashboard:hover, .assessment:hover, .logout:hover{
    font-weight: 770;
    border-left-color: #7557d3;
    color: #7557d3;
}
.assessment{
    margin-top: 28px;
}
.assessment img{
    margin-left: 43px;
    height: 15.79px;
    width: 12px;
}
.logout{
    margin-top: 57px;
}
.logout img{
    margin-left: 43px;
    height: 13.43px;
    width: 14.1px;
}
</style>
