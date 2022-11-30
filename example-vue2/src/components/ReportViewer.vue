<template>
  <div id="reportViewer" ref="reportViewer"></div>
</template>

<script>
import { ReportViewer } from 'realreport';
import 'realreport/dist/realreport.css';

export default {
  name: 'ReportViewer',
  data() {
    return {
      reportContainer: null,
      viewer: null,
    };
  },
  props: {
    report: {
      type: Object,
      default: function () {
        return null;
      },
    },
    data: {
      type: Object,
      default: function () {
        return null;
      },
    },
  },
  methods: {
    /**
     * - ReportViewer 리포트, 데이터 설정하기
     * {@link https://real-report.com/docs/guide/viewer/data#%양식에-데이터-연결}
     */
    reportPreview() {
      if (!this.report) return;
      this.viewer.reportForm = this.report;
      this.viewer.dataSet = this.data || {};
      this.viewer.preview({ async: true, pageMark: false, noScroll: true });
    },
  },
  watch: {
    report: {
      handler: function () {
        this.reportPreview();
      },
    },
  },
  mounted() {
    this.reportContainer = this.$refs.reportViewer;
    this.viewer = new ReportViewer(this.reportContainer);
    this.$emit('setViewerHandler', this.viewer);
    this.reportPreview();
  },
};
</script>
