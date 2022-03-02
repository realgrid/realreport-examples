var report301 = {
  "report": {
    "name": "reportRoot",
    "paperSize": "A4",
    "paperWidth": "210mm",
    "paperHeight": "297mm",
    "marginLeft": "5mm",
    "marginRight": "5mm",
    "marginTop": "5mm",
    "marginBottom": "5mm"
  },
  "page": {
    "name": "reportPage",
    "pageHeader": {
      "name": "pageHeader"
    },
    "reportHeader": {
      "name": "reportHeader",
      "width": "100%",
      "height": "70px",
      "styles": {
        "__tag_": {}
      },
      "items": [
        {
          "type": "text",
          "width": "100%",
          "height": "70px",
          "text": "PURCHASE ORDER (발주서)",
          "styles": {
            "fontSize": "30px",
            "fontWeight": "bold",
            "__tag_": {},
            "borderLeft": "1px solid #000",
            "borderRight": "1px solid #000",
            "borderTop": "1px solid #000"
          }
        }
      ]
    },
    "reportFooter": {
      "name": "reportFooter",
      "height": 61
    },
    "pageFooter": {
      "name": "pageFooter",
      "items": [
        {
          "type": "rbox",
          "width": "300px",
          "name": "",
          "itemsAlign": "middle",
          "itemGap": 4,
          "items": [
            {
              "type": "text",
              "value": "",
              "name": "",
              "text": "Page : "
            },
            {
              "type": "text",
              "value": "${page}",
              "name": "",
              "text": "Text"
            },
            {
              "type": "text",
              "name": "",
              "text": "/",
              "styles": {
                "paddingLeft": "3px",
                "paddingRight": "3px"
              }
            },
            {
              "type": "text",
              "value": "${pages}",
              "name": "",
              "text": "Text"
            }
          ]
        }
      ]
    },
    "body": {
      "itemGap": 0,
      "items": [
        {
          "type": "simpleband",
          "data": "orderInfo",
          "width": "100%",
          "height": "600px",
          "name": "",
          "repeatMasterRow": true,
          "repeatDetailHeader": false,
          "detail": {
            "type": "detail",
            "width": "100%",
            "name": "",
            "items": [
              {
                "type": "tableband",
                "data": "orderItem",
                "width": "100%",
                "name": "",
                "masterFields": "pdNo",
                "keyFields": "pdNo",
                "rowsPerMaster": 10,
                "rowsPerPage": 10,
                "repeatDetailFooter": true,
                "endRowCount": 10,
                "endRowMessage": "",
                "detail": {
                  "type": "detail",
                  "width": "100%",
                  "name": ""
                },
                "colCount": 7,
                "columns": [
                  {
                    "width": "80px"
                  },
                  {
                    "width": "150px"
                  },
                  {
                    "width": "100px"
                  },
                  {
                    "width": "100px"
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
                "header": {
                  "width": "100%",
                  "name": null,
                  "rowCount": 3,
                  "cellStyles": {
                    "borderLeft": "1px solid #000",
                    "borderRight": "1px solid #000",
                    "borderTop": "1px solid #000",
                    "borderBottom": "1px solid #000"
                  },
                  "rows": [
                    {
                      "height": "30px"
                    },
                    {
                      "styles": {
                        "backgroundColor": "#d8d8d8"
                      }
                    },
                    {
                      "styles": {
                        "backgroundColor": "#d8d8d8"
                      }
                    }
                  ],
                  "cells": [
                    {
                      "r": 0,
                      "c": 0,
                      "colspan": 7,
                      "styles": {
                        "cellAlign": "left",
                        "borderLeft": "0",
                        "borderRight": "0",
                        "borderTop": "0"
                      }
                    },
                    {
                      "r": 1,
                      "c": 0,
                      "rowspan": 2,
                      "styles": {
                        "borderLeft": ""
                      }
                    },
                    {
                      "r": 1,
                      "c": 1,
                      "rowspan": 2
                    },
                    {
                      "r": 1,
                      "c": 2,
                      "rowspan": 2
                    },
                    {
                      "r": 1,
                      "c": 3,
                      "rowspan": 2
                    },
                    {
                      "r": 1,
                      "c": 4,
                      "rowspan": 2
                    }
                  ],
                  "items": [
                    {
                      "type": "text",
                      "name": "",
                      "col": 0,
                      "row": 0,
                      "text": "1. ITEMS and DESCRIPTION (발주내역)",
                      "styles": {
                        "paddingLeft": "5px",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 0,
                      "row": 1,
                      "text": "No.",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "width": 76,
                      "name": "",
                      "col": 1,
                      "row": 1,
                      "multiLine": true,
                      "text": "자재코드<br>자재내역",
                      "styles": {
                        "fontWeight": "bold",
                        "textAlign": "center",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 2,
                      "row": 1,
                      "text": "수량[단위]",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 3,
                      "row": 1,
                      "text": "단가[단위]",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 4,
                      "row": 1,
                      "text": "구매금액[단위]",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 5,
                      "row": 1,
                      "text": "입고 담당자",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 5,
                      "row": 2,
                      "text": "연락처",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 6,
                      "row": 1,
                      "text": "납기일/플랜트",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "name": "",
                      "col": 6,
                      "row": 2,
                      "text": "저장위치 (정보)",
                      "styles": {
                        "fontWeight": "bold",
                        "__tag_": {}
                      }
                    }
                  ]
                },
                "footer": {
                  "width": "100%",
                  "name": null,
                  "rowCount": 1,
                  "cellStyles": {
                    "borderLeft": "1px solid #000",
                    "borderRight": "1px solid #000",
                    "borderTop": "1px solid #000",
                    "borderBottom": "1px solid #000"
                  },
                  "rows": [
                    {}
                  ],
                  "cells": [
                    {
                      "r": 0,
                      "c": 0,
                      "colspan": 7
                    }
                  ],
                  "items": [
                    {
                      "type": "cbox",
                      "width": "100%",
                      "name": "",
                      "col": 0,
                      "row": 0,
                      "itemGap": 4,
                      "items": [
                        {
                          "type": "rbox",
                          "width": "100%",
                          "name": "",
                          "itemGap": 4,
                          "items": [
                            {
                              "type": "table",
                              "width": "100%",
                              "name": "",
                              "rowCount": 1,
                              "minRowHeight": "12px",
                              "cellStyles": {
                                "borderBottom": "1px solid #000",
                                "borderLeft": "0",
                                "borderRight": "1px solid #000",
                                "borderTop": "0"
                              },
                              "rows": [
                                {
                                  "height": "20px"
                                }
                              ],
                              "cells": [
                                {
                                  "r": 0,
                                  "c": 0,
                                  "colspan": 2,
                                  "styles": {
                                    "cellAlign": "right"
                                  }
                                },
                                {
                                  "r": 0,
                                  "c": 2,
                                  "styles": {
                                    "cellAlign": "right",
                                    "paddingRight": "5px"
                                  }
                                },
                                {
                                  "r": 0,
                                  "c": 3,
                                  "styles": {
                                    "cellAlign": "right",
                                    "paddingRight": "5px"
                                  }
                                }
                              ],
                              "colCount": 4,
                              "columns": [
                                {
                                  "width": "80px"
                                },
                                {
                                  "width": "150px"
                                },
                                {
                                  "width": "200px"
                                },
                                {
                                  "width": "25%"
                                }
                              ],
                              "items": [
                                {
                                  "type": "text",
                                  "name": "",
                                  "col": 0,
                                  "row": 0,
                                  "text": "TOTAL"
                                },
                                {
                                  "type": "text",
                                  "name": "",
                                  "col": 2,
                                  "row": 0,
                                  "text": "부가세 별도"
                                },
                                {
                                  "type": "text",
                                  "data": "orderItem",
                                  "name": "",
                                  "onGetValue": "const dataRow = ctx.report.data.get('orderItem').rowCount;\n  let sumValue = 0;\n  \n  for (let i = 0; i < dataRow - 1; i++) {\n    sumValue += ctx.report.data.get('orderItem').getRowValue(i, 'price') * ctx.report.data.get('orderItem').getRowValue(i, 'quantity');\n  }\n  \n  return sumValue;",
                                  "col": 3,
                                  "row": 0,
                                  "suffix": " KRW",
                                  "text": "Text"
                                }
                              ]
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "20px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "20px",
                              "name": "",
                              "text": "2. CONDITION (발주조건)",
                              "styles": {
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "1) Payment Term (지불조건) : 월 마감후 익월 30일",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "2) Incoterms (인도조건) : 공장 도착도",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "40px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "20px",
                              "name": "",
                              "text": "발주생성 2022-01-07",
                              "styles": {
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "20px",
                              "name": "",
                              "text": "3. REMARKS (특기사항)",
                              "styles": {
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "1) 세금계산서는 구매시스템에서 입고확인이 되면 3일 이내에 발행 바랍니다. (발주서 상단에 기재된 구매담당자 이메일주소로 발행.)",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "2) 세금계산서 비고란에 PO번호 기재 바라며, 세금계산서 발행은 발주서 구매사의 사업자등록번호로 발행 바랍니다.",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "3) 세금계산서 접수는 매월 25일 한입니다. (접수일 이후 발행 되는 세금계산서는 익월로 이행됩니다.)",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "4) 입고시 구매시스템에서 출력한 거래명세서 (PO번호, 납품번호 기재)를 입고담당자에게 전달 바랍니다.(납품번호 없는 입고는 처리되지 않습니다.)",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "5) 납품김한을 엄수 바랍니다.",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "5px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "6) 입고시 거래명세포(납품번호기재) 미첨부나, 세금계산서에 PO번호 기재하지 않을 경우, 귀사에 불이익이 발생 할 수도 있사오니 양지하시기 바랍니다.",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "15px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "paddingLeft": "0px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "15px",
                              "name": "",
                              "text": "(문의 사항은 발주서 상단의 구매 담당자와 협의 하시기 바랍니다.)",
                              "styles": {
                                "fontSize": "12px",
                                "paddingLeft": "15px",
                                "__tag_": {}
                              }
                            }
                          ]
                        },
                        {
                          "type": "rbox",
                          "width": "100%",
                          "height": "20px",
                          "name": "",
                          "right": 0,
                          "itemsAlign": "start",
                          "itemGap": 4,
                          "styles": {
                            "fontSize": "12px",
                            "__tag_": {}
                          },
                          "items": [
                            {
                              "type": "text",
                              "height": "20px",
                              "name": "",
                              "text": "2. CONDITION (발주조건)",
                              "styles": {
                                "paddingLeft": "5px",
                                "__tag_": {}
                              }
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                "dataRow": {
                  "width": "100%",
                  "height": "50px",
                  "name": null,
                  "rowCount": 2,
                  "cellStyles": {
                    "borderLeft": "",
                    "borderRight": "1px solid #000",
                    "borderTop": "1px solid #000",
                    "borderBottom": "1px solid #000"
                  },
                  "rows": [
                    {},
                    {}
                  ],
                  "cells": [
                    {
                      "r": 0,
                      "c": 0,
                      "rowspan": 2,
                      "styles": {
                        "borderLeft": "1px solid #000"
                      }
                    },
                    {
                      "r": 0,
                      "c": 1,
                      "styles": {
                        "borderBottom": "0"
                      }
                    },
                    {
                      "r": 0,
                      "c": 2,
                      "rowspan": 2
                    },
                    {
                      "r": 0,
                      "c": 3,
                      "rowspan": 2
                    },
                    {
                      "r": 0,
                      "c": 4,
                      "rowspan": 2
                    },
                    {
                      "r": 1,
                      "c": 1,
                      "styles": {
                        "borderTop": "0"
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
                      "text": "${ino}"
                    },
                    {
                      "type": "text",
                      "value": "code",
                      "width": "100%",
                      "name": "",
                      "col": 1,
                      "row": 0,
                      "text": "",
                      "styles": {
                        "textAlign": "center",
                        "borderBottom": "0",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "value": "content",
                      "width": "100%",
                      "name": "",
                      "col": 1,
                      "row": 1,
                      "text": "",
                      "styles": {
                        "textAlign": "center",
                        "paddingTop": "0px",
                        "__tag_": {}
                      }
                    },
                    {
                      "type": "text",
                      "value": "quantity",
                      "name": "",
                      "onGetValue": "return `${value} ${ctx.report.data.get('orderItem').getRowValue(row, 'unit')}`;",
                      "col": 2,
                      "row": 0,
                      "text": "5 BOX"
                    },
                    {
                      "type": "text",
                      "value": "price",
                      "name": "",
                      "onGetValue": "",
                      "col": 3,
                      "row": 0,
                      "textFormat": "",
                      "suffix": " KRW",
                      "text": "단가[단위]"
                    },
                    {
                      "type": "text",
                      "value": "price",
                      "name": "",
                      "onGetValue": "const price = ctx.report.data.get('orderItem').getRowValue(row, 'price');\n  const quantity = ctx.report.data.get('orderItem').getRowValue(row, 'quantity');\n  const unit = `${ctx.report.data.get('orderItem').getRowValue(row, 'unitPrice')}`;\n  return price * quantity;",
                      "col": 4,
                      "row": 0,
                      "textFormat": "#,##0",
                      "suffix": " KRW",
                      "text": "구매금액[단위]"
                    },
                    {
                      "type": "text",
                      "value": "damdang",
                      "name": "",
                      "col": 5,
                      "row": 0,
                      "text": "입고 담당자"
                    },
                    {
                      "type": "text",
                      "value": "phone",
                      "name": "",
                      "col": 5,
                      "row": 1,
                      "text": "연락처"
                    },
                    {
                      "type": "text",
                      "value": "payDate",
                      "name": "",
                      "onGetValue": "const plant = ctx.report.data.get('orderItem').getRowValue(row, 'plant');\n  return `${value}/${plant}`",
                      "col": 6,
                      "row": 0,
                      "text": "납기일/플랜트"
                    },
                    {
                      "type": "text",
                      "value": "saveLocation",
                      "width": 80,
                      "name": "",
                      "onGetValue": "const info = ctx.report.data.get('orderItem').getRowValue(row, 'info');\n  return `${value} / ${info}`;",
                      "col": 6,
                      "row": 1,
                      "text": "저장위치 (정보)"
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
            "designBorder": false,
            "styles": {
              "fontSize": "12px",
              "__tag_": {}
            }
          },
          "footer": {
            "type": "stack",
            "width": "100%",
            "name": null,
            "visible": false
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
                "rowCount": 10,
                "minRowHeight": "10px",
                "cellStyles": {
                  "borderLeft": "1px solid #000",
                  "borderRight": "1px solid #000",
                  "borderTop": "1px solid #000",
                  "borderBottom": "1px solid #000"
                },
                "rows": [
                  {
                    "height": "15px"
                  },
                  {
                    "height": "15px"
                  },
                  {},
                  {},
                  {},
                  {},
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
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 0,
                    "c": 1,
                    "rowspan": 2,
                    "colspan": 2,
                    "applyEndStyles": true,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 0,
                    "c": 3,
                    "rowspan": 2
                  },
                  {
                    "r": 0,
                    "c": 4,
                    "rowspan": 2,
                    "colspan": 3,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 1,
                    "c": 0,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 2,
                    "c": 0,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 2,
                    "c": 1,
                    "rowspan": 2,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderLeft": ""
                    }
                  },
                  {
                    "r": 2,
                    "c": 2,
                    "rowspan": 2,
                    "styles": {
                      "cellAlign": "left",
                      "paddingLeft": "5px",
                      "borderLeft": ""
                    }
                  },
                  {
                    "r": 2,
                    "c": 3,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 2,
                    "c": 4,
                    "rowspan": 2,
                    "colspan": 3,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 3,
                    "c": 0,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 3,
                    "c": 3,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 4,
                    "c": 0,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 4,
                    "c": 1,
                    "colspan": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 4,
                    "c": 3,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 4,
                    "c": 4,
                    "colspan": 3,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 5,
                    "c": 0,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 5,
                    "c": 1,
                    "colspan": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 5,
                    "c": 3,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 5,
                    "c": 4,
                    "colspan": 3,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 6,
                    "c": 0,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 6,
                    "c": 1,
                    "rowspan": 2,
                    "colspan": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 6,
                    "c": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 6,
                    "c": 3,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 6,
                    "c": 4,
                    "rowspan": 2,
                    "colspan": 3,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 6,
                    "c": 5,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 6,
                    "c": 6,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 7,
                    "c": 0,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 7,
                    "c": 1,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 7,
                    "c": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 7,
                    "c": 3,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 7,
                    "c": 4,
                    "colspan": 3,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 7,
                    "c": 5,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 7,
                    "c": 6,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 8,
                    "c": 0,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 8,
                    "c": 1,
                    "rowspan": 2,
                    "colspan": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 8,
                    "c": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 8,
                    "c": 3,
                    "styles": {
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 8,
                    "c": 4,
                    "rowspan": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 8,
                    "c": 5,
                    "styles": {
                      "paddingLeft": "5px",
                      "borderBottom": "0"
                    }
                  },
                  {
                    "r": 8,
                    "c": 6,
                    "rowspan": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 9,
                    "c": 0,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 9,
                    "c": 1,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 9,
                    "c": 2,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 9,
                    "c": 3,
                    "styles": {
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 9,
                    "c": 4,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  },
                  {
                    "r": 9,
                    "c": 5,
                    "styles": {
                      "paddingLeft": "5px",
                      "borderTop": "0"
                    }
                  },
                  {
                    "r": 9,
                    "c": 6,
                    "styles": {
                      "paddingLeft": "5px"
                    }
                  }
                ],
                "colCount": 7,
                "columns": [
                  {
                    "width": "80px",
                    "styles": {
                      "cellAlign": "center"
                    }
                  },
                  {
                    "width": "150px",
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "width": "100px"
                  },
                  {
                    "width": "80px"
                  },
                  {
                    "width": "120px",
                    "styles": {
                      "cellAlign": "left"
                    }
                  },
                  {
                    "width": "80px"
                  },
                  {
                    "width": "27.1%"
                  }
                ],
                "items": [
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 0,
                    "text": "PO 번호",
                    "styles": {
                      "fontWeight": "bold",
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 1,
                    "text": "PO No.",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 2,
                    "text": "구매 사업장",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 3,
                    "text": "From",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 4,
                    "text": "주소",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 5,
                    "text": "Address",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 6,
                    "text": "구매발주자",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 7,
                    "text": "Purchaser",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 8,
                    "text": "전화",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 0,
                    "row": 9,
                    "text": "Tel",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "value": "poNo",
                    "name": "",
                    "col": 1,
                    "row": 0,
                    "text": ""
                  },
                  {
                    "type": "text",
                    "value": "fromAddress",
                    "name": "",
                    "col": 1,
                    "row": 2,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "licenseNo",
                    "name": "",
                    "col": 2,
                    "row": 2,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "address",
                    "name": "",
                    "col": 1,
                    "row": 4,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "detailAddress",
                    "name": "",
                    "col": 1,
                    "row": 5,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "purchaser",
                    "name": "",
                    "col": 1,
                    "row": 6,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "tel",
                    "name": "",
                    "col": 1,
                    "row": 8,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 0,
                    "text": "P/O Date",
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
                    "text": "공급업체",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 3,
                    "text": "To",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 4,
                    "text": "주소",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 5,
                    "text": "Address",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 6,
                    "text": "담당자",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 7,
                    "text": "Seller",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 8,
                    "text": "전화",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 3,
                    "row": 9,
                    "text": "Tel",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "value": "poDate",
                    "name": "",
                    "col": 4,
                    "row": 0,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "toAddress",
                    "name": "",
                    "col": 4,
                    "row": 2,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "customerAddress",
                    "name": "",
                    "col": 4,
                    "row": 4,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "customerDetailAddress",
                    "name": "",
                    "col": 4,
                    "row": 5,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "seller",
                    "name": "",
                    "col": 4,
                    "row": 6,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "value": "tel",
                    "name": "",
                    "col": 4,
                    "row": 8,
                    "text": "Text"
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 5,
                    "row": 8,
                    "text": "팩스",
                    "styles": {
                      "fontWeight": "bold",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "name": "",
                    "col": 5,
                    "row": 9,
                    "text": "Fax",
                    "styles": {
                      "verticalAlign": "middle",
                      "__tag_": {}
                    }
                  },
                  {
                    "type": "text",
                    "value": "fax",
                    "name": "",
                    "col": 6,
                    "row": 8,
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
    "orderInfo": {
      "type": "band",
      "fields": [
        {
          "fieldName": "poNo",
          "dataType": "text",
          "sample": "PO220100019",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "fromAddress",
          "dataType": "text",
          "sample": "(주)우리테크인터내셔날",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "licenseNo",
          "dataType": "text",
          "sample": "104-86-21562",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "address",
          "dataType": "text",
          "sample": "(123) 성남시 분당구 운중로 135",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "detailAddress",
          "dataType": "text",
          "sample": "더원스퀘어 301, 304호",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "purchaser",
          "dataType": "text",
          "sample": "기술지원팀 wooritech@wooritech.com",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "tel",
          "dataType": "text",
          "sample": "0505-325-8080",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "poDate",
          "dataType": "text",
          "sample": "2022-01-07",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "toAddress",
          "dataType": "text",
          "sample": "(주)우리기술인터내셔날",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "customerAddress",
          "dataType": "text",
          "sample": "성남시 분당구 운중로 123",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "customerDetailAddress",
          "dataType": "text",
          "sample": "우리빌딩 601호",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "seller",
          "dataType": "text",
          "sample": "홍길동",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "customerTel",
          "dataType": "text",
          "sample": "010-1111-2222",
          "description": "",
          "dateReader": null
        }
      ]
    },
    "orderItem": {
      "type": "band",
      "fields": [
        {
          "fieldName": "poNo",
          "dataType": "text",
          "sample": "PO220100019",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "code",
          "dataType": "text",
          "sample": "1600010283",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "content",
          "dataType": "text",
          "sample": "테스트 노트북",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "quantity",
          "dataType": "number",
          "sample": "1",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "unit",
          "dataType": "text",
          "sample": "EA",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "price",
          "dataType": "number",
          "sample": "1100000",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "unitPrice",
          "dataType": "text",
          "sample": "KRW",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "damdang",
          "dataType": "text",
          "sample": "홍길동",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "phone",
          "dataType": "text",
          "sample": "010-1234-5678",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "payDate",
          "dataType": "text",
          "sample": "2022-01-14",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "plant",
          "dataType": "text",
          "sample": "공통",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "saveLocation",
          "dataType": "text",
          "sample": "본사 3층(운중동)",
          "description": "",
          "dateReader": null
        },
        {
          "fieldName": "info",
          "dataType": "text",
          "sample": "",
          "description": "",
          "dateReader": null
        }
      ]
    }
  },
  "guid": "e9674c09-31d7-4837-a416-0b6c6bff257a"
}

var data301 = {
  "orderItem": {
    "type": "band",
    "values": [
      {
          "poNo": "PO220100019",
          "code": "1600010283",
          "content": "테스트 노트북",
          "quantity": 1,
          "unit": "EA",
          "price": 1100000,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "1600010280",
          "content": "사무용추천PC_GTX2080",
          "quantity": 2,
          "unit": "EA",
          "price": 1200000,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "1600010279",
          "content": "삼성 노트북 NT1024XDA 시리즈",
          "quantity": 2,
          "unit": "EA",
          "price": 960000,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 1,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 2,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 3,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 1,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 2,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 3,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 4,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      },
      {
          "poNo": "PO220100019",
          "code": "NO_CODE",
          "content": "카누 0.9g",
          "quantity": 5,
          "unit": "BOX",
          "price": 1200,
          "unitPrice": "KRW",
          "damdang": "홍길동",
          "phone": "010-1234-5678",
          "payDate": "2022-01-14",
          "plant": "공통",
          "saveLocation": "본사 3층(운중동)",
          "info": ""
      }
    ]
  },
  "orderInfo": {
    "type": "band",
    "values": [{
      "poNo": "PO220100019",
      "fromAddress": "(주)우리테크인터내셔날",
      "licenseNo": "104-86-21562",
      "address": "(123) 성남시 분당구 운중로 135",
      "detailAddress": "더원스퀘어 301, 304호",
      "purchaser": "기술지원팀 wooritech@wooritech.com",
      "tel": "0505-325-8080",
      "poDate": "2022-01-07",
      "toAddress": "(주)우리기술인터내셔날",
      "customerAddress": "성남시 분당구 운중로 123",
      "customerDetailAddress": "우리빌딩 601호",
      "seller": "홍길동",
      "customerTel": "010-1111-2222"
    }]
  }
}