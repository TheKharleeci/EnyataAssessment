<template>
<div>
    <div class="body">
        <div class="image">
        <img src="../assets/success.svg" alt="success">
        </div>
        <p>Application Successful</p>
        <button @click="toDashboard">Go to Dashboard</button>

    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SuccessfulApplication',
  methods: {
    ...mapActions(['merge']),
    toDashboard() {
      this.merge();
      this.$router.push('/client');
    },
  },
  mounted() {
    this.$store.dispatch('merge');
  },
};
</script>
<style scoped>
.body{
    width: 300px;
    height: 350px;
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
    padding: 60px;
    align-items: center;
    text-align: center;
    margin: 80px auto;
    border-radius: 16px;
}
.image{
    height: 100px;
    width: 100px;
    margin: auto;
    align-items: center;
    text-align: center;
}
.image img{
    width: 100%;
    height:100%;
}
.body p{
    font-size: 16px;
    font-weight: 400;
    font-style: italic;
    margin-top: 20px;
    color: #474747;
}
.body button{
    width: 185px;
    height: 48px;
    background-color: #7557d3;
    color: #fff;
    border: 1px solid #7557d3;
    border-radius: 4px;
    outline: none;
    margin-top: 20px;
}

</style>
