// 아래 라이선스는 유효기간 2022년 12월 1일 까지 localhost, 127.0.0.1 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0WXyjOMqbrgvr3+iyFPC2UvWntFnlQAvG/WiN+dO0JtjdX/TRvH17asONaYpJP0FO3omxwgpdzq2WOF5T6PZ/A7KQqsjlGq9r/umRlcQ8Ue0';
var viewer;
var editor;

// 미리보기 팝업창 객체
var windowPreview = null;

const isDev = location.hostname === 'localhost';
const DEV_SERVICE_HOST = 'http://localhost:5500';
const REAL_SERVICE_HOST = 'https://service.real-report.com';

// 개발모드에서 운영을 테스트 할 경우 false;
const hasDevConnection = true;

// 개발서버 동작 여부에 따라 데이터 소스를 변경합니다.
const SERVICE_HOST = isDev ? (hasDevConnection ? DEV_SERVICE_HOST : REAL_SERVICE_HOST) : REAL_SERVICE_HOST;
const REPORT_SAMPLE_URL = SERVICE_HOST.concat('/api/report/sample');
const REPORT_DEMO_URL = SERVICE_HOST.concat('/api/report/demo');
const GRID_DEMO_URL = SERVICE_HOST.concat('/api/grid/griddemo');

//--------------------------------------------------------------------------------------------------
// onLoad
//--------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function() {
    var isIE = window.document.documentMode ? true : false;
    if (isIE) {
        document.write('죄송합니다. RealReport 데모 사이트는 IE브라우저를 지원하지 않습니다.');
        document.close();
    }

    if (isDev) setupReportSidebar('sample', REPORT_SAMPLE_URL, 'sidebarUl', onClickReportPreviewMenu, onClickPreviewPopup);
    setupReportSidebar('demo', REPORT_DEMO_URL, 'sidebarUl', onClickReportPreviewMenu, onClickPreviewPopup);
    setupReportSidebar('griddemo', GRID_DEMO_URL, 'gridReportUl', onClickGridViewMenu, onClickGridPreviewPopup);
});


//--------------------------------------------------------------------------------------------------
// private methods
//--------------------------------------------------------------------------------------------------

// add node helper
const appendNode = function(parent, tag, classNames, onClick) {
    const el = document.createElement(tag);
    if (classNames) el.setAttribute('class', classNames);
    if (onClick) el.onclick = onClick;
    parent.appendChild(el)
    return el;
}

// 프레임 탭 열기
function openTab(tabId, hideTabId) {
    const setClasses = function(select, add, remove) {
        var i;
        var x = document.getElementsByClassName(select);
        for (i = 0; i < x.length; i++) {
            if (add) x[i].classList.add(add);
            if (remove) x[i].classList.remove(remove);
        }    
    }
    setClasses('frame-tab', 'hidden', undefined);
    setClasses('tab-button', undefined, 'active');

    const tabButton = document.getElementById(tabId.concat('Btn'));
    if (tabButton) {
        document.getElementById(tabId.concat('Btn')).classList.remove('hidden');
        document.getElementById(tabId.concat('Btn')).classList.add('active');
    }

    if (hideTabId) {
        let tabIds = hideTabId;
        if (typeof hideTabId === 'string') tabIds = [hideTabId];
        tabIds.map(id => document.getElementById(id.concat('Btn')).classList.add('hidden'))
    }

    document.getElementById(tabId).classList.remove('hidden');
}

// 에디팅 상태를 토글 합니다.
function openEditor(frameType, el) {
    if (frameType === 'reportFrame' && !reportViewer) return;
    if (el && el instanceof HTMLElement) el.classList.toggle('active');

    if (!editor) {
        showEditor('reportForm');
        document.getElementById('editorFrame').classList.remove('hidden');
    } else {
        hideEditor();
        document.getElementById('editorFrame').classList.add('hidden');    
    }
}

// 에디터를 보여줍니다.
function showEditor(sourceType) {
    const options = {
        minimap: { enabled: false },
        automaticLayout: true,
        autoIndent: true,
        formatOnType: true,
        readOnly: !isDev,
    }

    if (!editor) {
        editor = monaco.editor.create(document.getElementById('editor-container'), options);
    }

    setEditorModel(sourceType);
}

