<template>
    <div class="card-forget">
        <div class="head">
            <h2>Forgot Password</h2>
            <p>Please select option to send link to reset password</p>
        </div>
        <div class="email">
            <div class="all-span">
        <div class="all-span-icon">
            <img src="../assets/email.svg" alt="email">
        </div>
        <div class="text">
            <h6>Reset via Email</h6>
            <p>Reset password link will be sent to your<br/>
                <span> registered email address</span></p>
        </div>
        <div class="all-span-icon-right">
            <img src="../assets/tick.svg" alt="tick">
        </div>
        </div>
        </div>
        <div class="sms" v-on:click.capture="doThat">
            <div class="all-span-two">
                <div class="all-span-icon">
                    <img src="../assets/phone.svg" alt="phone">
                </div>
                <div class="text2">
                    <h6 id="msg">Reset via Sms</h6>
                    <p>Reset password link will be sent to your<br/>
                    <span> registered phone number</span></p>
                </div>
                <div>
                </div>
            </div>
        </div>
            <ModalPassword/>
                <p id="check"><small>Didn't receive link? <a href="#">Resend</a></small></p>
    </div>
</template>
<script>
import ModalPassword from '@/components/ModalPassword.vue';
// import ModalPassword from './ModalPassword.vue';

export default {
  name: 'ForgetPassword',
  components: {
    ModalPassword,
    // ModalPassword,
  },
  data() {
    return {
      showModal: true,
    };
  },
  methods: {
    doThis() {
      alert('We are working on this feature');
    },
    doThat() {
      alert('This service is not available. Kindly use the reset via email route');
    },
  },
};
</script>

<style scoped>
.card-forget{
    justify-content: center;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
    width: 614px;
    height: 623px;
    margin: 100px auto;
}
.head h2{
    padding-top: 34px;
    font-style: normal;
    font-size: 32px;
    font-weight: 600;
    text-align: center;
    color: #2b3c4e;
}
.head p{
    margin-top: 16px;
    text-align: center;
    color: #7d7d7d;
    font-size: 16px;
    font-weight: normal;
    font-style: normal;
}
.email, .sms{
    margin: 48px auto;
    border-radius: 4px;
    background: #fff;
    box-sizing: border-box;
    width: 498px;
    height: 130px;
    border: 1px solid #e8e8e8
}
.email:hover, .sms:hover{
    border: 1px solid #7557d3;
    box-shadow: 0px 8px 30px 10px rgba(117, 87, 211, 0.04);
}
.all-span, .all-span-two{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.all-span-two{
    gap: 20px;
}
.all-span-icon{
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #e7e7e7;
    justify-content: center;
    align-items: center;
    /* margin-left: 18px;
    margin-top: 30px; */
}
.all-span-icon-right{
    width: 24px;
    height: 24px;
    background: #7557d3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.all-span-icon img{
    width: 50%;
    height: 50%;
}
.sms{
    margin: -24px auto;
}
.all-span, .all-span-two{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}
.all-span-two{
    gap: 20px;
}
.all-span-icon{
    display: flex;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: #e7e7e7;
    justify-content: center;
    align-items: center;
    /* margin-left: 18px;
    margin-top: 30px; */
}
.all-span-icon-right{
    width: 24px;
    height: 24px;
    background: #7557d3;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-right: 21px;
    margin-top: 35px; */
}
.all-span-icon img{
    width: 50%;
    height: 50%;
}
.text, .text2{
    margin-top: 27px;
}
.text h6, #msg{
    color: #211f26;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
}
.text h6:hover, #msg:hover{
    color: #7557d3;
}
.text p, .text2 p{
    font-weight: 400;
    font-size: 14px;
    color: #b1b1b1;
}
.text, .text2{
    margin-top: 27px;
}
.text2{
    margin-left: -26px;
}
.text h6, #msg{
    color: #211f26;
    font-weight: 600;
    font-style: normal;
    font-size: 18px;
}
.text h6:hover, #msg:hover{
    color: #7557d3;
}
.text p, .text2 p{
    font-weight: 400;
    font-size: 14px;
    color: #b1b1b1;
}

#check{
    color: #b1b1b1;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    margin-top: 10px;
}
a{
    text-decoration: none;
    color: #7557d3;
    font-size: 14px;
    font-weight: 400;
}
</style>
