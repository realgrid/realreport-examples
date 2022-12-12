<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<html>

<head>
    <meta charset='utf-8' />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="shortcut icon" href="/img/icons/favicon.ico">

    <link href='/js/realreport/realreport.css' rel='stylesheet' />
    <link href='/js/highcharts/highcharts.css' rel='stylesheet' />
    <link data-name="vs/editor/editor.main" rel="stylesheet" href="/js/monaco-editor/min/vs/editor/editor.main.css" />
    <link href="css/index.css" rel="stylesheet">

    <script type="text/javascript" src="/js/highcharts/highcharts.js"></script>
    <script type="text/javascript" src="/js/highcharts/highcharts-more.js"></script>
    <script type="text/javascript" src="/js/pdfkit.js"></script>
    <script type="text/javascript" src='/js/realreport/realreport.js?v=4'></script>
    <title>springboot-jsp</title>
</head>

<body>
    <div class="root">
        <div class="header">
            <div class="toolbar">
                <div class="toolbar-left">
                    <a class="toolbar-brand" href="https://real-report.com">
                        <img src="/img/logo.svg" alt="RealReport Logo" class="toolbar-logo">
                        <b class="toolbar-title">Real Report</b>
                    </a>
                    <a class="toolbar-item toolbar-link" href="https://real-report.com/pricing">가격</a>
                    <a class="toolbar-item toolbar-link" href="https://real-report.com/docs/getting-started">문서</a>
                    <a class="toolbar-item toolbar-link toolbar-link-active" href="https://demo.real-report.com">데모</a>
                </div>
                <div class="toolbar-center">
                </div>
                <div class="toolbar-right">
                    <div class="toolbar-items">
                        <a href="https://github.com/realgrid/realreport-examples" target="_blank"
                            rel="noopener noreferrer" class="toolbar-item toolbar-link">
                            <span>소스보기
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"
                                    class="icon-external-link">
                                    <path fill="currentColor"
                                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                                    </path>
                                </svg>
                            </span>
                        </a>
                        <a href="https://service.realgrid.com" target="_blank" rel="noopener noreferrer"
                            class="toolbar-item toolbar-link">
                            <span>다운로드
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"
                                    class="icon-external-link">
                                    <path fill="currentColor"
                                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                                    </path>
                                </svg>
                            </span>
                        </a>
                        <a href="https://forum.realgrid.com/categories/z6SA78vS9G6cgiYht" target="_blank"
                            rel="noopener noreferrer" class="toolbar-item toolbar-link">
                            <span>기술지원
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"
                                    class="icon-external-link">
                                    <path fill="currentColor"
                                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                                    </path>
                                </svg>
                            </span>
                        </a>
                        <a href="https://realgrid.com" target="_blank" rel="noopener noreferrer"
                            class="toolbar-item toolbar-link">
                            <span>RealGrid
                                <svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24"
                                    class="icon-external-link">
                                    <path fill="currentColor"
                                        d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z">
                                    </path>
                                </svg>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="sidenav-container">
                <div class="sidenav">
                    <div class="menu">
                        <ul class="menu-list">
                            <li class="menu-list-item">
                                <span class="menu-head">ReportViewer 양식</span>
                                <ul class="menu-list menu-list-block" id="sidebarUl">
                                    <!-- 이곳에 리포트 사이드바 생성 -->
                                    <li class="menu-list-item">
                                        <a class="menu-link" onclick="javascript:previewReportSample('1');">
                                            <span>주소라벨</span>
                                            <span class="toolbar-icon icon preview-popup-png"></span>
                                        </a>
                                    </li>
                                    <li class="menu-list-item">
                                        <a class="menu-link" onclick="javascript:previewReportSample('2');">
                                            <span>invoice</span>
                                            <span class="toolbar-icon icon preview-popup-png"></span>
                                        </a>
                                    </li>
                                    <li class="menu-list-item">
                                        <a class="menu-link" onclick="javascript:previewReportSample('3');">
                                            <span>체크리스트</span>
                                            <span class="toolbar-icon icon preview-popup-png"></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li class="menu-list-item">
                                <span class="menu-head">compositeViewer 양식</span>
                                <ul class="menu-list menu-list-block" id="sidebarUl">
                                    <!-- 이곳에 리포트 사이드바 생성 -->
                                    <li class="menu-list-item">
                                        <a class="menu-link" onclick="javascript:previewReportSample('4');">
                                            <span>주소라벨+invoice</span>
                                            <span class="toolbar-icon icon preview-popup-png"></span>
                                        </a>
                                    </li>
                                    <li class="menu-list-item">
                                        <a class="menu-link" onclick="javascript:previewReportSample('5');">
                                            <span>invoice+체크리스트</span>
                                            <span class="toolbar-icon icon preview-popup-png"></span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="main">
                <div class="main-content">
                    <div class="main-tabs">
                        <div class="tab-buttons">
                            <div class="tab-button active" id="reportTabBtn">
                                <span class="tab-header tab-title" onclick="openTab('reportTab')">Report 미리보기</span>
                                <span class="tab-header tab-tool-button" onclick="openEditor('reportFrame', this)">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                    </svg>
                                </span>
                            </div>
                            <div class="tab-button hidden" id="gridTabBtn">
                                <span class="tab-header tab-title" onclick="openTab('gridTab')">Grid 보기</span>
                            </div>
                        </div>
                        <div class="tab frame-tab" id="reportTab">
                            <iframe id="reportFrame" title="Report Preview Frame" src="preview.html"
                                class="content-frame h-450"></iframe>
                            <div class="editor-frame hidden" id="editorFrame">
                                <div class="main-editor">
                                    <div class="editor-toolbar">
                                        <span class="tool-button active" data-btn-type="set-editor-model"
                                            data-source-type="reportForm" onclick="clickEditorToolButton(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                            </svg>
                                            양식소스
                                        </span>
                                        <span class="tool-button" data-btn-type="set-editor-model"
                                            data-source-type="reportData" onclick="clickEditorToolButton(this)">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="tool-icon" fill="none"
                                                viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
                                            </svg>
                                            샘플 데이터
                                        </span>
                                    </div>
                                    <div id="editor-container"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script>
        var require = { paths: { vs: '/js/monaco-editor/min/vs' } };
    </script>
    <script src="/js/monaco-editor/min/vs/loader.js"></script>
    <script src="/js/monaco-editor/min/vs/editor/editor.main.nls.js"></script>
    <script src="/js/monaco-editor/min/vs/editor/editor.main.js"></script>

    <script defer src="/js/preview.js"></script>
    <script defer src="/js/app.js"></script>
</body>

</html>