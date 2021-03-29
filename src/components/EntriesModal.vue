<template>
    <div class="entire-wrapper">
        <b-list-group-item href="#" class="batch" @click.prevent="show">
        <b-row no-gutters>
            <b-col cols="2">{{users.firstName}}{{users.lastName}}</b-col>
            <b-col cols="2">{{users.email}}</b-col>
            <b-col cols="2">{{users.dob}}</b-col>
            <b-col cols="3">{{users.address}}</b-col>
            <b-col cols="2">{{users.university}}</b-col>
            <b-col cols="1">{{users.cgpa}}</b-col>
        </b-row>
        </b-list-group-item>
        <modal name="modal-entries" :adaptive="true">
        <div class="modal-container">
            <div class="big-container">
            <div class="image-wrapper">
            <img :src="photo_url" :alt="photo_url">
            </div>
            <p>Personal Details</p>
            <hr>
            <div class="wrapper">
                <div>
                    <label for="name">Name</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
                <div>
                    <label for="email">Email</label>
                    <b-input
                    class="input" type="email"></b-input>
                </div>
            </div>
            <div class="wrapper">
                <div>
                    <label for="address">Address</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
                <div>
                    <label for="university">University</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
            </div>
            <div class="wrapper">
                <div>
                    <label for="course">Course of Study</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
                <div>
                    <label for="dob">Date of Birth</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
            </div>
            <div class="wrapper">
                <div>
                    <label for="cgpa">CGPA</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
                <div>
                    <label for="cv">CV</label>
                    <b-input
                    class="input" type="text"></b-input>
                </div>
            </div>
            <div class="btn-wrapper">
                <div>
                    <ApproveModal/>
                </div>
                <div>
                    <DeclineModal/>
                </div>
            </div>
            </div>
        </div>
        </modal>
    </div>
</template>

<script>
import ApproveModal from '@/components/ApproveModal.vue';
import DeclineModal from '@/components/DeclineModal.vue';

export default {
  name: 'EntriesModal',
  components: {
    ApproveModal,
    DeclineModal,
  },
  methods: {
    show() {
      this.$modal.show('modal-entries');
    },
    hide() {
      this.$modal.hide('modal-entries');
    },
  },
};
</script>

<style scoped>
.modal-container{
    overflow-y: auto;
    height: 50vh;
    width: 50vw;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
}
.batch {
font-weight: normal;
font-size: 14px;
line-height: 22px;
color: #4F4F4F;
height: 50px;
z-index: 98;
}
a {
  color: #4f4f4f;
  border: transparent;
  border-left: 4px solid transparent;
}
a:hover {
  color: #2B3C4E;
  border-color: #7557D3;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}
.big-container{
 margin-left: 48px;
}
.image-wrapper{
    width: 179px;
    height: 179px;
    border: 1px solid #474747;
    margin-top: 60px;
    margin-bottom: 42px;
}
p{
    text-align: left;
    font-weight: 500;
    font-size: 16px;
}
.wrapper{
    display: flex;
    gap: 32px;
    justify-content: left;
    margin-top: 36px;
    align-content: left;
}
label{
    color: #474747;
    font-size: 14px;
    font-weight: 200;
}
.input{
    width: 231px;
    height: 48px;
}
.btn-wrapper{
    margin-top: 48px;
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>
