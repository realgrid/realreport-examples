// 아래 라이선스는 유효기간 2025년 2월 6일 까지 localhost, 127.0.0.1 또는 real-report.com 도메인에서 사용할 수 있는 라이선스 입니다.
var realReportLic =
    'upVcPE+wPOn1V3OcjC3PuAUt7xtLcP5XVzS0GnpZwpnbdxrzWi3SH8gD17wvi7BNc3vsxq2SxIjBPPfNGfMHzUuCVeNUotmaJ21W+hLN+SUO5+/xJSE3Low/NvmdQ9UD0QeIbtyyIEH9YLxChWwJkg==';
let designer;

// 디자이너 옵션
// https://real-report.com/docs/api/types/TypesReportDesigner#ireportdesigneroptions
const designerOptions = {
    showAssetPanel: true,
    showDataPanel: true,
    showScriptPanel: true,
    // 디자이너 API 콜백
    listReportsCallback: async () => {
        // 리포트 양식 목록을 제공하는 사용자 코드
    },
    getReportCallback: async (reportId) => {
        // 리포트 양식을 제공하는 사용자 코드
    },
    saveReportCallback: async (report, reportId) => {
        // 리포트 양식을 저장하는 사용자 코드
        if (!reportId) {
            return {
                reportId: 1,
                message: 'New Report Saved!',
            };
        } else {
            return {
                reportId: 1,
                message: 'Report Updated!',
            };
        }
    },
};

// 디자이너 실행 코드
var initWebDesigner = function (reports) {
    // 디자이너 객체 생성
    // 문서: https://real-report.com/docs/web-designer/02-use#reportdesigner
    designer = new RealReport.ReportDesigner('designer', designerOptions);

    // 템플릿 적용하기
    designer.setReportTemplates(reportTemplates);
    designer.setDataTemplates(dataTemplates);
    designer.setAssetTemplates(assetTemplates);

    // 폰트 등록하기
    // 문서: https://real-report.com/docs/api/ReportDesigner#registerfonts
    designer
        .registerFonts(
            [
                {
                    name: 'Pretendard',
                    source: 'js/pdffonts/NanumGothic.otf',
                    fontWeight: 'normal',
                },
                {
                    name: 'Pretendard',
                    source: 'js/pdffonts/NanumGothicBold.otf',
                    fontWeight: 'bold',
                },
            ],
            'Pretendard',
        )
        // 폰트가 완전히 로드된 후 보고서 양식 불러오기 및 미리보기 모드 설정
        .then(() => {
            // 보고서 양식 불러오기
            // 문서: https://real-report.com/docs/api/ReportDesigner#loadreport
            designer.loadReport(reports);
        });
};

function loadReportForm(reports) {
    designer.loadReport(reports);
}
// DOM이 완전히 로드된 후 initWebDesigner 함수를 호출하여 디자이너 실행
window.addEventListener('DOMContentLoaded', function () {
    initWebDesigner(orderListReport);
});
