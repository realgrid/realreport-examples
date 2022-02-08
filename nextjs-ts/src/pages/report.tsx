import dynamic from 'next/dynamic';

import Layout from '../components/Layout'
import { freeFormData, freeformReport } from '../utils/freeform-report'

const RealReportViewer = dynamic(() => import('../components/RealReport'), {
    ssr: false
});

const ReportPage = () => (
  <Layout title="Report preview">
    <h1>Report Preview</h1>
    <RealReportViewer report={freeformReport} data={freeFormData}></RealReportViewer>
  </Layout>
)

export default ReportPage
