<template>
  <div class="hello">
    <button class="pre-button" @click="preview">미리보기(클릭)</button>
    <div ref='realReport' id="realReport"></div>
  </div>
</template>

<script>
import '@realgrid/realreport-viewer/dist/realreport.css';

export default {
  name: 'RealReport',
  props: {
    report: Object
  },
  data() {
    return {
      reportView: null,
    }
  },
  methods: {
    preview: function() {
      const viewer = new this.reportView(this.$refs.realReport);
      viewer.preview(this.report, '', true);
    },
  },
  async mounted() {
    this.reportView = (await import('@realgrid/realreport-viewer')).ReportViewer;
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
.pre-button {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
  font-size: 16px;
}
</style>
