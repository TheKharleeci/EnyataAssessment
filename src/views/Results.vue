<template>
  <div>
    <div>
      <b-row no-gutters >
        <b-col cols="3">
          <h2>test this</h2>
          <AdminSideBar />
        </b-col>
        <b-col cols="9">
           <b-row no-gutters >
            <b-col class="text-left">
              <div class="d-flex ">
                <h2 class="headerText">Results - Batch 1</h2>
                <div class="arrow">
                  <img src="../assets/down-arrow.svg" alt="">
                </div>
              </div>
              <p> <small> <i>Comprises all that applied for batch 1</i> </small> </p>
            </b-col>
          </b-row>
          <b-row no-gutters class="mr-5">
            <b-table
              id="entries-table"
              :items="applicants"
              :fields="fields"
              head-variant="dark"
              table-variant="light"
              :borderless="true"
              responsive="sm"
              ref="selectableTable"
              selectable>
            </b-table>
            <!-- <b-col cols="12"> -->
              <!-- <div>
                <div class="table-header ">
                  <b-row no-gutters class="align-items-center">
                    <b-col cols="2" class="d-flex justify-content-start">Name</b-col>
                      <b-col cols="2" class="d-flex justify-content-start">Email</b-col>
                      <b-col cols="2" class="d-flex justify-content-start">DOB-Age <span>
                        <button class="btn">
                          <img src="../assets/age-arrow.svg" alt="sort button">
                        </button> </span>
                      </b-col>
                      <b-col cols="2">Address</b-col>
                      <b-col cols="2">University</b-col>
                      <b-col cols="1">CGPA
                        <button class="btn">
                          <img src="../assets/age-arrow.svg" alt="sort button">
                        </button>
                      </b-col>
                      <b-col cols="1">Test Scores
                        <button class="btn">
                          <img src="../assets/age-arrow.svg" alt="sort button">
                        </button>
                      </b-col>
                  </b-row>
                </div>
                <b-list-group class="">
                  <b-list-group-item href="#" class="batch"
                  v-for="applicant in applicants" :key="applicant.id">
                    <b-row no-gutters>
                      <b-col cols="2" class="d-flex justify-content-start g-2">
                        {{ applicant.name }}</b-col>
                      <b-col cols="2" class="d-flex justify-content-start">
                        {{ applicant.email }}</b-col>
                      <b-col cols="2" class="d-flex justify-content-start">
                        {{ applicant.date_of_birth }}</b-col>
                      <b-col cols="2" class="d-flex justify-content-center">
                        {{ applicant.address }}</b-col>
                      <b-col cols="2" class="d-flex justify-content-center">
                        {{ applicant.university }}</b-col>
                      <b-col cols="1">
                        {{ applicant.cgpa }}</b-col>
                      <b-col cols="1" class="d-flex justify-content-center">19</b-col>
                    </b-row>
                  </b-list-group-item>
                </b-list-group>
              </div> -->
            <!-- </b-col> -->
            <b-col cols=""></b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import AdminSideBar from '@/components/AdminSideBar.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'Dashbord',
  components: {
    AdminSideBar,
  },
  data() {
    return {
      fields: [
        {
          key: 'name',
          label: 'Name',
          sortable: true,
        },
        {
          key: 'email',
          label: 'Email',
          sortable: false,
        },
        {
          key: 'date_of_birth',
          label: 'DOB-Age',
          sortable: true,
        },
        {
          key: 'address',
          label: 'Address',
          sortable: false,
        },
        {
          key: 'university',
          label: 'University',
          sortable: false,
        },
        {
          key: 'cgpa',
          label: 'Cgpa',
          sortable: true,
        },
        {
          key: 'score',
          label: 'Test Score',
          sortable: true,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      applicants: 'getApplicants',
    }),
  },

  mounted() {
    this.$store.dispatch('setApplicants');
  },
};
</script>

<style scoped>
.box {
  width: 250px;
  min-height: 352px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
.headerText {
  margin-top: 90px;
  margin-bottom: 1px ;
}
a {
  color: #4f4f4f;
  border: transparent;
  border-left: 4px solid transparent;
  padding: 12px 0px;
  margin-right: 40px;
  /* border: none; */
}
a:hover {
  color: #2B3C4E;
  /* background: cadetblue; */
  /* font-weight: 550; */
  /* border-left-color: #31D283; */
  border-color: #7557D3;
  box-shadow: 8px 18px 20px rgba(79, 79, 79, 0.3);
  border-radius: 8px;
}
.singleRow{
  margin-right: 20px;
}
.table-header {
  background-color: #2B3C4E;
  height: 45px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin-bottom: 20px;
  /* margin-right: 20px; */
  padding: 0 ;
}

/* .bar {
  width: 21%;
} */
/* .wrapper {
  min-height: 100vh;
}
b-container {
  margin: 0;
}*/
.main-page {
  padding-top: 80px;
  padding-bottom: 15px;
  /* margin-left: 0; */
}
/*.intro-text {
  font-style: italic;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: #2B3C4E;
  margin-top: 14px;
  margin-bottom: 60px;
} */
#spanA, #spanB, #spanC {
  display:block;
  width:65%;
  border-top: 4px solid #006DF0;
  /* background: #006DF0; */
  border-radius: 4px;
}
#spanB {
  border-top: 4px solid #00F026;;
}
#spanC {
  border-top: 4px solid #F09000;;
}
h1 {
  font-weight: 300;
  font-size: 48px;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
h2 {
  font-weight: 300;
  font-size: 44px;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
h6 {
  margin-top: 9px;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #4F4F4F;
  /* margin-bottom: 20px; */
}
.boxHeader {
  font-weight: bold;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: -0.02em;
  color: #2B3C4E;
}
.batch {
font-weight: normal;
font-size: 14px;
line-height: 22px;
color: #4F4F4F;
/* width: 482px; */
height: 50px;
}
/* .batchText {
  font-weight: normal;
  font-size: 12px;
  line-height: 22px;
  color: #4F4F4F;
} */
/*
p {
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #4F4F4F;
}
.line {
  border-bottom: 1px solid #CECECE;
  height: 60px;
} */
.box {
  width: 400px;
  min-height: 352px;
  border: 1px solid #ECECF9;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 30px;
}
.note {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 200px;
  width: 350px;
  flex-direction: column;
}
#note {
font-weight: normal;
font-size: 16px;
line-height: 23px;
color: #4F4F4F;
}

.btnText {
font-weight: bold;
font-size: 16px;
line-height: 19px;
color: #FFFFFF;
}
.table-header {
  background-color: #2B3C4E;
  height: 45px;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  line-height: 17px;
  margin-bottom: 20px;
  /* margin-right: 20px; */
  /* padding-left: 42px ; */
}
.sort-btn {
  height: 7px;
  width: 10.4px;
}
.sort-btn img {
  height: 100%;
  width: 100%;
}
.btn {
  border: none;
  /* padding: 0; */
  /* padding: 0;
  margin: 0; */
}
button:focus {
  outline: none;
}
.arrow {
  height: 12px;
  width: 12px;
  margin-left: 14px;
  margin-top: 110px;
}
.arrow img {
  height: 100%;
  width: 100%;
}
</style>
