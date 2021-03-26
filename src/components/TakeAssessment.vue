<template>
    <div class="body-all">
        <SideNav/>
        <div class="body-right">

        <div class="body-right-top">
            <div class="body-right-top-1">
                <h1>Take Assessment</h1>
                <p><small>
                    click the button below to start assessment,
                    you have limited time for this test
                </small></p>
            </div>
            <div class="body-right-top-2">
                <p><small>Timer</small></p>
                <h2>00<small>min</small><span> 000<small>sec</small></span></h2>
            </div>
        </div>

        <div class="timer">
            <img src="../assets/hourglass.svg" alt="timer">
            <p>We have 4 days left until the next assessment<br/>
                <span>Watch this space</span></p>
            <button>Take Assessment</button>
        </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/SideNav.vue';

export default {
  name: 'TakeAssessment',
  components: {
    SideNav,
  },
};
</script>

<style scoped>
.body-all{
    display: flex;
    height: 100vh;
}
.body-right{
    margin-left: 47px;
    margin-right: 100px;
}
.body-right-top{
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
}
.body-right-top-1 h1{
    font-weight: 300;
    font-style: normal;
    font-size: 43px;
    letter-spacing: -0.02em;
    color: #2b3c4e;
}
.body-right-top-1 p{
    font-weight: 500;
    font-style: italic;
    font-size: 16px;
    color: #2b3c4e;
}
.body-right-top-2{
    float: right;
    margin-left: 80px;
}
.body-right-top-2 p{
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    color: #2b3c4e;
}
.body-right-top-2 h2{
    font-weight: 300;
    font-style: normal;
    font-size: 48px;
    color: #2b3c4e;
}
.body-right-top-2 small{
    font-weight: 400;
    font-size: 12px;
    color: #2b3c4e;
}
.timer{
    margin-top: 40px;
    text-align: center;
}
.timer img{
    width: 72px;
    height: 72px;
}
.timer p{
    color: #4F4F4F;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
    margin-top: 21px;
}
.timer button{
    outline: none;
    height: 41px;
    width: 205px;
    color: #fff;
    background-color: #aca3a3;
    border: 1px solid #aca3a3;
    margin-top: 24px;
}
</style>