// 에디터를 없앱니다.
function hideEditor() {
    monaco.editor.getModels().forEach(model => model.dispose());
    editor.dispose();
    editor = null;
}

// 에디터에 값을 입력합니다.
function setEditorModel(sourceType) {
    if (!editor) return;

    let model = null;
    resetActiveClass(undefined, 'tool-button', 'active', 0);
    if (reportViewer && sourceType === 'reportForm') {
        if (reportViewer._reportFormSets) {
            // ES5
            const value = JSON.stringify(reportViewer._reportFormSets.map( set => set.form ), null, ' ');
            model = monaco.editor.createModel(value, 'json');
        } else {
            const value = JSON.stringify(reportViewer.reportForm, null, ' ');
            model = monaco.editor.createModel(value, 'json');
        }
    }
    if (reportViewer && sourceType === 'reportData') {
        if (reportViewer._reportFormSets) {
            // ES5
            const value = JSON.stringify(reportViewer._reportFormSets.map( set => set.dataSet ), null, ' ');
            model = monaco.editor.createModel(value, 'json');
        } else {
            const value = JSON.stringify(reportViewer.dataSet, null, ' ');
            model = monaco.editor.createModel(value, 'json');
            }
    }
    if (model) editor.setModel(model);
}

// service 호출
const serviceFetch = async function(serviceUrl, callback) {
    return fetch(serviceUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': realReportLic,
        },
        body: JSON.stringify({}),
    }).then(function(r) {
        return r.json();
    }).then(function(ret) {
        if (ret) {
            const { status, message } = ret;
            if (status && status !== 200) console.error('Report Server error: ', message);
            if (typeof callback === 'function') callback(ret);
        }
    }).catch(function(e) {
        console.log(e);
    });
}

// 사이드바 데모용 리포트 목록 메뉴 구성
const setupReportSidebar = function(category, hostUrl, sidebarId, onClick, onClickPopup) {
    // sidebar에 item 만들기: onclick 이벤트에서 preview처리
    const sidebarLi = function(id, name) {
        const li = document.createElement('li');
        li.classList.add('menu-list-item');
        const a = appendNode(li, 'a', 'menu-link');
        const spanPreview = appendNode(a, 'span', '', onClick);
        spanPreview.innerText = name;
        spanPreview.dataset['id'] = id;
        spanPreview.dataset['category'] = category;
        spanPreview.dataset['hosturl'] = hostUrl;
        const spanPopup = appendNode(a, 'span', 'toolbar-icon icon preview-popup-png', onClickPopup);
        spanPopup.dataset['id'] = id;
        spanPopup.dataset['category'] = category;
        spanPopup.dataset['hosturl'] = hostUrl;
        return li;
    }

    serviceFetch(hostUrl.concat('/list'),  function(ret) {
        const ul = document.getElementById(sidebarId);
        if (ul) {
            ret.map(item => {
                const li = sidebarLi(item.id, item.name);
                ul.appendChild(li);
            });
        }
    });
}

// 메뉴 링크 활성화 스타일 다시 지정하기
const resetActiveClass = function(activeEl, selection, active, resetIndex) {
    const elements = document.getElementsByClassName(selection);

    for (i=0; i<elements.length; i++) {
        const element = elements[i];
        // active할 el을 넘기지 않고 resetIndex를 넘기면 해당 아이템을 active한다. 
        if (element) {
            element.classList.remove(active);
        }
        if (!activeEl && resetIndex > -1 && i === resetIndex) {
            element.classList.add(active);
        }
    }

    if (activeEl && activeEl instanceof HTMLElement) {
        activeEl.classList.add(active);
    }
}


//--------------------------------------------------------------------------------------------------
// event handlers
//--------------------------------------------------------------------------------------------------

