<template>
  <div id="keyboard">
    <div class="keyboard-l">
      <functionOperator />
      <number />
    </div>
    <operator class="keyboard-r"/>
  </div>
</template>

<script>
import operator from './operator.vue';
import functionOperator from './functionOperator.vue';
import number from './number.vue';

export default {
  name:'keyboard',
  components: {
     operator,
     functionOperator,
     number
  },

}
</script>

<style lang="scss">
#keyboard{
  height: 100%;
  display: flex;
  flex-direction: row;
  .keyboard-l{
    width: 75%;
    display: flex;
    flex-direction: column;
  }
  .keyboard-r{
    width: 25%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}
</style>
