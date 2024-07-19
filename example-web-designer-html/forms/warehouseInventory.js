var warehouseInventoryReport = {
  "report": {
    "name": "품목별 재고정보",
    "type": "report",
    "paperOrientation": "landscape",
    "paperSize": "A4",
    "paperWidth": "210mm",
    "paperHeight": "297mm",
    "marginLeft": "12mm",
    "marginRight": "12mm",
    "marginTop": "10mm",
    "marginBottom": "10mm"
  },
  "page": {
    "name": "reportPage",
    "type": "report",
    "pageHeader": {
      "name": "pageHeader"
    },
    "reportHeader": {
      "name": "reportHeader",
      "height": "50px",
      "items": [
        {
          "type": "text",
          "name": "",
          "left": "4px",
          "text": "품목별 재고정보",
          "styles": {
            "fontSize": "20px",
            "__tag_": {}
          }
        },
        {
          "type": "rbox",
          "width": 300,
          "height": 50,
          "name": "",
          "right": "0px",
          "bottom": "0px",
          "itemsAlign": "end",
          "itemGap": 4,
          "items": [
            {
              "type": "text",
              "name": "",
              "bottom": "0px",
              "text": "출력일자",
              "styles": {
                "fontSize": "14px",
                "__tag_": {}
              }
            },
            {
              "type": "text",
              "value": "${date}",
              "name": "",
              "bottom": "0px",
              "text": "Text",
              "styles": {
                "fontSize": "14px",
                "__tag_": {}
              }
            }
          ]
        }
      ]
    },
    "reportFooter": {
      "name": "reportFooter"
    },
    "pageFooter": {
      "name": "pageFooter",
      "items": [
        {
          "type": "html",
          "height": "20px",
          "name": "",
          "right": "0px",
          "html": "${page} / ${pages}",
          "styles": {
            "fontSize": "14px",
            "textAlign": "right",
            "__tag_": {}
          }
        }
      ]
    },
    "body": {
      "itemGap": 4,
      "items": [
        {
          "type": "space",
          "name": "",
          "size": 10
        },
        {
          "type": "tableband",
          "data": "item",
          "width": "100%",
          "name": "",
          "detail": {
            "type": "detail",
            "width": "100%",
            "name": ""
          },
          "colCount": 9,
          "columns": [
            {
              "width": "10%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            },
            {
              "width": "20%"
            }
          ],
          "groups": [
            {
              "name": "tableBandRowGroup",
              "field": "name",
              "header": {
                "name": "groupHeader",
                "width": "100%",
                "visible": false,
                "rowCount": 1,
                "fixed": false,
                "cellStyles": {},
                "rows": [
                  {}
                ],
                "cells": []
              },
              "footer": {
                "name": "groupFooter",
                "width": "100%",
                "rowCount": 1,
                "fixed": false,
                "cellStyles": {
                  "borderLeft": "none",
                  "borderRight": "none",
                  "borderTop": "1px dashed #aaa",
                  "borderBottom": "1px dashed #aaa"
                },
                "rows": [
                  {
                    "height": "30px"
                  }
                ],
                "cells": [
                  {
                    "r": 0,
                    "c": 0,
                    "styles": {
                      "backgroundColor": "#f3f3f3"
                    }
                  }
                ],
                "items": [
                  {
                    "type": "text",
                    "name": "",
                    "col": 6,
                    "row": 0,
                    "text": "품목별 총합",
                    "styles": {
                      "fontSize": "12px",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "summary",
                    "name": "",
                    "col": 7,
                    "row": 0,
                    "expression": "sum(income)",
                    "styles": {
                      "fontSize": "14px",
                      "fontWeight": "bold",
                      "color": "#fdba74",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "summary",
                    "name": "",
                    "col": 8,
                    "row": 0,
                    "expression": "sum(outcome)",
                    "styles": {
                      "fontSize": "14px",
                      "fontWeight": "bold",
                      "color": "#7dd3fc",
                      "__tag_": {}
                    }
                  }
                ]
              }
            }
          ],
          "header": {
            "width": "100%",
            "name": "",
            "rowCount": 1,
            "fixed": false,
            "cellStyles": {
              "borderLeft": "none",
              "borderRight": "none",
              "borderTop": "none",
              "borderBottom": "1px solid black"
            },
            "rows": [
              {
                "height": "30px"
              }
            ],
            "cells": [],
            "items": [
              {
                "type": "text",
                "name": "",
                "col": 0,
                "row": 0,
                "text": "No",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 1,
                "row": 0,
                "text": "품목명",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 3,
                "row": 0,
                "text": "구분",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 4,
                "row": 0,
                "text": "규격",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 5,
                "row": 0,
                "text": "단위",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 6,
                "row": 0,
                "text": "창고명",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 7,
                "row": 0,
                "text": "입고",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 8,
                "row": 0,
                "text": "출고",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 2,
                "row": 0,
                "text": "품목코드",
                "styles": {
                  "fontSize": "16px",
                  "fontWeight": "bold",
                  "__tag_": {}
                }
              }
            ]
          },
          "footer": {
            "width": "100%",
            "name": "",
            "rowCount": 1,
            "fixed": false,
            "minRowHeight": "40px",
            "cellStyles": {
              "borderLeft": "none",
              "borderRight": "none",
              "borderTop": "2px solid #000",
              "borderBottom": "none"
            },
            "rows": [
              {}
            ],
            "cells": [],
            "items": [
              {
                "type": "summary",
                "name": "",
                "col": 7,
                "row": 0,
                "expression": "sum(income)",
                "styles": {
                  "fontSize": "18px",
                  "fontWeight": "bold",
                  "color": "#fdba74",
                  "__tag_": {}
                }
              },
              {
                "type": "summary",
                "name": "",
                "col": 8,
                "row": 0,
                "expression": "sum(outcome)",
                "styles": {
                  "fontSize": "18px",
                  "fontWeight": "bold",
                  "color": "#7dd3fc",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "name": "",
                "col": 6,
                "row": 0,
                "text": "총합",
                "styles": {
                  "fontSize": "18px",
                  "__tag_": {}
                }
              }
            ]
          },
          "dataRow": {
            "width": "100%",
            "name": "",
            "rowCount": 1,
            "fixed": false,
            "minRowHeight": "40px",
            "cellStyles": {
              "borderLeft": "none",
              "borderRight": "none",
              "borderTop": "none",
              "borderBottom": "none"
            },
            "rows": [
              {}
            ],
            "cells": [
              {
                "r": 0,
                "c": 0,
                "styles": {
                  "backgroundColor": "#f3f3f3",
                  "borderTop": "none"
                }
              }
            ],
            "items": [
              {
                "type": "text",
                "value": "${ino}",
                "name": "",
                "col": 0,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "name",
                "name": "",
                "mergedInGroup": true,
                "col": 1,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "gubun",
                "name": "",
                "col": 3,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "standard",
                "name": "",
                "col": 4,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "unit",
                "name": "",
                "col": 5,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "storageName",
                "name": "",
                "col": 6,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "income",
                "name": "",
                "col": 7,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "color": "#fdba74",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "outcome",
                "name": "",
                "col": 8,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "color": "#7dd3fc",
                  "__tag_": {}
                }
              },
              {
                "type": "text",
                "value": "code",
                "name": "",
                "col": 2,
                "row": 0,
                "styles": {
                  "fontSize": "14px",
                  "__tag_": {}
                }
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
    "item": {
      "type": "band",
      "fields": [
        {
          "fieldName": "name",
          "dataType": "text",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "code",
          "dataType": "text",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "gubun",
          "dataType": "text",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "standard",
          "dataType": "text",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "unit",
          "dataType": "text",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "storageName",
          "dataType": "text",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "income",
          "dataType": "number",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        },
        {
          "fieldName": "outcome",
          "dataType": "number",
          "description": "",
          "sample": "",
          "format": "",
          "dateReader": null
        }
      ],
      "sample": [
        {
            "name":"철근",
            "code":"A-043",
            "gubun":"자재",
            "standard":"D10",
            "unit":"kg",
            "storageName":"A-01-창고",
            "income":2433,
            "outcome":345
          },
          {
            "name":"철근",
            "code":"A-021",
            "gubun":"자재",
            "standard":"D20",
            "unit":"kg",
            "storageName":"A-01-창고",
            "income":243,
            "outcome":75
          },
          {
            "name":"강철",
            "code":"B-001",
            "gubun":"자재",
            "standard":"4mm",
            "unit":"kg",
            "storageName":"A-02-창고",
            "income":12433,
            "outcome":2433
          },
          {
            "name":"강철",
            "code":"B-002",
            "gubun":"자재",
            "standard":"5mm",
            "unit":"kg",
            "storageName":"A-02-창고",
            "income":13342,
            "outcome":5732
          },
          {
            "name":"강철",
            "code":"B-005",
            "gubun":"자재",
            "standard":"8mm",
            "unit":"kg",
            "storageName":"A-02-창고",
            "income":5348,
            "outcome":638
          },
          {
            "name":"강철",
            "code":"B-006",
            "gubun":"자재",
            "standard":"9mm",
            "unit":"kg",
            "storageName":"A-02-창고",
            "income":8374,
            "outcome":2346
          },
          {
            "name":"강철",
            "code":"B-013",
            "gubun":"자재",
            "standard":"16mm",
            "unit":"kg",
            "storageName":"A-02-창고",
            "income":3429,
            "outcome":1243
          },
          {
            "name":"알루미늄",
            "code":"P-601",
            "gubun":"플레이트",
            "standard":"T6",
            "unit":"세트",
            "storageName":"P-04-창고",
            "income":234,
            "outcome":55
          },
          {
            "name":"알루미늄",
            "code":"P-605",
            "gubun":"플레이트",
            "standard":"T10",
            "unit":"세트",
            "storageName":"P-04-창고",
            "income":432,
            "outcome":98
          },
          {
            "name":"알루미늄",
            "code":"P-615",
            "gubun":"플레이트",
            "standard":"T20",
            "unit":"세트",
            "storageName":"P-04-창고",
            "income":593,
            "outcome":210
          },
          {
            "name":"알루미늄",
            "code":"P-604",
            "gubun":"플레이트",
            "standard":"T9",
            "unit":"세트",
            "storageName":"P-04-창고",
            "income":75,
            "outcome":45
          },
          {
            "name":"황동",
            "code":"B-214",
            "gubun":"금속",
            "standard":"C2700",
            "unit":"세트",
            "storageName":"M-03-센터",
            "income":243,
            "outcome":13
          },
          {
            "name":"황동",
            "code":"B-215",
            "gubun":"금속",
            "standard":"C2710",
            "unit":"개",
            "storageName":"M-03-센터",
            "income":642,
            "outcome":423
          },
          {
            "name":"황동",
            "code":"B-216",
            "gubun":"금속",
            "standard":"C2720",
            "unit":"개",
            "storageName":"M-03-센터",
            "income":345,
            "outcome":43
          },
          {
            "name":"황동",
            "code":"B-217",
            "gubun":"금속",
            "standard":"C2730",
            "unit":"개",
            "storageName":"M-03-센터",
            "income":279,
            "outcome":67
          },
          {
            "name":"황동",
            "code":"B-218",
            "gubun":"금속",
            "standard":"C2740",
            "unit":"개",
            "storageName":"M-03-센터",
            "income":154,
            "outcome":52
          },
          {
            "name":"황동",
            "code":"B-219",
            "gubun":"금속",
            "standard":"C2750",
            "unit":"개",
            "storageName":"M-03-센터",
            "income":548,
            "outcome":35
          },
          {
            "name":"금",
            "code":"G-101",
            "gubun":"금속",
            "standard":"100g",
            "unit":"바",
            "storageName":"G-02-센터",
            "income":152,
            "outcome":35
          },
          {
            "name":"금",
            "code":"G-102",
            "gubun":"금속",
            "standard":"200g",
            "unit":"바",
            "storageName":"G-02-센터",
            "income":221,
            "outcome":153
          },
          {
            "name":"금",
            "code":"G-103",
            "gubun":"금속",
            "standard":"300g",
            "unit":"바",
            "storageName":"G-02-센터",
            "income":89,
            "outcome":50
          },
          {
            "name":"금",
            "code":"G-104",
            "gubun":"금속",
            "standard":"400g",
            "unit":"바",
            "storageName":"G-02-센터",
            "income":663,
            "outcome":345
          },
          {
            "name":"구리",
            "code":"C-170",
            "gubun":"금속",
            "standard":"100F",
            "unit":"개",
            "storageName":"G-01-센터",
            "income":12345,
            "outcome":1530
          },
          {
            "name":"구리",
            "code":"C-171",
            "gubun":"금속",
            "standard":"150F",
            "unit":"개",
            "storageName":"G-01-센터",
            "income":14356,
            "outcome":3467
          },
          {
            "name":"구리",
            "code":"C-172",
            "gubun":"금속",
            "standard":"200F",
            "unit":"개",
            "storageName":"G-01-센터",
            "income":15283,
            "outcome":5049
          },
          {
            "name":"구리",
            "code":"C-173",
            "gubun":"금속",
            "standard":"250F",
            "unit":"개",
            "storageName":"G-01-센터",
            "income":34524,
            "outcome":5934
          }
        ]
    }
  },
  "guid": "c0ce7872-9f92-463a-8728-c4d46f1f259f"
}

var warehouseInventoryData = {
    "item": {
        "values": [
            {
              "name":"철근",
              "code":"A-043",
              "gubun":"자재",
              "standard":"D10",
              "unit":"kg",
              "storageName":"A-01-창고",
              "income":2433,
              "outcome":345
            },
            {
              "name":"철근",
              "code":"A-021",
              "gubun":"자재",
              "standard":"D20",
              "unit":"kg",
              "storageName":"A-01-창고",
              "income":243,
              "outcome":75
            },
            {
              "name":"강철",
              "code":"B-001",
              "gubun":"자재",
              "standard":"4mm",
              "unit":"kg",
              "storageName":"A-02-창고",
              "income":12433,
              "outcome":2433
            },
            {
              "name":"강철",
              "code":"B-002",
              "gubun":"자재",
              "standard":"5mm",
              "unit":"kg",
              "storageName":"A-02-창고",
              "income":13342,
              "outcome":5732
            },
            {
              "name":"강철",
              "code":"B-005",
              "gubun":"자재",
              "standard":"8mm",
              "unit":"kg",
              "storageName":"A-02-창고",
              "income":5348,
              "outcome":638
            },
            {
              "name":"강철",
              "code":"B-006",
              "gubun":"자재",
              "standard":"9mm",
              "unit":"kg",
              "storageName":"A-02-창고",
              "income":8374,
              "outcome":2346
            },
            {
              "name":"강철",
              "code":"B-013",
              "gubun":"자재",
              "standard":"16mm",
              "unit":"kg",
              "storageName":"A-02-창고",
              "income":3429,
              "outcome":1243
            },
            {
              "name":"알루미늄",
              "code":"P-601",
              "gubun":"플레이트",
              "standard":"T6",
              "unit":"세트",
              "storageName":"P-04-창고",
              "income":234,
              "outcome":55
            },
            {
              "name":"알루미늄",
              "code":"P-605",
              "gubun":"플레이트",
              "standard":"T10",
              "unit":"세트",
              "storageName":"P-04-창고",
              "income":432,
              "outcome":98
            },
            {
              "name":"알루미늄",
              "code":"P-615",
              "gubun":"플레이트",
              "standard":"T20",
              "unit":"세트",
              "storageName":"P-04-창고",
              "income":593,
              "outcome":210
            },
            {
              "name":"알루미늄",
              "code":"P-604",
              "gubun":"플레이트",
              "standard":"T9",
              "unit":"세트",
              "storageName":"P-04-창고",
              "income":75,
              "outcome":45
            },
            {
              "name":"황동",
              "code":"B-214",
              "gubun":"금속",
              "standard":"C2700",
              "unit":"세트",
              "storageName":"M-03-센터",
              "income":243,
              "outcome":13
            },
            {
              "name":"황동",
              "code":"B-215",
              "gubun":"금속",
              "standard":"C2710",
              "unit":"개",
              "storageName":"M-03-센터",
              "income":642,
              "outcome":423
            },
            {
              "name":"황동",
              "code":"B-216",
              "gubun":"금속",
              "standard":"C2720",
              "unit":"개",
              "storageName":"M-03-센터",
              "income":345,
              "outcome":43
            },
            {
              "name":"황동",
              "code":"B-217",
              "gubun":"금속",
              "standard":"C2730",
              "unit":"개",
              "storageName":"M-03-센터",
              "income":279,
              "outcome":67
            },
            {
              "name":"황동",
              "code":"B-218",
              "gubun":"금속",
              "standard":"C2740",
              "unit":"개",
              "storageName":"M-03-센터",
              "income":154,
              "outcome":52
            },
            {
              "name":"황동",
              "code":"B-219",
              "gubun":"금속",
              "standard":"C2750",
              "unit":"개",
              "storageName":"M-03-센터",
              "income":548,
              "outcome":35
            },
            {
              "name":"금",
              "code":"G-101",
              "gubun":"금속",
              "standard":"100g",
              "unit":"바",
              "storageName":"G-02-센터",
              "income":152,
              "outcome":35
            },
            {
              "name":"금",
              "code":"G-102",
              "gubun":"금속",
              "standard":"200g",
              "unit":"바",
              "storageName":"G-02-센터",
              "income":221,
              "outcome":153
            },
            {
              "name":"금",
              "code":"G-103",
              "gubun":"금속",
              "standard":"300g",
              "unit":"바",
              "storageName":"G-02-센터",
              "income":89,
              "outcome":50
            },
            {
              "name":"금",
              "code":"G-104",
              "gubun":"금속",
              "standard":"400g",
              "unit":"바",
              "storageName":"G-02-센터",
              "income":663,
              "outcome":345
            },
            {
              "name":"구리",
              "code":"C-170",
              "gubun":"금속",
              "standard":"100F",
              "unit":"개",
              "storageName":"G-01-센터",
              "income":12345,
              "outcome":1530
            },
            {
              "name":"구리",
              "code":"C-171",
              "gubun":"금속",
              "standard":"150F",
              "unit":"개",
              "storageName":"G-01-센터",
              "income":14356,
              "outcome":3467
            },
            {
              "name":"구리",
              "code":"C-172",
              "gubun":"금속",
              "standard":"200F",
              "unit":"개",
              "storageName":"G-01-센터",
              "income":15283,
              "outcome":5049
            },
            {
              "name":"구리",
              "code":"C-173",
              "gubun":"금속",
              "standard":"250F",
              "unit":"개",
              "storageName":"G-01-센터",
              "income":34524,
              "outcome":5934
            }
          ]
    }
}