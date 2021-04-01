<template>
    <div class="body">
        <AdminNav/>
        <div class="body-right">
            <h1>Assessment History</h1>
            <div class="table-wrapper">
                <div class="middle-man">
                <div class="table-header">
                    <b-row no-gutters class="align-items-center">
                    <b-col cols="2">Batch</b-col>
                    <b-col cols="3">Date Composed</b-col>
                    <b-col cols="3">No of Questions</b-col>
                    <b-col cols="3">Time Allocated</b-col>
                    <b-col cols="1">Status</b-col>
                    </b-row>
                </div>

                <b-list-group class="">
                    <b-list-group-item href="#" class="batch">
                    <b-row no-gutters>
                    <b-col cols="2">Batch 1</b-col>
                    <b-col cols="3">12/07/94</b-col>
                    <b-col cols="3">30</b-col>
                    <b-col cols="3">30 mins</b-col>
                    <b-col cols="1">Taken</b-col>
                    </b-row>
                    </b-list-group-item>
                    <b-list-group-item href="#" class="batch">
                    <b-row no-gutters>
                    <b-col cols="2">Batch 1</b-col>
                    <b-col cols="3">12/07/94</b-col>
                    <b-col cols="3">30</b-col>
                    <b-col cols="3">30 mins</b-col>
                    <b-col cols="1">Taken</b-col>
                    </b-row>
                    </b-list-group-item>
                    <b-list-group-item href="#" class="batch">
                    <b-row no-gutters>
                    <b-col cols="2">Batch 1</b-col>
                    <b-col cols="3">12/07/94</b-col>
                    <b-col cols="3">30</b-col>
                    <b-col cols="3">30 mins</b-col>
                    <b-col cols="1">Taken</b-col>
                    </b-row>
                    </b-list-group-item>
                </b-list-group>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import AdminNav from '@/components/AdminNav.vue';

export default {
  name: 'AssessmentHistory',
  components: {
    AdminNav,
  },
};
</script>

<style scoped>
.body{
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
.table-wrapper{
    width: 945px;
    min-height: 476px;
    margin-top: 20px;
    margin-right: 64px;
    background: #FFFFFF;
    box-shadow: 0px 5px 15px rgba(33, 31, 38, 0.05);
    border-radius: 8px;
}
.middle-man{
    padding: 38px 50px 0px 31px;
}
.table-header {
background-color: #2B3C4E;
height: 45px;
color: #fff;
font-size: 14px;
font-weight: bold;
margin-bottom: 20px;
padding: 0 ;
}
.batch {
font-weight: normal;
font-size: 14px;
line-height: 22px;
color: #4F4F4F;
height: 50px;
}
a {
color: #4f4f4f;
border: transparent;
border-left: 4px solid transparent;
}
a:hover {
color: #2B3C4E;
font-weight: 550;
border-color: #7557D3;
box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
border-radius: 8px;
}
</style>
