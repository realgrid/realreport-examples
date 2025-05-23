var naverMap = {
    form: {
        report: {
            name: 'naver',
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
                visible: false,
            },
            reportHeader: {
                name: 'reportHeader',
                height: '100px',
                items: [
                    {
                        type: 'text',
                        width: '100%',
                        text: 'NAVER 지도 API',
                        styles: {
                            fontSize: '30px',
                            fontWeight: 'bold',
                            _tag_: {},
                        },
                    },
                ],
            },
            reportFooter: {
                name: 'reportFooter',
                visible: false,
            },
            pageFooter: {
                name: 'pageFooter',
                visible: false,
            },
            body: {
                itemGap: 4,
                items: [
                    {
                        type: 'table',
                        width: '100%',
                        name: '',
                        rowCount: 5,
                        fixed: false,
                        minRowHeight: '40px',
                        cellStyles: {
                            borderLeft: '1px solid #3a3a3a',
                            borderRight: '1px solid #3a3a3a',
                            borderTop: '1px solid #3a3a3a',
                            borderBottom: '1px solid #3a3a3a',
                        },
                        rows: [
                            {},
                            {},
                            {},
                            {},
                            {
                                height: '600px',
                            },
                        ],
                        cells: [
                            {
                                r: 2,
                                c: 1,
                                styles: {
                                    paddingTop: '4px',
                                    paddingBottom: '4px',
                                },
                            },
                            {
                                r: 4,
                                c: 1,
                                styles: {
                                    padding: '8px',
                                },
                            },
                        ],
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
                                width: '100%',
                                name: '',
                                col: 0,
                                row: 0,
                                text: '\b상호명',
                                styles: {
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                type: 'text',
                                width: '100%',
                                name: '',
                                col: 0,
                                row: 1,
                                text: '주소',
                                styles: {
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                type: 'text',
                                width: '100%',
                                name: '',
                                col: 0,
                                row: 3,
                                text: '문의',
                                styles: {
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                type: 'text',
                                width: '100%',
                                name: '',
                                col: 1,
                                row: 0,
                                text: '(주) 우리테크인터내셔날',
                                styles: {
                                    textAlign: 'left',
                                    padding: '4px',
                                },
                            },
                            {
                                type: 'text',
                                width: '100%',
                                name: '',
                                col: 1,
                                row: 1,
                                text: '경기도 성남시 분당구 운중로 135 더원스퀘어 301, 304호',
                                styles: {
                                    textAlign: 'left',
                                    padding: '4px',
                                },
                            },
                            {
                                type: 'text',
                                width: '100%',
                                name: '',
                                col: 1,
                                row: 3,
                                wrap: true,
                                multiLine: true,
                                text: '- 0505-325-8080\n- support@realgrid.com',
                                styles: {
                                    textAlign: 'left',
                                    padding: '4px',
                                },
                            },
                            {
                                type: 'text',
                                name: '',
                                col: 0,
                                row: 4,
                                text: '\b오시는 길',
                                styles: {
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                type: 'htmlView',
                                width: '100%',
                                height: '100%',
                                name: '',
                                col: 1,
                                row: 4,
                                html: '<div id="map" style="width:100%;height:100%;"></div>',
                                styles: {
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                type: 'text',
                                width: '100%',
                                name: '',
                                col: 0,
                                row: 2,
                                wrap: true,
                                multiLine: true,
                                text: '제품\n홈페이지',
                                styles: {
                                    fontWeight: 'bold',
                                },
                            },
                            {
                                type: 'cbox',
                                width: '100%',
                                name: '',
                                col: 1,
                                row: 2,
                                itemsAlign: 'start',
                                itemGap: 4,
                                items: [
                                    {
                                        type: 'text',
                                        width: '100%',
                                        linkUrl: 'https://realgrid.com',
                                        name: '',
                                        text: '- https://realgrid.com (리얼그리드)',
                                        styles: {
                                            textAlign: 'left',
                                            paddingLeft: '4px',
                                            paddingRight: '4px',
                                            color: '#0000ee',
                                        },
                                    },
                                    {
                                        type: 'text',
                                        width: '100%',
                                        linkUrl: 'https://realreport.co.kr',
                                        name: '',
                                        text: '- https://realreport.co.kr (리얼리포트)',
                                        styles: {
                                            textAlign: 'left',
                                            paddingLeft: '4px',
                                            paddingRight: '4px',
                                            color: '#0000ee',
                                        },
                                    },
                                    {
                                        type: 'text',
                                        width: '100%',
                                        linkUrl: 'https://realchart.co.kr',
                                        name: '',
                                        text: '- https://realchart.co.kr (리얼차트)',
                                        styles: {
                                            textAlign: 'left',
                                            paddingLeft: '4px',
                                            paddingRight: '4px',
                                            color: '#0000ee',
                                        },
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        },
        assets: {
            '/': [],
        },
        data: {},
        guid: 'c64fa6c5-f1a3-4341-8773-3c29b08ae8b1',
    },
};
