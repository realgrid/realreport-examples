<template>
  <div class="container">
    <Sidebar :report="report" :data="data" @setReportHandler="setReport" />
    <div class="main">
      <div class="main-content">
        <Toolbar :viewer="reportViewer" :pageCount="pageCount" :report="report" />
        <div class="scroller">
          <ReportViewer
            v-if="type === 'viewer'"
            @setViewerHandler="setViewer"
            @setPageCountHandler="setPageCount"
            :report="report"
            :data="data"
            ref="reportViewer"
          />
          <ReportCompositeViewer
            v-if="type === 'compositeViewer'"
            @setViewerHandler="setViewer"
            @setPageCountHandler="setPageCount"
            :reports="report"
            :datas="data"
            ref="reportViewer"
          />
        </div>
      </div>
    </div>
  </div>
</template>
r
<script>
import Sidebar from './Sidebar.vue';
import Toolbar from '~/components/Toolbar.vue';
import ReportViewer from '~/components/ReportViewer.vue';
import ReportCompositeViewer from '~/components/ReportCompositeViewer.vue';

export default {
  name: 'Container',
  components: {
    Sidebar,
    Toolbar,
    ReportViewer,
    ReportCompositeViewer,
  },
  data() {
    return {
      report: null,
      data: null,
      type: 'viewer',
      reportViewer: null,
      pageCount: 0,
    };
  },
  methods: {
    setReport(report, data, type) {
      this.report = report;
      this.data = data;
      this.type = type;
    },
    setViewer(viewer) {
      this.reportViewer = viewer;
    },
    setPageCount(pageCount) {
      this.pageCount = pageCount;
    },
  },
};
</script>
