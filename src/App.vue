<template>
  <div id="app">
    <display />
    <keyboard />
  </div>
</template>

<script>
import keyboard from './components/keyboard.vue';
import display  from './components/display.vue';

export default {
  name: 'app',
  components: {
    keyboard,
    display
  }
}
</script>

<style lang="scss">
body,html{
  height: 100%;
  background-color: #000;
  padding: 0;
  margin: 0;
}
li{
  list-style: none;
}
ul{
  padding: 0;
  margin: 0;
}
#app {
background-color: #000;
display: flex;
flex-direction: column;
height: 100%;
}
</style>
