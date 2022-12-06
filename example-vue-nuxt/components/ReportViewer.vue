<template>
  <div id="reportViewer" ref="reportViewer"></div>
</template>

<script>
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
      this.viewer.zoom = 1;
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
  async mounted() {
    // RealReport는 Dom이 필수이므로 렌더링 시점 이후에 Dynamic Import
    const { ReportViewer } = await import('realreport');

    this.reportContainer = this.$refs.reportViewer;
    this.viewer = new ReportViewer(this.reportContainer);
    this.$emit('setViewerHandler', this.viewer);
    this.reportPreview();
  },
};
</script>
