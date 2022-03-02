// 아래 라이선스는 유효기간 만료된 라이선스
// var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0adoq8hudFeXNTakk0yR9UevUdDFVwVRcNEHiG7csiBBkxValpjT3ck='
// 아래 라이선스는 유효기간 2022년 4월 1일 까지 localhost, 127.0.0.1 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0WXyjOMqbrgvr3+iyFPC2UvWntFnlQAvG/WiN+dO0JtjVohH/45jQUB5oxsrC+spwsWvPAQ1rit9+6ZGVxDxR7Q=';

var viewer;
var currentId = '';
var editor = null;

const SERVICE_HOST = 'https://service.real-report.com';
// const SERVICE_HOST = 'http://localhost:5500';
const REPORT_CAT = 'demo';

//--------------------------------------------------------------------------------------------------
// onLoad
//--------------------------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    setupSidebar();
});

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

const onClickExportPdf = function () {
    if (viewer) {
        const fonts = [{
            name: 'regular',
            // dist/fonts/malgun.js
            content: malgun,
            style: 'normal',
            weight: 'normal',
        },
        {
            name: 'bold',
            // dist/fonts/malgun-bold.js
            content: malgunBold,
            style: 'normal',
            weight: 'bold',
        }];
        viewer.exportPdf(fonts);
    }
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

// 별도의 프린트 창을 팝업해서 출력할 경우 사용
const onClickPrintPopup = function () {
    if (viewer) {
        r2printer.popupPrint(viewer.reportHtml, [ '/js/realreport/realreport.css' ], true, true);
    }
}

// 별도의 프린트 창을 html 팝업파일을 통해 출력할 경우 사용
const onClickPrintPopupTemplate = function () {
    if (viewer) {
        r2printer.popupTemplate('./popup.html', viewer.reportHtml, true, true);
    }
}

// 별도의 미리보기용 html 파일을 팝업
const onClickPrintPopupPreview = function () {
    if (viewer) {
        r2printer.popupTemplate('./preview.html', viewer.reportHtml, false, false);
    }
}

// iFrame을 통해 바로 출력
const onClickPrintHiddenFrame = function () {
    if (viewer) {
        r2printer.hiddenFrame(viewer.reportHtml, ['/js/realreport/realreport.css']);
    }
}

const onClickToggleEditor = function () {
    const editorContainer = document.getElementById('editor-container');
}


//--------------------------------------------------------------------------------------------------
// private methods
//--------------------------------------------------------------------------------------------------

const setupSidebar = function () {
    // sidebar에 item 만들기: onclick 이벤트에서 preview처리
    const sidebarLi = (id, name) => {
        const el = document.createElement('li')
        el.setAttribute('class', 'menu-list-item');
        el.innerHTML = '\n<a class="menu-link" onclick="javascript:showReport(this, \''
            .concat(id, '\')">', name, '\n</a>\n');
        return el;
    }

    const SERVICE_URL = ''
        .concat(SERVICE_HOST, '/api/report/')
        .concat(REPORT_CAT, '/list');
    fetch(SERVICE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': realReportLic,
        },
        body: JSON.stringify({}),
    }).then(function (r) {
        return r.json();
    }).then(function (ret) {
        if (ret) {
            const { status, message } = ret;

            if (status && status !== 200) {
                console.error('Report Server error: ', message);
                return;
            }

            const ul = document.getElementById('sidebarUl');
            if (ul) {
                ret.map(item => {
                    const li = sidebarLi(item.id, item.name);
                    ul.appendChild(li);
                });
            }
        }
    });
}

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

const clearContainer = function () {
    const container = document.getElementById('realreport');
    if (container && viewer) {
        container.innerHTML = '';
        currentId = '';
        delete viewer;
    }
}

const clearActiveMenuLink = function () {
    const menus = document.getElementById('sidebarUl').getElementsByClassName('menu-link-active');
    for (i=0; i<menus.length; i++) {
        const menu = menus[i];
        if (menu) {
            menu.setAttribute('class', 'menu-link');
        }
    }
}

//--------------------------------------------------------------------------------------------------
// public methods
//--------------------------------------------------------------------------------------------------

function setCodeEditor () {
    const editorContainer = document.getElementById('editor-container');
    if (editorContainer && viewer) {
        var container = document.getElementById('editor-container');
        var model = monaco.editor.createModel(JSON.stringify(viewer.reportForm, null, 1), 'json');

        if (!editor) editor = monaco.editor.create(container, {
            lineNumbers: 'off',
            theme: 'vs-dark'
        });
        editor.setModel(model);
    }    
}

/**
 * report id of the RealReport-Service report samples
 * @param {string} id 
 */
const showReport = (item, id) => {
    const SERVICE_URL = `${SERVICE_HOST}/api/report/${REPORT_CAT}/${id}`;
    fetch(SERVICE_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': realReportLic,
        },
        body: JSON.stringify({}),
    }).then(function (r) {
        return r.json();
    }).then(function (ret) {
        if (ret) {
            const { status, message, report: reportItem } = ret;
            if (status && status !== 200) console.error('Report Server error: ', message);
            if (reportItem) {
                clearContainer();
                currentId = reportItem.id;
                viewer = new RealReport.ReportViewer('realreport', reportItem.report, reportItem.data);
                viewer.preview();

                setTimeout(() => {
                    setTotalPage('totalpage');
                }, 100);

                setCodeEditor();
                clearActiveMenuLink();
                item.setAttribute('class', 'menu-link menu-link-active');
            }
        }
    });
}
