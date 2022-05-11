<template>
  <div ref="realreport"></div>
</template>

<script>
import { ReportViewer } from "realreport";
import { base64convert } from "../utils/convert";
import "realreport/dist/realreport.css";

export default {
  name: "RealReport",
  data() {
    return {
      reportContainer: null,
      viewer: null,
    };
  },
  props: {
    report: Object,
    data: Object,
  },
  methods: {
    reportPreview() {
      this.viewer.reportForm = this.report;
      this.viewer.dataSet = this.data;
      this.viewer.preview();
    },
    onClickZoom(z) {
      if (this.viewer) {
        this.viewer.zoom = z;
      }
    },
    onClickZoomIn10() {
      if (this.viewer) {
        this.viewer.zoomIn();
        this.setZoomScaleInputValue("inputZoomScale");
      }
    },
    onClickZoomOut10() {
      if (this.viewer) {
        this.viewer.zoomOut();
        this.setZoomScaleInputValue("inputZoomScale");
      }
    },
    onClickFitToHeight() {
      if (this.viewer) {
        this.viewer.fitToHeight();
        this.setZoomScaleInputValue("inputZoomScale");
      }
    },
    onClickFitToWidth() {
      if (this.viewer) {
        this.viewer.fitToWidth();
        this.setZoomScaleInputValue("inputZoomScale");
      }
    },
    onClickFitToPage() {
      if (this.viewer) {
        this.viewer.fitToPage();
        this.setZoomScaleInputValue("inputZoomScale");
      }
    },
    onClickFirstPage() {
      if (this.viewer) {
        this.viewer.first();
        this.setPageInputValue("inputPageNumber");
      }
    },
    onClickLastPage() {
      if (this.viewer) {
        this.viewer.last();
        this.setPageInputValue("inputPageNumber");
      }
    },
    onClickPrevPage() {
      if (this.viewer) {
        this.viewer.prev();
        this.setPageInputValue("inputPageNumber");
      }
    },
    onClickNextPage() {
      if (this.viewer) {
        this.viewer.next();
        this.setPageInputValue("inputPageNumber");
      }
    },
    onClickExportPdf() {
      base64convert("../pdffonts/malgun.ttf", true).then((regualrFont) => {
        base64convert("../pdffonts/malgunbd.ttf", true).then((boldFont) => {
          if (regualrFont && boldFont) {
            const fonts = [
              {
                name: "regular",
                content: regualrFont,
                style: "normal",
                weight: "normal",
              },
              {
                name: "bold",
                content: boldFont,
                style: "normal",
                weight: "bold",
              },
            ];

            if (this.viewer) {
              this.viewer.exportPdf(fonts);
            }
          }
        });
      });
    },
    onClickExportDoc(type) {
      if (this.viewer) {
        this.viewer.exportDocument({ type });
      }
    },
    onClickExportImage(type, encoding, fileName) {
      if (this.viewer) {
        var options = { type };
        if (encoding) options.tiff = { encoding };
        if (fileName) options.fileName = fileName;
        this.viewer.exportImage(options);
      }
    },
    onClickPrintHiddenFrame() {
      alert("아직 준비중입니다.");
    },
    setInputValue(id, value, prefix, surfix) {
      if (id) {
        const input = document.getElementById(id);
        if (input) input.value = `${prefix || ""}${value}${surfix || ""}`;
      }
    },
    setZoomScaleInputValue(id) {
      this.setInputValue(id, Math.trunc(this.viewer.zoom * 100), "", "%");
    },
    setPageInputValue(id) {
      if (this.viewer) {
        this.setInputValue(id, this.viewer.page);
      }
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
    this.reportContainer = this.$refs.realreport;
    this.viewer = new ReportViewer(this.reportContainer);
  },
};
</script>
