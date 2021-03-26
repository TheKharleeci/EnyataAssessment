<template>
    <div class="body-all">
        <AdminNav/>
        <div class="body-right">
            <h1>Create Application</h1>
            <div class="right-wrapper-one">
                <div class="right-wrapper-left">
                    <button>+ Choose file</button>
                </div>
                <div class="right-wrapper-right">
                    <label>Link</label>
                <b-form-input
                    id="inline-form-input-link"
                    class="input">
                </b-form-input>
                </div>
            </div>
            <div class="right-wrapper-two">
                <div class="right-wrapper-two-left">
                    <label>Application closure date</label>
                <b-form-input
                    id="inline-form-input-closuredate"
                    class="input"
                    placeholder="dd/mm/yyyy">
                </b-form-input>
                </div>
                <div class="right-wrapper-two-right">
                    <label>Batch ID</label>
                <b-form-input
                    id="inline-form-input-batchid"
                    class="input">
                </b-form-input>
                </div>
            </div>
            <div class="d-flex wrapper">
            <div class="instruction">
                <label>Instructions</label>
                <b-form-input
                    class="instruction-input">
                </b-form-input>
            </div>
            </div>
            <div class="d-flex btn">
                <button id="button">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';

export default {
  name: 'CreateApplication',
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
    /* margin-right: 60px; */
}
.input::placeholder{
    font-size: 10px;
    color: #474747;
    font-weight: 400;
    font-style: italic;
}
.right-wrapper-two{
    display: flex;
    justify-content: space-between;
    margin-top: 52px;
}
.wrapper{
    justify-content: center;
}
.instruction{
    margin-top: 36px;
}
.instruction-input{
    width: 976px;
    height: 166px;
}
.btn{
    margin-top: 44px;
    justify-content: center;
    margin-bottom: 278px;
}
#button{
    width: 379px;
    height: 50px;
    color: #fff;
    background: #2B3C4E;
    border: 1px solid #2B3C4E;
    border-radius: 4px;
}
.wrapper{
    align-self: center;
}
</style>
