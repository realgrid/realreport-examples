<template>
  <div class="preview-toolbar">
    <div class="toolbar-left">
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="reportViewer.onClickZoomOut10();">
          <div class="toolbar-icon icon preview-zoomout-png"></div>
        </a>
        <input
          part="input"
          type="text"
          value="100%"
          id="inputZoomScale"
          aria-label="Zoom Scale"
        />
        <a class="toolbar-icon-button" @click="reportViewer.onClickZoomIn10();">
          <div class="toolbar-icon icon preview-zoomin-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickFitToWidth();">
          <div class="toolbar-icon icon preview-fit-to-width-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickFitToHeight();">
          <div class="toolbar-icon icon preview-fit-to-height-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickFitToPage();">
          <div class="toolbar-icon icon preview-fit-to-page-png"></div>
        </a>
      </div>
    </div>
    <div class="toolbar-center">
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="reportViewer.onClickFirstPage();">
          <div class="toolbar-icon icon preview-first-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickPrevPage();">
          <div class="toolbar-icon icon preview-prev-png"></div>
        </a>
        <div class="toolbar-item">
          <input
            part="input"
            type="text"
            value="1"
            id="inputPageNumber"
            aria-label="Page number"
          />
          <span style="margin: 0 4px">/</span>
          <span style="margin: 0 4px" id="totalpage">1</span>
        </div>
        <a class="toolbar-icon-button" @click="reportViewer.onClickNextPage();">
          <div class="toolbar-icon icon preview-next-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickLastPage();">
          <div class="toolbar-icon icon preview-last-png"></div>
        </a>
      </div>
    </div>
    <div class="toolbar-right">
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="reportViewer.onClickPrintHiddenFrame()">
          <div class="toolbar-icon icon preview-print-png"></div>
        </a>
      </div>
      <span class="vertical-separator"></span>
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="reportViewer.onClickExportPdf()">
          <div class="toolbar-icon icon preview-pdf-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickExportDoc('docx');">
          <div class="toolbar-icon icon preview-docx-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickExportDoc('hwp');">
          <div class="toolbar-icon icon preview-hwp-png"></div>
        </a>
      </div>
      <span class="vertical-separator"></span>
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="reportViewer.onClickExportImage('png');">
          <div class="toolbar-icon icon preview-png-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickExportImage('jpeg');">
          <div class="toolbar-icon icon preview-jpeg-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="reportViewer.onClickExportImage('gif');">
          <div class="toolbar-icon icon preview-gif-png"></div>
        </a>
        <a
          class="toolbar-icon-button"
          @click="reportViewer.onClickExportImage('tiff', 'g3');"
        >
          <div class="toolbar-icon icon preview-tiffg3-png"></div>
        </a>
        <a
          class="toolbar-icon-button"
          @click="reportViewer.onClickExportImage('tiff', 'g4');"
        >
          <div class="toolbar-icon icon preview-tiffg4-png"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      reportViewer: null
    }
  },
  mounted() {
    this.reportViewer = this.$parent.$refs.reportViewer;
  }
};
</script>
