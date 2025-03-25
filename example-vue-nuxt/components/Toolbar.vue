<template>
  <div class="preview-toolbar">
    <div class="toolbar-left">
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="onClickZoomOut10()">
          <div class="toolbar-icon icon preview-zoomout-png"></div>
        </a>
        <input part="input" type="text" readonly :value="zoom" id="inputZoomScale" aria-label="Zoom Scale" />
        <a class="toolbar-icon-button" @click="onClickZoomIn10()">
          <div class="toolbar-icon icon preview-zoomin-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickZoom100()">
          <div class="toolbar-icon icon preview-100-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickFitToWidth()">
          <div class="toolbar-icon icon preview-fit-to-width-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickFitToHeight()">
          <div class="toolbar-icon icon preview-fit-to-height-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickFitToPage()">
          <div class="toolbar-icon icon preview-fit-to-page-png"></div>
        </a>
      </div>
    </div>
    <div class="toolbar-center">
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="onClickFirstPage()">
          <div class="toolbar-icon icon preview-first-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickPrevPage()">
          <div class="toolbar-icon icon preview-prev-png"></div>
        </a>
        <div class="toolbar-item">
          <input part="input" type="text" value="1" id="inputPageNumber" aria-label="Page number" readonly />
        </div>
        <a class="toolbar-icon-button" @click="onClickNextPage()">
          <div class="toolbar-icon icon preview-next-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickLastPage()">
          <div class="toolbar-icon icon preview-last-png"></div>
        </a>
      </div>
    </div>
    <div class="toolbar-right">
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="printReport()">
          <div class="toolbar-icon icon preview-print-png"></div>
        </a>
      </div>
      <span class="vertical-separator"></span>
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="onClickExportPdf()">
          <div class="toolbar-icon icon preview-pdf-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportDoc('docx')">
          <div class="toolbar-icon icon preview-docx-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportDoc('hwp')">
          <div class="toolbar-icon icon preview-hwp-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportDoc('pptx')">
          <div class="toolbar-icon icon preview-pptx-png"></div>
        </a>
      </div>
      <span class="vertical-separator"></span>
      <div class="toolbar-items">
        <a class="toolbar-icon-button" @click="onClickExportImage('png')">
          <div class="toolbar-icon icon preview-png-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportImage('jpeg')">
          <div class="toolbar-icon icon preview-jpeg-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportImage('gif')">
          <div class="toolbar-icon icon preview-gif-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportImage('tiff', 'g3')">
          <div class="toolbar-icon icon preview-tiffg3-png"></div>
        </a>
        <a class="toolbar-icon-button" @click="onClickExportImage('tiff', 'g4')">
          <div class="toolbar-icon icon preview-tiffg4-png"></div>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolbar',
  props: {
    viewer: Object,
    report: [Array, Object],
  },
  data() {
    return {
      zoom: '100%',
    };
  },
  watch: {
    report() {
      this.zoom = '100%';
      this.setInputValue('inputPageNumber', 1);
    },
  },
  methods: {
    onClickZoom(z) {
      if (this.viewer) {
        this.viewer.zoom = z;
      }
    },
    onClickZoomIn10() {
      if (this.viewer) {
        this.viewer.zoomIn();
        this.setZoomScaleInputValue('inputZoomScale');
      }
    },
    onClickZoomOut10() {
      if (this.viewer) {
        this.viewer.zoomOut();
        this.setZoomScaleInputValue('inputZoomScale');
      }
    },
    onClickZoom100() {
      if (this.viewer) {
        this.viewer.zoom = 1;
        this.setZoomScaleInputValue('inputZoomScale');
      }
    },
    onClickFitToHeight() {
      if (this.viewer) {
        this.viewer.fitToHeight();
        this.setZoomScaleInputValue('inputZoomScale');
      }
    },
    onClickFitToWidth() {
      if (this.viewer) {
        this.viewer.fitToWidth();
        this.setZoomScaleInputValue('inputZoomScale');
      }
    },
    onClickFitToPage() {
      if (this.viewer) {
        this.viewer.fitToPage();
        this.setZoomScaleInputValue('inputZoomScale');
      }
    },
    onClickFirstPage() {
      if (this.viewer) {
        this.viewer.first();
        this.setPageInputValue('inputPageNumber');
      }
    },
    onClickLastPage() {
      if (this.viewer) {
        this.viewer.last();
        this.setPageInputValue('inputPageNumber');
      }
    },
    onClickPrevPage() {
      if (this.viewer) {
        this.viewer.prev();
        this.setPageInputValue('inputPageNumber');
      }
    },
    onClickNextPage() {
      if (this.viewer) {
        this.viewer.next();
        this.setPageInputValue('inputPageNumber');
      }
    },
    async base64convert(url, split) {
      const data = await fetch(url);
      const blob = await data.blob();

      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(split ? base64data.split(',')[1] : base64data);
        };
      });
    },
    onClickExportPdf() {
      this.base64convert('/pdffonts/NanumGothic.otf', true).then((regularFont) => {
        this.base64convert('/pdffonts/NanumGothicBold.otf', true).then((boldFont) => {
          const fonts = [
            {
              name: 'regular',
              content: regularFont,
              style: 'normal',
              weight: 'normal',
            },
            {
              name: 'bold',
              content: boldFont,
              style: 'normal',
              weight: 'bold',
            },
          ];

          if (this.viewer) {
            this.viewer.zoom = 1;
            this.viewer.exportPdf({ fonts: fonts, filename: 'sample-pdf-file.pdf', preview: false });
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
    printReport() {
      this.viewer.print();
    },
    setInputValue(id, value, prefix, surfix) {
      if (id) {
        const input = document.getElementById(id);
        if (input) input.value = `${prefix || ''}${value}${surfix || ''}`;
      }
    },
    setZoomScaleInputValue(id) {
      this.zoom = `${Math.trunc(this.viewer.zoom * 100)}%`;
    },
    setPageInputValue(id) {
      if (this.viewer) {
        this.setInputValue(id, this.viewer.page);
      }
    },
  },
};
</script>
