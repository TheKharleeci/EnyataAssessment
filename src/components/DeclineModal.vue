<template>
<div class="box">
    <div class="body">
        <p>Are you sure you want to decline<br/><span>this application?</span></p>
        <div class="space">
            <button @click.prevent="declineUser">Yes</button>
            <button @click.prevent="confirm">No</button>
        </div>
    </div>
</div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex';

export default {
  name: 'DeclineModal',
  props: ['entryItem'],
  methods: {
    ...mapMutations(['changeApplicationStatus']),
    ...mapActions(['updateStatus']),
    declineUser() {
      const data = {
        id: this.entryItem.id,
        applicationStatus: 'Declined',
      };
      this.updateStatus(data);
    },
    confirm() {
      const data = {
        id: this.entryItem.id,
        applicationStatus: 'Pending',
      };
      this.updateStatus(data);
      this.$router.push('/entries');
    },
  },
  mounted() {
    this.changeApplicationStatus();
  },
};
</script>

<style scoped>
.body p{
  font-size: 16px;
  font-weight: 300;
  color: #000;
  margin-top: 30px;
}
button{
width: 125px;
height: 48px;
background: #fff;
border-radius: 4px;
color: #000;
font-size: 14px;
outline: none;
cursor: pointer;
border: 1px solid #7557d3
}
button:hover{
    background: #7557D3;
    color: #fff;
}
p{
    margin-top: 75px;
}
.space{
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 42px;
    padding: 20px;
    padding-bottom: 30px;
}
.space button{
    outline: none;
    border: 1px solid #474747;
    font-size: 14px;
    width: 120px;
}
.space button:hover{
    border: 1px solid #7557d3;
    background: #7557d3;
    outline: none;
    color: #fff;
}
</style>
