/**
 * preview html file
 */
const PREVIEW_HTML = 'preview.html';

/**
 * ReportSource = {
 *   form: RealReport.From;
 *   dataSet: RealReport.DataSet;
 * }
 *
 * 팝업창으로 리퐅트 미리보기를 표시합니다.
 * @param {ReportSource[]} reports
 */
function previewPopup(reports) {
    const w = Math.min(screen.width, 1024);
    const h = Math.min(screen.height, 768);
    const x = (screen.width - w) / 2;
    const y = (screen.height - h) / 2;
    const options = 'left=' + x + ',top=' + y + ',width=' + w + ',height=' + h;

    // 미리보기 팝업창이 없는 경우 새 창을 생성하고 있는 경우 그 창에 리포트를 표시합니다.
    if (windowPreview === null || windowPreview.closed) {
        windowPreview = window.open(PREVIEW_HTML, 'print', options);

        windowPreview.onload = () => {
            const previewFn = windowPreview['previewReport'];
            if (typeof previewFn === 'function') previewFn(reports);
        };
    } else {
        const previewFn = windowPreview['previewReport'];
        if (typeof previewFn === 'function') previewFn(reports);
        windowPreview.focus();
    }
}

function webDesignerFrame(iFrameId, reports) {
    const reportFrame = document.getElementById(iFrameId);
    reportFrame.classList.remove('hidden');
    return reportFrame.contentWindow.initWebDesigner(reports);
}

function reportFrame(iFrameId, reports) {
    const reportFrame = document.getElementById(iFrameId);
    reportFrame.classList.remove('hidden');
    return reportFrame.contentWindow.previewReport(reports);
}

/**
 *
 * ReportSource = {
 *   form: RealReport.From;
 *   dataSet: RealReport.DataSet;
 * }
 *
 * iFrame에 리포트 미리보기를 표시합니다.
 * iFrame src 속성에 preview html 파일이 지정되어 있어야 합니다.
 * @param {string} iFrameId
 * @param {ReportSource[]} reports
 */
function previewFrame(iFrameId, reports) {
    const reportFrame = document.getElementById(iFrameId);
    reportFrame.classList.remove('hidden');
    return reportFrame.contentWindow.previewReport(reports);
}

/**
 * 한 페이지에 두, 세 개의 리포트를 미리보기 합니다.
 * @param {*} iFrameId
 * @param {*} reports
 * @returns
 */
function previewMultiFrame(iFrameId, reports, isDual) {
    const multiReportFrame = document.getElementById(iFrameId);
    multiReportFrame.classList.remove('hidden');
    if (isDual)
        return multiReportFrame.contentWindow.previewDualReport(reports);
    else return multiReportFrame.contentWindow.previewTripleReport(reports);
}

/**
 *
 * iFrame에 그리드 리포트 미리보기를 표시합니다.
 * iFrame src 속성에 preview html 파일이 지정되어 있어야 합니다.
 * preview.html 파일에 previewGridReport() 호출합니다.
 * @param {string} iFrameId
 * @param {ReportSource[]} reports
 * @param {GridReportOptions} options
 */
function previewGridReportFrame(iFrameId, grid, options) {
    const reportFrame = document.getElementById(iFrameId);
    reportFrame.classList.remove('hidden');
    return reportFrame.contentWindow.previewGridReport(grid, options);
}

function initPreviewFrame(iFrameId, reports) {
    const reportFrame = document.getElementById(iFrameId);
    reportFrame.classList.remove('hidden');
    return reportFrame.contentWindow.initPreviewReport(reports);
}

function hidePreviewReportFrame(iFrameId) {
    const reportFrame = document.getElementById(iFrameId);
    reportFrame.classList.add('hidden');
}
