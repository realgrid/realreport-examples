<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>
    <head>
        <title>RealReport Example</title>
        <link href='js/realreport/realreport.css' rel='stylesheet' />
        <script src='js/realreport/realreport-lic.js'></script>
        <script src='js/realreport/realreport.js'></script>
        <script>
const initializeRealReport = () => {
const report = {
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
      "name": "pageHeader",
      "styles": {
        "borderBottom": "2px solid #000",
        "__tag_": {}
      },
      "items": [
        {
          "type": "rbox",
          "name": "",
          "right": 0,
          "itemGap": 4,
          "styles": {
            "backgroundColor": "#dddddd",
            "__tag_": {}
          },
          "items": [
            {
              "type": "text",
              "name": "",
              "text": "Date:",
              "styles": {
                "fontWeight": "bold",
                "color": "#0021f7",
                "__tag_": {}
              }
            },
            {
              "type": "text",
              "value": "%{date}",
              "name": "",
              "dateFormat": "yyyy/MM/dd",
              "text": "Text",
              "styles": {
                "fontWeight": "bold",
                "color": "#0021f7",
                "__tag_": {}
              }
            }
          ]
        },
        {
          "type": "text",
          "name": "",
          "left": 0,
          "text": "견적서",
          "styles": {
            "fontWeight": "bold",
            "color": "#f60000",
            "__tag_": {}
          }
        }
      ]
    },
    "reportHeader": {
      "name": "reportHeader",
      "height": 0,
      "visible": false
    },
    "reportFooter": {
      "name": "reportFooter"
    },
    "pageFooter": {
      "name": "pageFooter",
      "items": [
        {
          "type": "rbox",
          "name": "",
          "right": 0,
          "itemGap": 4,
          "items": [
            {
              "type": "text",
              "value": "%{page}",
              "name": "",
              "text": "Text"
            },
            {
              "type": "text",
              "name": "",
              "text": "/",
              "styles": {
                "paddingLeft": "3px",
                "paddingRight": "3px",
                "__tag_": {}
              }
            },
            {
              "type": "text",
              "value": "%{pages}",
              "name": "",
              "text": "Text"
            }
          ]
        }
      ]
    },
    "body": {
      "itemGap": 4,
      "items": [
        {
          "type": "simpleband",
          "data": "estimate-master",
          "width": "100%",
          "name": "",
          "rowsPerPage": 1,
          "detail": {
            "type": "detail",
            "width": "100%",
            "name": "",
            "items": [
              {
                "type": "tableband",
                "data": "estimate-detail",
                "width": "100%",
                "name": "",
                "masterFields": "Cumstomer, Company",
                "keyFields": "Cumstomer, Company",
                "rowsPerPage": 25,
                "repeatDetailFooter": true,
                "endRowCount": 25,
                "detail": {
                  "type": "detail",
                  "width": "100%",
                  "name": "",
                  "visible": false
                },
                "colCount": 8,
                "columns": [
                  {
                    "width": "5%"
                  },
                  {
                    "width": "20%"
                  },
                  {
                    "width": "10%"
                  },
                  {
                    "width": "10%"
                  },
                  {
                    "width": "10%"
                  },
                  {
                    "width": "10%"
                  },
                  {
                    "width": "18%"
                  },
                  {
                    "width": "10%"
                  }
                ],
                "header": {
                  "width": "100%",
                  "name": null,
                  "rowCount": 1,
                  "cellStyles": {},
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
                        "borderLeft": "2px solid #000",
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 1,
                      "styles": {
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 2,
                      "styles": {
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 3,
                      "styles": {
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 4,
                      "styles": {
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 5,
                      "styles": {
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 6,
                      "styles": {
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 7,
                      "styles": {
                        "borderRight": "2px solid #000",
                        "borderTop": "0"
                      }
                    }
                  ],
                  "items": [
                    {
                      "type": "text",
                      "name": "",
                      "col": 0,
                      "row": 0,
                      "text": "번호"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 1,
                      "row": 0,
                      "text": "품목"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 2,
                      "row": 0,
                      "text": "규격"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 3,
                      "row": 0,
                      "text": "단위"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 5,
                      "row": 0,
                      "text": "단가"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 4,
                      "row": 0,
                      "text": "수량"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 6,
                      "row": 0,
                      "text": "금액"
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 7,
                      "row": 0,
                      "text": "비고"
                    }
                  ]
                },
                "footer": {
                  "width": "100%",
                  "name": null,
                  "rowCount": 2,
                  "cellStyles": {},
                  "rows": [
                    {
                      "height": "30px"
                    },
                    {
                      "height": "100px"
                    }
                  ],
                  "cells": [
                    {
                      "r": 0,
                      "c": 0,
                      "colspan": 4,
                      "styles": {
                        "borderLeft": "2px solid #000",
                        "borderRight": "0",
                        "borderTop": "2px solid #000",
                        "borderBottom": "2px solid #000"
                      }
                    },
                    {
                      "r": 0,
                      "c": 4,
                      "styles": {
                        "borderLeft": "2px solid #000",
                        "borderRight": "0",
                        "borderTop": "2px solid #000",
                        "borderBottom": "2px solid #000"
                      }
                    },
                    {
                      "r": 0,
                      "c": 5,
                      "styles": {
                        "borderLeft": "2px solid #000",
                        "borderRight": "0",
                        "borderTop": "2px solid #000",
                        "borderBottom": "2px solid #000"
                      }
                    },
                    {
                      "r": 0,
                      "c": 6,
                      "styles": {
                        "cellAlign": "right",
                        "paddingRight": "3px",
                        "borderLeft": "2px solid #000",
                        "borderRight": "0",
                        "borderTop": "2px solid #000",
                        "borderBottom": "2px solid #000"
                      }
                    },
                    {
                      "r": 0,
                      "c": 7,
                      "styles": {
                        "borderLeft": "2px solid #000",
                        "borderRight": "2px solid #000",
                        "borderTop": "2px solid #000",
                        "borderBottom": "2px solid #000"
                      }
                    },
                    {
                      "r": 1,
                      "c": 0,
                      "colspan": 8,
                      "styles": {
                        "borderLeft": "2px solid #000",
                        "borderRight": "2px solid #000",
                        "borderTop": "0",
                        "borderBottom": "2px solid #000"
                      }
                    }
                  ],
                  "items": [
                    {
                      "type": "text",
                      "name": "",
                      "col": 0,
                      "row": 0,
                      "text": "합               계"
                    },
                    {
                      "type": "cbox",
                      "width": "100%",
                      "height": 100,
                      "name": "",
                      "col": 0,
                      "row": 1,
                      "itemGap": 4,
                      "items": [
                        {
                          "type": "text",
                          "name": "",
                          "left": 0,
                          "text": "※ 특기사항",
                          "styles": {
                            "fontWeight": "bold",
                            "__tag_": {}
                          }
                        }
                      ]
                    },
                    {
                      "type": "summary",
                      "name": "",
                      "col": 6,
                      "row": 0,
                      "expression": "sum(Amount)"
                    },
                    {
                      "type": "summary",
                      "name": "",
                      "col": 4,
                      "row": 0,
                      "numberFormat": "#,##0.0",
                      "expression": "sum(Quantity)"
                    },
                    {
                      "type": "summary",
                      "name": "",
                      "col": 5,
                      "row": 0,
                      "expression": "sum(UnitPrice)"
                    }
                  ]
                },
                "dataRow": {
                  "width": "100%",
                  "name": null,
                  "rowCount": 1,
                  "minRowHeight": "22px",
                  "cellStyles": {},
                  "rows": [
                    {}
                  ],
                  "cells": [
                    {
                      "r": 0,
                      "c": 0,
                      "styles": {
                        "borderLeft": "2px solid #000"
                      }
                    },
                    {
                      "r": 0,
                      "c": 6,
                      "styles": {
                        "cellAlign": "right",
                        "paddingRight": "3px"
                      }
                    },
                    {
                      "r": 0,
                      "c": 7,
                      "styles": {
                        "borderRight": "2px solid #000"
                      }
                    }
                  ],
                  "items": [
                    {
                      "type": "text",
                      "value": "%{ino}",
                      "name": "",
                      "col": 0,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "Item",
                      "name": "",
                      "col": 1,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "Standard",
                      "name": "",
                      "col": 2,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "Quantity",
                      "name": "",
                      "col": 4,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "Unit",
                      "name": "",
                      "col": 3,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "Amount",
                      "name": "",
                      "col": 6,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "UnitPrice",
                      "name": "",
                      "col": 5,
                      "row": 0,
                      "text": "Text"
                    },
                    {
                      "type": "text",
                      "value": "Comment",
                      "name": "",
                      "col": 7,
                      "row": 0,
                      "text": "Text"
                    }
                  ]
                }
              }
            ]
          },
          "groups": [],
          "header": {
            "type": "stack",
            "width": "100%",
            "name": null,
            "styles": {
              "paddingTop": "20px",
              "paddingBottom": "15px",
              "__tag_": {}
            },
            "items": [
              {
                "type": "text",
                "name": "",
                "text": "견    적    서",
                "styles": {
                  "fontSize": "25px",
                  "fontWeight": "bold",
                  "borderBottom": "2px solid #000",
                  "__tag_": {}
                }
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
            "name": null,
            "items": [
              {
                "type": "table",
                "width": "100%",
                "name": "",
                "rowCount": 4,
                "minRowHeight": "30px",
                "cellStyles": {},
                "rows": [
                  {},
                  {},
                  {},
                  {}
                ],
                "cells": [
                  {
                    "r": 0,
                    "c": 0,
                    "styles": {
                      "borderLeft": "2px solid #000",
                      "borderTop": "2px solid #000"
                    }
                  },
                  {
                    "r": 0,
                    "c": 1,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderTop": "2px solid #000"
                    }
                  },
                  {
                    "r": 0,
                    "c": 2,
                    "styles": {
                      "borderTop": "2px solid #000"
                    }
                  },
                  {
                    "r": 0,
                    "c": 3,
                    "colspan": 3,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderRight": "2px solid #000",
                      "borderTop": "2px solid #000"
                    }
                  },
                  {
                    "r": 1,
                    "c": 0,
                    "styles": {
                      "borderLeft": "2px solid #000"
                    }
                  },
                  {
                    "r": 1,
                    "c": 1,
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "r": 1,
                    "c": 3,
                    "colspan": 3,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderRight": "2px solid #000"
                    }
                  },
                  {
                    "r": 2,
                    "c": 0,
                    "styles": {
                      "borderLeft": "2px solid #000"
                    }
                  },
                  {
                    "r": 2,
                    "c": 1,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "paddingRight": ""
                    }
                  },
                  {
                    "r": 2,
                    "c": 3,
                    "colspan": 3,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderRight": "2px solid #000"
                    }
                  },
                  {
                    "r": 3,
                    "c": 0,
                    "styles": {
                      "borderLeft": "2px solid #000",
                      "borderBottom": "2px solid #000"
                    }
                  },
                  {
                    "r": 3,
                    "c": 1,
                    "styles": {
                      "cellAlign": "right",
                      "paddingRight": "5px",
                      "borderBottom": "2px solid #000"
                    }
                  },
                  {
                    "r": 3,
                    "c": 2,
                    "styles": {
                      "borderBottom": "2px solid #000"
                    }
                  },
                  {
                    "r": 3,
                    "c": 3,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderBottom": "2px solid #000"
                    }
                  },
                  {
                    "r": 3,
                    "c": 4,
                    "styles": {
                      "borderBottom": "2px solid #000"
                    }
                  },
                  {
                    "r": 3,
                    "c": 5,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderRight": "2px solid #000",
                      "borderBottom": "2px solid #000"
                    }
                  }
                ],
                "colCount": 6,
                "columns": [
                  {
                    "width": "15%"
                  },
                  {
                    "width": "45%"
                  },
                  {
                    "width": "15%"
                  },
                  {
                    "width": "15%"
                  },
                  {
                    "width": "15%"
                  },
                  {
                    "width": "15%"
                  }
                ],
                "items": [
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 0,
                    "text": "거래처명"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 1,
                    "text": "작성일자"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 2,
                    "text": "공 사 명"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 3,
                    "text": "합계금액"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 2,
                    "row": 0,
                    "text": "회사명"
                  },
                  {
                    "type": "text",
                    "height": 16,
                    "name": "",
                    "col": 2,
                    "row": 1,
                    "text": "대표자"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 2,
                    "row": 2,
                    "text": "사업자 주소"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 2,
                    "row": 3,
                    "text": "TEL"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 4,
                    "row": 3,
                    "text": "FAX"
                  },
                  {
                    "type": "text",
                    "value": "Customer",
                    "name": "",
                    "col": 1,
                    "row": 0,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "DevelopmentCorporation",
                    "name": "",
                    "col": 1,
                    "row": 2,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "Company",
                    "name": "",
                    "col": 3,
                    "row": 0,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "President",
                    "name": "",
                    "col": 3,
                    "row": 1,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "Address",
                    "name": "",
                    "col": 3,
                    "row": 2,
                    "text": "Text",
                    "styles": {
                      "fontSize": "12px",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "value": "Tel",
                    "name": "",
                    "col": 3,
                    "row": 3,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "Fax",
                    "name": "",
                    "col": 5,
                    "row": 3,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "SumAmount",
                    "name": "",
                    "col": 1,
                    "row": 3,
                    "suffix": "원",
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
    "estimate-detail": {
      "type": "band",
      "fields": [
        {
          "fieldName": "Customer",
          "dataType": "text",
          "sample": "(주)파워엑셀연구소",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Company",
          "dataType": "text",
          "sample": "(주)기업연구원",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "President",
          "dataType": "text",
          "format": "",
          "sample": "이응혈",
          "expression": "",
          "description": ""
        },
        {
          "fieldName": "Item",
          "dataType": "text",
          "format": "",
          "sample": "파워엑셀",
          "expression": "",
          "description": ""
        },
        {
          "fieldName": "Standard",
          "dataType": "text",
          "format": "",
          "sample": "GX*10",
          "expression": "",
          "description": ""
        },
        {
          "fieldName": "Unit",
          "dataType": "text",
          "sample": "EA",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Quantity",
          "dataType": "number",
          "sample": "3",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "UnitPrice",
          "dataType": "number",
          "sample": "50000",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Amount",
          "dataType": "number",
          "sample": "150000",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Comment",
          "dataType": "text",
          "sample": "",
          "description": "",
          "dateReader": null
        }
      ]
    },
    "estimate-master": {
      "type": "band",
      "fields": [
        {
          "fieldName": "Customer",
          "dataType": "text",
          "sample": "(주)파워엑셀연구소",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Company",
          "dataType": "text",
          "sample": "(주)기업연구원",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "President",
          "dataType": "text",
          "format": "",
          "sample": "이응혈",
          "expression": "",
          "description": ""
        },
        {
          "fieldName": "DevelopmentCorporation",
          "dataType": "text",
          "sample": "액셀개발공사",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Address",
          "dataType": "text",
          "sample": "서울시 성동구 성수동 373-15 테크원 1201호",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Tel",
          "dataType": "text",
          "sample": "02-468-1234",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "Fax",
          "dataType": "text",
          "sample": "02-468-1235",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "SumAmount",
          "dataType": "number",
          "sample": "513000",
          "description": "",
          "dateReader": null
        }
      ]
    }
  },
  "guid": "2f1b4d42-563a-4bed-b77b-bbf917d9f1d6"
}
  const viewer = new RealReport.ReportViewer('reportContainer', report);
  viewer.dataSet = {
    "estimate-master": {
        values: ${estimateMasters}
    },
    "estimate-detail": {
        values: ${estimateDetails}
    }
};
  viewer.preview();
}
window.onload = initializeRealReport;
        </script>

    </head>
    <body>
        <h1 style='text-align: center;'>${title}</h1>
        <div id="reportContainer"></div>
    </body>
</html>