// 사이드바에서 리포트 미리보기 메뉴 클릭
const onClickReportPreviewMenu = async function(event) {
    const id = event.target.dataset.id;
    const hosturl = event.target.dataset.hosturl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');
    
    // setFrames('reportFrame', 'gridFrame', '리포트 미리보기');
    openTab('reportTab', 'gridTab');

    serviceFetch(hosturl.concat('/', id), function(serviceItem) {
        // ReportViewer의 report 타입은 { form, dataSet } 의 구조를 가진다.
        // 배열로 리포트 정보를 여러개 넘길 수 있다. 2개 이상의 리포트가 있는 경우 CompositReport
        // report = { id, name, report, data, description }
        // console.log(serviceItem);
        const reportItem = serviceItem.report;
        const reports = [{
            form: reportItem.report,
            dataSet: reportItem.data
        }];

        // import from preview.js
        reportViewer = previewFrame('reportFrame', reports);
        setEditorModel('reportForm');
        resetActiveClass(event.target.parentElement, 'menu-link-active', 'menu-link-active');
    });
}

// 사이드바에서 그리드 보기 메뉴 클릭
const onClickGridViewMenu = function(event) {
    const id = event.target.dataset.id;
    const hosturl = event.target.dataset.hosturl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    openTab('gridTab', 'reportTab');

    serviceFetch(hosturl.concat('/', id), function(serviceItem) {
        const gridItem = serviceItem.grid;
        // grid = { id, name, category, columns, fields, description }
        const gridFrame = document.getElementById('gridFrame');
        gridViewer = gridFrame.contentWindow.setGridLayout(gridItem);

        if (gridViewer) {
            const options = gridItem.reportOptions;
            reportViewer = previewGridReportFrame('gridReportFrame', gridViewer, options);
        }

        resetActiveClass(event.target.parentElement, 'menu-link-active', 'menu-link-active');
    })
}

// 리포트 양식 미리보기 아이콘 클릭: 팝업 창에 리포트를 미리보기 합니다.
const onClickPreviewPopup = function(event) {
    const id = event.target.dataset.id;
    const hosturl = event.target.dataset.hosturl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    serviceFetch(hosturl.concat('/', id), function(serviceItem) {
        // ReportreportViewer의 report 타입은 { form, dataSet } 의 구조를 가진다.
        // 배열로 리포트 정보를 여러개 넘길 수 있다. 2개 이상의 리포트가 있는 경우 CompositReport
        // report = { id, name, report, data, description }
        const reportItem = serviceItem.report;
        const reports = [{
            form: reportItem.report,
            dataSet: reportItem.data
        }];

        // import from preview.js
        previewPopup(reports);
    });
}

// 그리드 메뉴 아이템 클릭
const onClickGridPreviewPopup = function(event) {
    const id = event.target.dataset.id;
    if (!id) console.error('그리드 ID가 없습니다.');
    serviceFetch(GRID_DEMO_URL.concat('/', id), function(serviceItem) {
        const gridItem = serviceItem.grid;
        // console.log('POPUP GridItem: ', gridItem);
    })
}

// 복합 출력 샘플 1
function reportSample1(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = previewFrame('reportFrame', [sampleReport200]);
    setEditorModel('reportForm');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');;
}

// 복합 출력 샘플 2
function reportSample2(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = previewFrame('reportFrame', [sampleReport205]);
    setEditorModel('reportForm');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');;
}

// 복합 출력 샘플 1 + 2
function reportSampleComposit(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = previewFrame('reportFrame', [sampleReport200, sampleReport205]);
    setEditorModel('reportForm');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');;
}

// 듀얼 뷰어 리포트 샘플
function dualReportView(el) {
    openTab('multiReportTab', ['gridTab', 'reportTab']);
    reportViewer = previewMultiFrame('multiReportFrame', [sampleReport200, sampleReport205], true);
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');;
}

// 듀얼 뷰어 리포트 샘플
function tripleReportView(el) {
    openTab('multiReportTab', ['gridTab', 'reportTab']);
    reportViewer = previewMultiFrame('multiReportFrame', [sampleReport200, sampleReport205]);
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');;
}

// 에디터 툴버튼 클릭
function clickEditorToolButton(target) {
    const buttonData = target.dataset;

    if (buttonData.btnType === 'set-editor-model') {
        setEditorModel(buttonData.sourceType);
    }

    resetActiveClass(target, 'tool-button', 'active');
}
