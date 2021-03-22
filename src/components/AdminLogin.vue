<template>
<div class="container-bg d-flex">
  <div class="body-cover">
    <div class="laptopLogo">
      <img src="../assets/laptop.svg" alt="Laptop icon">
    </div>
  </div>
    <b-container>
      <!-- <div class="wrapper"> -->
        <div class="mainlogo">
          <img alt="Enyata logo" class="img-fluid" src="../assets/newlogowhite.svg">
        </div>
        <div>
          <h4><i>Admin Log In</i></h4>
        </div>
      <!-- </div> -->
      <div class="row justify-content-center mt-4">
        <div class="col-lg-5 form">
          <b-form @submit="onSubmit" >
            <b-form-group
              id="input-group-1"
              label="Email address"
              class="text-left"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                class="input"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
            id="input-group-2"
            label="Password"
            label-for="input-2"
            class="text-left">
              <b-form-input
                id="input-2"
                v-model="form.name"
                placeholder="Enter password"
                class="input"
                type="password"
                data-toggle="password"
                required
              ></b-form-input>
              <br>
            </b-form-group>
            <div class="mt-3">
            <b-button type="submit" block variant="light">Sign In</b-button>
            <div class="register float-right">
              <p> <i><small>Forgot Password?</small></i></p>
            </div>
            </div>
          </b-form>
        </div>
      </div>
  </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        food: null,
        checked: [],
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      // alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = '';
      this.form.name = '';
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>

<style scoped>
/* body {
  background-color: #121F2B;
} */
.container-bg {
  background-color: #7557D3;
  min-height: 100vh;
  color: #fff;
  position: relative;
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
.mainlogo {
  width: 110px;
  height: 21px;
  margin: 0 auto;
  margin-top: 100px;
  margin-bottom: 16.13px;
}
h4 {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #fff;
  margin-top: 24px;
}
.mainlogo img {
  width: 100%;
  height: 100%;
}
.input {
  background-color : #7557D3;
  color: #fff;
}
::placeholder {
  color: gainsboro;
}
/* .companyName {
  margin-bottom: 8.5px;
} */
/* .body-cover {
  position: relative;
  box-sizing: border-box;
} */
.laptopLogo {
  position: absolute;
  right: 0px;
  /* overflow: hidden; */
  margin-left: 60px;
  margin-top: 80px;
  width: 500px;
  height: 550px;
}
.laptopLogo img {
  width: 100%;
  height: 100%;
  position: relative;
}
.form {
  /* margin-right: 20px; */
}
</style>
