import style from '../styles/Report.module.css';
import Toolbar from '../components/Toolbar';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'

const DynamicViewer = dynamic(() => import('../components/Viewer'), {
    ssr: false,
})

const DynamicCompositeViewer = dynamic(() => import('../components/CompositeViewer'), {
    ssr: false,
})

function Content({reportData}) {
    const router = useRouter();
    const routerId = router.query.id;

    const [viewer, setViewer] = useState(null);
    const [compositeViewer, setCompositeViewer] = useState(null);
    const [report, setReport] = useState(null);
    const [type, setType] = useState('');

    useEffect(() => {
        if (router.isReady && routerId) {
            setType(reportData.reports.type);
            setReport(reportData.reports);
        }
    }, [routerId])
    
    return (
        <div className={style.contentContainer}>
            <Toolbar
                viewer={viewer}
                compositeViewer={compositeViewer}
            />
            <div className={style.viewer}>
                {
                    type === 'single' &&
                    <DynamicViewer
                        report={report}
                        viewer={viewer}
                        setViewer={setViewer}
                    />
                }
                {
                    type === 'multi' &&
                    <DynamicCompositeViewer
                        report={report}
                        compositeViewer={compositeViewer}
                        setCompositeViewer={setCompositeViewer}
                    />
                }
            </div>
        </div>
    )
}
export default Content;