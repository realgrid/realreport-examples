import Content from '../Content';

export default function ReportPreviewPage({ reportData }) {

  return (
    <Content
    reportData={reportData}
    />
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
      { params: { id: '4' } },
      { params: { id: '5' } },
      { params: { id: '6' } },
    ],
    fallback: false
  }
}

export async function getReportData(id) {
  const res = await fetch(`http://localhost:3000/report/report-${id}.json`)
  const reports = await res.json()

  return {
    id,
    reports
  }
}

export async function getStaticProps({ params }) {
  const reportData = await getReportData(params.id)

  return {
    props: {
      reportData
    }
  }
}

