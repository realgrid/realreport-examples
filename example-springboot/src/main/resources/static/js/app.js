// 아래 라이선스는 유효기간 2025년 5월 31일 까지 localhost, 127.0.0.1, demo.realreport.co.kr, demo.real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic =
    'upVcPE+wPOn1V3OcjC3PuAUt7xtLcP5XVzS0GnpZwpnbdxrzWi3SH9lnNreNwRub/31bQcGrnP/Nq/NkIKx9AkkSD8KWTVlm9aI3507Qm2POAklYqFD9ZGXyjOMqbrgvr3+iyFPC2UvKqt1f0nYq0Fe/mONIYEy4CkGU/2dJ94leC1UWt2Y/gOPSfHZhPA2TCr/ODTGzdoYBrs4Ui2AU8g==';

var viewer;
var editor;

// 미리보기 팝업창 객체
var windowPreview = null;

const url = 'http://localhost:8080/report/';

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
});

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

    if (activeEl && activeEl instanceof HTMLElement) {
        activeEl.classList.add(active);
    }
};

//--------------------------------------------------------------------------------------------------
// event handlers
//--------------------------------------------------------------------------------------------------

const exampleFetch = async function (serviceUrl, callback) {
    return fetch(serviceUrl)
        .then(function (r) {
            return r.json();
        })
        .then(function (ret) {
            if (ret) {
                const { status, message } = ret;
                if (status && status !== 200) {
                    console.error('Report Server error: ', message);
                }
                if (typeof callback === 'function') callback(ret);
            }
        })
        .catch(function (e) {
            console.log(e);
        });
};

function previewReport(id) {
    exampleFetch(url.concat(id), function (report) {
        if (Array.isArray(report)) {
            reportViewer = previewFrame('reportFrame', [...report]);
        } else {
            reportViewer = previewFrame('reportFrame', [report]);
        }
    });
}

function previewReportSample(id) {
    previewReport(id);
    resetActiveClass('menu-link', 'menu-link-active', 'menu-link-active');
}

// 에디터 툴버튼 클릭
function clickEditorToolButton(target) {
    const buttonData = target.dataset;

    if (buttonData.btnType === 'set-editor-model') {
        setEditorModel(buttonData.sourceType);
    }

    resetActiveClass(target, 'tool-button', 'active');
}
