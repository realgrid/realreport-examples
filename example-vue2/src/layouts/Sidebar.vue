<template>
  <div class="sidenav-container">
    <div class="sidenav">
      <div class="menu">
        <ul class="menu-list">
          <li class="menu-list-item">
            <span class="menu-head">데모 리포트</span>
            <ul class="menu-list menu-list-block" id="sidebarUl">
              <li class="menu-list-item">
                <a class="menu-link" @click="setReport(reportSample1, null, 'viewer')">
                  <span>리포트 샘플1</span>
                </a>
                <a class="menu-link" @click="setReport(reportSample2, dataSample, 'viewer')">
                  <span>리포트 샘플2</span>
                </a>
                <a class="menu-link" @click="setReport(reportSample3, dataSample3, 'viewer')">
                  <span>리포트 샘플3</span>
                </a>
                <a class="menu-link" @click="setReport([reportSample1, reportSample2], ['', dataSample], 'compositeViewer')">
                  <span>복합 리포트</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import dataSample from '../assets/data-sample.json';
import dataSample3 from '../assets/data-sample-3.json';
import reportSample1 from '../assets/report-sample-1.json';
import reportSample2 from '../assets/report-sample-2.json';
import reportSample3 from '../assets/report-sample-3.json';

export default {
  name: 'Sidebar',
  data() {
    return {
      reportSample1,
      reportSample2,
      dataSample,
      reportSample3,
      dataSample3,
    };
  },
  methods: {
    setReport(report, data, type) {
      this.$emit('setReportHandler', report, data, type);
    },
  },
};
</script>
