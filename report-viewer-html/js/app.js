// import './templates/index.js';

// 아래 라이선스는 유효기간 2025년 9월 9일 까지 demo.realreport.co.kr, demo.real-report.com, 127.0.0.1, localhost 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic =
    'upVcPE+wPOn1V3OcjC3PuAUt7xtLcP5XVzS0GnpZwpnbdxrzWi3SH9lnNreNwRub/31bQcGrnP/Nq/NkIKx9AkkSD8KWTVlm9aI3507Qm2NIvdmTUtXx6ac00iaBVcjXPgVhfyINxWw1NqSTTJH1R6SYzWAhZLTva0WNeh/nPIUJmuWXfYt2ZxaVHe21BfYT6pp9PRqic4b9YLxChWwJkg==';
var viewer;
var editor;
var reportViewer;

// 미리보기 팝업창 객체
var windowPreview = null;

const isDev = location.hostname === 'localhost';

//--------------------------------------------------------------------------------------------------
// onLoad
//--------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    var isIE = window.document.documentMode ? true : false;
    if (isIE) {
        document.write(
            '죄송합니다. RealReport 데모 사이트는 IE브라우저를 지원하지 않습니다.',
        );
        document.close();
    }

    setupReportSidebar(
        'sample',
        'sidebarUl',
        onClickReportPreviewMenu,
        onClickPreviewPopup,
    );
});

//--------------------------------------------------------------------------------------------------
// private methods
//--------------------------------------------------------------------------------------------------

// add node helper
const appendNode = function (parent, tag, classNames, onClick) {
    const el = document.createElement(tag);
    if (classNames) el.setAttribute('class', classNames);
    if (onClick) el.onclick = onClick;
    parent.appendChild(el);
    return el;
};

// 프레임 탭 열기
function openTab(tabId, hideTabId) {
    const setClasses = function (select, add, remove) {
        var i;
        var x = document.getElementsByClassName(select);
        for (i = 0; i < x.length; i++) {
            if (add) x[i].classList.add(add);
            if (remove) x[i].classList.remove(remove);
        }
    };
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
        tabIds.map((id) =>
            document.getElementById(id.concat('Btn')).classList.add('hidden'),
        );
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
    };

    if (!editor) {
        editor = monaco.editor.create(
            document.getElementById('editor-container'),
            options,
        );
    }

    setEditorModel(sourceType);
}

// 에디터를 없앱니다.
function hideEditor() {
    monaco.editor.getModels().forEach((model) => model.dispose());
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
            const value = JSON.stringify(
                reportViewer._reportFormSets.map((set) => set.form),
                null,
                ' ',
            );
            model = monaco.editor.createModel(value, 'json');
        } else {
            const value = JSON.stringify(reportForm, null, ' ');
            model = monaco.editor.createModel(value, 'json');
        }
    }
    if (reportViewer && sourceType === 'reportData') {
        if (reportViewer._reportFormSets) {
            // ES5
            const value = JSON.stringify(
                reportViewer._reportFormSets.map((set) => set.dataSet),
                null,
                ' ',
            );
            model = monaco.editor.createModel(value, 'json');
        } else {
            const value = JSON.stringify(dataSet, null, ' ');
            model = monaco.editor.createModel(value, 'json');
        }
    }
    if (model) editor.setModel(model);
}

// service 호출
const serviceFetch = async function (serviceUrl, method, callback) {
    console.log(serviceUrl);
    return fetch(serviceUrl, {
        method: method,
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: TEMPLATE_SERVICE_AUTHO,
        },
        body: null,
    })
        .then(function (r) {
            return r.json();
        })
        .then(function (ret) {
            if (ret) {
                const { status, message } = ret;
                if (status && status !== 200)
                    console.error('Report Server error: ', message);
                if (typeof callback === 'function') callback(ret);
            }
        })
        .catch(function (e) {
            console.log(e);
        });
};

