<template>
  <div class="root">
    <div class="header">
      <div class="toolbar">
        <div class="toolbar-left">
          <a class="toolbar-brand" href="https://real-report.com">
            <img src="../img/logo.svg" alt="RealReport Logo" class="toolbar-logo">
            <b class="toolbar-title">Real Report</b>
          </a>
          <a class="toolbar-item toolbar-link" href="https://real-report.com/pricing">가격</a>
          <a class="toolbar-item toolbar-link" href="https://real-report.com/docs/getting-started">문서</a>
          <a class="toolbar-item toolbar-link toolbar-link-active" href="https://demo.real-report.com">데모</a>
        </div>
        <div class="toolbar-center">
        </div>
        <div class="toolbar-right">
          <div class="toolbar-items">
            <a href="https://github.com/realgrid/realreport-examples" target="_blank" rel="noopener noreferrer"
              class="toolbar-item toolbar-link">
              <span>소스보기
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="icon-external-link">
                  <path fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
            <a href="https://service.realgrid.com" target="_blank" rel="noopener noreferrer"
              class="toolbar-item toolbar-link">
              <span>다운로드
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="icon-external-link">
                  <path fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
            <a href="https://forum.realgrid.com/categories/z6SA78vS9G6cgiYht" target="_blank" rel="noopener noreferrer"
              class="toolbar-item toolbar-link">
              <span>기술지원
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="icon-external-link">
                  <path fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
            <a href="https://realgrid.com" target="_blank" rel="noopener noreferrer" class="toolbar-item toolbar-link">
              <span>RealGrid
                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="icon-external-link">
                  <path fill="currentColor"
                    d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                  </path>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="sidenav-container">
        <div class="sidenav">
          <div class="menu">
            <ul class="menu-list">
              <li class="menu-list-item">
                <span class="menu-head">데모 리포트</span>
                <ul class="menu-list menu-list-block" id="sidebarUl">
                  <li class="menu-list-item">
                    <a class="menu-link" @click="reportPreview(report1)">
                      <span>리포트 샘플1</span>
                    </a>
                    <a class="menu-link" @click="reportPreview(report2, dataSet)">
                      <span>리포트 샘플2</span>
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
          <div class="main-tabs">
            <div>Preview</div>
          </div>
          <div class="scroller">
            <div ref="realreport"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ReportViewer } from 'realreport';
import 'realreport/dist/realreport.css';
import sampleReport1 from '../assets/report-sample-1.json';
import sampleReport2 from '../assets/report-sample-2.json';
import sampleData from '../assets/data-sample.json';

export default {
  name: 'HelloWorld',
  data() {
    return {
      reportContainer: null,
      viewer: null,
      report1: sampleReport1,
      report2: sampleReport2,
      dataSet: sampleData,
    }
  },
  methods: {
    reportPreview(report, data) {
      this.viewer.reportForm = report;
      this.viewer.dataSet = data;
      this.viewer.preview()
    },
  },
  mounted() {
    this.reportContainer = this.$refs.realreport;
    this.viewer = new ReportViewer(this.reportContainer);
    console.log(this.report3);
  }
}
</script>

<style scoped>
</style>
