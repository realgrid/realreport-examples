// 아래 라이선스는 유효기간 2022년 7월 1일 까지 localhost, 127.0.0.1 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0WXyjOMqbrgvr3+iyFPC2UvWntFnlQAvG/WiN+dO0JtjVohH/45jQUB5oxsrC+spwo0oHsPcuPqH+6ZGVxDxR7Q=';
var viewer;

// 미리보기 팝업창 객체
var windowPreview = null;

const isDev = location.hostname === 'localhost';
const SERVICE_HOST = isDev ? 'http://localhost:5500' : 'https://service.real-report.com';
const REPORT_CAT = isDev ? 'sample' : 'demo';
const GRID_CAT = 'griddemo';


//--------------------------------------------------------------------------------------------------
// onLoad
//--------------------------------------------------------------------------------------------------

document.addEventListener('DOMContentLoaded', function () {
    var isIE = window.document.documentMode ? true : false;
    if (isIE) {
        document.write('죄송합니다. RealReport 데모 사이트는 IE브라우저를 지원하지 않습니다.');
        document.close();
    }
    setupReportSidebar();
    setupGridSidebar();
});


//--------------------------------------------------------------------------------------------------
// private methods
//--------------------------------------------------------------------------------------------------

// add node helper
const appendNode = function (parent, tag, classNames, onClick) {
    const el = document.createElement(tag);
    if (classNames) el.setAttribute('class', classNames);
    if (onClick) el.onclick = onClick;
    parent.appendChild(el)
    return el;
}

// frame 타이틀 설정
const setFrameTitle = function (title) {
    const frameTitleEl = document.getElementById('frameTitle');
    frameTitleEl.innerHTML = title;
}

// service 호출
const serviceFetch = async function (url, callback) {
    return fetch(SERVICE_HOST.concat(url), {
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
            if (status && status !== 200) console.error('Report Server error: ', message);
            if (typeof callback === 'function') callback(ret);
        }
    });
}

// 사이드바 데모용 리포트 목록 메뉴 구성
const setupReportSidebar = function () {
    // sidebar에 item 만들기: onclick 이벤트에서 preview처리
    const sidebarLi = function (id, name) {
        const li = document.createElement('li');
        li.classList.add('menu-list-item');
        const a = appendNode(li, 'a', 'menu-link');
        const spanPreview = appendNode(a, 'span', '', onClickReportPreviewMenu);
        spanPreview.innerText = name;
        spanPreview.dataset['id'] = id;
        const spanPopup = appendNode(a, 'span', 'toolbar-icon icon preview-popup-png', onClickPreviewPopup);
        spanPopup.dataset['id'] = id;
        return li;
    }

    serviceFetch('/api/report/'.concat(REPORT_CAT, '/list'),  function (ret) {
        const ul = document.getElementById('sidebarUl');
        if (ul) {
            ret.map(item => {
                const li = sidebarLi(item.id, item.name);
                ul.appendChild(li);
            });
        }
    });
}

// 사이드바 데모용 그리드 목록 메뉴 구성
const setupGridSidebar = function () {
    // sidebar에 item 만들기: onclick 이벤트에서 preview처리
    const sidebarLi = function (id, name) {
        const li = document.createElement('li');
        li.classList.add('menu-list-item');
        const a = appendNode(li, 'a', 'menu-link');
        const spanPreview = appendNode(a, 'span', '', onClickGridViewMenu);
        spanPreview.innerText = name;
        spanPreview.dataset['id'] = id;
        const spanPopup = appendNode(a, 'span', 'toolbar-icon icon preview-popup-png', onClickGridPreviewPopup);
        spanPopup.dataset['id'] = id;
        return li;
    }

    serviceFetch('/api/grid/'.concat(GRID_CAT, '/list'),  function (ret) {
        const ul = document.getElementById('gridReportUl');
        if (ul) {
            ret.map(item => {
                const li = sidebarLi(item.id, item.name);
                ul.appendChild(li);
            });
        }
    });
}

// 메뉴 링크 활성화 스타일 지우기
const clearActiveMenuLink = function () {
    const menus = document.getElementsByClassName('menu-link-active');
    for (i=0; i<menus.length; i++) {
        const menu = menus[i];
        if (menu) {
            menu.setAttribute('class', 'menu-link');
        }
    }
}

