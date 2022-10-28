import Side from './Side';
import Content from './Content';
import style from '../css/Report.module.css';
import { useState } from 'react';
import 'realreport/dist/realreport.css';

function ViewContainer() {
    const [report, setReport] = useState(null);
    const [type, setType] = useState('');
    const [viewer, setViewer] = useState(null);
    const [compositeViewer, setCompositeViewer] = useState(null);

    const getJson = async (id) => {
        const json = await (
            await fetch(`/report/report-${id}.json`)
        ).json()
        
        setType(json.type);
        setReport(json);
    }
    
    /**
     * - Type이 변경된 후 렌더링하면서 리포트를 생성한다.
     */
    return (
        <div className={style.viewContainer}>
            <Side
                getJson={getJson}
            />
            <Content
                report={report}
                type={type}
                viewer={viewer}
                setViewer={setViewer}
                compositeViewer={compositeViewer}
                setCompositeViewer={setCompositeViewer}
            />
        </div>
    )
}

export default ViewContainer;