<template>
  <div id="functionOperator">
    <ul>
      <li
        :key="index"
        v-for="(functionOperator,index) in functionOperators"
        @click= "FunctionValue(functionOperator.value),changeColor('')"
      >{{functionOperator.value}}</li>
    </ul>
  </div>
</template>

<script>
import bus from '../assets/bus.js';

export default {
  name: "functionOperator",
  data: function() {
    return {
      functionOperators: [ 
        {
          value: "AC",
        },
        {
          value: "+/-",
        },
        {
          value: "%",
        }
      ]
    }
  },
  methods:{
      FunctionValue:function(data){
         bus.$emit('function', data);
      },
      changeColor(data)
      {
        bus.$emit('changecolor',data)
      }
  }
};
</script>


<style lang="scss">
#functionOperator {
  height: 18%;
  ul {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    li {
      background-color: #a4a4a4;
      margin-left: 3%;
      border-radius: 50%;
      width: 30%;
      text-align: center;
      font-size: 200%;
      line-height: 300%;
    }
  }
}
</style>
