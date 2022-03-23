// 아래 라이선스는 유효기간 2022년 4월 1일 까지 localhost, 127.0.0.1 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0WXyjOMqbrgvr3+iyFPC2UvWntFnlQAvG/WiN+dO0JtjVohH/45jQUB5oxsrC+spwsWvPAQ1rit9+6ZGVxDxR7Q=';
var viewer;

//--------------------------------------------------------------------------------------------------
// 이벤트 핸들링
//--------------------------------------------------------------------------------------------------

const onClickZoom = (z) => {
    if (viewer) {
        viewer.zoom = z;
    }
}

const onClickZoomIn10 = function () {
    if (viewer) {
        viewer.zoomIn();
        setZoomScaleInputValue('inputZoomScale');
    }
}

const onClickZoomOut10 = function () {
    if (viewer) {
        viewer.zoomOut();
        setZoomScaleInputValue('inputZoomScale');
    }
}

const onClickFitToHeight = function () {
    if (viewer) {
        viewer.fitToHeight();
        setZoomScaleInputValue('inputZoomScale');
    }
}

const onClickFitToWidth = function () {
    if (viewer) {
        viewer.fitToWidth();
        setZoomScaleInputValue('inputZoomScale');
    }
}

const onClickFitToPage = function () {
    if (viewer) {
        viewer.fitToPage();
        setZoomScaleInputValue('inputZoomScale');
    }
}

const onClickFirstPage = function () {
    if (viewer) {
        viewer.first();
        setPageInputValue('inputPageNumber');
    }
}

const onClickLastPage = function () {
    if (viewer) {
        viewer.last();
        setPageInputValue('inputPageNumber');
    }
}

const onClickPrevPage = function () {
    if (viewer) {
        viewer.prev();
        setPageInputValue('inputPageNumber');
    }
}

const onClickNextPage = function () {
    if (viewer) {
        viewer.next();
        setPageInputValue('inputPageNumber');
    }
}

async function base64convert (url, split) {
    const data = await fetch(url);
    const blob = await data.blob();
    
    return new Promise(resolve => {
        const reader = new FileReader();
        reader.readAsDataURL(blob);
        reader.onloadend = () => {
          const base64data = reader.result;
          resolve(split ? base64data.split(',')[1] : base64data);
        }    
    });
}

const onClickExportPdf = function () {
    base64convert('/js/pdffonts/malgun.ttf', true).then(regualrFont => {
        base64convert('/js/pdffonts/malgunbd.ttf', true).then(boldFont => {
            if (regualrFont && boldFont) {
                const fonts = [{
                    name: 'regular',
                    content: regualrFont,
                    style: 'normal',
                    weight: 'normal',
                },
                {
                    name: 'bold',
                    content: boldFont,
                    style: 'normal',
                    weight: 'bold',
                }];
        
                if (viewer) {
                    viewer.exportPdf(fonts);
                }
            }
        });
    });
}

const onClickExportDoc = function (type) {
    if (viewer) {
        viewer.exportDocument({ type });
    }
}

const onClickExportImage = function (type, encoding, fileName) {
    if (viewer) {
        var options = { type };
        if (encoding) options.tiff = { encoding };
        if (fileName) options.fileName = fileName;
        viewer.exportImage(options);
    }
}

// iFrame을 통해 바로 출력
const onClickPrintHiddenFrame = function () {
    if (viewer) {
        function closePrint () {
            document.body.removeChild(this.__container__);
        }
        
        function setPrint () {
            this.contentWindow.__container__ = this;
            this.contentWindow.onbeforeunload = closePrint;
            this.contentWindow.onafterprint = closePrint;
            const dom = this.contentWindow.document.getElementById('realreport');
            dom.innerHTML = viewer.reportHtml;

            setTimeout(() => {
                this.contentWindow.focus(); // Required for IE
                this.contentWindow.print();                
            }, 1);
        }
        
        function printPage (sURL) {
            var oHideFrame = document.createElement("iframe");
            oHideFrame.onload = setPrint;
            oHideFrame.style.position = "";
            oHideFrame.style.right = "0";
            oHideFrame.style.bottom = "0";
            oHideFrame.style.width = "0";
            oHideFrame.style.height = "0";
            oHideFrame.style.border = "0";
            oHideFrame.src = sURL;
            document.body.appendChild(oHideFrame);
        }

        printPage('./print.html');   
    }
}


//--------------------------------------------------------------------------------------------------
// private methods
//--------------------------------------------------------------------------------------------------

const setInputValue = function (id, value, prefix, surfix) {
    if (id) {
        const input = document.getElementById(id);
        if (input) input.value = `${prefix||''}${value}${surfix||''}`;
    }
}

const setHtml = function (id, value, prefix, surfix) {
    if (id) {
        const el = document.getElementById(id);
        if (el) el.innerHTML = `${prefix}${value}${surfix}`;
    }
}

const setZoomScaleInputValue = function (id) {
    setInputValue(id, Math.trunc(viewer.zoom * 100), '', '%');
}

const setTotalPage = function (id) {
    if (viewer) {
        setHtml(id, viewer.pageCount, '', '');
    }
}

const setPageInputValue = function (id) {
    if (viewer) {
        console.log(viewer.page);
        setInputValue(id, viewer.page);
    }
}
