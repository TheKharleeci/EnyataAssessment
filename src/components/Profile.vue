<template>
  <div>
    <b-row no-gutters>
      <!-- <b-col cols="3"></b-col> -->
      <b-col cols="9">
        <b-row no-gutters>
            <b-col cols="11">
              <div class="d-flex justify-content-between">
                <h4>Profiles Setting</h4>
                <button class="edit-button"
                 @click="enableEdit"
                variant="outline-primary">Edit</button>
              </div>
              <span class="spanD"></span>
            </b-col>
          </b-row>
          <b-row no-gutters>
            <div class="d-flex">
              <div>
                <b-img v-bind="profileImg" rounded="circle" alt="Profile Image" src=""
                class="profileImg">
                </b-img>
              </div>
              <button class="imageBtn">
                Upload new image
              </button>
              <button class="btn-color">x Remove</button>
            </div>
          </b-row>
          <b-row no-gutters class="text-left mt-3 mb-4">
            <div class="" >
              <div class="">
                <label for="name">Name</label> <br>
                <input type="text"
                v-model="admin.name"
                :disabled="disabled"
                class="form-input" id="name" placeholder="Oladeji Tonia">
              </div>
            </div>
            <div cols="" class="">
              <div class="">
                <label for="email">Email</label> <br>
                <input type="text"
                class="form-input"
                v-model="admin.email"
                disabled
                id="email" placeholder="lanijuyitan10@gmail.com">
              </div>
            </div>
            <div cols="">
              <div class="">
                <label for="phone">Phone number</label> <br>
                <input type="text"
                v-model="admin.phoneNumber"
                :disabled="disabled"
                class="form-input" id="phone" placeholder="(303) 555-0105">
              </div>
            </div>
          </b-row>
          <b-row no-gutters class="text-left">
            <div class="">
              <div class="">
                <label for="country">Country</label> <br>
                <input type="text"
                v-model="admin.country"
                :disabled="disabled"
                class="form-input" id="country" placeholder="Afghanistan">
              </div>
            </div>
            <div>
              <div class="">
                <label for="address">Address</label> <br>
                <input class="addy form-input"
                v-model="admin.address"
                :disabled="disabled"
                type="text"  id="address"
                placeholder="3891 Ranchview Dr. Richardson, California 62639">
              </div>
            </div>
          </b-row>
          <b-row no-gutters >
            <b-col cols="9" class="d-flex justify-content-center">
              <b-button @click="save" :disabled="disabled" class="save-button">Save</b-button>
            </b-col>
          </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Profile',
  data() {
    return {
      profileImg: {
        blank: true, blankColor: '#777', width: 54, height: 54, class: '',
      },
      admin: {
        name: '',
        phoneNumber: '',
        country: '',
        address: '',
      },
      disabled: true,
    };
  },
  methods: {
    ...mapActions(['updateAdmin']),
    enableEdit() {
      this.disabled = false;
    },
    save() {
      this.updateAdmin(this.admin);
      // this.form = {
      //   email: '',
      //   password: '',
      // };
    },
  },
  watch: {
    updateAdmin: {
      deep: true,
      handler() {
        this.$router.push('/adminProfile');
      },
    },
  },
  components: {
  },
  computed: {
    ...mapGetters(['loggedInAdmin']),
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
