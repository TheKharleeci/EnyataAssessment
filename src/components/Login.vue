<template>
  <b-container>
    <div class="wrapper">
      <div class="mainlogo">
        <img alt="Enyata logo" class="img-fluid" src="../assets/logo.svg">
      </div>
      <div>
        <h2 class="companyName">enyata</h2>
        <h4><i>Applicant Log In</i></h4>
      </div>
    </div>
   <div class="row justify-content-center mt-4">
     <div class="col-lg-5 mb-5">
      <b-form @submit="onSubmit" @reset="onReset">
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
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
        id="input-group-2"
        label="Password"
        label-for="input-2"
        class="text-left"
        type="password">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter password"
            type="password"
            data-toggle="password"
            required
          ></b-form-input>
          <br>
        </b-form-group>
        <div class="mt-3">
        <b-button type="submit" block variant="dark">Sign In</b-button>
        <br>
        <div class="register d-flex justify-content-between">
          <p> <i> <small>Don't have an account yet? <a href=""> Sign Up</a></small></i></p>
          <p> <i><small>Forgot Password?</small></i></p>
        </div>
        </div>
      </b-form>
     </div>
  </div>
</b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
      },
    };
  },
  // methods: {
  //   onSubmit(event) {
  //     event.preventDefault();
  //     // alert(JSON.stringify(this.form));
  //   },
  //   onReset(event) {
  //     event.preventDefault();
  //     // Reset our form values
  //     this.form.email = '';
  //     this.form.name = '';
  //     // Trick to reset/clear native browser form validation state
  //     this.show = false;
  //     this.$nextTick(() => {
  //       this.show = true;
  //     });
  //   },
  // },
};
</script>

<style scoped>
.wrapper {
  max-width: 500px;
  text-align: center;
  align-items: center;
  margin: 0 auto;
  margin-top: 70px;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
  padding: 0;
}
.mainlogo {
  width: 49px;
  height: 52px;
  margin-top: 173px;
  margin: 0 auto;
  margin-bottom: 16.13px;
}
.logo img {
  width: 100%;
  height: 100%;
}
.companyName {
  margin-bottom: 8.5px;
}
</style>
