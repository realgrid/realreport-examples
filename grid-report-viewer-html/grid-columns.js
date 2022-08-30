var gridColumns1 = [
  {
    name: "KorName",
    fieldName: "KorName",
    width: "60",
    header: {
      text: "이름"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "Gender",
    fieldName: "Gender",
    width: "40",
    header: {
      text: "성별"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "Age",
    fieldName: "Age",
    width: "40",
    header: {
      text: "나이"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "Phone",
    fieldName: "Phone",
    width: "100",
    header: {
      text: "전화번호"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "ProductId",
    fieldName: "ProductId",
    width: "120",
    header: {
      text: "제품번호"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "KorCountry",
    fieldName: "KorCountry",
    width: "100",
    header: {
      text: "투자국가"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "OrderDate",
    fieldName: "OrderDate",
    width: "100",
    header: {
      text: "주문일자"
    }
  },
  {
    name: "CardNumber",
    fieldName: "CardNumber",
    width: "140",
    header: {
      text: "카드번호"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "Monetary",
    fieldName: "Monetary",
    width: "40",
    header: {
      text: "통화"
    },
    renderer: {
      type: "text"
    }
  },
  {
    name: "StartDate",
    fieldName: "StartDate",
    width: "100",
    header: {
      text: "최초납입일"
    }
  },
  {
    name: "EndDate",
    fieldName: "EndDate",
    width: "100",
    header: {
      text: "종료일"
    }
  },
  {
    name: "ToMonth",
    fieldName: "ToMonth",
    width: "40",
    header: {
      text: "납입"
    }
  },
  {
    name: "Month",
    fieldName: "Month",
    width: "40",
    header: {
      text: "잔여"
    }
  },
  {
    name: "InterestRate",
    fieldName: "InterestRate",
    width: "40",
    numberFormat: "0.00",
    header: {
      text: "이율"
    }
  },
  {
    name: "SaveCost",
    fieldName: "SaveCost",
    width: "80",
    numberFormat: "#,##0",
    header: {
      text: "납입금"
    }
  },
  {
    name: "SaveMaturity",
    fieldName: "SaveMaturity",
    width: "80",
    numberFormat: "#,##0",
    header: {
      text: "만기금액"
    }
  },
  {
    name: "CurrentSave",
    fieldName: "CurrentSave",
    width: "80",
    numberFormat: "#,##0",
    header: {
      text: "현재잔액"
    }
  }
]

var gridColumns2 = [
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
      "datetimeFormat": "yyyy/MM/dd",
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