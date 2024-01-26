var reportForm = {
  "report": {
    "name": "reportRoot",
    "paperSize": "A4",
    "paperWidth": "210mm",
    "paperHeight": "297mm",
    "marginLeft": "12mm",
    "marginRight": "12mm",
    "marginTop": "15mm",
    "marginBottom": "15mm"
  },
  "page": {
    "name": "reportPage",
    "pageHeader": {
      "name": "pageHeader"
    },
    "reportHeader": {
      "name": "reportHeader",
      "height": 71,
      "items": [
        {
          "type": "text",
          "text": "표준근로계약서",
          "styles": {
            "fontSize": "30px",
            "fontWeight": "bold",
            "__tag_": {}
          }
        }
      ]
    },
    "reportFooter": {
      "name": "reportFooter"
    },
    "pageFooter": {
      "name": "pageFooter"
    },
    "body": {
      "itemGap": 4,
      "items": [
        {
          "type": "simpleband",
          "data": "contract",
          "width": "100%",
          "name": "",
          "detail": {
            "type": "detail",
            "width": "100%",
            "name": "",
            "visible": false
          },
          "groups": [],
          "header": {
            "type": "stack",
            "width": "100%",
            "height": 676,
            "name": null,
            "items": [
              {
                "type": "stack",
                "width": "90%",
                "height": 667,
                "name": "",
                "left": 41,
                "top": "0px",
                "items": [
                  {
                    "type": "rbox",
                    "width": "100%",
                    "height": 22,
                    "name": "",
                    "top": "0px",
                    "itemGap": 4,
                    "items": [
                      {
                        "type": "shape",
                        "width": "60px",
                        "height": 11,
                        "name": "",
                        "bottom": "0px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "text": "(이하 \"시업주\"라 함)과 (와)"
                      },
                      {
                        "type": "shape",
                        "width": "60px",
                        "height": 11,
                        "name": "",
                        "bottom": "0px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "text": "(이하 \"근로자\"라 함) 은 다음과 같이 근로계약을 체결한다."
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 19,
                    "name": "",
                    "left": 0,
                    "top": 24,
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "text": "1. 근로계약기간 : "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "160px",
                        "text": "년"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "220px",
                        "text": "월"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "280px",
                        "text": "일부터"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "400px",
                        "text": "년"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "460px",
                        "text": "월"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "520px",
                        "text": "일까지"
                      }
                    ]
                  },
                  {
                    "type": "text",
                    "name": "",
                    "left": "20px",
                    "top": "50px",
                    "text": "근로계약을 정하지 않는 경우에는 \"근로개시일\"만 기재"
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 36,
                    "name": "",
                    "left": 0,
                    "top": "80px",
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "text": "2. 근무장소 :"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 36,
                    "name": "",
                    "top": "120px",
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "text": "3. 업무의 내용 :"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 36,
                    "name": "",
                    "left": 0,
                    "top": 159,
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "text": "4. 소정근로시간 : "
                      },
                      {
                        "type": "shape",
                        "width": "20px",
                        "height": 11,
                        "name": "",
                        "left": "90px",
                        "bottom": "5px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "110px",
                        "text": "시"
                      },
                      {
                        "type": "shape",
                        "width": "20px",
                        "height": 11,
                        "name": "",
                        "left": "125px",
                        "bottom": "5px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "145px",
                        "text": "분부터"
                      },
                      {
                        "type": "shape",
                        "width": "20px",
                        "height": 11,
                        "name": "",
                        "left": "180px",
                        "bottom": "5px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "200px",
                        "text": "시"
                      },
                      {
                        "type": "shape",
                        "width": "20px",
                        "height": 11,
                        "name": "",
                        "left": "220px",
                        "bottom": "5px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "240px",
                        "text": "분까지 (휴게시간 : "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "360px",
                        "text": "시"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "400px",
                        "text": "분 ~"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "450px",
                        "text": "시"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "500px",
                        "text": "분)"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 36,
                    "name": "",
                    "top": "200px",
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "text": "5. 근무일/휴일 : "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "90px",
                        "text": "매주"
                      },
                      {
                        "type": "shape",
                        "width": "20px",
                        "height": 11,
                        "name": "",
                        "left": "115px",
                        "bottom": "5px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "140px",
                        "text": "일(또는 매일단위)근무, 주휴일 매주"
                      },
                      {
                        "type": "shape",
                        "width": "20px",
                        "height": 11,
                        "name": "",
                        "left": "330px",
                        "bottom": "5px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "350px",
                        "text": "요일"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 191,
                    "name": "",
                    "left": 0,
                    "top": 234,
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "5px",
                        "text": "6. 임금"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "28px",
                        "text": "- 월(일, 시간)급 : "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "51px",
                        "text": "- 상여금 : 있음 (     ) "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "74px",
                        "text": "기타급여(제수당 긍) : 있음 (    ), "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "200px",
                        "top": "97px",
                        "text": "원,"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "200px",
                        "top": "120px",
                        "text": "원,"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "143px",
                        "text": "- 임금 지급일 : 매원(매주 또는 매일) "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "166px",
                        "text": "- 지급방법 : 근로자에게 직접지급(    ), "
                      },
                      {
                        "type": "shape",
                        "width": "120px",
                        "height": 11,
                        "name": "",
                        "left": "93px",
                        "top": "37px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "210px",
                        "top": "28px",
                        "text": "원"
                      },
                      {
                        "type": "shape",
                        "width": "120px",
                        "height": 11,
                        "name": "",
                        "left": "105px",
                        "top": "58px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "225px",
                        "top": "51px",
                        "text": "원"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "250px",
                        "top": "51px",
                        "text": "없음 (     ) "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "180px",
                        "top": "74px",
                        "text": "없음 (     ) "
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "500px",
                        "top": "97px",
                        "text": "원"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "500px",
                        "top": "120px",
                        "text": "원"
                      },
                      {
                        "type": "shape",
                        "width": "205px",
                        "height": 11,
                        "name": "",
                        "left": "10px",
                        "top": "107px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "shape",
                        "width": "205px",
                        "height": 11,
                        "name": "",
                        "left": "10px",
                        "top": "130px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "shape",
                        "width": "232px",
                        "height": 11,
                        "name": "",
                        "left": "280px",
                        "top": "107px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "shape",
                        "width": "232px",
                        "height": 11,
                        "name": "",
                        "left": "280px",
                        "top": "130px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "shape",
                        "width": "30px",
                        "height": 11,
                        "name": "",
                        "left": "200px",
                        "bottom": "28px",
                        "shape": "hline",
                        "styles": {
                          "stroke": "#000000",
                          "strokeWidth": 1,
                          "__tag_": {}
                        }
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "230px",
                        "top": "143px",
                        "text": "일(휴일의 경우는 전일 지급)"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "220px",
                        "top": "166px",
                        "text": "근로자 명의 예금통장에 입금 (    )"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 53,
                    "name": "",
                    "top": "440px",
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "0px",
                        "text": "7. 연차유급휴가"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "20px",
                        "text": "- 연차유급휴가는 근로기준법에서 정하는 바에 따라 부여함"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 64,
                    "name": "",
                    "top": "500px",
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "0px",
                        "text": "8. 근로계약서 교부"
                      },
                      {
                        "type": "text",
                        "height": "20px",
                        "name": "",
                        "left": "0px",
                        "top": 19,
                        "wrap": true,
                        "text": "- 사업주는 근로계약을 체결함과 동시에 본 계약서를 사본하여 근로자의 교부요구와 관계없이 근로자에게 교부함 (근로기준법 제 17조 이행)"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 41,
                    "name": "",
                    "top": "570px",
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "0px",
                        "text": "9. 기타"
                      },
                      {
                        "type": "text",
                        "name": "",
                        "left": "0px",
                        "top": "20px",
                        "text": "- 이 계약에 정함이 없는 사항은 근로기준법령에 의함"
                      }
                    ]
                  },
                  {
                    "type": "stack",
                    "width": "100%",
                    "height": 36,
                    "name": "",
                    "left": 0,
                    "top": 618,
                    "items": [
                      {
                        "type": "text",
                        "name": "",
                        "right": "170px",
                        "text": "년              월              일",
                        "styles": {
                          "fontSize": "15px",
                          "__tag_": {}
                        }
                      }
                    ]
                  }
                ]
              }
            ]
          },
          "footer": {
            "type": "stack",
            "width": "100%",
            "name": null
          },
          "dataRow": {
            "type": "stack",
            "width": "100%",
            "height": 188,
            "name": null,
            "items": [
              {
                "type": "table",
                "data": "contract",
                "width": "90%",
                "name": "",
                "bottom": "0px",
                "rowCount": 6,
                "minRowHeight": "24px",
                "cellStyles": {
                  "borderLeft": "none",
                  "borderRight": "none",
                  "borderTop": "none",
                  "borderBottom": "none"
                },
                "rows": [
                  {
                    "height": "30px"
                  },
                  {
                    "height": "30px"
                  },
                  {
                    "height": "30px"
                  },
                  {
                    "height": "30px"
                  },
                  {
                    "height": "30px"
                  },
                  {
                    "height": "30px"
                  }
                ],
                "cells": [
                  {
                    "r": 0,
                    "c": 0,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 0,
                    "c": 1,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 0,
                    "c": 2,
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "r": 0,
                    "c": 4,
                    "styles": {
                      "cellAlign": "center"
                    }
                  },
                  {
                    "r": 0,
                    "c": 5,
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "r": 1,
                    "c": 1,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 1,
                    "c": 2,
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "r": 2,
                    "c": 1,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 2,
                    "c": 2,
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "r": 4,
                    "c": 0,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 4,
                    "c": 1,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 4,
                    "c": 2,
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "r": 5,
                    "c": 1,
                    "styles": {
                      "cellAlign": "right"
                    }
                  },
                  {
                    "r": 5,
                    "c": 2,
                    "styles": {
                      "cellAlign": "left"
                    }
                  }
                ],
                "colCount": 6,
                "columns": [
                  {
                    "width": "15%"
                  },
                  {
                    "width": "15%"
                  },
                  {
                    "width": "40%"
                  },
                  {
                    "width": "15%"
                  },
                  {
                    "width": "30%"
                  },
                  {
                    "width": "20%"
                  }
                ],
                "styles": {
                  "fontSize": "15px",
                  "__tag_": {}
                },
                "items": [
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 0,
                    "text": "(사업주)",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 1,
                    "row": 0,
                    "text": "사업체명 :",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 1,
                    "row": 1,
                    "text": "주소 :",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 1,
                    "row": 2,
                    "text": "대표자 :",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 4,
                    "text": "(근로자)",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 1,
                    "row": 5,
                    "text": "연락처 :",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 0,
                    "text": "(전화 :",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 2,
                    "text": "(서명)",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "data": "contract",
                    "value": "사업체명",
                    "name": "",
                    "col": 2,
                    "row": 0,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "data": "contract",
                    "value": "주소",
                    "name": "",
                    "col": 2,
                    "row": 1,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "data": "contract",
                    "value": "대표자",
                    "name": "",
                    "col": 2,
                    "row": 2,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "data": "contract",
                    "value": "연락처",
                    "name": "",
                    "col": 2,
                    "row": 5,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 1,
                    "row": 4,
                    "text": "성명 :",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "data": "contract",
                    "value": "성명",
                    "name": "",
                    "col": 2,
                    "row": 4,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 5,
                    "text": "(서명)",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 5,
                    "row": 0,
                    "text": ")",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "value": "전화",
                    "name": "",
                    "col": 4,
                    "row": 0,
                    "text": "Text"
                  }
                ]
              }
            ]
          }
        }
      ]
    }
  },
  "assets": {
    "/": []
  },
  "data": {
    "contract": {
      "type": "band",
      "fields": [
        {
          "fieldName": "사업체명",
          "dataType": "text",
          "sample": "우리컴퍼니",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "주소",
          "dataType": "text",
          "sample": "서울시 서울구 서울로 123-45",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "대표자",
          "dataType": "text",
          "sample": "김철수",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "전화",
          "dataType": "text",
          "sample": "02-1234-1234",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "성명",
          "dataType": "text",
          "sample": "홍길동",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "연락처",
          "dataType": "text",
          "sample": "010-5678-5678",
          "description": "",
          "dateReader": null
        }
      ]
    }
  },
  "guid": "d184de50-b9ce-46b2-973e-e226aa4ef1e5"
}