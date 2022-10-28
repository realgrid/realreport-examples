import style from '../css/Report.module.css';
import Toolbar from './Toolbar';
import Viewer from './Viewer';
import 'realreport/dist/realreport.css';
import CompositeViewer from './CompositeViewer';

function Content({
    report,
    viewer,
    setViewer,
    compositeViewer,
    setCompositeViewer,
    type,
}) {

    return (
        <div className={style.contentContainer}>
            <Toolbar
            report={report}
                viewer={viewer}
                compositeViewer={compositeViewer}
            />
            <div className={style.viewer}>

                {
                    type === 'single' &&
                    <Viewer
                        report={report}
                        viewer={viewer}
                        setViewer={setViewer}
                    />
                }
                {
                    type === 'multi' &&
                    <CompositeViewer
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