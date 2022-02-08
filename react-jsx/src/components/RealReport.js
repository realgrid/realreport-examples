import React, { createRef } from "react";
import { ReportViewer } from '@realgrid/realreport-viewer';
import '@realgrid/realreport-viewer/dist/realreport.css';

const RealReportViewer = function (props) {
    const { report } = props;
    const reportRef = createRef();

    const onClick = () => {
        const viewer = new ReportViewer(reportRef.current);
        viewer.preview(report);
    }

    return (
        <div>
            <button onClick={onClick}>Preview</button>
            <div ref={reportRef} id="realreport"></div>
        </div>
    )
};

export default RealReportViewer;
