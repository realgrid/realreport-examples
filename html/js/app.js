// 아래 라이선스는 유효기간 2022년 2월 17일 까지 localhost 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/sTXJR8Yw8Y0adoq8hudFeXNTakk0yR9UevUdDFVwVRcNEHiG7csiBBkxValpjT3ck='
const SERVICE_HOST = 'https://service.real-report.com';

let viewer;
let currentId = '';

const clearReport = function () {
    const container = document.getElementById('realreport');
    if (container && viewer) {
        container.innerHTML = '';
        currentId = '';
        delete viewer;
    }
}

/**
 * report id of the RealReport-Service report samples
 * @param {string} id 
 */
 const previewReport = (id) => {
    const SERVICE_URL = `${SERVICE_HOST}/api/report/demo/${id}`;
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
                clearReport();
                currentId = reportItem.id;
                viewer = new RealReport.ReportViewer('realreport', reportItem.report, reportItem.data);
                viewer.preview();
            }
        }
    });
}