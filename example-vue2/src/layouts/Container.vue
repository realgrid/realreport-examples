<template>
  <div class="container">
    <div class="sidenav-container">
      <div class="sidenav">
        <div class="menu">
          <ul class="menu-list">
            <li class="menu-list-item">
              <span class="menu-head">데모 리포트</span>
              <ul class="menu-list menu-list-block" id="sidebarUl">
                <li class="menu-list-item">
                  <a class="menu-link" @click="setReport(reportSample1)">
                    <span>리포트 샘플1</span>
                  </a>
                  <a class="menu-link" @click="setReport(reportSample2, dataSample)">
                    <span>리포트 샘플2</span>
                  </a>
                  <a class="menu-link" @click="setReport(reportSample3, dataSample3)">
                    <span>리포트 샘플3</span>
                  </a>
                   <a class="menu-link" @click="printCompositeReport([reportSample1, reportSample2], ['', dataSample])">
                    <span>복합 리포트</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="main-content">
        <Toolbar :reportViewer="reportViewer"/>
        <div class="scroller">
          <RealReport :report="report" :data="data" ref="reportViewer"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Toolbar from "./Toolbar.vue";
import RealReport from "../components/RealReport.vue";
import dataSample from "../assets/data-sample.json";
import dataSample3 from "../assets/data-sample-3.json";
import reportSample1 from "../assets/report-sample-1.json";
import reportSample2 from "../assets/report-sample-2.json";
import reportSample3 from "../assets/report-sample-3.json";

export default {
  name: "Container",
  components: {
    Toolbar,
    RealReport,
  },
  data() {
    return {
      report: null,
      data: null,
      reportSample1,
      reportSample2,
      dataSample,
      reportSample3,
      dataSample3,
      reportViewer: this.$refs.reportViewer
    };
  },
  methods: {
    setReport(report, data) {
      this.report = report;
      this.data = data;
    },
    printCompositeReport(reports, datas) {
      this.reportViewer.compositeReportPreview(reports, datas);
    }
  },
  mounted() {
    this.reportViewer = this.$refs.reportViewer;
  }
};
</script>
