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
        setTimeout(() => {
            const previewFn = windowPreview['previewReport'];
            if (typeof previewFn === 'function') previewFn(reports);
        }, 200);
    } else {
        const previewFn = windowPreview['previewReport'];
        if (typeof previewFn === 'function') previewFn(reports);
        windowPreview.focus();
    }
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
