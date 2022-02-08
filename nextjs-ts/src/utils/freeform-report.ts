const freeformReport = {
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
                    "data": "freeform",
                    "width": "100%",
                    "name": "",
                    "detail": {
                        "type": "detail",
                        "width": "100%",
                        "name": ""
                    },
                    "groups": [],
                    "header": {
                        "type": "stack",
                        "name": "bandHeader",
                        "width": "100%",
                        "height": 82,
                        "items": [
                            {
                                "type": "text",
                                "text": "Product Information",
                                "styles": {
                                    "fontSize": "30px",
                                    "fontWeight": "bold",
                                    "__tag_": {}
                                }
                            }
                        ]
                    },
                    "footer": {
                        "type": "stack",
                        "name": "bandFooter",
                        "width": "100%"
                    },
                    "dataRow": {
                        "type": "stack",
                        "name": "dataRow",
                        "width": "100%",
                        "items": [
                            {
                                "type": "table",
                                "width": "100%",
                                "name": "",
                                "rowCount": 10,
                                "cellStyles": {},
                                "rows": [
                                    {},
                                    {},
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
                                        "c": 1,
                                        "colspan": 2,
                                        "styles": {
                                            "cellAlign": "left"
                                        }
                                    },
                                    {
                                        "r": 1,
                                        "c": 1,
                                        "colspan": 2,
                                        "styles": {
                                            "cellAlign": "left"
                                        }
                                    },
                                    {
                                        "r": 1,
                                        "c": 3,
                                        "rowspan": 6
                                    },
                                    {
                                        "r": 2,
                                        "c": 1,
                                        "colspan": 2,
                                        "styles": {
                                            "cellAlign": "left"
                                        }
                                    },
                                    {
                                        "r": 3,
                                        "c": 1,
                                        "colspan": 2,
                                        "styles": {
                                            "cellAlign": "left"
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
                                        "r": 5,
                                        "c": 1,
                                        "colspan": 2,
                                        "styles": {
                                            "cellAlign": "left"
                                        }
                                    },
                                    {
                                        "r": 6,
                                        "c": 1,
                                        "colspan": 2,
                                        "styles": {
                                            "cellAlign": "left"
                                        }
                                    },
                                    {
                                        "r": 7,
                                        "c": 0,
                                        "colspan": 4,
                                        "styles": {
                                            "borderLeft": "none",
                                            "borderRight": "none"
                                        }
                                    },
                                    {
                                        "r": 8,
                                        "c": 0,
                                        "colspan": 4,
                                        "styles": {
                                            "cellAlign": "left"
                                        }
                                    },
                                    {
                                        "r": 9,
                                        "c": 0,
                                        "colspan": 4,
                                        "styles": {
                                            "cellAlign": "left",
                                            "paddingLeft": "10px",
                                            "paddingTop": "10px"
                                        }
                                    }
                                ],
                                "colCount": 4,
                                "columns": [
                                    {
                                        "width": "15%"
                                    },
                                    {
                                        "width": "40%"
                                    },
                                    {
                                        "width": "10%"
                                    },
                                    {
                                        "width": "35%"
                                    }
                                ],
                                "items": [
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 0,
                                        "text": "Product",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 1,
                                        "text": "Category",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 2,
                                        "text": "Manufacture",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 3,
                                        "text": "Model",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "specification",
                                        "height": 547,
                                        "name": "",
                                        "col": 0,
                                        "row": 9,
                                        "wrap": true,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "textAlign": "left",
                                            "verticalAlign": "top",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 8,
                                        "text": "Specification",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "paddingLeft": "5px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 6,
                                        "text": "Description",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 5,
                                        "text": "Discount",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "35px",
                                        "name": "",
                                        "col": 0,
                                        "row": 4,
                                        "text": "Unit Price",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "name": "",
                                        "col": 3,
                                        "row": 0,
                                        "text": "Image",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "15px",
                                            "fontWeight": "bold",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "name": "",
                                        "col": 2,
                                        "row": 4,
                                        "text": "KRW",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "image",
                                        "value": "imageUrl",
                                        "width": 240,
                                        "height": 222,
                                        "name": "",
                                        "col": 3,
                                        "row": 1
                                    },
                                    {
                                        "type": "text",
                                        "value": "productID",
                                        "name": "",
                                        "col": 1,
                                        "row": 0,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "categoryID",
                                        "name": "",
                                        "col": 1,
                                        "row": 1,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "company",
                                        "name": "",
                                        "col": 1,
                                        "row": 2,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "model",
                                        "name": "",
                                        "col": 1,
                                        "row": 3,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "unitCost",
                                        "name": "",
                                        "col": 1,
                                        "row": 4,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Arial",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "paddingRight": "5px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "discount",
                                        "name": "",
                                        "col": 1,
                                        "row": 5,
                                        "suffix": " %",
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "value": "description",
                                        "name": "",
                                        "col": 1,
                                        "row": 6,
                                        "text": "Text",
                                        "styles": {
                                            "fontFamily": "Tahoma",
                                            "fontSize": "14px",
                                            "paddingLeft": "3px",
                                            "__tag_": {}
                                        }
                                    },
                                    {
                                        "type": "text",
                                        "height": "20px",
                                        "name": "",
                                        "col": 0,
                                        "row": 7,
                                        "text": ""
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
        "freeform": {
            "type": "band",
            "fields": [
                {
                    "fieldName": "productID",
                    "dataType": "text",
                    "sample": "171",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "categoryID",
                    "dataType": "text",
                    "sample": "DE10",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "company",
                    "dataType": "text",
                    "sample": "아큐아드림",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "model",
                    "dataType": "text",
                    "sample": "NT910S3G-K3WL",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "unitCost",
                    "dataType": "number",
                    "sample": "1190000",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "discount",
                    "dataType": "number",
                    "sample": "3",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "description",
                    "dataType": "text",
                    "sample": "아티브 북9 Lite",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "specification",
                    "dataType": "text",
                    "sample": "- 운영체계 : Windows 8.1 (64-bit) \r\n- 프로세서 / 칩셋 : Intel® Core™ i3 Processor 4020Y (1.50 GHz, 3 MB L3 Cache) \r\n- 메모리 : 4GB DDR3L System Memory at 1600MHz (on BD 4GB) \r\n- 저장장치 : 128GB Solid-state Drive \r\n- 디스플레이 : 33.7cm SuperBright HD LED Display (1366 x 768), Anti-Reflective \r\n- 그래픽 : Intel® HD Graphics 4200 \r\n- 멀티미디어 : 스테레오 스피커 ( 1.5 W x 2 )\r\n- 네트워크 : 802.11 bg/n 1X1\r\n- 입력장치 : 페블 키보드, 클릭패드",
                    "description": "",
                    "dateReader": null
                },
                {
                    "fieldName": "imageUrl",
                    "dataType": "text",
                    "sample": "templates/asset/sample/NT910S3G-K3WL.jpg",
                    "description": "",
                    "dateReader": null
                }
            ]
        }
    },
    "guid": "baecc32e-540f-48fc-92b0-7c33f0d74c30"
}

const freeFormData = {
    freeform: {
        type: 'band',
        values: [
        {
                "productID": "171",
                "categoryID": "DE10",
                "company": "아큐아드림",
                "model": "NT910S3G-K3WL",
                "unitCost": 1190000,
                "discount": 3,
                "description": "아티브 북9 Lite",
                "specification": "- 운영체계 : Windows 8.1 (64-bit) \r\n- 프로세서 / 칩셋 : Intel® Core™ i3 Processor 4020Y (1.50 GHz, 3 MB L3 Cache) \r\n- 메모리 : 4GB DDR3L System Memory at 1600MHz (on BD 4GB) \r\n- 저장장치 : 128GB Solid-state Drive \r\n- 디스플레이 : 33.7cm SuperBright HD LED Display (1366 x 768), Anti-Reflective \r\n- 그래픽 : Intel® HD Graphics 4200 \r\n- 멀티미디어 : 스테레오 스피커 ( 1.5 W x 2 )\r\n- 네트워크 : 802.11 bg/n 1X1\r\n- 입력장치 : 페블 키보드, 클릭패드",
                "imageUrl": "images/NT910S3G-K3WL.jpg"
            },
            {
                "productID": "171",
                "categoryID": "DE10",
                "company": "아큐아드림",
                "model": "NT910S3G-K3WL",
                "unitCost": 1190000,
                "discount": 3,
                "description": "아티브 북9 Lite",
                "specification": "- 운영체계 : Windows 8.1 (64-bit) \r\n- 프로세서 / 칩셋 : Intel® Core™ i3 Processor 4020Y (1.50 GHz, 3 MB L3 Cache) \r\n- 메모리 : 4GB DDR3L System Memory at 1600MHz (on BD 4GB) \r\n- 저장장치 : 128GB Solid-state Drive \r\n- 디스플레이 : 33.7cm SuperBright HD LED Display (1366 x 768), Anti-Reflective \r\n- 그래픽 : Intel® HD Graphics 4200 \r\n- 멀티미디어 : 스테레오 스피커 ( 1.5 W x 2 )\r\n- 네트워크 : 802.11 bg/n 1X1\r\n- 입력장치 : 페블 키보드, 클릭패드",
                "imageUrl": "images/NT910S3G-K3WL.jpg"
            },
            {
                "productID": "171",
                "categoryID": "DE10",
                "company": "아큐아드림",
                "model": "NT910S3G-K3WL",
                "unitCost": 1190000,
                "discount": 3,
                "description": "아티브 북9 Lite",
                "specification": "- 운영체계 : Windows 8.1 (64-bit) \r\n- 프로세서 / 칩셋 : Intel® Core™ i3 Processor 4020Y (1.50 GHz, 3 MB L3 Cache) \r\n- 메모리 : 4GB DDR3L System Memory at 1600MHz (on BD 4GB) \r\n- 저장장치 : 128GB Solid-state Drive \r\n- 디스플레이 : 33.7cm SuperBright HD LED Display (1366 x 768), Anti-Reflective \r\n- 그래픽 : Intel® HD Graphics 4200 \r\n- 멀티미디어 : 스테레오 스피커 ( 1.5 W x 2 )\r\n- 네트워크 : 802.11 bg/n 1X1\r\n- 입력장치 : 페블 키보드, 클릭패드",
                "imageUrl": "images/NT910S3G-K3WL.jpg"
            },
        ],
    }
}

export { freeformReport, freeFormData };
