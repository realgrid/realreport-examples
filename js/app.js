// 아래 라이선스는 유효기간 2022년 7월 1일 까지 localhost, 127.0.0.1 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0WXyjOMqbrgvr3+iyFPC2UvWntFnlQAvG/WiN+dO0JtjVohH/45jQUB5oxsrC+spwo0oHsPcuPqH+6ZGVxDxR7Q=';
var viewer;

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
    if (isDev) setupReportSidebar('griddemo', GRID_DEMO_URL, 'gridReportUl', onClickGridViewMenu, onClickGridPreviewPopup);
    if (isDev) document.getElementById('gridReportMenu').classList.remove('hidden');
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

// 메뉴 링크 활성화 스타일 지우기
const clearActiveMenuLink = function(activeMenuEl) {
    const menus = document.getElementsByClassName('menu-link-active');
    for (i=0; i<menus.length; i++) {
        const menu = menus[i];
        if (menu) {
            menu.setAttribute('class', 'menu-link');
        }
    }

    if (activeMenuEl && activeMenuEl instanceof HTMLAnchorElement) {
        activeMenuEl.classList.add('menu-link-active');
    }
}

// 프레임 감추기 / 보이기
const setFrames = function(showFrameId, hideFrameId, title) {
    const showFrame = document.getElementById(showFrameId);
    if (showFrame) showFrame.classList.remove('hidden');
    const hideFrame = document.getElementById(hideFrameId);
    if (hideFrame) hideFrame.classList.add('hidden');
    const frameTitleEl = document.getElementById('frameTitle');
    frameTitleEl.innerHTML = title;
}

const resetContentFrame = function(id, title, src) {
    const frame = document.getElementById(id);
    if (frame) {
        frame.src = src;
        frame.classList.remove('hidden');
        setFrameTitle(title);
        return frame;
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
    
    setFrames('reportFrame', 'gridFrame', '리포트 미리보기');

    serviceFetch(hosturl.concat('/', id), function(serviceItem) {
        // ReportViewer의 report 타입은 { form, dataSet } 의 구조를 가진다.
        // 배열로 리포트 정보를 여러개 넘길 수 있다. 2개 이상의 리포트가 있는 경우 CompositReport
        // report = { id, name, report, data, description }
        const reportItem = serviceItem.report;
        const reports = [{
            form: reportItem.report,
            dataSet: reportItem.data
        }];

        // import from preview.js
        previewFrame('reportFrame', reports);
        clearActiveMenuLink(event.target.parentElement);
    });
}

// 사이드바에서 그리드 보기 메뉴 클릭
const onClickGridViewMenu = function(event) {
    const id = event.target.dataset.id;
    const hosturl = event.target.dataset.hosturl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    setFrames('gridFrame', 'reportFrame', '그리드 미리보기');

    serviceFetch(hosturl.concat('/', id), function(serviceItem) {
        const gridItem = serviceItem.grid;
        // grid = { id, name, category, columns, fields, description }
        const gridFrame = document.getElementById('gridFrame');
        gridFrame.contentWindow.setGridLayout(gridItem);

        clearActiveMenuLink(event.target.parentElement);
    })
}

// 리포트 양식 미리보기 아이콘 클릭: 팝업 창에 리포트를 미리보기 합니다.
const onClickPreviewPopup = function(event) {
    const id = event.target.dataset.id;
    const hosturl = event.target.dataset.hosturl;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    serviceFetch(hosturl.concat('/', id), function(serviceItem) {
        // ReportViewer의 report 타입은 { form, dataSet } 의 구조를 가진다.
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
    serviceFetch('/api/grid/griddemo/'.concat(id), function(serviceItem) {
        const gridItem = serviceItem.grid;
        console.log('POPUP GridItem: ', gridItem);
    });
}

// 복합 출력 샘플 1
function reportSample1(el) {
    setFrames('reportFrame', 'gridFrame', '리포트 미리보기');
    previewFrame('reportFrame', [sampleReport200]);
    clearActiveMenuLink(el);
}

// 복합 출력 샘플 2
function reportSample2(el) {
    setFrames('reportFrame', 'gridFrame', '리포트 미리보기');
    previewFrame('reportFrame', [sampleReport205]);
    clearActiveMenuLink(el);
}

// 복합 출력 샘플 1 + 2
function reportSampleComposit(el) {
    setFrames('reportFrame', 'gridFrame', '리포트 미리보기');
    previewFrame('reportFrame', [sampleReport200, sampleReport205]);
    clearActiveMenuLink(el);
}