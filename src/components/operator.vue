<template>
  <div id="operator">
    <ul>
      <li
        :key="index"
        :class="{change:ischange===index}"
        v-for="(operator,index) in operators"
        @click="OperatorValue(operator.value)"
        @mousedown="changeColor(index)"
      >{{operator.value}}</li>
    </ul>
  </div>
</template>

<script>
import bus from '../assets/bus.js';

export default {
  name: "operator",
  data: function() {
    return {
      ischange:'',
      operators: [
        {
          value: "/",    
        },
        {
          value: "*",      
        },
        {
          value: "-",
        },
        {
          value: "+",
        },
        {
          value: "=",
        }
      ]
    };
  },
  mounted(){
    bus.$on('changecolor',ischange=>{
      this.ischange=ischange;
    })
  },
  methods:{
    OperatorValue:function(data){
      bus.$emit('operator', data);
    },
    changeColor:function(index){
      this.ischange=index;
    }
  }
};
</script>

<style lang="scss">
#operator {
  ul {
    padding: 0 7%;
    margin: 0;
    height: 100%;
    li {
      background-color: #e79421;
      color: #fff;
      border-radius: 50%;
      text-align: center;
      line-height: 300%;
      font-size: 200%;
      margin-bottom: 15%;
      width: 100%;
      height: 18%;
    }
    .change{
      background-color:#fff;
      color: #e79421;
    }
  }
}
</style>
