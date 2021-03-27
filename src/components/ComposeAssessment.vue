<template>
    <div class="body-all">
        <AdminNav/>
        <div class="body-right">
            <h1>Compose Assessment</h1>
            <div class="right-wrapper-one">
                <div class="right-wrapper-left">
                    <p>15/30</p>
                    <button>+ Choose file</button>
                </div>
            </div>

            <div class="instruction">
                <label>Questions</label>
                <b-form-input
                    class="instruction-input">
                </b-form-input>
            </div>

            <div class="right-wrapper-two">
                <div class="right-wrapper-two-left">
                    <label>Option A</label>
                <b-form-input
                    id="inline-form-input-optiona"
                    class="input">
                </b-form-input>
                </div>
                <div class="right-wrapper-two-right">
                    <label>Option B</label>
                <b-form-input
                    id="inline-form-input-optionb"
                    class="input">
                </b-form-input>
                </div>
            </div>

            <div class="right-wrapper-three">
                <div class="right-wrapper-three-left">
                    <label>Option C</label>
                <b-form-input
                    id="inline-form-input-closuredate"
                    class="input">
                </b-form-input>
                </div>
                <div class="right-wrapper-three-right">
                    <label>Option D</label>
                <b-form-input
                    id="inline-form-input-batchid"
                    class="input">
                </b-form-input>
                </div>
            </div>
            <div class="right-wrapper-four">
            <b-button class="toggle">Previous</b-button>
            <b-button class="toggle">Next</b-button>
            </div>

            <div class="btn d-flex">
                <b-button id="button">Finish</b-button>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';

export default {
  name: 'ComposeAssessment',
  components: {
    AdminNav,
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
    margin-top: 60px;
}
h1{
font-style: normal;
font-weight: 300;
font-size: 43.5555px;
color: #2B3C4E;
letter-spacing: -0.02em;
}
.right-wrapper-one{
    display: flex;
    margin-top: 60px;
    justify-content: space-between;
}
.right-wrapper-left button{
    width: 456px;
    height: 108px;
    border: 1.55172px dashed #2B3C4E;
    box-sizing: border-box;
    border-radius: 6.2069px;
    background: #fff;
    font-size: 16px;
    color: #2B3C4E;
}
.right-wrapper-right h2{
    font-weight: 300;
    font-style: normal;
    font-size: 48px;
    color: #2b3c4e;
}
.right-wrapper-right small{
    font-weight: 400;
    font-size: 12px;
    color: #2b3c4e;
}
.instruction{
    justify-content: center;
    margin-top: 25px;
}
label{
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    color: #2B3C4E;
}
.input, .instruction-input{
    width: 456px;
    border: 1.5px solid #2B3C4E;
    box-sizing: border-box;
    border-radius: 4px;
    /* margin-right: 80px; */
}
.input:hover{
    background: #31d282;
}
.instruction-input{
    width: 976px;
    height: 166px;
}
.right-wrapper-two, .right-wrapper-three{
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
}
.right-wrapper-four{
    display: flex;
    margin-top: 52px;
    justify-content: space-around;
}
.toggle{
    width: 125px;
    height: 41px;
    border-radius: 4px;
    color: #fff;
    background: #2B3C4E;
}
.btn{
    justify-content: center;
    margin-top: 55px;
    margin-bottom: 97px;
}
#button{
    width: 205px;
    height: 41px;
}
</style>
