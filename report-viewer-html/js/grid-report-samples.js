var gridItem100 = {
    "id": "100",
    "name": "직원 목록 그리드",
    "category": "demo",
    "description": "직원목록",
    "layoutFile": "grid-demo/grid-100.json",
    "dataFile": "grid-demo/grid-data-100.json",
    "reportOptions": {
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
    },
    "data": [
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
    ],
    "fields": [
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
    ],
    "columns": [
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
}

var gridItem101 = {
    "id": "101",
    "name": "그리드 기본 샘플",
    "category": "demo",
    "description": "그리드 기본 샘플",
    "layoutFile": "grid-demo/grid-101.json",
    "dataFile": "grid-demo/grid-data-101.json",
    "reportOptions": {
        "title": {
            "text": "그리드 기본 샘플",
            "styles": {
                "fontSize": "2em",
                "fontWeight": "700",
                "paddingBottom": "50px"
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
        "layout": {
            "autoWidth": true,
            "exclude": [
                "Gender",
                "Age",
                "Phone",
                "CardNumber",
                "Monetary",
                "KorCountry",
                "StartDate",
                "OrderDate"
            ]
        }
    },
    "data": [
        {
            "KorName": "박영호",
            "Gender": "남",
            "Age": "71",
            "Phone": "(025)6563-2802",
            "ProductId": "198160731-00008",
            "KorCountry": "모잠비크",
            "OrderDate": "2021-01-16",
            "CardNumber": "5587-2139-9692-3644",
            "Monetary": "EUR",
            "StartDate": "2018-02-25",
            "EndDate": "2021-08-12",
            "ToMonth": "23",
            "Month": "41",
            "Year": "3",
            "InterestRate": "0.15",
            "SaveCost": "51000",
            "SaveMaturity": "14950650",
            "CurrentSave": "9304950",
            "Rating": "5",
            "BusinessProficiency": "59",
            "Address": "서울특별시 강서구 공항동 45-89"
        },
        {
            "KorName": "조일형",
            "Gender": "남",
            "Age": "62",
            "Phone": "(093)8809-8696",
            "ProductId": "571215854-00001",
            "KorCountry": "캐나다",
            "OrderDate": "2019-07-29",
            "CardNumber": "5348-5093-3750-0623",
            "Monetary": "USD",
            "StartDate": "2019-10-21",
            "EndDate": "2022-12-11",
            "ToMonth": "3",
            "Month": "37",
            "Year": "3",
            "InterestRate": "0.38",
            "SaveCost": "14000",
            "SaveMaturity": "7801080",
            "CurrentSave": "1108520",
            "Rating": "3",
            "BusinessProficiency": "53",
            "Address": "서울특별시 중구 봉래동2가 122"
        },
        {
            "KorName": "김덕중",
            "Gender": "여",
            "Age": "53",
            "Phone": "(064)5483-6874",
            "ProductId": "149115669-00009",
            "KorCountry": "캐나다",
            "OrderDate": "2020-03-08",
            "CardNumber": "5121-9931-3555-9853",
            "Monetary": "HKD",
            "StartDate": "2018-12-30",
            "EndDate": "2022-01-16",
            "ToMonth": "13",
            "Month": "36",
            "Year": "3",
            "InterestRate": "0.32",
            "SaveCost": "112000",
            "SaveMaturity": "50480640",
            "CurrentSave": "20805120",
            "Rating": "3",
            "BusinessProficiency": "14",
            "Address": "서울특별시 양천구 신월동 115-15"
        },
        {
            "KorName": "국영석",
            "Gender": "남",
            "Age": "63",
            "Phone": "(044)7055-3032",
            "ProductId": "738027655-00005",
            "KorCountry": "부베 섬",
            "OrderDate": "2020-05-01",
            "CardNumber": "5571-3720-2975-7540",
            "Monetary": "AUD",
            "StartDate": "2019-08-15",
            "EndDate": "2021-12-23",
            "ToMonth": "5",
            "Month": "28",
            "Year": "2",
            "InterestRate": "0.2",
            "SaveCost": "84000",
            "SaveMaturity": "15523200",
            "CurrentSave": "4704000",
            "Rating": "3",
            "BusinessProficiency": "14",
            "Address": "서울특별시 강남구 역삼동 707-9"
        },
        {
            "KorName": "이강수",
            "Gender": "남",
            "Age": "59",
            "Phone": "(063)3620-4216",
            "ProductId": "867871717-00007",
            "KorCountry": "헝가리",
            "OrderDate": "2020-08-05",
            "CardNumber": "5244-3051-2681-3706",
            "Monetary": "VND",
            "StartDate": "2019-04-12",
            "EndDate": "2020-12-04",
            "ToMonth": "10",
            "Month": "19",
            "Year": "1",
            "InterestRate": "0.38",
            "SaveCost": "84000",
            "SaveMaturity": "13119120",
            "CurrentSave": "7660800",
            "Rating": "5",
            "BusinessProficiency": "40",
            "Address": "서울특별시 중구 황학동 706-2"
        },
        {
            "KorName": "성노식",
            "Gender": "남",
            "Age": "66",
            "Phone": "(041)5922-1090",
            "ProductId": "764283156-00009",
            "KorCountry": "우크라이나",
            "OrderDate": "2020-02-10",
            "CardNumber": "5429-9674-4898-1599",
            "Monetary": "KRW",
            "StartDate": "2019-01-24",
            "EndDate": "2021-03-10",
            "ToMonth": "12",
            "Month": "25",
            "Year": "2",
            "InterestRate": "0.27",
            "SaveCost": "105000",
            "SaveMaturity": "20343750",
            "CurrentSave": "11130000",
            "Rating": "5",
            "BusinessProficiency": "74",
            "Address": "서울특별시 중구 충무로1가 52-5"
        },
        {
            "KorName": "김진영",
            "Gender": "남",
            "Age": "29",
            "Phone": "(016)2869-5069",
            "ProductId": "646110221-00009",
            "KorCountry": "브라질",
            "OrderDate": "2019-06-20",
            "CardNumber": "5153-6153-6849-7151",
            "Monetary": "VND",
            "StartDate": "2018-06-23",
            "EndDate": "2021-10-25",
            "ToMonth": "19",
            "Month": "40",
            "Year": "3",
            "InterestRate": "0.23",
            "SaveCost": "15000",
            "SaveMaturity": "6120000",
            "CurrentSave": "3222000",
            "Rating": "5",
            "BusinessProficiency": "43",
            "Address": "서울특별시 양천구 신정동 117-36"
        },
        {
            "KorName": "전우수",
            "Gender": "여",
            "Age": "73",
            "Phone": "(051)2259-4592",
            "ProductId": "969966274-00009",
            "KorCountry": "페루",
            "OrderDate": "2019-12-27",
            "CardNumber": "5255-8067-8768-5495",
            "Monetary": "THB",
            "StartDate": "2018-04-11",
            "EndDate": "2022-08-22",
            "ToMonth": "22",
            "Month": "52",
            "Year": "4",
            "InterestRate": "0.4",
            "SaveCost": "40000",
            "SaveMaturity": "45344000",
            "CurrentSave": "20384000",
            "Rating": "3",
            "BusinessProficiency": "100",
            "Address": "서울특별시 송파구 가락동 600"
        }
    ],
    "fields": [
        {
            "fieldName": "KorName",
            "dataType": "text"
        },
        {
            "fieldName": "Gender",
            "dataType": "text"
        },
        {
            "fieldName": "Age",
            "dataType": "number"
        },
        {
            "fieldName": "Phone",
            "dataType": "text"
        },
        {
            "fieldName": "ProductId",
            "dataType": "text"
        },
        {
            "fieldName": "KorCountry",
            "dataType": "text"
        },
        {
            "fieldName": "OrderDate",
            "dataType": "datetime",
            "datetimeFormat": "yyyy-MM-dd",
            "amText": "오전",
            "pmText": "오후"
        },
        {
            "fieldName": "CardNumber",
            "dataType": "text"
        },
        {
            "fieldName": "Monetary",
            "dataType": "text"
        },
        {
            "fieldName": "StartDate",
            "dataType": "datetime",
            "datetimeFormat": "yyyy-MM-dd",
            "amText": "오전",
            "pmText": "오후"
        },
        {
            "fieldName": "EndDate",
            "dataType": "datetime",
            "datetimeFormat": "yyyy-MM-dd",
            "amText": "오전",
            "pmText": "오후"
        },
        {
            "fieldName": "ToMonth",
            "dataType": "number"
        },
        {
            "fieldName": "Month",
            "dataType": "number"
        },
        {
            "fieldName": "Year",
            "dataType": "number"
        },
        {
            "fieldName": "InterestRate",
            "dataType": "number"
        },
        {
            "fieldName": "SaveCost",
            "dataType": "number"
        },
        {
            "fieldName": "SaveMaturity",
            "dataType": "number"
        },
        {
            "fieldName": "CurrentSave",
            "dataType": "number"
        }
    ],
    "columns": [
        {
            "name": "KorName",
            "fieldName": "KorName",
            "width": "60",
            "header": {
                "text": "이름"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "Gender",
            "fieldName": "Gender",
            "width": "40",
            "header": {
                "text": "성별"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "Age",
            "fieldName": "Age",
            "width": "40",
            "header": {
                "text": "나이"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "Phone",
            "fieldName": "Phone",
            "width": "100",
            "header": {
                "text": "전화번호"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "ProductId",
            "fieldName": "ProductId",
            "width": "120",
            "header": {
                "text": "제품번호"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "KorCountry",
            "fieldName": "KorCountry",
            "width": "100",
            "header": {
                "text": "투자국가"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "OrderDate",
            "fieldName": "OrderDate",
            "width": "100",
            "header": {
                "text": "주문일자"
            }
        },
        {
            "name": "CardNumber",
            "fieldName": "CardNumber",
            "width": "140",
            "header": {
                "text": "카드번호"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "Monetary",
            "fieldName": "Monetary",
            "width": "40",
            "header": {
                "text": "통화"
            },
            "renderer": {
                "type": "text"
            }
        },
        {
            "name": "StartDate",
            "fieldName": "StartDate",
            "width": "100",
            "header": {
                "text": "최초납입일"
            }
        },
        {
            "name": "EndDate",
            "fieldName": "EndDate",
            "width": "100",
            "header": {
                "text": "종료일"
            }
        },
        {
            "name": "ToMonth",
            "fieldName": "ToMonth",
            "width": "40",
            "header": {
                "text": "납입 횟수"
            }
        },
        {
            "name": "Month",
            "fieldName": "Month",
            "width": "40",
            "header": {
                "text": "남은 횟수"
            }
        },
        {
            "name": "InterestRate",
            "fieldName": "InterestRate",
            "width": "40",
            "numberFormat": "0.00",
            "header": {
                "text": "이율"
            }
        },
        {
            "name": "SaveCost",
            "fieldName": "SaveCost",
            "width": "80",
            "numberFormat": "#,##0",
            "header": {
                "text": "납입금"
            }
        },
        {
            "name": "SaveMaturity",
            "fieldName": "SaveMaturity",
            "width": "80",
            "numberFormat": "#,##0",
            "header": {
                "text": "만기금액"
            }
        },
        {
            "name": "CurrentSave",
            "fieldName": "CurrentSave",
            "width": "80",
            "numberFormat": "#,##0",
            "header": {
                "text": "현재잔액"
            }
        }
    ]
}