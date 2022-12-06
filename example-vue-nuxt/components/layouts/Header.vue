<template>
  <div class="header">
    <div class="toolbar">
      <div class="toolbar-left">
        <a class="toolbar-brand" href="https://real-report.com">
          <img
            src="../../img/logo.svg"
            alt="RealReport Logo"
            class="toolbar-logo"
          />
          <b class="toolbar-title">Real Report</b>
        </a>
        <a
          class="toolbar-item toolbar-link"
          href="https://real-report.com/pricing"
          >가격</a
        >
        <a
          class="toolbar-item toolbar-link"
          href="https://real-report.com/docs/getting-started"
          >문서</a
        >
        <a
          class="toolbar-item toolbar-link toolbar-link-active"
          href="https://demo.real-report.com"
          >데모</a
        >
      </div>
      <div class="toolbar-center"></div>
      <div class="toolbar-right">
        <div class="toolbar-items">
          <a
            href="https://github.com/realgrid/realreport-examples"
            target="_blank"
            rel="noopener noreferrer"
            class="toolbar-item toolbar-link"
          >
            <span
              >소스보기
              <svg
                width="13.5"
                height="13.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="icon-external-link"
              >
                <path
                  fill="currentColor"
                  d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="https://service.realgrid.com"
            target="_blank"
            rel="noopener noreferrer"
            class="toolbar-item toolbar-link"
          >
            <span
              >다운로드
              <svg
                width="13.5"
                height="13.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="icon-external-link"
              >
                <path
                  fill="currentColor"
                  d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="https://forum.realgrid.com/categories/z6SA78vS9G6cgiYht"
            target="_blank"
            rel="noopener noreferrer"
            class="toolbar-item toolbar-link"
          >
            <span
              >기술지원
              <svg
                width="13.5"
                height="13.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="icon-external-link"
              >
                <path
                  fill="currentColor"
                  d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                ></path>
              </svg>
            </span>
          </a>
          <a
            href="https://realgrid.com"
            target="_blank"
            rel="noopener noreferrer"
            class="toolbar-item toolbar-link"
          >
            <span
              >RealGrid
              <svg
                width="13.5"
                height="13.5"
                aria-hidden="true"
                viewBox="0 0 24 24"
                class="icon-external-link"
              >
                <path
                  fill="currentColor"
                  d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>
