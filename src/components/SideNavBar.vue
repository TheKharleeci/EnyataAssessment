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
                <b-nav-item :href="'/dashboard'" active class="dashboard">
                <img src="../assets/Dashboard.svg" alt="" class="mr-3 d-inline-block">
                    Dashboard
                </b-nav-item>

                <b-nav-item :href="'#'" class="assessment">
                <img src="../assets/compose.svg" alt="assessment" class="mr-3 d-inline-block" >
                    Assessment
                </b-nav-item>

                <b-nav-item :href="'#'" class="logout">
                <img src="../assets/Logout.svg" alt="" class="mr-3 d-inline-block" >
                    LogOut
                </b-nav-item>

                </b-nav>
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

</style>
