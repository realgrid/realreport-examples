var gridReportOptions = {
    title: {
        text: '판매대금 입금 내역',
        top: '20px',
        styles: {
            fontFamily: 'Arial',
            fontSize: '3em',
            fontWeight: '700',
            borderBottom: '2px solid blue',
        },
    },
    subTitle: {
        text: '2021년 ~ 2022년',
        top: '70px',
        // height: '90px',
        styles: {
            fontSize: '14px',
            fontStyle: 'italic',
            textDecoration: 'underline',
            paddingTop: '30px',
            paddingBottom: '30px',
        },
    },
    pageHeader: {
        items: [
            {
                prefix: '/',
                value: '${pages}',
                right: '0',
                top: '0',
            },
            {
                value: '${page}',
                top: '0',
                right: '14px',
            },
        ]
    },
    gridHeader: {
        items: [{
            text: new Date().toDateString(220),
            left: '0',
            styles: {
                fontSize: '14px'
            },
        }, {
            text: '원',
            right: '0px',
            styles: {
                color: 'blue'
            },
        }],
    },
    layout: {
        autoWidth: true,
        exclude: [
            'Gender',
            'Age',
            'Phone',
            'CardNumber',
            'Monetary',
            'KorCountry',
            'StartDate',
            'OrderDate'
        ]
    }
}