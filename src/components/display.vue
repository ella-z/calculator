<template>
  <div id="display">
    <span>{{result}}</span>
  </div>
</template>

<script>
import bus from "../assets/bus.js";
import * as math from "mathjs";

export default {
  name: "display",
  data: function() {
    return {
      result: 0
    };
  },
  mounted: function() {
    var vm = this;
    var first = true;
    var count = new Array(2);
    // 用$on事件来接收参数
    bus.$on("number", (data, isfirst, isdot, iszero) => {
      if (isfirst || first) {
        vm.result = data;
        if (isdot) {
          vm.result = "0" + data;
        }
        first = false;
        iszero = false;
      } else {
        if (isdot) {
          if (String(this.result).indexOf(".") === -1) {
            vm.result = vm.result + data;
            first = false;
          }
        } else if (
          iszero &&
          String(this.result).length === 1 &&
          String(this.result) === "0"
        ) {
          return;
        } else {
          vm.result = vm.result + data;
        }
      }
    });
    bus.$on("function", data => {
      if (data === "AC") {
        vm.result = 0;
        first = true;
        times = 0;
        for (var i = 0; i < 2; i++) {
          count[i] = "";
        }
      }
      if (data === "+/-") {
        vm.result = -vm.result;
      }
      if (data === "%") {
        vm.result = vm.result * 0.01;
      }
    });
    var times = 0,
      operator;
    bus.$on("operator", data => {
      if (times === 0) {
        operator = data;
      }
      count[times] = parseFloat(this.result);
      times++;
      if (times === 2) {
        times = 0;
        switch (operator) {
          case "+": {
            this.result = this.printFn(count[0] + count[1]);
            count[times] = parseFloat(this.result);
            times++;
            break;
          }
          case "-": {
            this.result = this.printFn(count[0] - count[1]);
            count[times] = parseFloat(this.result);
            times++;
            break;
          }
          case "*": {
            this.result = this.printFn(count[0] * count[1]);
            count[times] = parseFloat(this.result);
            times++;
            break;
          }
          case "/": {
            this.result = count[0] / count[1];
            count[times] = parseFloat(this.result);
            times++;
            break;
          }
          case "=": {
            count[times] = parseFloat(this.result);
            times++;
            break;
          }
        }
        operator = data;
      }
      first = true;
    });
  },
  methods: {
    printFn: function(value) {
      const precision = 14;
      return Number(math.format(value, precision));
    }
  }
};
</script>


<style lang="scss">
#display {
  padding-top: 5rem;
  display: flex;
  span {
    display: flex;
    justify-content: flex-end;
    font-size: 3rem;
    color: #fff;
    height: 5rem;
    width: 100%;
    padding-right: 5%;
    overflow-x: scroll;
  }
}
</style>
