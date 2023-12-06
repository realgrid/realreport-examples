import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script src='/realreport-lic.js'></script>
        {/* 리얼리포트 스타일 적용 */}
        <link href='/js/realreport/realreport.css' rel='stylesheet' />
        {/* 하이차트 스타일 적용 */}
        <link href='/js/highcharts/highcharts.css' rel='stylesheet' />

        {/* Highchart 적용 */}
        <script src="/js/highcharts/highcharts.js"></script>
        <script src="/js/highcharts/highcharts-more.js"></script>

        {/* PDF 적용 */}
        <script src="/js/pdfkit.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}