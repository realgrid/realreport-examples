var multiSample317 = {
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
        pages: [
            {
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
                    itemGap: 4,
                    items: [
                        {
                            type: 'table',
                            width: '100%',
                            name: '',
                            rowCount: 3,
                            minRowHeight: '24px',
                            cellStyles: {
                                borderLeft: '1px solid #000',
                                borderRight: '1px solid #000',
                                borderTop: '1px solid #000',
                                borderBottom: '1px solid #000',
                            },
                            rows: [
                                {},
                                {
                                    height: '60px',
                                },
                                {},
                            ],
                            cells: [
                                {
                                    r: 0,
                                    c: 0,
                                    rowspan: 3,
                                },
                            ],
                            colCount: 4,
                            columns: [
                                {
                                    width: '70%',
                                },
                                {
                                    width: '10%',
                                },
                                {
                                    width: '10%',
                                },
                                {
                                    width: '10%',
                                },
                            ],
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 0,
                                    text: '출퇴근 관리 대장 (조근, 야근 구분)',
                                    styles: {
                                        fontSize: '20px',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 1,
                                    row: 0,
                                    text: '작성',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 3,
                                    row: 0,
                                    text: '결재',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 2,
                                    row: 0,
                                    text: '검토',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 1,
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
                                {
                                    type: 'text',
                                    name: '',
                                    col: 3,
                                    row: 2,
                                    text: '/',
                                },
                            ],
                        },
                        {
                            type: 'space',
                            name: '',
                            size: 10,
                        },
                        {
                            type: 'table',
                            data: 'time-report-head',
                            width: '100%',
                            name: '',
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
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 0,
                                    c: 2,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 0,
                                    c: 4,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 0,
                                    c: 5,
                                    colspan: 3,
                                },
                                {
                                    r: 0,
                                    c: 8,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 0,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 2,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 4,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 5,
                                    styles: {
                                        cellAlign: 'right',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 6,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 7,
                                    styles: {
                                        cellAlign: 'right',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 8,
                                    styles: {
                                        backgroundColor: '#b2e0ff',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 9,
                                    styles: {
                                        cellAlign: 'right',
                                    },
                                },
                            ],
                            colCount: 10,
                            columns: [
                                {
                                    width: '25%',
                                },
                                {
                                    width: '25%',
                                },
                                {
                                    width: '25%',
                                },
                                {
                                    width: '25%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
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
                                    text: '년도',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 1,
                                    text: '야근시간',
                                },
                                {
                                    type: 'text',
                                    value: 'NightTime',
                                    name: '',
                                    col: 1,
                                    row: 1,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    value: 'Year',
                                    name: '',
                                    col: 1,
                                    row: 0,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 2,
                                    row: 0,
                                    text: '월',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 2,
                                    row: 1,
                                    text: '조근시간',
                                },
                                {
                                    type: 'text',
                                    value: 'MorningTime',
                                    name: '',
                                    col: 3,
                                    row: 1,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    value: 'Month',
                                    name: '',
                                    col: 3,
                                    row: 0,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 4,
                                    row: 0,
                                    text: '부서명',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 4,
                                    row: 1,
                                    text: '월급',
                                },
                                {
                                    type: 'text',
                                    value: 'DailyWeight',
                                    name: '',
                                    col: 5,
                                    row: 1,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 6,
                                    row: 1,
                                    text: '야근시급',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 8,
                                    row: 1,
                                    text: '조근시급',
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 8,
                                    row: 0,
                                    text: '성명',
                                },
                                {
                                    type: 'text',
                                    value: 'NightWeight',
                                    name: '',
                                    col: 7,
                                    row: 1,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    value: 'Name',
                                    name: '',
                                    col: 9,
                                    row: 0,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    value: 'MorningWeight',
                                    name: '',
                                    col: 9,
                                    row: 1,
                                    text: 'Text',
                                },
                                {
                                    type: 'text',
                                    value: 'Department',
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
                        {
                            type: 'tableband',
                            data: 'time-report-list',
                            width: '100%',
                            name: '',
                            endRowCount: 40,
                            detail: {
                                type: 'detail',
                                width: '100%',
                                name: '',
                                visible: false,
                            },
                            colCount: 9,
                            columns: [
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                                {
                                    width: '20%',
                                },
                            ],
                            header: {
                                width: '100%',
                                name: null,
                                rowCount: 1,
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
                                        c: 0,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 1,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 2,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 3,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 4,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 5,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 6,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 7,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 8,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                        },
                                    },
                                ],
                                items: [
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        text: '일자',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 1,
                                        row: 0,
                                        text: '요일',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 2,
                                        row: 0,
                                        text: '출근시간',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 3,
                                        row: 0,
                                        text: '퇴근시간',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 4,
                                        row: 0,
                                        text: '근무시간',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 5,
                                        row: 0,
                                        text: '주간근무',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 6,
                                        row: 0,
                                        text: '야간근무',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 7,
                                        row: 0,
                                        text: '조간근무',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 8,
                                        row: 0,
                                        text: '기타',
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
                                rowCount: 1,
                                cellStyles: {
                                    borderLeft: '1px solid #000',
                                    borderRight: '1px solid #000',
                                    borderTop: '1px solid #000',
                                    borderBottom: '1px solid #000',
                                },
                                rows: [{}],
                                cells: [],
                                items: [
                                    {
                                        type: 'text',
                                        value: 'Day',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'Week',
                                        name: '',
                                        col: 1,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'ComeTime',
                                        name: '',
                                        col: 2,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'LeaveTime',
                                        name: '',
                                        col: 3,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'WorkTime',
                                        name: '',
                                        col: 4,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'WeekWorkTime',
                                        name: '',
                                        col: 5,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'NightOverTime',
                                        name: '',
                                        col: 6,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'MorningEarlyTime',
                                        name: '',
                                        col: 7,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'ETC',
                                        name: '',
                                        col: 8,
                                        row: 0,
                                        text: 'Text',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            {
                name: 'reportPage',
                orientation: 'landscape',
                pageHeader: {
                    name: 'pageHeader',
                    height: '60px',
                    items: [
                        {
                            type: 'text',
                            name: '',
                            text: '화장실 위생 점검표',
                            styles: {
                                fontSize: '30px',
                                fontWeight: 'bold',
                                __tag_: {},
                            },
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
                },
                body: {
                    itemGap: 4,
                    items: [
                        {
                            type: 'stack',
                            width: '100%',
                            height: 87,
                            name: '',
                            left: 0,
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    left: '0px',
                                    bottom: '0px',
                                    text: '점검일시 : ',
                                    styles: {
                                        fontWeight: 'bold',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    left: '100px',
                                    bottom: '0px',
                                    text: '년',
                                    styles: {
                                        fontWeight: 'bold',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    left: '150px',
                                    bottom: '0px',
                                    text: '월',
                                    styles: {
                                        fontWeight: 'bold',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    left: '190px',
                                    bottom: '0px',
                                    text: '주',
                                    styles: {
                                        fontWeight: 'bold',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    left: '220px',
                                    bottom: '0px',
                                    text: '점검자 : ',
                                    styles: {
                                        fontWeight: 'bold',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    left: '65px',
                                    bottom: '0px',
                                    text: '20',
                                    styles: {
                                        fontWeight: 'bold',
                                        __tag_: {},
                                    },
                                },
                                {
                                    type: 'table',
                                    width: 149,
                                    height: 65,
                                    name: '',
                                    right: '0px',
                                    top: '0px',
                                    rowCount: 2,
                                    minRowHeight: '24px',
                                    cellStyles: {
                                        borderLeft: '',
                                    },
                                    rows: [
                                        {
                                            height: '2%',
                                        },
                                        {
                                            height: '10%',
                                        },
                                    ],
                                    cells: [
                                        {
                                            r: 0,
                                            c: 0,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#b2e0ff',
                                                borderLeft: '2px solid black',
                                                borderTop: '2px solid black',
                                                borderBottom: '2px solid black',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 1,
                                            styles: {
                                                backgroundColor: '#b2e0ff',
                                                borderTop: '2px solid black',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 2,
                                            styles: {
                                                backgroundColor: '#b2e0ff',
                                                borderRight: '2px solid black',
                                                borderTop: '2px solid black',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 1,
                                            styles: {
                                                borderBottom: '2px solid black',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 2,
                                            styles: {
                                                borderRight: '2px solid black',
                                                borderBottom: '2px solid black',
                                            },
                                        },
                                    ],
                                    colCount: 3,
                                    columns: [
                                        {
                                            width: '10%',
                                        },
                                        {
                                            width: '23%',
                                        },
                                        {
                                            width: '25%',
                                        },
                                    ],
                                    items: [
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 0,
                                            wrap: true,
                                            text: '결재',
                                            styles: {
                                                fontWeight: 'bold',
                                                __tag_: {},
                                            },
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 1,
                                            row: 0,
                                            text: '담당',
                                            styles: {
                                                fontWeight: 'bold',
                                                __tag_: {},
                                            },
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 0,
                                            text: '시설장',
                                            styles: {
                                                fontWeight: 'bold',
                                                __tag_: {},
                                            },
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            type: 'tableband',
                            data: 'checkList',
                            width: '100%',
                            name: '',
                            detail: {
                                type: 'detail',
                                width: '100%',
                                name: '',
                                visible: false,
                            },
                            colCount: 26,
                            columns: [
                                {
                                    width: '70%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                                {
                                    width: '7%',
                                },
                            ],
                            header: {
                                width: '100%',
                                name: null,
                                rowCount: 2,
                                cellStyles: {},
                                rows: [{}, {}],
                                cells: [
                                    {
                                        r: 0,
                                        c: 0,
                                        rowspan: 2,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: '2px solid black',
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 1,
                                        colspan: 2,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 3,
                                        styles: {
                                            cellAlign: 'right',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 4,
                                        styles: {
                                            cellAlign: 'left',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 5,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 6,
                                        colspan: 2,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 8,
                                        styles: {
                                            cellAlign: 'right',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 9,
                                        styles: {
                                            cellAlign: 'left',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 10,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 11,
                                        colspan: 2,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 13,
                                        styles: {
                                            cellAlign: 'right',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 14,
                                        styles: {
                                            cellAlign: 'left',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 15,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 16,
                                        colspan: 2,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 18,
                                        styles: {
                                            cellAlign: 'right',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 19,
                                        styles: {
                                            cellAlign: 'left',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 20,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 21,
                                        colspan: 2,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 23,
                                        styles: {
                                            cellAlign: 'right',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 24,
                                        styles: {
                                            cellAlign: 'left',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: 'none',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 25,
                                        styles: {
                                            cellAlign: 'center',
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: 'none',
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 1,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 2,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 3,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 4,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 5,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderRight: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 6,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 7,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 8,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 9,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 10,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderRight: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 11,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 12,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 13,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 14,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 15,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderRight: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 16,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 17,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 18,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 19,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 20,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderRight: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 21,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 22,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 23,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 24,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 1,
                                        c: 25,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderRight: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                ],
                                items: [
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        text: '점검내용',
                                        styles: {
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            __tag_: {},
                                        },
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 1,
                                        row: 1,
                                        text: '월',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 2,
                                        row: 1,
                                        text: '화',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 3,
                                        row: 1,
                                        text: '수',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 4,
                                        row: 1,
                                        text: '목',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 5,
                                        row: 1,
                                        text: '금',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 11,
                                        row: 1,
                                        text: '월',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 16,
                                        row: 1,
                                        text: '월',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 21,
                                        row: 1,
                                        text: '월',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 12,
                                        row: 1,
                                        text: '화',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 17,
                                        row: 1,
                                        text: '화',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 22,
                                        row: 1,
                                        text: '화',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 6,
                                        row: 1,
                                        text: '월',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 7,
                                        row: 1,
                                        text: '화',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 8,
                                        row: 1,
                                        text: '수',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 13,
                                        row: 1,
                                        text: '수',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 18,
                                        row: 1,
                                        text: '수',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 23,
                                        row: 1,
                                        text: '수',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 9,
                                        row: 1,
                                        text: '목',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 14,
                                        row: 1,
                                        text: '목',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 19,
                                        row: 1,
                                        text: '목',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 24,
                                        row: 1,
                                        text: '목',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 10,
                                        row: 1,
                                        text: '금',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 15,
                                        row: 1,
                                        text: '금',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 20,
                                        row: 1,
                                        text: '금',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 25,
                                        row: 1,
                                        text: '금',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 1,
                                        row: 0,
                                        suffix: '',
                                        text: '1주 (',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 4,
                                        row: 0,
                                        text: '~',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 3,
                                        row: 0,
                                        text: '일',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 5,
                                        row: 0,
                                        text: '일)',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 6,
                                        row: 0,
                                        suffix: '',
                                        text: '2주 (',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 11,
                                        row: 0,
                                        suffix: '',
                                        text: '3주 (',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 16,
                                        row: 0,
                                        suffix: '',
                                        text: '4주 (',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 21,
                                        row: 0,
                                        suffix: '',
                                        text: '5주 (',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 8,
                                        row: 0,
                                        text: '일',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 13,
                                        row: 0,
                                        text: '일',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 18,
                                        row: 0,
                                        text: '일',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 23,
                                        row: 0,
                                        text: '일',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 9,
                                        row: 0,
                                        text: '~',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 14,
                                        row: 0,
                                        text: '~',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 19,
                                        row: 0,
                                        text: '~',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 24,
                                        row: 0,
                                        text: '~',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 10,
                                        row: 0,
                                        text: '일)',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 15,
                                        row: 0,
                                        text: '일)',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 20,
                                        row: 0,
                                        text: '일)',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 25,
                                        row: 0,
                                        text: '일)',
                                    },
                                ],
                            },
                            footer: {
                                width: '100%',
                                height: '50px',
                                name: null,
                                rowCount: 1,
                                cellStyles: {},
                                rows: [{}],
                                cells: [
                                    {
                                        r: 0,
                                        c: 0,
                                        styles: {
                                            backgroundColor: '#b2e0ff',
                                            borderLeft: '2px solid black',
                                            borderTop: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 1,
                                        colspan: 25,
                                        styles: {
                                            borderRight: '2px solid black',
                                            borderTop: '2px solid black',
                                            borderBottom: '2px solid black',
                                        },
                                    },
                                ],
                                items: [
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        text: '비고',
                                        styles: {
                                            fontSize: '15px',
                                            fontWeight: 'bold',
                                            __tag_: {},
                                        },
                                    },
                                ],
                            },
                            dataRow: {
                                width: '100%',
                                height: '25px',
                                name: null,
                                rowCount: 1,
                                cellStyles: {},
                                rows: [{}],
                                cells: [
                                    {
                                        r: 0,
                                        c: 0,
                                        styles: {
                                            cellAlign: 'left',
                                            borderLeft: '2px solid black',
                                            borderRight: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 5,
                                        styles: {
                                            borderRight: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 10,
                                        styles: {
                                            borderRight: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 15,
                                        styles: {
                                            borderRight: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 20,
                                        styles: {
                                            borderRight: '2px solid black',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 25,
                                        styles: {
                                            borderRight: '2px solid black',
                                        },
                                    },
                                ],
                                items: [
                                    {
                                        type: 'text',
                                        value: 'check',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        wrap: true,
                                        prefix: ' ',
                                        text: 'Text',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        ],
        assets: {
            '/': [],
        },
        data: {
            'time-report-list': {
                type: 'band',
                fields: [
                    {
                        fieldName: 'No',
                        dataType: 'number',
                        sample: '1',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Day',
                        dataType: 'text',
                        sample: '1일',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'Week',
                        dataType: 'text',
                        sample: '월요일',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ComeTime',
                        dataType: 'text',
                        sample: '9:00',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'LeaveTime',
                        dataType: 'text',
                        sample: '18:30',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'WorkTime',
                        dataType: 'text',
                        sample: '9:30',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'WeekWorkTime',
                        dataType: 'text',
                        sample: '7:30',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'NightOverTime',
                        dataType: 'text',
                        sample: '2:00',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'MorningEarlyTime',
                        dataType: 'text',
                        sample: '1:30',
                        description: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'ETC',
                        dataType: 'text',
                        sample: '',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
            'time-report-head': {
                type: 'simple',
                sample: {
                    Year: 2023,
                    Month: 4,
                    Department: '화장실 청소부 1팀',
                    Name: '홍길동',
                    NightTime: '18:00~24:00',
                    MorningTime: '00:00~09:00',
                    DailyWeight: 20000,
                    NightWeight: 9250,
                    MorningWeight: 9250,
                },
            },
            checkList: {
                type: 'band',
                fields: [
                    {
                        fieldName: 'check',
                        dataType: 'text',
                        sample: '세면대는 청결한가?',
                        description: '',
                        dateReader: null,
                    },
                ],
            },
        },
        guid: '23732c50-fa49-40a8-9478-cbca54e91736',
    },
    dataSet: {
        'time-report-head': {
            type: 'simple',
            values: {
                Year: 2023,
                Month: 4,
                Department: '화장실 청소부 1팀',
                Name: '홍길동',
                NightTime: '18:00~24:00',
                MorningTime: '00:00~09:00',
                DailyWeight: 20000,
                NightWeight: 9250,
                MorningWeight: 9250,
            },
        },
        'time-report-list': {
            type: 'band',
            values: [
                {
                    No: 1,
                    Day: '1일',
                    Week: '월요일',
                    ComeTime: '9:00',
                    LeaveTime: '18:30',
                    WorkTime: '9:30',
                    WeekWorkTime: '7:30',
                    NightOverTime: '2:00',
                    MorningEarlyTime: '0:00',
                    ETC: null,
                },
                {
                    No: 2,
                    Day: '2일',
                    Week: '화요일',
                    ComeTime: '9:00',
                    LeaveTime: '19:00',
                    WorkTime: '9:00',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '0:00',
                    ETC: null,
                },
                {
                    No: 3,
                    Day: '3일',
                    Week: '수요일',
                    ComeTime: '9:00',
                    LeaveTime: '19:00',
                    WorkTime: '9:00',
                    WeekWorkTime: '7:30',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '0:00',
                    ETC: null,
                },
                {
                    No: 4,
                    Day: '4일',
                    Week: '목요일',
                    ComeTime: '6:00',
                    LeaveTime: '19:00',
                    WorkTime: '12:00',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '3:00',
                    ETC: null,
                },
                {
                    No: 5,
                    Day: '5일',
                    Week: '금요일',
                    ComeTime: '6:00',
                    LeaveTime: '19:00',
                    WorkTime: '12:00',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '3:00',
                    ETC: null,
                },
                {
                    No: 6,
                    Day: '6일',
                    Week: '토요일',
                    ComeTime: '9:30',
                    LeaveTime: '18:30',
                    WorkTime: '8:00',
                    WeekWorkTime: '0:00',
                    NightOverTime: '8:00',
                    MorningEarlyTime: '0:00',
                    ETC: '주말근무',
                },
                {
                    No: 7,
                    Day: '7일',
                    Week: '일요일',
                    ComeTime: '10:00',
                    LeaveTime: '19:00',
                    WorkTime: '8:00',
                    WeekWorkTime: '0:00',
                    NightOverTime: '8:00',
                    MorningEarlyTime: '0:00',
                    ETC: '주말근무',
                },
                {
                    No: 8,
                    Day: '8일',
                    Week: '월요일',
                    ComeTime: '8:00',
                    LeaveTime: '18:30',
                    WorkTime: '9:30',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '0:30',
                    ETC: '',
                },
                {
                    No: 9,
                    Day: '9일',
                    Week: '화요일',
                    ComeTime: '8:00',
                    LeaveTime: '18:30',
                    WorkTime: '9:30',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '0:30',
                    ETC: '',
                },
                {
                    No: 10,
                    Day: '10일',
                    Week: '수요일',
                    ComeTime: '9:00',
                    LeaveTime: '18:30',
                    WorkTime: '8:30',
                    WeekWorkTime: '8:00',
                    NightOverTime: '0:30',
                    MorningEarlyTime: '0:00',
                    ETC: '',
                },
                {
                    No: 11,
                    Day: '11일',
                    Week: '목요일',
                    ComeTime: '6:00',
                    LeaveTime: '19:00',
                    WorkTime: '12:00',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '3:00',
                    ETC: null,
                },
                {
                    No: 12,
                    Day: '12일',
                    Week: '금요일',
                    ComeTime: '6:00',
                    LeaveTime: '19:00',
                    WorkTime: '12:00',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '3:00',
                    ETC: null,
                },
                {
                    No: 13,
                    Day: '13일',
                    Week: '토요일',
                    ComeTime: '9:30',
                    LeaveTime: '18:30',
                    WorkTime: '8:00',
                    WeekWorkTime: '0:00',
                    NightOverTime: '8:00',
                    MorningEarlyTime: '0:00',
                    ETC: '주말근무',
                },
                {
                    No: 14,
                    Day: '14일',
                    Week: '일요일',
                    ComeTime: '10:00',
                    LeaveTime: '19:00',
                    WorkTime: '8:00',
                    WeekWorkTime: '0:00',
                    NightOverTime: '8:00',
                    MorningEarlyTime: '0:00',
                    ETC: '주말근무',
                },
                {
                    No: 15,
                    Day: '15일',
                    Week: '월요일',
                    ComeTime: '8:00',
                    LeaveTime: '18:30',
                    WorkTime: '9:30',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '0:30',
                    ETC: '',
                },
                {
                    No: 16,
                    Day: '16일',
                    Week: '화요일',
                    ComeTime: '8:00',
                    LeaveTime: '18:30',
                    WorkTime: '9:30',
                    WeekWorkTime: '8:00',
                    NightOverTime: '1:00',
                    MorningEarlyTime: '0:30',
                    ETC: '',
                },
                {
                    No: 17,
                    Day: '17일',
                    Week: '수요일',
                    ComeTime: '9:00',
                    LeaveTime: '18:30',
                    WorkTime: '8:30',
                    WeekWorkTime: '8:00',
                    NightOverTime: '0:30',
                    MorningEarlyTime: '0:00',
                    ETC: '',
                },
            ],
        },
        checkList: {
            type: 'band',
            values: [
                {
                    check: '세면대는 청결한가?',
                },
                {
                    check: '유아 변기는 청결한가?',
                },
                {
                    check: '화장실 바닥은 청결한가?',
                },
                {
                    check: '거울은 청결한가?',
                },
                {
                    check: '휴지는 있는가?',
                },
                {
                    check: '화장실 청소는 했는가?',
                },
                {
                    check: '변기물은 잘 내려가는가?',
                },
                {
                    check: '화장실 조명은 적당한가?',
                },
                {
                    check: '세면대 물은 잘 내려가는가?',
                },
                {
                    check: '쓰레기통은 자주 비워주는가?',
                },
                {
                    check: '환기는 자주 시켜주는가?',
                },
                {
                    check: '청소 도구가 잘 정리되어 있는가?',
                },
                {
                    check: '문고리, 수도꼭지가 이상이 없는가?',
                },
                {
                    check: '바닥, 벽, 타일, 콘크리트 등 내수성 자재로 되어 있는가?',
                },
                {
                    check: '바닥에 물기는 없는가?',
                },
            ],
        },
    },
};

var multiSample318 = {
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
        pages: [
            {
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
                            text: '견적서',
                            styles: { fontWeight: 'bold', color: '#f60000' },
                        },
                    ],
                },
                reportHeader: {
                    name: 'reportHeader',
                    height: 0,
                    visible: false,
                },
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
                                type: 'details',
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
                                            type: 'details',
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
                                                        borderTop:
                                                            '2px solid #000',
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
                                                        borderTop:
                                                            '2px solid #000',
                                                        borderBottom:
                                                            '2px solid #000',
                                                        cellAlign: 'right',
                                                        paddingRight: '3px',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 5,
                                                    styles: {
                                                        cellAlign: 'right',
                                                        borderLeft:
                                                            '2px solid #000',
                                                        borderRight: '0',
                                                        borderTop:
                                                            '2px solid #000',
                                                        borderBottom:
                                                            '2px solid #000',
                                                        paddingRight: '3px',
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
                                                        borderTop:
                                                            '2px solid #000',
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
                                                        borderTop:
                                                            '2px solid #000',
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
                                                                fontWeight:
                                                                    'bold',
                                                            },
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'summary',
                                                    name: '',
                                                    col: 6,
                                                    row: 0,
                                                    expression: 'sum(Amount)',
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
                                                    expression:
                                                        'sum(UnitPrice)',
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
                                                    c: 4,
                                                    styles: {
                                                        cellAlign: 'right',
                                                        paddingRight: '3px',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 5,
                                                    styles: {
                                                        cellAlign: 'right',
                                                        paddingRight: '3px',
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
                                ],
                            },
                            footer: {
                                type: 'stack',
                                width: '100%',
                                name: null,
                            },
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
                                                    borderLeft:
                                                        '2px solid #000',
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
                                                    borderRight:
                                                        '2px solid #000',
                                                    borderTop: '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 0,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
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
                                                    borderRight:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 2,
                                                c: 0,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
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
                                                    borderRight:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 3,
                                                c: 0,
                                                styles: {
                                                    borderLeft:
                                                        '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 3,
                                                c: 1,
                                                styles: {
                                                    cellAlign: 'right',
                                                    paddingRight: '5px',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 3,
                                                c: 2,
                                                styles: {
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 3,
                                                c: 3,
                                                styles: {
                                                    cellAlign: 'left',
                                                    paddingLeft: '5px',
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 3,
                                                c: 4,
                                                styles: {
                                                    borderBottom:
                                                        '2px solid #000',
                                                },
                                            },
                                            {
                                                r: 3,
                                                c: 5,
                                                styles: {
                                                    cellAlign: 'left',
                                                    paddingLeft: '5px',
                                                    borderRight:
                                                        '2px solid #000',
                                                    borderBottom:
                                                        '2px solid #000',
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
            },
            {
                name: 'reportPage',
                type: 'report',
                pageHeader: {
                    name: 'pageHeader',
                    items: [
                        {
                            type: 'cbox',
                            width: '100%',
                            name: '',
                            itemGap: '0px',
                            styles: { border: '1px solid #000' },
                            items: [
                                {
                                    type: 'stack',
                                    width: '100%',
                                    height: '150px',
                                    name: '',
                                    styles: { paddingTop: '20px' },
                                    items: [
                                        {
                                            type: 'text',
                                            top: '0px',
                                            text: '발 주 서',
                                            styles: {
                                                fontSize: '30px',
                                                fontWeight: 'bold',
                                            },
                                        },
                                        {
                                            type: 'rbox',
                                            name: '',
                                            left: 0,
                                            bottom: '0px',
                                            itemGap: 0,
                                            items: [
                                                {
                                                    type: 'cbox',
                                                    name: '',
                                                    itemGap: 0,
                                                    items: [
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            text: '발주번호 : ',
                                                        },
                                                        {
                                                            type: 'text',
                                                            name: '',
                                                            text: '발주일자 : ',
                                                        },
                                                    ],
                                                },
                                                {
                                                    type: 'cbox',
                                                    name: '',
                                                    itemGap: 0,
                                                    items: [
                                                        {
                                                            type: 'text',
                                                            data: 'order-master',
                                                            value: 'orderNo',
                                                            name: '',
                                                            left: 0,
                                                            text: 'Text',
                                                        },
                                                        {
                                                            type: 'text',
                                                            data: 'order-master',
                                                            value: 'orderDate',
                                                            name: '',
                                                            left: 0,
                                                            text: 'Text',
                                                        },
                                                    ],
                                                },
                                            ],
                                        },
                                        {
                                            type: 'table',
                                            width: 318,
                                            name: '',
                                            right: '7px',
                                            bottom: '0px',
                                            rowCount: 2,
                                            fixed: false,
                                            minRowHeight: '18px',
                                            cellStyles: {
                                                borderLeft: 'solid 1px #000',
                                                borderRight: 'solid 1px #000',
                                                borderTop: 'solid 1px #000',
                                                borderBottom: 'solid 1px #000',
                                            },
                                            rows: [{}, { height: '50px' }],
                                            cells: [
                                                {
                                                    r: 0,
                                                    c: 0,
                                                    rowspan: 2,
                                                    styles: {
                                                        backgroundColor:
                                                            '#e8e8e8ff',
                                                        borderBottom: '0',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 1,
                                                    styles: {
                                                        backgroundColor:
                                                            '#e8e8e8ff',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 2,
                                                    styles: {
                                                        backgroundColor:
                                                            '#e8e8e8ff',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 3,
                                                    styles: {
                                                        backgroundColor:
                                                            '#e8e8e8ff',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 4,
                                                    styles: {
                                                        backgroundColor:
                                                            '#e8e8e8ff',
                                                    },
                                                },
                                                {
                                                    r: 0,
                                                    c: 5,
                                                    styles: {
                                                        backgroundColor:
                                                            '#e8e8e8ff',
                                                    },
                                                },
                                                {
                                                    r: 1,
                                                    c: 1,
                                                    styles: {
                                                        borderBottom: '0',
                                                    },
                                                },
                                                {
                                                    r: 1,
                                                    c: 2,
                                                    styles: {
                                                        borderBottom: '0',
                                                    },
                                                },
                                                {
                                                    r: 1,
                                                    c: 3,
                                                    styles: {
                                                        borderBottom: '0',
                                                    },
                                                },
                                                {
                                                    r: 1,
                                                    c: 4,
                                                    styles: {
                                                        borderBottom: '0',
                                                    },
                                                },
                                                {
                                                    r: 1,
                                                    c: 5,
                                                    styles: {
                                                        borderBottom: '0',
                                                    },
                                                },
                                            ],
                                            colCount: 6,
                                            columns: [
                                                { width: '10%' },
                                                { width: '25%' },
                                                { width: '25%' },
                                                { width: '25%' },
                                                { width: '25%' },
                                                { width: '25%' },
                                            ],
                                            items: [
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 0,
                                                    row: 0,
                                                    multiLine: true,
                                                    text: '결<br>재',
                                                    styles: {
                                                        verticalAlign: 'middle',
                                                    },
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 1,
                                                    row: 0,
                                                    text: '담당',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 2,
                                                    row: 0,
                                                    text: '과장',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 3,
                                                    row: 0,
                                                    text: '부장',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 4,
                                                    row: 0,
                                                    text: '이사',
                                                },
                                                {
                                                    type: 'text',
                                                    name: '',
                                                    col: 5,
                                                    row: 0,
                                                    text: '사장',
                                                },
                                            ],
                                        },
                                    ],
                                },
                                {
                                    type: 'table',
                                    data: 'order-master',
                                    width: '100%',
                                    name: '',
                                    rowCount: 10,
                                    fixed: false,
                                    minRowHeight: '24px',
                                    cellStyles: {
                                        paddingLeft: '3px',
                                        borderLeft: 'solid 1px #313131ff',
                                        borderRight: 'solid 1px #313131ff',
                                        borderTop: 'solid 1px #313131ff',
                                        borderBottom: 'solid 1px #313131ff',
                                    },
                                    rows: [
                                        {},
                                        {},
                                        {},
                                        {},
                                        {},
                                        {},
                                        {},
                                        {},
                                        {},
                                        {},
                                    ],
                                    cells: [
                                        {
                                            r: 0,
                                            c: 0,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
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
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 4,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: '1px solid #000',
                                            },
                                        },
                                        {
                                            r: 0,
                                            c: 5,
                                            rowspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 1,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 0,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 1,
                                            rowspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 4,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: '1px solid #000',
                                            },
                                        },
                                        {
                                            r: 2,
                                            c: 5,
                                            rowspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 3,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 4,
                                            c: 0,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 4,
                                            c: 1,
                                            rowspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 4,
                                            c: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 4,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 4,
                                            c: 4,
                                            rowspan: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: '1px solid #000',
                                            },
                                        },
                                        {
                                            r: 4,
                                            c: 5,
                                            rowspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            },
                                        },
                                        {
                                            r: 5,
                                            c: 2,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 5,
                                            c: 3,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 6,
                                            c: 0,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 6,
                                            c: 1,
                                            colspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 6,
                                            c: 3,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 6,
                                            c: 4,
                                            colspan: 2,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            },
                                        },
                                        {
                                            r: 7,
                                            c: 0,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 7,
                                            c: 1,
                                            colspan: 5,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            },
                                        },
                                        {
                                            r: 8,
                                            c: 0,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                            },
                                        },
                                        {
                                            r: 8,
                                            c: 1,
                                            colspan: 5,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                            },
                                        },
                                        {
                                            r: 9,
                                            c: 0,
                                            styles: {
                                                backgroundColor: '#e8e8e8ff',
                                                borderLeft: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                        {
                                            r: 9,
                                            c: 1,
                                            colspan: 5,
                                            styles: {
                                                cellAlign: 'left',
                                                borderLeft: 'none',
                                                borderRight: 'none',
                                                borderBottom: 'none',
                                            },
                                        },
                                    ],
                                    colCount: 6,
                                    columns: [
                                        { width: '15%' },
                                        { width: '30%' },
                                        { width: '7%' },
                                        { width: '15%' },
                                        { width: '10%' },
                                        { width: '20%' },
                                    ],
                                    items: [
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 0,
                                            text: '수 신 처',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 2,
                                            text: '발 신 처',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 4,
                                            text: '납품현황',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 6,
                                            text: '납 기 일',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 7,
                                            text: '대금결제조건',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 8,
                                            text: '검 수 방 법',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 0,
                                            row: 9,
                                            text: '특 기 사 항',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 0,
                                            text: 'TEL',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 1,
                                            text: 'FAX',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 2,
                                            text: 'TEL',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 3,
                                            text: 'FAX',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 4,
                                            text: 'TEL',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 2,
                                            row: 5,
                                            text: 'FAX',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 3,
                                            row: 6,
                                            text: '인도조건',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 4,
                                            row: 0,
                                            text: '담 당',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 4,
                                            row: 2,
                                            text: '담 당',
                                        },
                                        {
                                            type: 'text',
                                            name: '',
                                            col: 4,
                                            row: 4,
                                            text: '현장담당',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptName',
                                            name: '',
                                            col: 1,
                                            row: 0,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'senderName',
                                            name: '',
                                            col: 1,
                                            row: 2,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptName',
                                            name: '',
                                            col: 1,
                                            row: 4,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'dueDate',
                                            name: '',
                                            col: 1,
                                            row: 6,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'paymentTerm',
                                            name: '',
                                            col: 1,
                                            row: 7,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'insection',
                                            name: '',
                                            col: 1,
                                            row: 8,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'remark',
                                            name: '',
                                            col: 1,
                                            row: 9,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'deliveryTerm',
                                            name: '',
                                            col: 4,
                                            row: 6,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptFax',
                                            name: '',
                                            col: 3,
                                            row: 5,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptPhone',
                                            name: '',
                                            col: 3,
                                            row: 4,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'senderFax',
                                            name: '',
                                            col: 3,
                                            row: 3,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'senderPhone',
                                            name: '',
                                            col: 3,
                                            row: 2,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptFax',
                                            name: '',
                                            col: 3,
                                            row: 1,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptPhone',
                                            name: '',
                                            col: 3,
                                            row: 0,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptContact',
                                            name: '',
                                            col: 5,
                                            row: 0,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'senderContact',
                                            name: '',
                                            col: 5,
                                            row: 2,
                                            text: 'Text',
                                        },
                                        {
                                            type: 'text',
                                            value: 'receiptContact',
                                            name: '',
                                            col: 5,
                                            row: 4,
                                            text: 'Text',
                                        },
                                    ],
                                },
                            ],
                        },
                    ],
                },
                reportHeader: { name: 'reportHeader' },
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
                            type: 'tableband',
                            data: 'order-detail',
                            width: '100%',
                            name: '',
                            rowsPerPage: 13,
                            endRowCount: 13,
                            detail: {
                                type: 'details',
                                width: '100%',
                                name: '',
                            },
                            colCount: 7,
                            columns: [
                                { width: '25%' },
                                { width: '10%' },
                                { width: '10%' },
                                { width: '10%' },
                                { width: '12%' },
                                { width: '15%' },
                                { width: '10%' },
                            ],
                            header: {
                                width: '100%',
                                name: null,
                                rowCount: 1,
                                fixed: false,
                                minRowHeight: '24px',
                                cellStyles: {
                                    borderLeft: 'solid 1px #313131ff',
                                    borderRight: 'solid 1px #313131ff',
                                    borderTop: 'solid 1px #313131ff',
                                    borderBottom: 'solid 1px #313131ff',
                                },
                                rows: [
                                    {
                                        styles: {
                                            backgroundColor: '#e8e8e8ff',
                                        },
                                    },
                                ],
                                cells: [],
                                items: [
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        text: '품명',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 1,
                                        row: 0,
                                        text: '규격',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 2,
                                        row: 0,
                                        text: '단위',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 3,
                                        row: 0,
                                        text: '수량',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 4,
                                        row: 0,
                                        text: '단가',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 5,
                                        row: 0,
                                        text: '금액',
                                    },
                                    {
                                        type: 'text',
                                        name: '',
                                        col: 6,
                                        row: 0,
                                        text: '비고',
                                    },
                                ],
                            },
                            footer: {
                                width: '100%',
                                name: null,
                                rowCount: 1,
                                fixed: false,
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
                                        c: 0,
                                        colspan: 7,
                                        styles: { cellAlign: 'left' },
                                    },
                                ],
                                items: [
                                    {
                                        type: 'table',
                                        data: 'detail',
                                        width: '100%',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        rowCount: 3,
                                        fixed: false,
                                        minRowHeight: '24px',
                                        cellStyles: {
                                            borderLeft: '',
                                            borderRight: '',
                                            borderTop: '',
                                            borderBottom: '',
                                        },
                                        rows: [
                                            { height: '40px' },
                                            { height: '40px' },
                                            {},
                                        ],
                                        cells: [
                                            {
                                                r: 0,
                                                c: 0,
                                                styles: {
                                                    borderLeft: '0',
                                                    borderRight:
                                                        '1px solid #000',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '1px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 1,
                                                styles: {
                                                    borderLeft:
                                                        '1px solid #000',
                                                    borderRight:
                                                        '1px solid #000',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '1px solid #000',
                                                    cellAlign: 'right',
                                                    paddingRight: '3px',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 2,
                                                styles: {
                                                    borderLeft:
                                                        '1px solid #000',
                                                    borderRight:
                                                        '1px solid #000',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '1px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 3,
                                                styles: {
                                                    borderLeft:
                                                        '1px solid #000',
                                                    borderRight:
                                                        '1px solid #000',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '1px solid #000',
                                                    cellAlign: 'right',
                                                    paddingRight: '3px',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 4,
                                                styles: {
                                                    borderLeft:
                                                        '1px solid #000',
                                                    borderRight:
                                                        '1px solid #000',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '1px solid #000',
                                                },
                                            },
                                            {
                                                r: 0,
                                                c: 5,
                                                styles: {
                                                    borderLeft:
                                                        '1px solid #000',
                                                    borderRight: '0',
                                                    borderTop: '0',
                                                    borderBottom:
                                                        '1px solid #000',
                                                    cellAlign: 'right',
                                                    paddingRight: '3px',
                                                },
                                            },
                                            {
                                                r: 1,
                                                c: 0,
                                                colspan: 6,
                                                styles: {
                                                    borderLeft: '0',
                                                    borderRight: '0',
                                                    borderTop: '1px solid #000',
                                                    borderBottom:
                                                        '1px solid #000',
                                                },
                                            },
                                            {
                                                r: 2,
                                                c: 0,
                                                colspan: 6,
                                                styles: {
                                                    cellAlign: 'left',
                                                    borderLeft: '0',
                                                    borderRight: '0',
                                                    borderTop: '1px solid #000',
                                                    borderBottom: '0',
                                                },
                                            },
                                        ],
                                        colCount: 6,
                                        columns: [
                                            { width: '15%' },
                                            { width: '15%' },
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
                                                text: '공급가액',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 2,
                                                row: 0,
                                                text: '부가세액',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 4,
                                                row: 0,
                                                text: '합계금액',
                                            },
                                            {
                                                type: 'text',
                                                name: '',
                                                col: 0,
                                                row: 1,
                                                text: '상기 자재를 발주하오니 납기를 준수하여 입고 바랍니다.',
                                            },
                                            {
                                                type: 'summary',
                                                name: '',
                                                col: 1,
                                                row: 0,
                                                expression: 'sum(amount)',
                                            },
                                            {
                                                type: 'summary',
                                                name: '',
                                                col: 3,
                                                row: 0,
                                                expression: 'sum(tax)',
                                            },
                                            {
                                                type: 'summary',
                                                name: '',
                                                col: 5,
                                                row: 0,
                                                expression:
                                                    'sum(amount)+sum(tax)',
                                                styles: { fontWeight: 'bold' },
                                            },
                                            {
                                                type: 'stack',
                                                width: '100%',
                                                height: 100,
                                                name: '',
                                                col: 0,
                                                row: 2,
                                                items: [
                                                    {
                                                        type: 'text',
                                                        name: '',
                                                        left: 4,
                                                        top: 5,
                                                        text: '* 붙임서류 :',
                                                    },
                                                ],
                                            },
                                        ],
                                    },
                                ],
                            },
                            dataRow: {
                                width: '100%',
                                name: null,
                                rowCount: 1,
                                fixed: false,
                                minRowHeight: '24px',
                                cellStyles: {
                                    paddingLeft: '2px',
                                    paddingRight: '2px',
                                    borderLeft: 'solid 1px #313131ff',
                                    borderRight: 'solid 1px #313131ff',
                                    borderTop: 'solid 1px #313131ff',
                                    borderBottom: 'solid 1px #313131ff',
                                },
                                rows: [{}],
                                cells: [
                                    {
                                        r: 0,
                                        c: 0,
                                        styles: { cellAlign: 'left' },
                                    },
                                    {
                                        r: 0,
                                        c: 3,
                                        styles: {
                                            cellAlign: 'right',
                                            paddingRight: '3px',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 4,
                                        styles: {
                                            cellAlign: 'right',
                                            paddingRight: '3px',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 5,
                                        styles: {
                                            cellAlign: 'right',
                                            paddingRight: '3px',
                                        },
                                    },
                                    {
                                        r: 0,
                                        c: 6,
                                        styles: { cellAlign: 'left' },
                                    },
                                ],
                                items: [
                                    {
                                        type: 'text',
                                        value: 'item',
                                        name: '',
                                        col: 0,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'standard',
                                        name: '',
                                        col: 1,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'unit',
                                        name: '',
                                        col: 2,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'quantity',
                                        name: '',
                                        col: 3,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'unitPrice',
                                        name: '',
                                        col: 4,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'amount',
                                        name: '',
                                        col: 5,
                                        row: 0,
                                        text: 'Text',
                                    },
                                    {
                                        type: 'text',
                                        value: 'remark',
                                        name: '',
                                        col: 6,
                                        row: 0,
                                        text: 'Text',
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        ],
        assets: {
            '/': [],
        },
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
        guid: '14355c1e-9c98-4286-8c10-6ee247fe5d85',
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
        'order-master': {
            type: 'simple',
            values: {
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
        'order-detail': {
            type: 'band',
            values: [
                {
                    orderNo: '21300-493002',
                    item: '파워엑셀',
                    standard: 'GX*10',
                    unit: 'EA',
                    quantity: 3,
                    unitPrice: 50000,
                    amount: 150000,
                    tax: 15000,
                    remark: null,
                },
                {
                    orderNo: '21300-493002',
                    item: '오픈신전',
                    standard: 'TX3',
                    unit: '권',
                    quantity: 5,
                    unitPrice: 25000,
                    amount: 125000,
                    tax: 12500,
                    remark: null,
                },
                {
                    orderNo: '21300-493002',
                    item: '클립아트',
                    standard: 'LK23',
                    unit: 'kg',
                    quantity: 7,
                    unitPrice: 34000,
                    amount: 238000,
                    tax: 23800,
                    remark: null,
                },
            ],
        },
    },
};