// 사이드바 데모용 리포트 목록 메뉴 구성
const setupReportSidebar = function (
    category,
    sidebarId,
    onClick,
    onClickPopup,
) {
    const API_HOST_DEV = `http://localhost:3021/api/v1`;
    const CATEGORY_ID_DEV = 'cllk91qbr000iyc919271zb4v';
    const LIST_URL_DEV = `${API_HOST_DEV}/category/${CATEGORY_ID_DEV}/templates`;
    const GET_FORM_URL_DEV = `${API_HOST_DEV}/template`;

    const API_HOST_PROD = 'https://template.realdocs.co.kr/api/v1';
    // 카테고리가 바뀌면 수정해야 한다.
    const CATEGORY_ID_PROD = 'cllq2kbnc0002l30fmkvbp1fi';
    const LIST_URL_PROD = `${API_HOST_PROD}/category/${CATEGORY_ID_PROD}/templates`;
    const GET_FORM_URL_PROD = `${API_HOST_PROD}/template`;

    const listUrl = isDev ? LIST_URL_DEV : LIST_URL_PROD;
    const formUrl = isDev ? GET_FORM_URL_DEV : GET_FORM_URL_PROD;

    // sidebar에 item 만들기: onclick 이벤트에서 preview처리
    const sidebarLi = function (id, name) {
        const li = document.createElement('li');
        li.classList.add('menu-list-item');
        const a = appendNode(li, 'a', 'menu-link');
        const spanPreview = appendNode(a, 'span', '', onClick);
        spanPreview.id = id;
        spanPreview.innerText = name;
        spanPreview.dataset['id'] = id;
        spanPreview.dataset['category'] = category;
        spanPreview.dataset['formUrl'] = formUrl;
        const spanPopup = appendNode(
            a,
            'span',
            'toolbar-icon icon preview-popup-png',
            onClickPopup,
        );
        spanPopup.dataset['id'] = id;
        spanPopup.dataset['category'] = category;
        spanPopup.dataset['formUrl'] = formUrl;
        return li;
    };

    getTemplateList(listUrl, function (ret) {
        const ul = document.getElementById(sidebarId);
        if (ul) {
            ret.map((item) => {
                const li = sidebarLi(item.id, item.name);
                ul.appendChild(li);
            });
        }
    });
};

// 메뉴 링크 활성화 스타일 다시 지정하기
const resetActiveClass = function (activeEl, selection, active, resetIndex) {
    const elements = document.getElementsByClassName(selection);

    for (i = 0; i < elements.length; i++) {
        const element = elements[i];
        // active할 el을 넘기지 않고 resetIndex를 넘기면 해당 아이템을 active한다.
        if (element) {
            element.classList.remove(active);
        }
        if (!activeEl && resetIndex > -1 && i === resetIndex) {
            element.classList.add(active);
        }
    }

    // 모바일 메뉴에서 사이드바 감추기
    const sidenav = document.getElementById('sidenav');
    if (sidenav && sidenav.classList.contains('sidenav-show')) {
        sidenav.classList.remove('sidenav-show');
    }

    if (activeEl && activeEl instanceof HTMLElement) {
        activeEl.classList.add(active);
    }
};

// composite report는 이 함수를 이용하지 않는다.
const makeReport = (serviceReport) => {
    if (!serviceReport || !serviceReport.report) return; // throw Error;
    if (Array.isArray(serviceReport.report)) {
        // serviceReport = [{report: [{report}, {report}], data}]
        return serviceReport.report.map((report) => {
            return {
                form: report,
                dataSet: serviceReport.data,
            };
        });
    } else {
        // serviceReport = [{report, data}]
        return [
            {
                form: serviceReport.report,
                dataSet: serviceReport.data,
            },
        ];
    }
};

//--------------------------------------------------------------------------------------------------
// event handlers
//--------------------------------------------------------------------------------------------------
var reportForm;
var dataSet;

// 사이드바에서 리포트 미리보기 메뉴 클릭
const onClickReportPreviewMenu = async function (event) {
    const id = event.target.dataset.id;
    const formUrl = event.target.dataset.formUrl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    openTab('reportTab', 'gridTab');

    getTemplate(formUrl.concat('/', id), function (serviceItem) {
        // const reports = makeReport(serviceItem.report);
        // 템플릿에서는 form, dataSet으로 직접 저장되어 있다.
        // 작업 여력이 부족해 일단 배열형식은 유지 한다. (onlydel)
        const reports = [serviceItem];
        // console.log(reports);

        // import from preview.js
        reportViewer = webDesignerFrame('webDesignerFrame', reports);
        reportForm = reports[0].form;
        dataSet = reports[0].dataSet;
        setEditorModel('reportForm');
        hiddenFrame('reportFrame');
        resetActiveClass(
            event.target.parentElement,
            'menu-link-active',
            'menu-link-active',
        );
    });
};

