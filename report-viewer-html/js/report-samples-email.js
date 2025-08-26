var billEmail = {
    form: {
        report: {
            name: 'root',
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '20px',
            marginBottom: '0px',
            width: '800px',
            type: 'email',
        },
        page: {
            name: 'page',
            footer: {
                name: 'footer',
                height: '150px',
                itemsAlign: 'middle',
                styles: {
                    backgroundColor: '#e5e5e5',
                },
                itemGap: 0,
                items: [
                    {
                        type: 'text',
                        name: '',
                        multiLine: true,
                        text: '본 메일은 발신전용입니다.\n상품의 배송/반품/교환/취소/환불 문의는 판매자에게 문의하시면 더 빠르고 정확한 처리가 가능합니다.\n\nCopyright ⓒ 우리테크인터내셔날 Corp. All Rights Reserved.',
                        width: '90%',
                    },
                ],
            },
            body: {
                name: 'body',
                itemGap: '0px',
                items: [
                    {
                        type: 'rbox',
                        width: '90%',
                        name: '',
                        items: [
                            {
                                type: 'image',
                                width: '100px',
                                height: '50px',
                                name: '',
                                image: 'image',
                                align: 'left',
                            },
                        ],
                    },
                    {
                        type: 'space',
                        name: '',
                        size: '30px',
                    },
                    {
                        type: 'text',
                        name: '',
                        text: '우리테크에서',
                        styles: {
                            fontSize: '28px',
                        },
                        width: '90%',
                    },
                    {
                        type: 'rbox',
                        width: '90%',
                        name: '',
                        itemGap: 0,
                        items: [
                            {
                                type: 'text',
                                name: '',
                                text: '결제하신 내역',
                                styles: {
                                    fontSize: '28px',
                                    color: '#e8590c',
                                },
                                width: null,
                            },
                            {
                                type: 'text',
                                name: '',
                                text: '입니다.',
                                styles: {
                                    fontSize: '28px',
                                },
                                width: null,
                            },
                        ],
                    },
                    {
                        type: 'table',
                        width: '100%',
                        name: '',
                        rowCount: 2,
                        minRowHeight: '24px',
                        cellStyles: {
                            borderLeft: '0',
                            borderRight: '0',
                            borderTop: '0',
                            borderBottom: '0',
                        },
                        rows: [{}, {}],
                        cells: [
                            {
                                r: 0,
                                c: 0,
                                colspan: 2,
                                styles: {
                                    borderBottom: '1px solid #e5e5e5',
                                },
                            },
                            {
                                r: 0,
                                c: 1,
                                styles: {
                                    borderBottom: '1px solid #e5e5e5',
                                },
                            },
                            {
                                r: 1,
                                c: 0,
                                colspan: 2,
                            },
                        ],
                        colCount: 2,
                        columns: [
                            {
                                width: '20%',
                            },
                            {
                                width: '50%',
                            },
                        ],
                    },
                    {
                        type: 'table',
                        data: 'customer',
                        width: '90%',
                        name: '',
                        rowCount: 5,
                        minRowHeight: '30px',
                        cellStyles: {
                            borderLeft: '0',
                            borderRight: '0',
                            borderTop: '0',
                            borderBottom: '0',
                        },
                        rows: [{}, {}, {}, {}, {}],
                        cells: [],
                        colCount: 2,
                        columns: [
                            {
                                width: '100px',
                            },
                            {
                                width: '50%',
                            },
                        ],
                        styles: {
                            fontSize: '14px',
                        },
                        items: [
                            {
                                type: 'text',
                                name: '',
                                col: 0,
                                row: 0,
                                text: '고객명',
                                styles: {
                                    color: '#696969',
                                },
                            },
                            {
                                type: 'text',
                                name: '',
                                col: 0,
                                row: 1,
                                text: '결제번호',
                                styles: {
                                    color: '#696969',
                                },
                            },
                            {
                                type: 'text',
                                name: '',
                                col: 0,
                                row: 2,
                                text: '결제일자',
                                styles: {
                                    color: '#696969',
                                },
                            },
                            {
                                type: 'text',
                                name: '',
                                col: 0,
                                row: 3,
                                text: '결제처',
                                styles: {
                                    color: '#696969',
                                },
                            },
                            {
                                type: 'text',
                                name: '',
                                col: 0,
                                row: 4,
                                text: '상품정보\t',
                                styles: {
                                    color: '#696969',
                                },
                            },
                            {
                                type: 'text',
                                value: 'customerName',
                                name: '',
                                col: 1,
                                row: 0,
                                text: '홍*동님',
                            },
                            {
                                type: 'text',
                                value: 'orderNo',
                                name: '',
                                col: 1,
                                row: 1,
                                text: '20241225WT4692501690',
                                styles: {
                                    fontSize: '20px',
                                    fontWeight: 'bold',
                                    color: '#e8590c',
                                },
                            },
                            {
                                type: 'text',
                                value: 'orderDate',
                                name: '',
                                col: 1,
                                row: 2,
                                text: '2024.12.25',
                            },
                            {
                                type: 'text',
                                value: 'orderCompany',
                                name: '',
                                col: 1,
                                row: 3,
                                text: '(주)우리테크인터내셔날',
                            },
                            {
                                type: 'text',
                                value: 'orderName',
                                name: '',
                                col: 1,
                                row: 4,
                                text: '우리테크 무소음 무접점 키보드 WT-108배열 / 색상: 버터밀크',
                            },
                        ],
                    },
                    {
                        type: 'space',
                        name: '',
                        size: '50px',
                    },
                    {
                        type: 'tableband',
                        data: 'bill',
                        width: '90%',
                        name: '',
                        detail: {
                            type: 'detail',
                            name: '',
                        },
                        colCount: 2,
                        columns: [
                            {
                                width: '20%',
                            },
                            {
                                width: '20%',
                            },
                        ],
                        header: {
                            width: '100%',
                            name: '',
                            rowCount: 2,
                            cellStyles: {
                                borderLeft: '0',
                                borderRight: '0',
                                borderTop: '0',
                                borderBottom: '0',
                            },
                            rows: [
                                {
                                    height: '30px',
                                },
                                {
                                    height: '20px',
                                },
                            ],
                            cells: [
                                {
                                    r: 0,
                                    c: 0,
                                    colspan: 2,
                                    styles: {
                                        borderBottom: '2px solid #000',
                                    },
                                },
                            ],
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 0,
                                    text: '결제상세',
                                    styles: {
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    },
                                },
                            ],
                        },
                        footer: {
                            width: '100%',
                            name: '',
                            rowCount: 2,
                            cellStyles: {
                                borderLeft: '0',
                                borderRight: '0',
                                borderTop: '0',
                                borderBottom: '0',
                            },
                            rows: [
                                {},
                                {
                                    height: '50px',
                                },
                            ],
                            cells: [
                                {
                                    r: 0,
                                    c: 0,
                                    styles: {
                                        borderBottom: '1px solid #e5e5e5',
                                    },
                                },
                                {
                                    r: 0,
                                    c: 1,
                                    styles: {
                                        borderBottom: '1px solid #e5e5e5',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 0,
                                    styles: {
                                        borderBottom: '2px solid #000',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 1,
                                    styles: {
                                        borderBottom: '2px solid #000',
                                    },
                                },
                            ],
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 1,
                                    text: '주문 금액',
                                    styles: {
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    },
                                },
                                {
                                    type: 'summary',
                                    width: '100%',
                                    name: '',
                                    col: 1,
                                    row: 1,
                                    suffix: '원',
                                    expression: 'sum(price)',
                                    styles: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: '#e8590c',
                                        textAlign: 'right',
                                    },
                                },
                            ],
                        },
                        dataRow: {
                            width: '100%',
                            name: '',
                            rowCount: 1,
                            cellStyles: {
                                borderLeft: '0',
                                borderRight: '0',
                                borderTop: '0',
                                borderBottom: '0',
                            },
                            rows: [
                                {
                                    height: '25px',
                                },
                            ],
                            cells: [],
                            items: [
                                {
                                    type: 'text',
                                    value: 'content',
                                    name: '',
                                    col: 0,
                                    row: 0,
                                    styles: {
                                        color: '#696969',
                                    },
                                },
                                {
                                    type: 'text',
                                    value: 'price',
                                    name: '',
                                    col: 1,
                                    row: 0,
                                    suffix: '원',
                                    styles: {
                                        textAlign: 'right',
                                    },
                                },
                            ],
                        },
                    },
                    {
                        type: 'space',
                        name: '',
                        size: '50px',
                    },
                    {
                        type: 'tableband',
                        data: 'products',
                        width: '90%',
                        name: '',
                        detail: {
                            type: 'detail',
                            name: '',
                        },
                        colCount: 2,
                        columns: [
                            {
                                width: '500px',
                            },
                            {
                                width: '20%',
                            },
                        ],
                        header: {
                            width: '100%',
                            name: '',
                            rowCount: 2,
                            cellStyles: {
                                borderLeft: '0',
                                borderRight: '0',
                                borderTop: '0',
                                borderBottom: '0',
                            },
                            rows: [
                                {
                                    height: '50px',
                                },
                                {
                                    height: '10px',
                                },
                            ],
                            cells: [
                                {
                                    r: 0,
                                    c: 0,
                                    colspan: 2,
                                    styles: {
                                        borderBottom: '2px solid #000',
                                    },
                                },
                                {
                                    r: 1,
                                    c: 0,
                                    colspan: 2,
                                },
                            ],
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 0,
                                    text: '주문 상품',
                                    styles: {
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    },
                                },
                            ],
                        },
                        footer: {
                            width: '100%',
                            name: '',
                            rowCount: 5,
                            cellStyles: {
                                borderLeft: '0',
                                borderRight: '0',
                                borderTop: '0',
                                borderBottom: '0',
                            },
                            rows: [
                                {
                                    height: '10px',
                                },
                                {
                                    height: '25px',
                                },
                                {
                                    height: '25px',
                                },
                                {
                                    height: '30px',
                                },
                                {
                                    height: '50px',
                                },
                            ],
                            cells: [
                                {
                                    r: 0,
                                    c: 0,
                                    styles: {
                                        borderTop: '1px solid #e5e5e5',
                                    },
                                },
                                {
                                    r: 0,
                                    c: 1,
                                    styles: {
                                        borderTop: '1px solid #e5e5e5',
                                    },
                                },
                                {
                                    r: 4,
                                    c: 0,
                                    styles: {
                                        borderBottom: '1px solid #000',
                                    },
                                },
                                {
                                    r: 4,
                                    c: 1,
                                    styles: {
                                        borderBottom: '1px solid #000',
                                    },
                                },
                            ],
                            items: [
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 1,
                                    text: '상품금액',
                                    styles: {
                                        color: '#696969',
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 2,
                                    text: '수량',
                                    styles: {
                                        color: '#696969',
                                    },
                                },
                                {
                                    type: 'summary',
                                    width: '100%',
                                    name: '',
                                    col: 1,
                                    row: 1,
                                    suffix: '원',
                                    expression: 'sum(price)',
                                    styles: {
                                        textAlign: 'right',
                                    },
                                },
                                {
                                    type: 'summary',
                                    width: '100%',
                                    name: '',
                                    col: 1,
                                    row: 2,
                                    expression: 'sum(cnt)',
                                    styles: {
                                        textAlign: 'right',
                                    },
                                },
                                {
                                    type: 'text',
                                    name: '',
                                    col: 0,
                                    row: 4,
                                    text: '\b최종결제금액',
                                    styles: {
                                        fontSize: '16px',
                                        fontWeight: 'bold',
                                    },
                                },
                                {
                                    type: 'summary',
                                    width: '100%',
                                    name: '',
                                    col: 1,
                                    row: 4,
                                    suffix: '원',
                                    expression: 'sum(totalPrice)',
                                    styles: {
                                        fontSize: '20px',
                                        fontWeight: 'bold',
                                        color: '#e8590c',
                                        textAlign: 'right',
                                    },
                                },
                            ],
                        },
                        dataRow: {
                            width: '100%',
                            name: '',
                            rowCount: 1,
                            minRowHeight: '30px',
                            cellStyles: {
                                borderLeft: '0',
                                borderRight: '0',
                                borderTop: '0',
                                borderBottom: '0',
                            },
                            rows: [
                                {
                                    height: '40px',
                                },
                            ],
                            cells: [],
                            styles: {
                                fontSize: '16px',
                            },
                            items: [
                                {
                                    type: 'text',
                                    value: 'name',
                                    name: '',
                                    col: 0,
                                    row: 0,
                                },
                            ],
                        },
                    },
                    {
                        type: 'space',
                        name: '',
                        size: '30px',
                    },
                    {
                        type: 'text',
                        linkUrl: 'https://realreport.co.kr/',
                        name: '',
                        text: '리얼리포트 홈',
                        styles: {
                            fontSize: '20px',
                            color: 'white',
                            backgroundColor: '#e8590c',
                            textAlign: 'center',
                            paddingLeft: '12px',
                            paddingTop: '12px',
                            paddingRight: '12px',
                            paddingBottom: '12px',
                        },
                        width: '300px',
                    },
                    {
                        type: 'space',
                        name: '',
                        size: '30px',
                    },
                ],
            },
            styles: {
                fontFamily: 'Arial',
                _tag_: {},
            },
        },
        assets: {
            '/': [
                {
                    name: 'image',
                    type: 'img',
                    data: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVQAAAC0CAYAAADLodSDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkQ5MUFBMDM4NzM0MTFFOTk5QUY4N0E3ODVCRDI3MjYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QkQ5MUFBMDQ4NzM0MTFFOTk5QUY4N0E3ODVCRDI3MjYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRDkxQUEwMTg3MzQxMUU5OTlBRjg3QTc4NUJEMjcyNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRDkxQUEwMjg3MzQxMUU5OTlBRjg3QTc4NUJEMjcyNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuNZqGAAACAfSURBVHja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',
                },
            ],
        },
        data: {
            bill: {
                type: 'band',
                fields: [
                    {
                        fieldName: 'content',
                        dataType: 'text',
                        description: '',
                        sample: '신용카드 포인트',
                        format: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'price',
                        dataType: 'number',
                        description: '',
                        sample: '2000',
                        format: '',
                        dateReader: null,
                    },
                ],
            },
            products: {
                type: 'band',
                fields: [
                    {
                        fieldName: 'name',
                        dataType: 'text',
                        description: '',
                        sample: '우리테크 무소음 무접점 키보드 WT-108배열\u001d / 색상: 버터밀크',
                        format: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'cnt',
                        dataType: 'number',
                        description: '',
                        sample: '1',
                        format: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'price',
                        dataType: 'number',
                        description: '',
                        sample: '50000',
                        format: '',
                        dateReader: null,
                    },
                    {
                        fieldName: 'totalPrice',
                        dataType: 'number',
                        source: '',
                        format: '',
                        sample: '',
                        expression: '\bcnt * price',
                        description: '',
                    },
                ],
            },
            customer: {
                type: 'simple',
                sample: {
                    customerName: '홍*동',
                    orderNo: '20241225WT4692501690',
                    orderDate: '2024.12.25',
                    orderCompany: '(주)우리테크인터내셔날',
                    orderName:
                        '우리테크 무소음 무접점 키보드 WT-108배열 / 색상: 버티밀크',
                },
            },
        },
        guid: '6b84b8e0-8ccc-43e7-9b81-67c4cd141c4a',
    },
    dataSet: {
        customer: {
            type: 'simple',
            values: {
                customerName: '홍*동',
                orderNo: '20241225WT4692501690',
                orderDate: '2024.12.25',
                orderCompany: '(주)우리테크인터내셔날',
                orderName:
                    '우리테크 무소음 무접점 키보드 WT-108배열 / 색상: 버티밀크',
            },
        },
        products: {
            type: 'band',
            values: [
                {
                    name: '우리테크 무소음 무접점 키보드 WT-108배열\u001d / 색상: 버터밀크',
                    cnt: 1,
                    price: 50000,
                    totalPrice: 50000,
                },
            ],
        },
        bill: {
            type: 'band',
            values: [
                { content: '신용카드 포인트', price: 5000 },
                { content: '신용카드 일시불', price: 45000 },
            ],
        },
    },
};
