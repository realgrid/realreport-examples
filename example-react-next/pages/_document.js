import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <script src='/realreport/realreport/realreport-lic.js'></script>
        <link href='/realreport/highcharts/highcharts.css' rel='stylesheet' />
        <script src="/realreport/highcharts/highcharts.js"></script>
        <script src="/realreport/highcharts/highcharts-more.js"></script>
        
        {/* PDF 라이브러리 포함 하기 */}
        <script src="/realreport/pdfkit.js"></script>

        <link href='/realreport/realreport/realreport.css' rel='stylesheet' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}