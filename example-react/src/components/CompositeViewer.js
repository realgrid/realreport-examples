import style from '../css/Report.module.css';
import { useEffect, useRef } from 'react';
import { ReportCompositeViewer } from 'realreport';

const CompositeViewer = ({ report, compositeViewer, setCompositeViewer }) => {
    const reportRef = useRef(null);

    const pageCallback = (ctx, page, pageNo) => {
        console.log(`${pageNo} 페이지 미리보기 완료`);
    }

    const endCallback = (ctx, pages) => {
        console.log('모든 페이지 미리보기 완료');
    }

    useEffect(() => {
        if (reportRef.current && report) {
            setCompositeViewer(reportRef.current);
            reportRef.current['_reportFormSets'] = report.formSet;
            reportRef.current.dataSet = report.dataSet;
            reportRef.current.preview({
                async: true,
                pageMark: false,
                noScroll: true,
                callback: pageCallback,
                endCallback,
            });
        }
        return () => {
            setCompositeViewer(null);
        }
    }, []);

    return (
        <div className={style.reportViewer}>
            <div ref={(element) => {
                if (!reportRef.current) reportRef.current = new ReportCompositeViewer(element)
            }
            } style={{ height: '100%' }} id='composite'></div>
        </div>
    )
};

export default CompositeViewer;
