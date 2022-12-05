import { useEffect, useRef } from 'react';
import style from '../css/Report.module.css';
import { ReportViewer } from 'realreport';

const Viewer = ({ report, setViewer }) => {
    const reportRef = useRef(null);

    useEffect(() => {
        const viewer = new ReportViewer(reportRef.current);
        setViewer(viewer);

        const pageCallback = (ctx, page, pageNo) => {
            console.log(`${pageNo} 페이지 미리보기 완료`);
        }

        const endCallback = (ctx, pages) => {
            console.log('모든 페이지 미리보기 완료');
        }

        if (viewer && report) {
            viewer.reportForm = report.form;
            viewer.dataSet = report.dataSet;
            viewer.preview({
                async: true,
                pageMark: false,
                noScroll: true,
                callback: pageCallback,
                endCallback,
            });
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
