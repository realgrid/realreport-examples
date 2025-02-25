var reportTemplates = [
    {
        category: 'General',
        templates: [
            {
                name: 'Blank Form',
                thumbnail: 'templates/reports/general/blank.png',
                file: 'templates/reports/general/blank.json',
                description: '리포트 헤더만 존재하는 비어 있는 리포트입니다.',
            },
            {
                name: 'Free Form',
                thumbnail: 'templates/reports/general/freeform.png',
                file: 'templates/reports/general/freeform.json',
                dataFile: 'templates/reports/general/freeform-data.json',
                description: '페이지마다 반복되는 테이블 서식 리포트입니다.',
            },
            {
                name: 'Tabular',
                thumbnail: 'templates/reports/general/tabular.png',
                file: 'templates/reports/general/tabular.json',
                dataFile: 'templates/reports/general/tabular-data.json',
                description: '일반적인 테이블 밴드형태의 리포트입니다.',
            },
            {
                name: 'Master Detail',
                thumbnail: 'templates/reports/general/master-detail.png',
                file: 'templates/reports/general/master-detail.json',
                dataFile: 'templates/reports/general/master-detail-data.json',
                description:
                    '테이블 형태의 마스터와 테이블 밴드 형태의 디테일로 구성된 리포트입니다',
            },
            {
                name: 'Group',
                thumbnail: 'templates/reports/general/group.png',
                file: 'templates/reports/general/group.json',
                dataFile: 'templates/reports/general/group-data.json',
                description:
                    '하나의 테이블 밴드에서 그룹핑이 설정된 리포트입니다.',
            },
            {
                name: 'Label',
                thumbnail: 'templates/reports/general/mail-label.png',
                file: 'templates/reports/general/mail-label.json',
                dataFile: 'templates/reports/general/mail-label-data.json',
                description:
                    '심플 밴드에서 2개 컬럼으로 구성된 메일 라벨 서식 리포트입니다.',
            },
            {
                name: 'Graph',
                thumbnail: 'templates/reports/general/graph.png',
                file: 'templates/reports/general/graph.json',
                dataFile: 'templates/reports/general/graph-data.json',
                description: '그래프와 테이블 밴드가 포함된 리포트입니다.',
            },
        ],
    },
    {
        category: 'Sales',
        templates: [
            {
                name: '거래 명세서',
                thumbnail: 'templates/reports/sales/transaction.png',
                file: 'templates/reports/sales/transaction.json',
                dataFile: 'templates/reports/sales/transaction-data.json',
                description: '거래명세서 예제 리포트입니다.',
            },
            {
                name: '견적서',
                thumbnail: 'templates/reports/sales/estimate.png',
                file: 'templates/reports/sales/estimate.json',
                dataFile: 'templates/reports/sales/estimate-data.json',
                description: '견적서 예제 리포트입니다.',
            },
            {
                name: '발주서',
                thumbnail: 'templates/reports/sales/orders.png',
                file: 'templates/reports/sales/orders.json',
                dataFile: 'templates/reports/sales/orders-data.json',
                description: '발주서 예제 리포트입니다.',
            },
            {
                name: 'Invoice',
                thumbnail: 'templates/reports/sales/invoice.png',
                file: 'templates/reports/sales/invoice.json',
                dataFile: 'templates/reports/sales/invoice-data.json',
                description: 'Invoice 예제 리포트입니다.',
            },
            {
                name: '납품표',
                thumbnail: 'templates/reports/sales/delivery-certification.png',
                file: 'templates/reports/sales/delivery-certification.json',
                dataFile:
                    'templates/reports/sales/delivery-certification-data.json',
                description: '납품표 예제 리포트입니다.',
            },
            {
                name: '일일 활동 보고서',
                thumbnail: 'templates/reports/sales/daily-report.png',
                file: 'templates/reports/sales/daily-report.json',
                dataFile: 'templates/reports/sales/daily-report-data.json',
                description: '영업 일일 활동 보고서 예제 리포트입니다.',
            },
        ],
    },
    {
        category: 'Production',
        templates: [
            {
                name: '일일 생산 보고',
                thumbnail: 'templates/reports/production/daily-report.png',
                file: 'templates/reports/production/daily-report.json',
                dataFile: 'templates/reports/production/daily-report-data.json',
                description: '일일 생산 보고 예제 리포트입니다.',
            },
            {
                name: '생산/재고 일일 보고',
                thumbnail:
                    'templates/reports/production/product-stock-report.png',
                file: 'templates/reports/production/product-stock-report.json',
                dataFile:
                    'templates/reports/production/product-stock-report-data.json',
                description: '생산/재고 일일 보고 예제 리포트입니다.',
            },
            {
                name: '자재 청구/투입 현황',
                thumbnail: 'templates/reports/production/material-input.png',
                file: 'templates/reports/production/material-input.json',
                dataFile:
                    'templates/reports/production/material-input-data.json',
                description: '자재 청구/투입 현황 예제 리포트입니다.',
            },
            {
                name: '연간 매입매출 보고서',
                thumbnail:
                    'templates/reports/production/annual-sales-report.png',
                file: 'templates/reports/production/annual-sales-report.json',
                dataFile:
                    'templates/reports/production/annual-sales-report-data.json',
                description: '연간 매입매출 보고서 예제 리포트입니다.',
            },
            {
                name: '지점별 판매실적',
                thumbnail:
                    'templates/reports/production/sales-performance-by-branch.png',
                file: 'templates/reports/production/sales-performance-by-branch.json',
                dataFile:
                    'templates/reports/production/sales-performance-by-branch-data.json',
                description: '지점별 판매실적 예제 리포트입니다.',
            },
        ],
    },
    {
        category: 'HR',
        templates: [
            {
                name: '근태 관리 대장',
                category: 'HR',
                thumbnail: 'templates/reports/hr/monthly-working-report.png',
                file: 'templates/reports/hr/monthly-working-report.json',
                dataFile:
                    'templates/reports/hr/monthly-working-report-data.json',
                description: '근태 관리 대장 예제 리포트입니다.',
            },
            {
                name: '출퇴근 관리 대장',
                category: 'HR',
                thumbnail: 'templates/reports/hr/working-time-report.png',
                file: 'templates/reports/hr/working-time-report.json',
                dataFile: 'templates/reports/hr/working-time-report-data.json',
                description: '출퇴근 관리 대장 예제 리포트입니다.',
            },
            {
                name: '인사 기록 카드',
                category: 'HR',
                thumbnail: 'templates/reports/hr/personal-card.png',
                file: 'templates/reports/hr/personal-card.json',
                dataFile: 'templates/reports/hr/personal-card-data.json',
                description: '인사 기록 카드 예제 리포트입니다.',
            },
            {
                name: '재직 증명서',
                category: 'HR',
                thumbnail: 'templates/reports/hr/proof-employeement.png',
                file: 'templates/reports/hr/proof-employeement.json',
                dataFile: 'templates/reports/hr/proof-employeement-data.json',
                description: '재직 증명서 예제 리포트입니다.',
            },
            {
                name: '인원현황 보고서',
                category: 'HR',
                thumbnail: 'templates/reports/hr/resource-status.png',
                file: 'templates/reports/hr/resource-status.json',
                dataFile: 'templates/reports/hr/resource-status-data.json',
                description: '인원현황 보고서 예제 리포트입니다.',
            },
            {
                name: '년간 교육/훈련 보고서',
                category: 'HR',
                thumbnail: 'templates/reports/hr/education-plan.png',
                file: 'templates/reports/hr/education-plan.json',
                dataFile: 'templates/reports/hr/education-plan-data.json',
                description: '년간 교육/훈련 보고서 예제 리포트입니다.',
            },
            {
                name: '직원 급여 관리',
                category: 'HR',
                thumbnail:
                    'templates/reports/hr/employee-salary-management.png',
                file: 'templates/reports/hr/employee-salary-management.json',
                dataFile:
                    'templates/reports/hr/employee-salary-management-data.json',
                description: '직원 급여 관리 예제 리포트입니다.',
            },
        ],
    },
    {
        category: 'Accounting',
        templates: [
            {
                name: '거래처별 원장',
                thumbnail: 'templates/reports/accounting/customer-ladger.png',
                file: 'templates/reports/accounting/customer-ladger.json',
                dataFile:
                    'templates/reports/accounting/customer-ladger-data.json',
                description: '거래처별 원장 예제 리포트입니다.',
            },
            {
                name: '근로소득 원청징수 영수증',
                thumbnail:
                    'templates/reports/accounting/earned-tax-receipt.png',
                file: 'templates/reports/accounting/earned-tax-receipt.json',
                dataFile:
                    'templates/reports/accounting/earned-tax-receipt.json',
                description: '근로소득 원청징수 영수증 예제 리포트입니다.',
            },
            {
                name: '퇴직 원천징수 영수증',
                thumbnail:
                    'templates/reports/accounting/retired-tax-receipt.png',
                file: 'templates/reports/accounting/retired-tax-receipt.json',
                dataFile:
                    'templates/reports/accounting/retired-tax-receipt-data.json',
                description: '퇴직 원천징수 영수증 예제 리포트입니다.',
            },
            {
                name: '예정신고 매입/매출 현황',
                thumbnail:
                    'templates/reports/accounting/provisional-return.png',
                file: 'templates/reports/accounting/provisional-return.json',
                dataFile:
                    'templates/reports/accounting/provisional-return-data.json',
                description: '예정신고 매입/매출 현황 예제 리포트입니다.',
            },
            {
                name: '회계 분기장',
                thumbnail: 'templates/reports/accounting/journal.png',
                file: 'templates/reports/accounting/journal.json',
                dataFile: 'templates/reports/accounting/journal-data.json',
                description: '회계 분기장 예제 리포트입니다.',
            },
            {
                name: '세금계산서',
                thumbnail: 'templates/reports/accounting/bill.png',
                file: 'templates/reports/accounting/bill.json',
                dataFile: 'templates/reports/accounting/bill-data.json',
                description: '세금계산서 예제 리포트입니다.',
            },
            {
                name: '근로소득 원천징수 영수부',
                thumbnail: 'templates/reports/accounting/earned-tax-report.png',
                file: 'templates/reports/accounting/earned-tax-report.json',
                dataFile:
                    'templates/reports/accounting/earned-tax-report-data.json',
                description: '근로소득 원천징수 영수부 예제 리포트입니다.',
            },
            {
                name: '매입 부가세 내역',
                thumbnail: 'templates/reports/accounting/purchase-surtax.png',
                file: 'templates/reports/accounting/purchase-surtax.json',
                dataFile:
                    'templates/reports/accounting/purchase-surtax-data.json',
                description: '매입 부가세 내역 예제 리포트입니다.',
            },
        ],
    },
];
