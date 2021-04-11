<template>
<div>

<b-form>
                    <div class="modal-container">
                    <div class="big-container">
                <div class="image-wrapper">
            <!--// attach photo url-->
            <img :src="applicant.picture" alt="profile pic">
           </div>
                    <p>Personal Details</p>
                    <hr>
                <div class="wrapper">
                <div>
                    <label for="name">Name</label>
                    <b-input
                    class="input" type="text"
                    v-model="applicant.name" disabled
                    ></b-input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <b-input
                    class="input" type="email"
                    v-model="applicant.email" disabled> </b-input>
                </div>
            </div>

            <div class="wrapper">
                <div>
                    <label for="address">Address</label>
                    <b-input
                    class="input" type="text"
                    v-model="applicant.address" disabled></b-input>
                </div>
                <div>
                    <label for="university">University</label>
                    <b-input
                    class="input" type="text"
                    v-model="applicant.university" disabled></b-input>
                </div>
            </div>

            <div class="wrapper">
                <div>
                    <label for="course">Course of Study</label>
                    <b-input
                    class="input" type="text"
                    v-model="applicant.course_of_study" disabled></b-input>
                </div>
                <div>
                    <label for="dob">Date of Birth</label>
                    <b-input
                    class="input" type="text"
                    v-model="applicant.date_of_birth" disabled></b-input>
                </div>
            </div>

            <div class="wrapper">
                <div>
                    <label for="cgpa">CGPA</label>
                    <b-input
                    class="input" type="text"
                    v-model="applicant.cgpa" disabled></b-input>
                </div>
                <div>
                    <label for="cv">CV</label>
                    <p
                    class="input">
                    <a :href="applicant.cv"
              target="_blank">{{applicant.name}}'s CV</a></p>
                </div>
            </div>

            <div class="btn-wrapper">
                <div class="new-button">
                <button @click.prevent="$emit('approve')">Approve</button>
                </div>
                <div class="new-button">
                <button @click.prevent="$emit('decline')">Decline</button>
                </div>
            </div>
            </div>
            </div>
                </b-form>

    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'EntriesModal',
  data() {
    return {
      form: {
      },
    };
  },
  props: ['entryItem'],
  methods: {
  },
  computed: {
    ...mapGetters({
      applicants: 'getApplicants',
    }),
    applicant() {
      return this.entryItem;
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
.form-body{
padding: 30px;
justify-content: center;
}
p, label{
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    color: #474747;
}
label{
    font-weight: 200;
    font-style: normal;
    font-size: 14px;
}
.modal-container{
background-color: #fff;
border-radius: 2px;
box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
transition: all .3s ease;

overflow-y: auto;
min-height: 100vh;
min-width: 600px;
position: absolute;
top: 0;
bottom: 0;
right: 0;
left: 0;
z-index: 99;
}
.big-container{
 margin-left: 30px;
 margin-right: 30px;
}
.image-wrapper{
    width: 140px;
    height: 140px;
    border: 1px solid #474747;
    margin-top: 50px;
    margin-bottom: 6px;
}
.image-wrapper img{
    width: 100%;
    height: 100%;
}
.btn{
margin-top: 6px;
justify-content: center;
}
button, .new-button button{
width: 379px;
height: 50px;
background-color: #7557d3;
color: #fff;
font-size: 14px;
outline: none;
border: 1px solid #7557d3;
border-radius: 4px;
}
.wrapper{
    display: flex;
    gap: 40px;
    justify-content: left;
    margin-top: 10px;
    align-content: left;
}
.input{
    width: 231px;
    height: 28px;
}
.btn-wrapper{
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 20px;
}
.new-button button{
 width: 140px;
background-color: #fff;
color: #000;
border: none;
font-size: 16px;
border: 1px solid #474747;
}
.new-button button:hover{
    background-color: #7557d3;
    color: #fff;
    border: 1px solid #7557d3;
}
input[type="text"]:disabled, input[type="email"]:disabled {
background: #fff;
}
</style>
