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
              <div class="d-flex ">
                <h2 class="headerText">Profiles and Settings</h2>
                <div class="arrow">
                  <img src="../assets/down-arrow.svg" alt="">
                </div>
              </div>
              <p> <small>
                <i>Helps you set admin profile and give other users permissions</i>
                </small> </p>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="3" class="text-left">
              <div>
                <b-button class="button button-selected ">
                  Admin Profile
                </b-button>
              </div>
            </b-col>
            <b-col cols="3" class="text-left">
              <div>
                <b-button class="button button-selected ">
                  Timer Settings
                </b-button>
              </div>
            </b-col>
            <b-col cols=""></b-col>
          </b-row>
          <b-row no-gutters class="text-left">
            <b-col cols="9">
              <div class="">
                <h4>Timer Setting</h4>
              </div>
              <span class="spanD"></span>
              <div class="text-left">
                <p class="timer">Set Time</p>
                <h2 >00 <span>
                  <small>min</small></span> 010 <span> <small>sec</small></span></h2>
                  <b-button class="save-button">Save</b-button>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/AdminSideBar.vue';

export default {
  name: 'Admin',
  data() {
    return {
      profileImg: {
        blank: true, blankColor: '#777', width: 54, height: 54, class: '',
      },
    };
  },
  components: {
    AdminSideBar,
  },
};

</script>

<style scoped>
.button {
  width: 188px;
  height: 64px;
  background: none;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #333758;
  border: none;
  margin-bottom: 50px;
  outline: none;
  margin-right: 50px;
}
.btn-color {
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #FF5722;
}
.btn-style {
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  text-decoration-line: underline;
  color: #333758;
  opacity: 0.5;
  /* width: 120px; */
  height: 18px;
  border: none;
  background: none;

}
.button-selected {
  background: rgba(117, 87, 211, 0.1);
}
.save-button {
  width: 127px;
  height: 38px;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #fff;
  border: 1px solid #7557D3;
  border-radius: 3px;
  background: #7557D3;
  margin-top: 40px;
}
.spanD {
  display:block;
  margin-top: 12px;
  margin-bottom: 40px;
  border-top: 1px solid #F2F2F2;
}

h4 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
  /* margin: 0; */
}
.headerText {
  margin-top: 70px;
  margin-bottom: 1px ;
}

h2 {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
.btnText {
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}
.arrow {
  height: 12px;
  width: 12px;
  margin-left: 14px;
  margin-top: 90px;
}
.arrow img {
  height: 100%;
  width: 100%;
}
</style>
