import React, { createRef } from "react";
import { ReportViewer } from 'realreport';

interface ViewerProps {
    report: any;
    data: any;
}

const RealReportViewer = (props: ViewerProps) => {
    const { report, data } = props;
    const reportRef = createRef<HTMLDivElement>();

    const onClick = () => {
        const viewer = new ReportViewer(reportRef.current, report, data);
        viewer.preview();
    }

    return (
        <div>
            <button onClick={onClick}>Preview</button>
            <div>{process.env.reportLic}</div>
            <div ref={reportRef} id="realreport"></div>
        </div>
    )
};

export default RealReportViewer;
