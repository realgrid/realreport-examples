import { useEffect, useRef } from 'react';
import style from '../styles/Report.module.css';
import { ReportViewer } from 'realreport';

const Viewer = ({ report, setViewer }) => {
    const reportRef = useRef(null);

    useEffect(() => {
        const viewer = new ReportViewer(reportRef.current);
        setViewer(viewer);

        if (viewer && report) {
            viewer.reportForm = report.form;
            viewer.dataSet = report.dataSet;
            viewer.preview();
        }
    }, [report]);

    useEffect(() => {
        return () => {
            setViewer(null);
        }
    }, []);

    return (
        <div className={style.reportViewer}>
            <div ref={reportRef} style={{ height: '100%' }} id='reportViewer'></div>
        </div>
    )
};

export default Viewer;
