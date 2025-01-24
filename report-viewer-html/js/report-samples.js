var sampleReport200 = {
    form: {
        report: {
            name: 'reportRoot',
            paperSize: 'A4',
            paperWidth: '210mm',
            paperHeight: '297mm',
            marginLeft: '12mm',
            marginRight: '12mm',
            marginTop: '15mm',
            marginBottom: '15mm',
        },
        page: {
            name: 'reportPage',
            pageHeader: {
                name: 'pageHeader',
                items: [
                    {
                        type: 'text',
                        value: '${date}',
                        name: '',
                        right: 0,
                        dateFormat: 'yyyy/MM/dd',
                        text: '',
                    },
                ],
            },
            reportHeader: {
                name: 'reportHeader',
            },
            reportFooter: {
                name: 'reportFooter',
            },
            pageFooter: {
                name: 'pageFooter',
                items: [
                    {
                        type: 'text',
                        value: '${pages}',
                        width: 37,
                        name: '',
                        right: 0,
                        text: '',
                        styles: {
                            textAlign: 'left',
                            border: '',
                            __tag_: {},
                        },
                    },
                    {
                        type: 'text',
                        name: '',
                        right: '38px',
                        text: '/',
                    },
                    {
                        type: 'text',
                        value: '${page}',
                        name: '',
                        right: '45px',
                        text: 'Text',
                        styles: {
                            textAlign: 'right',
                            __tag_: {},
                        },
                    },
                ],
            },
            body: {
                itemGap: 4,
                items: [
                    {
                        type: 'simpleband',
                        data: 'customer',
                        width: '100%',
                        name: '',
                        sectionCount: 2,
                        sectionGap: 50,
                        rowsPerPage: 6,
                        detail: {
                            type: 'detail',
                            width: '100%',
                            name: '',
                        },
                        groups: [],
                        header: {
                            type: 'stack',
                            name: 'bandHeader',
                            width: 350.4960629921259,
                        },
                        footer: {
                            type: 'stack',
                            name: 'bandPageFooter',
                            width: '100%',
                        },
                        dataRow: {
                            type: 'stack',
                            name: 'bandrow',
                            width: '100%',
                            onGetStyles: '',
                            styles: {
                                paddingRight: 'px',
                                paddingBottom: '30px',
                                borderBottom: '',
                                __tag_: {},
                            },
                            styleCallback: null,
                            items: [
                                {
                                    type: 'stack',
                                    width: '100%',
                                    height: 105,
                                    name: '',
                                    styles: {
                                        paddingLeft: '4px',
                                        paddingTop: '4px',
                                        paddingRight: '4px',
                                        paddingBottom: '4px',
                                        border: '1px solid',
                                        __tag_: {},
                                    },
                                    items: [
                                        {
                                            type: 'text',
                                            value: 'PostalCode',
                                            name: '',
                                            left: '0px',
                                            top: 22,
                                            numberFormat: '',
                                            text: 'Text',
                                            styles: {
                                                fontSize: '12px',
                                                __tag_: {},
                                            },
                                        },
                                        {
                                            type: 'text',
                                            value: 'Address1',
                                            name: '',
                                            left: '0px',
                                            top: 42,
                                            text: 'Text',
                                            styles: {
                                                fontSize: '12px',
                                                __tag_: {},
                                                textAlign: 'left',
                                            },
                                        },
                                        {
                                            type: 'text',
                                            value: 'ContactName',
                                            name: '',
                                            right: '50px',
                                            bottom: '0px',
                                            suffix: ' 님 앞',
                                            text: 'Text',
                                            styles: {
                                                fontSize: '14px',
                                                fontWeight: 'bold',
                                                __tag_: {},
                                            },
                                        },
                                        {
                                            type: 'text',
                                            value: 'Address2',
                                            name: '',
                                            left: '0px',
                                            top: 58,
                                            text: 'Text',
                                            styles: {
                                                fontSize: '12px',
                                                textAlign: 'left',
                                            },
                                        },
                                        {
                                            type: 'barcode',
                                            value: 'PostalCode',
                                            width: 100,
                                            height: 17,
                                            name: '',
                                            left: '200px',
                                            top: '0px',
                                            format: 'code39',
                                            text: 'Cosmos',
                                        },
                                        {
                                            type: 'text',
                                            value: 'PrintDate',
                                            name: '',
                                            left: 12,
                                            top: '0px',
                                            prefix: '발송일자 ',
                                            suffix: '  ',
                                            text: '',
                                            styles: {
                                                fontSize: '12px',
                                                border: '1px solid black',
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        styles: {
                            paddingRight: 'px',
                            paddingBottom: '30px',
                            __tag_: {},
                        },
                    },
                ],
            },
        },
        assets: {
            '/': [],
        },
        data: {
            'mail label': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'PostalCode',
                        dataType: 'text',
                        sample: '742-170',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Address',
                        dataType: 'text',
                        sample: '가장동 78-3 상주시 대한민국',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ContactName',
                        dataType: 'text',
                        sample: '한석규',
                        dateReader: null,
                    },
                ],
            },
            customer: {
                type: 'band',
                fields: [
                    {
                        fieldName: 'PostalCode',
                        dataType: 'number',
                        sample: '61881',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Address1',
                        dataType: 'text',
                        sample: '부산광역시 강서구 명지오션시티9로 36',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Address2',
                        dataType: 'text',
                        sample: '',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ContactName',
                        dataType: 'text',
                        sample: '나수호',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'PrintDate',
                        dataType: 'text',
                        sample: '2022-03-29',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
        },
        guid: '7eb76d42-9e71-4a76-b3c6-77ca1645d6d1',
    },
    dataSet: {
        customer: {
            type: 'band',
            values: [
                {
                    PostalCode: 61881,
                    Address1: '부산광역시 강서구 명지오션시티9로 36',
                    Address2: '',
                    ContactName: '나수호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13207,
                    Address1: '경기도 성남시 중원구 사기막골로 124',
                    Address2:
                        '(상대원동, SKn테크노파크) 테크센터동 1501, 1502호',
                    ContactName: '김상영',
                    PrintDate: '2022-03-30',
                },
                {
                    PostalCode: 13707,
                    Address1: '서울특별시 서초구 서초동',
                    Address2: '1489-3',
                    ContactName: '홍길도',
                    PrintDate: '2022-03-28',
                },
                {
                    PostalCode: 13786,
                    Address1: '서울특별시 서초구 서초동',
                    Address2: '1489-3 약사회관 지하1층',
                    ContactName: '조영훈',
                    PrintDate: '2022-03-24',
                },
                {
                    PostalCode: 18515,
                    Address1: '경기도 화성시 정남면 덕절리 218-1',
                    Address2: '',
                    ContactName: '임걱정',
                    PrintDate: '2022-03-21',
                },
                {
                    PostalCode: 13461,
                    Address1: '경기도 성남시 분당구 운중로 135',
                    Address2: '(운중동, 더원스퀘어) 304호',
                    ContactName: '강원도',
                    PrintDate: '2022-03-20',
                },
                {
                    PostalCode: 13130,
                    Address1: '서울특별시 종로구 창경궁로 120',
                    Address2: '(인의동, 종로플레이스) 14층',
                    ContactName: '김을로',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 15205,
                    Address1: '서울특별시 구로구 구로동',
                    Address2: '235 한신 IT타워1203,1204호',
                    ContactName: '이성준',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 15570,
                    Address1: '서울특별시 송파구 백제고분로 101',
                    Address2: '(잠실동, (주)서일빌딩) 8,9,10층',
                    ContactName: '박하영',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 22044,
                    Address1: '강원도 원주시 흥업면 흥업리',
                    Address2: '1420-11 (주)구들택',
                    ContactName: '구기성',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 64231,
                    Address1: '경상남도 창원시 성산구 중앙대로 56',
                    Address2: '양지빌딩(상남동 71-2)',
                    ContactName: '고기영',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 63003,
                    Address1: '경상남도 마산시 봉암동',
                    Address2: '541-9 경남지능형홈산업화센터 2동 205,506호',
                    ContactName: '권미호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 46340,
                    Address1: '경기도 성남시 분당구 대왕판교로 660',
                    Address2: '유스페이스1 A-1003호',
                    ContactName: '이성호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 48058,
                    Address1: '부산광역시 해운대구 센텀서로 30',
                    Address2: '(우동, 케이엔엔타워)1702호',
                    ContactName: '나혜수',
                    PrintDate: '2022-03-28',
                },
                {
                    PostalCode: 48058,
                    Address1: '부산광역시 해운대구 센텀서로 30',
                    Address2: '(우동, 케이엔엔타워)1702,1703호',
                    ContactName: '최욱',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 12989,
                    Address1: '경기도 하남시 초광산단로 126 3층',
                    Address2: '(광암동, 우일공장)',
                    ContactName: '최성호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 51393,
                    Address1: '경상남도 창원시 의창구 사화로 372 동진빌딩 3층',
                    Address2: '(팔용동, 동진빌딩)',
                    ContactName: '박상엽',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 16101,
                    Address1: '서울특별시 강남구 언주로 620',
                    Address2: '(논현동, 현대인텔렉스) 7층',
                    ContactName: '김현호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 14512,
                    Address1: '서울특별시 중구 칠패로 36',
                    Address2: '(봉래동1가, 연세봉래빌딩) 11,12층',
                    ContactName: '이혜영',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13839,
                    Address1: '서울특별시 송파구 삼전동',
                    Address2: '101-2',
                    ContactName: '정해석',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 24465,
                    Address1: '강원도 춘천시 남산면 버들1길 130',
                    Address2: '(수동리)',
                    ContactName: '김태영',
                    PrintDate: '2020-03-30',
                },
                {
                    PostalCode: 13518,
                    Address1: '서울특별시 강남구 논현동',
                    Address2: '87-2 미래빌딩 5층',
                    ContactName: '이수정',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13579,
                    Address1: '서울특별시 강남구 삼성로96길 23',
                    Address2: '동부삼성동빌딩',
                    ContactName: '임정수',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 51391,
                    Address1: '경상남도 창원시 의창구 차룡로48번길 54',
                    Address2: '경남창원산학융합원 기업연구관 405호',
                    ContactName: '임권호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 30090,
                    Address1: '대전광역시 동구 홍도동',
                    Address2: '78-4 3층',
                    ContactName: '양희진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 36025,
                    Address1: '충청북도 청주시 상당구 월평로 242',
                    Address2: ', 201(용암동)',
                    ContactName: '양유진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 16775,
                    Address1: '서울특별시 서초구 마방로 68',
                    Address2: '(양재동, 동원산업빌딩) 1층',
                    ContactName: '김유진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 64165,
                    Address1: '경상남도 창원시 팔용동',
                    Address2: '39-13번지',
                    ContactName: '이유진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13836,
                    Address1: '서울특별시 송파구 올림픽로43길 88',
                    Address2: '생명과학연구관 12층',
                    ContactName: '강동원',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 58121,
                    Address1: '전라남도 화순군 화순읍 칠충로 61-19',
                    Address2: '(대리)',
                    ContactName: '광동수',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 17299,
                    Address1: '서울특별시 영등포구 경인로 775',
                    Address2: '(문래동3가, 에이스하이테크시티) 2동 901호',
                    ContactName: '박기영',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13510,
                    Address1: '서울특별시 강남구 논현동',
                    Address2: '751빌딩 5층',
                    ContactName: '최선호',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13042,
                    Address1: '서울특별시 종로구 자하문로 68-14',
                    Address2: '(효자동)',
                    ContactName: '최무진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 32542,
                    Address1: '충청남도 공주시 왕릉로 12',
                    Address2: '(웅진동) 동선빌딩 3층',
                    ContactName: '조종학',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 16827,
                    Address1: '경기도 용인시 수지구 손곡로 17',
                    Address2: '(동천동)',
                    ContactName: '진준희',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 17327,
                    Address1: '서울특별시 영등포구 여의나루로 67',
                    Address2: '(여의도동, 신송빌딩)1706호',
                    ContactName: '진공원',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 15625,
                    Address1: '서울특별시 송파구 백제고분로41길 21-24',
                    Address2: '(송파동) 501호',
                    ContactName: '공유진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 13590,
                    Address1: '서울특별시 강남구 삼성동',
                    Address2: '159-1 아셈타워 1802',
                    ContactName: '김유진',
                    PrintDate: '2022-03-29',
                },
                {
                    PostalCode: 51711,
                    Address1: '전라남도  담양군 수북면 개동리',
                    Address2: '542-5',
                    ContactName: '박유진',
                    PrintDate: '2022-03-29',
                },
            ],
        },
    },
};

var sampleReport203 = {
    form: {
        report: {
            name: 'reportRoot',
            paperOrientation: 'landscape',
            paperSize: 'A4',
            paperWidth: '210mm',
            paperHeight: '297mm',
            marginLeft: '12mm',
            marginRight: '12mm',
            marginTop: '15mm',
            marginBottom: '15mm',
        },
        page: {
            name: 'reportPage',
            pageHeader: {
                name: 'pageHeader',
            },
            reportHeader: {
                name: 'reportHeader',
            },
            reportFooter: {
                name: 'reportFooter',
            },
            pageFooter: {
                name: 'pageFooter',
            },
            body: {
                itemGap: 0,
                items: [
                    {
                        type: 'simpleband',
                        data: 'education-master',
                        width: '100%',
                        name: '',
                        detail: {
                            type: 'detail',
                            width: '100%',
                            name: '',
                            items: [
                                {
                                    type: 'tableband',
                                    data: 'education-detail',
                                    width: '100%',
                                    name: '',
                                    masterFields: 'Writer, DateOfWriting',
                                    keyFields: 'Writer, DateOfWriting',
                                    detail: {
                                        type: 'detail',
                                        width: '100%',
                                        name: '',
                                    },
                                    colCount: 21,
                                    columns: [
                                        {
                                            width: '2.5%',
                                        },
                                        {
                                            width: '18%',
                                        },
                                        {
                                            width: '3%',
                                        },
                                        {
                                            width: '3%',
                                        },
                                        {
                                            width: '6%',
                                        },
                                        {
                                            width: '5%',
                                        },
                                        {
                                            width: '8%',
                                        },
                                        {
                                            width: '2.5%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '2%',
                                        },
                                        {
                                            width: '10%',
                                        },
                                    ],
                                    header: {
                                        width: '100%',
                                        name: null,
                                        rowCount: 2,
                                        minRowHeight: '24px',
                                        cellStyles: {
                                            borderLeft: '1px solid #000',
                                            borderRight: '1px solid #000',
                                            borderTop: '1px solid #000',
                                            borderBottom: '1px solid #000',
                                        },
                                        rows: [{}, {}],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                rowspan: 2,
                                            },
                                            {
                                                r: 0,
                                                c: 1,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 2,
                                                colspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 6,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 7,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 8,
                                                colspan: 12,
                                                styles: {
                                                    borderLeft: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 20,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 3,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 8,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 9,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 10,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 11,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 12,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 13,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 14,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 15,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 16,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 17,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 18,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 19,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: 'No',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                text: '제목',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: '주관부서',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                text: '시간',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 6,
                                                row: 0,
                                                text: '대상',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 7,
                                                row: 0,
                                                text: '구분',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 20,
                                                row: 0,
                                                text: '비고',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 8,
                                                row: 1,
                                                text: '1',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 9,
                                                row: 1,
                                                text: '2',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 10,
                                                row: 1,
                                                text: '3',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 11,
                                                row: 1,
                                                text: '4',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 12,
                                                row: 1,
                                                text: '5',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 13,
                                                row: 1,
                                                text: '6',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 14,
                                                row: 1,
                                                text: '7',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 15,
                                                row: 1,
                                                text: '8',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 16,
                                                row: 1,
                                                text: '9',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 17,
                                                row: 1,
                                                text: '10',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 18,
                                                row: 1,
                                                text: '11',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 19,
                                                row: 1,
                                                text: '12',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 2,
                                                row: 1,
                                                text: '사내',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 3,
                                                row: 1,
                                                text: '사외',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 2,
                                                row: 0,
                                                text: '구분',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 8,
                                                row: 0,
                                                text: '일정',
                                            },
                                        ],
                                    },
                                    footer: {
                                        width: '100%',
                                        name: null,
                                        visible: false,
                                        rowCount: 1,
                                        cellStyles: {},
                                        rows: [{}],
                                        cells: [],
                                    },
                                    dataRow: {
                                        width: '100%',
                                        name: null,
                                        rowCount: 2,
                                        minRowHeight: '24px',
                                        cellStyles: {
                                            borderLeft: '1px solid #000',
                                            borderRight: '1px solid #000',
                                            borderTop: 'none',
                                            borderBottom: '1px solid #000',
                                        },
                                        rows: [{}, {}],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                rowspan: 2,
                                            },
                                            {
                                                r: 0,
                                                c: 1,
                                                rowspan: 2,
                                                styles: {
                                                    cellAlign: 'left',
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 2,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 3,
                                                rowspan: 2,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                rowspan: 2,
                                                styles: {
                                                    cellAlign: 'left',
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                rowspan: 2,
                                                styles: {
                                                    cellAlign: 'left',
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 6,
                                                rowspan: 2,
                                                styles: {
                                                    cellAlign: 'left',
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 7,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 8,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M1") === "Y") return { backgroundColor: "skyblue" }; ',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 9,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M2") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 10,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M3") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 11,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M4") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 12,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M5") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 13,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M6") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 14,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M7") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 15,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M8") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 16,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M9") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 17,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M10") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 18,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M11") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 19,
                                                onGetStyles:
                                                    'if(ctx.getValue("education-detail", row, "M12") === "Y") return { backgroundColor: "skyblue" };',
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 20,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 7,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 8,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 9,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 10,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 11,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 12,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 13,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 14,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 15,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 16,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 17,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 18,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 19,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 20,
                                                styles: {
                                                    borderLeft: 'none',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                value: '${ino}',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Curiculum',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Department',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Time',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Target',
                                                name: '',
                                                col: 6,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 7,
                                                row: 0,
                                                text: '계획',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Comment',
                                                name: '',
                                                col: 20,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 7,
                                                row: 1,
                                                text: '실적',
                                            },
                                            {
                                                type: 'shape',
                                                value: 'Outside',
                                                width: '20px',
                                                height: '20px',
                                                name: '',
                                                onGetStyles:
                                                    'if(value === "O") return { display: "none"  };',
                                                col: 2,
                                                row: 0,
                                                shape: 'rectangle',
                                                styles: {
                                                    fill: '#000000',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'shape',
                                                value: 'Outside',
                                                width: '20px',
                                                height: '20px',
                                                name: '',
                                                onGetStyles:
                                                    'if(value === "I") return { display: "none"  };',
                                                col: 3,
                                                row: 0,
                                                shape: 'rectangle',
                                                styles: {
                                                    fill: '#000000',
                                                    __tag_: {},
                                                },
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                        groups: [],
                        header: {
                            type: 'stack',
                            width: '100%',
                            name: null,
                            items: [
                                {
                                    type: 'table',
                                    width: '100%',
                                    name: '',
                                    rowCount: 3,
                                    minRowHeight: '15px',
                                    cellStyles: {
                                        borderLeft: '1px solid #000',
                                        borderRight: '1px solid #000',
                                        borderTop: '1px solid #000',
                                        borderBottom: '1px solid #000',
                                    },
                                    rows: [
                                        {},
                                        {
                                            height: '40px',
                                        },
                                        {},
                                    ],
                                    cells: [
                                        {
                                            r: 0,
                                            c: 0,
                                            rowspan: 3,
                                            styles: {
                                                borderRight: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 1,
                                            rowspan: 3,
                                            styles: {
                                                cellAlign: 'center',
                                                borderTop: '',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 2,
                                            styles: {
                                                borderLeft: 'none',
                                                borderTop: '',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 3,
                                            styles: {
                                                borderLeft: 'none',
                                                borderTop: '',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 4,
                                            styles: {
                                                borderLeft: 'none',
                                                borderTop: '',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 2,
                                            styles: {
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 3,
                                            styles: {
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 4,
                                            styles: {
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 2,
                                            styles: {
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 3,
                                            styles: {
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 4,
                                            styles: {
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                    ],
                                    colCount: 5,
                                    columns: [
                                        {
                                            width: '35%',
                                        },
                                        {
                                            width: '1.2%',
                                        },
                                        {
                                            width: '4%',
                                        },
                                        {
                                            width: '4%',
                                        },
                                        {
                                            width: '4%',
                                        },
                                    ],
                                    items: [
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 0,
                                            text: '2007년도 교육/훈련 계획서',
                                            styles: {
                                                fontSize: '25px',
                                                fontWeight: 'bold',
                                                __tag_: {},
                                            },
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 1,
                                            row: 0,
                                            wrap: true,
                                            multiLine: true,
                                            lineGap: 20,
                                            text: '결<br>재',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 0,
                                            text: '작성',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 3,
                                            row: 0,
                                            text: '검토',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 4,
                                            row: 0,
                                            text: '승인',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 4,
                                            row: 2,
                                            text: '/',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 3,
                                            row: 2,
                                            text: '/',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 2,
                                            text: '/',
                                        },
                                    ],
                                },
                            ],
                        },
                        footer: {
                            type: 'stack',
                            width: '100%',
                            name: null,
                            visible: false,
                        },
                        dataRow: {
                            type: 'stack',
                            width: '100%',
                            name: null,
                            items: [
                                {
                                    type: 'cbox',
                                    width: '100%',
                                    height: 36,
                                    name: '',
                                    itemGap: 4,
                                    items: [
                                        {
                                            type: 'table',
                                            width: '100%',
                                            name: '',
                                            rowCount: 1,
                                            minRowHeight: '24px',
                                            cellStyles: {
                                                borderLeft: '1px solid #000',
                                                borderRight: '1px solid #000',
                                                borderTop: '1px solid #000',
                                                borderBottom: '1px solid #000',
                                            },
                                            rows: [{}],
                                            cells: [
                                                {
                                                    r: 0,
                                                    c: 1,
                                                    styles: {
                                                        borderLeft: 'none',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 2,
                                                    styles: {
                                                        borderLeft: 'none',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 3,
                                                    styles: {
                                                        borderLeft: 'none',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 4,
                                                    styles: {
                                                        borderLeft: 'none',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 5,
                                                    styles: {
                                                        borderLeft: 'none',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 6,
                                                    styles: {
                                                        borderLeft: 'none',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 7,
                                                    styles: {
                                                        cellAlign: 'center',
                                                        borderLeft: 'none',
                                                    },
                                                },
                                            ],
                                            colCount: 8,
                                            columns: [
                                                {
                                                    width: '8%',
                                                },
                                                {
                                                    width: '15%',
                                                },
                                                {
                                                    width: '8%',
                                                },
                                                {
                                                    width: '15%',
                                                },
                                                {
                                                    width: '8%',
                                                },
                                                {
                                                    width: '20%',
                                                },
                                                {
                                                    width: '8%',
                                                },
                                                {
                                                    width: '45%',
                                                },
                                            ],
                                            items: [
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 0,
                                                    row: 0,
                                                    text: '작성부서',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 2,
                                                    row: 0,
                                                    text: '작성자',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 4,
                                                    row: 0,
                                                    text: '작성일자',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 6,
                                                    row: 0,
                                                    text: '범례',
                                                },
                                                {
                                                    type: 'rbox',
                                                    width: 361,
                                                    height: 22,
                                                    name: '',
                                                    col: 7,
                                                    row: 0,
                                                    itemsAlign: 'middle',
                                                    itemGap: '20px',
                                                    items: [
                                                        {
                                                            type: 'rbox',
                                                            width: 59,
                                                            height: 22,
                                                            name: '',
                                                            itemGap: 0,
                                                            items: [
                                                                {
                                                                    type: 'text',
                                                                    name: '',
                                                                    text: '계획:',
                                                                    styles: {
                                                                        paddingRight:
                                                                            '10px',
                                                                        __tag_: {},
                                                                    },
                                                                },
                                                                {
                                                                    type: 'shape',
                                                                    width: 17,
                                                                    height: 17,
                                                                    name: '',
                                                                    shape: 'rectangle',
                                                                    styles: {
                                                                        backgroundColor:
                                                                            '#0d0000',
                                                                        fill: '#a3e3fffc',
                                                                        __tag_: {},
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                        {
                                                            type: 'rbox',
                                                            width: 59,
                                                            height: 22,
                                                            name: '',
                                                            itemGap: 0,
                                                            items: [
                                                                {
                                                                    type: 'text',
                                                                    name: '',
                                                                    text: '실적:',
                                                                    styles: {
                                                                        paddingRight:
                                                                            '10px',
                                                                        __tag_: {},
                                                                    },
                                                                },
                                                                {
                                                                    type: 'shape',
                                                                    width: 17,
                                                                    height: 17,
                                                                    name: '',
                                                                    shape: 'rectangle',
                                                                    styles: {
                                                                        backgroundColor:
                                                                            '#0d0000',
                                                                        fill: '#663a00fc',
                                                                        __tag_: {},
                                                                    },
                                                                },
                                                            ],
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'text',
                                                    value: 'Department',
                                                    name: '',
                                                    col: 1,
                                                    row: 0,
                                                    text: 'Text',
                                                },
                                                {
                                                    type: 'text',
                                                    value: 'Writer',
                                                    name: '',
                                                    col: 3,
                                                    row: 0,
                                                    text: 'Text',
                                                },
                                                {
                                                    type: 'text',
                                                    value: 'DateOfWriting',
                                                    name: '',
                                                    col: 5,
                                                    row: 0,
                                                    text: 'Text',
                                                },
                                            ],
                                        },
                                        {
                                            type: 'space',
                                            name: '',
                                            size: 10,
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
        },
        assets: {
            '/': [],
        },
        data: {
            'education-master': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'Department',
                        dataType: 'text',
                        format: '',
                        sample: '인사팀',
                        expression: '',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Writer',
                        dataType: 'text',
                        sample: '홍길동',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'DateOfWriting',
                        dataType: 'text',
                        sample: '2007/01/02',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
            'education-detail': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'Writer',
                        dataType: 'text',
                        sample: '홍길동',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'DateOfWriting',
                        dataType: 'text',
                        sample: '2007/01/02',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'No',
                        dataType: 'number',
                        sample: '1',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Curiculum',
                        dataType: 'text',
                        sample: '사내 품질교육',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Outside',
                        dataType: 'text',
                        sample: 'I',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Department',
                        dataType: 'text',
                        sample: '품질관리',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Time',
                        dataType: 'text',
                        sample: '1 hr /월',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Target',
                        dataType: 'text',
                        sample: '전사원',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Type',
                        dataType: 'text',
                        sample: '계획',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Comment',
                        dataType: 'text',
                        sample: '',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M1',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M2',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M3',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M4',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M5',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M6',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M7',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M8',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M9',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M10',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M11',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'M12',
                        dataType: 'text',
                        sample: 'Y',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
        },
        guid: 'b201d3a4-8d57-4dd4-9f4c-614aa5d07006',
    },
    dataSet: {
        'education-master': {
            type: 'band',
            values: [
                {
                    Department: '인사팀',
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                },
            ],
        },
        'education-detail': {
            type: 'band',
            values: [
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 1,
                    Curiculum: '사내 품질교육',
                    Outside: 'I',
                    Department: '품질관리',
                    Time: '1 hr/월',
                    Target: '전사원',
                    Type: '계획',
                    Comment: '',
                    M1: 'Y',
                    M2: 'Y',
                    M3: 'Y',
                    M4: 'Y',
                    M5: 'Y',
                    M6: 'Y',
                    M7: 'Y',
                    M8: 'Y',
                    M9: 'Y',
                    M10: 'Y',
                    M11: 'Y',
                    M12: 'Y',
                },
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 2,
                    Curiculum: '사내 소방안전 교육',
                    Outside: 'I',
                    Department: '관리팀',
                    Time: '2 hr/분기',
                    Target: '전사원',
                    Type: '계획',
                    Comment: '',
                    M1: 'N',
                    M2: 'N',
                    M3: 'Y',
                    M4: 'N',
                    M5: 'N',
                    M6: 'Y',
                    M7: 'N',
                    M8: 'N',
                    M9: 'Y',
                    M10: 'N',
                    M11: 'N',
                    M12: 'Y',
                },
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 3,
                    Curiculum: '신입사원 직무교육',
                    Outside: 'I',
                    Department: '해당부서',
                    Time: '5일',
                    Target: '신입사원',
                    Type: '계획',
                    Comment: '',
                    M1: 'Y',
                    M2: 'Y',
                    M3: 'Y',
                    M4: 'Y',
                    M5: 'Y',
                    M6: 'Y',
                    M7: 'Y',
                    M8: 'Y',
                    M9: 'Y',
                    M10: 'Y',
                    M11: 'Y',
                    M12: 'Y',
                },
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 4,
                    Curiculum: '통계적 품질 관리',
                    Outside: 'O',
                    Department: '품질관리',
                    Time: '3일',
                    Target: '1명',
                    Type: '계획',
                    Comment: '',
                    M1: 'N',
                    M2: 'N',
                    M3: 'N',
                    M4: 'N',
                    M5: 'N',
                    M6: 'N',
                    M7: 'N',
                    M8: 'Y',
                    M9: 'N',
                    M10: 'N',
                    M11: 'N',
                    M12: 'N',
                },
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 5,
                    Curiculum: 'TS 16949추진 실무자 과정',
                    Outside: 'O',
                    Department: '품질관리',
                    Time: '3일',
                    Target: '1명',
                    Type: '계획',
                    Comment: '',
                    M1: 'N',
                    M2: 'N',
                    M3: 'N',
                    M4: 'N',
                    M5: 'Y',
                    M6: 'N',
                    M7: 'N',
                    M8: 'N',
                    M9: 'N',
                    M10: 'N',
                    M11: 'N',
                    M12: 'N',
                },
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 6,
                    Curiculum: '내부 감시팀 과정',
                    Outside: 'O',
                    Department: '관리팀',
                    Time: '3일',
                    Target: '1명',
                    Type: '계획',
                    Comment: '',
                    M1: 'N',
                    M2: 'N',
                    M3: 'N',
                    M4: 'N',
                    M5: 'N',
                    M6: 'N',
                    M7: 'Y',
                    M8: 'N',
                    M9: 'N',
                    M10: 'N',
                    M11: 'N',
                    M12: 'N',
                },
                {
                    Writer: '홍길동',
                    DateOfWriting: '2007/01/02',
                    No: 7,
                    Curiculum: '중간 관리자 리더십 교육 과정',
                    Outside: 'O',
                    Department: '인사팀',
                    Time: '3일',
                    Target: '과장 진급자',
                    Type: '계획',
                    Comment: '',
                    M1: 'N',
                    M2: 'N',
                    M3: 'N',
                    M4: 'Y',
                    M5: 'N',
                    M6: 'N',
                    M7: 'N',
                    M8: 'N',
                    M9: 'N',
                    M10: 'N',
                    M11: 'N',
                    M12: 'N',
                },
            ],
        },
    },
};

var sampleReport205 = {
    form: {
        report: {
            name: 'reportRoot',
            paperSize: 'A4',
            paperWidth: '210mm',
            paperHeight: '297mm',
            marginLeft: '12mm',
            marginRight: '12mm',
            marginTop: '15mm',
            marginBottom: '15mm',
        },
        page: {
            name: 'reportPage',
            pageHeader: {
                name: 'pageHeader',
                items: [
                    {
                        type: 'rbox',
                        name: '',
                        right: 0,
                        itemGap: 4,
                        items: [
                            {
                                type: 'text',
                                name: '',
                                text: 'Date:',
                            },
                            {
                                type: 'text',
                                value: '${date}',
                                name: '',
                                dateFormat: 'yyyy/MM/dd',
                                text: 'Text',
                            },
                        ],
                    },
                ],
            },
            reportHeader: {
                name: 'reportHeader',
                height: 19,
                visible: false,
            },
            reportFooter: {
                name: 'reportFooter',
            },
            pageFooter: {
                name: 'pageFooter',
            },
            body: {
                itemGap: 0,
                items: [
                    {
                        type: 'simpleband',
                        data: 'master-detail-01',
                        width: '100%',
                        name: '',
                        rowsPerPage: 1,
                        detail: {
                            type: 'detail',
                            width: '100%',
                            name: '',
                            styles: {
                                paddingTop: 'px',
                                __tag_: {},
                            },
                            items: [
                                {
                                    type: 'tableband',
                                    data: 'master-detail-02',
                                    width: '100%',
                                    name: '',
                                    pageBreak: 'after',
                                    masterFields: 'OrderID',
                                    keyFields: 'OrderID',
                                    detail: {
                                        type: 'detail',
                                        width: '100%',
                                        name: '',
                                    },
                                    colCount: 6,
                                    columns: [
                                        {
                                            width: '10%',
                                        },
                                        {
                                            width: '20%',
                                        },
                                        {
                                            width: '15%',
                                        },
                                        {
                                            width: '10%',
                                        },
                                        {
                                            width: '10%',
                                        },
                                        {
                                            width: '20%',
                                        },
                                    ],
                                    header: {
                                        name: 'bandHeader',
                                        width: '100%',
                                        rowCount: 1,
                                        cellStyles: {
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: 'none',
                                            borderBottom: 'none',
                                        },
                                        rows: [{}],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                styles: {
                                                    backgroundColor: '#112d30',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 1,
                                                styles: {
                                                    backgroundColor:
                                                        '#112d30ff',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 2,
                                                styles: {
                                                    backgroundColor:
                                                        '#112d30ff',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 3,
                                                styles: {
                                                    backgroundColor:
                                                        '#112d30ff',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                styles: {
                                                    backgroundColor:
                                                        '#112d30ff',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                styles: {
                                                    backgroundColor:
                                                        '#112d30ff',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: 'No.',
                                                styles: {
                                                    fontWeight: 'bold',
                                                    color: '#ecfcfeff',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                text: 'Product',
                                                styles: {
                                                    fontWeight: 'bold',
                                                    color: '#ecfcfeff',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 2,
                                                row: 0,
                                                text: 'Unit price',
                                                styles: {
                                                    fontWeight: 'bold',
                                                    color: '#ecfcfeff',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 3,
                                                row: 0,
                                                text: 'Quantity',
                                                styles: {
                                                    fontWeight: 'bold',
                                                    color: '#ecfcfeff',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: 'Discount',
                                                styles: {
                                                    fontWeight: 'bold',
                                                    color: '#ecfcfeff',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                text: 'Extended price',
                                                styles: {
                                                    fontWeight: 'bold',
                                                    color: '#ecfcfeff',
                                                    __tag_: {},
                                                },
                                            },
                                        ],
                                    },
                                    footer: {
                                        name: 'bandFooter',
                                        width: '100%',
                                        rowCount: 1,
                                        cellStyles: {},
                                        rows: [{}],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                colspan: 6,
                                                styles: {
                                                    cellAlign: 'right',
                                                    paddingTop: '10px',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'table',
                                                width: '240px',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                rowCount: 3,
                                                minRowHeight: '35px',
                                                cellStyles: {
                                                    paddingBottom: '',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                                rows: [{}, {}, {}],
                                                cells: [
                                                    {
                                                        r: 0,
                                                        c: 0,
                                                        styles: {
                                                            cellAlign: 'right',
                                                            backgroundColor: '',
                                                            borderTop: 'solid',
                                                            borderBottom:
                                                                'solid',
                                                        },
                                                    },
                                                    {
                                                        r: 0,
                                                        c: 1,
                                                        styles: {
                                                            cellAlign: 'right',
                                                            borderTop: 'solid',
                                                            borderBottom:
                                                                'solid',
                                                        },
                                                    },
                                                    {
                                                        r: 1,
                                                        c: 0,
                                                        styles: {
                                                            cellAlign: 'right',
                                                            backgroundColor: '',
                                                            borderTop: '',
                                                            borderBottom: '',
                                                        },
                                                    },
                                                    {
                                                        r: 1,
                                                        c: 1,
                                                        styles: {
                                                            cellAlign: 'right',
                                                            borderTop: '',
                                                            borderBottom: '',
                                                        },
                                                    },
                                                    {
                                                        r: 2,
                                                        c: 0,
                                                        styles: {
                                                            cellAlign: 'right',
                                                            backgroundColor:
                                                                '#d7f5faff',
                                                        },
                                                    },
                                                    {
                                                        r: 2,
                                                        c: 1,
                                                        styles: {
                                                            cellAlign: 'right',
                                                            backgroundColor:
                                                                '#d7f5faff',
                                                        },
                                                    },
                                                ],
                                                colCount: 2,
                                                columns: [
                                                    {
                                                        width: '20%',
                                                    },
                                                    {
                                                        width: '20%',
                                                    },
                                                ],
                                                items: [
                                                    {
                                                        type: 'text',
                                                        name: '',
                                                        col: 0,
                                                        row: 0,
                                                        text: 'Total :',
                                                        styles: {
                                                            fontWeight: 'bold',
                                                            __tag_: {},
                                                        },
                                                    },
                                                    {
                                                        type: 'text',
                                                        name: '',
                                                        col: 0,
                                                        row: 1,
                                                        text: 'Freight :',
                                                        styles: {
                                                            fontWeight: 'bold',
                                                            __tag_: {},
                                                        },
                                                    },
                                                    {
                                                        type: 'text',
                                                        name: '',
                                                        col: 0,
                                                        row: 2,
                                                        text: 'Total Amount :',
                                                        styles: {
                                                            fontWeight: 'bold',
                                                            __tag_: {},
                                                        },
                                                    },
                                                    {
                                                        type: 'summary',
                                                        name: '',
                                                        col: 1,
                                                        row: 0,
                                                        prefix: '￦',
                                                        expression:
                                                            'sum(ExtendedPrice)',
                                                        styles: {
                                                            fontFamily: 'Arial',
                                                            __tag_: {},
                                                        },
                                                    },
                                                    {
                                                        type: 'summary',
                                                        name: '',
                                                        col: 1,
                                                        row: 1,
                                                        prefix: '￦',
                                                        expression:
                                                            'master:Freight',
                                                        styles: {
                                                            fontFamily: 'Arial',
                                                            __tag_: {},
                                                        },
                                                    },
                                                    {
                                                        type: 'summary',
                                                        name: '',
                                                        col: 1,
                                                        row: 2,
                                                        prefix: '￦',
                                                        expression:
                                                            'sum(ExtendedPrice) + master:Freight',
                                                        styles: {
                                                            fontFamily: 'Arial',
                                                            __tag_: {},
                                                        },
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                    dataRow: {
                                        name: 'bandRow',
                                        width: '100%',
                                        height: '25px',
                                        rowCount: 1,
                                        cellStyles: {
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: 'none',
                                        },
                                        rows: [{}],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                styles: {
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 1,
                                                styles: {
                                                    cellAlign: 'center',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 2,
                                                styles: {
                                                    cellAlign: 'center',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 3,
                                                styles: {
                                                    cellAlign: 'center',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                styles: {
                                                    cellAlign: 'center',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                styles: {
                                                    cellAlign: 'center',
                                                    borderLeft: 'none',
                                                    borderRight: 'none',
                                                    borderTop: 'none',
                                                    borderBottom: 'none',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                data: '',
                                                value: '${ino}',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                data: '',
                                                value: 'ProductName',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                text: 'Text',
                                                styles: {
                                                    fontFamily: 'Tahoma',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                data: '',
                                                value: 'UnitPrice',
                                                name: '',
                                                col: 2,
                                                row: 0,
                                                prefix: '￦',
                                                text: 'Text',
                                                styles: {
                                                    fontFamily: 'Arial',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                data: '',
                                                value: 'Quantity',
                                                name: '',
                                                col: 3,
                                                row: 0,
                                                text: 'Text',
                                                styles: {
                                                    fontFamily: 'Arial',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                data: '',
                                                value: 'Discount',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: 'Text',
                                                styles: {
                                                    fontFamily: 'Arial',
                                                    __tag_: {},
                                                },
                                            },
                                            {
                                                type: 'text',
                                                data: '',
                                                value: 'ExtendedPrice',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                prefix: '￦',
                                                text: 'Text',
                                                styles: {
                                                    fontFamily: 'Arial',
                                                    __tag_: {},
                                                },
                                            },
                                        ],
                                    },
                                    styles: {
                                        paddingTop: 'px',
                                        __tag_: {},
                                    },
                                },
                            ],
                        },
                        groups: [],
                        header: {
                            type: 'stack',
                            width: '100%',
                            height: 104,
                            name: '',
                            items: [
                                {
                                    type: 'text',
                                    width: '400px',
                                    text: 'Invoice & Packing List',
                                    styles: {
                                        fontSize: '30px',
                                        textDecoration: '',
                                        fontWeight: 'bold',
                                        paddingBottom: '5px',
                                        borderBottom: '2px solid',
                                        __tag_: {},
                                    },
                                },
                            ],
                        },
                        footer: {
                            type: 'stack',
                            name: 'bandPageFooter',
                            width: '100%',
                            visible: false,
                        },
                        dataRow: {
                            type: 'stack',
                            width: '100%',
                            name: '',
                            styles: {
                                paddingBottom: '10px',
                                __tag_: {},
                            },
                            items: [
                                {
                                    type: 'cbox',
                                    width: '100%',
                                    height: 218,
                                    name: '',
                                    itemGap: 0,
                                    items: [
                                        {
                                            type: 'stack',
                                            width: '100%',
                                            name: '',
                                            styles: {
                                                paddingBottom: '10px',
                                                __tag_: {},
                                            },
                                            items: [
                                                {
                                                    type: 'table',
                                                    width: 703,
                                                    name: '',
                                                    rowCount: 5,
                                                    cellStyles: {
                                                        borderLeft: 'none',
                                                        borderRight: 'none',
                                                        borderTop: 'none',
                                                        borderBottom:
                                                            '1px solid',
                                                    },
                                                    rows: [{}, {}, {}, {}, {}],
                                                    cells: [
                                                        {
                                                            r: 0,
                                                            c: 0,
                                                            styles: {
                                                                cellAlign:
                                                                    'right',
                                                                borderLeft: '',
                                                                borderRight: '',
                                                                borderTop:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 0,
                                                            c: 1,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                                borderLeft: '',
                                                                borderRight: '',
                                                                borderTop:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 0,
                                                            c: 2,
                                                            styles: {
                                                                borderLeft: '',
                                                                borderRight: '',
                                                                borderTop:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 0,
                                                            c: 3,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                                borderLeft: '',
                                                                borderRight: '',
                                                                borderTop:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 0,
                                                            c: 4,
                                                            styles: {
                                                                borderLeft: '',
                                                                borderRight: '',
                                                                borderTop:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 0,
                                                            c: 5,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                                borderLeft: '',
                                                                borderRight: '',
                                                                borderTop:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 1,
                                                            c: 0,
                                                            styles: {
                                                                cellAlign:
                                                                    'right',
                                                            },
                                                        },
                                                        {
                                                            r: 1,
                                                            c: 1,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 1,
                                                            c: 3,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 1,
                                                            c: 4,
                                                            styles: {
                                                                cellAlign:
                                                                    'right',
                                                                borderLeft:
                                                                    'none',
                                                                borderRight:
                                                                    'none',
                                                                borderTop:
                                                                    'none',
                                                            },
                                                        },
                                                        {
                                                            r: 1,
                                                            c: 5,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                                borderLeft:
                                                                    'none',
                                                                borderRight:
                                                                    'none',
                                                                borderTop:
                                                                    'none',
                                                            },
                                                        },
                                                        {
                                                            r: 2,
                                                            c: 1,
                                                            colspan: 3,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 2,
                                                            c: 5,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 3,
                                                            c: 0,
                                                            styles: {
                                                                cellAlign:
                                                                    'right',
                                                            },
                                                        },
                                                        {
                                                            r: 3,
                                                            c: 1,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 3,
                                                            c: 3,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 3,
                                                            c: 4,
                                                            styles: {
                                                                cellAlign:
                                                                    'right',
                                                            },
                                                        },
                                                        {
                                                            r: 3,
                                                            c: 5,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                            },
                                                        },
                                                        {
                                                            r: 4,
                                                            c: 0,
                                                            styles: {
                                                                borderBottom:
                                                                    '2px solid',
                                                            },
                                                        },
                                                        {
                                                            r: 4,
                                                            c: 1,
                                                            colspan: 5,
                                                            styles: {
                                                                cellAlign:
                                                                    'left',
                                                                borderBottom:
                                                                    '2px solid',
                                                            },
                                                        },
                                                    ],
                                                    colCount: 6,
                                                    columns: [
                                                        {
                                                            width: '12%',
                                                        },
                                                        {
                                                            width: '28%',
                                                        },
                                                        {
                                                            width: '10%',
                                                        },
                                                        {
                                                            width: '20%',
                                                        },
                                                        {
                                                            width: '10%',
                                                        },
                                                        {
                                                            width: '20%',
                                                        },
                                                    ],
                                                    items: [
                                                        {
                                                            type: 'text',
                                                            height: '40px',
                                                            name: '',
                                                            col: 0,
                                                            row: 0,
                                                            text: 'Invoice No.:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            height: '40px',
                                                            name: '',
                                                            col: 0,
                                                            row: 1,
                                                            text: 'Ship Name:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            height: '40px',
                                                            name: '',
                                                            col: 0,
                                                            row: 2,
                                                            wrap: true,
                                                            text: 'Ship Address:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            height: '40px',
                                                            name: '',
                                                            col: 0,
                                                            row: 3,
                                                            wrap: true,
                                                            text: 'Customer Company:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            height: '40px',
                                                            name: '',
                                                            col: 0,
                                                            row: 4,
                                                            wrap: true,
                                                            text: 'Customer Address:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'OrderID',
                                                            name: '',
                                                            col: 1,
                                                            row: 0,
                                                            numberFormat: '',
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'ShipName',
                                                            name: '',
                                                            col: 1,
                                                            row: 1,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'ShipAddress',
                                                            name: '',
                                                            col: 1,
                                                            row: 2,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'CompanyName',
                                                            name: '',
                                                            col: 1,
                                                            row: 3,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'FullAddr',
                                                            name: '',
                                                            col: 1,
                                                            row: 4,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            col: 2,
                                                            row: 0,
                                                            wrap: true,
                                                            text: 'Invoice Date:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            col: 2,
                                                            row: 1,
                                                            wrap: true,
                                                            text: 'Shipped Date:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            col: 2,
                                                            row: 3,
                                                            wrap: true,
                                                            text: 'Contact Name:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            height: '40px',
                                                            name: '',
                                                            col: 4,
                                                            row: 0,
                                                            wrap: true,
                                                            text: 'Required Date:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            col: 4,
                                                            row: 1,
                                                            wrap: true,
                                                            text: 'Frieight:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            col: 4,
                                                            row: 3,
                                                            text: 'Phone:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            col: 4,
                                                            row: 2,
                                                            wrap: true,
                                                            text: 'Shipper Company:',
                                                            styles: {
                                                                fontWeight:
                                                                    'bold',
                                                                textAlign:
                                                                    'right',
                                                                __tag_: {},
                                                            },
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'OrderDate',
                                                            name: '',
                                                            col: 3,
                                                            row: 0,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'RequiredDate',
                                                            name: '',
                                                            col: 5,
                                                            row: 0,
                                                            dateFormat:
                                                                'yyyy/MM/dd',
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'ShippedDate',
                                                            name: '',
                                                            col: 3,
                                                            row: 1,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'Freight',
                                                            name: '',
                                                            col: 5,
                                                            row: 1,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'ShipperCompany',
                                                            name: '',
                                                            col: 5,
                                                            row: 2,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'ContactName',
                                                            name: '',
                                                            col: 3,
                                                            row: 3,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: '',
                                                            value: 'Phone',
                                                            name: '',
                                                            col: 5,
                                                            row: 3,
                                                            text: 'Text',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
            styles: {
                fontFamily: 'Tahoma',
                __tag_: {},
            },
        },
        assets: {
            '/': [],
        },
        data: {
            'master-detail-01': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'OrderID',
                        dataType: 'number',
                        sample: '10248',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'OrderDate',
                        dataType: 'text',
                        sample: '1996-07-04',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'RequiredDate',
                        dataType: 'text',
                        sample: '1996-08-01',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShippedDate',
                        dataType: 'text',
                        sample: '1996-07-16',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipVia',
                        dataType: 'text',
                        sample: '3',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipName',
                        dataType: 'text',
                        sample: '해바라기 백화점 ㈜',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipAddress',
                        dataType: 'text',
                        sample: '도봉구 창 1동 218-16',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipCity',
                        dataType: 'text',
                        sample: '서울특별시',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipRegion',
                        dataType: 'text',
                        sample: '경기도',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipPostalCode',
                        dataType: 'text',
                        sample: '032-041',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipCountry',
                        dataType: 'text',
                        sample: '대한민국',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipFullAddr',
                        dataType: 'text',
                        sample: '서울특별시 도봉구 창 1동 218-16',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Freight',
                        dataType: 'number',
                        sample: '32000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'CustomerID',
                        dataType: 'text',
                        sample: 'VINET',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'CompanyName',
                        dataType: 'text',
                        sample: '해바라기 백화점 ㈜',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ContactName',
                        dataType: 'text',
                        sample: '채송아',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ContactTitle',
                        dataType: 'text',
                        sample: '경리 과장',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'PostalCode',
                        dataType: 'text',
                        sample: '032-041',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Phone',
                        dataType: 'text',
                        sample: '(02)222-2243',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Fax',
                        dataType: 'text',
                        sample: '(02)222-8243',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'FullAddr',
                        dataType: 'text',
                        sample: '서울특별시 도봉구 창 1동 218-16',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Country',
                        dataType: 'text',
                        sample: '대한민국',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ShipperCompany',
                        dataType: 'text',
                        sample: '국제 특송 ㈜',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'TotalPrice',
                        dataType: 'number',
                        sample: '1851000',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
            'master-detail-02': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'OrderID',
                        dataType: 'number',
                        sample: '10248',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ProductName',
                        dataType: 'text',
                        sample: '현진 커피 밀크',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'UnitPrice',
                        dataType: 'number',
                        sample: '14000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Quantity',
                        dataType: 'number',
                        sample: '12',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Discount',
                        dataType: 'number',
                        sample: '0',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ExtendedPrice',
                        dataType: 'number',
                        sample: '168000',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
        },
        guid: 'b9b0d546-5f25-40be-b947-ddbd0b13003c',
    },
    dataSet: {
        'master-detail-01': {
            type: 'band',
            values: [
                {
                    OrderID: 10248,
                    OrderDate: '1996-07-04',
                    RequiredDate: '1996-08-01',
                    ShippedDate: '1996-07-16',
                    ShipVia: 3,
                    ShipName: '해바라기 백화점 (주)',
                    ShipAddress: '도봉구 창 1동 218-16',
                    ShipCity: '서울특별시',
                    ShipRegion: '경기도',
                    ShipPostalCode: '032-041',
                    ShipCountry: '대한민국',
                    ShipFullAddr: '서울특별시 도봉구 창 1동 218-16',
                    Freight: 32000,
                    CustomerID: 'VINET',
                    CompanyName: '해바바라기 백화점 (주)',
                    ContactName: '채송아',
                    ContactTitle: '경리 과장',
                    PostalCode: '032-041',
                    Phone: '(02)222-2243',
                    Fax: '(02)222-8243',
                    FullAddr: '서울특별시 도봉구 창 1동 218-16',
                    Country: '대한민국',
                    ShipperCompany: '국제 특송 (주)',
                    TotalPrice: '443000',
                },
            ],
        },
        'master-detail-02': {
            type: 'band',
            values: [
                {
                    OrderID: 10248,
                    ProductName: '현진 커피 밀크',
                    UnitPrice: 14000,
                    Quantity: 12,
                    Discount: 0,
                    ExtendedPrice: 168000,
                },
                {
                    OrderID: 10248,
                    ProductName: '싱가폴 원산 옥수수',
                    UnitPrice: 10000,
                    Quantity: 10,
                    Discount: 0,
                    ExtendedPrice: 100000,
                },
                {
                    OrderID: 10248,
                    ProductName: '대관령 특제 버터',
                    UnitPrice: 35000,
                    Quantity: 5,
                    Discount: 0,
                    ExtendedPrice: 175000,
                },
            ],
        },
    },
};

var signReport = {
    form: {
        report: {
            name: 'reportRoot',
            type: 'report',
            paperSize: 'A4',
            paperWidth: '210mm',
            paperHeight: '297mm',
            marginLeft: '12mm',
            marginRight: '12mm',
            marginTop: '15mm',
            marginBottom: '15mm',
        },
        page: {
            name: 'reportPage',
            type: 'report',
            pageHeader: {
                name: 'pageHeader',
                styles: { borderBottom: '2px solid #000' },
                items: [
                    {
                        type: 'text',
                        name: '',
                        left: 0,
                        text: 'WT-0001',
                        styles: { fontWeight: 'bold', color: '#252525' },
                    },
                ],
            },
            reportHeader: { name: 'reportHeader', height: 0, visible: false },
            reportFooter: { name: 'reportFooter' },
            pageFooter: {
                name: 'pageFooter',
                items: [
                    {
                        type: 'rbox',
                        name: '',
                        right: 0,
                        itemGap: 4,
                        items: [
                            {
                                type: 'text',
                                value: '${page}',
                                name: '',
                                text: 'Text',
                            },
                            {
                                type: 'text',
                                name: '',
                                text: '/',
                                styles: {
                                    paddingLeft: '3px',
                                    paddingRight: '3px',
                                },
                            },
                            {
                                type: 'text',
                                value: '${pages}',
                                name: '',
                                text: 'Text',
                            },
                        ],
                    },
                ],
            },
            body: {
                itemGap: 4,
                items: [
                    {
                        type: 'simpleband',
                        data: 'estimate-master',
                        width: '100%',
                        name: '',
                        rowsPerPage: 1,
                        detail: {
                            type: 'detail',
                            width: '100%',
                            name: '',
                            items: [
                                {
                                    type: 'tableband',
                                    data: 'estimate-detail',
                                    width: '100%',
                                    name: '',
                                    masterFields: 'Customer, Company',
                                    keyFields: 'Customer, Company',
                                    rowsPerPage: 25,
                                    repeatDetailFooter: true,
                                    endRowCount: 25,
                                    detail: {
                                        type: 'detail',
                                        width: '100%',
                                        name: '',
                                        visible: false,
                                    },
                                    colCount: 8,
                                    columns: [
                                        { width: '5%' },
                                        { width: '20%' },
                                        { width: '10%' },
                                        { width: '10%' },
                                        { width: '10%' },
                                        { width: '10%' },
                                        { width: '18%' },
                                        { width: '10%' },
                                    ],
                                    header: {
                                        width: '100%',
                                        name: null,
                                        rowCount: 1,
                                        fixed: false,
                                        cellStyles: {},
                                        rows: [{ height: '30px' }],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderTop: '0',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 1,
                                                styles: { borderTop: '0' },
                                            },
                                            {
                                                r: 0,
                                                c: 2,
                                                styles: { borderTop: '0' },
                                            },
                                            {
                                                r: 0,
                                                c: 3,
                                                styles: { borderTop: '0' },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                styles: { borderTop: '0' },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                styles: { borderTop: '0' },
                                            },
                                            {
                                                r: 0,
                                                c: 6,
                                                styles: { borderTop: '0' },
                                            },
                                            {
                                                r: 0,
                                                c: 7,
                                                styles: {
                                                    borderRight:
                                                        '2px solid #000',
                                                    borderTop: '0',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: '번호',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                text: '품목',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 2,
                                                row: 0,
                                                text: '규격',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 3,
                                                row: 0,
                                                text: '단위',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                text: '단가',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: '수량',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 6,
                                                row: 0,
                                                text: '금액',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 7,
                                                row: 0,
                                                text: '비고',
                                            },
                                        ],
                                    },
                                    footer: {
                                        width: '100%',
                                        name: null,
                                        rowCount: 2,
                                        fixed: false,
                                        cellStyles: {},
                                        rows: [
                                            { height: '30px' },
                                            { height: '100px' },
                                        ],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                colspan: 4,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderRight: '0',
                                                    borderTop: '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderRight: '0',
                                                    borderTop: '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderRight: '0',
                                                    borderTop: '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 6,
                                                styles: {
                                                    cellAlign: 'right',
                                                    paddingRight: '3px',
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderRight: '0',
                                                    borderTop: '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 7,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderRight:
                                                        '2px solid #000',
                                                    borderTop: '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 0,
                                                colspan: 8,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderRight:
                                                        '2px solid #000',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: '합               계',
                                            },
                                            {
                                                type: 'cbox',
                                                width: '100%',
                                                height: 100,
                                                name: '',
                                                col: 0,
                                                row: 1,
                                                itemGap: 4,
                                                items: [
                                                    {
                                                        type: 'text',
                                                        name: '',
                                                        left: 0,
                                                        text: '※ 특기사항',
                                                        styles: {
                                                            fontWeight: 'bold',
                                                        },
                                                    },
                                                ],
                                            },
                                            {
                                                type: 'summary',
                                                width: '100%',
                                                name: '',
                                                col: 6,
                                                row: 0,
                                                expression: 'sum(Amount)',
                                                styles: { textAlign: 'right' },
                                            },
                                            {
                                                type: 'summary',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                numberFormat: '#,##0.0',
                                                expression: 'sum(Quantity)',
                                            },
                                            {
                                                type: 'summary',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                expression: 'sum(UnitPrice)',
                                            },
                                        ],
                                    },
                                    dataRow: {
                                        width: '100%',
                                        name: null,
                                        rowCount: 1,
                                        fixed: false,
                                        minRowHeight: '22px',
                                        cellStyles: {},
                                        rows: [{}],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 6,
                                                styles: {
                                                    cellAlign: 'right',
                                                    paddingRight: '3px',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 7,
                                                styles: {
                                                    borderRight:
                                                        '2px solid #000',
                                                },
                                            },
                                        ],
                                        items: [
                                            {
                                                type: 'text',
                                                value: '${ino}',
                                                name: '',
                                                col: 0,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Item',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Standard',
                                                name: '',
                                                col: 2,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Quantity',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Unit',
                                                name: '',
                                                col: 3,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Amount',
                                                name: '',
                                                col: 6,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'UnitPrice',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                text: 'Text',
                                            },
                                            {
                                                type: 'text',
                                                value: 'Comment',
                                                name: '',
                                                col: 7,
                                                row: 0,
                                                text: 'Text',
                                            },
                                        ],
                                    },
                                },
                            ],
                        },
                        groups: [],
                        header: {
                            type: 'stack',
                            width: '100%',
                            name: null,
                            styles: {
                                paddingTop: '20px',
                                paddingBottom: '15px',
                            },
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    text: '견    적    서',
                                    styles: {
                                        fontSize: '25px',
                                        fontWeight: 'bold',
                                        borderBottom: '2px solid #000',
                                    },
                                },
                                {
                                    type: 'table',
                                    width: '200px',
                                    name: '',
                                    right: '0px',
                                    bottom: '0px',
                                    rowCount: 2,
                                    fixed: false,
                                    minRowHeight: '24px',
                                    cellStyles: {
                                        borderLeft: '2px solid #000',
                                        borderRight: '2px solid #000',
                                        borderTop: '2px solid #000',
                                        borderBottom: '2px solid #000',
                                    },
                                    rows: [{}, { height: '60px' }],
                                    cells: [],
                                    colCount: 2,
                                    columns: [
                                        { width: '50%' },
                                        { width: '50%' },
                                    ],
                                    items: [
                                        {
                                            type: 'text',
                                            col: 0,
                                            row: 0,
                                            text: '담당자',
                                        },
                                        {
                                            type: 'text',
                                            col: 1,
                                            row: 0,
                                            text: '승인자',
                                        },
                                        {
                                            type: 'sign',
                                            width: '100%',
                                            height: '100%',
                                            col: 0,
                                            row: 1,
                                        },
                                        {
                                            type: 'sign',
                                            width: '100%',
                                            height: '100%',
                                            col: 1,
                                            row: 1,
                                        },
                                    ],
                                },
                            ],
                        },
                        footer: { type: 'stack', width: '100%', name: null },
                        dataRow: {
                            type: 'stack',
                            width: '100%',
                            name: null,
                            items: [
                                {
                                    type: 'table',
                                    width: '100%',
                                    name: '',
                                    rowCount: 4,
                                    fixed: false,
                                    minRowHeight: '30px',
                                    cellStyles: {},
                                    rows: [{}, {}, {}, {}],
                                    cells: [
                                        {
                                            r: 0,
                                            c: 0,
                                            styles: {
                                                borderLeft: '2px solid #000',
                                                borderTop: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 1,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                                borderTop: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 2,
                                            styles: {
                                                borderTop: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 3,
                                            colspan: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                                borderRight: '2px solid #000',
                                                borderTop: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 0,
                                            styles: {
                                                borderLeft: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 1,
                                            styles: { cellAlign: 'left' },
                                        },
                                        {
                                            r: 1,
                                            c: 3,
                                            colspan: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                                borderRight: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 0,
                                            styles: {
                                                borderLeft: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 1,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 3,
                                            colspan: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                                borderRight: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 0,
                                            styles: {
                                                borderLeft: '2px solid #000',
                                                borderBottom: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 1,
                                            styles: {
                                                cellAlign: 'right',
                                                paddingRight: '5px',
                                                borderBottom: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 2,
                                            styles: {
                                                borderBottom: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                                borderBottom: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 4,
                                            styles: {
                                                borderBottom: '2px solid #000',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 5,
                                            styles: {
                                                cellAlign: 'left',
                                                paddingLeft: '5px',
                                                borderRight: '2px solid #000',
                                                borderBottom: '2px solid #000',
                                            },
                                        },
                                    ],
                                    colCount: 6,
                                    columns: [
                                        { width: '15%' },
                                        { width: '45%' },
                                        { width: '15%' },
                                        { width: '15%' },
                                        { width: '15%' },
                                        { width: '15%' },
                                    ],
                                    items: [
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 0,
                                            text: '거래처명',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 1,
                                            text: '작성일자',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 2,
                                            text: '공 사 명',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 3,
                                            text: '합계금액',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 0,
                                            text: '회사명',
                                        },
                                        {
                                            type: 'text',
                                            height: 16,
                                            name: '',
                                            col: 2,
                                            row: 1,
                                            text: '대표자',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 2,
                                            text: '사업자 주소',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 3,
                                            text: 'TEL',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 4,
                                            row: 3,
                                            text: 'FAX',
                                        },
                                        {
                                            type: 'text',
                                            value: 'Customer',
                                            name: '',
                                            col: 1,
                                            row: 0,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'DevelopmentCorporation',
                                            name: '',
                                            col: 1,
                                            row: 2,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'Company',
                                            name: '',
                                            col: 3,
                                            row: 0,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'Pregident',
                                            name: '',
                                            col: 3,
                                            row: 1,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'Address',
                                            name: '',
                                            col: 3,
                                            row: 2,
                                            text: 'Text',
                                            styles: { fontSize: '12px' },
                                        },
                                        {
                                            type: 'text',
                                            value: 'Tel',
                                            name: '',
                                            col: 3,
                                            row: 3,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'Fax',
                                            name: '',
                                            col: 5,
                                            row: 3,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'SumAmount',
                                            name: '',
                                            col: 1,
                                            row: 3,
                                            suffix: '원',
                                            text: 'Text',
                                        },
                                    ],
                                },
                            ],
                        },
                    },
                ],
            },
            styles: { fontFamily: 'NanumGothic' },
        },
        assets: { '/': [] },
        data: {
            'estimate-detail': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'Customer',
                        dataType: 'text',
                        sample: '(주)파워엑셀연구소',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Company',
                        dataType: 'text',
                        sample: '(주)기업연구원',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Pregident',
                        dataType: 'text',
                        sample: '이응혈',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Item',
                        dataType: 'text',
                        sample: '파워엑셀',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Standard',
                        dataType: 'text',
                        sample: 'GX*10',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Unit',
                        dataType: 'text',
                        sample: 'EA',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Quantity',
                        dataType: 'number',
                        sample: '3',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'UnitPrice',
                        dataType: 'number',
                        sample: '50000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Amount',
                        dataType: 'number',
                        sample: '150000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Comment',
                        dataType: 'text',
                        sample: '',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
            'estimate-master': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'Customer',
                        dataType: 'text',
                        sample: '(주)파워엑셀연구소',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Company',
                        dataType: 'text',
                        sample: '(주)기업연구원',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Pregident',
                        dataType: 'text',
                        sample: '이응혈',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'DevelopmentCorporation',
                        dataType: 'text',
                        sample: '액셀개발공사',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Address',
                        dataType: 'text',
                        sample: '서울시 성동구 성수동 373-15 테크원 1201호',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Tel',
                        dataType: 'text',
                        sample: '02-468-1234',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Fax',
                        dataType: 'text',
                        sample: '02-468-1235',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'SumAmount',
                        dataType: 'number',
                        sample: '513000',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
            'order-detail': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'orderNo',
                        dataType: 'text',
                        sample: '21300-493002',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'item',
                        dataType: 'text',
                        sample: '파워엑셀',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'standard',
                        dataType: 'text',
                        sample: 'GX*10',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'unit',
                        dataType: 'text',
                        sample: 'EA',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'quantity',
                        dataType: 'number',
                        sample: '3',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'unitPrice',
                        dataType: 'number',
                        sample: '50000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'amount',
                        dataType: 'number',
                        sample: '150000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'tax',
                        dataType: 'number',
                        sample: '15000',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'remark',
                        dataType: 'text',
                        sample: '',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
            'order-master': {
                type: 'simple',
                fields: [
                    {
                        fieldName: 'orderNo',
                        source: '',
                        dataType: 'string',
                        sample: '21300-493002',
                    },
                    {
                        fieldName: 'orderDate',
                        source: '',
                        dataType: 'string',
                        sample: '2004-12-01',
                    },
                    {
                        fieldName: 'receiptName',
                        source: '',
                        dataType: 'string',
                        sample: '(주)파워엑셀연구소',
                    },
                    {
                        fieldName: 'receiptPhone',
                        source: '',
                        dataType: 'string',
                        sample: '(081)230-3009',
                    },
                    {
                        fieldName: 'receiptFax',
                        source: '',
                        dataType: 'string',
                        sample: '(081)230-3008',
                    },
                    {
                        fieldName: 'receiptContact',
                        source: '',
                        dataType: 'string',
                        sample: '김대한',
                    },
                    {
                        fieldName: 'senderName',
                        source: '',
                        dataType: 'string',
                        sample: '(주)기업연구소',
                    },
                    {
                        fieldName: 'senderPhone',
                        source: '',
                        dataType: 'string',
                        sample: '(081)489-2003',
                    },
                    {
                        fieldName: 'senderFax',
                        source: '',
                        dataType: 'string',
                        sample: '(081)489-2002',
                    },
                    {
                        fieldName: 'senderContact',
                        source: '',
                        dataType: 'string',
                        sample: '이대만',
                    },
                    {
                        fieldName: 'dueDate',
                        source: '',
                        dataType: 'string',
                        sample: '2004-12-10',
                    },
                    { fieldName: 'deliveryTerm', source: '', dataType: '' },
                    {
                        fieldName: 'paymentTerm',
                        source: '',
                        dataType: 'string',
                        sample: 'Cash(대금지불일 현금지급)',
                    },
                    { fieldName: 'insection', source: '', dataType: '' },
                    { fieldName: 'remark', source: '', dataType: '' },
                ],
                sample: {
                    orderNo: '21300-493002',
                    orderDate: '2004-12-01',
                    receiptName: '(주)파워엑셀연구소',
                    receiptPhone: '(081)230-3009',
                    receiptFax: '(081)230-3008',
                    receiptContact: '김대한',
                    senderName: '(주)기업연구소',
                    senderPhone: '(081)489-2003',
                    senderFax: '(081)489-2002',
                    senderContact: '이대만',
                    dueDate: '2004-12-10',
                    deliveryTerm: null,
                    paymentTerm: 'Cash(대금지불일 현금지급)',
                    insection: null,
                    remark: null,
                },
            },
        },
    },
    dataSet: {
        'estimate-detail': {
            type: 'band',
            values: [
                {
                    Customer: '(주)파워엑셀연구소',
                    Company: '(주)기업연구원',
                    Pregident: '이응혈',
                    Item: '파워엑셀',
                    Standard: 'GX*10',
                    Unit: 'EA',
                    Quantity: 3,
                    UnitPrice: 50000,
                    Amount: 150000,
                    Comment: '',
                },
                {
                    Customer: '(주)파워엑셀연구소',
                    Company: '(주)기업연구원',
                    Pregident: '이응혈',
                    Item: '오픈산전',
                    Standard: 'TX3',
                    Unit: '권',
                    Quantity: 5,
                    UnitPrice: 25000,
                    Amount: 125000,
                    Comment: '',
                },
                {
                    Customer: '(주)파워엑셀연구소',
                    Company: '(주)기업연구원',
                    Pregident: '이응혈',
                    Item: '클립아트',
                    Standard: 'LK23',
                    Unit: 'kg',
                    Quantity: 7,
                    UnitPrice: 34000,
                    Amount: 238000,
                    Comment: '',
                },
            ],
        },
        'estimate-master': {
            type: 'band',
            values: [
                {
                    Customer: '(주)파워엑셀연구소',
                    Company: '(주)기업연구원',
                    Pregident: '이응혈',
                    DevelopmentCorporation: '엑셀개발공사',
                    Address: '서울시 성동구 성수동 373-15 테크원 1201호',
                    Tel: '02-468-1234',
                    Fax: '02-468-1235',
                    SumAmount: 513000,
                },
            ],
        },
    },
};

var editableReport = {
    form: {
        report: {
            name: 'reportRoot',
            type: 'report',
            paperSize: 'A4',
            paperWidth: '210mm',
            paperHeight: '297mm',
            marginLeft: '12mm',
            marginRight: '12mm',
            marginTop: '15mm',
            marginBottom: '15mm',
            editing: { editable: true },
        },
        page: {
            name: 'reportPage',
            pageHeader: {
                name: 'pageHeader',
                items: [
                    {
                        type: 'text',
                        value: '${date}',
                        name: '',
                        right: 0,
                        dateFormat: 'yyyy/MM/dd',
                        text: '',
                    },
                ],
            },
            reportHeader: { name: 'reportHeader' },
            reportFooter: { name: 'reportFooter' },
            pageFooter: {
                name: 'pageFooter',
                items: [
                    {
                        type: 'text',
                        value: '${pages}',
                        width: 37,
                        name: '',
                        right: 0,
                        text: '',
                        styles: { textAlign: 'left' },
                    },
                    { type: 'text', name: '', right: '38px', text: '/' },
                    {
                        type: 'text',
                        value: '${page}',
                        name: '',
                        right: '45px',
                        text: 'Text',
                        styles: { textAlign: 'right' },
                    },
                ],
            },
            body: {
                itemGap: 4,
                items: [
                    {
                        type: 'simpleband',
                        data: 'mail-label',
                        width: '100%',
                        name: '',
                        sectionCount: 2,
                        sectionGap: 50,
                        rowsPerPage: 6,
                        detail: { type: 'details', width: '100%', name: '' },
                        groups: [],
                        header: {
                            type: 'stack',
                            name: 'bandHeader',
                            width: 350.4960629921259,
                        },
                        footer: {
                            type: 'stack',
                            name: 'bandPageFooter',
                            width: '100%',
                        },
                        dataRow: {
                            type: 'stack',
                            name: 'bandrow',
                            width: '100%',
                            onGetStyles: '',
                            styles: {
                                paddingRight: 'px',
                                paddingBottom: '30px',
                            },
                            styleCallback: null,
                            items: [
                                {
                                    type: 'stack',
                                    width: '100%',
                                    height: 105,
                                    name: '',
                                    styles: {
                                        paddingLeft: '10px',
                                        paddingTop: '10px',
                                        paddingRight: '10px',
                                        paddingBottom: '10px',
                                        border: '1px solid',
                                    },
                                    items: [
                                        {
                                            type: 'text',
                                            value: 'PostalCode',
                                            width: '100%',
                                            name: '',
                                            top: '0px',
                                            text: 'Text',
                                            editing: {
                                                editable: true,
                                                type: 'text',
                                            },
                                            styles: {
                                                fontSize: '15px',
                                                textAlign: 'left',
                                                paddingLeft: '16px',
                                            },
                                        },
                                        {
                                            type: 'text',
                                            value: 'Address',
                                            width: '100%',
                                            name: '',
                                            top: '30px',
                                            text: 'Text',
                                            editing: {
                                                editable: true,
                                                type: 'text',
                                            },
                                            styles: {
                                                fontSize: '15px',
                                                textAlign: 'right',
                                                paddingRight: '16px',
                                            },
                                        },
                                        {
                                            type: 'text',
                                            value: 'ContactName',
                                            width: '100%',
                                            name: '',
                                            bottom: '0px',
                                            text: 'Text',
                                            editing: {
                                                editable: true,
                                                type: 'text',
                                            },
                                            styles: {
                                                fontSize: '15px',
                                                fontWeight: 'bold',
                                                textAlign: 'right',
                                                paddingRight: '16px',
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        styles: { paddingRight: 'px', paddingBottom: '30px' },
                    },
                ],
            },
        },
        assets: { '/': [] },
        data: {
            'mail-label': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'PostalCode',
                        dataType: 'text',
                        sample: '742-170',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Address',
                        dataType: 'text',
                        sample: '가장동 78-3 상주시 대한민국',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ContactName',
                        dataType: 'text',
                        sample: '한석규',
                        dateReader: null,
                    },
                ],
            },
        },
    },
    dataSet: {
        'mail-label': {
            type: 'band',
            values: [
                {
                    PostalCode: '742-170',
                    Address: '가장동 78-3 상주시 대한민국',
                    ContactName: '한석규',
                },
                {
                    PostalCode: '137-060',
                    Address: '서초구 방배동 883-11 서울특별시 대한민국',
                    ContactName: '황영순',
                },
                {
                    PostalCode: '157-280',
                    Address: '강서구 내발산동 318 서울특별시 대한민국',
                    ContactName: '조자릉',
                },
                {
                    PostalCode: '402-110',
                    Address: '남구 연수동 208-16 인천광역시 대한민국',
                    ContactName: '구재석',
                },
                {
                    PostalCode: '302-160',
                    Address: '서구 도마동 110-6 대전광역시 대한민국',
                    ContactName: '최영희',
                },
                {
                    PostalCode: '120-121',
                    Address: '서대문구 남가좌 1동 121 서울특별시 대한민국',
                    ContactName: '손미선',
                },
                {
                    PostalCode: '150-043',
                    Address: '영등포구 당산동 3가 16 서울특별시 대한민국',
                    ContactName: '장선희',
                },
                {
                    PostalCode: '614-103',
                    Address: '부산진구 당감 3동 611-3 부산광역시 대한민국',
                    ContactName: '정영일',
                },
                {
                    PostalCode: '140-150',
                    Address: '용산구 갈월동 116-7 서율특별시 대한민국',
                    ContactName: '문익한',
                },
                {
                    PostalCode: '604-030',
                    Address: '사하구 신평동 701-29 부산광역시 대한민국',
                    ContactName: '문흥미',
                },
                {
                    PostalCode: '21-060',
                    Address: '구산동 17-111 김해시 대한민국',
                    ContactName: '이강주',
                },
                {
                    PostalCode: '135-280',
                    Address: '강남구 대치동 315--11 서울특별시 대한민국',
                    ContactName: '백광준',
                },
            ],
        },
    },
};
