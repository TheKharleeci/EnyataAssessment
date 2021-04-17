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
              <h2 class="headerText">Entries - Batch 1</h2>
              <p> <small> <i>Comprises all that applied for batch 1</i> </small> </p>
            </b-col>
          </b-row>
          <b-row no-gutters class="mt-5">
            <b-col cols="11">
                 <div>
                 <b-table class="table table-hover"
              id="entries-table"
              href="#"
              :items="applicants"
              :fields="fields"
              head-variant="dark"
              table-variant="light"
              :borderless="true"
              responsive="sm"
              ref="selectableTable"
              selectable @row-clicked="(item) =>
                show(item)">
            </b-table>
                </div>
                 <modal name="modal-entries"
            :resizeable = "true"
            :draggable="true"
            :width="600"
            :height="1024">
              <EntriesModal @approve="methodHere"
              @decline="closeDeclineModal" :entryItem="entryItem" />
                </modal>
                <modal name="approve-modal" :width="400">
                    <ApproveModal :entryItem = 'entryItem'/>
                </modal>
                <modal name="decline-modal" :width="400">
                    <DeclineModal :entryItem = 'entryItem'/>
                </modal>
            </b-col>
            <b-col cols=""></b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import AdminSideBar from '../components/AdminSideBar.vue';
import EntriesModal from '../components/EntriesModal.vue';
import ApproveModal from '../components/ApproveModal.vue';
import DeclineModal from '../components/DeclineModal.vue';

export default {
  name: 'Entries',
  components: {
    AdminSideBar,
    EntriesModal,
    ApproveModal,
    DeclineModal,
  },
  data() {
    return {
      showModal: false,
      entryItem: {},
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
      ],
    };
  },
  methods: {
    show(applicant) {
      this.entryItem = applicant;
      this.$modal.show('modal-entries');
      console.log('applicant', this.entryItem);
    },
    methodHere() {
      // call method to hide other modal
      this.hide();
      // call method to show modal here
      this.showApproveModal();
    },
    closeDeclineModal() {
      this.hide();
      this.display();
    },
    showApproveModal() {
      this.$modal.show('approve-modal');
    },
    hideApprove() {
      this.$modal.show('approve-modal');
    },
    display() {
      this.$modal.show('decline-modal');
    },
    hideDecline() {
      this.$modal.hide('decline-modal');
    },
    hide() {
      this.$modal.hide('modal-entries');
    },
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
.table-hover{
  background: #fff;
}
a{
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
.main-page {
  padding-top: 80px;
  padding-bottom: 15px;
}
#spanA, #spanB, #spanC {
  display:block;
  width:65%;
  border-top: 4px solid #006DF0;
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
height: 50px;
z-index: 98;
}
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
  padding: 0 ;
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
}
button:focus {
  outline: none;
}
.modal-container{
    overflow-y: auto;
    height: 100vh;
    width: 50vw;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 99;
}
.big-container{
 margin-left: 48px;
}
.image-wrapper{
    width: 179px;
    height: 179px;
    border: 1px solid #474747;
    margin-top: 20px;
    margin-bottom: 6px;
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
    margin-top: 20px;
    align-content: left;
}
label{
    color: #474747;
    font-size: 14px;
    font-weight: 200;
}
.input{
    width: 231px;
    height: 36px;
}
.btn-wrapper{
    margin-top: 32px;
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>
