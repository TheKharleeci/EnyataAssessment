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
            <div cols="2" class="text-left">
              <div>
                <button class="button" @click="component = 'profile'">
                  Admin Profile
                </button>
              </div>
            </div>
            <div cols="2"  class="text-left">
              <div>
                <button class="button" @click="component = 'timer'">
                  Timer Settings
                </button>
              </div>
            </div>
          </b-row>
          <div>
            <keep-alive>
              <component v-bind:is="component"></component>
            </keep-alive>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/AdminSideBar.vue';
import Profile from '@/components/Profile.vue';
import Timer from '@/components/Timer.vue';

export default {
  name: 'Admin',
  data() {
    return {
      profileImg: {
        blank: true, blankColor: '#777', width: 54, height: 54, class: '',
      },
      component: Profile,
    };
  },
  components: {
    AdminSideBar,
    profile: Profile,
    timer: Timer,
  },
};

</script>

<style scoped>
.profileImg{
  margin-right: 32px;
}
:focus { outline: none; }
::placeholder{
  color:  #333758;
}
.form-input{
  width: 216px;
  height: 54px;
  margin-right: 39px;
  background: rgba(117, 87, 211, 0.1);
}
.addy{
  width: 472px;
}
.imageBtn {
  height: 64px;
  font-weight: normal;
  line-height: 17px;
  color: #333758;
  padding: 0;
  font-size: 15px;
  letter-spacing: -0.117188px;
  text-decoration-line: underline;
  opacity: 0.5;
  border: none;
  background: none;
}
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
}
.button:hover {
  background: rgba(117, 87, 211, 0.1);
}
.btn-color {
  font-weight: normal;
  /* width: 188px; */
  height: 64px;
  background: none;
  border: none;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.117188px;
  color: #FF5722;
  padding: 0;
  margin-left: 46px;
}
.button-selected {
  background: rgba(117, 87, 211, 0.1);
}
.edit-button, .save-button {
  width: 127px;
  height: 38px;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #7557D3;
  border: 1px solid #7557D3;
  box-sizing: border-box;
  border-radius: 3px;
}
.edit-button {
  line-height: 18px;
  letter-spacing: -0.5px;
  color: #7557D3;
  background: #fff;
}
.save-button {
  color: #fff;
  background: #7557D3;
  margin-top: 40px;
}
.spanD {
  display:block;
  margin-top: 12px;
  margin-bottom: 40px;
  border-top: 1px solid #F2F2F2;
}
label {
  font-weight: normal;
  font-size: 15px;
  color: #333758;
  opacity: 0.5;
}

.input-gap {
  margin-right: 20px;
}
input {
  /* width: 100%; */
  border-color: #edf0f2;
  border: none;
  height: 54px;
  padding: 10px;
  box-sizing: border-box;
  outline: none;
  color: #333758;
  margin-top: 10px;
  font-size: 15px;
  line-height: 23px;
  border-radius: 3px;
}
input[type=text] {
  background: rgba(117, 87, 211, 0.1);
}
h4 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
  margin-bottom: 0px;
}
.headerText {
  margin-top: 60px;
  margin-bottom: 1px ;
}
.main-page {
  padding-top: 80px;
  padding-bottom: 15px;
}
h2 {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
.arrow {
  height: 12px;
  width: 12px;
  margin-left: 14px;
  margin-top: 80px;
}
.arrow img {
  height: 100%;
  width: 100%;
}
</style>
