<template>
    <div id = "chartId">
        <!-- <b-row>
            <h3>Bar Chart</h3>
            <bar-chart></bar-chart>
        </b-row> -->
        <b-row>
            <h3>Reactive Chart</h3>
            <reactive :chart-data="datacollection"></reactive>
        </b-row>
    </div>
</template>

<script> 
// import BarChart from '@/components/amount/BarChart.vue'
import Reactive from '@/components/amount/ReactiveChart.vue'
import { mapGetters} from 'vuex';

  export default {
    name: 'AmountGraph',
    components: {
    //   BarChart,
      Reactive,
    },
    computed: {
         ...mapGetters('amount',{
            datas :'getDatas'
        })
    },
    watch:{
        datas: function(){
            this.fillData();
        }
    },
    data() {
      return {
        avgList:[],
        datacollection: null // instantiating datacollection with null
      }
    },
    created() {
      this.fillData() //anytime the vue instance is created, call the fillData() function.
    },
    methods: {
      fillData() {
          for(var n=0;  n<this.datas.length;n++){
            for(var i=0 ; i<12; i++){
                if(this.datas[n].deal_month-1 == i) this.avgList[i] = this.datas[n].avg;
            } 
          }
        console.log(this.avgList);
        this.datacollection = {
          // Data for the y-axis of the chart
          labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', 
          '9월', '10월', '11월', '12월'],
          datasets: [
            {
              label: 'Data One',
              backgroundColor: '#f87979',
              // Data for the x-axis of the chart
              data: [this.avgList[0], this.avgList[1], this.avgList[2], this.avgList[3], 
              this.avgList[4], this.avgList[5], this.avgList[6], this.avgList[7], 
              this.avgList[8], this.avgList[9], this.avgList[10], this.avgList[11]]
            }
          ]
        }
      },
    }
 
  }
</script>

<style>

</style>