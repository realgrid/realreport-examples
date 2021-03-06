var sampleReport200 = {
    "form": {
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
                "items": [
                    {
                        "type": "text",
                        "value": "${date}",
                        "name": "",
                        "right": 0,
                        "dateFormat": "yyyy/MM/dd",
                        "text": ""
                    }
                ]
            },
            "reportHeader": {
                "name": "reportHeader"
            },
            "reportFooter": {
                "name": "reportFooter"
            },
            "pageFooter": {
                "name": "pageFooter",
                "items": [
                    {
                        "type": "text",
                        "value": "${pages}",
                        "width": 37,
                        "name": "",
                        "right": 0,
                        "text": "",
                        "styles": {
                            "textAlign": "left",
                            "border": "",
                            "__tag_": {}
                        }
                    },
                    {
                        "type": "text",
                        "name": "",
                        "right": "38px",
                        "text": "/"
                    },
                    {
                        "type": "text",
                        "value": "${page}",
                        "name": "",
                        "right": "45px",
                        "text": "Text",
                        "styles": {
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
                        "type": "simpleband",
                        "data": "customer",
                        "width": "100%",
                        "name": "",
                        "sectionCount": 2,
                        "sectionGap": 50,
                        "rowsPerPage": 6,
                        "detail": {
                            "type": "detail",
                            "width": "100%",
                            "name": ""
                        },
                        "groups": [],
                        "header": {
                            "type": "stack",
                            "name": "bandHeader",
                            "width": 350.4960629921259
                        },
                        "footer": {
                            "type": "stack",
                            "name": "bandPageFooter",
                            "width": "100%"
                        },
                        "dataRow": {
                            "type": "stack",
                            "name": "bandrow",
                            "width": "100%",
                            "onGetStyles": "",
                            "styles": {
                                "paddingRight": "px",
                                "paddingBottom": "30px",
                                "borderBottom": "",
                                "__tag_": {}
                            },
                            "styleCallback": null,
                            "items": [
                                {
                                    "type": "stack",
                                    "width": "100%",
                                    "height": 105,
                                    "name": "",
                                    "styles": {
                                        "paddingLeft": "4px",
                                        "paddingTop": "4px",
                                        "paddingRight": "4px",
                                        "paddingBottom": "4px",
                                        "border": "1px solid",
                                        "__tag_": {}
                                    },
                                    "items": [
                                        {
                                            "type": "text",
                                            "value": "PostalCode",
                                            "name": "",
                                            "left": "0px",
                                            "top": 22,
                                            "numberFormat": "",
                                            "text": "Text",
                                            "styles": {
                                                "fontSize": "12px",
                                                "__tag_": {}
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "value": "Address1",
                                            "name": "",
                                            "left": "0px",
                                            "top": 42,
                                            "text": "Text",
                                            "styles": {
                                                "fontSize": "12px",
                                                "__tag_": {},
                                                "textAlign": "left"
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "value": "ContactName",
                                            "name": "",
                                            "right": "50px",
                                            "bottom": "0px",
                                            "suffix": " ??? ???",
                                            "text": "Text",
                                            "styles": {
                                                "fontSize": "14px",
                                                "fontWeight": "bold",
                                                "__tag_": {}
                                            }
                                        },
                                        {
                                            "type": "text",
                                            "value": "Address2",
                                            "name": "",
                                            "left": "0px",
                                            "top": 58,
                                            "text": "Text",
                                            "styles": {
                                                "fontSize": "12px",
                                                "textAlign": "left"
                                            }
                                        },
                                        {
                                            "type": "barcode",
                                            "value": "PostalCode",
                                            "width": 100,
                                            "height": 17,
                                            "name": "",
                                            "left": "200px",
                                            "top": "0px",
                                            "format": "code39",
                                            "text": "Cosmos"
                                        },
                                        {
                                            "type": "text",
                                            "value": "PrintDate",
                                            "name": "",
                                            "left": 12,
                                            "top": "0px",
                                            "prefix": "???????????? ",
                                            "suffix": "  ",
                                            "text": "",
                                            "styles": {
                                                "fontSize": "12px",
                                                "border": "1px solid black"
                                            }
                                        }
                                    ]
                                }
                            ]
                        },
                        "styles": {
                            "paddingRight": "px",
                            "paddingBottom": "30px",
                            "__tag_": {}
                        }
                    }
                ]
            }
        },
        "assets": {
            "/": []
        },
        "data": {
            "mail label": {
                "type": "band",
                "fields": [
                    {
                        "fieldName": "PostalCode",
                        "dataType": "text",
                        "sample": "742-170",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Address",
                        "dataType": "text",
                        "sample": "????????? 78-3 ????????? ????????????",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ContactName",
                        "dataType": "text",
                        "sample": "?????????",
                        "dateReader": null
                    }
                ]
            },
            "customer": {
                "type": "band",
                "fields": [
                    {
                        "fieldName": "PostalCode",
                        "dataType": "number",
                        "sample": "61881",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Address1",
                        "dataType": "text",
                        "sample": "??????????????? ????????? ??????????????????9??? 36",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Address2",
                        "dataType": "text",
                        "sample": "",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ContactName",
                        "dataType": "text",
                        "sample": "?????????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "PrintDate",
                        "dataType": "text",
                        "sample": "2022-03-29",
                        "description": "",
                        "dateReader": null
                    }
                ]
            }
        },
        "guid": "7eb76d42-9e71-4a76-b3c6-77ca1645d6d1"
    },
    "dataSet": {
        "customer": {
            "type": "band",
            "values": [
                {
                    "PostalCode": 61881,
                    "Address1": "??????????????? ????????? ??????????????????9??? 36",
                    "Address2": "",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13207,
                    "Address1": "????????? ????????? ????????? ??????????????? 124",
                    "Address2": "(????????????, SKn???????????????) ??????????????? 1501, 1502???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-30"
                },
                {
                    "PostalCode": 13707,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "1489-3",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-28"
                },
                {
                    "PostalCode": 13786,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "1489-3 ???????????? ??????1???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-24"
                },
                {
                    "PostalCode": 18515,
                    "Address1": "????????? ????????? ????????? ????????? 218-1",
                    "Address2": "",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-21"
                },
                {
                    "PostalCode": 13461,
                    "Address1": "????????? ????????? ????????? ????????? 135",
                    "Address2": "(?????????, ???????????????) 304???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-20"
                },
                {
                    "PostalCode": 13130,
                    "Address1": "??????????????? ????????? ???????????? 120",
                    "Address2": "(?????????, ??????????????????) 14???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 15205,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "235 ?????? IT??????1203,1204???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 15570,
                    "Address1": "??????????????? ????????? ??????????????? 101",
                    "Address2": "(?????????, (???)????????????) 8,9,10???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 22044,
                    "Address1": "????????? ????????? ????????? ?????????",
                    "Address2": "1420-11 (???)?????????",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 64231,
                    "Address1": "???????????? ????????? ????????? ???????????? 56",
                    "Address2": "????????????(????????? 71-2)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 63003,
                    "Address1": "???????????? ????????? ?????????",
                    "Address2": "541-9 ????????????????????????????????? 2??? 205,506???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 46340,
                    "Address1": "????????? ????????? ????????? ??????????????? 660",
                    "Address2": "???????????????1 A-1003???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 48058,
                    "Address1": "??????????????? ???????????? ???????????? 30",
                    "Address2": "(??????, ??????????????????)1702???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-28"
                },
                {
                    "PostalCode": 48058,
                    "Address1": "??????????????? ???????????? ???????????? 30",
                    "Address2": "(??????, ??????????????????)1702,1703???",
                    "ContactName": "??????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 12989,
                    "Address1": "????????? ????????? ??????????????? 126 3???",
                    "Address2": "(?????????, ????????????)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 51393,
                    "Address1": "???????????? ????????? ????????? ????????? 372 ???????????? 3???",
                    "Address2": "(?????????, ????????????)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 16101,
                    "Address1": "??????????????? ????????? ????????? 620",
                    "Address2": "(?????????, ??????????????????) 7???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 14512,
                    "Address1": "??????????????? ?????? ????????? 36",
                    "Address2": "(?????????1???, ??????????????????) 11,12???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13839,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "101-2",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 24465,
                    "Address1": "????????? ????????? ????????? ??????1??? 130",
                    "Address2": "(?????????)",
                    "ContactName": "?????????",
                    "PrintDate": "2020-03-30"
                },
                {
                    "PostalCode": 13518,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "87-2 ???????????? 5???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13579,
                    "Address1": "??????????????? ????????? ?????????96??? 23",
                    "Address2": "?????????????????????",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 51391,
                    "Address1": "???????????? ????????? ????????? ?????????48?????? 54",
                    "Address2": "??????????????????????????? ??????????????? 405???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 30090,
                    "Address1": "??????????????? ?????? ?????????",
                    "Address2": "78-4 3???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 36025,
                    "Address1": "???????????? ????????? ????????? ????????? 242",
                    "Address2": ", 201(?????????)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 16775,
                    "Address1": "??????????????? ????????? ????????? 68",
                    "Address2": "(?????????, ??????????????????) 1???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 64165,
                    "Address1": "???????????? ????????? ?????????",
                    "Address2": "39-13??????",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13836,
                    "Address1": "??????????????? ????????? ????????????43??? 88",
                    "Address2": "????????????????????? 12???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 58121,
                    "Address1": "???????????? ????????? ????????? ????????? 61-19",
                    "Address2": "(??????)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 17299,
                    "Address1": "??????????????? ???????????? ????????? 775",
                    "Address2": "(?????????3???, ???????????????????????????) 2??? 901???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13510,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "751?????? 5???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13042,
                    "Address1": "??????????????? ????????? ???????????? 68-14",
                    "Address2": "(?????????)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 32542,
                    "Address1": "???????????? ????????? ????????? 12",
                    "Address2": "(?????????) ???????????? 3???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 16827,
                    "Address1": "????????? ????????? ????????? ????????? 17",
                    "Address2": "(?????????)",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 17327,
                    "Address1": "??????????????? ???????????? ??????????????? 67",
                    "Address2": "(????????????, ????????????)1706???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 15625,
                    "Address1": "??????????????? ????????? ???????????????41??? 21-24",
                    "Address2": "(?????????) 501???",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 13590,
                    "Address1": "??????????????? ????????? ?????????",
                    "Address2": "159-1 ???????????? 1802",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                },
                {
                    "PostalCode": 51711,
                    "Address1": "????????????  ????????? ????????? ?????????",
                    "Address2": "542-5",
                    "ContactName": "?????????",
                    "PrintDate": "2022-03-29"
                }
            ]
        }
    }
};

var sampleReport205 = {
    "form": {
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
                "items": [
                    {
                        "type": "rbox",
                        "name": "",
                        "right": 0,
                        "itemGap": 4,
                        "items": [
                            {
                                "type": "text",
                                "name": "",
                                "text": "Date:"
                            },
                            {
                                "type": "text",
                                "value": "${date}",
                                "name": "",
                                "dateFormat": "yyyy/MM/dd",
                                "text": "Text"
                            }
                        ]
                    }
                ]
            },
            "reportHeader": {
                "name": "reportHeader",
                "height": 19,
                "visible": false
            },
            "reportFooter": {
                "name": "reportFooter"
            },
            "pageFooter": {
                "name": "pageFooter"
            },
            "body": {
                "itemGap": 0,
                "items": [
                    {
                        "type": "simpleband",
                        "data": "master-detail-01",
                        "width": "100%",
                        "name": "",
                        "rowsPerPage": 1,
                        "detail": {
                            "type": "detail",
                            "width": "100%",
                            "name": "",
                            "styles": {
                                "paddingTop": "px",
                                "__tag_": {}
                            },
                            "items": [
                                {
                                    "type": "tableband",
                                    "data": "master-detail-02",
                                    "width": "100%",
                                    "name": "",
                                    "pageBreak": "after",
                                    "masterFields": "OrderID",
                                    "keyFields": "OrderID",
                                    "detail": {
                                        "type": "detail",
                                        "width": "100%",
                                        "name": ""
                                    },
                                    "colCount": 6,
                                    "columns": [
                                        {
                                            "width": "10%"
                                        },
                                        {
                                            "width": "20%"
                                        },
                                        {
                                            "width": "15%"
                                        },
                                        {
                                            "width": "10%"
                                        },
                                        {
                                            "width": "10%"
                                        },
                                        {
                                            "width": "20%"
                                        }
                                    ],
                                    "header": {
                                        "name": "bandHeader",
                                        "width": "100%",
                                        "rowCount": 1,
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
                                                    "backgroundColor": "#112d30"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 1,
                                                "styles": {
                                                    "backgroundColor": "#112d30ff"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 2,
                                                "styles": {
                                                    "backgroundColor": "#112d30ff"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 3,
                                                "styles": {
                                                    "backgroundColor": "#112d30ff"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 4,
                                                "styles": {
                                                    "backgroundColor": "#112d30ff"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 5,
                                                "styles": {
                                                    "backgroundColor": "#112d30ff"
                                                }
                                            }
                                        ],
                                        "items": [
                                            {
                                                "type": "text",
                                                "name": "",
                                                "col": 0,
                                                "row": 0,
                                                "text": "No.",
                                                "styles": {
                                                    "fontWeight": "bold",
                                                    "color": "#ecfcfeff",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "name": "",
                                                "col": 1,
                                                "row": 0,
                                                "text": "Product",
                                                "styles": {
                                                    "fontWeight": "bold",
                                                    "color": "#ecfcfeff",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "name": "",
                                                "col": 2,
                                                "row": 0,
                                                "text": "Unit price",
                                                "styles": {
                                                    "fontWeight": "bold",
                                                    "color": "#ecfcfeff",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "name": "",
                                                "col": 3,
                                                "row": 0,
                                                "text": "Quantity",
                                                "styles": {
                                                    "fontWeight": "bold",
                                                    "color": "#ecfcfeff",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "name": "",
                                                "col": 4,
                                                "row": 0,
                                                "text": "Discount",
                                                "styles": {
                                                    "fontWeight": "bold",
                                                    "color": "#ecfcfeff",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "name": "",
                                                "col": 5,
                                                "row": 0,
                                                "text": "Extended price",
                                                "styles": {
                                                    "fontWeight": "bold",
                                                    "color": "#ecfcfeff",
                                                    "__tag_": {}
                                                }
                                            }
                                        ]
                                    },
                                    "footer": {
                                        "name": "bandFooter",
                                        "width": "100%",
                                        "rowCount": 1,
                                        "cellStyles": {},
                                        "rows": [
                                            {}
                                        ],
                                        "cells": [
                                            {
                                                "r": 0,
                                                "c": 0,
                                                "colspan": 6,
                                                "styles": {
                                                    "cellAlign": "right",
                                                    "paddingTop": "10px",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            }
                                        ],
                                        "items": [
                                            {
                                                "type": "table",
                                                "width": "240px",
                                                "name": "",
                                                "col": 0,
                                                "row": 0,
                                                "rowCount": 3,
                                                "minRowHeight": "35px",
                                                "cellStyles": {
                                                    "paddingBottom": "",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                },
                                                "rows": [
                                                    {},
                                                    {},
                                                    {}
                                                ],
                                                "cells": [
                                                    {
                                                        "r": 0,
                                                        "c": 0,
                                                        "styles": {
                                                            "cellAlign": "right",
                                                            "backgroundColor": "",
                                                            "borderTop": "solid",
                                                            "borderBottom": "solid"
                                                        }
                                                    },
                                                    {
                                                        "r": 0,
                                                        "c": 1,
                                                        "styles": {
                                                            "cellAlign": "right",
                                                            "borderTop": "solid",
                                                            "borderBottom": "solid"
                                                        }
                                                    },
                                                    {
                                                        "r": 1,
                                                        "c": 0,
                                                        "styles": {
                                                            "cellAlign": "right",
                                                            "backgroundColor": "",
                                                            "borderTop": "",
                                                            "borderBottom": ""
                                                        }
                                                    },
                                                    {
                                                        "r": 1,
                                                        "c": 1,
                                                        "styles": {
                                                            "cellAlign": "right",
                                                            "borderTop": "",
                                                            "borderBottom": ""
                                                        }
                                                    },
                                                    {
                                                        "r": 2,
                                                        "c": 0,
                                                        "styles": {
                                                            "cellAlign": "right",
                                                            "backgroundColor": "#d7f5faff"
                                                        }
                                                    },
                                                    {
                                                        "r": 2,
                                                        "c": 1,
                                                        "styles": {
                                                            "cellAlign": "right",
                                                            "backgroundColor": "#d7f5faff"
                                                        }
                                                    }
                                                ],
                                                "colCount": 2,
                                                "columns": [
                                                    {
                                                        "width": "20%"
                                                    },
                                                    {
                                                        "width": "20%"
                                                    }
                                                ],
                                                "items": [
                                                    {
                                                        "type": "text",
                                                        "name": "",
                                                        "col": 0,
                                                        "row": 0,
                                                        "text": "Total :",
                                                        "styles": {
                                                            "fontWeight": "bold",
                                                            "__tag_": {}
                                                        }
                                                    },
                                                    {
                                                        "type": "text",
                                                        "name": "",
                                                        "col": 0,
                                                        "row": 1,
                                                        "text": "Freight :",
                                                        "styles": {
                                                            "fontWeight": "bold",
                                                            "__tag_": {}
                                                        }
                                                    },
                                                    {
                                                        "type": "text",
                                                        "name": "",
                                                        "col": 0,
                                                        "row": 2,
                                                        "text": "Total Amount :",
                                                        "styles": {
                                                            "fontWeight": "bold",
                                                            "__tag_": {}
                                                        }
                                                    },
                                                    {
                                                        "type": "summary",
                                                        "name": "",
                                                        "col": 1,
                                                        "row": 0,
                                                        "prefix": "???",
                                                        "expression": "sum(ExtendedPrice)",
                                                        "styles": {
                                                            "fontFamily": "Arial",
                                                            "__tag_": {}
                                                        }
                                                    },
                                                    {
                                                        "type": "summary",
                                                        "name": "",
                                                        "col": 1,
                                                        "row": 1,
                                                        "prefix": "???",
                                                        "expression": "master:Freight",
                                                        "styles": {
                                                            "fontFamily": "Arial",
                                                            "__tag_": {}
                                                        }
                                                    },
                                                    {
                                                        "type": "summary",
                                                        "name": "",
                                                        "col": 1,
                                                        "row": 2,
                                                        "prefix": "???",
                                                        "expression": "sum(ExtendedPrice) + master:Freight",
                                                        "styles": {
                                                            "fontFamily": "Arial",
                                                            "__tag_": {}
                                                        }
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    "dataRow": {
                                        "name": "bandRow",
                                        "width": "100%",
                                        "height": "25px",
                                        "rowCount": 1,
                                        "cellStyles": {
                                            "borderLeft": "none",
                                            "borderRight": "none",
                                            "borderTop": "none"
                                        },
                                        "rows": [
                                            {}
                                        ],
                                        "cells": [
                                            {
                                                "r": 0,
                                                "c": 0,
                                                "styles": {
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 1,
                                                "styles": {
                                                    "cellAlign": "center",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 2,
                                                "styles": {
                                                    "cellAlign": "center",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 3,
                                                "styles": {
                                                    "cellAlign": "center",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 4,
                                                "styles": {
                                                    "cellAlign": "center",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            },
                                            {
                                                "r": 0,
                                                "c": 5,
                                                "styles": {
                                                    "cellAlign": "center",
                                                    "borderLeft": "none",
                                                    "borderRight": "none",
                                                    "borderTop": "none",
                                                    "borderBottom": "none"
                                                }
                                            }
                                        ],
                                        "items": [
                                            {
                                                "type": "text",
                                                "data": "",
                                                "value": "${ino}",
                                                "name": "",
                                                "col": 0,
                                                "row": 0,
                                                "text": "Text"
                                            },
                                            {
                                                "type": "text",
                                                "data": "",
                                                "value": "ProductName",
                                                "name": "",
                                                "col": 1,
                                                "row": 0,
                                                "text": "Text",
                                                "styles": {
                                                    "fontFamily": "Tahoma",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "data": "",
                                                "value": "UnitPrice",
                                                "name": "",
                                                "col": 2,
                                                "row": 0,
                                                "prefix": "???",
                                                "text": "Text",
                                                "styles": {
                                                    "fontFamily": "Arial",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "data": "",
                                                "value": "Quantity",
                                                "name": "",
                                                "col": 3,
                                                "row": 0,
                                                "text": "Text",
                                                "styles": {
                                                    "fontFamily": "Arial",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "data": "",
                                                "value": "Discount",
                                                "name": "",
                                                "col": 4,
                                                "row": 0,
                                                "text": "Text",
                                                "styles": {
                                                    "fontFamily": "Arial",
                                                    "__tag_": {}
                                                }
                                            },
                                            {
                                                "type": "text",
                                                "data": "",
                                                "value": "ExtendedPrice",
                                                "name": "",
                                                "col": 5,
                                                "row": 0,
                                                "prefix": "???",
                                                "text": "Text",
                                                "styles": {
                                                    "fontFamily": "Arial",
                                                    "__tag_": {}
                                                }
                                            }
                                        ]
                                    },
                                    "styles": {
                                        "paddingTop": "px",
                                        "__tag_": {}
                                    }
                                }
                            ]
                        },
                        "groups": [],
                        "header": {
                            "type": "stack",
                            "width": "100%",
                            "height": 104,
                            "name": "",
                            "items": [
                                {
                                    "type": "text",
                                    "width": "400px",
                                    "text": "Invoice & Packing List",
                                    "styles": {
                                        "fontSize": "30px",
                                        "textDecoration": "",
                                        "fontWeight": "bold",
                                        "paddingBottom": "5px",
                                        "borderBottom": "2px solid",
                                        "__tag_": {}
                                    }
                                }
                            ]
                        },
                        "footer": {
                            "type": "stack",
                            "name": "bandPageFooter",
                            "width": "100%",
                            "visible": false
                        },
                        "dataRow": {
                            "type": "stack",
                            "width": "100%",
                            "name": "",
                            "styles": {
                                "paddingBottom": "10px",
                                "__tag_": {}
                            },
                            "items": [
                                {
                                    "type": "cbox",
                                    "width": "100%",
                                    "height": 218,
                                    "name": "",
                                    "itemGap": 0,
                                    "items": [
                                        {
                                            "type": "stack",
                                            "width": "100%",
                                            "name": "",
                                            "styles": {
                                                "paddingBottom": "10px",
                                                "__tag_": {}
                                            },
                                            "items": [
                                                {
                                                    "type": "table",
                                                    "width": 703,
                                                    "name": "",
                                                    "rowCount": 5,
                                                    "cellStyles": {
                                                        "borderLeft": "none",
                                                        "borderRight": "none",
                                                        "borderTop": "none",
                                                        "borderBottom": "1px solid"
                                                    },
                                                    "rows": [
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
                                                                "cellAlign": "right",
                                                                "borderLeft": "",
                                                                "borderRight": "",
                                                                "borderTop": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 0,
                                                            "c": 1,
                                                            "styles": {
                                                                "cellAlign": "left",
                                                                "borderLeft": "",
                                                                "borderRight": "",
                                                                "borderTop": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 0,
                                                            "c": 2,
                                                            "styles": {
                                                                "borderLeft": "",
                                                                "borderRight": "",
                                                                "borderTop": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 0,
                                                            "c": 3,
                                                            "styles": {
                                                                "cellAlign": "left",
                                                                "borderLeft": "",
                                                                "borderRight": "",
                                                                "borderTop": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 0,
                                                            "c": 4,
                                                            "styles": {
                                                                "borderLeft": "",
                                                                "borderRight": "",
                                                                "borderTop": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 0,
                                                            "c": 5,
                                                            "styles": {
                                                                "cellAlign": "left",
                                                                "borderLeft": "",
                                                                "borderRight": "",
                                                                "borderTop": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 1,
                                                            "c": 0,
                                                            "styles": {
                                                                "cellAlign": "right"
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
                                                            "styles": {
                                                                "cellAlign": "left"
                                                            }
                                                        },
                                                        {
                                                            "r": 1,
                                                            "c": 4,
                                                            "styles": {
                                                                "cellAlign": "right",
                                                                "borderLeft": "none",
                                                                "borderRight": "none",
                                                                "borderTop": "none"
                                                            }
                                                        },
                                                        {
                                                            "r": 1,
                                                            "c": 5,
                                                            "styles": {
                                                                "cellAlign": "left",
                                                                "borderLeft": "none",
                                                                "borderRight": "none",
                                                                "borderTop": "none"
                                                            }
                                                        },
                                                        {
                                                            "r": 2,
                                                            "c": 1,
                                                            "colspan": 3,
                                                            "styles": {
                                                                "cellAlign": "left"
                                                            }
                                                        },
                                                        {
                                                            "r": 2,
                                                            "c": 5,
                                                            "styles": {
                                                                "cellAlign": "left"
                                                            }
                                                        },
                                                        {
                                                            "r": 3,
                                                            "c": 0,
                                                            "styles": {
                                                                "cellAlign": "right"
                                                            }
                                                        },
                                                        {
                                                            "r": 3,
                                                            "c": 1,
                                                            "styles": {
                                                                "cellAlign": "left"
                                                            }
                                                        },
                                                        {
                                                            "r": 3,
                                                            "c": 3,
                                                            "styles": {
                                                                "cellAlign": "left"
                                                            }
                                                        },
                                                        {
                                                            "r": 3,
                                                            "c": 4,
                                                            "styles": {
                                                                "cellAlign": "right"
                                                            }
                                                        },
                                                        {
                                                            "r": 3,
                                                            "c": 5,
                                                            "styles": {
                                                                "cellAlign": "left"
                                                            }
                                                        },
                                                        {
                                                            "r": 4,
                                                            "c": 0,
                                                            "styles": {
                                                                "borderBottom": "2px solid"
                                                            }
                                                        },
                                                        {
                                                            "r": 4,
                                                            "c": 1,
                                                            "colspan": 5,
                                                            "styles": {
                                                                "cellAlign": "left",
                                                                "borderBottom": "2px solid"
                                                            }
                                                        }
                                                    ],
                                                    "colCount": 6,
                                                    "columns": [
                                                        {
                                                            "width": "12%"
                                                        },
                                                        {
                                                            "width": "28%"
                                                        },
                                                        {
                                                            "width": "10%"
                                                        },
                                                        {
                                                            "width": "20%"
                                                        },
                                                        {
                                                            "width": "10%"
                                                        },
                                                        {
                                                            "width": "20%"
                                                        }
                                                    ],
                                                    "items": [
                                                        {
                                                            "type": "text",
                                                            "height": "40px",
                                                            "name": "",
                                                            "col": 0,
                                                            "row": 0,
                                                            "text": "Invoice No.:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "height": "40px",
                                                            "name": "",
                                                            "col": 0,
                                                            "row": 1,
                                                            "text": "Ship Name:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "height": "40px",
                                                            "name": "",
                                                            "col": 0,
                                                            "row": 2,
                                                            "wrap": true,
                                                            "text": "Ship Address:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "height": "40px",
                                                            "name": "",
                                                            "col": 0,
                                                            "row": 3,
                                                            "wrap": true,
                                                            "text": "Customer Company:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "height": "40px",
                                                            "name": "",
                                                            "col": 0,
                                                            "row": 4,
                                                            "wrap": true,
                                                            "text": "Customer Address:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "OrderID",
                                                            "name": "",
                                                            "col": 1,
                                                            "row": 0,
                                                            "numberFormat": "",
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "ShipName",
                                                            "name": "",
                                                            "col": 1,
                                                            "row": 1,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "ShipAddress",
                                                            "name": "",
                                                            "col": 1,
                                                            "row": 2,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "CompanyName",
                                                            "name": "",
                                                            "col": 1,
                                                            "row": 3,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "FullAddr",
                                                            "name": "",
                                                            "col": 1,
                                                            "row": 4,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "name": "",
                                                            "col": 2,
                                                            "row": 0,
                                                            "wrap": true,
                                                            "text": "Invoice Date:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "name": "",
                                                            "col": 2,
                                                            "row": 1,
                                                            "wrap": true,
                                                            "text": "Shipped Date:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "name": "",
                                                            "col": 2,
                                                            "row": 3,
                                                            "wrap": true,
                                                            "text": "Contact Name:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "height": "40px",
                                                            "name": "",
                                                            "col": 4,
                                                            "row": 0,
                                                            "wrap": true,
                                                            "text": "Required Date:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "name": "",
                                                            "col": 4,
                                                            "row": 1,
                                                            "wrap": true,
                                                            "text": "Frieight:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "name": "",
                                                            "col": 4,
                                                            "row": 3,
                                                            "text": "Phone:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "name": "",
                                                            "col": 4,
                                                            "row": 2,
                                                            "wrap": true,
                                                            "text": "Shipper Company:",
                                                            "styles": {
                                                                "fontWeight": "bold",
                                                                "textAlign": "right",
                                                                "__tag_": {}
                                                            }
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "OrderDate",
                                                            "name": "",
                                                            "col": 3,
                                                            "row": 0,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "RequiredDate",
                                                            "name": "",
                                                            "col": 5,
                                                            "row": 0,
                                                            "dateFormat": "yyyy/MM/dd",
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "ShippedDate",
                                                            "name": "",
                                                            "col": 3,
                                                            "row": 1,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "Freight",
                                                            "name": "",
                                                            "col": 5,
                                                            "row": 1,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "ShipperCompany",
                                                            "name": "",
                                                            "col": 5,
                                                            "row": 2,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "ContactName",
                                                            "name": "",
                                                            "col": 3,
                                                            "row": 3,
                                                            "text": "Text"
                                                        },
                                                        {
                                                            "type": "text",
                                                            "data": "",
                                                            "value": "Phone",
                                                            "name": "",
                                                            "col": 5,
                                                            "row": 3,
                                                            "text": "Text"
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            },
            "styles": {
                "fontFamily": "Tahoma",
                "__tag_": {}
            }
        },
        "assets": {
            "/": []
        },
        "data": {
            "master-detail-01": {
                "type": "band",
                "fields": [
                    {
                        "fieldName": "OrderID",
                        "dataType": "number",
                        "sample": "10248",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "OrderDate",
                        "dataType": "text",
                        "sample": "1996-07-04",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "RequiredDate",
                        "dataType": "text",
                        "sample": "1996-08-01",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShippedDate",
                        "dataType": "text",
                        "sample": "1996-07-16",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipVia",
                        "dataType": "text",
                        "sample": "3",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipName",
                        "dataType": "text",
                        "sample": "???????????? ????????? ???",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipAddress",
                        "dataType": "text",
                        "sample": "????????? ??? 1??? 218-16",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipCity",
                        "dataType": "text",
                        "sample": "???????????????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipRegion",
                        "dataType": "text",
                        "sample": "?????????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipPostalCode",
                        "dataType": "text",
                        "sample": "032-041",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipCountry",
                        "dataType": "text",
                        "sample": "????????????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipFullAddr",
                        "dataType": "text",
                        "sample": "??????????????? ????????? ??? 1??? 218-16",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Freight",
                        "dataType": "number",
                        "sample": "32000",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "CustomerID",
                        "dataType": "text",
                        "sample": "VINET",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "CompanyName",
                        "dataType": "text",
                        "sample": "???????????? ????????? ???",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ContactName",
                        "dataType": "text",
                        "sample": "?????????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ContactTitle",
                        "dataType": "text",
                        "sample": "?????? ??????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "PostalCode",
                        "dataType": "text",
                        "sample": "032-041",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Phone",
                        "dataType": "text",
                        "sample": "(02)222-2243",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Fax",
                        "dataType": "text",
                        "sample": "(02)222-8243",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "FullAddr",
                        "dataType": "text",
                        "sample": "??????????????? ????????? ??? 1??? 218-16",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Country",
                        "dataType": "text",
                        "sample": "????????????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ShipperCompany",
                        "dataType": "text",
                        "sample": "?????? ?????? ???",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "TotalPrice",
                        "dataType": "number",
                        "sample": "1851000",
                        "description": "",
                        "dateReader": null
                    }
                ]
            },
            "master-detail-02": {
                "type": "band",
                "fields": [
                    {
                        "fieldName": "OrderID",
                        "dataType": "number",
                        "sample": "10248",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ProductName",
                        "dataType": "text",
                        "sample": "?????? ?????? ??????",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "UnitPrice",
                        "dataType": "number",
                        "sample": "14000",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Quantity",
                        "dataType": "number",
                        "sample": "12",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "Discount",
                        "dataType": "number",
                        "sample": "0",
                        "description": "",
                        "dateReader": null
                    },
                    {
                        "fieldName": "ExtendedPrice",
                        "dataType": "number",
                        "sample": "168000",
                        "description": "",
                        "dateReader": null
                    }
                ]
            }
        },
        "guid": "b9b0d546-5f25-40be-b947-ddbd0b13003c"
    },
    "dataSet": {
        "master-detail-01": {
            "type": "band",
            "values": [
                {
                    "OrderID": 10248,
                    "OrderDate": "1996-07-04",
                    "RequiredDate": "1996-08-01",
                    "ShippedDate": "1996-07-16",
                    "ShipVia": 3,
                    "ShipName": "???????????? ????????? (???)",
                    "ShipAddress": "????????? ??? 1??? 218-16",
                    "ShipCity": "???????????????",
                    "ShipRegion": "?????????",
                    "ShipPostalCode": "032-041",
                    "ShipCountry": "????????????",
                    "ShipFullAddr": "??????????????? ????????? ??? 1??? 218-16",
                    "Freight": 32000,
                    "CustomerID": "VINET",
                    "CompanyName": "??????????????? ????????? (???)",
                    "ContactName": "?????????",
                    "ContactTitle": "?????? ??????",
                    "PostalCode": "032-041",
                    "Phone": "(02)222-2243",
                    "Fax": "(02)222-8243",
                    "FullAddr": "??????????????? ????????? ??? 1??? 218-16",
                    "Country": "????????????",
                    "ShipperCompany": "?????? ?????? (???)",
                    "TotalPrice": "443000"
                }
            ]
        },
        "master-detail-02": {
            "type": "band",
            "values": [
                {
                    "OrderID": 10248,
                    "ProductName": "?????? ?????? ??????",
                    "UnitPrice": 14000,
                    "Quantity": 12,
                    "Discount": 0,
                    "ExtendedPrice": 168000
                },
                {
                    "OrderID": 10248,
                    "ProductName": "????????? ?????? ?????????",
                    "UnitPrice": 10000,
                    "Quantity": 10,
                    "Discount": 0,
                    "ExtendedPrice": 100000
                },
                {
                    "OrderID": 10248,
                    "ProductName": "????????? ?????? ??????",
                    "UnitPrice": 35000,
                    "Quantity": 5,
                    "Discount": 0,
                    "ExtendedPrice": 175000
                }
            ]
        }
    }
}
