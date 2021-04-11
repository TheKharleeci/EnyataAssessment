<template>

<div class="box">
    <div class="body">
        <p>Are you sure you want to decline<br/><span>this application?</span></p>
        <div class="space">
            <button @click.prevent="decline">Yes</button>
            <button @click.prevent="check">No</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'DeclineModal',

  methods: {
    decline() {

    },
    check() {
      this.$router.push('/decline');
    },
  },
};
</script>

<style scoped>
.body{
   box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
   height: 250px;
   width: 250px;
   margin: auto;
   border-radius: 16px;

}
.body p{
  padding-top: 50px;
  font-size: 16px;
  font-weight: 300;
  color: #474747;
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
