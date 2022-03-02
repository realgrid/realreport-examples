// RealReport 출력을 위한 샘플 코드

"use strict";

function setPrintDocument (win, report, cssFiles, afterClose, immediatelyPrint) {
    win.document.write('<html><head>');
    if (cssFiles)
        cssFiles.map(function (css) {
            win.document.write("<link href='".concat(css, "' media='print' rel='stylesheet' /></head>"));
            win.document.write("<link href='".concat(css, "' rel='stylesheet' /></head>"));
        });
    win.document.write(afterClose ? '<body onafterprint="self.close()">' : '<body>');
    win.document.write(report !== null && report !== void 0 ? report : '');
    win.document.write('</body></html>');
    if (immediatelyPrint)
        win.addEventListener('DOMContentLoaded', function () {
            win.print();
        });
    setTimeout(function () {
        win.document.close();
    }, 100);
}

if (typeof window !== 'undefined')
    window['r2printer'] = {
        // 기본 템플릿으로 print
        popupPrint: function (report, cssFiles, afterClose, immediatelyPrint) {
            var printWindow = window.open('#', 'printWindow', 'status=1,width=1920,height:800');
            if (printWindow) {
                setPrintDocument(printWindow, report, cssFiles, afterClose, immediatelyPrint);
            }
        },
        // html 템플릿 파일을 이용해 preview 한 다음 프린트
        popupTemplate: function (url, report, afterClose, immediatelyPrint) {
            var printWindow = window.open(url, 'printWindow', 'status=1,width=1920,height:800');
            if (printWindow) {
                printWindow.addEventListener('DOMContentLoaded', function () {
                    var container = printWindow.document.getElementById('realreport');
                    container.innerHTML = report;
                    if (immediatelyPrint)
                        printWindow.print();
                });
                if (afterClose)
                    printWindow.document.body.addEventListener('onafterprint', function () {
                        printWindow.close();
                    });
            }
        },
        // iframe 에 템플릿을 만들고 출력하는 방식
        hiddenFrame: function (report, cssFiles) {
            function closePrint () {
                document.body.removeChild(this.__realreport__);
            }

            function setPrint () {
                setPrintDocument(this.contentWindow, report, cssFiles, false, false);
                this.contentWindow.__realreport__ = this;
                this.contentWindow.onbeforeunload = closePrint;
                this.contentWindow.onafterprint = closePrint;
                this.contentWindow.focus(); // Required for IE
                this.contentWindow.print();
            }

            var oHideFrame = document.createElement("iframe");
            oHideFrame.onload = setPrint;
            oHideFrame.style.position = "fixed";
            oHideFrame.style.right = "0";
            oHideFrame.style.bottom = "0";
            oHideFrame.style.width = "0";
            oHideFrame.style.height = "0";
            oHideFrame.style.border = "0";
            document.body.appendChild(oHideFrame);
        }
    };