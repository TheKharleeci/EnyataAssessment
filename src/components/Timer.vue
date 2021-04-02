<template>
  <div>
    <b-row no-gutters>
      <!-- <b-col cols="3"></b-col> -->
      <b-col cols="9">
       <b-row no-gutters class="text-left">
            <b-col cols="9">
              <div class="">
                <h4>Timer Setting</h4>
              </div>
              <span class="spanD"></span>
              <div class="text-left">
                <p class="timer">Set Time</p>
                  <input type="number" min="0" max = "99"
                  class="time"
                  v-model="time.min"
                  placeholder="00" >
                  <span><small class="mr-2">min</small></span>
                  <input type="number" min="0" max = "999"
                  v-model="time.sec"
                  class="sec" placeholder="000"><span>
                    <small>sec</small></span> <br>
                  <b-button class="save-button" @click="setTestTime">Save</b-button>
              </div>
            </b-col>
          </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Time',
  data() {
    return {
      time: {
        min: '',
        sec: '',
      },
      testTime: '',
    };
  },
  methods: {
    ...mapActions(['setTime']),
    setTestTime() {
      const minutes = parseInt(this.time.min, 10) * 60;
      const seconds = parseInt(this.time.sec, 10);
      this.testTime = minutes + seconds;
      console.log(this.testTime);

      const payload = { time: this.testTime };
      this.setTime(payload);
    },
  },
  components: {
  },
  computed: {
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
.time {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
  width: 60px;
  border: none;
}
.time:hover, .sec:hover {
  background-color: rgba(117, 87, 211, 0.1);
}
.sec {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
  width: 80px;
  border: none;
}
small {
  font-size: 20px;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
*:focus {
    outline: none;
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
