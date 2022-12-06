<template>
  <div id="reportCompositeViewer" ref="reportCompositeViewer"></div>
</template>

<script>
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
  methods: {},
  async mounted() {
    // RealReport는 Dom이 필수이므로 렌더링 시점 이후에 Dynamic Import
    const { ReportCompositeViewer } = await import('realreport')

    /**
     * - ReportCompositeViewer 데이터 모양 만들기
     * {@link https://real-report.com/docs/guide/viewer/composite-report}
     */
    const formSets = this.reports.map((report, index) => {
      return {
        form: report,
        dataSet: this.datas[index],
      };
    });

    this.reportContainer = this.$refs.reportCompositeViewer;
    this.compositeViewer = new ReportCompositeViewer(this.reportContainer, formSets);
    this.$emit('setViewerHandler', this.compositeViewer);
    this.compositeViewer.zoom = 1;
    this.compositeViewer.preview({ async: true, pageMark: false, noScroll: true });
  },
};
</script>
