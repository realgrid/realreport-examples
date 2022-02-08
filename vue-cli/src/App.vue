<template>
  <div id="app">
    <RealReport :report="resultReport"/>
  </div>
</template>

<script lang="ts">
import RealReport from './components/RealReport.vue'
import resultReport from "../../report-samples/resultReport";

export default {
  name: 'App',
  components: {
    RealReport
  },
  data() {
    return {
      resultReport
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
