var reportOptions1 = {
    "title": {
        "text": "직원 목록",
        "top": "20px",
        "styles": {
            "fontFamily": "Arial",
            "fontSize": "3em",
            "fontWeight": "700",
            "borderBottom": "2px solid blue"
        }
    },
    "subTitle": {
        "text": "2022년 직원 목록",
        "top": "70px",
        "styles": {
            "fontSize": "14px",
            "fontStyle": "italic",
            "textDecoration": "underline",
            "paddingTop": "30px",
            "paddingBottom": "30px"
        }
    },
    "pageHeader": {
        "items": [
            {
                "value": "${page}",
                "top": "0",
                "right": "20px"
            },
            {
                "top": "0",
                "text": "/",
                "right": "10px"
            },
            {
                "value": "${pages}",
                "right": "0",
                "top": "0",
            },
        ]
    },
    "gridHeader": {
        "items": [
            {
                "text": "상반기",
                "left": "0",
                "styles": {
                    "fontSize": "14px"
                }
            },
            {
                "text": "2022-12-03",
                "right": "0px",
                "styles": {
                    "color": "blue"
                }
            }
        ]
    }
}

var fields1 = [
    {
        "fieldName": "KorName",
        "dataType": "text"
    },
    {
        "fieldName": "Se",
        "dataType": "text"
    },
    {
        "fieldName": "PhoneNumber",
        "dataType": "text"
    },
    {
        "fieldName": "Date",
        "dataType": "datetime"
    },
    {
        "fieldName": "Money",
        "dataType": "number"
    }
]

var columns1 = [
    {
        "name": "KorNameColumn",
        "fieldName": "KorName",
        "type": "data",
        "width": "150",
        "header": {
            "text": "이름"
        },
        "editor": {
            "type": "line",
            "inputCharacters": "ㄱ-힣"
        }
    },
    {
        "name": "SeColumn",
        "fieldName": "Se",
        "type": "data",
        "width": "150",
        "header": {
            "text": "성별"
        }
    },
    {
        "name": "PhoneNumberColumn",
        "fieldName": "PhoneNumber",
        "type": "data",
        "width": "150",
        "header": {
            "text": "전화번호"
        },
        "editor": {
            "mask": {
                "editMask": "000-0000-0000"
            }
        },
        "textFormat": "([0-9]{3})([0-9]{4})([0-9]{4});$1-$2-$3"
    },
    {
        "name": "DateColumn",
        "fieldName": "Date",
        "dataType": "datetime",
        "datetimeFormat": "yyyy/MM-dd",
        "width": "150",
        "header": {
            "text": "입사일"
        }
    },
    {
        "name": "MoneyColumn",
        "fieldName": "Money",
        "type": "data",
        "numberFormat": "#,##0",
        "width": "150",
        "header": {
            "text": "급여"
        }
    }
]

var data1 = [
    {
        "KorName": "김철수",
        "Se": "남",
        "PhoneNumber": "01088882222",
        "Date": "2000-02-01",
        "Money": 24000000
    },
    {
        "KorName": "이수영",
        "Se": "여",
        "PhoneNumber": "01029342638",
        "Date": "2002-03-01",
        "Money": 26000000
    },
    {
        "KorName": "최민식",
        "Se": "남",
        "PhoneNumber": "01023453647",
        "Date": "2010-04-01",
        "Money": 27000000
    },
    {
        "KorName": "김수현",
        "Se": "남",
        "PhoneNumber": "01022863436",
        "Date": "2015-05-01",
        "Money": 28000000
    },
    {
        "KorName": "김혜수",
        "Se": "여",
        "PhoneNumber": "01092663477",
        "Date": "2020-06-01",
        "Money": 28000000
    },
    {
        "KorName": "유혜진",
        "Se": "남",
        "PhoneNumber": "01066783232",
        "Date": "2008-07-01",
        "Money": 32000000
    },
    {
        "KorName": "남주혁",
        "Se": "남",
        "PhoneNumber": "01099343488",
        "Date": "2007-09-01",
        "Money": 30000000
    },
    {
        "KorName": "홍길동",
        "Se": "남",
        "PhoneNumber": "01029883366",
        "Date": "2002-10-01",
        "Money": 29000000
    },
    {
        "KorName": "최수지",
        "Se": "남",
        "PhoneNumber": "01037495588",
        "Date": "2003-11-01",
        "Money": 23000000
    }
]
