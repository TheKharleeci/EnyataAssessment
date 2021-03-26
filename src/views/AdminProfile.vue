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
            <b-col cols="2" class="text-left">
              <div>
                <b-button class="button">
                  Admin Profile
                </b-button>
              </div>
            </b-col>
            <b-col cols="2" class="text-left">
              <div>
                <b-button class="button button-selected ">
                  Timer Settings
                </b-button>
              </div>
            </b-col>
            <b-col cols=""></b-col>
          </b-row>
          <b-row no-gutters>
            <b-col cols="9">
              <div class="d-flex justify-content-between">
                <h4>Profiles Setting</h4>
                <b-button class="edit-button" variant="outline-primary">Edit</b-button>
              </div>
              <span></span>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <div class="d-flex">
              <div>
                <b-img v-bind="profileImg" rounded="circle" alt="Profile Image" src=""
                class="mb-2">
                </b-img>
              </div>
              <button class="  btn-style">
                Upload new image
              </button>
              <button class="button btn-color">x Remove</button>
            </div>
          </b-row>
          <b-row no-gutters class="text-left mb-4">
            <b-col cols="3" >
              <div class="form-input">
                <label for="name">Name</label> <br>
                <input type="text" id="name" placeholder="Cameron Williamson">
              </div>
              </b-col>
            <b-col cols="3">
              <div class="form-input">
                <label for="email">Email</label> <br>
                <input type="text" id="email" placeholder="debra.holt@example.com">
              </div>
            </b-col>
            <b-col cols="3">
              <div class="form-input">
                <label for="phone">Phone number</label> <br>
                <input type="text" id="phone" placeholder="(303) 555-0105">
              </div>
            </b-col>
          </b-row>
          <b-row no-gutters class="text-left">
            <b-col cols="3">
              <div class="form-input">
                <label for="country">Country</label> <br>
                <input type="text" id="country" placeholder="Afghanistan">
              </div>
            </b-col>
            <b-col cols="6">
              <div class="form-input">
                <label for="address">Address</label> <br>
                <input class="addy" type="text" id="address"
                placeholder="3891 Ranchview Dr. Richardson, California 62639">
              </div>
            </b-col>
          </b-row>
          <b-row no-gutters >
            <b-col cols="9" class="d-flex justify-content-center">
              <b-button class="save-button">Save</b-button>
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
/* h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
} */

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
::placeholder {
  color: #333758;
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
span {
  display:block;
  margin-top: 12px;
  margin-bottom: 30px;
  border-top: 1px solid #F2F2F2;
}
label {
  font-weight: normal;
  font-size: 15px;
  /* line-height: 18px;
  letter-spacing: -0.117188px; */
  color: #333758;
  opacity: 0.5;
}
/* .form-input {
  color: #006DF0;
} */
input {
  width: 90%;
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
/* .addy {
  width: 100%;
} */
input[type=text] {
  /* background-color: #7557D3; */
  background: rgba(117, 87, 211, 0.1);
  /* opacity: 0.04; */
  /* color: red; */
}
/* input {
  width: 216px;
  height: 54px;
  left: 340px;
  top: 613px;
  background: #7557D3;
  opacity: 0.04;
} */
h4 {
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.4px;
  color: #4A4A4A;
  /* margin: 0; */
}
.box {
  width: 250px;
  min-height: 352px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
.headerText {
  margin-top: 70px;
  margin-bottom: 1px ;
}
a {
  color: #4f4f4f;
  border: transparent;
  border-left: 4px solid transparent;
  padding: 12px 0px;
  margin-right: 40px;
  /* border: none; */
}
a:hover {
  color: #2B3C4E;
  /* background: cadetblue; */
  /* font-weight: 550; */
  /* border-left-color: #31D283; */
  border-color: #7557D3;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}
.singleRow{
  margin-right: 20px;
}
.table-header {
  background-color: #2B3C4E;
  height: 45px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin-bottom: 20px;
  /* margin-right: 20px; */
  padding: 0 ;
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
height: 50px;
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
  min-height: 352px;
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
}
.table-header {
  background-color: #2B3C4E;
  height: 45px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin-bottom: 20px;
  /* margin-right: 20px; */
  /* padding-left: 42px ; */
}
.sort-btn {
  height: 7px;
  width: 10.4px;
}
.sort-btn img {
  height: 100%;
  width: 100%;
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
