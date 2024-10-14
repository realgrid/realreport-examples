<template>
  <div id="reportCompositeViewer" ref="reportCompositeViewer"></div>
</template>

<script>
import { ReportCompositeViewer } from 'realreport';
import 'realreport/dist/realreport.css';

export default {
  name: 'ReportCompositeViewer',
  data() {
    return {
      reportContainer: null,
      compositeViewer: null,
    };
  },
  props: {
    reports: {
      type: Array,
      default: function () {
        return [];
      },
    },
    datas: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  methods: {
    reportPreview() {
      if (!this.reports) return;
      this.compositeViewer.formSets = this.reports;
      this.compositeViewer.zoom = 1;
      this.compositeViewer.preview({ async: true, pageMark: false, noScroll: true });
    }
  },
  watch: {
    reports: {
      handler: function () {
        this.reportPreview();
      },
    },
  },
  mounted() {

    /**
     * - ReportCompositeViewer 데이터 모양 만들기
     * {@link https://real-report.com/docs/guide/viewer/composite-report}
     */
    this.reportContainer = this.$refs.reportCompositeViewer;
    this.compositeViewer = new ReportCompositeViewer(this.reportContainer);
    this.$emit('setViewerHandler', this.compositeViewer);
    this.compositeViewer.zoom = 1;
  },
};
</script>
