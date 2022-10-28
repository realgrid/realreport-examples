import style from '../css/Report.module.css';
import { useEffect, useRef } from 'react';
import { ReportCompositeViewer } from 'realreport';

const CompositeViewer = ({ report, setCompositeViewer }) => {
    const reportRef = useRef(null);

    useEffect(() => {
        const compositeViewer = new ReportCompositeViewer(reportRef.current);
        setCompositeViewer(compositeViewer);

        if (compositeViewer && report) {
            compositeViewer['_reportFormSets'] = report.formSet;
            compositeViewer.preview();
        }
    }, [report]);

    useEffect(() => {
        return () => {
            setCompositeViewer(null);
        }
    }, []);

    return (
        <div className={style.reportViewer}>
            <div ref={reportRef} style={{ height: '100%' }} id='composite'></div>
        </div>
    )
};

export default CompositeViewer;
