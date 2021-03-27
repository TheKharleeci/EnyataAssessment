<template>
    <div class="body-all">
        <SideNav/>
        <div class="body-right">
        <div class="body-right-top">
            <div class="body-right-top-left">
                <h1>Take Assessment</h1>
                <p><small>Thank you!</small></p>
            </div>
            <div class="body-right-top-right">
                <p><small>Timer</small></p>
                <h2>23<small>min</small><span> 043<small>sec</small></span></h2>
            </div>
        </div>
        <div class="success">
            <img src="../assets/success.svg" alt="successful">
            <p>We have received you assessment test, we will get back to you soon.<br/>
            <span>Best of luck</span></p>
            <button>Home</button>
        </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'Successful',
  components: {
    SideNav,
  },
};
</script>

<style scoped>
.body-all{
    display: flex;
    min-height: 100vh;
}
.body-right{
    margin-left: 47px;
    width: 100vw;
    margin-right: 100px;
}
.body-right-top{
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
}
.body-right-top-left h1{
    font-weight: 300;
    font-style: normal;
    font-size: 43px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
}
.body-right-top-left p{
    font-weight: 500;
    font-style: italic;
    font-size: 16px;
    color: #2b3c4e;
}
.body-right-top-right{
    float: right;
    margin-left: 80px;
}
.body-right-top-right p{
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: #2b3c4e;
}
.body-right-top-right h2{
    font-weight: 300;
    font-style: normal;
    font-size: 48px;
    color: #2b3c4e;
}
.body-right-top-right small{
    font-weight: 400;
    font-size: 12px;
    color: #2b3c4e;
}
.success{
    margin-top: 128px;
    text-align: center;
}
.success img{
    width: 112px;
    height: 112px;
}
.success p{
    color: #4F4F4F;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    margin-top: 21px;
}
.success button{
    outline: none;
    height: 41px;
    width: 205px;
    color: #fff;
    background-color: #7557d3;
    border: 1px solid #7557d3;
    border-radius: 4px;
    margin-top: 34px;
}
</style>