// 사이드바에서 그리드 보기 메뉴 클릭
const onClickGridViewMenu = function (event) {
    const id = event.dataset.id;
    // console.log('GridViewItem: ', id);
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    openTab('gridTab', 'reportTab');
    /* grid-report-samples.js includes in index.html */
    const gridItem = window[`gridItem${id}`];
    if (gridItem) {
        const gridFrame = document.getElementById('gridFrame');
        gridViewer = gridFrame.contentWindow.setGridLayout(gridItem);
        gridFrame.contentWindow.setReportOptions(gridItem.reportOptions);

        hidePreviewReportFrame('gridReportFrame');

        resetActiveClass(
            event.target.parentElement,
            'menu-link-active',
            'menu-link-active',
        );
    }
};

// 리포트 양식 미리보기 아이콘 클릭: 팝업 창에 리포트를 미리보기 합니다.
const onClickPreviewPopup = function (event) {
    const id = event.target.dataset.id;
    const formUrl = event.target.dataset.formUrl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    // 템플릿 서비스에서 양식을 가져오도록 수정
    getTemplate(formUrl.concat('/', id), function (serviceItem) {
        const reports = [serviceItem];
        // import from preview.js
        previewPopup(reports);
    });
};

function hiddenFrame(frameId) {
    const reportFrame = document.getElementById(frameId);
    reportFrame.classList.add('hidden');
}

function sampleReport(el) {
    const form = window[el.id];
    openTab('reportTab', 'gridTab');
    reportViewer = webDesignerFrame('webDesignerFrame', form);
    reportForm = form;
    dataSet = form.data;
    setEditorModel('reportForm');
    hiddenFrame('reportFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

function mapReport(el) {
    const form = window[el.id];
    openTab('reportTab', 'gridTab');
    reportViewer = reportFrame('reportFrame', form);
    reportForm = form;
    dataSet = form.data;
    setEditorModel('reportForm');
    hiddenFrame('webDesignerFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

function multiReportSample1(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = webDesignerFrame('webDesignerFrame', multiSample317);
    reportForm = multiSample317;
    dataSet = multiSample317.dataSet;
    setEditorModel('reportForm');
    hiddenFrame('reportFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

function multiReportSample2(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = webDesignerFrame('webDesignerFrame', multiSample318);
    reportForm = multiSample318;
    dataSet = multiSample318.dataSet;
    setEditorModel('reportForm');
    hiddenFrame('reportFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

// 복합 출력 샘플 1
function reportSample1(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = webDesignerFrame('webDesignerFrame', sampleReport205);
    reportForm = sampleReport205;
    dataSet = sampleReport205.dataSet;
    setEditorModel('reportForm');
    hiddenFrame('reportFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

// 복합 출력 샘플 2
function reportSample2(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = webDesignerFrame('webDesignerFrame', sampleReport200);
    reportForm = sampleReport200;
    dataSet = sampleReport200.dataSet;
    setEditorModel('reportForm');
    hiddenFrame('reportFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

// 복합 출력 샘플 1 + 2
function reportSampleComposit(el) {
    openTab('reportTab', 'gridTab');
    reportViewer = previewFrame('reportFrame', [
        sampleReport200,
        sampleReport203,
    ]);
    setEditorModel('reportForm');
    hiddenFrame('webDesignerFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

// 듀얼 뷰어 리포트 샘플
function dualReportView(el) {
    openTab('multiReportTab', ['gridTab', 'reportTab']);
    reportViewer = previewMultiFrame(
        'multiReportFrame',
        [sampleReport200, sampleReport205],
        true,
    );
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

// 듀얼 뷰어 리포트 샘플
function tripleReportView(el) {
    openTab('multiReportTab', ['gridTab', 'reportTab']);
    reportViewer = previewMultiFrame('multiReportFrame', [
        sampleReport200,
        sampleReport205,
    ]);
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}

// 에디터 툴버튼 클릭
function clickEditorToolButton(target) {
    const buttonData = target.dataset;

    if (buttonData.btnType === 'set-editor-model') {
        setEditorModel(buttonData.sourceType);
    }

    resetActiveClass(target, 'tool-button', 'active');
}

// 사이드바에서 맵차트 보기 메뉴 클릭
function sampleMapChart(el, type) {
    const form = window[type];
    openTab('reportTab', 'gridTab');
    reportViewer = webDesignerFrame('webDesignerFrame', form);
    reportForm = form;
    dataSet = form.data;
    setEditorModel('reportForm');
    hiddenFrame('reportFrame');
    resetActiveClass(el, 'menu-link-active', 'menu-link-active');
}
