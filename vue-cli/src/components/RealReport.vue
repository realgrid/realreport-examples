<template>
  <div class="hello">
    <button @click="preview">미리보기</button>
    <div ref='realReport' id="realReport"></div>
  </div>
</template>

<script>
import { ReportViewer } from '@realgrid/realreport-viewer';
import '@realgrid/realreport-viewer/dist/realreport.css';

export default {
  name: 'RealReport',
  props: {
    report: Object
  },
  methods: {
    preview: function() {
      // TODO: 2021.12.31. sykim. TableBand 있을경우 오류 발생(번들에 포함필요)
      const viewer = new ReportViewer(this.$refs.realReport);
      viewer.preview(this.report, null, true);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