const resetContentFrame = function (id, title, src) {
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
const onClickReportPreviewMenu = async function (event) {
    const id = event.target.dataset.id;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');
    
    serviceFetch('/api/report/'.concat(REPORT_CAT, '/', id), function (serviceItem) {
        // ReportViewer의 report 타입은 { form, dataSet } 의 구조를 가진다.
        // 배열로 리포트 정보를 여러개 넘길 수 있다. 2개 이상의 리포트가 있는 경우 CompositReport
        // report = { id, name, report, data, description }
        const reportItem = serviceItem.report;
        const reports = [{
            form: reportItem.report,
            dataSet: reportItem.data
        }];

        const reportFrame = resetContentFrame('contentframe', '리포트 미리보기', 'preview.html');
        if (reportFrame) {
            // ReportView 렌더링에 약간의 시간이 소요된다. (iFrame 소소에 inline src 속성에 preview.html 지정시 문제없음)
            setTimeout(() => {
                reportFrame.contentWindow.previewReport(reports);
            }, 200);
        }
        clearActiveMenuLink();

        if (event.target && event.target.parentElement && event.target.parentElement instanceof HTMLAnchorElement) {
            event.target.parentElement.classList.add('menu-link-active');
        }
    });
}

// 사이드바에서 그리드 보기 메뉴 클릭
const onClickGridViewMenu = function (event) {
    const id = event.target.dataset.id;
    if (!id) console.error('리포트 정보를 보여줄 키 ID가 없습니다.');

    serviceFetch('/api/grid/griddemo/'.concat(id), function (serviceItem) {
        const gridItem = serviceItem.grid;
        // grid = { id, name, category, columns, fields, description }
        const gridFrame = resetContentFrame('contentframe', '그리드 미리보기', 'grid.html');
        if (gridFrame && gridItem) {
            // 렌더링에 약간의 시간이 소요된다. (iFrame 소소에 inline src 속성에 gird.html 지정시 문제없음)
            setTimeout(() => {
                gridFrame.contentWindow.setGridLayout(gridItem);
            }, 200);
        }
        clearActiveMenuLink();

        if (event.target && event.target.parentElement && event.target.parentElement instanceof HTMLAnchorElement) {
            event.target.parentElement.classList.add('menu-link-active');
        }
    })
}

// 리포트 양식 미리보기 아이콘 클릭: 팝업 창에 리포트를 미리보기 합니다.
const onClickPreviewPopup = function (event) {
    const id = event.target.dataset.id;
    if (!id) console.error('리포트 ID가 없습니다.');

    const w = Math.min(screen.width, 1024);
    const h = Math.min(screen.height, 768);
    const x = (screen.width - w) / 2;
    const y = (screen.height - h) / 2;
    const options = 'left=' + x + ',top=' + y + ',width=' + w + ',height=' + h;

    serviceFetch('/api/report/'.concat(REPORT_CAT, '/', id), function (serviceItem) {
        // ReportViewer의 report 타입은 { form, dataSet } 의 구조를 가진다.
        // 배열로 리포트 정보를 여러개 넘길 수 있다. 2개 이상의 리포트가 있는 경우 CompositReport
        // report = { id, name, report, data, description }
        const reportItem = serviceItem.report;
        const reports = [{
            form: reportItem.report,
            dataSet: reportItem.data
        }];

        // 미리보기 팝업창이 없는 경우 새 창을 생성합니다.
        if (windowPreview === null || windowPreview.closed) {
            windowPreview = window.open('preview.html', 'print', options);
            setTimeout(() => {
                const previewFn = windowPreview['previewReport'];
                if (typeof previewFn === 'function') previewFn(reports);
            }, 200);
        } else {
            const previewFn = windowPreview['previewReport'];
            if (typeof previewFn === 'function') previewFn(reports);
            windowPreview.focus();
        }
    });
}

const onClickGridPreviewPopup = function (event) {
    const id = event.target.dataset.id;
    if (!id) console.error('그리드 ID가 없습니다.');
    serviceFetch('/api/grid/griddemo/'.concat(id), function (serviceItem) {
        const gridItem = serviceItem.grid;
        console.log('POPUP GridItem: ', gridItem);
    });
}
