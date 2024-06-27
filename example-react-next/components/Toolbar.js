import style from '../styles/Report.module.css';
import {
    HiChevronDoubleLeft,
    HiChevronDoubleRight,
    HiChevronLeft,
    HiChevronRight,
} from 'react-icons/hi';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

function Toolbar({ viewer, compositeViewer }) {
    const input = useRef();
    const pageInput = useRef();
    const [scale, setScale] = useState('100%');
    const [page, setPage] = useState('1');

    // 배율 인풋창
    const setInputValue = function () {
        if (viewer) setScale(`${Math.trunc(viewer.zoom * 100)}%`);
        if (compositeViewer)
            setScale(`${Math.trunc(compositeViewer.zoom * 100)}%`);
        input.current.value = scale;
    };

    // 페이지 인풋창
    const setPageInputValue = function () {
        if (viewer) setPage(viewer.page);
        if (compositeViewer) setPage(compositeViewer.page);
        pageInput.current.value = page;
    };

    const onClickZoomIn10 = function () {
        if (viewer) {
            viewer.zoomIn();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.zoomIn();
            setInputValue();
        }
    };

    const onClickZoomOut10 = function () {
        if (viewer) {
            viewer.zoomOut();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.zoomOut();
            setInputValue();
        }
    };

    const onClickZoom100 = function () {
        if (viewer) {
            viewer.zoom = 1;
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.zoom = 1;
            setInputValue();
        }
    };

    const onClickFitToHeight = function () {
        if (viewer) {
            viewer.fitToHeight();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.fitToHeight();
            setInputValue();
        }
    };

    const onClickFitToWidth = function () {
        if (viewer) {
            viewer.fitToWidth();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.fitToWidth();
            setInputValue();
        }
    };

    const onClickFitToPage = function () {
        if (viewer) {
            viewer.fitToPage();
            setInputValue();
        }
        if (compositeViewer) {
            compositeViewer.fitToPage();
            setInputValue();
        }
    };

    const onClickFirstPage = function () {
        if (viewer) {
            viewer.first();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.first();
            setPageInputValue();
        }
    };

    const onClickLastPage = function () {
        if (viewer) {
            viewer.last();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.last();
            setPageInputValue();
        }
    };

    const onClickPrevPage = function () {
        if (viewer) {
            viewer.prev();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.prev();
            setPageInputValue();
        }
    };

    const onClickNextPage = function () {
        if (viewer) {
            viewer.next();
            setPageInputValue();
        }
        if (compositeViewer) {
            compositeViewer.next();
            setPageInputValue();
        }
    };

    const onClickExportImg = function (imageType) {
        if (viewer) {
            viewer.exportImage({
                type: imageType,
                fileName: `${imageType}_으로출력`,
            });
        }
    };

    const onClickExportDoc = function (type) {
        if (viewer) {
            viewer.exportDocument({ type });
        }
    };

    const printReport = function () {
        viewer.print();
    };

    async function base64convert(url, split) {
        const data = await fetch(url);
        const blob = await data.blob();

        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onloadend = () => {
                const base64data = reader.result;
                resolve(split ? base64data.split(',')[1] : base64data);
            };
        });
    }
    // pdf
    const onClickExportPdf = function () {
        base64convert('/js/pdffonts/PretendardGOV-Regular.otf', true).then(
            (regularFont) => {
                base64convert('/js/pdffonts/PretendardGOV-Bold.otf', true).then(
                    (boldFont) => {
                        const fonts = [
                            {
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
                            },
                        ];

                        if (viewer) {
                            const oldZoom = viewer.zoom;
                            viewer.zoom = 1;
                            viewer
                                .exportPdf({
                                    fonts,
                                    filename: 'sample-report',
                                    preview: false,
                                })
                                .then(() => {
                                    viewer.zoom = oldZoom;
                                });
                        }
                    },
                );
            },
        );
    };

    useEffect(() => {
        setInputValue();
        setPageInputValue();
    }, [viewer, compositeViewer]);

    return (
        <div className={style.toolbarHeader}>
            <div className={style.toolbar}>
                <div className={style.toolbarContainer}>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickZoomOut10}
                    >
                        <Image
                            src="/img/preview-zoomout.png"
                            width={25}
                            height={25}
                            alt="zoomout"
                        />
                    </div>
                    <div className={style.toolbarButton}>
                        <input
                            type="text"
                            className={style.buttonInput}
                            value={scale}
                            ref={input}
                            onChange={() => setInputValue}
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickZoomIn10}
                    >
                        <Image
                            src="/img/preview-zoomin.png"
                            width={25}
                            height={25}
                            alt="zoomin"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickZoom100}
                    >
                        <Image
                            src="/img/preview-100.png"
                            width={25}
                            height={25}
                            alt="100%"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickFitToWidth}
                    >
                        <Image
                            src="/img/preview-fit-to-width.png"
                            width={25}
                            height={25}
                            alt="fit-to-width"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickFitToHeight}
                    >
                        <Image
                            src="/img/preview-fit-to-height.png"
                            width={25}
                            height={25}
                            alt="fit-to-height"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickFitToPage}
                    >
                        <Image
                            src="/img/preview-fit-to-page.png"
                            width={25}
                            height={25}
                            alt=""
                        />
                    </div>
                </div>
                <div className={style.toolbarContainer}>
                    <div
                        className={style.toolbarButton}
                        onClick={onClickFirstPage}
                    >
                        <HiChevronDoubleLeft className={style.toolbarIcon} />
                    </div>
                    <div
                        className={style.toolbarButton}
                        onClick={onClickPrevPage}
                    >
                        <HiChevronLeft className={style.toolbarIcon} />
                    </div>
                    <div className={style.toolbarButton}>
                        <input
                            type="text"
                            className={style.buttonInput}
                            value={page}
                            ref={pageInput}
                            onChange={() => setPageInputValue}
                        />
                    </div>
                    <div
                        className={style.toolbarButton}
                        onClick={onClickNextPage}
                    >
                        <HiChevronRight className={style.toolbarIcon} />
                    </div>
                    <div
                        className={style.toolbarButton}
                        onClick={onClickLastPage}
                    >
                        <HiChevronDoubleRight className={style.toolbarIcon} />
                    </div>
                </div>
                <div className={style.toolbarContainer}>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={printReport}
                    >
                        <Image
                            src="/img/preview-print.png"
                            width={25}
                            height={25}
                            alt="print"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={onClickExportPdf}
                    >
                        <Image
                            src="/img/preview-pdf.png"
                            width={25}
                            height={25}
                            alt="pdf"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportImg('png')}
                    >
                        <Image
                            src="/img/preview-png.png"
                            width={25}
                            height={25}
                            alt="png"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportImg('jpeg')}
                    >
                        <Image
                            src="/img/preview-jpeg.png"
                            width={25}
                            height={25}
                            alt="jpeg"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportDoc('hwp')}
                    >
                        <Image
                            src="/img/preview-hwp.png"
                            width={25}
                            height={25}
                            alt="hwp"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportDoc('docx')}
                    >
                        <Image
                            src="/img/preview-docx.png"
                            width={25}
                            height={25}
                            alt="docx"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportDoc('pptx')}
                    >
                        <Image
                            src="/img/preview-pptx.png"
                            width={25}
                            height={25}
                            alt="pptx"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportImg('gif')}
                    >
                        <Image
                            src="/img/preview-gif.png"
                            width={25}
                            height={25}
                            alt="gif"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportImg('tif')}
                    >
                        <Image
                            src="/img/preview-tiffg3.png"
                            width={25}
                            height={25}
                            alt="tif"
                        />
                    </div>
                    <div
                        className={style.toolbarButtonImgIcon}
                        onClick={() => onClickExportImg('tiff')}
                    >
                        <Image
                            src="/img/preview-tiffg4.png"
                            width={25}
                            height={25}
                            alt="tiff"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Toolbar;
