<template>
<div>
    <div class="wrapper">
      <div class="mainlogo">
        <img alt="Enyata logo" class="img-fluid" src="../assets/enyatalogo.svg">
      </div>
      <div>
        <h1>You have successfully reset your password!!</h1>
        <p>Kindly login with your new password.</p>
      </div>
    </div>
    <div class="row no-gutters justify-content-center mt-4">
      <div class="col-lg-4 mb-5">
      <b-button type="submit" class="button" block variant="dark"
      @click="tologin">Go to Login</b-button>
      </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'ResetSuccessful',
  data() {
    return {
      password: '',
    };
  },
  methods: {
    tologin() {
      this.$router.push('/userLogin');
    },
  },
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
  width: 110px;
  height: 21px;
  margin-top: 173px;
  margin: 0 auto;
  margin-bottom: 16.13px;
}
.logo img {
  width: 100%;
  height: 100%;
}
/* .companyName {
  margin-bottom: 8.5px;
} */
h1 {
  font-weight: 500;
  font-size: 24px;
  line-height: 29px;
  color: #2B3C4E;
  margin-top: 24px;
}

.button {
  /* background-color: ; */
  background: #7557D3;
  border-radius: 4px;
  font-weight: bold;
  font-size: 16px;
  height: 45px;
  border: none;
  margin-bottom: 12px;
  /* line-height: 19px; */
}
a {
  text-decoration-line: underline;
}

</style>
