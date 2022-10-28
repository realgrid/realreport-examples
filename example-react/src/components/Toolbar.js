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
                fileName: `${imageType}_으로출력`
            })
        }
    }

    const onClickPrintHiddenFrame = function () {
        if (viewer || compositeViewer) {
            function closePrint() {
                document.body.removeChild(this.__container__);
            }

            function setPrint() {
                this.contentWindow.__container__ = this;
                this.contentWindow.onbeforeunload = closePrint;
                this.contentWindow.onafterprint = closePrint;
                const dom = this.contentWindow.document.getElementById('realreport');
                if (viewer) dom.innerHTML = viewer.reportHtml;
                if (compositeViewer) dom.innerHTML = compositeViewer.reportHtml;

                setTimeout(() => {
                    this.contentWindow.focus(); // Required for IE
                    this.contentWindow.print();
                }, 1);
            }

            function printPage(sURL) {
                var oHideFrame = document.createElement("iframe");
                oHideFrame.onload = setPrint;
                oHideFrame.style.position = "";
                oHideFrame.style.right = "0";
                oHideFrame.style.bottom = "0";
                oHideFrame.style.width = "0";
                oHideFrame.style.height = "0";
                oHideFrame.style.border = "0";
                oHideFrame.src = sURL;
                document.body.appendChild(oHideFrame);
            }

            printPage('./print.html');
        }
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
                    viewer.zoom = 1;
                    viewer.exportPdf(fonts);
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
                    <div className={style.toolbarButton} onClick={onClickPrintHiddenFrame}>
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