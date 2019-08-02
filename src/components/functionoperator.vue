<template>
  <div id="functionoperator">
    <ul>
      <li
        :key="index"
        v-for="(functionoperator,index) in functionoperators"
        @click= "FunctionValue(functionoperator.value),changeColor('')"
      >{{functionoperator.value}}</li>
    </ul>
  </div>
</template>

<script>
import bus from '../assets/bus.js';

export default {
  name: "functionoperator",
  data: function() {
    return {
      functionoperators: [ 
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
#functionoperator {
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
