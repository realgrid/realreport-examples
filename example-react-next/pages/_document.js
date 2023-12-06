import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script src='/realreport-lic.js'></script>
        <link href='/js/highcharts/highcharts.css' rel='stylesheet' />

        {/* Highchart 적용 */}
        <script src="/js/highcharts/highcharts.js"></script>
        <script src="/js/highcharts/highcharts-more.js"></script>

        {/* PDF 적용 */}
        <script src="/js/pdfkit.js"></script>

        <link href='/js/realreport/realreport.css' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}