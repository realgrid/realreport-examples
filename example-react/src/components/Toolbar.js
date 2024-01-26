import style from '../css/Report.module.css';
import { HiChevronDoubleLeft, HiChevronDoubleRight, HiChevronLeft, HiChevronRight, HiPlusSm, HiMinusSm } from 'react-icons/hi';
import { BsPrinter } from "react-icons/bs";
import { VscFilePdf } from "react-icons/vsc";
import { CgArrowsShrinkH, CgArrowsShrinkV, CgArrowsExpandLeft } from "react-icons/cg";
import { TiArrowLoop } from "react-icons/ti";
import { useEffect, useRef, useState } from 'react';

function Toolbar({ viewer, compositeViewer }) {
    const input = useRef();
    const pageInput = useRef();
    const [scale, setScale] = useState('100%');
    const [page, setPage] = useState('1');

    // 배율 인풋창
    const setInputValue = function () {
        if (viewer) setScale(`${Math.trunc(viewer.zoom * 100)}%`);
        if (compositeViewer) setScale(`${Math.trunc(compositeViewer.zoom * 100)}%`);
        input.current.value = scale
    }

    // 페이지 인풋창
    const setPageInputValue = function () {
        if (viewer) setPage(viewer.page);
        if (compositeViewer) setPage(compositeViewer.page);
        pageInput.current.value = page;
    }

    const onClickZoomIn10 = function () {
        if (viewer) {
            viewer.zoomIn();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.zoomIn();
            setInputValue();
        }
    }

    const onClickZoomOut10 = function () {
        if (viewer) {
            viewer.zoomOut();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.zoomOut();
            setInputValue();
        }
    }

    const onClickZoom100 = function () {
        if (viewer) {
            viewer.zoom = 1;
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.zoom = 1;
            setInputValue();
        }
    }

    const onClickFitToHeight = function () {
        if (viewer) {
            viewer.fitToHeight();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.fitToHeight();
            setInputValue();
        }
    }

    const onClickFitToWidth = function () {
        if (viewer) {
            viewer.fitToWidth();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.fitToWidth();
            setInputValue();
        }
    }

    const onClickFitToPage = function () {
        if (viewer) {
            viewer.fitToPage();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.fitToPage();
            setInputValue();
        }
    }

    const onClickFirstPage = function () {
        if (viewer) {
            viewer.first();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.first();
            setPageInputValue();
        }
    }

    const onClickLastPage = function () {
        if (viewer) {
            viewer.last();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.last();
            setPageInputValue();
        }
    }

    const onClickPrevPage = function () {
        if (viewer) {
            viewer.prev();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.prev();
            setPageInputValue();
        }
    }

    const onClickNextPage = function () {
        if (viewer) {
            viewer.next();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.next();
            setPageInputValue();
        }
    }

    const onClickExportImg = function (imageType) {
        if (viewer) {
            viewer.exportImage({
                type: imageType,
                fileName: "sample-report"
            })
        }
    }

    const onClickExportDoc = function (type) {
        if (viewer) {
            viewer.exportDocument({ type });
        }
    }

    const printReport = function () {
        viewer.print()
    }

    async function base64convert(url, split) {
        const data = await fetch(url);
        const blob = await data.blob();

        return new Promise(resolve => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(split ? base64data.split(',')[1] : base64data);
            }
        });
    }
    // pdf
    const onClickExportPdf = function () {
        base64convert('/js/pdffonts/NanumGothic.otf', true).then(regularFont => {
            base64convert('/js/pdffonts/NanumGothicBold.otf', true).then(boldFont => {
                const fonts = [{
                    name: 'regular',
                    content: regularFont,
                    style: 'normal',
                    weight: 'normal',
                },
                {
                    name: 'bold',
                    content: boldFont,
                    style: 'normal',
                    weight: 'bold',
                }];

                if (viewer) {
                    viewer.exportPdf({ fonts, filename: 'sample-report', preview: false });
                }
            });
        });
    }

    useEffect(() => {
        setInputValue();
        setPageInputValue();
    }, [viewer, compositeViewer])

    return (
        <div className={style.toolbarHeader}>
            <div className={style.toolbar}>
                <div className={style.toolbarContainer}>
                    <div className={style.toolbarButton} onClick={onClickZoomOut10}>
                        <HiMinusSm className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton}>
                        <input
                            type='text'
                            className={style.buttonInput}
                            value={scale}
                            ref={input}
                            onChange={() => setInputValue}
                        />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickZoomIn10}>
                        <HiPlusSm className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickZoom100}>
                        <TiArrowLoop className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickFitToWidth}>
                        <CgArrowsShrinkH className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickFitToHeight}>
                        <CgArrowsShrinkV className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickFitToPage}>
                        <CgArrowsExpandLeft className={style.toolbarIcon} />
                    </div>
                </div>
                <div className={style.toolbarContainer}>
                    <div className={style.toolbarButton} onClick={onClickFirstPage}>
                        <HiChevronDoubleLeft className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickPrevPage}>
                        <HiChevronLeft className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton}>
                        <input
                            type='text'
                            className={style.buttonInput}
                            value={page}
                            ref={pageInput}
                            onChange={() => setPageInputValue}
                        />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickNextPage}>
                        <HiChevronRight className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickLastPage}>
                        <HiChevronDoubleRight className={style.toolbarIcon} />
                    </div>
                </div>
                <div className={style.toolbarContainer}>
                    <div className={style.toolbarButton} onClick={printReport}>
                        <BsPrinter className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={onClickExportPdf}>
                        <VscFilePdf className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportImg('png')}>
                        <span className={style.toolbarButtonText}>png</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportImg('jpeg')}>
                        <span className={style.toolbarButtonText}>jpeg</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportDoc('hwp')}>
                        <span className={style.toolbarButtonText}>hwp</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportDoc('docx')}>
                        <span className={style.toolbarButtonText}>docx</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportDoc('pptx')}>
                        <span className={style.toolbarButtonText}>pptx</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportImg('gif')}>
                        <span className={style.toolbarButtonText}>gif</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportImg('tif')}>
                        <span className={style.toolbarButtonText}>tif</span>
                    </div>
                    <div className={style.toolbarButton} onClick={() => onClickExportImg('tiff')}>
                        <span className={style.toolbarButtonText}>tiff</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Toolbar;