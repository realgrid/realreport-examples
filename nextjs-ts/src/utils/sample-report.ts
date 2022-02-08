const textReport = {
    page: {
        pageHeader: {
            styles: {
            }
        },
        reportHeader: {
            styles: {
                backgroundColor: 'yellow'
            },
            items: [{
                text: "ReportHeader",
                styles: {
                    fontSize: '40px'
                }
            }, {
                text: "headerLeft",
                left: 10,
                styles: {
                    fontSize: '10pt',
                    color: 'red'
                }
            }, {
                text: "headerRight",
                right: 10,
                styles: {
                    fontSize: '20pt',
                    color: 'blue'
                }
            }]
        },
        body: {
            items: [
                {
                    text: "Hello?",
                    styles: {
                        fontSize: '40px'
                    }
                }, {
                    text: "안녕하세요?",
                    styles: {
                        fontSize: '24px',
                        color: 'red',
                        fontStyle: 'italic'
                    }
                }, {
                    text: "1234567890",
                    styles: {
                        color: 'blue',
                        fontWeight: 'bold'
                    }
                }, {
                    text: "우리테크 Co.",
                    styles: {
                        fontSize: '20px',
                        color: 'blue',
                        // fontWeight: 'bold'
                    }
                }, {
                    text: "12,345,678.90",
                    styles: {
                        color: '#00000080',
                        textDecoration: 'underline'
                    }
                }
            ]
        },
    },
    data: {
        codes: {
            type: "simple",
            sample: {
                name: "hong",
                code: "123456",
                salary: 3300330
            }
        },
        dsitem: {
            type: "band",
            fields: [
                {
                    fieldName: "name",
                    dataType: "text"
                },
                {
                    fieldName: "item",
                    dataType: "text"
                },
            ]
        },
    }
}

export default textReport;