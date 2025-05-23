import { Cvfo } from 'exceljs';
import { default as default_2 } from 'csstype';
import { Style } from 'exceljs';

declare enum Align {
    LEFT = "left",
    CENTER = "center",
    RIGHT = "right"
}

declare enum AnchorPosition {
    CENTER = "center",
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom",
    INNER_LEFT = "innerLeft",
    INNER_RIGHT = "innerRight",
    INNER_TOP = "innerTop",
    INNER_BOTTOM = "innerBottom"
}

/**
 * Asset folder.
 */
declare class AssetGroup extends AssetItem {
    path: string;
    items: AssetItem[];
    constructor(name: string);
    get count(): number;
    get(name: string): AssetItem;
    save(target: object[]): void;
    indexOf(item: AssetItem): number;
    get isGroup(): boolean;
    $_findItem(path: string, groupOnly?: boolean): AssetItem;
}

/**
 * Asset item base.
 */
declare abstract class AssetItem implements IPropertySource {
    name: string;
    data: string;
    static readonly PROP_NAME = "name";
    static readonly PROP_INFOS: {
        name: string;
        category: PropCategory;
        type: typeof StringProperty;
        multiple: boolean;
        default: any;
    }[];
    parent: AssetGroup;
    description: string;
    tag: any;
    constructor(name: string, data: string);
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    isDominantProp(prop: IPropInfo): boolean;
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyleProperty(prop: string): void;
    setStyleProperty(prop: string, value: any): void;
    setItemsStyleProperty(sources: IPropertySource[], prop: string, value: any): void;
    getSubStyleProperty(prop: string, style: string): void;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    isCollectionProp(): boolean;
    isEditableCollection(): boolean;
    isCollectionItem(): boolean;
    getCollectionLabel(): string;
    getPropertySources(): IPropertySource[];
    getPopupPropLabel(prop: string): string;
    get isGroup(): boolean;
    get manager(): any;
    get displayPath(): string;
    save(target: any): any;
    protected _parsetData(data: string): void;
    protected _doSave(target: any): void;
}

/**
 * Asset 관리자.
 * 모든 asset의 name은 경로와 상관없이 유일해야 한다.
 * {
 *  'folder path': [asset items,...],
 *  'folder path': [asset items,...]
 * }
 *
 * 리포트에 저장되는 asset들 외에 application에서 제공하는 asset들(stock assets)이
 * application asset view에 표시되도록 하고,
 * 그 asset들이 report에 추가되면 자동으로 report에도 추가한다.
 */
declare class AssetManager extends EventAware {
    private _owner;
    private _root;
    private _nameMap;
    private _commands;
    constructor(owner: IAssetOwner, commands: EditCommandStack);
    /** root */
    get root(): AssetGroup;
    load(src: any): void;
    private $_collectGroups;
    save(target: object): void;
    private $_checkPath;
    get(name: string): AssetItem;
    getImage(name: string): string;
    getSvg(name: string): string;
    getPalette(name: string): ColorPaletteAsset;
    findGroup(path: string): AssetGroup;
    forceGroup(path: string): AssetGroup;
    addGroup(parent: string | AssetGroup, group: string): AssetGroup;
    removeGroup(group: string | AssetGroup): boolean;
    add(group: string | AssetGroup, item: AssetItem, index?: number): void;
    remove(item: AssetItem): void;
    addImage(group: string | AssetGroup, name: string, imageData: string, index?: number): ImageAsset;
    addSvg(group: string | AssetGroup, name: string, svgData: string, index?: number): SvgAsset;
    addPalette(group: string | AssetGroup, name: string, paletteData: string, index?: number): ColorPaletteAsset;
    getTree(root?: string): TreeItemSource;
    private $_parseTree;
    getValidName(prefix: string): string;
    isValidName(name: string): boolean;
    setItemProperty(item: AssetItem, prop: string, value: any): void;
    private $_findGroup;
    private $_addGroup;
    private $_removeGroup;
    private $_addItem;
    private $_removeItem;
    private $_addImage;
    private $_addSvg;
    private $_addSnippet;
    private $_addPalette;
}

declare class AssetTemplateGroup {
    name: string;
    title: string;
    description: string;
    items: IAssetTemplate[];
    assets: AssetItem[];
    constructor(source?: any);
}

declare interface AsyncLoadable {
    loadAsync(ctx: PrintContextBase): Promise<void>;
}

/**
 * {}들의 배열.
 * values는 리포트에 저장하지 않는다.
 * 필요하다면 application이 별도로 관리한다. (파일로 저장/로드)
 * (필드.sample로 최초 한 행을 생성하고, 추후 다른 tool로 관리할 수 있도록 한다.)
 */
declare class BandArrayData extends BandData implements IBandData {
    private _linkedValues;
    private _embeddedValues;
    private _sampleCommands;
    private get _values();
    private set _values(value);
    constructor(name: string, fields: IBandDataField[], values: any[], sampleCount?: number, link?: IReportDataLink, dp?: IReportDataProvider);
    get rowCount(): number;
    getRowValues(row: number): any;
    getValue(path: string): any;
    getRowValue(row: number, field: string | number): any;
    setRowValue(row: number, field: string | number, value: any): any;
    getFieldValues(field: string | number, rows?: number[]): any[];
    equalValues(row: number, fields: string[], values: any[]): boolean;
    equalRows(row1: number, row2: number, fields?: string[]): boolean;
    findRows(values: object): number[];
    appendRows(values: any[]): void;
    truncateRows(count: number): void;
    get sampleCommands(): EditCommandStack;
    _internalValues(): any[];
    getValues(): any[];
    setValues(vals: any[]): void;
    removeValueAt(index: number): boolean;
    insertValueAt(values: any, index: number): void;
    clearValues(): void;
    getFieldSample(): any[];
    setLinkSource(source: any[]): void;
    setSource(source: any[]): void;
    getFieldInfos(): IReportDataFieldInfo[];
    /**
     * 특정 모드의 데이터를 일회성으로 조작하기 위한 편의성 메서드 (callback 실행 후 모드는 원복됨)
     */
    runInMode(callback: (() => void) | Promise<void>): void;
    getSaveType(): string;
    loadJson(source: string, link: IReportDataLink): Promise<void>;
    loadCsv(source: string, reader: ICsvDataReader, info: ICsvDataInfo): Promise<void>;
    loadExcel(source: ArrayBuffer, reader: IExcelDataReader, info: IExcelDataInfo): Promise<void>;
    protected _doDataFetched(fetchedData: unknown): void;
    editCommandStackChanged(stack: EditCommandStack, cmd: EditCommand, undoable: boolean, redoable: boolean): void;
    isDirty(): boolean;
    clean(): void;
    onSampleChanged: (stack: EditCommandStack, cmd: EditCommand) => void;
    private $_cloneRow;
    protected _getSampleValues(): any[];
    protected _readRows(): void;
    protected _prepareCalcField(fields: IBandDataField[], fieldMap: any, calcField: IBandDataField, index: number, node: ExpressionNode): void;
}

declare class BandCollectionElement extends ReportGroupItemElement<DataBandCollection> {
    get debugLabel(): string;
    protected _getCssSelector(): string;
    protected _needDesignBox(): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doAfterMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number, sz: Size): void;
    protected _doLayoutContent(ctx: PrintContext): void;
}

declare abstract class BandData extends LinkableReportData {
    static readonly $_ctor: string;
    protected _fields: IBandDataField[];
    private _fieldMap;
    protected _calcFieldRuntime: FieldValueRuntime;
    private _fieldCommands;
    constructor(name: string, fields: IBandDataField[], link?: IReportDataLink, dp?: IReportDataProvider);
    get fieldCommands(): EditCommandStack;
    get fields(): IBandDataField[];
    get fieldCount(): number;
    abstract get rowCount(): number;
    getFields(): IBandDataField[];
    getField(index: number): IBandDataField;
    fieldByName(fieldName: string): IBandDataField;
    getFieldIndex(field: string): number;
    containsField(fieldName: string): boolean;
    indexOfField(field: IBandDataField): number;
    setField(index: number, field: IBandDataField): void;
    getSaveFields(): IBandDataField[];
    getSaveValues(): any[];
    getNextFieldName(prefix?: string): string;
    getFieldNames(): string[];
    addField(field: IBandDataField, index?: number): boolean;
    removeField(field: IBandDataField): boolean;
    abstract getRowValue(row: number, field: string | number): any;
    groupBy(dataView: BandDataSortView, fields: string[], subRows?: number[]): (number | IBandRowGroup | IBandRowGroupFooter)[];
    readValue(field: IBandDataField, value: any): any;
    readRow(row: any): any;
    dateToStr(field: IBandDataField, v: Date): string;
    abstract getFieldValues(field: string | number, rows?: number[]): any[];
    get isBand(): boolean;
    isDirty(): boolean;
    clean(): void;
    save(target: any): any;
    preparePrint(ctx: PrintContext, design: boolean): void;
    editCommandStackChanged(stack: EditCommandStack, cmd: EditCommand, undoable: boolean, redoable: boolean): void;
    onFieldChanged: (stack: EditCommandStack, cmd: EditCommand) => void;
    protected _getSampleValues(): any[];
    protected _readRows(): void;
    protected _prepareCalcField(fields: IBandDataField[], fieldMap: any, calcField: IBandDataField, index: number, node: ExpressionNode): void;
}

declare class BandDataSortView extends Base implements IBandDataSortView {
    static readonly SOURCE_INDEX = "_source_index_";
    private _source;
    private _fieldMap;
    private _view;
    constructor(data: IReportData);
    get rowCount(): number;
    sort(field: string, direction: DataDirection): this;
    getRowValue(row: number, field: string): any;
    getFieldValues(field: string, rows?: number[]): any[];
}

declare abstract class BandDesigner extends PopupElement {
    static readonly TITLE_CONTAINER_CLASS = "rr-band-designer-title-container";
    static readonly TITLE_CLASS = "rr-band-designer-title";
    static readonly FOOTER_CLASS = "rr-band-designer-footer";
    static readonly INPUT_LABEL_CLASS = "rr-band-designer-input-label";
    static readonly SUBMIT_BTN_CLASS = "rr-band-designer-submit-button";
    static readonly FIELD_LIST_CLASS = "rr-band-designer-field-list";
    static readonly FIELD_CLASS = "rr-band-designer-field";
    static readonly ARROW_CLASS = "rr-band-designer-arrow";
    static readonly ARROW_BUTTON_CONTAINER_CLASS = "rr-band-designer-arrow-button-container";
    static readonly BTN_ACTIVATED_CLASS = "rr-band-designer-toolbtn-activated";
    static readonly SEARCH_CONTAINER_CLASS = "rr-band-designer-search-container";
    static readonly SEARCH_INPUT_CLASS = "rr-band-designer-search-input";
    protected _spanTitle: HTMLSpanElement;
    protected _container: HTMLDivElement;
    protected _dataContainer: HTMLDivElement;
    protected _arrowContainer: HTMLDivElement;
    protected _bandContainer: HTMLDivElement;
    protected _buttonContainer: HTMLDivElement;
    protected _ok: HTMLButtonElement;
    protected _cancel: HTMLButtonElement;
    _sizer: HTMLDivElement;
    protected _editor: VisualContainer;
    protected _dataList: HTMLSelectElement;
    protected _fieldListManager: FieldListManager;
    protected _appliedListManager: FieldListManager;
    abstract _end(completed: boolean): void;
    protected abstract _getTitle(): string;
    clickField(div: HTMLElement): void;
    dblClickField(div: HTMLElement): void;
    enterKeyDown(event: KeyboardEvent): void;
    escKeyDown(event: KeyboardEvent): void;
    buttonClick(button: HTMLButtonElement): void;
    private $_refreshFields;
    protected _refreshBandFields(): void;
    $_checkArrows(): void;
    resizeBy(dw: number, dh: number, draw?: boolean): void;
    private $_addAll;
    private $_removeAll;
    private $_add;
    private $_remove;
    private $_moveAll;
    private $_afterMove;
}

declare abstract class BandElement<T extends DataBand = DataBand> extends BandItemElement<T> {
    static readonly END_ROW_MESSAGE_CLASS = "rr-end-row-message";
    static readonly END_ROW_CLASS = "rr-end-row";
    static readonly BORDER_CONTAINER = "rr-band-border-container";
    abstract get rowView(): ReportGroupItemView;
    private _needFooterView;
    get needFooterView(): boolean;
    set needFooterView(value: boolean);
    abstract printRow(ctx: PrintContext, row: number): any;
    findMasterBand(band: DataBand): DataBand;
    getBandLevel(masterBand: DataBand, band: DataBand): string;
    abstract addMasterRow(page: HTMLDivElement, headerView: any, rowView: any, x: number, y: number): number;
    abstract prepareAsync(doc: Document, ctx: PrintContext, width: number, subRows: number[], masterRow: number): BandPrintInfo<any>;
    abstract prepareSubBand(doc: Document, ctx: PrintContext, width: number, dataRows: number[]): BandPrintInfo<any>;
    protected _prepareDetail(doc: Document, ctx: PrintContext, band: DataBand, details: DataBandCollection, detailViews: BandCollectionElement, masterBandRow: number, rows: BandPrintRow[], width: number): void;
    private $_prepareDetailDataBand;
    private $_prepareDetailBandGroup;
    private $_setBandLevel;
}

declare class BandFooterPrintInfo {
}

declare class BandGroup extends ReportGroupItem {
    static readonly MIN_BAND_COUNT = 1;
    static readonly PROP_BAND_COUNT = "bandCount";
    static readonly PROP_BAND_GAP = "bandGap";
    static readonly PROP_NO_SPLIT = "noSplit";
    static readonly PROP_DIRECTION = "direction";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: any[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Band Group";
    private _bandGap;
    private _noSplit;
    private _direction;
    private _master;
    constructor(name: string);
    /**
     * band count.
     */
    get bandCount(): number;
    set bandCount(value: number);
    /**
     * gap between bands.
     */
    get bandGap(): number;
    set bandGap(value: number);
    /**
     * 밴드그룹 설정 방향
     */
    get direction(): Direction;
    set direction(value: Direction);
    /**
     * true면 밴드 아이템 전체 높이가 출력 페이지의 남은 높이 보다 클 경우 다음 페이지에 출력한다. #612
     */
    get noSplit(): boolean;
    set noSplit(value: boolean);
    /**
     * master band.
     */
    get master(): DataBand;
    set master(band: DataBand);
    /* Excluded from this release type: loadProps */
    getBandItem(index: number): DataBand | undefined;
    getSaveType(): string;
    get outlineLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canAdd(item: ReportItem): boolean;
    private $_resetCells;
}

/* Excluded from this release type: BandGroupElement */

declare class BandGroupMarquee extends EditMarquee<BandGroupElement> {
    private static readonly STYLE_NAME;
    private static readonly W_ITEM;
    private static readonly H_ITEM;
    static $_isContainer(dom: HTMLElement): boolean;
    static getTarget(target: ReportItem, dom: HTMLElement): IEditMarqueeTarget;
    private _tableItem;
    private _topItems;
    private _topTrackers;
    private _sizeFeedback;
    private _sizeValueFeedback;
    private _cellFocus;
    private _topDivs;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doLayout(doc: Document, dom: HTMLElement, r: Rectangle): void;
    private $_getDivs;
    private $_getItems;
    private $_getTrackers;
}

declare class BandGroupPrintInfo extends BandPrintInfo<BandGroup> {
    group: BandGroup;
    groupInfos: (TextPrintInfo | BandPrintInfo<BandModel> | TextBandPrintInfo)[];
    left: string;
    gap: number;
    isEnded(): boolean;
    getRows(): any[];
    rollback(page: HTMLDivElement): void;
    getNextPage(doc: Document, ctx: PrintContext, width: number, parent: HTMLDivElement): HTMLDivElement | null;
    getNoPagingPage(doc: Document, ctx: PrintContext, width: number, parent: HTMLDivElement): HTMLDivElement;
    getEmptyDataBandPage(doc: Document, ctx: PrintContext, bandPrintInfo: BandGroupPrintInfo, width: number, parent: HTMLDivElement): HTMLDivElement;
    resetRowIndex(): void;
    private $_createBandGroupPage;
    private $_attachHorizontalBandGroup;
    private $_attachVeritcalBandGroup;
}

declare abstract class BandItemElement<T extends ReportBandItem = ReportBandItem> extends ReportGroupItemElement<T> {
    abstract getLines(): ReportItemElement[];
    getSibling(item: ReportItemElement, delta: number): ReportItemElement;
    protected _getNext(item: ReportItemElement): ReportItemElement;
    protected _getPrev(item: ReportItemElement): ReportItemElement;
}

declare type BandModel = SimpleBand | TableBand | BandGroup | CrosstabBand;

declare abstract class BandPrintInfo<T extends ReportItem> {
    band: T;
    xBand: number;
    ptsBand: number[];
    wBand: number;
    bandCellWidth: number;
    bandCellHeight: number;
    masterRow: number;
    masterValues: any;
    /**
     * rows per page.
     * NaN이 아니면 이 수 만큼만 출력하고 페이지를 넘긴다.
     */
    rpp: number;
    /**
     * end row count
     * NaN이 아니면 이 수만큼 빈 행을 추가한다.
     * endRowCount가 0보다 커서 이전 페이지에서 빈 행들을 추가했는데 다 출력하지 못한 빈 행수.
     */
    erc: number;
    detailRows: number[];
    isMasterRowPrintNext: boolean;
    needMasterHeader: boolean;
    needNextPage: boolean;
    private _headerSectionPrinted;
    private _footerSectionPrinted;
    get isHeaderSectionPrinted(): boolean;
    set headerSectionPrinted(print: boolean);
    get isFooterSectionPrinted(): boolean;
    set footerSectionPrinted(print: boolean);
    abstract isEnded(): boolean;
    abstract getRows(): any[];
    abstract getNextPage(doc: Document, ctx: PrintContextBase, width: number, parent: HTMLDivElement): HTMLDivElement | null;
    abstract getNoPagingPage(doc: Document, ctx: PrintContextBase, width: number, parent: HTMLDivElement): HTMLDivElement;
    abstract getEmptyDataBandPage(doc: Document, ctx: PrintContextBase, bandPrintInfo: BandPrintInfo<T>, width: number, parent: HTMLDivElement): HTMLDivElement | null;
    abstract resetRowIndex(): void;
    rollback(page: HTMLDivElement): void;
    setMaxCount(rows: any[], count: number): void;
    isDataRow(row: any): row is number;
    isBand(row: any): row is BandPrintInfo<any>;
    isGroupHeader(row: any): boolean;
    isGroupFooter(row: any): boolean;
    /**
     * 밴드아이템 출력중 가장 마지막 행이 포함되어서 출력중인지 판단
     */
    isLastRowIncluded(lastRow: number, rows: TableBandPrintRow[] | SimpleBandPrintRow[]): boolean;
    /**
     * 데이터가 존재하지 않는 밴드에 대해 표시할지 말지 여부를 판단할 때 사용
     */
    isEmptyDataBandVisible(): boolean;
    /**
     * 밴드의 left, right 속성 적용
     */
    setBandBoundPosition(ctx: PrintContextBase, model: BandModel, div: HTMLDivElement): void;
    setBandPrevIndex(index: number): void;
    createBorderContaienr(doc: Document, y: number, w: number, name: string, tModel: string): HTMLDivElement;
    setBorderContainerStyle(borderContainer: HTMLDivElement, styles: {
        [x: string]: string;
    }): void;
    setBoxSidesStyle(bandContainer: HTMLDivElement, styles: Styles): void;
    protected _setX(dom: HTMLElement, x: number): void;
    protected _setY(dom: HTMLElement, y: number): void;
    protected _setPos(dom: HTMLElement, x: number, y: number): void;
    protected _createPage(doc: Document, parent: HTMLDivElement): HTMLDivElement;
    protected _createSectionPage(doc: Document, parent: HTMLDivElement): HTMLDivElement;
    protected _createBandDetailPage(doc: Document, top: number, pageWidth: number): HTMLDivElement;
    protected _buildEndRows(marker: EndRowMarker, rowCount: number, rows: any[]): void;
    protected _unshiftEndRows(row: any, rows: any[]): void;
    /**
     * 마스터-디테일 형태에서 디테일이 출력되는 동안 페이지마다 마스터 행 출력 준비
     * 현재 출력중인 마스터 밴드 행 번호 사용
     * @param band 마스터 밴드 정보
     * @param rows 출력해야할 행 정보 목록
     * @see {@link https://github.com/realgrid/realreport/issues/1138}
     */
    protected _prepareRepeatMasterRow(band: DataBand, rows: BandPrintRow[]): void;
    /**
     * 마스터-디테일 밴드에서 마스터 헤더 출력여부와 관련된 값들에 대한 설정
     * @param band 출력중인 밴드 정보
     * @param bandHeaderPrinted 출력중인 페이지내에서 마스터 해더의 출력여부
     * @param printed 출력했는지 여부
     */
    protected _setBandHeaderPrintFlag(band: DataBand, printed: boolean): void;
    /**
     * 디테일 밴드를 계속 출력 or 끝 결정
     * @param ctx PrintContext
     * @param rows 현재 출력해야 할 행들에 대한 목록
     * @param row 현재 출력중인 행 정보
     * @param rowsPerPage 페이지에서 몇행 까지 출력할 수 있는지 정보
     * @returns true = 디테일 밴드 출력 끝, false = 다음장에 디테일 계속 출력
     */
    protected _isDetailBandPrintEnd(row: BandPrintInfo<SimpleBand | TableBand | BandGroup>): boolean;
    protected _resetRowIndex(row: BandPrintInfo<SimpleBand | TableBand | BandGroup>): void;
    protected _prepareDetailBandPrintNext(ctx: PrintContextBase, band: DataBand, row: BandPrintInfo<SimpleBand | TableBand | BandGroup>, rows: BandPrintRow[], rowsPerPage: number): void;
    protected _isNextRowDataRow(rows: BandPrintRow[]): boolean;
    /**
     * 밴드 디테일 영역에서 SummaryItem 계산을 위한 데이터 준비
     */
    protected _prepareBandDetailSummary(ctx: PrintContext, band: DataBand): void;
}

declare type BandPrintRow = number | BandFooterPrintInfo | BandPrintInfo<any> | EndRowMarker;

declare enum BandSectionLayout {
    ACROSS_DOWN = "acrossDown",
    DOWN_ACROSS = "downAcross"
}

declare type BandSectionType = 'header' | 'dataRow' | 'footer' | 'groupHeader' | 'groupFooter';

declare type BarAxisDirection = 'context' | 'leftToRight' | 'rightToLeft';

declare type BarAxisPosition = 'auto' | 'middle' | 'none';

declare enum BarcodeFormat {
    CODE39 = "code39",
    CODE128 = "code128",
    CODE128A = "code128a",
    CODE128B = "code128b",
    CODE128C = "code128c",
    EAN13 = "ean13",
    EAN8 = "ean8",
    EAN5 = "ean5",
    EAN2 = "ean2",
    UPC = "upc",
    UPCE = "upce",
    ITF = "itf",
    ITF14 = "itf14",
    MSI10 = "msi10",
    MSI11 = "msi11",
    MSI1010 = "msi1010",
    MSI1110 = "msi1110",
    PHARMACODE = "pharmacode",
    CODABAR = "codabar"
}

/**
 * 1차원 barcode item.
 */
declare class BarcodeItem extends ReportItem {
    static readonly PROP_FORMAT = "format";
    static readonly PROP_TEXT = "text";
    static readonly PROP_BAR_WIDTH = "barWidth";
    static readonly PROP_SHOW_TEXT = "showText";
    static readonly PROP_TEXT_POSITION = "textPosition";
    static readonly PROP_TEXT_MARGIN = "textMargin";
    static readonly PROP_TEXT_ALIGN = "textAlign";
    static readonly PROP_FLAT = "flat";
    static readonly PROP_LAST_CHAR = "lastChar";
    /** Barcode를 표현할 수 있는 영역의 최소 크기 (한 변 기준, px단위) */
    static readonly BARCODE_WIDTH_MIN_SIZE = 50;
    static readonly BARCODE_HEIGHT_MIN_SIZE = 15;
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Barcode";
    private _format;
    private _text;
    private _barWidth;
    private _showText;
    private _textAlign;
    private _textPosition;
    private _textMargin;
    private _flat;
    private _lastChar;
    constructor(name: string);
    /** format */
    get format(): BarcodeFormat;
    set format(value: BarcodeFormat);
    /**
     * text
     */
    get text(): string;
    set text(value: string);
    /**
     * bar width
     */
    get barWidth(): number;
    set barWidth(value: number);
    /**
     * show text
     */
    get showText(): boolean;
    set showText(value: boolean);
    /**
     * text align
     */
    get textAlign(): Align;
    set textAlign(value: Align);
    get textPosition(): 'top' | 'bottom';
    set textPosition(value: 'top' | 'bottom');
    /**
     * text margin
     */
    get textMargin(): number;
    set textMargin(value: number);
    /**
     * flat
     */
    get flat(): boolean;
    set flat(value: boolean);
    get lastChar(): string;
    set lastChar(value: string);
    convertText(s: string): string;
    getSaveType(): string;
    get outlineLabel(): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare type BarcodeOutput = 'image' | 'font';

/* Excluded from this release type: Base */

/**
 * BodyItemAddSection
 */
declare class BodyItemAddSection extends ItemAddSection<PageBody> {
    static readonly $_ctor: string;
    constructor(target: PageBody);
    get pathLabel(): string;
    get outlineLabel(): string;
    protected _doItemAdded(item: ReportItem, index: number): void;
}

/* Excluded from this release type: BodyItemAddSectionElement */

declare class BodyView$1 extends DesignerLayerElement {
    protected _doInitStyles(dom: HTMLElement): void;
}

declare class BodyView extends DialogBodyView {
    private _fileType;
    private _tagInput;
    constructor(ctx: IDesignerContext);
    prepare(doc: Document, ctx: IDesignerContext): this;
    getResult(): {
        fileType: ReportArchiveType;
        tag: string;
    };
    createInput(doc: Document, options: {
        id: string;
        label: string;
        type: 'text' | 'select';
        selectOptions?: SelectOption[];
    }): {
        inputWrapper: HTMLDivElement;
        input: HTMLInputElement | HTMLSelectElement;
    };
    createTextInput(doc: Document): HTMLInputElement;
    createSelect(doc: Document, selectOptions?: SelectOption[]): HTMLSelectElement;
}

declare class BottomView extends DialogBottomView<UploadArchiveDlg> {
    static readonly BOTTOM_UPLOAD_BTN_ID = "upload-archive-dialog-bottom-preview";
    static readonly BOTTOM_CANCEL_BTN_ID = "upload-archive-dialog-bottom-cancel";
    protected _doInitBottom(doc: Document): void;
}

/**
 * 자식들의 위치를 지정할 수 있는 container.
 * 위치 설정이 안된 item은 중앙에 정렬 시킨다.
 */
declare abstract class BoundedContainer extends ReportGroupItem {
    static readonly CHILD_PROPS: IPropInfo[];
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doLoadChild(child: ReportItem, src: any): void;
}

/* Excluded from this release type: BoundedContainerElement */

declare abstract class BoxContainer extends ReportGroupItem {
    static readonly PROP_ITEMS_ALIGN = "itemsAlign";
    static readonly PROP_ITEM_GAP = "itemGap";
    static readonly PROP_OVERFLOW = "overflow";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    private _itemsAlign;
    private _itemGap;
    private _overflow;
    private _itemGapDim;
    constructor(name: string);
    /**
     */
    get itemsAlign(): BoxItemsAlign;
    set itemsAlign(value: BoxItemsAlign);
    /**
     */
    get itemGap(): string | number;
    set itemGap(value: string | number);
    /**
     * true로 설정되면 자식이 넘칠 수 있다.
     * 특히, table을 자식으로 갖는 경우 true로 설정해야 우측 끝이 표시되는 경우가 있을 수 있다.
     */
    get overflow(): boolean;
    set overflow(value: boolean);
    getItemGap(domain: number): number;
    /* Excluded from this release type: loadProps */
    protected _datable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canAlign(child: ReportItem): boolean;
}

/* Excluded from this release type: BoxContainerElement */

declare enum BoxItemsAlign {
    START = "start",
    MIDDLE = "middle",
    END = "end"
}

declare enum CCITTScheme {
    GROUP_3 = "g3",
    GROUP_3_2D = "g3-2d",
    GROUP_4 = "g4"
}

/**
 * CellGroup들만을 자식으로 갖는다.
 */
declare abstract class CellContainer extends ReportGroupItem {
    /* Excluded from this release type: noPrepareCell */
    contains(item: ReportItem, deep?: boolean): boolean;
    indexOf(item: ReportItem): number;
    findCell(item: ReportItem): CellGroup;
    find(name: string, recursive?: boolean): ReportItem;
    protected _loadChild(loader: IReportLoader, item: ReportItem, src: any): ReportItem;
    protected _addItem(item: ReportItem, index: number, silent: boolean): ReportItem;
    protected _removeItem(item: ReportItem): number;
    protected abstract _prepareCellGroup(item: ReportItem): CellGroup;
    protected _unprepareCellGroup(item: ReportItem): CellGroup;
}

/**
 * 자식을 대리하는 그룹.
 * 자식 하나만 가질 수 있다.
 */
declare abstract class CellGroup extends ReportGroupItem {
    private _item;
    constructor(item: ReportItem, name: string);
    /**
     * item
     */
    get item(): ReportItem;
    get isEmpty(): boolean;
    get isChildPropContainer(): boolean;
    set childPropInfos(value: IPropInfo[]);
    get printable(): boolean;
    protected _maxChildCount(): number;
    protected _doItemChanged(item: ReportItem, prop: string, value: any, oldValue: any): void;
}

declare abstract class ChartAxis<T extends ChartItem, C = unknown> extends ChartDataObject<T, C> {
    static readonly PROPINFOS: IPropInfo[];
    private _collection;
    private _index;
    constructor(collection: ChartAxisCollection<T>);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    abstract get type(): string;
    get collection(): ChartAxisCollection<T>;
    set collection(value: ChartAxisCollection<T>);
    get index(): number;
    set index(value: number);
    get displayPath(): string;
    getSaveLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: ReportTarget): void;
}

declare abstract class ChartAxisCollection<T extends ChartItem, C = unknown> extends ReportItemCollection<ChartAxis<T, C>> implements ReportObject {
    private _chart;
    private _axes;
    constructor(chart: T);
    get outlineParent(): IOutlineSource;
    abstract get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get owner(): ChartItem;
    get chart(): T;
    get count(): number;
    get items(): ChartAxis<T, C>[];
    get visibleCount(): number;
    abstract getChartConfig(context: PrintContext): C[];
    abstract getSaveLabel(): string;
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource): void;
    save(target: ReportTarget): boolean;
    get(index: number): ChartAxis<T, C>;
    indexOf(axis: ChartAxis<T, C>): number;
    addNew(loader: IReportLoader, type: string): ChartAxis<T, C>;
    add(axis: ChartAxis<T, C>): ChartAxis<T, C>;
    removeAt(index: number): boolean;
    remove(axis: ChartAxis<T, C>): boolean;
    clear(): boolean;
    get page(): ReportPageBase;
    abstract get displayPath(): string;
    get level(): number;
    isCollection(): boolean;
    isAncestorOf(item: ReportPageItem): boolean;
    getCollectionLabel(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    protected abstract _createAxis(loader: IReportLoader, src: ReportSource): ChartAxis<T, C>;
    protected abstract _axesChanged(): void;
    protected _doDefaultInit(): void;
    private $_invalidateAxes;
}

declare abstract class ChartDataObject<T extends ChartItem, C = unknown> extends ChartObject$1<T, C> {
    static readonly PROP_DATA = "data";
    static readonly PROPINFOS: IPropInfo[];
    private _data;
    constructor(chart: T);
    get data(): string;
    set data(value: string);
    protected getData(): IReportData | undefined;
    protected getDataFieldNames(): string[];
    protected getDataFieldValue(context: PrintContext, field: string): unknown;
    protected _getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
    getPlaceHolder(prop: IPropInfo): string;
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
}

declare abstract class ChartItem<C = unknown> extends ReportGroupItem implements ChartWrappable<C> {
    abstract getChartConfig(context: PrintContext): C;
    getParentBand(): DataBand;
}

declare abstract class ChartObject$1<T extends ChartItem, C = unknown> extends ReportPageItem implements ReportObject, ChartWrappable<C> {
    static readonly PROP_VISIBLE = "visible";
    static readonly PROP_VISIBLE_DEFAULT_VALUE = true;
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: any[];
    private _visible;
    private _chart;
    private _styles;
    constructor(chart: T);
    get outlineParent(): IOutlineSource | undefined;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    getSaveType(): string;
    canRemoveFrom(): boolean;
    abstract getSaveLabel(): string;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyle(style: string): string;
    setStyle(style: string, value: string): void;
    getStyleProperty(prop: string): any;
    setStyleProperty(prop: string, value: any): void;
    isChildProp(prop: string): boolean;
    getSubStyleProperty(prop: string, style: string): any;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    get visible(): boolean;
    set visible(value: boolean);
    get chart(): T;
    get page(): ReportPageBase;
    get report(): ReportBase;
    get pathLabel(): string;
    get displayPath(): string;
    get level(): number;
    get styles(): Styles;
    set styles(value: Styles);
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource): void;
    save(target: ReportTarget): boolean;
    abstract getChartConfig(context: PrintContext): C;
    get dataParent(): ReportGroupItem;
    get marqueeParent(): ReportItem;
    isCollection(): boolean;
    protected _doDefaultInit(): void;
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    protected _getParentData(): string;
    protected _changed(prop: string, newValue: unknown, oldValue: unknown): void;
}

declare abstract class ChartObject<T extends ReportGroupItem> extends ReportItem {
    static readonly PROPINFOS: IPropInfo[];
    private _chart;
    constructor(chart: T, name?: string);
    get chart(): T;
    canHide(): boolean;
    getWrapper(): object;
    get page(): ReportPageBase;
    get report(): ReportBase;
    get dataParent(): ReportGroupItem;
    get marqueeParent(): ReportItem;
    getSaveType(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: any): void;
    protected _isDefaultVisible(): boolean;
    protected _getPropsWrapper(target: any, excludes?: string[], names?: {
        [key: string]: string;
    }): any;
}

declare abstract class ChartSeries$1<T extends ChartItem, C = unknown> extends ChartDataObject<T, C> {
    static readonly PROP_VALUE_FIELD = "valueField";
    static readonly PROP_VALUES = "values";
    static readonly PROPINFOS: IPropInfo[];
    private _valueField;
    private _values;
    private _collection;
    private _index;
    private _designVisible;
    constructor(collection: ChartSeriesCollection$1<T>);
    getPropDomain(prop: IPropInfo): any[];
    get outlineLabel(): string;
    get outlineParent(): IOutlineSource;
    abstract get type(): string;
    get valueField(): string;
    set valueField(value: string);
    get values(): number[];
    set values(value: number[]);
    get collection(): ChartSeriesCollection$1<T>;
    set collection(value: ChartSeriesCollection$1<T>);
    get index(): number;
    set index(value: number);
    get designVisible(): boolean;
    set designVisible(value: boolean);
    hasSeriesData(context: PrintContext): boolean;
    protected getVisible(context: PrintContext): boolean;
    protected getSeriesData(context: PrintContext): number[];
    get displayPath(): string;
    getSaveLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: ReportTarget): void;
}

declare abstract class ChartSeries<T extends ReportGroupItem> extends ChartObject<T> {
    static readonly PROP_SERIES_ID = "id";
    static readonly PROP_DESIGN_VISIBLE = "designVisible";
    static readonly PROP_VALUE_FIELD = "valueField";
    static readonly PROP_VALUES = "values";
    static readonly PROPINFOS: IPropInfo[];
    private _id;
    private _designVisible;
    private _valueField;
    private _values;
    constructor(chart: T);
    getPropDomain(prop: IPropInfo): any[];
    abstract get seriesType(): string;
    /**
     * id
     */
    get id(): string;
    set id(value: string);
    /**
     * design visible
     */
    get designVisible(): boolean;
    set designVisible(value: boolean);
    /**
     * valueField
     **/
    get valueField(): string;
    set valueField(value: string);
    /**
     * valueField가 지정되면 이 속성은 무시된다.
     */
    get values(): number[];
    set values(value: number[]);
    hasValuesProp(): boolean;
    getValues(ctx: PrintContext, dp: IReportDataProvider): any[];
    getSaveType(): string;
    get displayPath(): string;
    get outlineLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare abstract class ChartSeriesCollection$1<T extends ChartItem, C = unknown> extends ReportItemCollection<ChartSeries$1<T, C>> implements ReportObject {
    private _chart;
    private _seriesList;
    constructor(chart: T);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get owner(): ChartItem;
    get chart(): T;
    get count(): number;
    get items(): ChartSeries$1<T, C>[];
    get visibleCount(): number;
    abstract getChartConfig(context: PrintContext): C[];
    getSaveLabel(): string;
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource): void;
    save(target: ReportTarget): boolean;
    get(index: number): ChartSeries$1<T, C>;
    indexOf(series: ChartSeries$1<T, C>): number;
    addNew(loader: IReportLoader, type: string): ChartSeries$1<T, C>;
    add(series: ChartSeries$1<T, C>): ChartSeries$1<T, C>;
    removeAt(index: number): boolean;
    remove(series: ChartSeries$1<T, C>): boolean;
    clear(): boolean;
    select(series: ChartSeries$1<T, C> | null): void;
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    isCollection(): boolean;
    isAncestorOf(item: ReportPageItem): boolean;
    getCollectionLabel(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    protected abstract _createSeries(loader: IReportLoader, src: ReportSource): ChartSeries$1<T, C>;
    protected abstract _seriesChanged(): void;
    protected _doDefaultInit(): void;
    private $_invalidateSeriesList;
}

declare abstract class ChartSeriesCollection<T extends ReportGroupItem> extends ReportItemCollection<ChartSeries<T>> {
    private _chart;
    protected _series: ChartSeries<T>[];
    constructor(chart?: T);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    get owner(): ReportItem;
    /** chart */
    get chart(): T;
    /** count */
    get count(): number;
    get items(): ReportPageItem[];
    get visibleCount(): number;
    load(loader: IReportLoader, src: any): void;
    save(target: any): void;
    get(index: number): ChartSeries<T>;
    indexOf(series: ChartSeries<T>): number;
    add(loader: IReportLoader, series: ChartSeries<T> | ConfigObject, index?: number): ChartSeries<T>;
    addAll(loader: IReportLoader, series: (ChartSeries<T> | ConfigObject)[], index?: number): boolean;
    removeAt(index: number): boolean;
    remove(series: ChartSeries<T>): boolean;
    clear(): boolean;
    select(series: ChartSeries<T>): void;
    getSaveType(): string;
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    isAncestorOf(item: ReportPageItem): boolean;
    protected abstract _createSeries(loader: IReportLoader, src: any): ChartSeries<T>;
    protected abstract _seriesChanged(series: ChartSeries<T>): void;
    private $_add;
    private $_invalidateSeries;
    private $_seriesChanged;
    protected _doMoveItem(from: number, to: number): boolean;
}

declare abstract class ChartTextObject$1<T extends ChartItem, C = unknown> extends ChartObject$1<T, C> {
    static readonly PROP_TEXT = "text";
    static readonly PROPINFOS: IPropInfo[];
    private _text;
    constructor(chart: T, text?: string);
    /** text */
    get text(): string;
    set text(value: string);
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
}

declare abstract class ChartTextObject<T extends ReportGroupItem> extends ChartObject<T> {
    static readonly PROP_TEXT = "text";
    static readonly PROPINFOS: IPropInfo[];
    private _text;
    constructor(chart: T);
    /** text */
    get text(): string;
    set text(value: string);
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
}

declare interface ChartWrappable<ChartConfig> {
    getChartConfig(context: PrintContext): ChartConfig;
}

declare interface Closable {
    close(): void;
}

declare class ColHeaderSelection2 extends HeaderSelection implements ISelectionSource {
    column: SheetColumn;
    constructor(column: SheetColumn, count?: number);
    get selectedItem(): SheetColumn;
}

/**
 * Color palette
 */
declare class ColorPaletteAsset extends AssetItem {
    protected _parsetData(data: string): void;
    protected _doSave(target: any): void;
}

/**
 * 수직으로 자식 item들을 배치한다.
 * Html flex box를 활용한다.
 */
declare class ColumnBoxContainer extends BoxContainer {
    static readonly CHILD_PROPS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Column Box";
    private _child_left;
    private _child_right;
    constructor(name: string);
    /**
     * left
     */
    getLeftOf(item: ReportItem): number | string;
    setLeftOf(item: ReportItem, value: number | string): void;
    /**
     * right
     */
    getRightOf(item: ReportItem): number | string;
    setRightOf(item: ReportItem, value: number | string): void;
    getSaveType(): string;
    get outlineLabel(): string;
    get pathLabel(): string;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoadChild(child: ReportItem, src: any): void;
    canAlignTo(item: ReportPageItem, to: string): boolean;
    canResizeChild(item: ReportItem, dir: ResizeDirection): boolean;
}

/**
 * View for ColumnBoxContainer
 */
declare class ColumnBoxContainerElement extends BoxContainerElement<ColumnBoxContainer> {
    private _points;
    constructor(doc: Document, model: ColumnBoxContainer);
    getRowPoints(): number[];
    get debugLabel(): string;
    protected _getCssSelector(): string;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContext): void;
    /**
     *
     * @param x paddingLeft + borderLeftWidth 를 더한 것
     * @param width columnBox Width - (paddingLeft + borderLeftWidth + paddingRight + borderRightWidth)
     */
    protected _layoutItem(ctx: PrintContext, child: ReportElement, model: ReportItem, x: number, y: number, width: number, height: number): void;
    getLeft(view: ReportItemView): ReportItemView;
    getRight(view: ReportItemView): ReportItemView;
}

declare class ColumnBoxMarquee extends EditMarquee<ColumnBoxContainerElement> {
    private static readonly STYLE_NAME;
    static getTarget(target: ReportItem, dom: HTMLElement): IEditMarqueeTarget;
    private _leftItems;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doLayout(doc: Document, dom: HTMLElement, columnBoxRect: Rectangle): void;
    private $_getItems;
}

declare class ColumnHeaderLayer extends HeaderLayer$1 {
    static readonly MENU = "col_header";
    private CONTEXT_MENUS;
    _headerView: DesignColumnHeaderView;
    _colPts: number[];
    private _xPage;
    private _startPosition;
    constructor(doc: Document, editor: ExcelReportEditor);
    get startPosition(): number;
    set startPosition(position: number);
    setPage(reportView: ExcelReportEditView, colPts: number[], zoom: number): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContextBase, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContextBase): void;
    private $_layoutHandles;
}

declare type ConditionalFormattingRule = IDataBarRuleType;

declare type ConfigObject = {
    [key: string]: any;
};

declare type ContextValueCallback = (ctx: PrintContextBase) => any;

/**
 * Crosstab band.
 *
 * 1. rowFields + columnFields 로 정렬하고 그룹핑해서 CrosstabCellCollection에 저장한다.
 */
declare class CrosstabBand extends ReportGroupItem {
    static readonly PROP_TITLE = "title";
    static readonly PROP_NULL_VALUE = "nullValue";
    static readonly PROP_MAX_ROW_COUNT = "maxRowCount";
    static readonly PROP_NO_SPLIT = "noSplit";
    static readonly PROP_VALUES_ON_ROWS = "valuesOnRows";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    static isFieldCell(item: ReportPageItem): boolean;
    static getFieldOf(cell: CrosstabFieldCell): CrosstabField;
    static getBandOf(cell: CrosstabFieldCell): CrosstabBand;
    private _maxRowCount;
    private _noSplit;
    private _valuesOnRows;
    private _title;
    private _nullValue;
    private _rowFields;
    private _columnFields;
    private _valueFields;
    private _cells;
    private _columns;
    private _rows;
    pageNo: number;
    rowIndex: number;
    constructor(name: string);
    /**
     * Cross table 생성시 사용될 원본 데이터 최대 행 수.
     */
    get maxRowCount(): number;
    set maxRowCount(value: number);
    /**
     * true면 밴드 아이템 전체 높이가 출력 페이지의 남은 높이 보다 클 경우 다음 페이지에 출력한다. #612
     */
    get noSplit(): boolean;
    set noSplit(value: boolean);
    /**
     * true면 value fields 정보를 행 기준으로 표시한다.
     */
    get valuesOnRows(): boolean;
    set valuesOnRows(value: boolean);
    /**
     * title
     */
    get title(): CrosstabBandTitle;
    /**
     * null value
     */
    get nullValue(): CrosstabNullValue;
    /** rowFields */
    get rowFields(): CrosstabRowFieldCollection;
    get rowFieldCount(): number;
    /** columnFields */
    get columnFields(): CrosstabColumnFieldCollection;
    /** valueFields */
    get valueFields(): CrosstabValueFieldCollection;
    get rows(): CrosstabRowCollection;
    get bandData(): BandArrayData;
    get columns(): CrosstabColumnCollection;
    canAddField(field: string): boolean;
    containsField(field: string): boolean;
    getRowField(index: number): CrosstabField;
    getColumnField(index: number): CrosstabColumnField;
    getGroupFields(): CrosstabField[];
    build(): void;
    private _calcSummary;
    getCellValue(data: BandArrayData, r: number, c: number): any;
    getSaveType(): string;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    get isBand(): boolean;
    protected _datable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    isAncestorOf(item: ReportPageItem): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: any): void;
    _fieldsChanged(field: CrosstabField): void;
}

/**
 * Crosstab band topLeft 모서리 셀에 표시되는 내용에 대한 모델.
 */
declare class CrosstabBandTitle extends ReportItem {
    static readonly PROP_TEXT = "text";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly styleProps;
    private _text;
    private _band;
    constructor(band: CrosstabBand);
    /** text */
    get text(): string;
    set text(value: string);
    get page(): ReportPageBase;
    protected _getEditProps(): any[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class CrosstabCell {
    private _keys;
    private _rows;
    private sum;
    private count;
    private min;
    private max;
    private avg;
    constructor(keys: any[], rows: number[]);
    get rowCount(): number;
    getKey(field: number): any;
    getValue(data: IBandData, field: number, exp: string): number;
}

declare class CrosstabCellCollection {
    private _band;
    private _filters;
    private _cells;
    constructor(band: CrosstabBand);
    get count(): number;
    getKey(index: number, field: number): any;
    getCell(index: number): CrosstabCell;
    getCells(start?: number, end?: number): CrosstabCell[];
    setFilters(filters: IFilter[]): void;
    build(data: BandArrayData): void;
    private $_getUniqFieldDatas;
    /**
     * 넘어온 데이터대로 정렬순서를 정의한다.
     */
    private $_recursiveSort;
    private $_collectRows;
    private $_sortRows;
    private $_buildCells;
}

declare class CrosstabColumn {
    static readonly $_ctor: string;
    hash: number;
    parent: CrosstabColumn;
    vlevel: number;
    protected _field: CrosstabColumnField;
    private _value;
    private _children;
    constructor(field: CrosstabColumnField, value: any);
    get field(): CrosstabColumnField;
    get value(): any;
    get count(): number;
    get children(): CrosstabColumn[];
    get level(): number;
    get isLeaf(): boolean;
    get leafCount(): number;
    getChild(index: number): CrosstabColumn;
    clear(): void;
    add(column: CrosstabColumn, force?: boolean): void;
    addSummary(column: CrosstabSummaryColumn): void;
    sort(): void;
    getHeader(): string;
    ancestorByLevel(level: number): CrosstabColumn;
    ancestorByVlevel(level: number): CrosstabColumn;
}

/* Excluded from this release type: CrosstabColumnCollection */

declare class CrosstabColumnField extends CrosstabField {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _prefix;
    private _suffix;
    constructor(collection: CrosstabColumnFieldCollection, source: any);
    get itemType(): string;
    getCollectionLabel(): string;
    getEditProps(): IPropInfo[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): any;
}

declare class CrosstabColumnFieldCollection extends CrosstabFieldCollection<CrosstabColumnField> {
    static readonly $_ctor: string;
    constructor(owner: CrosstabBand);
    protected _createField(src: any): CrosstabColumnField;
}

declare abstract class CrosstabField extends ReportItemCollectionItem {
    static readonly PROP_FIELD = "field";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly styleProps;
    private _field;
    private _index;
    fieldIndex: number;
    dataType: string;
    protected _header: CrosstabFieldHeader;
    protected _summary: CrosstabFieldSummary;
    constructor(collection: CrosstabFieldCollection<any>, source: any);
    /** band */
    get band(): CrosstabBand;
    /** index */
    get index(): number;
    /** field */
    get field(): string;
    set field(value: string);
    /** header */
    get header(): CrosstabFieldHeader;
    /** summary */
    get summary(): CrosstabFieldSummary;
    get itemType(): string;
    get page(): ReportPageBase;
    get displayPath(): string;
    get collection(): CrosstabFieldCollection<any>;
    get marqueeParent(): ReportItem;
    isAncestor(group: ReportGroupItem): boolean;
    getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _changed(prop: string, newValue: any, oldValue: any): void;
    protected _doLoad(src: any): void;
    protected _doSave(target: any): any;
}

declare type CrosstabFieldCell = CrosstabField | CrosstabFieldHeader | CrosstabFieldSummary | CrosstabFieldSummaryHeader;

declare abstract class CrosstabFieldCollection<T extends CrosstabField> extends ReportItemCollection<T> {
    private _band;
    private _type;
    private _fields;
    constructor(owner: CrosstabBand, type: string);
    get band(): CrosstabBand;
    load(src: any[]): void;
    save(target: any): void;
    contains(field: string): boolean;
    getField(field: string): T;
    slice(count: number): T[];
    indexOf(field: T): number;
    add(field: any, index?: number): T;
    removeAt(index: number): boolean;
    remove(field: T): void;
    get owner(): ReportItem;
    get count(): number;
    get items(): CrosstabField[];
    get outlineLabel(): string;
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    get(index: number): T;
    getSaveType(): string;
    private $_add;
    protected _doMoveItem(from: number, to: number): boolean;
    protected abstract _createField(src: any): T;
    protected _resetFields(): void;
    protected _fieldChanged(field: CrosstabField): void;
}

declare class CrosstabFieldHeader extends ReportItem {
    static readonly PROP_TEXT = "text";
    static readonly PROP_SUFFIX = "suffix";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _text;
    private _suffix;
    private _field;
    constructor(field: CrosstabField, source: any);
    get field(): CrosstabField;
    /** text */
    get text(): string;
    set text(value: string);
    /** suffix */
    get suffix(): string;
    set suffix(value: string);
    get page(): ReportPageBase;
    get outlineSource(): IOutlineSource;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    getSaveLabel(): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

/**
 * 필드 summary 영역 data 셀에 대한 설정.
 * row field 설정이 column field 설정보다 우선하고, column field 설정이 value field 설정보다 우선한다.
 */
declare class CrosstabFieldSummary extends ReportItem {
    static readonly POSITIONS: readonly ["start", "last"];
    static readonly PROP_POSITION = "position";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _position;
    private _field;
    private _header;
    constructor(field: CrosstabField, source: any);
    /** position */
    get position(): FieldSummaryPosition;
    set position(value: FieldSummaryPosition);
    get field(): CrosstabField;
    get header(): CrosstabFieldSummaryHeader;
    get page(): ReportPageBase;
    get outlineSource(): IOutlineSource;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    getSaveLabel(): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

/**
 * 필드 summary 영역 (column 혹은 row)헤더 셀에 대한 설정.
 */
declare class CrosstabFieldSummaryHeader extends ReportItem {
    static readonly PROP_TEXT = "text";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _text;
    private _summary;
    constructor(summary: CrosstabFieldSummary, source: any);
    get summary(): CrosstabFieldSummary;
    get field(): CrosstabField;
    /** text */
    get text(): string;
    set text(value: string);
    get page(): ReportPageBase;
    get outlineSource(): IOutlineSource;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    getSaveLabel(): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class CrosstabLeafColumn extends CrosstabColumn {
    protected _valueField: CrosstabValueField;
    constructor(field: CrosstabColumnField, valueField: CrosstabValueField, value: any);
    get valueField(): CrosstabValueField;
    get leafCount(): number;
    contains(leaf: CrosstabLeafColumn): boolean;
    includes(band: CrosstabBand, cell: CrosstabCell): boolean;
    getHeader(): string;
}

declare class CrosstabNullValue extends ReportItem {
    static readonly PROP_TEXT = "text";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly styleProps;
    private _text;
    private _band;
    constructor(band: CrosstabBand);
    /** text */
    get text(): string;
    set text(value: string);
    get page(): ReportPageBase;
    protected _getEditProps(): any[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare abstract class CrosstabRowBase {
    abstract slice(count: number): any[];
    abstract getValue(index: number): any;
    abstract getColumnCell(column: CrosstabColumn): CrosstabCell;
}

declare class CrosstabRowCollection {
    private _band;
    private _rows;
    constructor(band: CrosstabBand);
    get rowCount(): number;
    getRow(index: number): CrosstabRowBase;
    build(data: BandArrayData, cells: CrosstabCellCollection): void;
    private $_collectRows;
    private $_collectSummaryRows;
}

declare class CrosstabRowField extends CrosstabField {
    static readonly $_ctor: string;
    get itemType(): string;
    getCollectionLabel(): string;
}

declare class CrosstabRowFieldCollection extends CrosstabFieldCollection<CrosstabRowField> {
    static readonly $_ctor: string;
    constructor(owner: CrosstabBand);
    protected _createField(src: any): CrosstabRowField;
}

declare enum CrosstabSummary {
    SUM = "sum",
    AVG = "avg",
    MIN = "min",
    MAX = "max",
    COUNT = "count",
    DISTINCT = "distinct"
}

declare class CrosstabSummaryColumn extends CrosstabColumn {
    private _summary;
    constructor(summary: CrosstabFieldSummary);
    get summary(): CrosstabFieldSummary;
    getHeader(): string;
}

declare class CrosstabValueField extends CrosstabField {
    static readonly DEF_FORMAT = "#,##0";
    static readonly PROP_VALUE = "value";
    static readonly PROP_PREFIX = "prefix";
    static readonly PROP_SUFFIX = "suffix";
    static readonly PROP_FORMAT = "format";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _value;
    private _prefix;
    private _suffix;
    private _format;
    constructor(collection: CrosstabFieldCollection<any>, source: any);
    /** value */
    get value(): CrosstabSummary;
    set value(value: CrosstabSummary);
    /**
     * 접두어.
     */
    get prefix(): string;
    set prefix(value: string);
    /**
     * 접미어.
     */
    get suffix(): string;
    set suffix(value: string);
    /**
     * format
     */
    get format(): string;
    set format(value: string);
    get itemType(): string;
    getCollectionLabel(): string;
    getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any;
    protected _doLoad(src: any): void;
    protected _doSave(target: object): void;
}

declare class CrosstabValueFieldCollection extends CrosstabFieldCollection<CrosstabValueField> {
    static readonly $_ctor: string;
    constructor(owner: CrosstabBand);
    protected _createField(src: any): CrosstabValueField;
}

declare const enum Cursor {
    DEFAULT = "default",
    AUTO = "auto",
    POINTER = "pointer",
    WAIT = "wait",
    MOVE = "move",
    COL_RESIZE = "col-resize",
    ROW_RESIZE = "row-resize",
    CROSSHAIR = "crosshair",
    HORZ_RESIZE = "ew-resize",
    VERT_RESIZE = "ns-resize",
    NESW_RESIZE = "nesw-resize",
    NWSE_RESIZE = "nwse-resize",
    NO_DROP = "no-drop",
    NOT_ALLOWED = "not-allowed"
}

/**
 * Data band base class.
 *
 * [제한 사항]
 * 1. detail band는 multi columns 불가. (TODO: master가 multi column이 아니면 가능하지 않을까?)
 */
declare abstract class DataBand extends ReportBandItem {
    static readonly PROP_DATA_BAND_MASTER_FIELDS = "masterFields";
    static readonly PROP_DATA_BAND_KEY_FIELDS = "keyFields";
    static readonly PROP_DATA_BAND_ROWS_PER_MASTER = "rowsPerMaster";
    static readonly PROP_DATA_BAND_SECTION_COUNT = "sectionCount";
    static readonly PROP_DATA_BAND_SECTIONLAYOUT = "sectionLayout";
    static readonly PROP_DATA_BAND_SECTION_GAP = "sectionGap";
    static readonly PROP_DATA_BAND_MAX_ROW_COUNT = "maxRowCount";
    static readonly PROP_DATA_BAND_ROWS_PER_PAGE = "rowsPerPage";
    static readonly PROP_DATA_BAND_MAX_ROWS_PER_PAGE = "maxRowsPerPage";
    static readonly PROP_DATA_BAND_REPEAT_MASTER_ROW = "repeatMasterRow";
    static readonly PROP_DATA_BAND_REPEAT_DETAIL_HEADER = "repeatDetailHeader";
    static readonly PROP_DATA_BAND_REPEAT_DETAIL_FOOTER = "repeatDetailFooter";
    static readonly PROP_DATA_BAND_END_ROW_COUNT = "endRowCount";
    static readonly PROP_DATA_BAND_MAX_END_ROW_COUNT = "maxEndRowCount";
    static readonly PROP_DATA_BAND_END_ROW_MESSAGE = "endRowMessage";
    static readonly PROP_DATA_BAND_REPEAT_HEADER = "repeatHeader";
    static readonly PROP_DATA_BAND_ALWAYS_HEADER = "alwaysHeader";
    static readonly PROP_DATA_BAND_NO_SPLIT = "noSplit";
    static readonly PROP_DATA_BAND_SORT_FIELD = "sortField";
    static readonly PROP_DATA_BAND_SORT_DIRECTION = "sortDirection";
    static readonly PROP_DATA_BAND_MASTER_BAND_NAME = "masterBandName";
    static readonly PROP_DATA_BAND_MASTER_BAND_KEY_FIELDS = "masterBandKeyFields";
    static readonly PROP_DATA_BAND_SUB_BAND_KEY_FIELDS = "subBandKeyFields";
    static readonly PROP_DATA_BAND_EMPTY_DATA_HEADER_VISIBLE = "emptyDataHeaderVisible";
    static readonly PROP_DATA_BAND_EMPTY_DATA_FOOTER_VISIBLE = "emptyDataFooterVisible";
    static readonly PROPINFOS: IPropInfo[];
    private _sectionCount;
    private _sectionLayout;
    private _sectionGap;
    private _maxRowCount;
    private _rowsPerPage;
    private _maxRowsPerPage;
    private _endRowCount;
    private _maxEndRowCount;
    private _endRowMessage;
    private _masterFields;
    private _keyFields;
    private _rowsPerMaster;
    private _repeatMastreRow;
    private _repeatDetailHeader;
    private _repeatDetailFooter;
    private _repeatHeader;
    private _alwaysHeader;
    private _noSplit;
    private _sortField;
    private _sortDirection;
    private _masterBandName;
    private _masterBandKeyFields;
    private _subBandKeyFields;
    private _emptyDataHeaderVisible;
    private _emptyDataFooterVisible;
    private _detail;
    private _master;
    private _keyFlds;
    private _masterFlds;
    private _invalidKeys;
    private _subBandKeyFlds;
    private _subBandMasterKeyFlds;
    private _invalidSubBandKeys;
    pageNo: number;
    prevHead: boolean;
    prevIndex: number;
    rowIndex: number;
    detailRows: number;
    masterValues: any;
    isNextPagePrintRow: boolean;
    hasSubBand: boolean;
    _pr: number;
    _currentPrintRow: number;
    private _dataObj;
    private _designData;
    private _fieldSummary;
    private _summaryRuntime;
    private _dataView;
    constructor(name: string);
    get dataObj(): IBandData;
    get designData(): IBandData;
    /**
     * detail band.
     */
    get detail(): DataBandCollection;
    /**
     * detail band인가?
     */
    get isDetail(): boolean;
    /**
     * master band.
     */
    get master(): DataBand;
    set master(band: DataBand);
    /**
     * root master
     */
    get root(): DataBand;
    /**
     * band level.
     * 최상위 band이면 0.
     */
    get bandLevel(): number;
    /**
     * section count
     */
    get sectionCount(): number;
    set sectionCount(value: number);
    /**
     * section layout
     */
    get sectionLayout(): BandSectionLayout;
    set sectionLayout(value: BandSectionLayout);
    /**
     * section gap
     */
    get sectionGap(): number;
    set sectionGap(value: number);
    /**
     * 최대 출력 행 수.
     * 0보다 큰 값으로 설정하면,
     * 디테일 밴드일 경우 해당 마스터 내에서 최대 행수이다.
     * rowsPerMaster로 표시할 디테일 행들을 설정하는 경우 이 속성을 지정할 필요가 없다(?)
     */
    get maxRowCount(): number;
    set maxRowCount(value: number);
    /**
     * 0보다 큰 값으로 설정하면,
     * 지정한 행 수만큼 최대 출력하고 다음 페이지로 넘어간다.
     * 또, 디테일인 경우 마스터행에 대한 디테일행들이 모두 출력되면 다음 페이지로 넘어간다.
     * 지정한 행 수만큼 한 페이지에 출력하지 못하면,
     * 다음 페이지에 나머지를 출력하고 페이지를 넘긴다.
     * 페이지 중단 없이 이어서 출력하려면 {@link maxRowsPerPage}로 설정한다.
     */
    get rowsPerPage(): number;
    set rowsPerPage(value: number);
    /**
     * 0보다 큰 값으로 설정하면,
     * 지정한 행 수만큼 최대 출력하고 다음 페이지로 넘어간다.
     * 또, 디테일인 경우 마스터행에 대한 디테일행들이 모두 출력되면 다음 페이지로 넘어간다.
     * 지정한 행 수만큼 한 페이지에 출력하지 못하면 중단하고
     * 다음 페이지에서 다음 행부터 다시 출력한다.
     * {@link rowsPerPage}가 0보다 큰 값으로 설정되면 이 속성은 무시된다.
     */
    get maxRowsPerPage(): number;
    set maxRowsPerPage(value: number);
    /**
     * 데이터행 수와 상관없이 마지막 페이지에 표시돼야 할 행수.
     * 0보다 큰 값으로 설정하면,
     * 실제 데이터행 이후 행은 빈 행으로 표시된다.
     * 마지막 페이지에 적용된다.
     * 마지막 페이지에 빈 행을 모두 출력할 수 없는 경우,
     * 다음 페이지에 나머지 빈 행을 출력하고 페이지를 넘긴다.
     * 페이지 중단 없이 남은 영역만 빈 행으로 채우려면 {@link maxEndRowCount}를 설정한다.
     *
     * 그룹 설정과 같이 적용할 수 없다. 즉, 그룹이 설정되면 이 속성은 무시된다.
     */
    get endRowCount(): number;
    set endRowCount(value: number);
    /**
     * 데이터행 수와 상관없이 마지막 페이지에 표시돼야 할 행수.
     * 0보다 큰 값으로 설정하면,
     * 실제 데이터행 이후 행은 빈 행으로 표시된다.
     * 마지막 페이지에 적용된다.
     * 마지막 페이지에 출력할 수 있는 만큼만 빈 행을 출력한다.
     * band footer가 우선적으로 출력된다.
     * {@link endRowCount}가 0보다 큰 값으로 설정되면 이 속성은 무시된다.
     *
     * 그룹 설정과 같이 적용할 수 없다. 즉, 그룹이 설정되면 이 속성은 무시된다.
     */
    get maxEndRowCount(): number;
    set maxEndRowCount(value: number);
    /**
     * 실제 데이터행 수가 {@link endRowCount} 보다 적을 때,
     * 마자막 data 행 아래에 표시할 메시지.
     */
    get endRowMessage(): string;
    set endRowMessage(value: string);
    /**
     * keyFields에 대응하는 master band data의 필드 목록.
     * 지정하지 않으면 keyFields와 동일한 필드 목록이 사용된다.
     * 디테일밴드에 지정.
     */
    get masterFields(): string;
    set masterFields(value: string);
    /**
     * master band의 필드에 대응하는 필드 목록.
     * 이 필드들의 값이 master행의 값들과 동일한 행들이 master 행 다음에 출력된다.
     * 디테일밴드에 지정.
     */
    get keyFields(): string;
    set keyFields(value: string);
    /**
     * keyFields를 지정하지 않고, 0보다 큰 값으로 출력할 디테일 행수를 지정한다.
     * 이 밴드(master band) 행마다 출력해야할 최대 디테일 밴드 행 수.
     * keyFields가 지정되면 이 속성은 무시된다.
     * 디테일밴드에 지정.
     */
    get rowsPerMaster(): number;
    set rowsPerMaster(value: number);
    /**
     * 디테일이 페이지를 넘어가는 경우 매 페이지마다 마스터 행을 출력할 지 여부.
     * 마스터밴드에 지정.
     */
    get repeatMasterRow(): boolean;
    set repeatMasterRow(value: boolean);
    /**
     * 디테일이 페이지를 넘어가는 경우 이어지는 페이지들에 디테일밴드 header를 출력할 지 여부.
     * 디테일이 시작되는 페이지에는 이 속성과 관련 없이 출력된다.
     * 디테일밴드에 지정한다.
     */
    get repeatDetailHeader(): boolean;
    set repeatDetailHeader(value: boolean);
    /**
     * 디테일이 페이지를 넘어가는 경우 디테일 완료 이전 페이지들에 디테일밴드 footer를 출력할 지 여부.
     * 디테일이 완료되는 페이지에는 이 속성과 관련 없이 출력된다.
     * 디테일밴드에 지정한다.
     */
    get repeatDetailFooter(): boolean;
    set repeatDetailFooter(value: boolean);
    /**
     * 첫번째 밴드 헤더를 출력 후 장을 넘어갈 때 반복해서 헤더를 표시한다.
     */
    get repeatHeader(): boolean;
    set repeatHeader(value: boolean);
    /**
     * true면 데이터행 없이 footer만 표시되는 경우에도 header를 표시한다.
     */
    get alwaysHeader(): boolean;
    set alwaysHeader(value: boolean);
    /**
     * true면 밴드 데이터가 없어도 밴드 헤더 영역을 표시한다.
     */
    get emptyDataHeaderVisible(): boolean;
    set emptyDataHeaderVisible(value: boolean);
    /**
     * true면 밴드 데이터가 없어도 밴드 푸터 영역을 표시한다.
     */
    get emptyDataFooterVisible(): boolean;
    set emptyDataFooterVisible(value: boolean);
    /**
     * true면 밴드 아이템 전체 높이가 출력 페이지의 남은 높이 보다 클 경우 다음 페이지에 출력한다. #612
     */
    get noSplit(): boolean;
    set noSplit(value: boolean);
    get sortField(): string;
    set sortField(value: string);
    get sortDirection(): DataDirection;
    set sortDirection(value: DataDirection);
    get masterBandName(): string;
    set masterBandName(value: string);
    get masterBandKeyFields(): string;
    set masterBandKeyFields(value: string);
    get subBandKeyFields(): string;
    set subBandKeyFields(value: string);
    /**
     * summary runtime
     */
    get summaryRuntime(): DataBandSummaryRuntime;
    /**
     * Data View Model
     */
    get dataView(): BandDataSortView;
    /**
     * current Print Row Index
     */
    get currentPrintRow(): number;
    set currentPrintRow(value: number);
    /**
     * band, master detail key values
     */
    get masterFlds(): string[];
    get keyFlds(): string[];
    get subBandMasterKeyFieldValues(): string[];
    get subBandKeyFieldValues(): string[];
    get dataRowCount(): number;
    /**
     * 데이터가 비어있어도 특정 섹션이 표시가 필요한지 여부를 판단하기 위해 작성
     */
    get isEmptyDataSectionVisible(): boolean;
    prepareIndices(ctx: PrintContextBase): void;
    protected abstract _doPrepareIndices(ctx: PrintContextBase): void;
    getColPoints(w: number, x?: number): number[];
    getColWidth(w: number): number;
    getValues(dataView: BandDataSortView, row: number, fields: string[]): any[];
    getNextSubBandDetailRows(dataView: BandDataSortView, from: number): number[];
    private $_selectDetailRow;
    private $_selectSubBandRow;
    abstract getNextDetailRows(dataView: BandDataSortView, from?: number): number[];
    protected _getNextDetailRows(dataView: BandDataSortView, from: number): number[];
    protected _getNextSubBandDetailRows(dataView: BandDataSortView, from: number): number[];
    getRowsPerPage(): {
        rowsPerPage: number;
        breakRowsPerPage: boolean;
    };
    getEndRowCount(endMessage?: number): {
        endRowCount: number;
        stopEndRow: boolean;
    };
    getEndRowMarker(): EndRowMarker;
    getCount(field: string, count: number, rows?: number[]): number;
    getVCount(field: string, count: number, rows?: number[]): number;
    getSum(field: string, count: number, rows?: number[]): number;
    getMin(field: string, count: number, rows?: number[]): number;
    getMax(field: string, count: number, rows?: number[]): number;
    getAvg(field: string, count: number, rows?: number[]): number;
    getGroupField(field: string, count: number, rows?: number[]): string;
    getPropDomain(prop: IPropInfo): any[];
    /**
     * 출력시 사용되는 밴드의 정보를 초기값으로 초기화
     */
    resetBandPrintingValue(): void;
    getNextSiblingsOf(detail: DataBand): ReportItem[];
    abstract containsInSection(item: ReportItem): boolean;
    get designLevel(): number;
    get dataDominant(): boolean;
    protected _datable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _canChildData(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doPreparePrint(ctx: PrintContext): void;
    protected _prepareData(ctx: PrintContextBase): void;
    clearSummary(): void;
    /**
     * @Test
     */
    testPrepare(data: IBandData): void;
    private $_getSummary;
    private $_calcSummary;
    private $_getVCount;
    private $_getSum;
    private $_getMin;
    private $_getMax;
    private $_getGroupField;
    protected _createDataBandCollection(): DataBandCollection;
}

/**
 */
declare class DataBandCollection extends ReportGroupItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly CHILD_PROPS: IPropInfo[];
    static readonly $_ctor: string;
    private _owner;
    private _label;
    constructor(owner: DataBand, label: string);
    /** owner */
    get owner(): DataBand;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    getSaveType(): string;
    canFold(): boolean;
    get outlineLabel(): string;
    get designLevel(): number;
    get marqueeParent(): ReportItem;
    canDelete(): boolean;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    protected _doLoadChild(child: ReportItem, src: any): void;
    canAdd(item: ReportItem): boolean;
    canContainsBand(): boolean;
    canContainsBandGroup(): boolean;
    protected _doItemAdded(item: ReportItem, index: number): void;
}

/**
 * DataBand row group base.
 */
declare abstract class DataBandRowGroup extends ReportGroupItem {
    static readonly PROP_FIELD = "field";
    static readonly PROPINFOS: IPropInfo[];
    private _field;
    get outlineLabel(): string;
    canRemoveFrom(): boolean;
    getEditProps(): IPropInfo[];
    /** field */
    get field(): string;
    set field(value: string);
    get pathLabel(): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getPropDomain(prop: IPropInfo): any[];
}

/* Excluded from this release type: DataBandSummaryRuntime */

/**
 */
declare abstract class DataContainer extends DesignerLayerElement {
    private _report;
    constructor(doc: Document, className?: string);
    /**
     * report
     */
    get report(): ReportBase;
    set report(value: ReportBase);
    render(report?: ReportBase): void;
    protected _doInitStyles(dom: HTMLElement): void;
    protected _getCssDisplay(): string;
    protected _initStyles(dom: HTMLElement): void;
    protected abstract _doRender(doc: Document, report: ReportBase): void;
}

declare enum DataDirection {
    ASCENDING = "ascending",
    DESCENDING = "descending"
}

/**
 */
declare class DataListContainer extends DataContainer {
    private _listMode;
    private _group;
    onSelect: (item: ReportData) => void;
    onDblClick: (item: IReportData | IDataTemplate) => void;
    private _headerView;
    private _bodyView;
    private _itemViews;
    private _selected;
    private _dataPanel;
    private _dragImage;
    constructor(doc: Document, dataPanel: DataPanel);
    get headerView(): HeaderView;
    get bodyView(): BodyView$1;
    /**
     * listMode
     */
    get listMode(): boolean;
    set listMode(value: boolean);
    /**
     * group
     */
    get group(): DataTemplateGroup | string;
    set group(group: DataTemplateGroup | string);
    get isReport(): boolean;
    get selected(): number;
    get selectedItem(): IReportData | IDataTemplate;
    setSelected(value: number): void;
    useDataTemplate(ctx: IDesignerContext, item: IServerDataTemplate): void;
    itemOf(target: HTMLElement): IReportData | IDataTemplate;
    refreshSelected(): void;
    protected _doInitStyles(dom: HTMLElement): void;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doRender(doc: Document, report: Report_2): void;
    private $_renderTemplates;
    private $_renderReport;
    private $_resetItemViews;
    private _pointerDownHandler;
    private _dblClickHandler;
    private _dragStartHandler;
    private $_addDataToReport;
}

/**
 * Data panel.
 */
declare class DataPanel extends PanelView<DataPanelModel> {
    private _report;
    onDataSelected: (item: ReportData) => void;
    private _treeDiv;
    private _treeView;
    private _contentLayer;
    private _listView;
    private _simpleView;
    private _bandView;
    private _selected;
    private _selectedServerItem;
    private readonly _itemMenus;
    private getItemMenus;
    private readonly _listMenus;
    constructor(container: HTMLDivElement, model: DataPanelModel);
    /** report */
    get report(): ReportBase;
    set report(value: ReportBase);
    get selected(): TreeItem;
    get listView(): DataListContainer;
    get treeView(): DataTree;
    refreshDataTemplate(ctx: IDesignerContext): void;
    canDelete(item: IReportData | IDataTemplate): boolean;
    canUse(item: IReportData | IDataTemplate): boolean;
    resetSize(callback?: any): void;
    protected _doPrepareContent(doc: Document, dom: HTMLElement): void;
    protected _doBuildModel(doc: Document, model: DataPanelModel): void;
    protected _doRefreshButtons(ctx: IDesignerContext): void;
    protected _doLayout(bounds: Rectangle): void;
    getMenu(target: HTMLElement): MenuItem[];
    private $_makeDetailViewVisible;
    private $_renderDetailView;
    private $_findTreeItem;
    onReportDataAdded(report: ReportBase, data: IReportData, silent: boolean, index: number): void;
    onReportDataRemoved(report: ReportBase, data: IReportData): void;
    onReportDataUpdated(report: ReportBase, data: IReportData): void;
    onReportDataNameChanged(report: ReportBase, data: IReportData, oldName: string): void;
    onReportDataFieldNameChanged(report: ReportBase, data: IReportData, newName: string, oldName: string): void;
    onTreeFocusedChanged(tree: TreeViewer, item: TreeItem, old: TreeItem): void;
    onTreeModelChanged(tree: TreeViewer): void;
}

/**
 * Data panel 모델.
 */
declare class DataPanelModel extends PanelModel {
}

declare class DataTemplateGroup {
    name: string;
    title: string;
    description: string;
    items: IServerDataTemplateInfo[];
    tag?: string;
    constructor(source?: any);
}

/**
 * Data tree.
 */
declare class DataTree extends TreeViewer {
    private static readonly EMPTY_TREE;
    private _report;
    private _dragImage;
    private _ctx;
    /**
     * report
     */
    get report(): ReportBase;
    set report(value: ReportBase);
    get reportGroup(): TreeItem;
    initTree(ctx: IDesignerContext): void;
    dataAdded(root: string, data: IReportData, silent: boolean, index: number): void;
    dataRemoved(data: IReportData): void;
    dataRenamed(data: IReportData): void;
    refreshDataTemplate(ctx: IDesignerContext): void;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    private $_getTreeItemSource;
    private $_getTree;
    private $_buildTree;
    private get $_serverRoot();
    private get $_reportRoot();
    private $_addDataTemplate;
    onTreeItemExpanding(tree: TreeModel, item: TreeItem): boolean;
}

/* Excluded from this release type: DatetimeReader */

declare class DesignColumnHeaderView extends ExcelColumnHeaderView {
    private _model;
    private _modelDirty;
    get model(): DesignSheet;
    setModel(sheet: DesignSheet): void;
    setModelDirty(): void;
    isModelDirty(): boolean;
    protected _doMeasure(ctx: PrintContextBase, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    layoutContent(ctx: PrintContextBase): void;
}

/**
 * Design-time data provider
 */
declare class DesignDataManager extends EventAware implements IReportDataProvider {
    static readonly DATA_ADDED = "onDesignDataManagerDataAdded";
    static readonly DATA_REMOVED = "onDesignDataManagerDataRemoved";
    static readonly DATA_UPDATED = "onDesignDataManagerDataUpdated";
    static readonly NAME_CHANGED = "onDesignDataManagerNameChanged";
    static readonly FIELD_NAME_CHANGED = "onDesignDataManagerFieldNameChanged";
    private _commands;
    private _items;
    private _dataMap;
    private _contextData;
    constructor(commands: EditCommandStack);
    protected _doDispose(): void;
    get designTime(): boolean;
    get dirty(): boolean;
    set dirty(value: boolean);
    preparePrint(ctx: PrintContextBase): void;
    getAll(): IReportData[];
    getNames(): string[];
    getBandNames(): string[];
    get(name: string): IReportData;
    getContextValue(path: string): any;
    /**
     * @param path data name + "." + data path
     */
    getValue(path: string, row: number): any;
    getValueAt(data: string, path: string, row: number): any;
    getFieldValues(data: string, field: string, rows?: number[]): any[];
    addData(data: IReportData, silent: boolean, index?: number): boolean;
    removeData(data: string | IReportData): IReportData;
    dataChanged(data: IReportData): void;
    dataNameChanged(data: IReportData, oldName: string): void;
    fieldNameChanged?(data: IReportData, newName: string, oldName: string): void;
    setProperty(data: IReportData, prop: string, value: any): void;
    clear(): DesignDataManager;
    load(source: any, clear?: boolean): DesignDataManager;
    save(target: object, options?: ReportSaveOptions): void;
    getFieldIndex(data: string, field: string): number;
    updateField(data: BandData, index: number, field: IBandDataField): void;
    addField(data: BandArrayData, index: number, field: IBandDataField): void;
    removeField(data: BandArrayData, field: IBandDataField): void;
    renameData(data: IReportData, newName: string): void;
    private $_register;
    private $_unregister;
    private $_resetIndices;
    private $_fireDataAdded;
    private $_fireDataRemoved;
    private $_fireDataUpdated;
}

/* Excluded from this release type: DesignerElement */

declare class DesignerLayerElement extends DesignerElement {
    get isLayer(): boolean;
}

/**
 * Design-time sheet model.
 * item map을 유지한다.
 */
declare class DesignSheet extends Sheet {
    private _itemRows;
    private _dirty;
    private _maxCol;
    private _maxRow;
    private _minRow;
    get minRow(): number;
    getColumn(col: number, create?: boolean): SheetColumn;
    getRow(row: number, create?: boolean): SheetRow;
    /**
     * undo에서 바로 반영되도록 컬럼 객체 생성과 너비 변경을 command 하나로 실행한다. #1865
     */
    setColumnWidth(col: number, width: number): SheetColumn;
    /**
     * undo에서 바로 반영되도록 행 객체 생성과 높이 변경을 command 하나로 실행한다. #1865
     */
    setRowHeight(row: number, height: number): SheetRow;
    getItem(row: number, col: number): ExcelItems;
    getItems(r1: number, c1: number, r2: number, c2: number): ExcelItems[];
    isBlank(row: number, col: number): boolean;
    containsRect(r1: number, c1: number, r2: number, c2: number): boolean;
    canResizeAt(item: ExcelItems | ExcelGroupItems, dir: ResizeDirection): boolean;
    canResizeTo(item: ExcelItems | ExcelGroupItems, dir: ResizeDirection): boolean;
    canFill(item: ExcelItems | ExcelGroupItems, r1: number, c1: number, r2: number, c2: number): boolean;
    _getRootItemsIn(r1: number, c1: number, r2: number, c2: number): ExcelRootItems[];
    canMerge(items: ExcelItems[], r1: number, c1: number, r2: number, c2: number): boolean;
    private $_containsRect;
    canMoveTo(item: ExcelItems, r: number, c: number): boolean;
    canFillItem(item: ExcelItems): boolean;
    canRowMerge(item: ExcelItems): boolean;
    getEmptyRows(): number[];
    protected _validateColCount(count: number): number;
    protected _validateRowCount(count: number): number;
    _fillItems(items: ExcelItems[], check: boolean, force: boolean): void;
    _itemsLoaded(items: ExcelItems[]): void;
    _itemAdded(item: ExcelItems): void;
    _itemsAdded(items: ExcelItems[]): void;
    _itemRemoved(item: ExcelItems): void;
    _itemsRemoved(items: ExcelItems[]): void;
    _itemsCleared(): void;
    _itemChanged(item: ExcelItems, prop: string): void;
    private $_setItem;
}

declare class DesingRowHeaderView extends ExcelRowHeaderView {
    private _model;
    private _modelDirty;
    get model(): DesignSheet;
    setModel(sheet: DesignSheet): void;
    setModelDirty(): void;
    isModelDirty(): boolean;
    protected _doMeasure(ctx: PrintContextBase, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContextBase): void;
}

declare abstract class DialogBodyView extends DesignerLayerElement {
    static readonly INVALID_FIELD = "invalid-field";
    contentChanged: (element?: HTMLElement) => void;
    constructor(doc: Document, className: string);
    refreshBody(ctx: IDesignerContext, dlg: DialogView): void;
}

declare abstract class DialogBottomView<D extends DialogView> extends DesignerLayerElement {
    dialog: D;
    private _buttonContainer;
    protected _buttonMap: Map<string, DialogButton>;
    constructor(doc: Document, dialog: D);
    initBottom(doc: Document): DialogBottomView<D>;
    findButtonById(id: string): DialogButton | undefined;
    protected abstract _doInitBottom(doc: Document): void;
    protected _addButtons(doc: Document, buttons: IDialogButton[]): void;
    protected _addDialogButtons(doc: Document, buttons: IDialogButton[]): void;
    protected _refresh(ctx: IDesignerContext): void;
}

declare class DialogButton extends DesignerElement {
    private _id;
    action: IDesignerAction;
    onClick: (ctx: IDesignerContext, dialog: DialogView) => void;
    get button(): HTMLButtonElement;
    get id(): string;
    constructor(doc: Document, props: IDialogButton);
    setDisabled(disabled: boolean): void;
    protected _createDom(doc: Document): HTMLElement;
}

declare interface DialogMouseTracker {
    start(x: number, y: number): boolean;
    move(x: number, y: number): boolean;
    end(x: number, y: number, accept: boolean): void;
}

declare class DialogTitleView extends DesignerLayerElement {
    private _errorBar;
    private _errorTimer;
    constructor(ctx: IDesignerContext, title: string);
    protected _doDispose(): void;
    showError(message: any): void;
}

declare class DialogTool {
    private _dialog;
    private _tracker;
    private _mouseDownHandler;
    private _mouseMoveHandler;
    private _mouseUpHandler;
    constructor(dialog: DialogView);
    dispose(): void;
    protected _mouseDown(ev: MouseEvent): any;
    protected _mouseMove(ev: MouseEvent): any;
    protected _mouseUp(ev: MouseEvent): any;
    protected _getMouseTracker(ev: MouseEvent): DialogMouseTracker;
}

/**
 * Dialog base.
 */
declare abstract class DialogView extends DesignerLayerElement {
    protected _titleView: DialogTitleView;
    protected _bodyView: DialogBodyView;
    protected _bottomView: DialogBottomView<DialogView>;
    protected _tool: DialogTool;
    private _callback;
    private _cancelCallback;
    private _keydownHandler;
    private _permanent;
    constructor(ctx: IDesignerContext, title: string, className: string, options: any);
    canDispose(): boolean;
    protected _doDispose(): void;
    cancelOnClose: boolean;
    closeConfirm: boolean;
    closeOnEscape: boolean;
    submitOnEnter: boolean;
    get titleView(): DialogTitleView;
    initValues(values: any): void;
    focusInput(elt: Element, select?: boolean): void;
    showError(message: any): void;
    show(callback: (dlg: DialogView) => void, cancelCallback?: (dlg: DialogView) => void): this;
    refresh(ctx: IDesignerContext): void;
    canSubmit(): boolean;
    submit(ctx: IDesignerContext): void;
    cancel(ctx: IDesignerContext): void;
    findToolItem(dom: Element): ToolItem | undefined;
    setDisabled(selector: string, disabled: boolean): void;
    protected abstract _initBody(ctx: IDesignerContext, options: any): DialogBodyView;
    protected abstract _createBottom(ctx: IDesignerContext): DialogBottomView<DialogView>;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _setCallback(callback: (dlg: DialogView) => void): void;
    protected _doShow(): void;
    protected _doSubmit(ctx: IDesignerContext): void;
    protected _doCancel(ctx: IDesignerContext): void;
    protected _doClose(ctx: IDesignerContext): void;
    protected _bodyChanged(element?: HTMLElement): void;
}

/**
 * 상수로 다룬다.
 */
declare class Dimension {
    static HTMLDPI: number;
    static create(str: any): Dimension;
    static createDimensions(str: string): Dimension[];
    static equals(d1: Dimension, d2: Dimension): boolean;
    private _unit;
    private _value;
    private _fixed;
    constructor(value: ValueString);
    get fixed(): boolean;
    get unit(): PrintUnit;
    get value(): number;
    clone(): Dimension;
    equals(other: any): boolean;
    toString(): string;
    getValue(): any;
    getValueNull(): any;
    getPixel(domain: number): number;
    getFixedPixel(): number;
    $_getPixel(): number;
    getFixedInch(): number;
    getFixedPoint(): number;
}

/**
 * 상수로 다룬다.
 */
declare class DimensionCollection {
    static readonly Empty: DimensionCollection;
    private _dims;
    private _values;
    private _relative;
    private _fixed;
    private _dirty;
    constructor(str: string);
    get count(): number;
    get relative(): boolean;
    get(index: number): Dimension;
    set(index: number, dim: Dimension): void;
    /**
     * '%' 이면 domain에서 fixed 크기들을 제외한 크기에 대한 상대 크기.
     * '%'의 전체 함이 100을 넘으면 100으로 scaling한다.
     * 절대크기는 그 크기대로.
     * NaN이거나 설정하지 않은 크기는 위의 크기들을 제외한 나머지 크기의 균등분으로
     * 최소 min으로 설정된다.
     * 전체 합이 domain보다 크거나 작을 수 있다.
     */
    getSizes(count: number, domain: number, minSize: Dimension, truncate?: boolean): number[];
    getSize(index: number, domain: number): number;
    changeSize(count: number, index: number, delta: number, domain: number, minWidth: Dimension): void;
    private $_refresh;
    private $_init;
}

declare enum Direction {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

declare interface DocExportOptions {
    filename?: string;
}

declare interface DocxExportOptions extends DocExportOptions {
}

/* Excluded from this release type: DragTracker */

declare enum DropResultType {
    PROP = "prop",
    ITEM = "item"
}

/**
 * Report Editable 속성 관련하여 수정가능한 영역 표시를 위해 작성
 */
declare class EditableMarker extends VisualElement {
    static readonly CLASS_NAME = "rr-editable-marker";
    static readonly DEFAULT_BACKGROUND_COLOR = "#0ea5e9";
    private $_originalValue;
    get originalValue(): string;
    set originalValue(value: string);
    constructor(doc: Document);
    get isLayer(): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    setOriginalValue(value: string): void;
    setMarkerSize(width: number, height: number): void;
}

/**
 * 텍스트 관련 편집가능 객체 속성 구현
 */
declare class EditableObject<T extends ReportItem> extends ReportItemObject<T> {
    static readonly PROP_EDITABLE = "editable";
    static readonly PROP_TYPE = "type";
    static readonly PROP_MAX_LENGTH = "maxLength";
    static readonly PROPINFOS: IPropInfo[];
    private _editable;
    private _type;
    private _maxLength;
    get editable(): boolean;
    set editable(value: boolean);
    get type(): EditType;
    set type(value: EditType);
    get maxLength(): number;
    set maxLength(value: number);
    get pathLabel(): string;
    get displayPath(): string;
    get level(): number;
    constructor(item: T);
    getSaveLabel(): string;
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
}

/**
 * Edit command base.
 * 편집 행위 외에 다른 로직이 포함되지 않도록 한다.
 */
declare abstract class EditCommand extends Base {
    static createGroup(...commands: EditCommand[]): EditCommandGroup;
    constructor();
    protected _doDispose(): void;
    abstract get source(): any;
    error: any;
    get page(): any;
    abstract undo(): void;
    abstract redo(redoing: boolean): any;
    run(): any;
}

declare type EditCommandCallback<T extends EditCommand = EditCommand> = (cmd: T) => void;

/**
 * Edit command group base.
 * 하나 이상의 command를 동시에 실행하거나 undo한다.
 */
declare class EditCommandGroup extends EditCommand {
    private _commands;
    constructor(commands: EditCommand[]);
    protected _doDispose(): void;
    get commands(): EditCommand[];
    undo(): void;
    redo(redoing: boolean): any;
    get source(): any;
    get page(): any;
}

/**
 * Edit command stack.
 * 커맨드는 반드시 이 객체를 통해서 실행되거나 undo 되어야 한다.
 */
declare class EditCommandStack extends EventAware {
    owner: IEditCommandStackOwner;
    private _commands;
    private _current;
    private _closed;
    private _undoing;
    private _redoing;
    constructor(owner: IEditCommandStackOwner);
    protected _doDispose(): void;
    /** length */
    get length(): number;
    /** current */
    get current(): number;
    /** empty */
    get empty(): boolean;
    /** canUndo */
    get canUndo(): boolean;
    /** canRedo */
    get canRedo(): boolean;
    /** undoing */
    get undoing(): boolean;
    /** redoing */
    get redoing(): boolean;
    /** dirty */
    get dirty(): boolean;
    get(index: number): EditCommand;
    peek(): EditCommand;
    undo(): boolean;
    redo(redoing?: boolean): boolean;
    execute(command: EditCommand): boolean;
    flush(): void;
    /**
     * 현 위치를 marking한다. dirty는 마지막 marking 시점과 다른 경우 true가 된다.
     */
    close(): void;
    getHistory(all?: boolean): EditCommand[];
    protected _changed(oldCurrent: number, cmd: EditCommand): void;
    private $_shrink;
}

declare abstract class EditMarquee<T extends ReportElement> extends VisualElement {
    static readonly MARQUEE_ZINDEX = "20";
    static readonly ITEM_CLASS = "rr-edit-marquee-item";
    static readonly TRACKER_STYLE = "rr-edit-marquee-tracker";
    static readonly SIZE_CLASS = "rr-edit-marquee-size";
    private _target;
    constructor(doc: Document);
    /**
     * target
     */
    get target(): T;
    set target(value: T);
    get targetItem(): ReportItem;
    isRootView(dom: HTMLElement): boolean;
    getMenu(): MenuItem[];
    layout(reportView: IReportEditView): void;
    protected _getCssSelector(): string;
    get findable(): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doDraw(dom: HTMLElement): void;
    protected abstract _doLayout(doc: Document, dom: HTMLElement, r: Rectangle): void;
    protected _selectItem(div: HTMLElement, selected?: boolean, focused?: boolean): void;
    protected _selectCell(div: HTMLElement, selected?: boolean): void;
    protected _isColSelected(editor: ReportEditor, table: TableBase, col: number): boolean;
    protected _isRowSelected(editor: ReportEditor, table: TableBase, row: number): boolean;
}

/* Excluded from this release type: EditRequest */

/**
 * Sheet model for ExcelSheetEditor.
 */
declare class EditSheet extends EventAware {
    private _colCount;
    private _rowCount;
    private _columnWidth;
    private _rowHeight;
    private _autoRowHeight;
    private _columns;
    private _rows;
    private _colWidths;
    private _rowHeights;
    private _infos;
    constructor(source?: Sheet, infos?: IExcelRenderInfo[], heights?: number[]);
    /**
     * design-time 컬럼 갯수.
     */
    get colCount(): number;
    set colCount(value: number);
    /**
     * design-time row 갯수.
     */
    get rowCount(): number;
    set rowCount(value: number);
    /**
     * default column width.
     */
    get columnWidth(): number;
    set columnWidth(value: number);
    /**
     * default row height
     */
    get rowHeight(): number;
    set rowHeight(value: number);
    /**
     * true로 지정되면 명시적으로 높이가 설정되지 않은 행의 높이가 내용에 따라 자동 결정된다.
     */
    get autoRowHeight(): boolean;
    set autoRowHeight(value: boolean);
    get cellCount(): number;
    get isEmpty(): boolean;
    getColWidths(): number[];
    getRowHeights(): number[];
    getCellHeight(row: number, span: number): number;
    getColumn(col: number, create?: boolean): EditSheetColumn;
    getRow(row: number, create?: boolean): EditSheetRow;
    getCell(row: number, col: number): IExcelCell;
    resetColWidths(): void;
    resetRowHeights(): void;
    getLeft(cell: ICell): {
        r: number;
        c: number;
    };
    getRight(cell: ICell): {
        r: number;
        c: number;
    };
    getUpper(cell: ICell): {
        r: number;
        c: number;
    };
    getLower(cell: ICell): {
        r: number;
        c: number;
    };
    private $_setSource;
    private $_resetColWidths;
    private $_resetRowHeights;
}

declare class EditSheetColumn extends EditSheetItem {
    private _col;
    private _width;
    /**
     * width
     */
    get col(): number;
    set col(value: number);
    /**
     * width
     */
    get width(): number;
    set width(value: number);
}

declare abstract class EditSheetItem extends Base {
    collection: EditSheetItemCollection;
    _index: number;
    constructor(collection: EditSheetItemCollection, src?: any);
}

declare abstract class EditSheetItemCollection<T extends EditSheetItem = EditSheetItem> {
    owner: EditSheet;
    protected _items: T[];
    constructor(owner: EditSheet);
    get count(): number;
    get(index: number): T;
    add(item: T): T;
    forEach(callback: (item: T, index: number) => void): void;
    protected _resetIndices(from: number): void;
}

declare class EditSheetRow extends EditSheetItem {
    private _row;
    private _height;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * height
     */
    get height(): number;
    set height(value: number);
}

declare enum EditType {
    TEXT = "text"
}

declare class EmailEditor extends ReportEditor {
    protected _createEditView(doc: Document): ReportEditView;
    protected _doLayout(bounds: Rectangle): void;
}

declare class EmailTableBand extends TableBand implements IEmailItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly INHERITED_PROPINFO_NAMES: string[];
    static readonly STYLE_PROPS: string[];
    static readonly INHERITED_STYLE_PROPS: string[];
    static readonly CHILD_PROPINFOS: IPropInfo[];
    static readonly INHERITED_CHILD_PROPINFO_NAMES: string[];
    static readonly $_ctor: string;
    discriminator: "I_EMAIL_ITEM";
    constructor(name: string);
    getDetail(index: number): EmailTableBand;
    protected _createHeader(): TableBandHeader;
    protected _createDataRow(): TableBandDataRow;
    protected _createFooter(): TableBandFooter;
    protected _createDataBandCollection(): DataBandCollection;
    protected _getEditProps(): any[];
    protected _getStyleProps(): string[];
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doAfterLoad(loader: IReportLoader, src: any): void;
    protected _doAfterSave(target: object): void;
}

declare class EmailTableCellCollection extends TableCellCollection {
    static readonly $_ctor: string;
    discriminator: "I_EMAIL_ITEM_COLLECTION";
    protected _createCell(row: number, col: number): TableCell;
}

declare class EmailTableContainer extends TableContainer implements IEmailItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly INHERITED_PROPINFO_NAMES: string[];
    static readonly STYLE_PROPS: string[];
    static readonly INHERITED_STYLE_PROPS: string[];
    static readonly CHILD_PROPINFOS: IPropInfo[];
    static readonly INHERITED_CHILD_PROPINFO_NAMES: string[];
    static readonly $_ctor: string;
    private _align;
    discriminator: "I_EMAIL_ITEM";
    constructor(name: string);
    get align(): Align;
    set align(value: Align);
    canResize(dir: ResizeDirection): boolean;
    canAddTo(group: ReportGroupItem): boolean;
    getSubStyleProps(prop: string): IPropInfo[];
    protected _getEditProps(): any[];
    protected _getStyleProps(): string[];
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doAfterLoad(loader: IReportLoader, src: any): void;
    protected _doAfterSave(target: object): void;
    protected _createCells(): EmailTableCellCollection;
}

declare class EmailTextItem extends TextItem implements IEmailItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly INHERITED_PROPINFO_NAMES: string[];
    static readonly STYLE_PROPS: string[];
    static readonly INHERITED_STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly PROP_WRAP_DEFAULT_VALUE = true;
    static readonly PROP_WIDTH_DEFAULT_VALUE = "100%";
    static readonly STYLE_TEXT_ALIGN_DEFAULT_VALUE = Align.LEFT;
    private _align;
    discriminator: "I_EMAIL_ITEM";
    constructor(name: string, text?: string);
    get align(): Align;
    set align(value: Align);
    canRotate(): false;
    canResize(dir: ResizeDirection): boolean;
    protected _getEditProps(): any[];
    protected _getStyleProps(): string[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doAfterLoad(loader: IReportLoader, src: any): void;
    protected _doAfterSave(target: object): void;
}

declare class EndRowMarker {
    count: number;
    maxCount: number;
    constructor(count: number, maxCount: number);
}

/* Excluded from this release type: EventAware */

declare class ExcelBandCollectionElement extends ExcelReportGroupItemElementBase<ExcelDataBandCollection> {
    _isDesignVisible(): boolean;
    protected _getHiddenContextMenu(cell: HTMLTableCellElement): string;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    needFocusScroll(vertical: boolean): boolean;
}

/**
 * band group/detail container에 항목이 없을 때 컨테이너 영역을 차지하는 임시 item.
 */
declare class ExcelBandFillItem extends ExcelItem {
    owner: ReportPageItem;
    fill: {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    constructor(owner: ReportPageItem);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
}

declare class ExcelBandGroupContainerView extends ExcelBandSectionElement<ExcelDataBandRowGroupContainer> {
    protected _getHiddenContextMenu(cell: HTMLTableCellElement): string;
    needFocusScroll(vertical: boolean): boolean;
}

declare abstract class ExcelBandItemElement<T extends ExcelDataBandSection | ExcelDataBandRowGroupSection> extends ExcelReportGroupItemElement<T> {
    get menuable(): boolean;
    _getColCount(m: T): number;
    _getRowCount(m: T): number;
}

declare abstract class ExcelBandSectionElement<T extends ExcelDataBandSection> extends ExcelBandItemElement<T> {
    constructor(doc: Document, model: T, styleName?: string);
    needFocusScroll(vertical: boolean): boolean;
}

declare class ExcelBarcodeItem extends BarcodeItem {
    static readonly PROP_OUTPUT = "output";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _row;
    private _col;
    private _rowSpan;
    private _colSpan;
    private _image;
    private _output;
    _saveRow: number;
    _saveCol: number;
    private _imageRect;
    get row(): number;
    set row(value: number);
    /**
     * col
     */
    get col(): number;
    set col(value: number);
    /**
     * rowSpan
     */
    get rowSpan(): number;
    set rowSpan(value: number);
    /**
     * colSpan
     */
    get colSpan(): number;
    set colSpan(value: number);
    get image(): string;
    set image(value: string);
    get output(): BarcodeOutput;
    set output(value: BarcodeOutput);
    get imageRect(): IImageRect;
    set imageRect(value: IImageRect);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    canFold(): boolean;
    canSized(): boolean;
    canResize(dir: ResizeDirection): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

/**
 * Excel data bar 아이템.
 * https://www.ablebits.com/office-addins-blog/data-bars-excel/
 */
declare class ExcelBarItem extends ExcelTextItem {
    static readonly DEFAULT_BAR_COLOR = "#4ba4ff";
    static readonly PROP_BAR_COLOR = "barColor";
    static readonly PROP_TEXT_VISIBLE = "textVisible";
    static readonly PROP_MIN_VALUE = "minValue";
    static readonly PROP_MAX_VALUE = "maxValue";
    static readonly PROP_POSITION = "position";
    static readonly PROP_BAR_STYLES = "barStyles";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    private _barColor;
    private _textVisible;
    private _minValue;
    private _maxValue;
    private _position;
    private _color;
    private _barWidth;
    /**
     * min value.
     */
    get minValue(): number;
    set minValue(value: number);
    /**
     * max value.
     **/
    get maxValue(): number;
    set maxValue(value: number);
    /**
     * position
     */
    get position(): number;
    set position(value: number);
    /**
     * color
     */
    get color(): Style;
    set color(value: Style);
    /**
     * text visible
     */
    get textVisible(): boolean;
    set textVisible(value: boolean);
    /**
     * bar color
     */
    get barColor(): string;
    set barColor(value: string);
    /**
     * bar width
     */
    get barWidth(): string;
    set barWidth(value: string);
    getPosition(v: number): number;
    getBarWidth(ctx: ExcelPrintContext, v: number): string;
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    getSaveType(): string;
    get outlineLabel(): string;
    get pathLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class ExcelBodyItemsElement extends ExcelReportGroupItemElementBase<ExcelPageBodyItems> {
    private _ghostView;
    constructor(doc: Document, model: ExcelPageBodyItems);
    get ghostView(): ExcelGhostItemElement;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    get isLayer(): boolean;
    get debugLabel(): string;
    get designable(): boolean;
    protected _debugBorder(): string;
    protected _doModelChanged(oldModel: ExcelPageBodyItems): void;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
}

/**
 * 아이템이 지정되지 않은 셀들을 dummy 아이템으로 채운다.
 */
declare class ExcelBox extends ExcelGroupItem {
    static readonly PROP_COL_COUNT = "colCount";
    static readonly PROP_ROW_COUNT = "rowCount";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    colSpan: number;
    rowSpan: number;
    private _row;
    private _col;
    private _colCount;
    private _rowCount;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * col
     */
    get col(): number;
    set col(value: number);
    /**
     * colCount
     */
    get colCount(): number;
    set colCount(value: number);
    _setColCount(value: number): boolean;
    /**
     * rowCount
     */
    get rowCount(): number;
    set rowCount(value: number);
    _setRowCount(value: number): boolean;
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    getMarqueeColLen(): number;
    getMarqueeRowLen(): number;
    canExpand(rows: number, cols: number): boolean;
    insertColumn(col: number): void;
    deleteColumn(col: number): void;
    insertRow(row: number): void;
    deleteRow(row: number): void;
    fillTexts(): void;
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    protected _getInitCellStyles(): {
        borderLeft: string;
        borderRight: string;
        borderTop: string;
        borderBottom: string;
    };
    getSaveType(): string;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    canFold(): boolean;
    protected _getEditProps(): IPropInfo[];
    validateChildProp(item: ExcelItems, prop: string, value: number): number;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    /**
     * Box 자체에 설정한 외곽선 보더 스타일을 셀 스타일에 반영한다.
     * 박스 아이템에 설정한 스타일은 외곽선 설정으로 외곽선이 포함된 셀들은 다른 스타일 설정을 무시하고 외곽선 보더 스타일로 설정된다.
     */
    private $_applyBoxBorderStyle;
}

/**
 * @private
 */
declare class ExcelBoxElement extends ExcelReportGroupItemElement<ExcelBox> {
    get rowCount(): number;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    _isDesignVisible(): boolean;
    _getColCount(m: ExcelBox): number;
    _getRowCount(m: ExcelBox): number;
    protected _getHaloText(box: ExcelBox): string;
}

/**
 * @private
 */
declare abstract class ExcelColumnHeaderView extends ExcelTableElement {
    setColPoints(doc: Document, pts: number[]): void;
    isCell(dom: Element): number;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _getCssSelector(): string;
    protected $_prepareTable(doc: Document, count: number): void;
    private $_prepareCells;
}

declare class ExcelDataBand extends TableLikeBand {
    static readonly PROP_DESIGN_VISIBLE = "designVisible";
    static readonly PROP_COL_COUNT = "colCount";
    static readonly PROP_GROUPS = "groups";
    static readonly PROP_END_ROW_MERGED = "endRowMerged";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLE_PROPS;
    static readonly DEFAULT_COL_COUNT = 5;
    static readonly $_ctor: string;
    static readonly ITEM_TYPE: string;
    private _designVisible;
    colSpan: number;
    rowSpan: number;
    private _row;
    private _col;
    private _colCount;
    private _endRowMerged;
    private _header;
    private _footer;
    private _dataRow;
    private _groupContainer;
    private _groups;
    private _sections;
    _needReset: boolean;
    _runRow: number;
    _saveRow: number;
    _saveCol: number;
    _saveRowSpan: number;
    constructor(name: string);
    get outlineItems(): IOutlineSource[];
    /**
     * false이면 visible이 false인 header, dataRow, footer, 항목이 없는 groups, details일 때 표시되는 container가 표시되지 않는다.
     * 즉, 각 섹션들이 행을 차지하지 않는다.
     * [주의] 이 속성과 무관하게 미리보기나 출력은 동일하도록 구현해야 한다.
     *       즉, 이 밴드 바로 아래 붙어있는 아이템은 속성과 상관없이 밴드 바로 다음에 붙어서 출력돼야 한다.
     */
    get designVisible(): boolean;
    set designVisible(value: boolean);
    /**
     * master
     */
    get master(): ExcelDataBand;
    set master(band: ExcelDataBand);
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * col
     */
    get col(): number;
    set col(value: number);
    /** colCount */
    get colCount(): number;
    set colCount(value: number);
    /* Excluded from this release type: _setColCount */
    /**
     * true면 end row 행들을 하나로 묶어서 표시한다. #760
     */
    get endRowMerged(): boolean;
    set endRowMerged(value: boolean);
    /**
     * group container.
     * for design only
     */
    get groupContainer(): ExcelDataBandRowGroupContainer;
    /** groups */
    get groups(): ExcelDataBandRowGroupCollection;
    /** header */
    get header(): ExcelDataBandHeader;
    /** footer */
    get footer(): ExcelDataBandFooter;
    /** dataRow */
    get dataRow(): ExcelDataBandDataRow;
    get root(): ExcelDataBand;
    get detail(): ExcelDataBandCollection;
    getFillItems(): ReportItem[];
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    getMarqueeColLen(): number;
    getMarqueeRowLen(): number;
    getGroup(index: number): ExcelDataBandRowGroup;
    getColItems(col: number, all?: boolean): ExcelItems[];
    getColRangeItems(c1: number, c2?: number): ExcelItems[];
    /**
     * band col count가 줄어들 때 col span이 줄어드는 아이템들.
     */
    getColTrimmedItems(count: number): ExcelItems[];
    /**
     * band col count가 감소할 때 col span이 줄어드는 아이템들을 리턴한다.
     */
    getColShrinkedItems(count: number): ExcelItems[];
    /**
     * band 컬럼이 삽입될 때 col span이 늘어나는 아이템들.
     */
    getColSpannedItems(col: number): ExcelItems[];
    /**
     * 컬럼이 삭제될 때 col span이 줄어드는 아이템들을 리턴한다.
     */
    getColContractedItems(col: number): ExcelItems[];
    /**
     * band 컬럼이 삽입될 때 column이 밀리는 아이템들을 리턴한다.
     */
    getColPushedItems(col: number): ExcelItems[];
    /**
     * band 컬럼이 삭제될 때 column이 올라오는 아이템들을 리턴한다.
     */
    getColPulledItems(col: number): ExcelItems[];
    getHiddenText(): string;
    getLockCells(): {
        r: number;
        c: number;
    }[];
    write(ctx: ExcelPrintContext, drows?: number[]): IExcelRenderInfo;
    getSaveType(): string;
    get outlineLabel(): string;
    outlineVisible(child: IOutlineSource): boolean;
    canFold(): boolean;
    canSized(): boolean;
    needDesignBorder(): boolean;
    needDesignHeight(): boolean;
    needDesignWidth(): boolean;
    get isBand(): boolean;
    protected _ignoreItems(): boolean;
    protected _createDataBandCollection(): DataBandCollection;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    isAncestorOf(item: ReportPageItem): boolean;
    findOf(hash: string): ReportPageItem;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doPrepareIndices(ctx: PrintContextBase): void;
    getNextDetailRows(dataView: BandDataSortView, from?: number): number[];
    containsInSection(item: ReportItem): boolean;
    protected _changed(prop: string, value: any, oldValue: any): void;
    protected _doItemChanged(item: ReportItem, prop: string, value: any, oldValue: any): void;
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _doItemsAdded(items: ReportItem[]): void;
    protected _doItemRemoved(item: ReportItem, index: number): void;
    protected _doItemsRemoved(items: ReportItem[]): void;
    protected _doItemsCleared(): void;
    protected _doAfterLoad(loader: IReportLoader, src: any): void;
    protected _doPrepareLayout(printing: boolean): void;
    prepareLayout(printing: boolean): void;
    private $_buildDefaultCtx;
    private $_groupChanged;
    $_resetRows(): void;
    setNeedCheckDummy(): void;
}

declare class ExcelDataBandCollection extends DataBandCollection implements IExcelGroupItem {
    _row: number;
    _fills: ExcelBandFillItem[];
    getItemPasteInfo(item: ExcelItems): {
        error?: string;
        deletes?: ExcelItems[];
    };
    get band(): ExcelDataBand;
    getCol(): number;
    getRow(): number;
    getBandsLen(): number;
    getRowLen(): number;
    getColLen(): number;
    getFillRows(): number;
    getFillCols(): number;
    getHiddenText(): string;
    getFillItems(): ReportItem[];
    get isChildPropContainer(): boolean;
    get row(): number;
    get marqueeParent(): ReportItem;
    canFold(): boolean;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _doItemsAdded(items: ReportItem[]): void;
    protected _doItemRemoved(item: ReportItem, index: number): void;
    protected _doItemsCleared(): void;
    protected _doItemsRemoved(items: ReportItem[]): void;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    protected _doPrepareLayout(printing: boolean): void;
    _resetPositions(): void;
}

declare class ExcelDataBandDataRow extends ExcelDataBandSection {
    static readonly $_ctor: string;
    static readonly SECTION_TYPE: BandSectionType;
    _runRowCount: number;
    get outlineLabel(): string;
    get pathLabel(): string;
    getHiddenText(): string;
    writeAll(ctx: ExcelPrintContext, drows?: number[]): IExcelCell[];
    writeRow(ctx: ExcelPrintContext, drow: number, col: number): IExcelCell[];
    protected _getSectionType(): BandSectionType;
    private $_writeRow;
}

/**
 */
declare class ExcelDataBandDesigner extends TableBandDesigner {
    protected _createFields(band: ExcelDataBand, fields: HTMLElement[]): void;
    protected _getTitle(): string;
    protected _createTableBand(addType: TableBandDesignerAddType, name: string): ExcelDataBand;
    protected _createTextItem(addType: TableBandDesignerAddType, name: string, text?: string): ExcelTextItem;
}

/**
 * @private
 */
declare class ExcelDataBandElement extends ExcelReportGroupItemElementBase<ExcelDataBand> {
    static isBandLock(td: HTMLElement): boolean;
    private _headerView;
    private _footerView;
    private _rowView;
    private _groupsView;
    private _groupViews;
    private _detailsView;
    constructor(doc: Document, model: ExcelDataBand);
    get groupsView(): ExcelBandGroupContainerView;
    get detailsView(): ExcelBandCollectionElement;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    _isDesignVisible(): boolean;
    getHiddenView(dom: HTMLElement): VisualElement;
    getElementOf(model: ReportPageItem): ReportElement;
    protected _getHaloText(model: ExcelDataBand): string;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: ExcelPrintContext): void;
    private $_prepareGroupViews;
    private $_measureGroupViews;
    private $_fillLocks;
}

declare class ExcelDataBandFooter extends ExcelDataBandSection {
    static readonly $_ctor: string;
    static readonly SECTION_TYPE: BandSectionType;
    get outlineLabel(): string;
    get pathLabel(): string;
    getHiddenText(): string;
    protected _getInitCellStyles(): {
        backgroundColor: string;
    };
    protected _getSectionType(): BandSectionType;
}

declare class ExcelDataBandHeader extends ExcelDataBandSection {
    static readonly $_ctor: string;
    static readonly SECTION_TYPE: BandSectionType;
    get outlineLabel(): string;
    get pathLabel(): string;
    getHiddenText(): string;
    protected _getInitCellStyles(): {
        textAlign: string;
        fontWeight: string;
        backgroundColor: string;
        border: string;
    };
    protected _getSectionType(): BandSectionType;
}

declare class ExcelDataBandRowGroup extends DataBandRowGroup {
    static readonly PASTE_TYPE = "_row_group_paste_";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLE_PROPS;
    private _collection;
    private _header;
    private _footer;
    _row: number;
    _col: number;
    constructor(collection: ExcelDataBandRowGroupCollection);
    _initSections(): void;
    get band(): ExcelDataBand;
    /** header */
    get header(): ExcelDataBandRowGroupHeader;
    /** footer */
    get footer(): ExcelDataBandRowGroupFooter;
    get row(): number;
    set row(row: number);
    get col(): number;
    set col(col: number);
    getFillItems(): ReportItem[];
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getMarqueeColLen(): number;
    getMarqueeRowLen(): number;
    getHiddenText(): string;
    trimItems(colCount: number): void;
    get page(): ReportPageBase;
    get report(): ReportBase;
    get collection(): ExcelDataBandRowGroupCollection;
    get outlineParent(): IOutlineSource;
    get marqueeParent(): ReportItem;
    canSized(): boolean;
    canResize(dir: ResizeDirection): boolean;
    getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    getCollectionLabel(): string;
    get dataParent(): ReportGroupItem;
    get outlineLabel(): string;
    get displayPath(): string;
    protected _ignoreItems(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
    protected _doPrepareLayout(printing: boolean): void;
}

declare class ExcelDataBandRowGroupCollection extends ReportItemCollection<ExcelDataBandRowGroup> {
    static readonly $_ctor: string;
    private _band;
    private _groups;
    _fills: ExcelBandFillItem[];
    _row: number;
    constructor(band?: ExcelDataBand);
    get band(): ExcelDataBand;
    load(loader: IReportLoader, src: any): void;
    save(target: any): void;
    add(group: ExcelDataBandRowGroup | ConfigObject, index?: number): ExcelDataBandRowGroup;
    addAll(groups: (ExcelDataBandRowGroup | ConfigObject)[], index?: number): boolean;
    removeAt(index: number): boolean;
    remove(group: ExcelDataBandRowGroup): boolean;
    clear(): boolean;
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    prepareLayout(printing: boolean): void;
    prepareGroups(): ExcelDataBandRowGroup[];
    getFillItems(): ReportPageItem[];
    get owner(): ExcelDataBand;
    get count(): number;
    get items(): ReportPageItem[];
    get(index: number): ExcelDataBandRowGroup;
    indexOf(group: ExcelDataBandRowGroup): number;
    protected _doMoveItem(from: number, to: number): boolean;
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    get marqueeParent(): ReportItem;
    canDelete(): boolean;
    canMove(): boolean;
    private $_add;
    private $_invalidateGroups;
    private $_groupChanged;
}

declare class ExcelDataBandRowGroupContainer extends ExcelDataBandSection {
    protected _doPrepareLayout(printing: boolean): void;
    getRowLen(): number;
    getHiddenText(): string;
    getFillItems(): ReportItem[];
}

declare class ExcelDataBandRowGroupFooter extends ExcelDataBandRowGroupSection {
    static readonly PROPINFOS: IPropInfo[];
    static readonly SECTION_TYPE: BandSectionType;
    static readonly $_ctor: string;
    get outlineLabel(): string;
    get outlineParent(): IOutlineSource;
    get row(): number;
    get pathLabel(): string;
    get marqueeParent(): ReportItem;
    getHiddenText(): string;
    getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    prepareLayout(printing: boolean): void;
    protected _getSectionType(): BandSectionType;
}

declare class ExcelDataBandRowGroupHeader extends ExcelDataBandRowGroupSection {
    static readonly PROPINFOS: IPropInfo[];
    static readonly SECTION_TYPE: BandSectionType;
    static readonly $_ctor: string;
    get outlineLabel(): string;
    get row(): number;
    get outlineParent(): IOutlineSource;
    get pathLabel(): string;
    get marqueeParent(): ReportItem;
    getHiddenText(): string;
    getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    prepareLayout(printing: boolean): void;
    protected _getSectionType(): BandSectionType;
}

declare abstract class ExcelDataBandRowGroupSection extends ExcelDataBandSection {
    group: ExcelDataBandRowGroup;
    constructor(group: ExcelDataBandRowGroup);
    getCol(): number;
    getRow(): number;
    write(ctx: ExcelPrintContext, group: IBandRowGroup): IExcelCell[];
}

declare abstract class ExcelDataBandSection extends ExcelGroupItem {
    static readonly PROP_ROW_COUNT = "rowCount";
    static readonly PROP_MIN_ROW_HEIGHT = "minRowHeight";
    static readonly PROP_FIXED = "fixed";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLE_PROPS;
    protected _row: number;
    private _rowCount;
    private _minRowHeight;
    private _fixed;
    private _band;
    private _minRowHeightDim;
    _runRow: number;
    _pr: {
        r: number;
        c: number;
    };
    constructor(band: ExcelDataBand);
    get outlineItems(): IOutlineSource[];
    get row(): number;
    /** band */
    get band(): ExcelDataBand;
    get page(): ExcelPage;
    /**
     * 행 수.<br/>
     */
    get rowCount(): number;
    set rowCount(value: number);
    /* Excluded from this release type: _setRowCount */
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    write(ctx: ExcelPrintContext, group: IBandRowGroup): IExcelCell[];
    trimItems(colCount: number): void;
    get marqueeParent(): ReportItem;
    getMoveType(item: ReportItem): ItemMoveType;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    canAdd(item: ReportItem): boolean;
    canCopy(): boolean;
    canDelete(): boolean;
    canMove(): boolean;
    validateChildProp(item: ExcelItems, prop: string, value: number): number;
    getRowPushedItems(row: number): ExcelItems[];
    getRowPulledItems(row: number): ExcelItems[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _getSectionType(): BandSectionType;
}

/**
 * design-time에 databand나 box 그룹의 빈 셀에 자동으로 추가 삭제되는 임시 item이다.
 * 저장 모델이 아니므로 속성이 없고((row, col) 위치 정보만 readonly로 표시한다),
 * outline에 표시되지 않는다.
 */
declare class ExcelDummyItem extends ExcelItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    constructor(parent: ExcelGroupItem, row: number, col: number);
    rowSpan: number;
    colSpan: number;
    getColLen(): number;
    getRowLen(): number;
    getSaveType(): string;
    get outlineLabel(): string;
    get removable(): boolean;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canFold(): boolean;
    canDelete(): boolean;
    adoptDragSource(source: any): IDropResult;
}

declare interface ExcelExportOptions {
    report?: ExcelReport;
    data?: ReportDataProvider;
    fileName?: string;
}

/**
 * databand나 box 그룹의 빈 셀에 자동으로 추가 삭제된다.
 * outline에 표시되지 않는다.
 */
declare class ExcelGhostItem extends ExcelItem {
    static readonly PROPINFOS: IPropInfo[];
    private _owner;
    constructor(owner: ReportGroupItem);
    get owner(): ReportGroupItem;
    rowSpan: number;
    colSpan: number;
    getColLen(): number;
    getRowLen(): number;
    get page(): ReportPageBase;
    get pathLabel(): string;
    get removable(): boolean;
    canFold(): boolean;
    canMove(): boolean;
    canCopy(): boolean;
    getRow(): number;
    getCol(): number;
    protected _getEditProps(): IPropInfo[];
    adoptDragSource(source: any): IDropResult;
    canDelete(): boolean;
}

/**
 * @private
 */
declare class ExcelGhostItemElement extends ExcelReportItemElement<ExcelGhostItem> {
    owner: ReportElement;
    constructor(doc: Document, owner: ReportElement);
    setCell(r: number, c: number): this;
    get editable(): boolean;
    getEditParent(): VisualElement;
    setEditText(report: ReportBase, text: string): void;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
}

declare abstract class ExcelGroupItem extends ReportGroupItem implements IExcelGroupItem {
    static readonly PROP_CELL_STYLES = "cellStyles";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLES;
    static readonly CELL_STYLES: string[];
    private static readonly CELL_STYLE_MAP;
    private _cellStyles;
    _saveRow: number;
    _saveCol: number;
    private _needCheckDummy;
    private _colLen;
    private _dummyRows;
    constructor(name: string);
    getSubStyleProps(prop: string): IPropInfo[];
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    getItemPasteInfo(item: ExcelItems): {
        error?: string;
        deletes?: ExcelItems[];
    };
    /** cellStyles */
    get cellStyles(): Styles;
    set cellStyles(value: Styles);
    abstract getRow(): number;
    abstract getCol(): number;
    validateChildProp(item: ExcelItems, prop: string, value: number): number;
    getDummies(): ExcelDummyItem[];
    getFillItems(): ReportItem[];
    getColItems(col: number, all?: boolean): ExcelItems[];
    getColRangeItems(c1: number, c2?: number): ExcelItems[];
    /**
     * band나 box의 col count가 줄어들 때 col span이 줄어드는 아이템들.
     */
    getColTrimmedItems(count: number): ExcelItems[];
    /**
     * col count가 감소할 때 col span이 줄어드는 아이템들을 리턴한다.
     */
    getColShrinkedItems(count: number): ExcelItems[];
    /**
     * 컬럼이 삽입될 때 col span이 늘어나는 아이템들.
     */
    getColSpannedItems(col: number): ExcelItems[];
    /**
     * 컬럼이 삭제될 때 col span이 줄어드는 아이템들을 리턴한다.
     */
    getColContractedItems(col: number): ExcelItems[];
    /**
     * 컬럼이 삽입될 때 column이 밀리는 아이템들을 리턴한다.
     */
    getColPushedItems(col: number): ExcelItems[];
    /**
     * 컬럼이 삭제될 때 column이 올라오는 아이템들을 리턴한다.
     */
    getColPulledItems(col: number): ExcelItems[];
    getRowItems(row: number, all?: boolean): ExcelItems[];
    getRowRangeItems(r1: number, r2?: number): ExcelItems[];
    /**
     * band section이나 box의 row count가 줄어들 때 row span이 줄어드는 아이템들.
     */
    getRowTrimmedItems(count: number): ExcelItems[];
    /**
     * row count가 감소할 때 row span이 줄어드는 아이템들을 리턴한다.
     */
    getRowShrinkedItems(count: number): ExcelItems[];
    /**
     * 행이 삽입될 때 row span이 늘어나는 아이템들을 리턴한다.
     */
    getRowSpannedItems(row: number): ExcelItems[];
    /**
     * 행이 삭제될 때 row span이 줄어드는 아이템들을 리턴한다.
     */
    getRowContractedItems(row: number): ExcelItems[];
    /**
     * 행이 삽입될 때 row가 밀리는 아이템들을 리턴한다.
     */
    getRowPushedItems(row: number): ExcelItems[];
    /**
     * 행이 삭제될 때 row가 올라오는 아이템들을 리턴한다.
     */
    getRowPulledItems(row: number): ExcelItems[];
    getHiddenText(): string;
    fillStyle(styles: Styles, fillStyle: any): void;
    setNeedCheckDummy(): void;
    findOf(hash: string): ReportPageItem;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _savePropsOf(target: object, infos: IPropInfo[]): void;
    canFold(): boolean;
    canSized(): boolean;
    canRotate(): boolean;
    canResize(dir: ResizeDirection): boolean;
    canAdd(item: ReportItem): boolean;
    needDesignBorder(): boolean;
    needDesignHeight(): boolean;
    needDesignWidth(): boolean;
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _doItemRemoved(item: ReportItem, index: number): void;
    protected _doItemChanged(item: ReportItem, prop: string, value: any, oldValue: any): void;
    protected _doPrepareLayout(printing: boolean): void;
    abstract getColLen(): number;
    abstract getRowLen(): number;
    abstract getFillCols(): number;
    abstract getFillRows(): number;
    protected _doInitGroup(): void;
    protected _saveCellStyles(saveTarget: Object): void;
    protected _getInitCellStyles(): Styles;
    private $_refreshDummies;
}

declare type ExcelGroupItems = ExcelGroupItem | ExcelDataBand | ExcelDataBandCollection;

declare type ExcelGroups = ExcelBox | ExcelDataBand | ExcelDataBandRowGroup;

declare class ExcelImageItem extends ImageItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _row;
    private _col;
    private _rowSpan;
    private _colSpan;
    _saveRow: number;
    _saveCol: number;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * col
     */
    get col(): number;
    set col(value: number);
    /**
     * rowSpan
     */
    get rowSpan(): number;
    set rowSpan(value: number);
    /**
     * colSpan
     */
    get colSpan(): number;
    set colSpan(value: number);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    canSized(): boolean;
    canFold(): boolean;
    canResize(dir: ResizeDirection): boolean;
    needDesignBorder(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare abstract class ExcelItem extends ReportItem {
    static readonly PROP_ROW = "row";
    static readonly PROP_COL = "col";
    static readonly PROP_ROWSPAN = "rowSpan";
    static readonly PROP_COLSPAN = "colSpan";
    static readonly PROP_COLS = "cols";
    static readonly PROP_ROWS = "rows";
    static readonly PROPINFOS: IPropInfo[];
    static setItemCols(item: ExcelItems, col: number, span: number): void;
    static setItemRows(item: ExcelItems, row: number, span: number): void;
    static getDisplayBounds(item: ExcelItems, p: ExcelGroupItem): {
        r1: number;
        c1: number;
        r2: number;
        c2: number;
    };
    static isIntersecting(item: ExcelItems, r1: number, c1: number, r2: number, c2: number, p?: ExcelGroupItem): boolean;
    static isContained(item: ExcelItems, r1: number, c1: number, r2: number, c2: number, p?: ExcelGroupItem): boolean;
    static createRenderInfo(ctx: ExcelPrintContext, item: ExcelItems | ExcelItem, info: any): IExcelRenderInfo;
    private _row;
    private _col;
    _saveRow: number;
    _saveCol: number;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * ccol
     */
    get col(): number;
    set col(value: number);
    getCol(): number;
    getRow(): number;
    abstract getColLen(): number;
    abstract getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    needDesignBorder(): boolean;
    canFold(): boolean;
    canSized(): boolean;
}

declare type ExcelItems = ExcelTextItem | ExcelSummaryItem | ExcelImageItem | ExcelDataBand | ExcelBox | ExcelDummyItem | ExcelBarcodeItem | ExcelBarItem | ExcelSignItem | ExcelStampItem;

declare class ExcelPage extends ReportPageBase implements ISheetOwner {
    static readonly GHOST_POS_CHANGED = "onPageGhostPosChanged";
    static readonly SHEET_OPTIONS: ISheetOptions;
    private _sheet;
    private _body;
    _noEvent: boolean;
    constructor(report: ExcelReport);
    sheetColCountChanged(count: number, oldCount: number): void;
    sheetRowCountChanged(count: number, oldCount: number): void;
    get sheet(): DesignSheet;
    get body(): ExcelPageBody;
    get type(): ReportPageType;
    set type(v: ReportPageType);
    get report(): ExcelReport;
    itemAt(row: number, col: number): ExcelItems;
    /**
     * box의 경우 rowCount, colCount가 다른 item들과 겹치지 않도록 조정해야 한다.
     * row 개수를 최대한 유지한다.
     * box는 최상위에만 추가 가능하다.
     */
    _checkBoxSize(box: ExcelBox): boolean;
    _checkColSpan(item: ExcelItems, value: number): number;
    _checkRowSpan(item: ExcelItems, value: number): number;
    getItems(r1: number, c1: number, r2?: number, c2?: number): ExcelItems[];
    isEmpty(r1: number, c1?: number, r2?: number, c2?: number): boolean;
    canDeleteRows(r1: number, r2?: number): boolean;
    canDeleteCols(c1: number, c2?: number): boolean;
    canAddAt(r: number, c: number, item: ExcelItems): boolean;
    /**
     * (preview나 export에서 동적으로 행 수가 결정되는 - 현재는 data band가 유일)
     * data band 추가나, band section 행들 추가 시 필요한 만큼 sheet 행들을 삽입한다.
     * 행이 삽입되므로 밴드를 추가하련 행 아래쪽 아이템들의 위치가 아래쪽으로 조정된다.
     */
    expandBand(band: ExcelItems, oldRows: number, stretch: IBandStretch): IBandExpand;
    collapseBand(save: IBandExpand): void;
    /**
     * 밴드를 추가하려는 행 이전부터 시작되어 밴드와 교차될 아이템들을 오른쪽으로 밀어낸다.
     */
    stretchBand(band: ExcelItems, oldCols: number, oldRows: number): IBandStretch;
    shrinkBand(save: IBandStretch): void;
    insertSheetRow(row: number, undoCallback?: EditCommandCallback): void;
    appendSheetRows(count: number): void;
    deleteSheetRows(row: number, count: number, undoCallback?: EditCommandCallback): void;
    insertSheetColumn(col: number, undoCallback?: EditCommandCallback): void;
    deleteSheetColumns(col: number, count: number, undoCallback?: EditCommandCallback): void;
    private $_refillSheet;
    /**
     * drag&drop이나 ghost셀에 아이템이 생성 추가될 때 셀 위치를 고려해서 기본 속성 재설정.
     */
    checkItemInit(item: ExcelItems): boolean;
    alignItems(itemList: ReportPageItem[], align: 'left' | 'center' | 'right'): EditCommand[];
    canMerge(items: ExcelItems[]): {
        items: ExcelItems[];
        mergeItem: ExcelItems;
        itemRows: number[];
        itemCols: number[];
    };
    mergeItems(items: ExcelItems[]): EditCommand[];
    getPageLabel(): string;
    protected _initSections(): ReportGroupItem[];
    getPasteTarget(): ReportGroupItem;
    getRemoveCommand(item: ReportPageItem): EditCommand;
    canResize(dir: ResizeDirection): boolean;
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    protected _boundable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doSave(target: object): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doPrepareLayout(printing: boolean): void;
    afterLayout(printing: boolean): void;
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _createRemoveItemsCommand(items: ReportPageItem[]): ReportEditCommand;
    removeItems(commands: EditCommandStack, items: ReportPageItem[]): void;
    protected _fireItemAdded(item: ReportPageItem, index: number, silent: boolean): void;
    protected _fireItemsAdded(items: ReportPageItem[], index: number): void;
    protected _fireItemRemoved(item: ReportPageItem, oldParent: ReportGroupItem): void;
    protected _fireItemsRemoved(items: ReportPageItem[]): void;
    protected _fireItemChanged(item: ReportPageItem, prop: string, value: any, oldValue: any): void;
    private $_items;
}

declare class ExcelPageBody extends PageBodyBase {
    static readonly $_ctor: string;
    get page(): ExcelPage;
    get itemsContainer(): ExcelPageBodyItems;
    protected _createPageBodyItems(): ExcelPageBodyItems;
}

/**
 * @private
 */
declare class ExcelPageBodyElement extends ReportElement {
    private _model;
    private _sheetView;
    private _itemsView;
    constructor(doc: Document);
    get model(): ExcelPageBody;
    set model(value: ExcelPageBody);
    get sheetView(): ExcelSheetView;
    get itemsView(): ExcelBodyItemsElement;
    isPageDom(dom: HTMLElement): boolean;
    findElement(modelName: string): ReportItemElement;
    findElementOf(dom: HTMLElement): ReportItemElement;
    getElementOf(model: ReportPageItem): ReportElement;
    getCellElement(cell: HTMLTableCellElement): ReportItemElement<ReportItem>;
    getCell(row: number, col: number): HTMLTableCellElement;
    protected _getCssSelector(): string;
    get debugLabel(): string;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: ExcelPrintContext): void;
    findChildOf(dom: Element, deep: boolean): VisualElement;
    protected _createSheetView(doc: Document): ExcelSheetView;
}

declare class ExcelPageBodyItems extends ReportGroupItem implements IExcelGroupItem {
    static readonly $_ctor: string;
    private _ghost;
    constructor(name: string);
    getItemPasteInfo(item: ExcelItems): {
        error?: string;
        deletes?: ExcelItems[];
    };
    get ghost(): ExcelGhostItem;
    getRow(): number;
    getCol(): number;
    getMoveType(item: ReportItem): ItemMoveType;
    get outlineLabel(): string;
    protected _getEditProps(): IPropInfo[];
    canResize(dir: ResizeDirection): boolean;
    canMove(): boolean;
    canCopy(): boolean;
    canDelete(): boolean;
    canContainsBand(): boolean;
    protected _ignoreItems(): boolean;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    protected _doPrepareLayout(printing: boolean): void;
}

declare class ExcelPageEditView extends ExcelPageView {
    private _focusedItem;
    private _focusRequested;
    private _selections;
    constructor(doc: Document);
    onSelectionsChanged(selections: Selections): void;
    get sheet(): DesignSheet;
    /**
     * focusedItem
     */
    get focusedItem(): ReportPageItem;
    set focusedItem(value: ReportPageItem);
    /**
     * column이나 row의 너비/높이를 변경할 때,
     * 선택된 상태였을 때만(ghost 일 수도 있다) focus를 설정한다.
     */
    setFocusedAfterAdd(item: SheetRow | SheetColumn): void;
    private $_setFocused;
    get focusedElement(): ReportElement;
    get focusedItemElement(): ReportItemElement;
    internalSelections(): ExcelSelections;
    get selection(): ISelectionSource[];
    get lastSelectedItem(): ISelectionSource;
    clearSelection(): void;
    _modelChanged(): void;
}

/**
 * @private
 */
declare class ExcelPageView extends PageViewBase {
    private _col;
    private _row;
    private _model;
    private _bodyView;
    private _paperInfoText;
    constructor(doc: Document);
    /** model */
    get model(): ExcelPage;
    get bodyView(): ExcelPageBodyElement;
    get sheetView(): ExcelSheetView;
    set row(value: number);
    set col(value: number);
    isPageDom(dom: HTMLElement): boolean;
    measure(ctx: ExcelPrintContext, bounds: Rectangle, pageViews: ExcelPageView[]): ISize;
    layout(ctx: ExcelPrintContext, bounds: Rectangle): void;
    afterRender(ctx: ExcelPrintContext): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _getCssSelector(): string;
    findElementOf(dom: HTMLElement): ReportElement;
    getElementOf(model: ReportPageItem): ReportElement;
    getFirst(): ReportItemElement;
    getLast(): ReportItemElement;
    getFirstInGroup(group: ReportGroupItemElement): ReportItemElement;
    getLastInGroup(group: ReportGroupItemElement): ReportItemElement;
    getLeft(elt: ReportItemElement): ReportItemElement;
    getRight(elt: ReportItemElement): ReportItemElement;
    getPrev(elt: ReportItemElement): ReportItemElement;
    getNext(elt: ReportItemElement): ReportItemElement;
    getUpper(elt: ReportItemElement): ReportItemElement;
    getLower(elt: ReportItemElement): ReportItemElement;
    itemOfDom(dom: Element): ReportItem;
    $_setModel(model: ExcelPage): this;
    /**
     * 시트 리포트에서 종이 영역 관련 스타일을 세팅한다.
     * @returns
     */
    private $_setPaperLineStyle;
    /**
     * 왼쪽에서 오른쪽으로 위에서 아래로 정렬한 아이템들 배열안에서 현재 아이템의 다음 아이템을 찾는다.
     */
    private $_getNextItemElement;
    /**
     * 왼쪽에서 오른쪽으로 위에서 아래로 정렬한 아이템들 배열안에서 현재 아이템의 이전 아이템을 찾는다.
     */
    private $_getPrevItemElement;
}

/**
 * @private
 */
declare class ExcelPrintContext extends PrintContextBase<ExcelReport> {
    private _lastStartPrintedRow;
    private _saveSameStartPrintedRowCount;
    private _cells;
    private _heights;
    reportView: ExcelReportView;
    sheetView: ExcelSheetView;
    printView: SheetPrintView;
    printRows: number;
    printRow: number;
    /**
     * 가장 최근에 출력된 시작 행 정보
     * 이 정보를 통해 같은 행이 100번 이상 출력되는 경우를 방지한다.
     */
    get lastStartPrintedRow(): number;
    set lastStartPrintedRow(row: number);
    /**
     * 같은 행이 100번 이상 출력되는 경우를 방지하기 위해
     * 같은 행이 몇번 출력되었는지 카운트한다.
     */
    get saveSameStartPrintedRowCount(): number;
    set saveSameStartPrintedRowCount(count: number);
    get cells(): IExcelRenderInfo[][];
    set cells(cells: IExcelRenderInfo[][]);
    get heights(): number[][];
    set heights(heights: number[][]);
    getItemCell(item: ExcelItems | ExcelGroupItems): HTMLTableCellElement;
    getCell(row: number, col: number): HTMLTableCellElement;
    getItemRect(item: ExcelItems | ExcelGroupItem): IRect;
    getMarqueeRect(item: ExcelGroups): IRect;
    setCellHeight(cell: HTMLTableCellElement): void;
    setCellFixedHeight(cell: HTMLTableCellElement): void;
    setConditionalFormatting(options: IConditionalFormattingOptions): void;
    preparePrint(report?: ExcelReport): void;
}

declare class ExcelReport extends ReportBase<ExcelPage> {
    static readonly GHOST_POS_CHANGED = "onReportGhostPosChanged";
    setSaveTagging(tag: string): ExcelReport;
    itemByName(name: string): ReportItem;
    itemOf(hash: string): ReportItem;
    addItem(parent: ReportGroupItem, item: ExcelItems, index?: number): boolean;
    alignItems(itemList: ReportPageItem[], align: 'left' | 'center' | 'right'): void;
    moveItemBy(item: ExcelItems, dr: number, dc: number): void;
    moveItem(item: ExcelItems, r: number, c: number): void;
    checkPasteTo(target: ReportPageItem): string;
    protected _doSaveItem(item: ReportItem, obj: any, clipboard: boolean): boolean;
    /**
     * 1. 빈 셀이나 group 아이템이 아닌 아이템 위치에서만 붙어녛기 할 수 있다.
     * 2. 붙어녛기할 item들 중 대상 parent의 범위를 벗어난 경우 전체 붙여넣기가 취소된다.
     * 3. 붙여넣기 될 위치에 붙여넣기할 아이템과 범위가 일부 겹치는 아이템이 포함된 경우 전체 붙여넣기가 취소된다.
     * 4. 붙여넣기 될 위치가 빈 셀이 아닌 경우 overwrite될 기존 item은 제거된다.
     */
    pasteItems(sources: string, target: ReportPageItem): ReportItem[];
    validateSheetName(sheet: Sheet, newName: string): void;
    get type(): ReportType;
    get root(): ExcelReportRootItem;
    protected _createReportLoader(): IReportLoader;
    setItemProperty(item: ReportPageItem, prop: string, value: any): void;
    prepareLayout(page?: number): void;
    afterLayout(): void;
    protected _createPage(): ExcelPage;
    protected _createReportRootItem(report: ReportBase): ExcelReportRootItem;
    private $_isGroupItemExist;
    private $_getExistItems;
    /**
     * 복사한 아이템중 가장 왼쪽, 상단에 위치한 row, col 정보와 붙여넣기 할 위치의 row, col 차이를 구한다.
     */
    private $_getPasteDistance;
    onPageGhostPosChanged(page: ExcelPage, item: ExcelGhostItem): void;
}

declare class ExcelReportEditor extends ReportEditorBase<ExcelPrintContext> implements IReportEditor, IContextMenuOwner {
    static isColSizeHandle(dom: Element): number;
    static isRowSizeHandle(dom: Element): number;
    private _edit_menu;
    private _band_section_menu;
    private _band_headers_menu;
    private _band_footers_menu;
    private _band_rows_menu;
    private _groups_menu;
    private _group_menu;
    private _details_menu;
    private _reportView;
    private _topHeaderLayerContainer;
    private _colHeaderLayer;
    private _rowHeaderLayer;
    private _cornerHeaderLayer;
    private _headerSelectionContainer;
    private _guard;
    private _contextMenuMap;
    constructor(container: string | HTMLDivElement);
    getFocusedCell(): HTMLTableCellElement;
    showEditFocus(): void;
    hideEditFocus(): void;
    canMergeSelection(): boolean;
    /**
     * TODO: 리포트 특성에 맞는 방법으로 변경 필요
     * - 같은 부모영역에 있는 아이템일 경우만 Merge 처리한다.
     * - 한 셀이라도 떨어져 있는 아이템이 있다면 Merge 하지 않는다
     * - 이미 병합되어있다면 Merge 하지 않는다.
     */
    mergeSelectedItems(): void;
    getContextMenu(menuKey: string): MenuItem[];
    registerContextMenu(menuKey: string, contextMenus: MenuItem[]): void;
    scrollVert(delta: number): void;
    scrollHorz(delta: number): void;
    get displayPath(): string;
    get colHeaderView(): ColumnHeaderLayer;
    get rowHeaderView(): RowHeaderLayer;
    /**
     * reportView.
     */
    get reportView(): ExcelReportEditView;
    get pageView(): ExcelPageView;
    /** report */
    get report(): ExcelReport;
    set report(value: ExcelReport);
    get page(): ExcelPage;
    /** activePage */
    get activePage(): number;
    set activePage(value: number);
    get currPage(): ExcelPage;
    get currSheet(): DesignSheet;
    findDropTarget(source: any, target: HTMLElement): {
        item: any;
        view: ReportItemElement<any>;
        target: HTMLElement;
    };
    startBandDesigner(data: BandArrayData, callback: (item: ExcelDataBand) => void): void;
    addDetailBand(item?: ReportPageItem): void;
    getRowPoints(): number[];
    getColPoints(): number[];
    getMarqueePoints(itemView: ExcelBoxElement | ExcelDataBandElement): {
        colPoints: number[];
        rowPoints: number[];
        sheetPoints: number[];
    };
    addColumnSelection(col: number): ColHeaderSelection2;
    addRowSelection(row: number): RowHeaderSelection2;
    rowAt(y: number): number;
    colAt(x: number): number;
    $_getFocusRow(): number;
    insertRow(row?: number): void;
    appendRows(count?: number): void;
    removeRows(row?: number, count?: number): void;
    insertColumn(col?: number): void;
    removeColumns(col?: number, count?: number): void;
    getSheetColumn(index: number): SheetColumn;
    getSheetRow(index: number): SheetRow;
    isFocusedItemIsDummy(): boolean;
    isHiddenBandItem(page: ExcelPage, dom: Element): ReportItem | ExcelDataBandRowGroupCollection;
    pasteItems(sources: string, target: ReportPageItem): ReportItem[];
    getFocusRect(): Rectangle;
    get focusedElement(): ReportElement;
    /** focusedItem */
    get focusedItem(): ReportPageItem;
    set focusedItem(value: ReportPageItem);
    /** focusedItemElement */
    get focusedItemElement(): ReportItemElement;
    /** selections */
    get selections(): ExcelSelections;
    beginSelet(): void;
    endSelect(): void;
    protected _createContext(): ExcelPrintContext;
    protected _createDefaultTool(): VisualTool;
    getAllElements(bounds: Rectangle): ReportItemElement[];
    getDisplayParent(item: ReportPageItem): ReportPageItem;
    hideError(): void;
    endAdd(accept?: boolean, target?: ReportGroupItemElement, callback?: (item: ReportItem) => void): ReportItem;
    getEditMarquee(): EditMarquee<ReportElement>;
    getEditMarqueeTarget(dom: HTMLElement): IEditMarqueeTarget;
    closeEditMarquee(): void;
    showEditMarquee(): void;
    hideEditMarquee(): void;
    canDeleteSelection(): boolean;
    deleteSelection(): boolean;
    shareAsSnippet(): ExcelSnippet;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _prepareGuards(doc: Document): void;
    protected _getGuard(): ReportElement;
    protected _getReportView(): ReportViewBase;
    protected _doLayout(bounds: Rectangle): void;
    protected _doAfterRender(): void;
    protected _skipFocus(reportView: ExcelReportEditView, elt: VisualElement): boolean;
    protected _setScrollContainerRect(rect: Rectangle): void;
    protected _setEditorContainerRect(rect: Rectangle): void;
    getEditMenu(): MenuItem[];
    protected _zoomLabelPos(): {
        x: number;
        y: number;
    };
    protected _createTextEditor(doc: Document, editor: IReportEditor): ExcelTextEditor;
    protected _makeFocusVisible(reportView: ExcelReportEditView): void;
    protected _canShowEditor(elt: ReportItemView): boolean;
    protected _createEditView(doc: Document): ExcelReportEditView;
    /**
     * Row, Col, Corner Header Layer의 위치를 배치한다.
     */
    private $_layoutHeaders;
}

/**
 * @private
 *
 * 구조가 다르므로 ReportEditView를 계승하지 않는다.
 */
declare class ExcelReportEditView extends ExcelReportView {
    static readonly SHEET_HEAD = "rr-sheet-head";
    private _activePage;
    private _headLayer;
    private _pageHead;
    private _sheetHead;
    private _editLayer;
    private _feedbackLayer;
    private _pageView;
    constructor(doc: Document);
    get editor(): ExcelReportEditor;
    /**
     * active page number.
     */
    get activePage(): number;
    set activePage(value: number);
    setActivePage(value: number, force: boolean): void;
    get pageView(): ExcelPageEditView;
    get selection(): ISelectionSource[];
    /** focusedItem */
    get focusedItem(): ReportPageItem;
    set focusedItem(value: ReportPageItem);
    /** focusedElement */
    get focusedElement(): ReportElement;
    get focusedItemElement(): ReportItemElement;
    get editing(): boolean;
    get editLayer(): ReportEditLayer;
    getActivePage(): ExcelPage;
    findElementOf(dom: HTMLElement): ReportElement;
    getElementOf(model: ReportPageItem): ReportElement;
    getFocusedElement(): VisualElement;
    getSheetViewTableCellElement(row: number, col: number): HTMLTableCellElement;
    addFeedback(element: VisualElement | HTMLElement): boolean;
    removeFeedback(element: VisualElement | HTMLElement): void;
    layoutMask(): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _getCssSelector(): string;
    get zoom(): number;
    protected _createPageView(doc: Document): ExcelPageView;
    protected _modelChanged(): void;
    protected _resetPages(model: ExcelReport): void;
    _afterRender(ctx: ExcelPrintContext): void;
    _fireFocusedChanged(focused: ReportPageItem, old: ReportPageItem): void;
    _fireSelectionChanged(selection: ReportPageItem[]): void;
    protected onReportPageAdded(report: ExcelReport, page: ExcelPage): void;
    protected onReportPageRemoved(report: ExcelReport, page: ExcelPage, index: number): void;
    protected onReportItemAdded(report: ExcelReport, item: ReportItem, index: number, silent: boolean): void;
    protected onReportItemRemoved(report: ExcelReport, item: ReportItem, oldParent: ReportGroupItem): void;
    protected onReportItemsRemoved(report: ExcelReport, items: ReportPageItem[]): void;
    protected onReportItemFolded(item: ReportItem): void;
    protected onReportAlert(report: ExcelReport, item: ReportItem, message: string): void;
    protected onReportGhostPosChanged(report: ExcelReport, item: ExcelGhostItem): void;
}

/**
 * @private
 */
declare abstract class ExcelReportGroupItemElement<T extends ExcelGroupItem = ExcelGroupItem> extends ExcelReportGroupItemElementBase<T> {
    protected _buildItems(ctx: PrintContextBase, report: ReportViewBase, items: ExcelItems[]): void;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    abstract _getColCount(m: T): number;
    abstract _getRowCount(m: T): number;
}

/**
 * @private
 */
declare abstract class ExcelReportGroupItemElementBase<T extends ReportGroupItem = ReportGroupItem> extends ReportGroupItemElement<T> {
    private _haloView;
    setHaloVisible(value: boolean): void;
    isHalo(dom: HTMLElement): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    _isDesignVisible(): boolean;
    protected _doMeasure(ctx: ExcelPrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    getHiddenView(dom: HTMLElement): VisualElement;
    protected _getHiddenContextMenu(cell: HTMLTableCellElement): string;
    protected _getHaloText(model: ExcelItems | ExcelDataBandRowGroup): string;
    protected _doLayoutContent(ctx: ExcelPrintContext): void;
    protected _layoutItem(ctx: ExcelPrintContext, child: ReportElement, model: ExcelItems, x: number, y: number, width: number, height: number): void;
    protected _createHalo(doc: Document, lefted: boolean): HTMLElement;
    protected _resetCells(td: HTMLTableCellElement, rowCount: number, colCount: number): void;
}

/**
 * @private
 */
declare abstract class ExcelReportItemElement<T extends ReportItem = ReportItem> extends ReportItemElement<T> {
    static readonly HIDDEN_GROUP = "rr-excel-hidden-item";
    static readonly HALO_TAG = "rr-excel-item-halo-tag";
    protected _initDom(doc: Document, dom: HTMLElement): void;
    findElementOf(dom: HTMLElement): this;
    protected _setCell(ctx: ExcelPrintContext, td: HTMLTableCellElement, value: any, empty: boolean): void;
    /**
     * 특정 아이템에 다른 컨텐츠를 구성할때 override 해서 구성한다.
     * @param div td의 첫번째 container div 요소
     * @param content 설정되어야 할 content
     * @returns
     */
    protected _setCellContent(div: HTMLDivElement, content: any): void;
    protected _applyModelStyle(cell: HTMLTableCellElement, row: number, col: number): void;
    private $_setBindMarker;
}

declare class ExcelReportRootItem extends ReportRootItem {
    static readonly PROP_PAPER_LINE = "paperLine";
    static readonly PROPINFOS: IPropInfo[];
    private _paperLine;
    /**
     * paperLine
     * - 시트 리포트에서 종이 영역 라인의 표시여부 결정
     */
    get paperLine(): boolean;
    set paperLine(value: boolean);
    getEditProps(): IPropInfo[];
}

declare abstract class ExcelReportView extends ReportViewBase<ExcelReport> {
    private static ViewCreators;
    private _pageViews;
    private _isPageViewSized;
    constructor(doc: Document, printing: boolean);
    get pageViews(): ExcelPageView[];
    get isPageViewSized(): boolean;
    getPageView(index: number): ExcelPageView;
    protected _createEmptyView(doc: Document): VisualElement;
    _createElement(item: ReportItem): ReportElement;
    protected _resetPages(model: ExcelReport): void;
    getItemBoundingRect(element: VisualElement, rotated?: boolean): Rectangle;
    protected _createPageView(doc: Document): ExcelPageView;
    private $_layout;
    protected _afterLayout(ctx: ExcelPrintContext, bounds: Rectangle): void;
    private $_setPageViewsRect;
    _afterRender(ctx: ExcelPrintContext): void;
}

declare type ExcelRootItems = ExcelItems | ExcelBox | ExcelDataBand;

/**
 * @private
 */
declare abstract class ExcelRowHeaderView extends ExcelTableElement {
    constructor(doc: Document);
    setRowPoints(pts: number[]): void;
    resetFocusedTableBorder(focusedItem: ReportPageItem): void;
    isCell(dom: Element): number;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _getCssSelector(): string;
    protected _prepareTable(doc: Document, top: number, rows: number): void;
}

declare class ExcelSelections extends Selections {
    get headerCount(): number;
    getRow(row: number): SheetRow;
    getColumn(col: number): SheetColumn;
    isRowSelected(row: number): boolean;
    isColSelected(col: number): boolean;
    resizeTo(sel: HeaderSelection, to: number): void;
    get deletableItems(): ReportPageItem[];
    add(item: ISelectionSource): boolean;
    getRowSelection(row: number): RowHeaderSelection2;
    getColSelection(col: number): ColHeaderSelection2;
}

/**
 * @private
 */
declare class ExcelSheetView extends ExcelTableElement {
    private _model;
    private _modelDirty;
    private _minCol;
    private _maxCol;
    private _minRow;
    private _maxRow;
    private _zoom;
    private _xOff;
    private _yOff;
    private _rowPts;
    private _colPts;
    get model(): DesignSheet;
    get zoom(): number;
    setModel(sheet: DesignSheet): void;
    setModelDirty(): void;
    isModelDirty(): boolean;
    fillCell(row: number, col: number, rows: number, cols: number): void;
    getFirst(): HTMLTableCellElement;
    getLast(): HTMLTableCellElement;
    getLeft(row: number, col: number, skipLock: boolean): HTMLTableCellElement;
    getRight(row: number, col: number, skipLock: boolean): HTMLTableCellElement;
    getUpper(row: number, col: number, skipLock: boolean): HTMLTableCellElement;
    getLower(row: number, col: number, skipLock: boolean): HTMLTableCellElement;
    getTableCell(item: ExcelItems | ExcelGroupItems): HTMLTableCellElement;
    resetExtents(): void;
    getExtents(zoom?: number): {
        zoom: number;
        colPoints: number[];
        rowPoints: number[];
    };
    getRangeRect(r1: number, c1: number, rows: number, cols: number): IRect;
    getCellRect(r: number, c: number): IRect;
    getItemRect(item: ExcelItems | ExcelGroupItem): IRect;
    getMarqueeRect(item: ExcelGroups): IRect;
    setCellContentHeight(cell: HTMLTableCellElement): void;
    /**
     * Image일 경우 고정 높이를 설정해야 함
     */
    setCellFixedHeight(cell: HTMLTableCellElement): void;
    protected _getCssSelector(): string;
    protected _doMeasure(ctx: PrintContextBase, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContextBase): void;
    protected _prepareTable(doc: Document, sheet: DesignSheet): void;
    private $_prepareTableRow;
    private $_prepareCells;
}

declare class ExcelSignItem extends SignItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _row;
    private _col;
    private _rowSpan;
    private _colSpan;
    _saveRow: number;
    _saveCol: number;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * col
     */
    get col(): number;
    set col(value: number);
    /**
     * rowSpan
     */
    get rowSpan(): number;
    set rowSpan(value: number);
    /**
     * colSpan
     */
    get colSpan(): number;
    set colSpan(value: number);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    canSized(): boolean;
    canFold(): boolean;
    canResize(dir: ResizeDirection): boolean;
    needDesignBorder(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

/**
 * Sheet report snippet 모델.
 */
declare class ExcelSnippet extends SnippetBase {
    getType(): string;
    canSnippetable(items: ReportItem[]): boolean;
    protected _doLoad(parent: ReportGroupItem, loader: IReportLoader, data: any[]): ReportItem[];
}

declare class ExcelStampItem extends StampItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _row;
    private _col;
    private _rowSpan;
    private _colSpan;
    _saveRow: number;
    _saveCol: number;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * col
     */
    get col(): number;
    set col(value: number);
    /**
     * rowSpan
     */
    get rowSpan(): number;
    set rowSpan(value: number);
    /**
     * colSpan
     */
    get colSpan(): number;
    set colSpan(value: number);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    canSized(): boolean;
    canFold(): boolean;
    canResize(dir: ResizeDirection): boolean;
    needDesignBorder(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class ExcelSummaryItem extends SummaryItem {
    static readonly PROP_FORMAT = "format";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _row;
    private _col;
    private _rowSpan;
    private _colSpan;
    private _format;
    _saveRow: number;
    _saveCol: number;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * ccol
     */
    get col(): number;
    set col(value: number);
    /**
     * rowSpan
     */
    get rowSpan(): number;
    set rowSpan(value: number);
    /**
     * colSpan
     */
    get colSpan(): number;
    set colSpan(value: number);
    /**
     * format
     */
    get format(): string;
    set format(value: string);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    canSized(): boolean;
    canFold(): boolean;
    canResize(dir: ResizeDirection): boolean;
    needDesignBorder(): boolean;
    protected _doSave(target: object): void;
}

declare abstract class ExcelTableElement extends ExcelTableElementBase {
    measure(ctx: PrintContextBase, hintWidth: number, hintHeight: number): Size;
    protected _setSizeStyle(css: CSSStyleDeclaration): void;
}

declare abstract class ExcelTableElementBase extends ReportElement {
    needEnd: number;
    private _colgroup;
    private _thead;
    protected _tbody: HTMLTableSectionElement;
    constructor(doc: Document, needEnd?: number);
    createRow(doc: Document, height: number): HTMLTableRowElement;
    protected _createDom(doc: Document): HTMLElement;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    get trows(): HTMLCollectionOf<HTMLTableRowElement>;
    getCell(r: number, c: number): HTMLTableCellElement;
    protected _calcRowPoints(): number[];
    protected _calcColPoints(): number[];
    protected _setTableStyle(table: HTMLTableElement): void;
    protected _prepareCols(doc: Document, widths: number[]): void;
    protected _prepareHeads(doc: Document, count: number): HTMLTableSectionElement;
    protected _prepareRows(doc: Document, count: number): HTMLCollectionOf<HTMLTableRowElement>;
}

/* Excluded from this release type: ExcelTextEditor */

declare class ExcelTextItem extends TextItem {
    static readonly PROP_FORMULA = "formula";
    static readonly PROP_MERGE_COLS = "mergeCols";
    static readonly PROP_FORMAT = "format";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static createFrom(src: ExcelItems | ExcelGhostItem, text: string, name?: string): ExcelTextItem;
    private _row;
    private _col;
    private _rowSpan;
    private _colSpan;
    private _formula;
    private _mergeCols;
    private _format;
    _saveRow: number;
    _saveCol: number;
    _cells: IExcelCell[];
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * ccol
     */
    get col(): number;
    set col(value: number);
    /**
     * rowSpan
     */
    get rowSpan(): number;
    set rowSpan(value: number);
    /**
     * colSpan
     */
    get colSpan(): number;
    set colSpan(value: number);
    /**
     * formula
     */
    get formula(): string;
    set formula(value: string);
    /**
     * mergeCols
     */
    get mergeCols(): number;
    set mergeCols(value: number);
    /**
     * format
     */
    get format(): string;
    set format(value: string);
    getCol(): number;
    getRow(): number;
    getColLen(): number;
    getRowLen(): number;
    getFillCols(): number;
    getFillRows(): number;
    getBounds(): {
        r: number;
        c: number;
        rows: number;
        cols: number;
    };
    write(ctx: ExcelPrintContext): IExcelRenderInfo;
    moveFormula(colOffset: number, rowOffset: number): void;
    get marqueeParent(): ReportItem;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    canFold(): boolean;
    canSized(): boolean;
    canResize(dir: ResizeDirection): boolean;
    needDesignBorder(): boolean;
    getDesignText2(system: boolean): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _getPrintText(ctx: ExcelPrintContext, getValue?: (ctx: ExcelPrintContext) => string): string;
    private $_getPrintValue;
    private $_getOriginValue;
}

/* Excluded from this release type: ExpressionNode */

/* Excluded from this release type: ExpressionRuntime */

declare class FeedbackLayer extends LayerElement {
    private _childMap;
    private _actions;
    constructor(doc: Document);
    update(): void;
    addSpan(doc: Document, name: string, styles?: any, text?: string): HTMLSpanElement;
    clearAction(name: string, stop?: boolean): void;
    showSpan(name: string, text: string, x: number, y: number, duration?: number): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    private $_addAction;
}

declare interface FieldElementInfo {
    id: string;
    element: HTMLElement;
}

declare class FieldListManager extends VisualElement {
    private static readonly ICON_BTN_STYLE;
    private static readonly APEX_CONTAINER_STYLE;
    private static readonly SORT_ORDER_SEQUENCE;
    private static readonly SORT_ORDER_ICON;
    private _sortBtn;
    private _originalFieldInfo;
    private _currentSortOrder;
    private _searchInputContainer;
    private _clearSearchBtn;
    private _searchInput;
    private _labelElement;
    private _fieldListElement;
    private _moveButtonContainer;
    private _upButton;
    private _downButton;
    private _label;
    private _selectedElement;
    private _sortEnabled;
    private _moveFieldEnabled;
    private _onSearchFieldRefresh;
    private _saveOrderWhenFieldOrderChanged;
    private _fieldsLabelElement;
    constructor(doc: Document, name: string, label: string);
    protected _doDispose(): void;
    get fieldContainer(): HTMLDivElement;
    get moveButtonContainer(): HTMLDivElement;
    get upButton(): HTMLButtonElement;
    get downButton(): HTMLButtonElement;
    get fields(): HTMLElement[];
    get fieldCount(): number;
    get availableFieldCount(): number;
    get firstFieldElement(): Element;
    get lastFieldElement(): Element;
    get selectedElement(): HTMLElement;
    get fieldsLabelElement(): Element;
    get isSorting(): boolean;
    get isSearching(): boolean;
    set sortEnabled(value: boolean);
    get moveFieldEnabled(): boolean;
    set moveFieldEnabled(value: boolean);
    set onSearchFieldRefresh(value: (() => void) | null);
    set saveOrderWhenFieldOrderChanged(value: boolean);
    get labelElement(): HTMLSpanElement;
    sortFieldsByCurrentOrder(): void;
    searchByCurrentKeyword(): void;
    getButtonType(button: HTMLButtonElement): 'up' | 'down' | 'sort' | 'search' | 'none';
    buttonClick(button: HTMLButtonElement): void;
    collectFields(originalFields: IReportDataFieldInfo[], doc: Document): void;
    saveCurrentOrder(): void;
    layoutContent(): void;
    clearFields(): void;
    clearSelection(): void;
    containField(el: HTMLElement): boolean;
    appendField(field: Element): void;
    insertFieldBefore(curr: Element, elt: Element): void;
    trySelectElement(div: Element): void;
    isSelectedField(el: Element): boolean;
    isSelectedFieldExist(): boolean;
    getFieldsByOriginalOrder(): FieldElementInfo[];
    close(): void;
    refreshUpDownBtn(): void;
    refreshFieldsLabel(): void;
    focusSearchField(): void;
    scrollToFirstField(): void;
    scrollToLastField(): void;
    scrollToField(field: HTMLElement): void;
    protected _getCssSelector(): string;
    protected _doDraw(dom: HTMLElement): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    private $_createSearchField;
    private $_doSearch;
    protected _doMeasure(hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(): void;
    /**
     * 정렬 순서를 다음으로 변경함
     *
     * 변경된 정렬순서 정보를 반환함
     */
    private $_nextSortOrder;
    private $_sortFields;
    private $_getFieldElementInfos;
    private $_sortByOriginalOrder;
    /**
     * 선택된 필드를 아래로 이동시킨다
     */
    private $_moveDown;
    /**
     * 선택된 필드를 위로 이동시킨다.
     */
    private $_moveUp;
    private $_afterOrderMoveBtnClicked;
    private $_refreshSortBtn;
    private $_refreshMoveBtn;
    private $_refreshSearchField;
    private $_saveOriginalFields;
}

declare type FieldSummaryPosition = 'start' | 'last';

/* Excluded from this release type: FieldValueRuntime */

/**
 * Find options
 */
declare interface FindOptions {
    caseSensitive?: boolean;
    wholeWord?: boolean;
    regularExpression?: boolean;
    inSelection?: boolean;
}

/**
 * Find result
 */
declare interface FindResult {
    page: number;
    item: ReportItem;
    prop: string;
}

/**
 * 동일 그룹 내의 다른 아이템을 기준점으로 표시되는 아이템.
 * 자식으로 floating을 추가할 수 없다.
 */
declare class FloatingContainer extends ReportGroupItem {
    static readonly PROP_ANCHOR_TARGET = "anchorTarget";
    static readonly PROP_ANCHOR_POSITION = "anchorPosition";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Floating Container";
    private _anchorTarget;
    private _anchorPosition;
    constructor(name: string);
    /** anchorTarget */
    get anchorTarget(): string;
    set anchorTarget(value: string);
    /** anchorPosition */
    get anchorPosition(): AnchorPosition;
    set anchorPosition(value: AnchorPosition);
    getSaveType(): string;
    get outlineLabel(): string;
    protected _maxChildCount(): number;
    protected _boundable(): boolean;
    protected _getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canAdd(item: ReportItem): boolean;
}

declare class FocusView extends VisualElement {
    static readonly STYLE = "rr-focus-view";
    private _simpleMode;
    private _cellMode;
    private _editView;
    private _topHandle;
    private _bottomHandle;
    private _leftHandle;
    private _rightHandle;
    private _topLeftHandle;
    private _topRightHandle;
    private _bottomLeftHandle;
    private _bottomRightHandle;
    private _rotateHandle;
    private _rotateLine;
    private _rotateVisible;
    private _rotateHidden;
    constructor(doc: Document, editView: IReportEditView);
    /**
     * false이면 LEFT + RIGHT + TOP + BOTTOM.
     */
    get simpleMode(): boolean;
    set simpleMode(value: boolean);
    get cellMode(): boolean;
    set cellMode(value: boolean);
    handleVisible: boolean;
    layout(elt: VisualElement): void;
    hideRotation(): void;
    restoreRotation(): void;
    protected _getCssSelector(): string;
    get isLayer(): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
}

declare type FontFormat = 'truetype' | 'opentype' | 'woff';

/**
 * FontManager 폰트 관련 리소스 관리
 * 폰트 관련 리소스를 base64로 보관하고 가져다 사용할 수 있도록 작성
 */
declare class FontManager extends EventAware {
    static readonly FONT_ADDED = "onFontManagerFontAdded";
    static readonly FONT_REMOVED = "onFontManagerFontRemoved";
    private _fontSources;
    constructor();
    protected _doDispose(): void;
    get fonts(): FontSource[];
    get fontNames(): string[];
    registerFonts(fontSources?: UserFontSource[]): Promise<void>;
    getFonts(name: string, weight?: FontWeight): FontSource[];
    getFontsByWeight(weight: FontWeight): FontSource[];
    private $_convertFontWeight;
    private $_convertFontType;
    private $_fireFontAdded;
    private $_fireFontRemoved;
}

declare type FontSource = {
    name: string;
    source: string;
    fontWeight: FontWeight;
    format: FontFormat;
};

declare type FontWeight = 'normal' | 'bold';

declare abstract class FormulaConverterError extends Error {
    code: FormulaConverterErrorCode;
    constructor(message: string, code: FormulaConverterErrorCode);
}

declare enum FormulaConverterErrorCode {
    UNKNOWN_ERROR = "UNKNOWN_ERROR",
    UNKNOWN_TOKEN = "UNKNOWN_TOKEN",
    FORBIDDEN_BAND_REF = "FORBIDDEN_BAND_REF",
    FORBIDDEN_DETAIL_BAND_REF = "FORBIDDEN_DETAIL_BAND_REF",
    BAND_NOT_FOUND = "BAND_NOT_FOUND"
}

/**
 * Header bar contaioner 모델.
 */
declare class HeaderBarModel extends SectionBar {
    static readonly ALWAYS_VISIBLE_ITEMS_ID: string[];
    constructor();
    getAppMode(ctx: IDesignerContext): SectionBarButtonItem;
    protected _doRefresh(ctx: IDesignerContext): void;
}

declare abstract class HeaderLayer$1 extends ReportElement {
    vertical: boolean;
    static readonly SIZER_V = "rr-sheet-sizer-v";
    static readonly SIZER_H = "rr-sheet-sizer-h";
    private _handleLayer;
    protected _handles: HTMLDivElement[];
    protected _page: ExcelPageEditView;
    constructor(doc: Document, vertical: boolean);
    protected _doDispose(): void;
    get editor(): ExcelReportEditor;
    hideHandles(): void;
    showHandles(): void;
    protected _resetStates(cells: HTMLCollectionOf<HTMLTableCellElement> | Array<HTMLTableCellElement>): void;
    protected _prepareSizeHandles(doc: Document, count: number): void;
}

declare abstract class HeaderLayer<T extends ExcelTableElementBase> extends ReportElement {
    vertical?: boolean;
    _headerView: T;
    constructor(doc: Document, vertical?: boolean);
    protected _setSizeStyle(css: CSSStyleDeclaration): void;
    protected abstract _createHeaderView(doc: Document): T;
}

declare abstract class HeaderSelection {
    protected _start: number;
    private _end;
    private _from;
    private _to;
    constructor(index: number, count?: number);
    get start(): number;
    get end(): number;
    get from(): number;
    get to(): number;
    get length(): number;
    contains(index: number): boolean;
    resize(to: number): boolean;
    canSelectedWith(other: ISelectionSource): boolean;
    canMakeSnippet(): boolean;
}

declare class HeaderView extends DesignerLayerElement {
    private _dataListContainer;
    get dataListContainer(): DataListContainer;
    set dataListContainer(container: DataListContainer);
    refresh(): void;
    protected _doInitDom(doc: Document, dom: HTMLElement): void;
    protected _doInitStyles(dom: HTMLElement): void;
    private $_resetButtons;
    private $_setButtonVisibleByTag;
}

declare abstract class HichartAxis extends ChartObject<HichartItem> {
    static readonly PROP_TITLE = "title";
    static readonly PROP_CATEGORIES = "categories";
    static readonly PROP_CATEGORY_FIELD = "categoryField";
    static readonly PROP_LABELS = "labels";
    static readonly PROP_MIN_PADDING = "minPadding";
    static readonly PROP_MAX_PADDING = "maxPadding";
    static readonly PROP_PLOT_LINES = "plotLines";
    static readonly PROP_PLOT_BANDS = "plotBands";
    static readonly PROPINFOS: IPropInfo[];
    private _categories;
    private _categoryField;
    private _minPadding;
    private _maxPadding;
    private _title;
    private _labels;
    private _plotLines;
    private _plotBands;
    constructor(chart: HichartItem);
    getPropDomain(prop: IPropInfo): any[];
    getPopupPropLabel(prop: string): string;
    get outlineItems(): IOutlineSource[];
    get outlineExpandable(): boolean;
    get title(): HichartAxisTitle;
    get labels(): HichartAxisLabels;
    /** categories */
    get categories(): string[];
    set categories(value: string[]);
    /** categoryField */
    get categoryField(): string;
    set categoryField(value: string);
    /** minPadding */
    get minPadding(): number;
    set minPadding(value: number);
    /** minPadding */
    get maxPadding(): number;
    set maxPadding(value: number);
    get plotLines(): HichartAxisPlotLineCollection;
    get plotBands(): HichartAxisPlotBandCollection;
    getCategories(ctx: PrintContext, dp: IReportDataProvider): any[];
    abstract getPlotLineConfig(): object;
    abstract getPlotBandConfig(): object;
    get outlineParent(): IOutlineSource;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
}

declare class HichartAxisLabels extends ChartObject<HichartItem> {
    static readonly PROP_ALIGN = "align";
    static readonly PROP_FORMAT = "format";
    static readonly PROP_PADDING = "padding";
    static readonly PROP_STAGGER_LINES = "staggerLines";
    static readonly PROP_STEP = "step";
    static readonly PROPINFOS: IPropInfo[];
    private _align;
    private _format;
    private _padding;
    private _staggerLines;
    private _step;
    constructor(chart: HichartItem);
    /** align */
    get align(): Align;
    set align(value: Align);
    /** format */
    get format(): string;
    set format(value: string);
    /** padding */
    get padding(): number;
    set padding(value: number);
    /** staggerLines */
    get staggerLines(): number;
    set staggerLines(value: number);
    /** step */
    get step(): number;
    set step(value: number);
    canRotate(): boolean;
    getSaveLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
}

declare class HichartAxisPlotBand extends ReportItemCollectionItem {
    static readonly PROP_FROM = "from";
    static readonly PROP_TO = "to";
    static readonly PROP_COLOR = "color";
    static readonly PROP_LABEL = "label";
    static readonly PROP_Z_INDEX = "zIndex";
    static readonly PROPINFOS: IPropInfo[];
    private _color;
    private _from;
    private _to;
    private _zIndex;
    private _index;
    private _label;
    constructor(collection: HichartAxisPlotBandCollection, src: any);
    /** color */
    get color(): string;
    set color(value: string);
    /** from */
    get from(): number;
    set from(value: number);
    /** to */
    get to(): number;
    set to(value: number);
    /** zIndex */
    get zIndex(): number;
    set zIndex(value: number);
    get label(): HichartAxisPlotLabel;
    get itemType(): string;
    get index(): number;
    get page(): ReportPageBase;
    get collection(): HichartAxisPlotBandCollection;
    get displayPath(): string;
    get marqueeParent(): ReportItem;
    protected _getStyleProps(): string[];
    getEditProps(): IPropInfo[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): void;
    getWrapper(): object;
    getCollectionLabel(): string;
}

declare class HichartAxisPlotBandCollection extends ReportItemCollection<HichartAxisPlotBand> {
    private _owner;
    private _bands;
    constructor(owner: HichartAxis);
    get owner(): ReportItem;
    get axis(): HichartAxis;
    load(src: any): void;
    save(target: any): void;
    indexOf(item: HichartAxisPlotBand): number;
    add(band: HichartAxisPlotBand | ConfigObject, index?: number): HichartAxisPlotBand;
    remove(line: HichartAxisPlotBand): void;
    getWrapper(): any;
    get count(): number;
    get items(): ReportPageItem[];
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    isEditableCollection(): boolean;
    getCollectionLabel(): string;
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    get marqueeParent(): ReportItem;
    get(index: number): HichartAxisPlotBand;
    getSaveType(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    private $_resetBands;
}

declare class HichartAxisPlotLabel extends ChartObject<HichartItem> {
    static readonly PROP_ALIGN = "align";
    static readonly PROP_VERTICAL_ALIGN = "verticalAlign";
    static readonly PROP_TEXT = "text";
    static readonly PROP_TEXT_ALIGN = "textAlign";
    static readonly PROP_X = "x";
    static readonly PROP_Y = "y";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly styleProps;
    private _align;
    private _verticalAlign;
    private _text;
    private _textAlign;
    private _x;
    private _y;
    constructor(chart: HichartItem);
    /** align */
    get align(): Align;
    set align(value: Align);
    /** verticalAlign */
    get verticalAlign(): VerticalAlign;
    set verticalAlign(value: VerticalAlign);
    /** text */
    get text(): string;
    set text(value: string);
    /** textAlign */
    get textAlign(): Align;
    set textAlign(value: Align);
    /** x */
    get x(): number;
    set x(value: number);
    /** y */
    get y(): number;
    set y(value: number);
    getSaveLabel(): string;
    canRotate(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
}

declare class HichartAxisPlotLine extends ReportItemCollectionItem {
    static readonly PROP_VALUE = "value";
    static readonly PROP_COLOR = "color";
    static readonly PROP_WIDTH = "width";
    static readonly PROP_DASH_STYLE = "dashStyle";
    static readonly PROP_LABEL = "label";
    static readonly PROP_Z_INDEX = "zIndex";
    static readonly PROPINFOS: IPropInfo[];
    private _value;
    private _color;
    private _width;
    private _dashStyle;
    private _zIndex;
    private _index;
    private _label;
    constructor(collection: HichartAxisPlotLineCollection, src: any);
    /** value */
    get value(): number;
    set value(value: number);
    /** color */
    get color(): string;
    set color(value: string);
    /** width */
    get width(): number;
    set width(value: number);
    /** dashStyle */
    get dashStyle(): HichartDash;
    set dashStyle(value: HichartDash);
    /** zIndex */
    get zIndex(): number;
    set zIndex(value: number);
    get label(): HichartAxisPlotLabel;
    get itemType(): string;
    get index(): number;
    get page(): ReportPageBase;
    get collection(): HichartAxisPlotLineCollection;
    get displayPath(): string;
    get marqueeParent(): ReportItem;
    protected _getStyleProps(): string[];
    getEditProps(): IPropInfo[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): void;
    getWrapper(): object;
    getCollectionLabel(): string;
}

declare class HichartAxisPlotLineCollection extends ReportItemCollection<HichartAxisPlotLine> {
    private _owner;
    private _lines;
    constructor(owner: HichartAxis);
    get owner(): ReportItem;
    get axis(): HichartAxis;
    load(src: any): void;
    save(target: any): void;
    indexOf(item: HichartAxisPlotLine): number;
    add(line: HichartAxisPlotLine | ConfigObject, index?: number): HichartAxisPlotLine;
    remove(line: HichartAxisPlotLine): void;
    getWrapper(): any;
    get count(): number;
    get items(): ReportPageItem[];
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    isEditableCollection(): boolean;
    getCollectionLabel(): string;
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    get marqueeParent(): ReportItem;
    get(index: number): HichartAxisPlotLine;
    getSaveType(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    private $_resetLines;
}

/**
 * Axis title.
 */
declare class HichartAxisTitle extends ChartTextObject<HichartItem> {
    static readonly PROPINFOS: IPropInfo[];
    constructor(chart: HichartItem);
    getSaveLabel(): string;
    canRotate(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
}

declare enum HichartDash {
    DASH = "Dash",
    DASH_DOT = "DashDot",
    DOT = "Dot",
    LONG_DASH = "LongDash",
    LONG_DASH_DOT = "LongDashDot",
    LONG_DASH_DOT_DOT = "LongDashDotDot",
    SHORT_DASH = "ShortDash",
    SHORT_DASH_DOT = "ShortDashDot",
    SHORT_DASH_DOT_DOT = "ShortDashDotDot",
    SHORT_DOT = "ShortDot",
    SOLID = "Solid"
}

/**
 * Highcharts chart item.
 */
declare class HichartItem extends ReportGroupItem {
    static readonly PROP_HICHART_THEME = "theme";
    static readonly PROP_HICHART_INVERTED = "inverted";
    static readonly PROP_HICHART_STACKING = "stacking";
    static readonly PROP_HICHART_PLOT_BORDER_WIDTH = "plotBorderWidth";
    static readonly PROP_HICHART_PLOT_BORDER_COLOR = "plotBorderColor";
    static readonly PROP_HICHART_TITLE = "title";
    static readonly PROP_HICHART_SUBTITLE = "subtitle";
    static readonly PROP_HICHART_XAXIS = "xAxis";
    static readonly PROP_HICHART_YAXIS = "yAxis";
    static readonly PROP_HICHART_LEGEND = "legend";
    static readonly PROP_HICHART_SERIES = "series";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Highchart";
    private _theme;
    private _inverted;
    private _stacking;
    private _plotBorderWidth;
    private _plotBorderColor;
    private _colors;
    private _title;
    private _subtitle;
    private _xAxis;
    private _yAxis;
    private _legend;
    private _series;
    constructor(name: string);
    get outlineItems(): IOutlineSource[];
    /** theme */
    get theme(): string;
    set theme(value: string);
    /** inverted */
    get inverted(): boolean;
    set inverted(value: boolean);
    /** stacking */
    get stacking(): HichartStacking;
    set stacking(value: HichartStacking);
    /** plotBorderWidth */
    get plotBorderWidth(): number;
    set plotBorderWidth(value: number);
    /** plotBorderColor */
    get plotBorderColor(): string;
    set plotBorderColor(value: string);
    /** title */
    get title(): HichartTitle;
    /** subtitle */
    get subtitle(): HichartSubtitle;
    /** xAxis */
    get xAxis(): HichartXAxis;
    /** yAxis */
    get yAxis(): HichartYAxis;
    /** legend */
    get legend(): HichartLegend;
    /** series */
    get series(): HichartSeriesCollection;
    /**
     * 시리즈들을 Hichart 모델이 아니라 HichartItem의 자식으로 설정한다.
     * 시리즈에 대응하는 별도의 view는 존재하지 않지만,
     * Outline view에는 별도의 항목으로 표시돼서 chart와 별도로 속성을 편집할 수 있게 한다.
     */
    addSeries(series: any, index?: number): HichartSeries;
    removeSeries(series: HichartSeries): void;
    selectSeries(series: HichartSeries): void;
    getParentBand(): DataBand;
    getSaveType(): string;
    get outlineLabel(): string;
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canAddTo(group: ReportGroupItem): boolean;
    private $_seriesChanged;
}

/* Excluded from this release type: HichartItemElement */

declare class HichartLegend extends ChartObject<HichartItem> {
    static readonly PROP_HICHART_ALIGN = "align";
    static readonly PROP_HICHART_VERTICAL_ALIGN = "verticalAlign";
    static readonly PROP_HICHART_LAYOUT = "layout";
    static readonly PROP_HICHART_FLOATING = "floating";
    static readonly PROP_HICHART_X = "x";
    static readonly PROP_HICHART_Y = "y";
    static readonly PROP_HICHART_BORDER_WIDTH = "borderWidth";
    static readonly PROP_HICHART_SHADOW = "shadow";
    static readonly PROPINFOS: IPropInfo[];
    private _layout;
    private _align;
    private _verticalAlign;
    private _floating;
    private _x;
    private _y;
    private _borderWidth;
    private _shadow;
    constructor(chart?: HichartItem);
    /** align */
    get align(): Align;
    set align(value: Align);
    /** verticalAlign */
    get verticalAlign(): VerticalAlign;
    set verticalAlign(value: VerticalAlign);
    /** layout */
    get layout(): HichartLegendLayout;
    set layout(value: HichartLegendLayout);
    /**
     * flaoting
     */
    get floating(): boolean;
    set floating(value: boolean);
    /**
     * x
     */
    get x(): number;
    set x(value: number);
    /**
     * y
     */
    get y(): number;
    set y(value: number);
    /**
     * border width
     */
    get borderWidth(): number;
    set borderWidth(value: number);
    /**
     * flaoting
     */
    get shadow(): boolean;
    set shadow(value: boolean);
    getSaveLabel(): string;
    protected _isDefaultVisible(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
}

declare enum HichartLegendLayout {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    PROXIMATE = "proximate"
}

/**
 * Marquee for HicharItem.
 */
declare class HichartMarquee extends EditMarquee<HichartItemElement> {
    private static readonly STYLE_NAME;
    static getTarget(target: ReportPageItem, dom: HTMLElement): IEditMarqueeTarget;
    private _chartItem;
    private _seriesItems;
    private _xAxisItem;
    private _yAxisItem;
    get chart(): HichartItem;
    getSeriesMarqueeAt(p: number): HTMLDivElement;
    getSeriesIndex(div: HTMLElement): number;
    isSeries(dom: HTMLElement): HTMLElement;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doLayout(doc: Document, dom: HTMLElement, r: Rectangle): void;
    private $_prepareSeries;
}

declare abstract class HichartSeries extends ChartSeries<HichartItem> {
    static readonly PROP_SERIES_COLOR = "color";
    static readonly PROP_SERIES_COLORS = "colors";
    static readonly PROP_SERIES_COLOR_BY_POINT = "colorByPoint";
    static readonly PROP_SERIES_SHOW_IN_LEGEND = "showInLegend";
    static readonly PROPINFOS: IPropInfo[];
    private _color;
    private _colors;
    private _colorByPoint;
    private _showInLegend;
    constructor(chart: HichartItem);
    /**
     * color
     */
    get color(): string;
    set color(value: string);
    /**
     * colors
     */
    get colors(): string[];
    set colors(value: string[]);
    /**
     * colorByPoint
     */
    get colorByPoint(): boolean;
    set colorByPoint(value: boolean);
    /**
     * showInLegend
     */
    get showInLegend(): boolean;
    set showInLegend(value: boolean);
    canHideMarker(): boolean;
    wrap(target: any): any;
    get outlineParent(): IOutlineSource;
    protected _getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getCollectionLabel(): string;
    canRemoveFrom(): boolean;
    getValues(ctx: PrintContext, dp: IReportDataProvider): any[];
    protected _getFieldProps(): string[];
    protected _getValues(ctx: PrintContext, prop: string, dp: IReportDataProvider): number[];
}

declare class HichartSeriesCollection extends ChartSeriesCollection<HichartItem> {
    constructor(chart?: HichartItem);
    getIds(exept: string): string[];
    getCollectionLabel(): string;
    isCollectionProp(): boolean;
    protected _createSeries(loader: IReportLoader, src: any): HichartSeries;
    protected _seriesChanged(series: HichartSeries): void;
}

declare enum HichartStacking {
    NORMAL = "normal",
    PERCENT = "percent"
}

declare class HichartSubtitle extends HichartTitle {
    constructor(chart: HichartItem);
    getSaveLabel(): string;
    protected _isDefaultVisible(): boolean;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
}

/**
 * Chart title.
 */
declare class HichartTitle extends ChartTextObject<HichartItem> {
    static readonly PROP_TITLE_ALIGN = "align";
    static readonly PROP_TITLE_VERTICAL_ALIGN = "verticalAlign";
    static readonly PROP_TITLE_X = "x";
    static readonly PROP_TITLE_Y = "y";
    static readonly PROPINFOS: IPropInfo[];
    private _align;
    private _verticalAlign;
    private _x;
    private _y;
    constructor(chart: HichartItem);
    /**
     * align
     */
    get align(): Align;
    set align(value: Align);
    /**
     * vertical align
     */
    get verticalAlign(): VerticalAlign;
    set verticalAlign(value: VerticalAlign);
    /**
     * x
     */
    get x(): number;
    set x(value: number);
    /**
     * y
     */
    get y(): number;
    set y(value: number);
    getWrapper(): object;
    getSaveLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
}

declare class HichartXAxis extends HichartAxis {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    constructor(chart: HichartItem);
    getPropDomain(prop: IPropInfo): any[];
    getSaveLabel(): string;
    get displayPath(): string;
    get outlineLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
    getPlotLineConfig(): object;
    getPlotBandConfig(): object;
}

declare class HichartYAxis extends HichartAxis {
    static readonly PROP_MIN = "min";
    static readonly PROP_MAX = "max";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _min;
    private _max;
    constructor(chart: HichartItem);
    /** min */
    get min(): number;
    set min(value: number);
    /** max */
    get max(): number;
    set max(value: number);
    getSaveLabel(): string;
    get displayPath(): string;
    get outlineLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getWrapper(): object;
    getPlotLineConfig(): object;
    getPlotBandConfig(): object;
}

declare class HorizontalRulerView extends RulerView {
    private _indicator;
    constructor(doc: Document, container: ReportEditorBase);
    protected _doDispose(): void;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doRefreshView(container: ReportEditor): void;
    setFocusedElement(element: ReportElement): void;
    private $_layoutTicks;
}

/**
 * html 속성으로 지정한 문자열을 dom의 innerHtml로 설정한다.
 * 문자열에 포함된 '${value}'나 '@{value}'는 연결된 field의 값으로 대체되고,
 * 나머지 '${xxx}', '@{xxx}'는 'xxx' 필드의 값으로 대체된다.
 */
declare class HtmlItem extends ReportItem {
    static readonly ALLOWED_TAGS: string[];
    static readonly PROP_HTML = "html";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Html";
    private _html;
    private _tokens;
    constructor(name: string);
    get html(): string;
    set html(value: string);
    getHtml(ctx: PrintContext): string;
    getSaveType(): string;
    get outlineLabel(): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canRotate(): boolean;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    getRowContextValue(value: string, ctx: PrintContext): string | number;
    private $_getTokenValue;
    private $_parse;
    private $_parseValues;
}

/* Excluded from this release type: HtmlItemElement */

declare interface HWPExportOptions extends DocExportOptions {
}

/**
 * i18n 다국어 리소스 관리
 */
declare class I18nManager extends EventAware {
    static readonly LANGUAGE_ADDED = "onI18nManagerLanguageAdded";
    static readonly LANGUAGE_REMOVED = "onI18nManagerLanguageRemoved";
    static readonly FIELD_ADDED = "onI18nManagerFieldAdded";
    static readonly FIELD_REMOVED = "onI18nManagerFieldRemoved";
    static readonly DEFAULT_LANGUAGE_CHANGED = "onI18nManagerDefaultLanguageChanged";
    static readonly LANGUAGE_DOMAINS: LanguageCode[];
    private _languages;
    private _defaultLanguage;
    private _fields;
    private _languageMap;
    private _commands;
    constructor(commands: EditCommandStack);
    protected _doDispose(): void;
    get languages(): string[];
    get fields(): string[];
    get defaultLanguage(): string;
    set defaultLanguage(language: string);
    clear(): I18nManager;
    load(source: any, clear?: boolean): I18nManager;
    save(target: object): void;
    addLanguage(language: string): void;
    removeLanguage(language: string): void;
    addField(field: string): void;
    updateField(oldField: string, newField: string): void;
    removeField(field: string): void;
    getValue(language: string, field: string): string;
    updateValue(language: string, field: string, value: string): void;
    getLanguageMap(language: string): LanguageItem[];
    getNextFieldName(prefix?: string): string;
    private $_fireLanguageAdded;
    private $_fireLanguageRemoved;
    private $_fireFieldAdded;
    private $_fireFieldRemoved;
    private $_fireDefaultLanguageChanged;
}

/**
 * 다국어 관련 속성 구현
 */
declare class I18nObject<T extends ReportItem> extends ReportItemObject<T> {
    static readonly PROP_FIELD = "field";
    static readonly PROPINFOS: IPropInfo[];
    private _field;
    get field(): string;
    set field(value: string);
    get pathLabel(): string;
    get displayPath(): string;
    get level(): number;
    constructor(item: T);
    getSaveLabel(): string;
    load(loader: IReportLoader, source: ReportSource): void;
    save(target: ReportTarget): boolean;
    getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
}

declare const I_EMAIL_ITEM_DSCIRIMINATOR: "I_EMAIL_ITEM";

declare interface IAssetOwner {
    assetItemAdded(item: AssetItem): void;
    assetItemRemoved(item: AssetItem): void;
    assetItemUpdated(item: AssetItem): void;
}

declare interface IAssetTemplate {
    name: string;
    category: string;
    type?: string;
    description?: string;
    file?: string;
    image?: string;
    template?: any;
}

/**
 * Asset template manager
 */
declare interface IAssetTemplateManager {
    setTemplates(templates: UserAssetTemplateGroup[]): Promise<void>;
    getAll(): AssetTemplateGroup[];
}

declare interface IBandData extends IReportData {
    fieldCount: number;
    rowCount: number;
    getField(index: number): IBandDataField;
    getFields(): IBandDataField[];
    fieldByName(fieldName: string): IBandDataField;
    getFieldIndex(fieldName: string): number;
    containsField(fieldName: string): boolean;
    getFieldInfos(): IReportDataFieldInfo[];
    getRowValue(row: number, field: string | number): any;
    getFieldValues(field: string | number): any[];
    equalValues(row: number, fields: string[], values: any[]): boolean;
    equalRows(row1: number, row2: number, fields?: string[]): boolean;
    groupBy(dataView: BandDataSortView, fields: string[], rows: number[]): (number | IBandRowGroup | IBandRowGroupFooter)[];
    getValues(): any[];
    _internalValues(): any[];
}

declare interface IBandDataField {
    fieldName: string;
    label?: string;
    dataType?: IBandDataFieldDataType;
    source?: string;
    expression?: string;
    format?: string;
    description?: string;
    sample?: any;
    dateReader?: DatetimeReader;
    width?: number;
}

declare type IBandDataFieldDataType = "text" | "number" | "bool" | "array" | "datetime";

/**
 * @filename BandDataSortView.ts
 * @author sykim <KIMSANGYEOB>
 * @date 2023.07.13
 * @description <밴드 데이터에서 추가적인 설정을 적용 후 표현하기 위해 작성>
 */

declare interface IBandDataSortView {
    rowCount: number;
    sort: (field: string, direction: DataDirection) => void;
    getRowValue: (row: number, field: string) => any;
    getFieldValues: (field: string, rows?: number[]) => any[];
}

declare interface IBandDataTemplate extends IDataTemplate {
    type: 'band';
    template: IBandTemplate;
}

declare interface IBandExpand {
    /**
     * 가장 가까운 아이템의 row.
     */
    /**
     * band와의 간격.
     */
    offset: number;
    /**
     * 밀려난 아이템들.
     */
    items: ExcelRootItems[];
}

declare interface IBandRowGroup {
    parent?: IBandRowGroup;
    level: number;
    row: number;
    count: number;
    trows?: number;
    value?: any;
    children: IBandRowGroup[];
}

declare interface IBandRowGroupFooter {
    group: IBandRowGroup;
}

declare interface IBandStretch {
    offset: number;
    items: ExcelRootItems[];
}

declare interface IBandTemplate {
    fields: IBandDataField[];
    samples: {
        [key: string]: any;
    }[];
}

declare interface IBarColor {
    argb: string;
}

declare interface ICell {
    r: number;
    c: number;
    rspan?: number;
    cspan?: number;
}

declare interface IConditionalFormattingBaseRule {
    priority: number;
    style?: Partial<Style>;
}

declare interface IConditionalFormattingOptions {
    ref: string;
    rules: ConditionalFormattingRule[];
}

declare interface IContextMenuOwner {
    registerContextMenu(menuKey: string, contextMenus: MenuItem[]): void;
}

/**
 * 복붙한 아이템의 정보
 */
declare interface ICopiedAndPastedItem {
    /**
     * 복사한 아이템의 정보
     */
    target: ICopyTargetItem[];
    /**
     * 붙여넣은 아이템
     */
    pastedItem: ReportItem[];
    pastedTarget: ReportPageItem;
    /**
     * 붙여넣은 횟수
     */
    pastedCount: number;
}

/**
 * 복사한 아이템의 정보
 */
declare interface ICopyTargetItem {
    left: number;
    top: number;
    text?: string;
}

declare interface ICsvDataInfo {
    /**
     * 컬럼들의 이름이 표시되는 행 번호. 행은 1부터 시작.
     */
    headerRow?: number;
    /**
     * 데이터가 시작되는 행 번호. 지정하지 않으면 headerRow + 1.
     */
    startRow?: number;
    /**
     * 최대 행 수. 지정하지 않으면 마지막 데이터 행까지.
     */
    rowCount?: number;
}

declare interface ICsvDataReader {
    readDataRows(data: BandData, source: string, info: ICsvDataInfo): Promise<any[]>;
}

declare interface IDataBarRuleType extends IConditionalFormattingBaseRule {
    type: 'dataBar';
    gradient?: boolean;
    minLength?: number;
    maxLength?: number;
    showValue?: boolean;
    border?: boolean;
    negativeBarColorSameAsPositive?: boolean;
    negativeBarBorderColorSameAsPositive?: boolean;
    axisPosition?: BarAxisPosition;
    direction?: BarAxisDirection;
    cfvo?: Cvfo[];
    color?: IBarColor;
}

declare interface IDataTemplate {
    name: string;
    category?: string;
    type?: string;
    description?: string;
    file?: string;
    fields?: IServerDataField[];
    sample?: Record<string, any> | Record<string, any>[];
    dataLink?: IReportDataLink;
}

/**
 * Data template manager.
 */
declare interface IDataTemplateManager {
    setTemplates(templates: UserDataTemplateGroup[]): Promise<void>;
    getTemplate(name: string): DataTemplateGroup;
    getAll(): DataTemplateGroup[];
    removeTemplate(name: string): void;
}

declare interface IDesignerAction<Args = unknown> {
    label?: string;
    tag?: any;
    enabled?: (context: IDesignerContext, action: IDesignerAction) => boolean;
    run(context: IDesignerContext, action?: IDesignerAction, args?: Args): void;
}

declare interface IDesignerContext {
    doc: Document;
    options: IReportDesignerOptions;
    server: IReportServer;
    designMode: boolean;
    data: object;
    reportId?: string;
    readonly isNew: boolean;
    report?: ReportBase;
    editor?: ReportEditor | ExcelReportEditor | EmailEditor;
    emailEditor?: EmailEditor;
    excelEditor?: ExcelReportEditor;
    previewScrollContainer: PreviewScrollContainer;
    previewer?: PrintContainerBase;
    designer: ReportDesigner_2;
    previewed?: boolean;
    hasParams?: boolean;
    hasLocals?: boolean;
    printing: boolean;
    getReportTemplateManager(server: boolean): IReportTemplateManager;
    dataTemplateManager?: IDataTemplateManager;
    assetTemplateManager?: IAssetTemplateManager;
    loadReport(source: any, reportOptions?: ReportOptions): void;
    loadSampleData(sampleData: any): void;
    saveReport(): void;
    shareReport(): void;
    setActivePage(index: number): void;
    pageButtonClick(page: number, oldPage: number): void;
    isTextItemSelected(): boolean;
    refreshDesigner(): void;
    refreshInspector(): void;
    refreshActionSubBar(): void;
    preview(options?: IPreviewOptions): void;
    print(): void;
    findToolItem(dom: Element): ToolItem;
    findToolItemById(id: string): ToolItem;
    showPopupSelector(selector: PopupSelectorType | PopupSelector, selected?: PopupSelectorItem['id']): void;
    closePopupSelector(event: Event): boolean;
    processPopupSelectorEvent(dom: Element): boolean;
    processEnter(dom: Element): boolean;
    processEsc(dom: Element): boolean;
    showDialog(dlg: DialogView, callback?: (dlg: DialogView) => void, cancelCallback?: (dlg: DialogView) => void): void;
    showAbout(): void;
    showOpenDlg(): void;
    showNewDlg(): void;
    showMessage(message: any, level: MessageLevel): void;
    closeMessage(): void;
    alert(message: any): void;
    toggleOptions(): void;
    toggleDesignMode(previewMode?: PreviewMode): void;
    toggleOutlineView(): void;
    toggleActionSubBar(): void;
    togglePreviewSettingSubBar(): void;
    toggleActionBar(): void;
    toggleInspector(): void;
    togglePanels(): void;
    actionBarMode(): void;
    dialog: DialogView | null;
    showDialog(dlg: DialogView, callback?: (dlg: DialogView) => void): void;
    confirm(title: string, message: string, callback: () => void): void;
    closeDialog(): void;
    search(): void;
    exportPdf(options: PdfExportOptions): void;
    exportDocx(options: DocxExportOptions): void;
    exportHwp(options: HWPExportOptions): void;
    exportImage(options: ImageExportOptions): void;
    exportHtml(): Promise<void>;
    exportExcel(options?: ExcelExportOptions): void;
    exportPdfBlob(options: PdfExportOptions): Promise<Blob>;
    exportDocxBlob(): Promise<Blob>;
    exportHwpBlob(): Promise<Blob>;
    exportImageBlob(options: ImageExportOptions): Promise<Blob[]>;
    exportExcelBlob(): Promise<Blob>;
    feedback(): void;
    getDragSource(report: ReportBase, type: string, data: DataTransferItem): any;
    getActiveEditor(): ReportEditor | ExcelReportEditor | undefined | null;
    showUploadArchiveDlg(): void;
}

declare interface IDialogButton {
    id?: string;
    name: string;
    commands?: string[];
    showTooltip?: boolean;
    disabled?: boolean;
    action?: IDesignerAction;
    styles?: {
        [key: string]: string;
    };
    className?: string;
    onClick: (ctx: IDesignerContext, dialog: DialogView) => void;
}

declare interface IDropResult {
    type: DropResultType;
    prop?: string;
    value?: any;
    hintWidth?: number;
    hintHeight?: number;
}

/**
 * Edit command stack owner spec.
 */
declare interface IEditCommandStackOwner {
    editCommandStackChanged(stack: EditCommandStack, cmd: EditCommand, undoable: boolean, redoable: boolean): void;
    editCommandStackDirtyChanged(stack: EditCommandStack): void;
    editCommandError(command: EditCommand): void;
}

declare interface IEditMarqueeTarget {
    target: ReportPageItem;
    tag?: string;
}

declare interface IEmailItem extends ReportItem {
    discriminator: typeof I_EMAIL_ITEM_DSCIRIMINATOR;
}

declare interface IEventAware {
    addListener(listener: object): IEventAware;
    removeListener(listener: object): IEventAware;
}

declare interface IExcelBandContext {
    model: ExcelDataBand;
    name: string;
    dataName: string;
    masterValues: any;
    parentBand: IExcelBandContext;
    header: IExcelBandExcelMatrix;
    dataRow: IExcelBandExcelMatrix;
    footer: IExcelBandExcelMatrix;
    detailIndex?: number;
    detailBands: IExcelBandContext[];
    designTimeRowIndex: number;
    designTimeColIndex: number;
    designTimeRowCount: number;
    designTimeColCount: number;
    runRows: number;
    bandGroups: IExcelBandGroupContext[];
}

declare type IExcelBandExcelMatrix = IExcelCell[];

declare interface IExcelBandGroupContext {
    dataRow: IExcelBandExcelMatrix;
    footer: IExcelBandExcelMatrix;
    row: number;
    level: number;
    value: any;
    parent: IExcelBandGroupContext;
    children: IExcelBandGroupContext[];
}

declare interface IExcelBoxContext {
    model: string;
}

declare interface IExcelCell {
    info?: IExcelRenderInfo;
    r: number;
    c: number;
    rModel?: number;
    row?: number;
    rowSpan?: number;
    colSpan?: number;
    value?: any;
    originValue?: string;
    format?: string;
    numberFormat?: string;
    formula?: string;
    preparedFormula?: string;
    formulaConversionError?: FormulaConverterError;
    formulaDependencyList?: IExcelCell[];
    formulaExecOrder?: number;
    annotation?: string;
    link?: string;
    image?: IExcellImage;
    spark?: any;
    style?: Styles;
    rotation?: number | 'vertical';
    dr?: number;
    dataRowIndex?: number;
    bar?: IExcelDataBar;
    groupSection?: ExcelDataBandRowGroupSection;
    cbandGroup?: IExcelBandGroupContext;
    cband?: IExcelBandContext;
    bandSectionType?: BandSectionType;
}

declare interface IExcelDataBar {
    color: string;
    width: string;
    value: any;
}

declare interface IExcelDataInfo {
    /**
     * 컬럼들의 이름이 표시되는 행 번호. 행은 1부터 시작.
     */
    headerRow?: number;
    /**
     * 데이터가 시작되는 행 번호. 지정하지 않으면 headerRow + 1.
     */
    startRow?: number;
    /**
     * 최대 행 수. 지정하지 않으면 마지막 데이터 행까지.
     */
    rowCount?: number;
    /**
     * 데이터가 시작되는 col. 지정하지 않으면 "A".
     */
    startCol?: string;
    /**
     * 마지막 행 여부 검사 기준 컬럼. 지정하지 않으면 Start Col. 이 행 이전까지 데이터 행.
     */
    endRowCol?: string;
    /**
     * 마지막 행 검사 기준 값. 지정하지 않으면 빈 셀.
     */
    endCheckValue?: any;
    /**
     * headerRow가 존재하는 경우 header cell의 이름을 field와 mapping하는 데 사용.
     */
    useHeaderNames?: boolean;
}

declare interface IExcelDataReader {
    readDataRows(buffer: ArrayBuffer, fields: IBandDataField[], info: IExcelDataInfo): Promise<any[]>;
}

declare interface IExcelGroupItem {
    getItemPasteInfo(item: ExcelItems): {
        error?: string;
        deletes?: ExcelItems[];
    };
}

declare interface IExcellImage {
    image: string;
    width: number;
    height?: number;
}

declare interface IExcelRenderInfo {
    model: ExcelItems;
    row: number;
    col: number;
    rowCount?: number;
    /**
     * 해당 아이템이 출력해야하는 행 수
     */
    runRows: number;
    colCount?: number;
    band?: IExcelBandContext;
    box?: IExcelBoxContext;
    sign?: any;
    stamp?: any;
    pr?: number;
    /**
     * 현재 아이템이 출력되어야 할 행 인덱스
     */
    r?: number;
    cells: IExcelCell | IExcelCell[];
    hCells?: IExcelCell[];
}

declare interface IFilter {
    select(data: IBandData, row: number): boolean;
}

declare interface IGroupPrintInfo {
    row: number;
    rowType: string;
    group: IBandRowGroup;
}

declare interface IImageContainer {
    addImage(url: string): void;
    imageLoaded(url: string): void;
}

declare interface IImageRect {
    width: number;
    height: number;
}

declare interface IItemPrintInfo {
    reportName: string;
    name: string;
    data?: string;
    row?: number;
    field?: string;
    value?: number;
}

/**
 * Image data url.
 */
declare class ImageAsset extends AssetItem {
    protected _doSave(target: any): void;
}

declare interface ImageExportOptions {
    type?: 'png' | 'jpeg' | 'jpg' | 'gif' | 'tif' | 'tiff';
    fileName?: string;
    zipName?: string;
    tiff?: ITiffOptions;
}

declare enum ImageFit {
    CONTAIN = "contain",
    COVER = "cover"
}

/**
 * 이미지를 표시한다.
 * value 속성으로 지정된 data 위치가 타당하면 그 값을,
 * 아니면 url 속성으로 지정한 위치의 이미지를 표시한다.
 */
declare class ImageItem extends ReportItem {
    static readonly PROP_URL = "url";
    static readonly PROP_IMAGE = "image";
    static readonly PROP_IMAGE_FIT = "imageFit";
    static readonly PROP_IMAGE_POSITION = "imagePosition";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Image";
    private _url;
    private _image;
    private _imageFit;
    private _imagePosition;
    /**
     * image url.
     */
    get url(): string;
    set url(value: string);
    /**
     * asset image data path.
     */
    get image(): string;
    set image(value: string);
    get imageFit(): ImageFit;
    set imageFit(value: ImageFit);
    get imagePosition(): ImagePosition;
    set imagePosition(value: ImagePosition);
    getImageUrl(ctx: PrintContextBase): string;
    getSaveType(): string;
    get outlineLabel(): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canRotate(): boolean;
    canLink(): boolean;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
}

declare enum ImagePosition {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    CENTER = "center"
}

declare abstract class InheritableSection extends SpaceableSection {
    static readonly PROP_INHERIT = "inherit";
    static readonly PROPINFOS: IPropInfo[];
    private _inherit;
    protected _inherited: boolean;
    /**
     * 이전 페이지 표시대로 출력한다.
     */
    get inherit(): SectionInherit;
    set inherit(value: SectionInherit);
    get inherited(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _getEditProps(): IPropInfo[];
}

declare abstract class InheritableSectionElement<T extends InheritableSection> extends SectionElement<T> {
    static readonly CLONE_CLASS = "rr-section-clone";
    private _baseModel;
    setBase(base: T): void;
    protected _getModel(): T;
    protected _setDesignContent(empty: boolean, designView: HTMLDivElement): void;
}

declare interface IOutlineSource {
    hash: number;
    outlineParent: IOutlineSource;
    outlineExpandable: boolean;
    outlineItems?: IOutlineSource[];
    outlineLabel: string;
    outlineOrder: number;
    outlineVisible(child: IOutlineSource): boolean;
    getSaveType(): string;
    canRemoveFrom(): boolean;
    canParentOf?(itemType: string): boolean;
}

declare interface IPoint {
    x: number;
    y: number;
}

declare interface IPreviewOptions {
    debug?: boolean;
    async?: boolean;
    pageMark?: boolean;
    optimize?: boolean;
    pageDelay?: number;
    noScroll?: boolean;
    noIndicator?: boolean;
    singlePage?: boolean;
    singlePageOptions?: ISinglePageOptions;
    align?: Align;
    paging?: boolean;
    language?: string;
    editable?: boolean;
    callback?: PrintPageCallback;
    endCallback?: PrintEndCallback;
    signCallback?: SignCallback;
    stampCallback?: StampCallback;
}

declare interface IPrintOptions {
    report: ReportBase | (ReportBase | IPrintReport)[];
    data: IReportDataProvider;
    preview?: boolean;
    id?: string;
    previewOptions?: IPreviewOptions;
}

declare interface IPrintReport {
    report: ReportBase;
    data: IReportDataProvider;
}

declare interface IPropertyContainer {
    addCollectionItem(collection: IPropertySource): void;
    removeItem(item: IPropertySource): void;
}

declare interface IPropertySource {
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    isDominantProp(prop: IPropInfo): boolean;
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyleProperty(prop: string): any;
    setStyleProperty(prop: string, value: any): void;
    setItemsStyleProperty(sources: IPropertySource[], prop: string, value: any): void;
    getSubStyleProperty(prop: string, style: string): any;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    getCollapsedPropCategories?: () => string[];
    isCollectionProp(): boolean;
    isEditableCollection(): boolean;
    isCollectionItem(): boolean;
    getCollectionLabel(): string;
    getPropertySources(): IPropertySource[];
    getPopupPropLabel(prop: string): string;
}

declare interface IPropInfo {
    name: string;
    category: string;
    type: any;
    typeProps?: any | ModelPropertyTypeProps;
    parent?: string;
    indented?: boolean;
    calculated?: boolean;
    collection?: boolean;
    visible?: (source: IPropertySource) => boolean;
    multiple?: boolean;
    /**
     * 속성 기본값
     * - 속성값이 `default` 값과 일치하면 양식에 저장하지 않는다.
     *   - 이메일 아이템의 경우에는 로드할 때, 양식에 해당 속성 필드가 정의되어 있지 않으면 `default` 값으로 로드한다. (`EmailLoaderImpl.loadOwn()` 참고)
     * - 명시적으로 `undefined`값을 할당해야 `undefined`를 기본값으로 처리한다. 반면 `default` 필드를 정의하지 않는 경우는 기본값 로직이 동작하지 않는다.
     * - inspector에서 reset 시에도 활용된다.
     */
    default?: any;
    /**
     * 속성값 변경 가능 여부
     * - `true`면 값을 변경할 수 없고, 양식에서 로드되지 않는다.
     */
    readonly?: boolean;
    domain?: any[] | any;
    label?: string;
    tag?: string;
    params?: any;
    signature?: string;
    validate?: (source: IPropertySource, inputValue: any) => void;
    refresh?: boolean;
    description?: string;
    expandable?: boolean;
}

declare interface IRect extends IPoint {
    width: number;
    height: number;
}

declare interface IReportData extends IPropertySource {
    index: number;
    name: string;
    isBand: boolean;
    isLocalLink: boolean;
    getFieldNames(): string[];
    getSaveType(): string;
    getValue(path: string): any;
    hasParams(): boolean;
}

declare interface IReportDataFieldInfo {
    label?: string;
    fieldName: string;
    dataType: IBandDataFieldDataType;
}

declare interface IReportDataLink {
    source: 'local' | 'remote';
    /** remote */
    url?: string;
    method?: 'GET' | 'POST' | 'PUT';
    pathParams?: RegExpExecArray[];
    params?: {
        [name: string]: string;
    };
    headers?: {
        [name: string]: string;
    };
    format?: ReportDataLinkFormat;
    /** local */
    fileType?: typeof LocalFileTypes[number];
    exts?: string;
    /** json */
    dataPath?: string;
    /** csv & xlsx */
    headerRow?: number;
    startRow?: number;
    rowCount?: number;
    /** csv */
    delimiter?: string;
    quoted?: boolean;
    /** xlsx */
    startCol?: string;
    endRowCol?: string;
    endCheckValue?: string;
    useHeaderNames?: boolean;
}

declare interface IReportDataProvider {
    designTime?: boolean;
    dirty?: boolean;
    preparePrint(ctx: PrintContextBase): void;
    getAll(): IReportData[];
    get(name: string): IReportData;
    getContextValue(path: string): any;
    getValue(path: string, row: number): any;
    getValueAt(data: string, path: string, row: number): any;
    getFieldValues(data: string, field: string, rows?: number[]): any[];
    addData?(data: IReportData, silent: boolean): boolean;
    removeData?(data: string | IReportData): IReportData;
    dataChanged?(data: IReportData): void;
    dataNameChanged?(data: IReportData, oldName: string): void;
    fieldNameChanged?(data: IReportData, newName: string, oldName: string): void;
    setProperty?(data: IReportData, prop: string, value: any): void;
}

declare interface IReportDesigner {
    startBandDesigner(data: BandArrayData, callback: (item: DataBand) => void): void;
}

declare interface IReportDesignerOptions {
    showAssetPanel?: boolean;
    showDataPanel?: boolean;
    showScriptPanel?: boolean;
    showArchivePanel?: boolean;
    showTransferPanel?: boolean;
    showSchedulePanel?: boolean;
    initialOpenPanel?: PanelMode;
    /**
     * asset panel에 'stock' 그룹을 표시할 것인가?
     */
    showStockAsset?: boolean;
    /**
     * data panel에 'stock' 그룹을 표시할 것인가?
     */
    showStockData?: boolean;
    /**
     * asset panel에 'server' 그룹을 표시할 것인가?
     */
    showServerAsset?: boolean;
    /**
     * data panel에 'server' 그룹을 표시할 것인가?
     */
    showServerData?: boolean;
    /**
     * header 영역 표시 여부
     */
    headerVisible?: boolean;
    /** action bar에서 클릭 대신 아이템 아이콘을 drag해서 생성 */
    dragInsert?: boolean;
    /** callbacks */
    getReportListCallback?: () => Promise<ServerReportSources>;
    getRecentReportListCallback?: () => Promise<ServerReportSources>;
    getReportCallback?: (reportId: string) => Promise<IServerSource>;
    saveReportCallback?: (report: Record<string, any>, reportId: string, reportContext: ReportContext) => Promise<SaveCallbackResponse | null>;
    getOptionsCallback?: () => Promise<Partial<IReportDesignerOptions>>;
    saveOptionsCallback?: (options: IReportDesignerOptions) => Promise<string | null>;
}

declare interface IReportEditor {
    getFocusRect(): IRect;
    showEditFocus(): void;
    hideEditFocus(): void;
    report: ReportBase;
}

declare interface IReportEditView {
    get editLayer(): ReportEditLayer;
    get focusedItem(): ReportPageItem;
    get selection(): ISelectionSource[];
    get editing(): boolean;
    get pageView(): PageView | ExcelPageView;
    getElementOf(model: ReportPageItem): ReportElement;
    getFocusedElement(): VisualElement;
    getItemBoundingRect(element: VisualElement, rotated?: boolean): Rectangle;
    getTableElementOfRow(row: TableRow): TableView;
    getTableElementOfColumn(column: TableColumn): TableContainerElement;
    getTableElementsOfColumn(column: TableColumnBase): TableView[];
    getTableBandElementOfColumn(column: TableBandColumn): TableBandElement;
}

/**
 * Report loader spec.
 */
declare interface IReportLoader {
    getCreator(type: string): (name: string) => ReportItem;
    createItem(type: any): ReportItem;
    createRealChartAxis?(collection: RCAxisCollection, src: ReportSource): RCAxis;
    createRealChartSeries?(collection: RCSeriesCollection, src: ReportSource): RCSeries;
    createHichartSeries?(chart: HichartItem, src: any): HichartSeries;
}

declare interface IReportServer {
    userId: string;
    url?: string;
    imageUrl?: string;
    isRemote?: boolean;
    /**
     * 사용자
     */
    getUser?(): any;
    /**
     * 사용자 리포트
     */
    getReports?(): Promise<ServerReportSources>;
    getReport?(id: string): Promise<IServerSource>;
    saveReport?(id: string, report: Record<string, any>): Promise<IServerResponse | null>;
    getRecents(maxCount: number): Promise<ServerReportSource[]>;
    shareReport?(report: IServerReportTemplate): Promise<number>;
    /**
     * 리포트 템플릿
     */
    getReportTemplateCategories?(parent?: string, reportType?: string): Promise<{
        category: string;
        description: string;
    }[]>;
    getReportTemplates?(reportType: string, category: string): Promise<{
        category: string;
        templates: IServerReportTemplateInfo[];
    }>;
    getReportTemplate?(id: string): Promise<IServerReportTemplate>;
    /**
     * 데이터 템플릿 (Data Panel 트리 구성용)
     */
    getDataTemplateCategories?(parent?: string): Promise<{
        category: string;
        description: string;
    }[]>;
    getDataTemplates?(category: string): Promise<{
        category: string;
        templates: IServerDataTemplateInfo[];
    }>;
    getDataTemplate?(id: string): Promise<IServerDataTemplate>;
    shareDataTemplate?(template: IServerCreateDataTemplate): Promise<number>;
    /**
     * 에셋
     */
    getAssetCategories?(parent?: string): Promise<{
        category: string;
        description: string;
    }[]>;
    getAssets?(category: string): Promise<{
        category: string;
        assets: IServerAssetInfo[];
    }>;
    getAsset?(id: string): Promise<IServerAsset>;
    shareAsset?(template: IServerAsset): Promise<string>;
    /**
     * 아카이브
     */
    uploadArchive?(reportId: string, tag: string, type: ReportArchiveType, blob: Blob, params?: PreviewParam): Promise<IServerArchiveInfo>;
    /**
     * 옵션
     */
    getOptions?(): Promise<Partial<IReportDesignerOptions>>;
    saveOptions?: (options: IReportDesignerOptions) => Promise<string>;
    /**
     * Sign & Stamp
     */
    saveSign?(reportId: string, item: IItemPrintInfo, sign: ISignResult): void;
    saveStamp?(reportId: string, item: IItemPrintInfo, stamp: IStampResult): void;
}

declare interface IReportTemplateInfo {
    id?: string;
    name: string;
    type: ReportType;
    thumbnail?: string;
    report?: Record<string, any>;
    data?: {
        [key: string]: ReportTemplateData;
    };
}

/**
 * Report template manager.
 */
declare interface IReportTemplateManager {
    getCategories(type: ReportType): Promise<string[]>;
    getTemplates(type: ReportType, category: string): Promise<IReportTemplateInfo[]>;
}

declare interface ISelectionSource {
    selectedItem: ReportPageItem;
    canSelectedWith(other: ISelectionSource): boolean;
    canMakeSnippet(): boolean;
}

declare interface IServerArchiveInfo {
    id: number;
    name: string;
    type: ReportArchiveType;
    tag: string;
    ext: string;
    createdAt: Date;
}

declare interface IServerAsset extends IServerAssetInfo {
}

declare interface IServerAssetInfo {
    id?: string;
    category?: string;
    name: string;
    type?: 'image' | 'svg' | 'snippet';
    content?: string;
    description?: string;
}

declare interface IServerCreateDataTemplate {
    name: string;
    type: string;
    content: string;
    category: string;
    description?: string;
}

declare interface IServerDataField {
    fieldName: string;
    dataType: 'text' | 'number' | 'bool' | 'datetime';
    source?: string;
    description?: string;
    sample?: any;
}

declare interface IServerDataTemplate extends IServerDataTemplateInfo {
    fields?: IServerDataField[];
    sample?: any;
    dataLink?: IReportDataLink;
}

declare interface IServerDataTemplateInfo {
    id?: string;
    name: string;
    type: string;
    category?: string;
    description?: string;
}

declare interface IServerReportTemplate extends IServerReportTemplateInfo {
    content: string;
}

declare interface IServerReportTemplateInfo {
    id: string;
    category: string;
    name: string;
    type: ReportType;
    description?: string;
    thumbnail?: string;
}

declare interface IServerResponse {
    report?: any;
    message?: string;
    error?: string;
}

declare interface IServerSource {
    id?: string;
    description?: string;
    source?: Record<string, any>;
}

declare interface ISheetOptions {
    colCount?: number;
    rowCount?: number;
}

declare interface ISheetOwner {
    sheetColCountChanged(count: number, oldCount: number): void;
    sheetRowCountChanged(count: number, oldCount: number): void;
}

declare interface ISheetSelectionOwner {
    colCount: number;
    rowCount: number;
    selectionAdded(sel: SheetSelection): void;
    selectionRemoved(sel: SheetSelection): void;
    selectionCleared(): void;
    selectionChanged(sel: SheetSelection): void;
}

declare interface ISides {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

declare interface ISignResult {
    width: number;
    height: number;
    lines: SignLine[];
}

declare interface ISimpleData extends IReportData {
    getValues(): any;
    getSaveValues(): any;
}

declare interface ISimpleDataField {
    fieldName: string;
    dataType?: 'string' | 'number' | 'boolean' | 'array' | 'object';
    source?: string;
    expression?: string;
    format?: string;
    description?: string;
    sample?: any;
    dateReader?: DatetimeReader;
    width?: number;
    children?: any;
}

declare interface ISimpleDataTemplate extends IDataTemplate {
    type: 'simple';
    template: ISimpleTemplate;
}

declare interface ISimpleGroupPrintInfo extends IGroupPrintInfo {
    view: SimpleBandGroupSectionElement<SimpleBandRowGroupHeader | SimpleBandRowGroupFooter>;
}

declare interface ISimpleTemplate {
    [key: string]: any;
}

declare interface ISinglePageOptions {
    border: boolean;
}

declare interface ISinglePageOptions {
    border: boolean;
}

declare interface ISize {
    width: number;
    height: number;
}

declare const ISO_639_LANGUAGES: {
    readonly aa: "Afar";
    readonly ab: "Abkhazian";
    readonly ae: "Avestan";
    readonly af: "Afrikaans";
    readonly ak: "Akan";
    readonly am: "Amharic";
    readonly an: "Aragonese";
    readonly ar: "Arabic";
    readonly 'ar-ae': "Arabic (U.A.E.)";
    readonly 'ar-bh': "Arabic (Bahrain)";
    readonly 'ar-dz': "Arabic (Algeria)";
    readonly 'ar-eg': "Arabic (Egypt)";
    readonly 'ar-iq': "Arabic (Iraq)";
    readonly 'ar-jo': "Arabic (Jordan)";
    readonly 'ar-kw': "Arabic (Kuwait)";
    readonly 'ar-lb': "Arabic (Lebanon)";
    readonly 'ar-ly': "Arabic (Libya)";
    readonly 'ar-ma': "Arabic (Morocco)";
    readonly 'ar-om': "Arabic (Oman)";
    readonly 'ar-qa': "Arabic (Qatar)";
    readonly 'ar-sa': "Arabic (Saudi Arabia)";
    readonly 'ar-sy': "Arabic (Syria)";
    readonly 'ar-tn': "Arabic (Tunisia)";
    readonly 'ar-ye': "Arabic (Yemen)";
    readonly as: "Assamese";
    readonly av: "Avaric";
    readonly ay: "Aymara";
    readonly az: "Azeri";
    readonly ba: "Bashkir";
    readonly be: "Belarusian";
    readonly bg: "Bulgarian";
    readonly bh: "Bihari";
    readonly bi: "Bislama";
    readonly bm: "Bambara";
    readonly bn: "Bengali";
    readonly bo: "Tibetan";
    readonly br: "Breton";
    readonly bs: "Bosnian";
    readonly ca: "Catalan";
    readonly ce: "Chechen";
    readonly ch: "Chamorro";
    readonly co: "Corsican";
    readonly cr: "Cree";
    readonly cs: "Czech";
    readonly cu: "Church Slavonic";
    readonly cv: "Chuvash";
    readonly cy: "Welsh";
    readonly da: "Danish";
    readonly de: "German";
    readonly 'de-at': "German (Austria)";
    readonly 'de-ch': "German (Switzerland)";
    readonly 'de-de': "German (Germany)";
    readonly 'de-li': "German (Liechtenstein)";
    readonly 'de-lu': "German (Luxembourg)";
    readonly div: "Divehi";
    readonly dv: "Divehi";
    readonly dz: "Bhutani";
    readonly ee: "Ewe";
    readonly el: "Greek";
    readonly en: "English";
    readonly 'en-au': "English (Australia)";
    readonly 'en-bz': "English (Belize)";
    readonly 'en-ca': "English (Canada)";
    readonly 'en-cb': "English (Caribbean)";
    readonly 'en-gb': "English (United Kingdom)";
    readonly 'en-ie': "English (Ireland)";
    readonly 'en-jm': "English (Jamaica)";
    readonly 'en-nz': "English (New Zealand)";
    readonly 'en-ph': "English (Philippines)";
    readonly 'en-tt': "English (Trinidad and Tobago)";
    readonly 'en-us': "English (United States)";
    readonly 'en-za': "English (South Africa)";
    readonly 'en-zw': "English (Zimbabwe)";
    readonly eo: "Esperanto";
    readonly es: "Spanish";
    readonly 'es-ar': "Spanish (Argentina)";
    readonly 'es-bo': "Spanish (Bolivia)";
    readonly 'es-cl': "Spanish (Chile)";
    readonly 'es-co': "Spanish (Colombia)";
    readonly 'es-cr': "Spanish (Costa Rica)";
    readonly 'es-do': "Spanish (Dominican Republic)";
    readonly 'es-ec': "Spanish (Ecuador)";
    readonly 'es-es': "Spanish (Spain)";
    readonly 'es-gt': "Spanish (Guatemala)";
    readonly 'es-hn': "Spanish (Honduras)";
    readonly 'es-mx': "Spanish (Mexico)";
    readonly 'es-ni': "Spanish (Nicaragua)";
    readonly 'es-pa': "Spanish (Panama)";
    readonly 'es-pe': "Spanish (Peru)";
    readonly 'es-pr': "Spanish (Puerto Rico)";
    readonly 'es-py': "Spanish (Paraguay)";
    readonly 'es-sv': "Spanish (El Salvador)";
    readonly 'es-us': "Spanish (United States)";
    readonly 'es-uy': "Spanish (Uruguay)";
    readonly 'es-ve': "Spanish (Venezuela)";
    readonly et: "Estonian";
    readonly eu: "Basque";
    readonly fa: "Farsi";
    readonly ff: "Fulah";
    readonly fi: "Finnish";
    readonly fj: "Fiji";
    readonly fo: "Faroese";
    readonly fr: "French";
    readonly 'fr-be': "French (Belgium)";
    readonly 'fr-ca': "French (Canada)";
    readonly 'fr-ch': "French (Switzerland)";
    readonly 'fr-fr': "French (France)";
    readonly 'fr-lu': "French (Luxembourg)";
    readonly 'fr-mc': "French (Monaco)";
    readonly fy: "Frisian";
    readonly ga: "Irish";
    readonly gd: "Gaelic";
    readonly gl: "Galician";
    readonly gn: "Guarani";
    readonly gu: "Gujarati";
    readonly gv: "Manx";
    readonly ha: "Hausa";
    readonly he: "Hebrew";
    readonly hi: "Hindi";
    readonly ho: "Hiri Motu";
    readonly hr: "Croatian";
    readonly 'hr-ba': "Croatian (Bosnia and Herzegovina)";
    readonly 'hr-hr': "Croatian (Croatia)";
    readonly ht: "Haitian";
    readonly hu: "Hungarian";
    readonly hy: "Armenian";
    readonly hz: "Herero";
    readonly ia: "Interlingua";
    readonly id: "Indonesian";
    readonly ie: "Interlingue";
    readonly ig: "Igbo";
    readonly ii: "Sichuan Yi";
    readonly ik: "Inupiak";
    readonly in: "Indonesian";
    readonly io: "Ido";
    readonly is: "Icelandic";
    readonly it: "Italian";
    readonly 'it-ch': "Italian (Switzerland)";
    readonly 'it-it': "Italian (Italy)";
    readonly iu: "Inuktitut";
    readonly iw: "Hebrew";
    readonly ja: "Japanese";
    readonly ji: "Yiddish";
    readonly jv: "Javanese";
    readonly jw: "Javanese";
    readonly ka: "Georgian";
    readonly kg: "Kongo";
    readonly ki: "Kikuyu";
    readonly kj: "Kuanyama";
    readonly kk: "Kazakh";
    readonly kl: "Greenlandic";
    readonly km: "Cambodian";
    readonly kn: "Kannada";
    readonly ko: "Korean";
    readonly kok: "Konkani";
    readonly kr: "Kanuri";
    readonly ks: "Kashmiri";
    readonly ku: "Kurdish";
    readonly kv: "Komi";
    readonly kw: "Cornish";
    readonly ky: "Kirghiz";
    readonly kz: "Kyrgyz";
    readonly la: "Latin";
    readonly lb: "Luxembourgish";
    readonly lg: "Ganda";
    readonly li: "Limburgan";
    readonly ln: "Lingala";
    readonly lo: "Laothian";
    readonly ls: "Slovenian";
    readonly lt: "Lithuanian";
    readonly lu: "Luba-Katanga";
    readonly lv: "Latvian";
    readonly mg: "Malagasy";
    readonly mh: "Marshallese";
    readonly mi: "Maori";
    readonly mk: "FYRO Macedonian";
    readonly ml: "Malayalam";
    readonly mn: "Mongolian";
    readonly mo: "Moldavian";
    readonly mr: "Marathi";
    readonly ms: "Malay";
    readonly 'ms-bn': "Malay (Brunei Darussalam)";
    readonly 'ms-my': "Malay (Malaysia)";
    readonly mt: "Maltese";
    readonly my: "Burmese";
    readonly na: "Nauru";
    readonly nb: "Norwegian (Bokmal)";
    readonly nd: "North Ndebele";
    readonly ne: "Nepali (India)";
    readonly ng: "Ndonga";
    readonly nl: "Dutch";
    readonly 'nl-be': "Dutch (Belgium)";
    readonly 'nl-nl': "Dutch (Netherlands)";
    readonly nn: "Norwegian (Nynorsk)";
    readonly no: "Norwegian";
    readonly nr: "South Ndebele";
    readonly ns: "Northern Sotho";
    readonly nv: "Navajo";
    readonly ny: "Chichewa";
    readonly oc: "Occitan";
    readonly oj: "Ojibwa";
    readonly om: "(Afan)/Oromoor/Oriya";
    readonly or: "Oriya";
    readonly os: "Ossetian";
    readonly pa: "Punjabi";
    readonly pi: "Pali";
    readonly pl: "Polish";
    readonly ps: "Pashto/Pushto";
    readonly pt: "Portuguese";
    readonly 'pt-br': "Portuguese (Brazil)";
    readonly 'pt-pt': "Portuguese (Portugal)";
    readonly qu: "Quechua";
    readonly 'qu-bo': "Quechua (Bolivia)";
    readonly 'qu-ec': "Quechua (Ecuador)";
    readonly 'qu-pe': "Quechua (Peru)";
    readonly rm: "Rhaeto-Romanic";
    readonly rn: "Kirundi";
    readonly ro: "Romanian";
    readonly ru: "Russian";
    readonly rw: "Kinyarwanda";
    readonly sa: "Sanskrit";
    readonly sb: "Sorbian";
    readonly sc: "Sardinian";
    readonly sd: "Sindhi";
    readonly se: "Sami";
    readonly 'se-fi': "Sami (Finland)";
    readonly 'se-no': "Sami (Norway)";
    readonly 'se-se': "Sami (Sweden)";
    readonly sg: "Sangro";
    readonly sh: "Serbo-Croatian";
    readonly si: "Singhalese";
    readonly sk: "Slovak";
    readonly sl: "Slovenian";
    readonly sm: "Samoan";
    readonly sn: "Shona";
    readonly so: "Somali";
    readonly sq: "Albanian";
    readonly sr: "Serbian";
    readonly 'sr-ba': "Serbian (Bosnia and Herzegovina)";
    readonly 'sr-sp': "Serbian (Serbia and Montenegro)";
    readonly ss: "Siswati";
    readonly st: "Sesotho";
    readonly su: "Sundanese";
    readonly sv: "Swedish";
    readonly 'sv-fi': "Swedish (Finland)";
    readonly 'sv-se': "Swedish (Sweden)";
    readonly sw: "Swahili";
    readonly sx: "Sutu";
    readonly syr: "Syriac";
    readonly ta: "Tamil";
    readonly te: "Telugu";
    readonly tg: "Tajik";
    readonly th: "Thai";
    readonly ti: "Tigrinya";
    readonly tk: "Turkmen";
    readonly tl: "Tagalog";
    readonly tn: "Tswana";
    readonly to: "Tonga";
    readonly tr: "Turkish";
    readonly ts: "Tsonga";
    readonly tt: "Tatar";
    readonly tw: "Twi";
    readonly ty: "Tahitian";
    readonly ug: "Uighur";
    readonly uk: "Ukrainian";
    readonly ur: "Urdu";
    readonly us: "English";
    readonly uz: "Uzbek";
    readonly ve: "Venda";
    readonly vi: "Vietnamese";
    readonly vo: "Volapuk";
    readonly wa: "Walloon";
    readonly wo: "Wolof";
    readonly xh: "Xhosa";
    readonly yi: "Yiddish";
    readonly yo: "Yoruba";
    readonly za: "Zhuang";
    readonly zh: "Chinese";
    readonly 'zh-cn': "Chinese (China)";
    readonly 'zh-hk': "Chinese (Hong Kong SAR)";
    readonly 'zh-mo': "Chinese (Macau SAR)";
    readonly 'zh-sg': "Chinese (Singapore)";
    readonly 'zh-tw': "Chinese (Taiwan)";
    readonly zu: "Zulu";
};

declare interface IStampResult {
    data: string;
}

declare interface ITable {
    colCount: number;
    columns: TableColumnCollectionBase<ReportGroupItem, TableColumnBase>;
    getColumn(index: number): TableColumnBase;
    getColPoints(): number[];
}

declare interface ITableGroupPrintInfo extends IGroupPrintInfo {
    view: TableBandGroupSectionElement<TableBandRowGroupHeader | TableBandRowGroupFooter>;
    needNextPage: boolean;
}

declare interface ITableMarquee {
    showColSizeFeedback(col: number, x: number, width: string): void;
    showRowSizeFeedback(table: TableElement<any>, row: number, y: number, height: string): void;
    hideSizeFeedbacks(): void;
}

/**
 * ItemAddSection
 */
declare class ItemAddSection<S extends PageSection> extends PageSection {
    static readonly $_ctor: string;
    static readonly PROPINFOS: IPropInfo[];
    private _targetSection;
    constructor(target: S);
    get targetSection(): S;
    get pathLabel(): string;
    canResize(dir: ResizeDirection): boolean;
    canFold(): boolean;
    protected _getStyleProps(): string[];
    protected _getEditProps(): IPropInfo[];
    canContainsBand(): boolean;
    canContainsBandGroup(): boolean;
}

declare enum ItemMoveType {
    INNER = "inner",
    OUTER = "outer"
}

declare interface ITextEditor {
    is(elt: HTMLElement): boolean;
    isEditing: boolean;
    show(target: ReportItemView, scale: number): boolean;
    hide(accept: boolean): boolean;
    canMultiLine(): boolean;
}

declare interface ITiffOptions {
    dpi?: number;
    grayscale?: boolean;
    encoding?: CCITTScheme;
}

declare interface IUserDataTemplateItem {
    name: string;
    description?: string;
    file?: string;
    template?: ISimpleDataTemplate | IBandDataTemplate;
}

declare type LanguageCode = keyof typeof ISO_639_LANGUAGES;

declare type LanguageItem = {
    field: string;
    value: string;
};

/* Excluded from this release type: LayerElement */

declare abstract class LinkableReportData extends ReportData implements IEditCommandStackOwner {
    private static readonly LOCAL_PROPS;
    protected _mode: 'link' | 'embed';
    _link?: IReportDataLink;
    orgLink?: IReportDataLink;
    private _linkCommands;
    constructor(name: string, link?: IReportDataLink, dp?: IReportDataProvider);
    editCommandStackChanged(stack: EditCommandStack, cmd: EditCommand, undoable: boolean, redoable: boolean): void;
    editCommandStackDirtyChanged(stack: EditCommandStack): void;
    editCommandError(command: EditCommand): void;
    onLinkChanged: (stack: EditCommandStack, cmd: EditCommand) => void;
    hasParams(): boolean;
    get isLocalLink(): boolean;
    updateLink(changes: IReportDataLink): void;
    resetLink(): void;
    undoLink(): void;
    redoLink(): void;
    embedPreview: boolean;
    get linkCommands(): EditCommandStack;
    get mode(): "embed" | "link";
    get dirty(): boolean;
    set dirty(value: boolean);
    isDirty(): boolean;
    clean(): void;
    get isLinkMode(): boolean;
    /**
     * link
     */
    get link(): IReportDataLink;
    set link(value: IReportDataLink);
    get linkUrl(): string;
    private $_getLinkUrl;
    abstract loadJson(source: string, link: IReportDataLink): Promise<void>;
    abstract loadCsv(source: string, reader: ICsvDataReader, info: ICsvDataInfo): Promise<void>;
    abstract loadExcel(source: ArrayBuffer, reader: IExcelDataReader, info: IExcelDataInfo): Promise<void>;
    fetchData(runParams: {
        [param: string]: any;
    }): Promise<void>;
    private $_loadLink;
    saveLink(target: any): IReportDataLink;
    save(target?: any): any;
    protected abstract _doDataFetched(fetchedData: unknown): void;
    /**
     * ../{param1}/{param2} 형태의 url에서 param을 뽑아낸다.
     */
    private $_parseUrl;
}

declare enum LinkTarget {
    SELF = "_self",
    BLANK = "_blank",
    PARENT = "_parent",
    TOP = "_top"
}

/**
 * 참조 항목 list를 갖는 property.
 */
declare class ListableProperty extends StringProperty {
    static readonly $_ctor: string;
}

declare const LocalFileTypes: readonly ["json", "csv", "excel"];

declare type MenuItem = {
    type: 'text';
    label?: ((clickedElement: HTMLElement, menu: MenuItem) => string) | string;
    icon?: ((clickedElement: HTMLElement, menu: MenuItem) => string | SVGSVGElement) | string | SVGSVGElement;
    enabled?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    onClick?: (clickedElement: HTMLElement, menu: MenuItem) => void;
    visible?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    tag?: any;
} | {
    type: 'check';
    label?: ((clickedElement: HTMLElement, menu: MenuItem) => string) | string;
    icon?: ((clickedElement: HTMLElement, menu: MenuItem) => string | SVGSVGElement) | string | SVGSVGElement;
    checked: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    enabled?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    onClick?: (clickedElement: HTMLElement, menu: MenuItem) => void;
    visible?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    tag?: any;
} | {
    type: 'group';
    label?: ((clickedElement: HTMLElement, menu: MenuItem) => string) | string;
    icon?: ((clickedElement: HTMLElement, menu: MenuItem) => string | SVGSVGElement) | string | SVGSVGElement;
    enabled?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    onClick?: (clickedElement: HTMLElement, menu: MenuItem) => void;
    visible?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    tag?: any;
} | {
    type: 'seperator';
    enabled?: boolean;
    visible?: ((clickedElement: HTMLElement, menu: MenuItem) => boolean) | boolean;
    tag?: any;
};

declare type MessageLevel = 'error' | 'warn' | 'info';

declare interface ModelPropertyTypeProps {
    /**
     * 포함해야할 모델 내부 속성을 정의
     */
    include?: string[];
}

/* Excluded from this release type: OutlineBodyView */

/* Excluded from this release type: OutlineElement */

/**
 * Outline model 구성 요소.
 */
declare abstract class OutlineItem extends Base {
    private _children;
    /** outline */
    abstract get outline(): OutlineModel;
    /** parent */
    abstract get parent(): OutlineItem;
    /** source */
    get source(): IOutlineSource;
    /** count */
    get count(): number;
    /** displayText */
    get displayText(): string;
    /** expandable */
    get expandable(): boolean;
    /** removable */
    get removable(): boolean;
    get(index: number): OutlineItem;
    getSourceType(): string;
    itemOf(source: IOutlineSource, recursive?: boolean): OutlineItem;
    add(item: OutlineItem, index?: number): void;
    clear(): void;
    delete(): void;
    protected _attached(parent: OutlineItem): void;
    protected _detached(): void;
    protected _clear(): void;
    protected _addItem(item: OutlineItem, index?: number): void;
    protected _removeItem(item: OutlineItem): void;
    protected _sortByOrder(): void;
}

/**
 * Report 모델의 구성 요소들을 tree 형태로 표시한다.
 */
declare class OutlineModel extends EventAware {
    static readonly SOURCE_CHANGED = "onOutlineSourceChanged";
    static readonly ITEM_ADDED = "onOutlineItemAdded";
    static readonly ITEMS_ADDED = "onOutlineItemsAdded";
    static readonly ITEM_REMOVED = "onOutlineItemRemoved";
    static readonly ITEMS_REMOVED = "onOutlineItemsRemoved";
    static readonly ITEM_CHANGED = "onOutlineItemChanged";
    static readonly CHILDE_INDEX_CHANGED = "onOutlineChildIndexChanged";
    private _root;
    private _source;
    private _pageObj;
    private _page;
    constructor(source?: Report_2, pageIndex?: number);
    protected _doDispose(): void;
    /** source */
    get source(): Report_2;
    set source(value: Report_2);
    get pageIndex(): number;
    set pageIndex(value: number);
    /** root */
    get root(): OutlineRootItem;
    /** page */
    get page(): OutlineReportItem;
    isRoot(item: OutlineItem): boolean;
    findItem(source: IOutlineSource): OutlineItem;
    private $_build;
    private onReportItemAdded;
    private onReportItemsAdded;
    private onReportItemRemoved;
    private onReportItemsRemoved;
    private onReportItemChanged;
    private onReportCollectionChanged;
    protected _fireSourceChanged(): void;
    protected _fireItemAdded(item: OutlineItem, index: number): void;
    protected _fireItemsAdded(items: OutlineItem[], index: number): void;
    protected _fireItemRemoved(item: OutlineItem): void;
    protected _fireItemsRemoved(items: OutlineItem[]): void;
    protected _fireItemChanged(item: OutlineItem): void;
    protected _fireChildIndexChanged(item: OutlineItem): void;
}

/**
 * Outline model 구성 요소.
 */
declare class OutlineReportItem extends OutlineItem {
    private _parent;
    private _source;
    constructor(source: IOutlineSource);
    load(): void;
    get outline(): OutlineModel;
    get parent(): OutlineItem;
    get source(): IOutlineSource;
    protected _attached(parent: OutlineItem): void;
    protected _detached(): void;
    add(item: OutlineItem, index?: number): void;
    protected _load(source: IOutlineSource): void;
}

/**
 * Outline model root item.
 */
declare class OutlineRootItem extends OutlineItem {
    private _model;
    private _page;
    constructor(model: OutlineModel);
    /** page */
    get page(): OutlineReportItem;
    load(report: Report_2, page: number): void;
    get outline(): OutlineModel;
    get source(): IOutlineSource;
    get parent(): OutlineItem;
    get expandable(): boolean;
    getSourceType(): string;
    protected _clear(): void;
}

/* Excluded from this release type: OutlineRowElement */

/**
 * Outline viewer.
 */
declare class OutlineViewer extends VisualContainer {
    static readonly FOCUSED_CHANGED = "onOutlineFocusedChanged";
    static readonly DOUBLE_CLICKED = "onOutlineDoubleClicked";
    private _model;
    private _focusedItem;
    private _bodyView;
    private _selections;
    private _focusRequested;
    constructor(containerId: string | HTMLDivElement);
    private onOutlineSourceChanged;
    private onOutlineItemAdded;
    private onOutlineItemsAdded;
    private onOutlineItemRemoved;
    private onOutlineItemsRemoved;
    private onOutlineItemChanged;
    private onOutlineChildIndexChanged;
    /** model */
    get model(): OutlineModel;
    set model(value: OutlineModel);
    /** bodyView */
    get bodyView(): OutlineBodyView;
    /** topPos */
    get topPos(): number;
    set topPos(value: number);
    /** leftPos */
    get leftPos(): number;
    set leftPos(value: number);
    /** focusedItem */
    get focusedItem(): OutlineItem;
    set focusedItem(value: OutlineItem);
    changeFocus(value: OutlineItem, force?: boolean): boolean;
    changeFocusBySource(source: IOutlineSource): boolean;
    /** selection */
    get selection(): OutlineItem[];
    /** lastSelectedItem */
    get lastSelectedItem(): OutlineItem;
    expand(row?: OutlineRowElement): void;
    expandAll(row?: OutlineRowElement): void;
    collapse(row?: OutlineRowElement): void;
    collapseAll(row?: OutlineRowElement): void;
    collapseShort(): void;
    clearSelection(item?: OutlineItem): void;
    select(item: OutlineItem): void;
    toggleSelect(item: OutlineItem): void;
    selectAll(items?: OutlineItem[]): void;
    unselect(item: OutlineItem): void;
    setFocusedRow(row: OutlineRowElement): void;
    isFocused(item: OutlineItem): boolean;
    isSelected(item: OutlineItem): boolean;
    itemOfDom(dom: Element): OutlineItem;
    getCollapsedParentRow(row: OutlineRowElement): OutlineRowElement;
    private $_expandChildren;
    expandAllCollapsedParent(item: OutlineItem): void;
    protected _createDefaultTool(): VisualTool;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _doLayout(bounds: Rectangle): void;
    protected _fireFocusedChanged(focused: OutlineItem, old: OutlineItem): void;
    protected _fireDoubleClicked(focused: OutlineItem): void;
}

declare class PageBody extends PageBodyBase {
    get itemsAlign(): BoxItemsAlign;
    get itemsContainer(): ColumnBoxContainer;
    protected _createPageBodyItems(): PageBodyItems;
}

/**
 * Report header/footer, Page header/footer를 제외한 리포트 페이지 영역.
 */
declare abstract class PageBodyBase extends PageSection {
    static readonly CLASS: string;
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    private _bodyItems;
    constructor(name?: string);
    /**
     * items
     */
    get bodyItems(): ReportItem[];
    get itemsContainer(): ReportGroupItem;
    get outlineLabel(): string;
    canParentOf(itemType: string): boolean;
    canResize(dir: ResizeDirection): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _loadItems(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    protected _doSave(target: object): void;
    canRemove(item: ReportItem): boolean;
    protected abstract _createPageBodyItems(): ReportGroupItem;
}

/* Excluded from this release type: PageBodyElement */

/**
 * page body item container.
 */
declare class PageBodyItems extends ColumnBoxContainer {
    static readonly $_ctor: string;
    static readonly STYLE_PROPS: string[];
    get outlineLabel(): string;
    canContainsBand(): boolean;
    canContainsBandGroup(): boolean;
    canResize(dir: ResizeDirection): boolean;
    canMove(): boolean;
    canCopy(): boolean;
    canDelete(): boolean;
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    protected _boundable(): boolean;
    protected _getStyleProps(): string[];
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
}

declare class PageBreaker {
}

declare enum PageBreakMode {
    NONE = "none",
    BEFORE = "before",
    AFTER = "after",
    BOTH = "both"
}

declare class PageEditView extends PageView {
    private _focusedItem;
    private _focusRequested;
    private _selections;
    constructor(doc: Document, options?: PageViewOptions);
    onSelectionsChanged(selections: Selections): void;
    get focusedItem(): ReportPageItem;
    set focusedItem(value: ReportPageItem);
    get focusedElement(): ReportElement;
    get focusedItemElement(): ReportItemElement;
    internalSelections(): Selections;
    get selection(): ISelectionSource[];
    get lastSelectedItem(): ISelectionSource;
    getSelectedTableColums(column: TableColumnBase): TableColumnBase[];
    getSelectedTableRows(row: TableRow): TableRow[];
    clearSelection(): void;
}

/**
 * Report page footer model.
 */
declare class PageFooter extends InheritableSection {
    static readonly $_ctor: string;
    constructor();
    get outlineLabel(): string;
    get pathLabel(): string;
    canResize(dir: ResizeDirection): boolean;
}

/* Excluded from this release type: PageFooterElement */

/**
 * Report page header model.
 */
declare class PageHeader extends InheritableSection {
    static readonly $_ctor: string;
    constructor();
    get outlineLabel(): string;
    get pathLabel(): string;
    canResize(dir: ResizeDirection): boolean;
}

/* Excluded from this release type: PageHeaderElement */

/**
 */
declare class PageItemContainer extends BoundedContainer {
    static readonly PROP_INHERIT = "inherit";
    static readonly $_ctor: string;
    static readonly PROPINFOS: IPropInfo[];
    private _inherit;
    protected _inherited: boolean;
    private _label;
    constructor(name: string, label: string);
    /**
     * 이전 페이지 표시대로 출력한다.
     */
    get inherit(): SectionInherit;
    set inherit(value: SectionInherit);
    get inherited(): boolean;
    get outlineLabel(): string;
    get isArray(): boolean;
    canNamed(): boolean;
    canTagged(): boolean;
    canResize(dir: ResizeDirection): boolean;
    canPageBreak(): boolean;
    canHide(): boolean;
    canCopy(): boolean;
    canDelete(): boolean;
    getMoveType(item: ReportItem): ItemMoveType;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _getEditProps(): IPropInfo[];
}

/* Excluded from this release type: PageItemContainerElement */

/**
 * 리포트 페이지의 수평 전체와 수직 일부를 차지하는 영역 그룹 item.
 * body를 제외하고 페이지를 넘어갈 수 없다.
 */
declare abstract class PageSection extends StackContainer {
    constructor(name: string);
    get removable(): boolean;
    get page(): ReportPageBase;
    canMove(): boolean;
    canCopy(): boolean;
    canDelete(): boolean;
    getSaveType(): string;
    canResize(dir: ResizeDirection): boolean;
    protected _getStyleProps(): string[];
}

declare class PageSectionGuard extends ReportItemElement<ReportPage> {
    get guardLabel(): string;
}

/* Excluded from this release type: PageView */

declare abstract class PageViewBase extends LayerElement {
    abstract get model(): ReportPageBase;
    abstract getFirst(): ReportItemElement;
    abstract getLast(): ReportItemElement;
    abstract getFirstInGroup(group: ReportGroupItemElement): ReportItemElement;
    abstract getLastInGroup(group: ReportGroupItemElement): ReportItemElement;
    abstract getPrev(elt: ReportItemElement): ReportItemElement;
    abstract getNext(elt: ReportItemElement): ReportItemElement;
    abstract getUpper(elt: ReportItemElement): ReportItemElement;
    abstract getLower(elt: ReportItemElement): ReportItemElement;
    abstract itemOfDom(dom: Element): ReportItem;
    abstract getElementOf(model: ReportPageItem): ReportElement;
    abstract findElementOf(dom: HTMLElement): ReportElement;
    getLeft(elt: ReportItemElement): ReportItemElement;
    getRight(elt: ReportItemElement): ReportItemElement;
    protected _getSections(): ReportElement[];
    getAllElements(root: ReportElement, bounds: Rectangle): ReportItemElement[];
}

declare class PageViewContainer extends LayerElement {
    protected _initDom(doc: Document, dom: HTMLElement): void;
}

declare interface PageViewOptions {
    frontEnabled?: boolean;
    backEnabled?: boolean;
    reportHeaderEnabled?: boolean;
    reportFooterEnabled?: boolean;
    pageHeaderEnabled?: boolean;
    pageFooterEnabled?: boolean;
    addBodyItemSectionEnabled?: boolean;
}

declare enum PanelMode {
    ASSET = "asset",
    DATA = "data",
    SCRIPT = "script",
    ARCHIVE = "archive",
    TRANSFER = "transfer",
    SCHEDULE = "schedule",
    LANGUAGES = "languages"
}

declare abstract class PanelModel extends SectionModel {
}

declare abstract class PanelView<T extends PanelModel = PanelModel> extends SectionContainer<T> {
    abstract getMenu(target: HTMLElement): MenuItem[];
}

/**
 * Paper options
 */
declare class PaperOptions extends Base {
    private _orientation;
    private _size;
    private _width;
    private _height;
    private _marginLeft;
    private _marginRight;
    private _marginTop;
    private _marginBottom;
    private _report;
    private _widthDim;
    private _heightDim;
    private _marginLeftDim;
    private _marginRightDim;
    private _marginTopDim;
    private _marginBottomDim;
    constructor(report: ReportBase);
    /** orientation */
    get orientation(): PaperOrientation;
    set orientation(value: PaperOrientation);
    /** size */
    get size(): PaperSize;
    set size(value: PaperSize);
    /** width */
    get width(): ValueString;
    set width(value: ValueString);
    /** height */
    get height(): ValueString;
    set height(value: ValueString);
    /** marginLeft */
    get marginLeft(): ValueString;
    set marginLeft(value: ValueString);
    /** marginRight */
    get marginRight(): ValueString;
    set marginRight(value: ValueString);
    /** marginTop */
    get marginTop(): ValueString;
    set marginTop(value: ValueString);
    /** marginBottom */
    get marginBottom(): ValueString;
    set marginBottom(value: ValueString);
    load(src: any): void;
    getOrientation(page?: ReportPageBase): PaperOrientation;
    getPaperSize(): Size;
    getPageSize(page?: ReportPageBase): Size;
    getMargins(): ISides;
    getContentRect(r: Rectangle): Rectangle;
    getClientRect(page: ReportPage): Rectangle;
    applyExtents(page: ReportPage, css: CSSStyleDeclaration): void;
    applyPreviewExtents(page: ReportPageBase, css: CSSStyleDeclaration, paperOrientation: PaperOrientation): {
        pageWidth: number;
        pageHeight: number;
    };
    applyClient(page: ReportPageBase, css: CSSStyleDeclaration): void;
    applyPreviewClient(page: ReportPage, css: CSSStyleDeclaration): {
        width: string;
        height: string;
    };
    protected _changed(): void;
}

declare enum PaperOrientation {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape"
}

declare enum PaperSize {
    A0 = "A0",
    A1 = "A1",
    A2 = "A2",
    A3 = "A3",
    A4 = "A4",
    A5 = "A5",
    A6 = "A6",
    A7 = "A7",
    A8 = "A8"
}

declare interface PdfExportOptions extends DocExportOptions {
    preview?: boolean;
    /**
     * 사용자 암호만 제공되면 사용자 암호를 가진 사용자는 파일을 해독하고 문서에 대한 전체 액세스 권한을 갖습니다.
     * 소유자 암호만 제공되면 사용자는 암호를 제공하지 않고 문서를 해독하고 열 수 있지만 액세스는 명시적으로 허용된 작업으로 제한됩니다. 소유자 암호가 있는 사용자는 문서에 대한 전체 액세스 권한을 갖습니다.
     * 두 암호가 모두 제공되면 사용자 암호를 가진 사용자는 파일을 복호화할 수 있지만 권한 설정에 따라 파일에 대한 액세스가 제한됩니다. 소유자 암호가 있는 사용자는 문서에 대한 전체 액세스 권한을 갖습니다.
     */
    ownerPassword?: string;
    userPassword?: string;
    permissions?: PdfPermissions;
    pdfVersion: PdfVersion;
}

declare interface PdfPermissions {
    printing?: 'lowResolution' | 'highResolution';
    modifying?: boolean;
    copying?: boolean;
    annotating?: boolean;
    fillingForms?: boolean;
    contentAccessibility?: boolean;
    documentAssembly?: boolean;
}

declare type PdfVersion = '1.3' | '1.4' | '1.5' | '1.6' | '1.7' | '1.7ext3';

/* Excluded from this release type: Point */

declare abstract class PopupElement extends ReportElement implements Closable {
    close(): void;
    protected _doClose(): void;
}

declare class PopupSelector extends LayerElement {
    type: string;
    readonly onSelect: PopupSelectorCallback;
    readonly onClose: () => void;
    private _items;
    private readonly _align;
    private readonly _closeOnSelect;
    constructor(doc: Document, type: string, items: (PopupSelectorItem | string)[], options: PopupSelectorOptions);
    get closeOnSelect(): boolean;
    select(id: string): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _getCssDisplay(): string;
}

declare type PopupSelectorCallback = (context: IDesignerContext, selector: PopupSelector, item: PopupSelectorItem) => void;

declare type PopupSelectorItem = {
    id: string;
    label: string;
};

declare interface PopupSelectorOptions {
    iconsColors?: any;
    /**
     * 각 항목의 글자 수평 정렬
     * @default center
     */
    align?: PopupSelector['_align'];
    /**
     * 항목 선택 시, selector 닫을지 여부
     * @default false
     */
    closeOnSelect?: boolean;
    /**
     * 항목을 선택할 때 호출되는 이벤트 핸들러
     */
    onSelect: PopupSelectorCallback;
    /**
     * selector 닫을 때 호출되는 이벤트 핸들러
     */
    onClose?: () => void;
}

declare type PopupSelectorType = 'zoom' | 'fontFamily' | 'fontSize' | 'textColor' | 'backgroundColor';

declare enum PreviewMode {
    PREVIEW = "preview",
    PAPER_PREVIEW = "paperPreview"
}

declare type PreviewParam = {
    [data: string]: {
        [param: string]: any;
    } | string | Buffer;
};

/**
 * PreviewScrollContainer 미리보기 페이지 스크롤용 컨테이너
 */
declare class PreviewScrollContainer extends DesignerLayerElement {
    static readonly SCROLL_END = "onScrollEnd";
    get scrollHeight(): number;
    get scrolltop(): number;
    constructor(doc: Document);
    protected _doInitStyles(dom: HTMLElement): void;
    protected _addEventListeners(dom: HTMLElement): void;
    protected _fireScrollEnd(): void;
}

declare abstract class PrintContainerBase extends VisualContainer {
    static readonly CLASS_NAME = "rr-report-container";
    static readonly PREVIEW_CLASS = "rr-report-preview";
    static readonly PRINT_SIZE = "--rr-print-size";
    protected static readonly MARKER_CLASS = "rr-report-page-marker";
    private static readonly PRINT_INDICATOR_CLASS;
    protected static readonly PRINT_BACK_CLASS = "rr-print-back";
    static readonly SCROLL_END = "onScrollEnd";
    traceMode: boolean;
    private _align;
    onGetStampImage: () => Promise<string>;
    protected _pageGap: number;
    private _zoom;
    private _styles;
    onZoomed: (scale: number) => void;
    private _signLayer;
    private _errorView;
    protected _options: IPrintOptions;
    private _signPanel;
    private _signed;
    private _stampPanel;
    protected _preview: boolean;
    protected _previewId: string;
    protected _printMode: PrintMode;
    constructor(containerId: string | HTMLDivElement);
    abstract get reportView(): ReportViewBase;
    abstract get reportViews(): ReportViewBase[];
    /** align */
    get align(): Align;
    set align(value: Align);
    /** zoom */
    get zoom(): number;
    set zoom(value: number);
    abstract page: number;
    abstract get pageCount(): number;
    abstract get isPrinted(): boolean;
    abstract getCurrentPage(scrollHeight: number, scrollTop: number): number;
    abstract fitToWidth(): void;
    abstract fitToHeight(): void;
    abstract fitToPage(): void;
    abstract loadAsyncLoadableElements(): Promise<void>;
    print(options: IPrintOptions): void;
    /**
     * Multi 리포트이면서 가로로 시작하는 양식은 따로 설정이 필요함
     * @returns 멀티 페이지이면서 첫번째 페이지가 가로양식으로 시작할 경우
     */
    needPrintScale(): boolean;
    setStyles(styles: any): void;
    getScaleSize(width: number, height: number): number;
    startPrint(doc: Document, ctx: PrintContextBase, id: string, pageMark: boolean): HTMLElement;
    getPrintHtml(): string;
    /**
     * containerDiv의 크기에 맞춰 previewer의 위치를 재조정한다.
     */
    resetPreviewer(): void;
    get printing(): boolean;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _render(timestamp: number): void;
    protected _getContainer(): HTMLElement;
    protected _getPreviewer(id?: string): HTMLElement;
    protected _setLanguageContext(ctx: PrintContextBase, report: ReportBase, language?: string): void;
    protected _setPrintMode(reports: ReportBase | (ReportBase | IPrintReport)[]): void;
    protected _initialize(div: HTMLDivElement): void;
    protected _showError(dom: HTMLElement, error: any): void;
    protected _hideError(): void;
    protected _createIndicator(doc: Document): HTMLDivElement;
    /**
     * 출력 옵션 검증
     * @throws 출력 옵션이 유효하지 않을 경우 에러 발생
     */
    protected _validatePrintOptions(options: unknown): void;
    private _validateReportOption;
    private _instanceofIPrintReport;
    protected _resetPreviewer(): void;
    private $_clickHandler;
    $_keydownHandler: (ev: KeyboardEvent) => boolean;
}

declare class PrintContext extends PrintContextBase<Report_2> {
    private _reportView;
    get reportView(): ReportView;
    set reportView(value: ReportView);
    getBaseView(view: InheritableSectionElement<any>, viewType: string): InheritableSectionElement<any>;
    preparePrint(report?: Report_2): void;
}

/**
 * Printing 관련 상태 정보 모델.
 */
declare abstract class PrintContextBase<R extends ReportBase = ReportBase> extends Base {
    static readonly VALUES: string[];
    private _printing;
    private _compositePrinting;
    private _dp;
    private _desingDp;
    private _assets;
    private _pageWidth;
    private _pageHeight;
    private _date;
    private _pageCount;
    private _page;
    private _detailPageCount;
    private _detailPage;
    private _compositePageCount;
    private _compositePage;
    private _language;
    private _editable;
    detailRows: number[];
    noValueCallback: boolean;
    preview: boolean;
    pageDelay: number;
    report: R;
    container: HTMLDivElement;
    headerHeight: number;
    footerHeight: number;
    reportHeaderHeight: number;
    reportFooterHeight: number;
    bodyTop: number;
    bodyBottom: number;
    bodyHeight: number;
    y: number;
    h: number;
    yBand: number;
    bandSummaryRuntime: DataBandSummaryRuntime;
    row: number;
    index: number;
    contextable: boolean;
    contextValues: (TextItemElementBase<any> | HtmlItemElement)[];
    contextReplaces: {
        [hash: string]: HtmlItemElement;
    };
    private _userData;
    private _tags;
    private _bandSave;
    async: boolean;
    band: DataBand | CrosstabBand | TextBand;
    pages: PrintPage[];
    floatings: HTMLDivElement[];
    reportCount: number;
    reportIndex: number;
    prevPages: number;
    firstReport: PrintContextBase;
    nextReport: PrintContextBase;
    contextElements: {
        [hash: string]: TextItemElementBase<any>;
    };
    private _reportItemElementMap;
    private _asyncLoadableElements;
    constructor(printing?: boolean, compositePrinting?: boolean);
    /**
     * printing
     */
    get printing(): boolean;
    /**
     * compositePrinting 복합 출력 여부를 반환
     */
    get compositePrinting(): boolean;
    abstract reportView: ReportViewBase;
    /**
     * data provider
     */
    get dp(): IReportDataProvider;
    set dp(value: IReportDataProvider);
    /**
     * design data provider
     */
    get designDp(): DesignDataManager;
    set designDp(value: DesignDataManager);
    /**
     * assets
     */
    get assets(): AssetManager;
    set assets(value: AssetManager);
    /**
     * pageWidth
     */
    get pageWidth(): number;
    set pageWidth(value: number);
    /**
     * pageHeight
     */
    get pageHeight(): number;
    set pageHeight(value: number);
    /**
     * date
     */
    get date(): Date;
    /**
     * page count.
     */
    get pageCount(): number;
    set pageCount(count: number);
    /**
     * page index.
     */
    get page(): number;
    /**
     * detail page count.
     */
    get detailPageCount(): number;
    /**
     * detail page index.
     */
    get detailPage(): number;
    /**
     * compositePage count.
     */
    get compositePageCount(): number;
    /**
     * compositePage index.
     */
    get compositePage(): number;
    get reportItemElementMap(): ReportItemElementMap;
    /**
     * language
     */
    get language(): string;
    set language(value: string);
    /**
     * editable
     */
    get editable(): boolean;
    set editable(value: boolean);
    /**
     * 편집 가능한 리포트인지 판별하기 위해 선언
     */
    get isEditable(): boolean;
    preparePrint(report?: R): void;
    preparePage(page: number, allPage: number): void;
    setDetailPage(count: number, page: number): void;
    setCompositePageCount(compostePageCount: number): void;
    getUserData(): any;
    getCurrentValue(prop: string): any;
    setTag(tag: string, value: any): void;
    unsetTag(tag: string): void;
    getTag(tag: string, def?: any): any;
    getValue(data: string, row: number, field: string): any;
    saveBand(): void;
    restoreBand(): void;
    getBaseView(view: InheritableSectionElement<any>, viewType: string): InheritableSectionElement<any>;
    /**
     * - 현재 출력중인 data row를 반환
     * @returns 0부터 시작하며 현재 출력중인 band의 row index 반환
     */
    getPrintingRow(): number;
    /**
     * - 정렬 적용 후에도 onGetValue, onGetStyles 이벤트에서 사용하는 row 인자에 원본 데이터의 index를 반환하기 위해 작성
     * @returns 원본 데이터의 index 반환
     */
    getSourceIndex(): number;
    setPageSize(width: number, height: number): void;
    /**
     * 호출하기 전 pageHeader, pageFooter, pageHeight 값이 설정되어야 함
     */
    setBodySize(): void;
    /**
     * 로드가 필요한 리포트 아이템 View 정보를 추가한다.
     * @param itemElement 로드가 필요한 reportItemElement
     */
    addAsyncLoadableElement(itemElement: AsyncLoadable): void;
    addReportItemElement(itemElement: ReportItemElement<any>): void;
    /**
     * 로드가 필요한 Elements에 대한 비동기 처리
     */
    loadAsyncLoadableElements(): Promise<void[]>;
    getPrintValue(item: ReportItem): any;
    getPrintLinkValue(m: ReportItem): any;
    /**
     * PrintContext에서 초기화가 필요한 속성들을 설정한다.
     */
    initialize(): void;
}

declare type PrintEndCallback = (ctx: PrintContextBase, pages: PrintPage[]) => void;

declare type PrintLine = {
    line: HTMLElement | BandPrintInfo<BandModel> | ReportFooterPrintInfo | PageBreaker;
    pageIndex: number;
};

declare enum PrintMode {
    PORTRAIT = "portrait",
    LANDSCAPE = "landscape",
    MULTI = "multi"
}

/**
 * print page model.
 */
declare class PrintPage {
    page: HTMLDivElement;
    pageOrientation: PaperOrientation;
    pageHeader: PrintPageElement;
    pageFooter: PrintPageElement;
    background: HTMLDivElement;
    contents: PrintPageElement[];
    foreground: HTMLDivElement;
    reportIndex: number;
}

declare type PrintPageCallback = (ctx: PrintContextBase, page: PrintPage, pageNo: number) => void;

declare type PrintPageElement = HTMLDivElement | HTMLTableElement;

declare enum PrintUnit {
    PIXEL = "px",
    POINT = "pt",
    INCH = "in",
    CENTI = "cm",
    MILLI = "mm"
}

declare enum PropCategory {
    DESIGN = "design",
    BASIC = "basic",
    TEXT = "text",
    DATA = "data",
    BOUND = "bound",
    LINK = "link",
    EVENT = "event",
    I18N = "internationalization",
    EDITING = "editing",
    CHECK = "check",
    SECTION = "section",
    EDITOR = "editor",
    REPORT = "report",
    PAPER = "paper",
    PRINT = "print",
    BOX = "box",
    TABLE = "table",
    BARCODE = "barcode",
    CELL = "cell",
    BAND = "band",
    BAND_GROUP = "band group",
    BAND_CELL = "band cell",
    SUB_BAND = "sub band",
    FIELD = "field",
    COLUMN = "column",
    ROW = "row",
    CHART = "chart",
    TITLE = "title",
    SUBTITLE = "subtitle",
    AXIS = "axis",
    XAXIS = "x Axis",
    YAXIS = "y Axis",
    SERIES = "series",
    LABEL = "label",
    LABELS = "labels",
    DATA_LABELS = "dataLabels",
    MARKER = "marker",
    LEGEND = "legend",
    SHEET = "sheet",
    GRID = "grid",
    LINE = "line",
    TICK = "tick",
    POINT = "point",
    TOOLTIP = "tooltip",
    CROSSHAIR = "crosshair",
    OPTIONS = "options",
    BODY = "body",
    CREDITS = "credits",
    STYLES = "Styles",
    EMAIL_FORM_INFO = "email form info",
    EMAIL_LAYOUT = "email layout",
    EXCEL = "excel",
    EXCEL_BAR = "bar"
}

/* Excluded from this release type: PropertyBodyView */

/* Excluded from this release type: PropertyCategoryElement */

/* Excluded from this release type: PropertyElement */

declare class PropertyGroup extends Base {
    static readonly $_ctor: string;
    private _label;
    private _items;
    private _pool;
    source: IPropertySource;
    constructor(label: string);
    get label(): string;
    get count(): number;
    get(index: number): PropertyItem;
    borrow(info: IPropInfo): PropertyItem;
    find(name: string): PropertyItem;
    add(item: PropertyItem): void;
    clear(): void;
}

/**
 * 리포트 아이템의 속성 및 스타일 값을 설정하는 편집기.
 */
declare class PropertyInspector extends VisualContainer {
    static readonly MOUSE_CLICKED = "onPropertyMouseClicked";
    static readonly EDIT_BUTTON_CLICKED = "onPropertyEditButtonClicked";
    propContainer: IPropertyContainer;
    private _model;
    private _focusedItem;
    onFocusItem: (item: PropertyItem, model: PropertyModel) => void;
    onColorClick: (item: PropertyItem, color: string) => void;
    onPopupClick: (item: PropertyItem, source: IPropertySource) => void;
    onRequestParent: (source: IPropertySource) => void;
    onRequestFocus: (source: IPropertySource) => void;
    private _bodyView;
    private _errorView;
    private _focusRequested;
    private _errorTimer;
    private _hideErrorTimer;
    constructor(containerId: string | HTMLDivElement);
    /** model */
    get model(): PropertyModel;
    set model(value: PropertyModel);
    /** bodyView */
    get bodyView(): PropertyBodyView;
    /** focusedItem */
    get focusedItem(): PropertyItem;
    set focusedItem(value: PropertyItem);
    expand(group: PropertyCategoryElement): void;
    collapse(group: PropertyCategoryElement): void;
    findDropTarget(source: any, target: HTMLElement, showFeedback: boolean): PropertyItem;
    itemOfDom(dom: HTMLElement): PropertyItem;
    updateValue(source: IPropertySource, item: PropertyItem, value: any): void;
    updateValueByName(name: string, source: IPropertySource, item: PropertyItem, value: any): void;
    updateColor(prop: PropertyItem, color: string): void;
    /**
     * SheetBorderStyle 관련 정보를 동기화하고 처리한다.
     */
    updateSheetBorderColor(prop: PropertyItem, color: string): void | string;
    getFocusedSource(): IPropertySource;
    showError(source: PropertyRowElement<any>, error: string, duration?: number): boolean;
    hideError(): void;
    selectFocusedItem(): void;
    requestParentProperty(source: IPropertySource): void;
    requestFocusProperty(source: IPropertySource): void;
    editButtonClick(item: PropertyItem, source: IPropertySource): void;
    protected _createDefaultTool(): VisualTool;
    protected _isAutoFocus(): boolean;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _doLayout(bounds: Rectangle): void;
    private $_modelchanged;
    protected _fireMouseClicked(item: PropertyItem): void;
    protected _fireEditButtonClicked(item: PropertyItem, source: IPropertySource): void;
    onPropertySourceChanged(model: PropertyModel): void;
}

/**
 * Property 모델 구성 요소.
 */
declare abstract class PropertyItem extends Base {
    private _prop;
    private _group;
    constructor(prop: IPropInfo);
    get group(): PropertyGroup;
    get prop(): IPropInfo;
    get name(): string;
    get label(): string;
    get domain(): any[];
    get parent(): any;
    isVisible(source: IPropertySource): boolean;
    isReadOnly(source: IPropertySource): boolean;
    getValue(source: IPropertySource): any;
    getValueByName(name: string, source: IPropertySource): any;
    setValue(source: IPropertySource, value: any): void;
    setValues(sources: IPropertySource[], value: any): void;
    setValueByName(name: string, source: IPropertySource, value: any): void;
    setValuesByName(name: string, sources: IPropertySource[], value: any): void;
    hasColor(): boolean;
}

declare abstract class PropertyLineElement extends PropertyElement {
    static readonly INDENT = 8;
    private _source;
    private _level;
    /** isCategory */
    get isCategory(): boolean;
    /** source */
    get source(): IPropertySource;
    /** level */
    get level(): number;
    prepareElement(doc: Document): void;
    protected _getCssDisplay(): string;
    protected _isEmptySize(): boolean;
    draw(force?: boolean): void;
    protected abstract _doPrepareElement(doc: Document, source: IPropertySource): void;
    private $_setLevel;
}

declare enum PropertyMode {
    PROPERTY = "property"
}

/**
 * Report 혹은 ReportItem들의 속성 집합 모델.
 */
declare class PropertyModel extends EventAware {
    static readonly SOURCE_CHANGED = "onPropertySourceChanged";
    static readonly VALUE_CHANGED = "onPropertyValueChanged";
    private _name;
    private _modelMap;
    private _groupMap;
    private _styleGroup;
    private _childStyleMap;
    private _source;
    private _sources;
    private _groups;
    private _models;
    private _includedPropNames;
    constructor(name?: string);
    get name(): string;
    /** source */
    get source(): IPropertySource;
    set source(value: IPropertySource);
    /**
     * 리포트에서 복수 선택시 설정된다.
     */
    get sources(): IPropertySource[];
    set sources(value: IPropertySource[]);
    /** groupCount */
    get groupCount(): number;
    /**
     * sub model count
     */
    get modelCount(): number;
    /**
     * 현재 모델에 포함해야 할 속성을 정의 (undefined일 경우에는 모든 속성을 포함, 빈 배열을 모든 속성 무시)
     */
    get includedPropNames(): string[] | undefined;
    set includedPropNames(value: string[] | undefined);
    getGroup(index: number): PropertyGroup;
    getModel(index: number): PropertyModel;
    findItem(prop: string): PropertyItem;
    refresh(): void;
    updateValue(source: IPropertySource, item: PropertyItem, value: any): void;
    updateValueByName(name: string, source: IPropertySource, item: PropertyItem, value: any): void;
    private $_borrowGroup;
    private $_borrowModel;
    private $_clear;
    private $_buildSource;
    private $_buildModels;
    private $_buildItems;
    private $_isIncludeProp;
    protected _fireSourceChanged(): void;
    protected _fireValueChanged(source: IPropertySource, item: PropertyItem, value: any): void;
}

/* Excluded from this release type: PropertyRowElement */

/**
 * R2Server 서버 연결용 구현체
 * - base url 만 설정해서 웹 디자이너 서버 연결 구현체로 사용
 */
export declare class R2Server implements IReportServer {
    options: R2ServerOptions;
    private _userId;
    private _url;
    private _imageUrl;
    constructor(options: R2ServerOptions);
    isRemote: boolean;
    /**
     * 사용자
     */
    getUser(): Promise<any>;
    /**
     * 사용자 리포트
     */
    getReports(): Promise<ServerReportSources>;
    getReport(id: string): Promise<IServerSource>;
    saveReport(id: string, report: any): Promise<IServerResponse | null>;
    getRecents(maxCount: number): Promise<ServerReportSource[]>;
    /**
     * 리포트 템플릿
     */
    getReportTemplateCategories(parent?: string, reportType?: string): Promise<{
        category: string;
        description: string;
    }[]>;
    getReportTemplates(reportType: string, category: string): Promise<{
        category: string;
        templates: IServerReportTemplateInfo[];
    }>;
    getReportTemplate(id: string): Promise<IServerReportTemplate>;
    shareReport(template: IServerReportTemplate): Promise<number>;
    /**
     * 데이터 템플릿
     */
    getDataTemplateCategories(parent?: string): Promise<{
        category: string;
        description: string;
    }[]>;
    getDataTemplates(category: string): Promise<{
        category: string;
        templates: IServerDataTemplateInfo[];
    }>;
    getDataTemplate(id: string): Promise<IServerDataTemplate>;
    shareDataTemplate(template: IServerCreateDataTemplate): Promise<number>;
    /**
     * 에셋
     */
    getAssetCategories(parent?: string): Promise<{
        category: string;
        description: string;
    }[]>;
    getAssets(category: string): Promise<{
        category: string;
        assets: IServerAssetInfo[];
    }>;
    getAsset(id: string): Promise<IServerAsset>;
    shareAsset(asset: IServerAsset): Promise<any>;
    /**
     * 아카이브
     */
    uploadArchive(reportId: string, tag: string, type: ReportArchiveType, blob: Blob, params: PreviewParam): Promise<IServerArchiveInfo>;
    resolveExt(type: ReportArchiveType): string;
    /**
     * 옵션
     */
    getOptions(): Promise<Partial<IReportDesignerOptions>>;
    saveOptions(options: IReportDesignerOptions): Promise<string>;
    saveSign(reportId: string, item: IItemPrintInfo, sign: ISignResult): void;
    saveStamp(reportId: string, item: IItemPrintInfo, stamp: IStampResult): void;
    get userId(): string;
    get url(): string;
    get imageUrl(): string;
}

declare interface R2ServerOptions {
    userId: string;
    url: string;
    imageUrl: string;
}

declare abstract class RCAxis<C = RCAxisConfig> extends ChartAxis<RealChartItem, C> {
    static readonly PROP_TYPE = "type";
    static readonly PROP_NAME = "name";
    static readonly PROP_MAX_VALUE = "maxValue";
    static readonly PROP_MIN_VALUE = "minValue";
    static readonly PROP_STRICT_MAX = "strictMax";
    static readonly PROP_STRICT_MIN = "strictMin";
    static readonly PROP_START_ANGLE = "startAngle";
    static readonly PROP_TITLE = "title";
    static readonly PROP_LABEL = "label";
    static readonly PROP_GRID = "grid";
    static readonly PROP_LINE = "line";
    static readonly PROP_TICK = "tick";
    static readonly PROPINFOS: IPropInfo[];
    private _name;
    private _maxValue;
    private _minValue;
    private _strictMax;
    private _strictMin;
    private _startAngle;
    private _title;
    private _label;
    private _grid;
    private _line;
    private _tick;
    private _crosshair;
    constructor(collection: RCAxisCollection);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    abstract get type(): string;
    get direction(): RCAxisDirection | undefined;
    get name(): string;
    set name(value: string);
    get maxValue(): number;
    set maxValue(value: number);
    get minValue(): number;
    set minValue(value: number);
    get startAngle(): number;
    set startAngle(value: number);
    get strictMax(): number;
    set strictMax(value: number);
    get strictMin(): number;
    set strictMin(value: number);
    get title(): RCAxisTitle;
    get label(): RCAxisLabel;
    get grid(): RCAxisGrid;
    get line(): RCAxisLine;
    get tick(): RCAxisTick;
    abstract getChartConfig(context: PrintContext): C;
    getCollapsedPropCategories(): string[];
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: ReportTarget): void;
}

declare abstract class RCAxisCollection extends ChartAxisCollection<RealChartItem, RCAxisConfig> {
    abstract get direction(): RCAxisDirection;
    getChartConfig(context: PrintContext): RCAxisConfig[];
}

declare type RCAxisConfig = RCCategoryAxisConfig | RCLinearAxisConfig | RCLogAxisConfig | RCTimeAxisConfig;

declare interface RCAxisConfigBase {
    visible?: boolean;
    type: RCAxisType;
    title: RCAxisTitleConfig;
    name?: string;
    maxValue?: number;
    minValue?: number;
    startAngle?: number;
    marginFar?: number;
    marginNear?: number;
    maxPadding?: number;
    minPadding?: number;
    label?: RCAxisLabelConfig;
    grid?: RCAxisGridConfig;
    line?: RCAxisLineConfig;
    tick?: RCAxisTickConfig;
    crosshair?: RCAxisCorssHairConfig;
}

declare interface RCAxisCorssHairConfig {
    visible?: boolean;
    flag?: {
        visible?: boolean;
        format?: string;
        textStyles?: RCSvgStyles;
        style?: RCSvgStyles;
    };
    followPointer?: boolean;
    numberFormat?: string;
    showAlways?: boolean;
    style?: RCSvgStyles;
}

declare type RCAxisDirection = 'x' | 'y';

declare class RCAxisGrid extends RCAxisObject<RCAxisGridConfig> {
    static readonly PROP_START_VISIBLE = "startVisible";
    static readonly PROP_START_VISIBLE_DEFUALT_VALUE = false;
    static readonly PROP_END_VISIBLE = "endVisible";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLES;
    private _startVisible;
    private _endVisible;
    constructor(axis: RCAxis<unknown>);
    get startVisible(): boolean;
    set startVisible(value: boolean);
    get endVisible(): boolean;
    set endVisible(value: boolean);
    getChartConfig(context: PrintContext): RCAxisGridConfig;
    getSaveLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
}

declare interface RCAxisGridConfig {
    visible?: boolean;
    endVisible?: boolean;
    startVisible?: boolean;
    style?: RCSvgStyles;
}

declare class RCAxisLabel extends RCAxisTextObject<RCAxisLabelConfig> {
    static readonly PROP_AUTO_ARRANGE = "autoArrange";
    static readonly PROP_AUTO_ARRANGE_DEFAULT_VALUE = RCAxisLabelAutoArrange.ROTATE;
    static readonly PROP_ROTATION = "rotation";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLES;
    private _autoArrange;
    private _rotation;
    constructor(axis: RCAxis<unknown>);
    get autoArrange(): RCAxisLabelAutoArrange;
    set autoArrange(value: RCAxisLabelAutoArrange);
    get rotation(): number;
    set rotation(value: number);
    getChartConfig(context: PrintContext): RCAxisLabelConfig;
    getSaveLabel(): string;
    getCollapsedPropCategories(): string[];
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    getPropDomain(prop: IPropInfo): any[];
}

declare enum RCAxisLabelAutoArrange {
    NONE = "none",
    ROTATE = "rotate",
    ROWS = "rows",
    STEP = "step"
}

declare interface RCAxisLabelConfig {
    visible?: boolean;
    text?: string;
    prefix?: string;
    suffix?: string;
    firstText?: string;
    firstStyle?: RCSvgStyles;
    lastText?: string;
    lastStyle?: RCSvgStyles;
    numberFormat?: string;
    numberSymbols?: string;
    autoArrange?: RCAxisLabelAutoArrange;
    autoContrast?: boolean;
    rotation?: number;
    darkStyle?: RCSvgStyles;
    lightStyle?: RCSvgStyles;
    backgroundStyle?: RCSvgStyles;
    style?: RCSvgStyles;
}

declare class RCAxisLine extends RCAxisObject<RCAxisLineConfig> {
    private static readonly STYLES;
    constructor(axis: RCAxis<unknown>);
    getChartConfig(context: PrintContext): RCAxisLineConfig;
    getSaveLabel(): string;
    protected _getStyleProps(): string[];
}

declare interface RCAxisLineConfig {
    visible?: boolean;
    style?: RCSvgStyles;
}

declare abstract class RCAxisObject<C> extends ChartObject$1<RealChartItem, C> {
    readonly axis: RCAxis<unknown>;
    constructor(axis: RCAxis<unknown>);
}

declare abstract class RCAxisTextObject<C> extends ChartTextObject$1<RealChartItem, C> {
    readonly axis: RCAxis<unknown>;
    constructor(axis: RCAxis<unknown>);
}

declare class RCAxisTick extends RCAxisObject<RCAxisTickConfig> {
    static readonly PROP_STEP_INTERVAL = "stepInterval";
    static readonly PROP_GAP = "gap";
    static readonly PROP_GAP_DEFUALT_VALUE = 3;
    static readonly PROP_LENGTH = "length";
    static readonly PROP_LENGTH_DEFAULT_VALUE = 7;
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLES;
    private _stepInterval;
    private _gap;
    private _length;
    constructor(axis: RCAxis<unknown>);
    get stepInterval(): number;
    set stepInterval(value: number);
    get gap(): number;
    set gap(value: number);
    get length(): number;
    set length(value: number);
    getChartConfig(context: PrintContext): RCAxisTickConfig;
    getSaveLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
}

declare interface RCAxisTickConfig {
    visible?: boolean;
    stepInterval?: number;
    gap?: number;
    length?: number;
    style?: RCSvgStyles;
}

declare class RCAxisTitle extends RCAxisTextObject<RCAxisTitleConfig> {
    private static readonly STYLES;
    constructor(axis: RCAxis<unknown>);
    getCollapsedPropCategories(): string[];
    getChartConfig(context: PrintContext): RCAxisTitleConfig;
    getSaveLabel(): string;
    protected _getStyleProps(): string[];
}

declare interface RCAxisTitleConfig {
    text: string;
    visible?: boolean;
    align?: RCAxisTitleConfigAlign;
    gap?: number;
    offset?: number;
    rotation?: RCAxisTitleConfigRotation;
    backgroundStyle?: RCSvgStyles;
    style?: RCSvgStyles;
}

declare enum RCAxisTitleConfigAlign {
    MIDDLE = "middle",
    START = "start",
    END = "end"
}

declare type RCAxisTitleConfigRotation = 0 | 90 | 270 | -90 | -270;

declare type RCAxisType = 'category' | 'linear' | 'log' | 'time';

declare type RCBarSeriesConfig = {
    type: 'bar';
    xAxis?: string;
    yAxis?: string;
    data: number[];
    tooltip?: RCSeriesTooltipConfig;
    baseValue?: number;
    nullAsBase?: boolean;
    color?: string;
    belowStyle?: RCSvgStyles;
} & RCSeriesPointConfig & RCSeriesConfigBase;

declare class RCBody extends ChartObject$1<RealChartItem, RCBodyConfig> {
    static readonly PROP_CIRCULAR = "circular";
    static readonly PROPINFOS: IPropInfo[];
    private _circular;
    constructor(chart: RealChartItem);
    get circular(): boolean;
    set circular(value: boolean);
    getChartConfig(context: PrintContext): RCBodyConfig;
    getSaveLabel(): string;
    protected _doDefaultInit(): void;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
}

/**
 *  Body
 */
declare type RCBodyConfig = {
    circular?: boolean;
};

declare interface RCCategoryAxisConfig extends RCAxisConfigBase {
    type: 'category';
    categories: string[];
    unit?: string;
}

/**
 * RealChart
 */
declare type RCConfig = {
    polar: boolean;
    inverted?: boolean;
    title?: RCTitleConfig;
    subtitle?: RCSubtitleConfig;
    legend?: RCLegendConfig;
    options?: RCOptionsConfig;
    xAxis: RCAxisConfig[];
    yAxis: RCAxisConfig[];
    series: RCSeriesConfig[];
    body?: RCBodyConfig;
};

declare type RCCreditsConfig = {
    visible?: boolean;
    text?: string;
    url?: string;
    align?: 'left' | 'right' | 'center';
    verticalAlign?: 'top' | 'middle' | 'bottom';
    offsetX?: number;
    offsetY?: number;
    floating?: boolean;
    style?: RCSvgStyles;
};

declare class RCLegend extends ChartObject$1<RealChartItem, RCLegendConfig> {
    static readonly PROP_ALIGN_BASE = "alignBase";
    static readonly PROP_ALIGN_BASE_DEFAULT_VALUE = RCLegendAlignBase.BODY;
    static readonly PROP_GAP = "gap";
    static readonly PROP_GAP_DEFAULT_VALUE = 6;
    static readonly PROP_ITEM_GAP = "itemGap";
    static readonly PROP_ITEM_GAP_DEFAULT_VALUE = 8;
    static readonly PROP_ITEMS_ALIGN = "itemsAlign";
    static readonly PROP_ITEMS_ALIGN_DEFAULT_VALUE = RCLegendItemsAlign.CENTER;
    static readonly PROP_ITEMS_PER_LINE = "itemsPerLine";
    static readonly PROP_LAYOUT = "layout";
    static readonly PROP_LAYOUT_DEFAULT_VALUE = RCLegendLayout.AUTO;
    static readonly PROP_LINE_GAP = "lineGap";
    static readonly PROP_LINE_GAP_DEFAULT_VALUE = 4;
    static readonly PROP_LOCATION = "location";
    static readonly PROP_LOCATION_DEFAULT_VALUE = RCLegendLocation.BOTTOM;
    static readonly PROP_MARKER_GAP = "markerGap";
    static readonly PROP_MARKER_GAP_DEFAULT_VALUE = 4;
    static readonly PROP_MARKER_SIZE = "markerSize";
    static readonly PROP_MARKER_SIZE_DEFAULT_VALUE = 10;
    static readonly PROP_MAX_HEIGHT = "maxHeight";
    static readonly PROP_MAX_WIDTH = "maxWdith";
    static readonly PROP_BACKGROUND_STYLE = "backgroundStyle";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly STYLES;
    private static readonly BACKGROUND_STYLES;
    private _alignBase;
    private _gap;
    private _itemGap;
    private _itemsAlign;
    private _itemsPerLine;
    private _layout;
    private _lineGap;
    private _location;
    private _markerGap;
    private _markerSize;
    private _maxHeight;
    private _maxWidth;
    private _backgroundStyle;
    get alignBase(): RCLegendAlignBase;
    set alignBase(value: RCLegendAlignBase);
    get gap(): number;
    set gap(value: number);
    get itemGap(): number;
    set itemGap(value: number);
    get itemsAlign(): RCLegendItemsAlign;
    set itemsAlign(value: RCLegendItemsAlign);
    get itemsPerLine(): number;
    set itemsPerLine(value: number);
    get layout(): RCLegendLayout;
    set layout(value: RCLegendLayout);
    get lineGap(): number;
    set lineGap(value: number);
    get location(): RCLegendLocation;
    set location(value: RCLegendLocation);
    get markerGap(): number;
    set markerGap(value: number);
    get markerSize(): number;
    set markerSize(value: number);
    get maxHeight(): number;
    set maxHeight(value: number);
    get maxWidth(): number;
    set maxWidth(value: number);
    getChartConfig(context: PrintContext): RCLegendConfig;
    getSaveLabel(): string;
    getCollapsedPropCategories(): string[];
    protected _doDefaultInit(): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    getSubStyleProps(prop: string): IPropInfo[];
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    getPropDomain(prop: IPropInfo): any[];
}

declare enum RCLegendAlignBase {
    CHART = "chart",
    PARENT = "parent",
    BODY = "body"
}

declare type RCLegendConfig = {
    visible?: boolean;
    alignBase?: RCLegendAlignBase;
    gap?: number;
    itemGap?: number;
    itemsAlign?: RCLegendItemsAlign;
    itemsPerLine?: number;
    layout?: RCLegendLayout;
    lineGap?: number;
    location?: RCLegendLocation;
    markerGap?: number;
    markerSize?: number;
    maxHeight?: string | number;
    maxWidth?: string | number;
    backgroundStyle?: RCSvgStyles | string;
    style?: RCSvgStyles | string;
};

declare enum RCLegendItemsAlign {
    START = "start",
    CENTER = "center",
    END = "end"
}

declare enum RCLegendLayout {
    AUTO = "auto",
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical"
}

declare enum RCLegendLocation {
    TOP = "top",
    BOTTOM = "bottom",
    LEFT = "left",
    RIGHT = "right",
    BODY = "body"
}

declare interface RCLinearAxisConfig extends RCAxisConfigBase {
    type: 'linear';
    strictMax?: number;
    strictMin?: number;
}

declare type RCLineSeriesConfig = {
    type: 'line';
    xAxis?: string;
    yAxis?: string;
    data: number[];
    marker?: RCSeriesMarkerConfig;
    tooltip?: RCSeriesTooltipConfig;
    baseValue?: number;
    nullAsBase?: boolean;
    color?: string;
    belowStyle?: RCSvgStyles;
} & Pick<RCSeriesPointConfig, 'pointLabel' | 'pointColors'> & RCSeriesConfigBase;

declare interface RCLogAxisConfig extends RCAxisConfigBase {
    type: 'log';
    strictMax?: number;
    strictMin?: number;
}

declare class RCOptions extends ChartObject$1<RealChartItem, RCOptionsConfig> {
    static readonly PROP_ANIMATABLE = "animatable";
    static readonly PROP_CREDITS = "credits";
    static readonly PROPINFOS: IPropInfo[];
    private _animatable;
    constructor(chart: RealChartItem);
    get animatable(): boolean;
    set animatable(value: boolean);
    getChartConfig(context: PrintContext): RCOptionsConfig;
    getSaveLabel(): string;
    protected _doDefaultInit(): void;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
}

/**
 *  Options
 */
declare type RCOptionsConfig = {
    animatable?: boolean;
    credits?: RCCreditsConfig;
};

declare type RCPieSeriesConfig = {
    type: 'pie';
    xAxis?: string;
    yAxis?: string;
    data: number[];
    tooltip?: RCSeriesTooltipConfig;
    radius?: string | number;
    legendByPoint?: boolean;
} & Pick<RCSeriesPointConfig, 'pointLabel' | 'pointColors'> & RCSeriesConfigBase;

declare abstract class RCSeries<C = RCSeriesConfig> extends ChartSeries$1<RealChartItem, C> {
    static readonly PROP_TYPE = "type";
    static readonly PROP_NAME = "name";
    static readonly PROP_NAME_FIELD = "nameField";
    static readonly PROP_X_AXIS = "xAxis";
    static readonly PROP_Y_AXIS = "yAxis";
    static readonly PROPINFOS: IPropInfo[];
    private _name;
    private _nameField;
    private _xAxis;
    private _yAxis;
    constructor(collection: RCSeriesCollection);
    get name(): string;
    set name(value: string);
    get nameField(): string;
    set nameField(value: string);
    get xAxis(): string;
    set xAxis(value: string);
    get yAxis(): string;
    set yAxis(value: string);
    abstract getChartConfig(context: PrintContext): C;
    protected getSeriesName(context: PrintContext): string;
    getPropDomain(prop: IPropInfo): any[];
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: ReportTarget): void;
}

declare class RCSeriesCollection extends ChartSeriesCollection$1<RealChartItem, RCSeriesConfig> {
    getChartConfig(context: PrintContext): RCSeriesConfig[];
    protected _createSeries(loader: IReportLoader, src: ReportSource): RCSeries;
    protected _seriesChanged(): void;
}

declare type RCSeriesConfig = RCBarSeriesConfig | RCLineSeriesConfig | RCPieSeriesConfig;

declare interface RCSeriesConfigBase {
    type: RCSeriesType;
    name: string;
    visible: boolean;
    style?: RCSvgStyles;
}

declare interface RCSeriesMarkerConfig {
    visible?: boolean;
    radius?: number;
    shape?: RCSeriesMarkerShape;
    style?: RCSvgStyles;
}

declare enum RCSeriesMarkerShape {
    CIRCLE = "circle",
    DIAMOND = "diamond",
    SQUARE = "square",
    TRIANGLE = "triangle",
    STAR = "star",
    ITRIANGLE = "itriangle",
    RECTANGLE = "rectangle"
}

declare interface RCSeriesPointConfig {
    pointLabel?: RCSeriesPointLabelConfig;
    pointPadding?: number;
    colorByPoint?: boolean;
    pointColors?: boolean | string[];
}

declare interface RCSeriesPointLabelConfig {
    visible?: boolean;
    text?: string;
    style?: RCSvgStyles;
    offset?: number;
    position?: RCSeriesPointLabelPosition;
    numberFormat?: string;
    numberSymbols?: string;
}

declare enum RCSeriesPointLabelPosition {
    AUTO = "auto",
    FOOT = "foot",
    HEAD = "head",
    INSIDE = "inside",
    INSIDEFIRST = "insideFirst",
    OUTSIDE = "outside",
    OUTSIDEFIRST = "outsideFirst"
}

declare interface RCSeriesTooltipConfig {
    visible?: boolean;
    text?: string;
    numberFormat?: string;
    timeFormat?: string;
    hideDelay?: number;
    followPointer?: boolean;
    style?: RCSvgStyles;
}

declare type RCSeriesType = 'bar' | 'line' | 'pie';

declare class RCSubtitle extends ChartTextObject$1<RealChartItem, RCSubtitleConfig> {
    private static readonly STYLES;
    constructor(chart: RealChartItem);
    getChartConfig(context: PrintContext): RCSubtitleConfig;
    getSaveLabel(): string;
    getCollapsedPropCategories(): string[];
    protected _doDefaultInit(): void;
    protected _getStyleProps(): string[];
}

declare interface RCSubtitleConfig {
    visible?: boolean;
    text: string;
    style?: RCSvgStyles;
}

/**
 * Etc
 */
declare interface RCSvgStyles {
    fill?: string;
    fillOpacity?: string;
    fontFamily?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string;
    stroke?: string;
    strokeWidth?: string;
    strokeDasharray?: string;
    rx?: string;
}

declare interface RCTimeAxisConfig extends RCAxisConfigBase {
    type: 'time';
    strictMax?: number;
    strictMin?: number;
}

declare class RCTitle extends ChartTextObject$1<RealChartItem, RCTitleConfig> {
    private static readonly STYLES;
    constructor(chart: RealChartItem);
    getChartConfig(context: PrintContext): RCTitleConfig;
    getSaveLabel(): string;
    getCollapsedPropCategories(): string[];
    protected _doDefaultInit(): void;
    protected _getStyleProps(): string[];
}

declare interface RCTitleConfig {
    visible?: boolean;
    text: string;
    style?: RCSvgStyles;
}

declare class RCXAxisCollection extends RCAxisCollection {
    get outlineLabel(): string;
    get direction(): RCAxisDirection;
    get displayPath(): string;
    getSaveLabel(): string;
    protected _createAxis(loader: IReportLoader, src: ReportSource): RCAxis;
    protected _axesChanged(): void;
}

declare class RCYAxisCollection extends RCAxisCollection {
    get outlineLabel(): string;
    get direction(): RCAxisDirection;
    get displayPath(): string;
    getSaveLabel(): string;
    protected _createAxis(loader: IReportLoader, src: ReportSource): RCAxis;
    protected _axesChanged(): void;
}

/**
 * Chart Item
 */
declare class RealChartItem extends ChartItem<RCConfig> {
    static readonly PROP_INVERTED = "inverted";
    static readonly PROP_INVERTED_DEFUALT_VALUE = false;
    static readonly PROP_X_AXES = "xAxes";
    static readonly PROP_Y_AXES = "yAxes";
    static readonly PROP_SERIES_COLLECTION = "serieCollection";
    static readonly PROP_TITLE = "title";
    static readonly PROP_SUBTITLE = "subtitle";
    static readonly PROP_LEGEND = "legend";
    static readonly PROP_OPTIONS = "options";
    static readonly PROP_POLAR = "polar";
    static readonly PROP_BODY = "body";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "RealChart";
    private _inverted;
    private _xAxes;
    private _yAxes;
    private _seriesCollection;
    private _title;
    private _subtitle;
    private _legend;
    private _options;
    private _body;
    private _polar;
    constructor(name: string);
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get inverted(): boolean;
    set inverted(value: boolean);
    get xAxes(): RCXAxisCollection;
    get yAxes(): RCYAxisCollection;
    get seriesCollection(): RCSeriesCollection;
    get title(): RCTitle;
    get subtitle(): RCSubtitle;
    get legend(): RCLegend;
    get options(): RCOptions;
    get polar(): boolean;
    set polar(value: boolean);
    get body(): RCBody;
    addNewXAxis(type: RCAxisType): RCAxis;
    addNewYAxis(type: RCAxisType): RCAxis;
    addAxis(axis: RCAxis): void;
    removeAxis(axis: RCAxis): void;
    addNewSeries(type: RCSeriesType): RCSeries;
    addSeries(series: RCSeries): void;
    removeSeries(series: RCSeries): void;
    selectSeries(series: RCSeries | null): void;
    emitXAxesChanged(): void;
    emitYAxesChanged(): void;
    emitSeriesChanged(): void;
    getChartConfig(context: PrintContext): RCConfig;
    getCollapsedPropCategories(): string[];
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    protected _datable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    canAddTo(group: ReportGroupItem): boolean;
}

declare class RealChartItemElement extends ReportItemElement<RealChartItem> implements AsyncLoadable {
    private _chartDiv;
    private _wrapper;
    protected _getCssSelector(): string;
    get debugLabel(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContext): void;
    isDom(dom: HTMLElement): boolean;
    loadAsync(): Promise<void>;
    private $_prepareWrapper;
    private $_layoutWrapper;
}

/**
 * RealChartItem 선택도구
 */
declare class RealChartMarquee extends EditMarquee<RealChartItemElement> {
    private static readonly STYLE_NAME;
    private static readonly ITEM_WIDTH;
    private static readonly ITEM_HEIGHT;
    private static readonly ITEM_GAP;
    private static readonly ITEM_MARGIN;
    private static readonly X_AXIS_TAG;
    private static readonly Y_AXIS_TAG;
    private static readonly SERIES_TAG;
    static getTarget(target: ReportPageItem, dom: HTMLElement): IEditMarqueeTarget | null;
    private _chartItem;
    private _xAxisItems;
    private _yAxisItems;
    private _seriesItems;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doLayout(doc: Document, dom: HTMLElement, r: Rectangle): void;
    private $_layoutChart;
    private $_layoutXAxisItems;
    private $_layoutYAxisItems;
    private $_layoutSeriesItems;
    private $_prepareItems;
    private $_layoutAxisItem;
}

/* Excluded from this release type: Rectangle */

declare class RemoteInfo extends Base {
}

/**
 * Report model.
 */
declare class Report_2 extends ReportBase<ReportPage> {
    onDesignDataManagerNameChanged(dm: DesignDataManager, data: IReportData, oldName: string): void;
    onDesignDataManagerFieldNameChanged(dm: DesignDataManager, data: IReportData, newName: string, oldName: string): void;
    addCollectionItem(collection: IPropertySource): void;
    setSaveTagging(tag: string): Report_2;
    addSubBandPage(): SubBandPage;
    movePage(index: number, newIndex: number): void;
    internalAddSubBandPage(page?: SubBandPage): SubBandPage;
    internalMovePage(index: number, newIndex: number): void;
    prepareLayout(page?: number): void;
    afterLayout(): void;
    preparePrint(ctx: PrintContext): void;
    itemByName(name: string): ReportItem;
    itemOf(hash: string): ReportItem;
    addItem(parent: ReportGroupItem, item: ReportItem, index?: number): boolean;
    moveCollectionItem(collection: ReportItemCollection<any>, from: number, to: number): void;
    addChartAxis(chart: RealChartItem, type: RCAxisType, direction: RCAxisDirection): RCAxis;
    removeChartAxis(axis: RCAxis): RCAxis;
    addChartSeries(chart: RealChartItem, type: RCSeriesType): RCSeries;
    removeChartSeries(series: RCSeries): RCSeries;
    addHichartSeries(chart: HichartItem, seriesType: string): HichartSeries;
    addHichartPlotLine(axis: HichartAxis, config?: object): HichartAxisPlotLine;
    addHichartPlotBand(axis: HichartAxis, config?: object): HichartAxisPlotBand;
    /**
     * 테이블 행을 추가한다.
     *
     * @param table - 테이블 객체. TableContainer 혹은 TableBand 구성 테이블들.
     * @param row - 추가 위치.
     */
    addTableRow(table: TableBase, row: number): void;
    /**
     * 테이블 행들을 이동시킨다.
     *
     * @param table - 테이블 객체. TableContainer 혹은 TableBand 구성 테이블들.
     * @param row - 이동할 시작 행 위치.
     * @param count - 이동할 행 개수.
     * @param delta - 이동 간격. 음수면 위로, 양수면 아래로 이동한다.
     * @param alert - true로 설정하면, 이동 불가능한 상태일 때 예외를 발생시킨다.
     */
    moveTableRows(table: TableBase, row: number, count: number, delta: number, alert?: boolean): void;
    moveTableRowsToNearest(table: TableBase, row: number, count: number, delta: number, alert?: boolean): void;
    /**
     * 테이블이나 테이블밴드에 컬럼을 추가한다.
     * 병함된 셀을 분할해서 이동할 수 없다.
     * 또, 이동 후 병합된 셀을 분할시킬 수 없다.
     *
     * @param table - 테이블 혹은 테이블밴드 객체.
     * @param col - 추가 위치.
     */
    addTableColumn(table: TableContainer | TableBand, col: number): void;
    /**
     * 테이블이나 테이블밴드의 컬럼들을 이동시킨다.
     * 병함된 셀을 분할해서 이동할 수 없다.
     * 또, 이동 후 병합된 셀을 분할시킬 수 없다.
     *
     * @param table - 테이블 혹은 테이블밴드 객체.
     * @param col - 이동할 시작 컬럼 위치.
     * @param count - 이동할 컬럼 개수.
     * @param delta - 이동 간격. 음수면 왼쪽으로, 양수면 오른쪽으로 이동한다.
     */
    moveTableColumns(table: TableContainer | TableBand, col: number, count: number, delta: number): void;
    moveTableColumnsToNearest(table: TableContainer | TableBand, col: number, count: number, delta: number): void;
    /**
     * 테이블셀에 아이템을 추가한다.
     * @returns 추가될 경우 아이템 정보 반환
     */
    addTableCell(table: TableBase, item: ReportItem, row: number, col: number, callback?: (item: ReportItem) => void): ReportItem;
    addCrosstabField(collection: CrosstabFieldCollection<any>, field: string): void;
    addTableBandColumn(band: TableBand, config: any, index?: number): void;
    addTableBandGroup(band: TableBand, config: any, index?: number): void;
    addSimpleBandGroup(band: SimpleBand, config: any, index?: number): void;
    canMergeSelection(selection: ISelectionSource): boolean;
    mergeSelection(selection: TableSelection): void;
    canUnmergeCell(cell: TableCell): boolean;
    unmergeCell(cell: TableCell): void;
    search(key: string, options?: FindOptions): FindResult[];
    applyDropResult(item: ReportItem | TableCell, r: IDropResult): void;
    pasteItems(sources: string, target: ReportPageItem): ReportItem[];
    /**
     * 아이템의 위치를 변경한다. Undo 가능하다.
     *
     * @param item - 아이템 객체.
     * @param newX - x 위치.
     * @param newY - y 위치.
     */
    moveItem(item: ReportItem, newX: any, newY: any): void;
    moveItemDir(item: ReportItem, dir: string, newPt: number): void;
    resizeItem(item: ReportItem, orgWidth: any, orgHeight: any, width: number, height: number, dx: number, dy: number): void;
    resizeSpace(item: SpaceItem, orgSize: any, size: number, delta: number): void;
    resizeAndMove(item: ReportItem, orgWidth: any, orgHeight: any, width: number, height: number, dx: number, dy: number, newX: any, newY: any): void;
    alignItem(item: ReportPageItem, align: 'left' | 'top' | 'center' | 'right' | 'bottom'): void;
    alignItems(items: ReportPageItem[], align: 'left' | 'top' | 'center' | 'right' | 'bottom'): void;
    clearTexts(items: ReportItem[]): void;
    /**
     * col + 1 컬럼의 너비를 줄이거나 늘이면서 col 컬럼의 너비를 변경한다.
     */
    adjustColumnWidths(table: ITable, col: number, colPoints: number[], newSize: number): void;
    /**
     * row + 1 행의 높이를 줄이거나 늘이면서 row 행의 높이를 변경한다.
     */
    adjustRowHeights(table: TableBase, row: number, rowPoints: number[], newSize: number): void;
    protected _createReportLoader(): IReportLoader;
    protected _createPage(): ReportPage;
    protected _createSubBandPage(): SubBandPage;
    protected _loadPage(loader: IReportLoader, source: any): ReportPage;
    private $_addSubBandPage;
}

declare enum ReportAddStyle {
    CLICK = "click",
    DRAG = "drag"
}

declare enum ReportArchiveType {
    EXCEL = "excel",
    PDF = "pdf",
    IMAGE = "image"
}

declare abstract class ReportBandItem extends ReportGroupItem {
    canAddTo(group: ReportGroupItem): boolean;
    canResize(dir: ResizeDirection): boolean;
    canPageBreak(): boolean;
}

declare abstract class ReportBase<T extends ReportPageBase = ReportPageBase> extends EventAware implements IEditCommandStackOwner, IPropertyContainer, IAssetOwner {
    static readonly RESET = "onReportReset";
    static readonly PAPER_CHANGED = "onReportPaperChanged";
    static readonly PAGE_ADDED = "onReportPageAdded";
    static readonly PAGE_REMOVED = "onReportPageRemoved";
    static readonly CHANGED = "onReportChanged";
    static readonly ITEM_ADD = "onReportItemAdd";
    static readonly ITEM_ADDED = "onReportItemAdded";
    static readonly ITEMS_ADDED = "onReportItemsAdded";
    static readonly ITEM_REMOVED = "onReportItemRemoved";
    static readonly ITEMS_REMOVED = "onReportItemsRemoved";
    static readonly ITEM_CHANGED = "onReportItemChanged";
    static readonly ITEM_MOVED = "onReportItemMoved";
    static readonly ITEM_FOLDED = "onReportItemFolded";
    static readonly COLLECTION_CHANGED = "onReportCollectionChanged";
    static readonly COMMANDS_STACK_CHANGED = "onReportCommandStackChanged";
    static readonly COMMANDS_STACK_ERROR = "onReportCommandStackError";
    static readonly DIRTY_CHANGED = "onReportDirtyChanged";
    static readonly DATA_ADDED = "onReportDataAdded";
    static readonly DATA_REMOVED = "onReportDataRemoved";
    static readonly DATA_UPDATED = "onReportDataUpdated";
    static readonly DATA_NAME_CHANGED = "onReportDataNameChanged";
    static readonly DATA_FIELD_NAME_CHANGED = "onReportDataFieldNameChanged";
    static readonly ASSET_ADDED = "onReportAssetAdded";
    static readonly ASSET_REMOVED = "onReportAssetRemoved";
    static readonly ASSET_UPDATED = "onReportAssetUpdated";
    static readonly CELL_MERGED = "onReportCellMerged";
    static readonly ALERT = "onReportAlert";
    static readonly LANGUAGE_ADDED = "onReportLanguageAdded";
    static readonly LANGUAGE_REMOVED = "onReportLanguageRemoved";
    static readonly LANGUAGE_FIELD_ADDED = "onReportLanguageFieldAdded";
    static readonly LANGUAGE_FIELD_REMOVED = "onReportLanguageFieldRemoved";
    static readonly DEFAULT_LANGUAGE_CHANGED = "onReportDefaultLanguageChanged";
    static isReportSource(source: any): boolean;
    private _info;
    private _remoteInfo;
    private _unit;
    private _assetRoot;
    protected _assets: AssetManager;
    private _fontManager;
    private _data;
    protected _designData: DesignDataManager;
    protected _i18n: I18nManager;
    private _designTime;
    protected _loader: IReportLoader;
    protected _commands: EditCommandStack;
    protected _loading: boolean;
    protected _invalids: {
        item: ReportItem;
        reason: string;
    }[];
    protected _reportItemRegistry: ReportItemRegistry;
    private _root;
    private _nextPage;
    protected _pages: T[];
    designTag: any;
    models: Record<number, ReportItem>;
    constructor(designTime?: boolean, source?: any);
    protected _doInit(designTime: boolean): void;
    _doDispose(): void;
    onI18nManagerLanguageAdded(i18n: I18nManager, language: string): void;
    onI18nManagerLanguageRemoved(i18n: I18nManager, language: string): void;
    onI18nManagerFieldAdded(i18n: I18nManager, field: string): void;
    onI18nManagerFieldRemoved(i18n: I18nManager, field: string): void;
    onI18nManagerDefaultLanguageChanged(i18n: I18nManager, language: string): void;
    onDesignDataManagerDataAdded(dm: DesignDataManager, data: IReportData, silent: boolean, index: number): void;
    onDesignDataManagerDataRemoved(dm: DesignDataManager, data: IReportData): void;
    onDesignDataManagerDataUpdated(dm: DesignDataManager, data: IReportData): void;
    onDesignDataManagerNameChanged(dm: DesignDataManager, data: IReportData, oldName: string): void;
    onDesignDataManagerFieldNameChanged(dm: DesignDataManager, data: IReportData, newName: string, oldName: string): void;
    editCommandStackChanged(stack: EditCommandStack, cmd: EditCommand, undoable: boolean, redoable: boolean): void;
    editCommandStackDirtyChanged(stack: EditCommandStack): void;
    editCommandError(cmd: EditCommand): void;
    addCollectionItem(collection: IPropertySource): void;
    /**
     * 리포트 아이템을 제거한다.
     *
     * @param item - 제거할 리포트 아이템 객체.
     */
    removeItem(item: ReportPageItem): void;
    /**
     * 리포트 아이템들을 제거한다.
     *
     * @param items - 제거할 리포트 아이템 객체들의 배열.
     */
    removeItems(items: ReportPageItem[]): void;
    assetItemAdded(item: AssetItem): void;
    assetItemRemoved(item: AssetItem): void;
    assetItemUpdated(item: AssetItem): void;
    protected onPageItemAdded(source: IEventAware, item: ReportPageItem, index: number, silent: boolean): void;
    protected onPageItemsAdded(source: IEventAware, items: ReportPageItem[], index: number): void;
    protected onPageItemRemoved(source: IEventAware, item: ReportPageItem, oldParent: ReportGroupItem | ReportItemCollection): void;
    protected onPageItemsRemoved(source: IEventAware, items: ReportPageItem[]): void;
    protected onPageItemChanged(source: IEventAware, item: ReportPageItem, prop: string, value: any, oldValue: any): void;
    protected onPageCollectionChanged(source: IEventAware, collection: ReportItemCollection): void;
    get type(): ReportType;
    /** designTime */
    get designTime(): boolean;
    /** info */
    get info(): ReportInfo;
    /** remoteInfo */
    get remoteInfo(): RemoteInfo;
    /** paper */
    get paper(): PaperOptions;
    /** unit */
    get unit(): PrintUnit;
    set unit(value: PrintUnit);
    /** assetRoot */
    get assetRoot(): string;
    set assetRoot(value: string);
    /* Excluded from this release type: loader */
    /** data */
    get data(): IReportDataProvider;
    /** desingData */
    get designData(): DesignDataManager;
    /** i18n */
    get i18n(): I18nManager;
    /** canUndo */
    get canUndo(): boolean;
    /** canRedo */
    get canRedo(): boolean;
    /** dirty */
    get dirty(): boolean;
    /** reportItemRegistry */
    get reportItemRegistry(): ReportItemRegistry;
    /** assets */
    get assets(): AssetManager;
    /** fontManager */
    get fontManager(): FontManager;
    /**
     * Setter Injection인 이유는 리소스는 외부에서 한번만 생성후에 관리한다.
     * 새로운 리포트 모델을 생성할 때 폰트관련 리소스는 외부 정보이므로 주입받아서 사용하자.
     */
    set fontManager(fontManager: FontManager);
    /** editing */
    get editing(): ReportEditableObject<ReportRootItem>;
    get root(): ReportRootItem;
    get page(): T;
    get pageCount(): number;
    get pages(): T[];
    getPage(index: number): T;
    isSheet(): boolean;
    load(src: any): ReportBase;
    save(options?: ReportSaveOptions): object;
    abstract setSaveTagging(tag: string): ReportBase;
    abstract itemByName(name: string): ReportItem;
    abstract itemOf(hash: string): ReportItem;
    protected _loadPage(loader: IReportLoader, source: any): T;
    private $_loadPages;
    protected _doLoad(src: any): void;
    getImageUrl(url: string): string;
    clearHistory(): void;
    closeHistory(): void;
    peekCommand(): EditCommand;
    undo(): boolean;
    redo(): boolean;
    execute(cmd: EditCommand | EditCommand[]): boolean;
    getEditHistory(all?: boolean): EditCommand[];
    getCommand(id: number): EditCommand;
    renameData(data: IReportData, newName: string): boolean;
    /**
     * @param silent true면 panel에 data 상세 페이지를 표시하지 않는다.
     */
    addData(data: IReportData, silent: boolean): boolean;
    removeData(data: string | IReportData): boolean;
    saveSimpleData(data: SimpleData, values: any): void;
    internalAddPage(page?: T): T;
    internalRemovePage(page: T): boolean;
    _getNextPageIndex(): number;
    addPage(): ReportPage;
    removePage(index: number): boolean;
    getInvalids(): {
        item: ReportItem;
        reason: string;
    }[];
    forceDirty(): void;
    setItemProperty(item: ReportPageItem, prop: string, value: any): void;
    setItemProperties(item: ReportPageItem, props: ConfigObject): void;
    setItemsProperties(items: ReportItem[], props: ConfigObject): void;
    resetItemProperty(item: ReportPageItem, prop: IPropInfo): boolean;
    setItemsProperty(items: ReportPageItem[], prop: string, value: any): void;
    setItemStyle(item: ReportPageItem, style: string, value: any): void;
    setItemsStyle(items: ReportPageItem[], style: string, value: any): void;
    setChildStyleProperty(item: ReportItem, prop: string, style: string, value: any): void;
    setItemsChildStyleProperty(items: ReportItem[], prop: string, style: string, value: any): void;
    foldedChanged(item: ReportItem): void;
    /**
     * i18nManager command 모음
     */
    addLanguage(language: string): void;
    removeLanguage(language: string): void;
    addLanguageField(field: string): void;
    removeLanguageField(field: string): void;
    updateLanguageField(oldField: string, newField: string): void;
    getLangaugeFieldValue(language: string, field: string): string;
    updateLanguageFieldValue(language: string, field: string, value: string): void;
    changeItemIndex(item: ReportItem, newIndex: number): boolean;
    protected _doSaveItem(item: ReportItem, obj: any, clipboard: boolean): boolean;
    copyItems(items: ReportItem[], clipboard: boolean): string;
    getMaxPageCount(): number;
    addAsset(group: AssetGroup | string, item: AssetItem): void;
    removeAsset(item: AssetItem): void;
    defaultInit(item: ReportItem, group: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    applyDropResult(item: ReportItem | TableCell, r: IDropResult): void;
    addItem(parent: ReportGroupItem, item: ReportItem, index?: number): boolean;
    checkPasteTo(target: ReportPageItem): void;
    isUsed(data: IReportData): boolean;
    isFirstPageLandscape(): boolean;
    abstract prepareLayout(page: number): void;
    protected abstract _createReportLoader(): IReportLoader;
    protected abstract _createPage(): T;
    protected _createReportInfo(report: ReportBase): ReportInfo;
    protected _createReportRootItem(report: ReportBase): ReportRootItem;
    protected _attachPage(page: T): T;
    private $_addPage;
    protected _insertPage(page: T, index: number): void;
    protected _resetPageIndices(): void;
    private $_updateReportItemsLanguageField;
    private $_refreshInvalids;
    protected _fireReset(): void;
    protected _firePaperChanged(): void;
    protected _fireItemAdd(group: ReportGroupItem, item: ReportItem, index: number): boolean;
    protected _fireItemMoved(item: ReportItem, index: number): void;
    protected _fireCollectionChanged(collection: ReportItemCollection<any>): void;
    protected _fireCellMerged(cell: TableCell): void;
    protected _fireAlert(item: ReportItem, message: string): void;
}

/**
 * Report container base.
 */
declare abstract class ReportContainer<T extends PrintContextBase> extends VisualContainer {
    static readonly CLASS_NAME = "rr-report-container";
    protected _context: T;
    constructor(containerId: string | HTMLDivElement);
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _doLayout(bounds: Rectangle): void;
    protected abstract _createContext(): T;
}

declare type ReportContext = {
    name: string;
    isModified: boolean;
};

declare abstract class ReportData extends Base implements IPropertySource {
    static readonly PROP_NAME = "name";
    static readonly PROP_INFOS: {
        name: string;
        category: PropCategory;
        type: typeof StringProperty;
        multiple: boolean;
        default: any;
    }[];
    private _name;
    private _dp;
    index: number;
    _deleted: boolean;
    constructor(name: string, dp: IReportDataProvider);
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    isDominantProp(prop: IPropInfo): boolean;
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyleProperty(prop: string): void;
    setStyleProperty(prop: string, value: any): void;
    setItemsStyleProperty(sources: IPropertySource[], prop: string, value: any): void;
    getSubStyleProperty(prop: string, style: string): void;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    isCollectionProp(): boolean;
    isEditableCollection(): boolean;
    isCollectionItem(): boolean;
    getCollectionLabel(): string;
    getPropertySources(): IPropertySource[];
    getPopupPropLabel(prop: string): string;
    get provider(): IReportDataProvider;
    get designTime(): boolean;
    get isBand(): boolean;
    /** name */
    get name(): string;
    set name(value: string);
    get displayPath(): string;
    preparePrint(ctx: PrintContextBase, design: boolean): void;
}

declare enum ReportDataLinkFormat {
    JSON = "JSON",
    CSV = "CSV",
    SHEET = "SHEET"
}

/**
 * 출력 시 데이터를 제공한다.
 */
declare class ReportDataProvider extends Base implements IReportDataProvider {
    private _dataMap;
    private _contextData;
    protected _doDispose(): void;
    preparePrint(ctx: PrintContext): void;
    getAll(): IReportData[];
    get(name: string): IReportData;
    getContextValue(path: string): any;
    /**
     * @param path data name + "." + data path
     */
    getValue(path: string, row: number): any;
    getValueAt(data: string, path: string, row: number): any;
    getFieldValues(data: string, field: string, rows?: number[]): any[];
    clear(): ReportDataProvider;
    register(name: string, data: IReportData): ReportDataProvider;
    load(source: any, clear?: boolean): ReportDataProvider;
    remove(name: string): void;
}

export declare class ReportDesigner {
    private readonly _core;
    constructor(containerId: string | HTMLDivElement, options?: ReportDesignerOptions, server?: IReportServer, licenseKey?: string);
    get designMode(): boolean;
    set designMode(mode: boolean);
    /**
     * 웹 디자이너에서 사용중인 리포트 타입 'report' | 'email' | 'sheet'
     */
    get reportType(): ReportDesigner_2['reportType'];
    /**
     * 웹 디자이너의 기본 폰트 설정
     */
    set defaultFont(fontName: string);
    get reportName(): string;
    get dirty(): boolean;
    dispose(): null;
    loadReport(source: any, options?: ReportOptions_2): void;
    setReportTemplates(templates: UserReportCategoryTemplate[]): Promise<void>;
    setDataTemplates(templates: UserDataTemplateGroup[]): Promise<void>;
    setAssetTemplates(templates: UserAssetTemplateGroup[]): Promise<void>;
    registerFonts(fonts: UserFontSource[], defaultFont?: string): Promise<void>;
    setDesignMode(previewMode: any): void;
    newReportTemplate(): void;
    getReport(options?: ReportSaveOptions): Record<string, any>;
    saveReport(): Promise<void>;
    openReport(): void;
    load(): void;
    download(): void;
    shareReport(): void;
    exportExcel(): void;
    exportHtml(): Promise<void>;
    preview(): void;
    openUploadArchiveDialog(): void;
    print(): void;
    showAbout(): void;
    addListener(listener: object): void;
}

/**
 * Report designer control.
 */
declare class ReportDesigner_2 extends VisualContainer {
    static readonly CLASS_NAME = "rrd-report-designer";
    static readonly PROPERTY_SECTION_START_WIDTH: number;
    static readonly PREVIEW_CONTAINER_ID = "rrd-report-designer-preview";
    static readonly DIALOG_CLOSED = "onDialogClosed";
    static readonly REPORT_COMMAND_STACK_CHANGED = "onReportCommandStackChanged";
    static readonly REPORT_SAVED = "onReportSaved";
    static readonly REPORT_LOADED = "onReportLoaded";
    static readonly NEW_DLG_SUBMITTED = "onNewDialogSubmit";
    private _designMode;
    private _previewMode;
    private _optionsVisible;
    private _outlineVisible;
    private _propertyVisible;
    private _propertyMode;
    private _panelVisible;
    private _panelCollapsed;
    private _itembarMode;
    private _panelMode;
    private _report;
    private _fontManager;
    private _defaultFont;
    private _server;
    private _isRemote;
    private _options;
    private _context;
    private _contextMenu;
    private _reportTemplateManager;
    private _dataTemplateManager;
    private _assetTemplateManager;
    private _appContainer;
    private _headerSection;
    private _toolSection;
    private _actionSection;
    private _propertySection;
    private _outlineSection;
    private _outlineContextMenu;
    private _actionSubBarSection;
    private _previewSubBarSection;
    private _statusSection;
    private _pageSection;
    private _contentSection;
    private _panelSection;
    private _header;
    private _toolBar;
    private _actionBar;
    private _statusBar;
    private _feedbackManager;
    _editor: ReportEditor;
    _emailEditor: EmailEditor;
    _excelEditor: ExcelReportEditor;
    _previewTitle: HTMLElement;
    _previewPages: HTMLElement;
    _previewScrollContainer: PreviewScrollContainer;
    _previewer: PrintContainerBase;
    _excelViewer: SheetEditor;
    private _optionsContainer;
    private _pageBar;
    private _previewPageBar;
    private _propertyContainer;
    private _actionSubBar;
    private _previewSettingSubBar;
    private _inspector;
    private _outlineContainer;
    private _panelContainer;
    private _panelContextMenu;
    private _assetTreeViewContextMenu;
    private _dataTreeViewContextMenu;
    private _assetPanel;
    private _dataPanel;
    private _scriptPanel;
    private _languagePanel;
    private _archivePanel;
    private _transferPanel;
    private _schedulePanel;
    private _popupLayer;
    private _dialogLayer;
    private _colorPickerLayer;
    private _fontFaceStyle;
    private _defaultFontStyle;
    private _selectors;
    private _popupSelector;
    private _savePanelHeight;
    private _dialog;
    private _excelTableBandDesginer;
    private _tableBandDesginer;
    private _tableContainerDesigner;
    private _previewParams;
    private _common_menu;
    constructor(containerId: string | HTMLDivElement, options: IReportDesignerOptions, server?: IReportServer);
    protected _doDispose(): void;
    private $_applyOptions;
    get options(): IReportDesignerOptions;
    get server(): IReportServer;
    /**
     * designMode
     */
    get designMode(): boolean;
    set designMode(mode: boolean);
    /**
     * actionSubBar visible
     */
    get actionSubBarVisible(): boolean;
    set actionSubBarVisible(value: boolean);
    /**
     * previewSettingSubBar visible
     */
    get previewSettingSubBarVisible(): boolean;
    set previewSettingSubBarVisible(value: boolean);
    /**
     * options page visible
     */
    get optionsVisible(): boolean;
    set optionsVisible(value: boolean);
    /**
     * panel visible
     */
    get panelVisible(): boolean;
    set panelVisible(value: boolean);
    /**
     * panel collapsed
     */
    get panelCollapsed(): boolean;
    set panelCollapsed(value: boolean);
    /**
     * itembar mode
     */
    get itembarMode(): boolean;
    set itembarMode(value: boolean);
    get outlineViewer(): OutlineViewer;
    /**
     * outline visible
     */
    get outlineVisible(): boolean;
    set outlineVisible(value: boolean);
    /**
     * property visible
     */
    get propertyVisible(): boolean;
    set propertyVisible(value: boolean);
    /**
     * propertyMode
     */
    get propertyMode(): PropertyMode;
    set propertyMode(value: PropertyMode);
    get previewMode(): PreviewMode;
    /**
     * panelMode
     */
    get panelMode(): PanelMode;
    set panelMode(value: PanelMode);
    resetPanelMode(): void;
    get activePanel(): PanelView;
    /**
     * panelMode
     */
    get header(): HeaderBarModel;
    /**
     * report
     */
    get report(): ReportBase;
    set report(value: ReportBase);
    get reportType(): ReportType;
    get reportId(): string;
    get reportTemplateManager(): IReportTemplateManager;
    get dataTemplateManager(): StockDataTemplateManager;
    get assetTemplateManager(): StockAssetTemplateNanager;
    get inspector(): PropertyInspector;
    get dataPanel(): DataPanel;
    get dialog(): DialogView;
    get fontManager(): FontManager;
    get defaultFont(): string;
    set defaultFont(fontName: string);
    get tableContainerDesigner(): TableDesigner;
    set tableContainerDesigner(value: TableDesigner);
    get excelTableBandDesginer(): ExcelDataBandDesigner;
    set excelTableBandDesginer(value: ExcelDataBandDesigner);
    get tableBandDesginer(): TableBandDesigner;
    set tableBandDesginer(value: TableBandDesigner);
    changeDesignMode(nextDesignMode: boolean, previewMode?: PreviewMode): void;
    /**
     * TODO: 리포트 파일 경로를 지정해도 로드되도록?
     * 리포트를 로드할 때 사용한다.
     * @param source 리포트 리소스
     * @param reportOptions 리포트 관련 옵션
     */
    loadReport(source: any, reportOptions?: ReportOptions): void;
    loadSampleData(sampleData: any): void;
    findToolItem(dom: Element): ToolItem;
    findToolItemById(id: string): ToolItem;
    showPopupSelector(selector: PopupSelectorType | PopupSelector, selected?: PopupSelectorItem['id']): void;
    closePopupSelector(ev: Event): boolean;
    processPopupSelectorEvent(target: Element): boolean;
    closeDialog(): void;
    showDialog(dlg: DialogView, callback?: (dlg: DialogView) => void, cancelCallback?: (dlg: DialogView) => void): void;
    showUploadArchiveDlg(): void;
    showAboutDlg(): void;
    uploadReportArchive(dlg: UploadArchiveDlg): Promise<void>;
    preview(options?: IPreviewOptions): void;
    print(): void;
    refreshActionSubBar(): void;
    activeEditor(): ReportEditor | ExcelReportEditor;
    activePage(): number;
    createData(report: ExcelReport): ReportDataProvider;
    /**
     * 사용자 OPEN API
     */
    setReportTemplates(templates: UserReportCategoryTemplate[]): Promise<void>;
    setDataTemplates(templates: UserDataTemplateGroup[]): Promise<void>;
    setAssetTemplates(templates: UserAssetTemplateGroup[]): Promise<void>;
    registerFonts(fontSources: UserFontSource[], defaultFontName?: string): Promise<void>;
    showTableDesigner(): void;
    showTableContainerDesigner(): void;
    startBandDesigner(data: BandArrayData, callback: (item: DataBand) => void): void;
    startTableContainerDesigner(doc: any, data: BandArrayData, callback: (item: TableContainer) => void): void;
    hideTableDesigner(): void;
    /**
     * 외부 노출 API 작성
     */
    setDesignMode(previewMode: PreviewMode): void;
    newReportTemplate(): void;
    getReport(options?: ReportSaveOptions): Record<string, any>;
    saveReport(): Promise<void>;
    openReport(): void;
    load(): void;
    download(): void;
    shareReport(): void;
    exportExcel(): void;
    exportHtml(): Promise<void>;
    setActivePage(index: number): void;
    private $_setOutlinePageIndex;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    private $_doPrepareEditor;
    protected _createDefaultTool(): VisualTool;
    protected _isAutoFocus(): boolean;
    invalidateLayout(scrolling?: boolean): void;
    protected _doLayout(bounds: Rectangle): void;
    protected _doClick(event: MouseEvent): boolean;
    protected _doKeyDown(ev: KeyboardEvent): boolean;
    private $_createSection;
    private $_addPopup;
    private $_createSelector;
    private $_setPopupLayerVisible;
    private $_clearPopupSelector;
    private $_showColorPicker;
    private $_showBackgroundColorPicker;
    private $_showSelector;
    private $_preparePreviewTitle;
    private $_resetPreviewHeight;
    /**
     * 미리보기 수행
     *
     * previewMode에 따라 미리보기로 출력할지, paper 출력을 할 지를 결정
     * PreviewMode.PRINT: 미리보기
     * PreviewMode.PREVIEW: paper 출력
     *
     * @param report
     * @param previewOptions
     */
    private $_preview;
    /**
     * 미리보기 함수
     *
     * 미리보기를 수행함
     *
     * 일반 리포트는 PrintContainer, 엑셀은 SheetEditor를 사용해서 출력함.
     *
     * @param report 리포트 모델
     * @param previewOptions 출력 옵션
     */
    private $_doPreview;
    /**
     * paper 미리보기 함수
     *
     * 엑셀은 PrintContainer를 사용해서 해당 기능 수행함
     *
     * 일반리포트는 해당 기능 사용 안함.
     *
     * @param report 리포트 모델
     * @param previewOptions 출력 옵션
     */
    private $_doPaperPreview;
    /**
     * 미리보기를 위한 객체를 설정함
     *
     * PreviewMode에 따라, 어떤 모드로 미리보기를 할지를 설정함
     *
     * 리포트, 엑셀 둘 다 preview버튼을 누르면 일반적인 미리보기를 할 수 있도록 setNormalPreviewer를 호출함
     *
     * 엑셀의 경우 종이출력용 미리보기가 따로 있어야 함
     * 이를 위해 PaperPreview모드가 따로 존재함.
     * 일반 리포트는 해당 모드에서 아무런 동작도 안함
     */
    private $_setPreviewer;
    private $_createPreviewContainer;
    /**
     * preview를 위한 객체를 설정한다
     *
     */
    private $_setNormalPreviewer;
    private $_setExcelPrintContainer;
    private $_setReportPrintContainer;
    /**
     * 종이출력을 위한 객체를 설정한다.
     *
     * 엑셀의 종이출력을 위해 ExcelPrintContainer가 필요한데, 이걸 설정하기 위해 해당 메서드를 사용한다.
     *
     * 나중에 이메일에 대해 엑셀과 비슷한 기능이 필요해지면, 이곳에서 객체를 설정하면 된다.
     */
    private $_setPaperPreviewer;
    private $_setExcelViewer;
    private $_disposeViewer;
    private $_loadPreviewData;
    private $_refreshPanel;
    private $_addFontManagerListener;
    private $_appendFontFaceStyle;
    /**
     * 에디터 관련 doLayout을 수행함.
     * 리포트 타입에 따라, 리포트에디터, 엑셀에디터 전용 doLayout함수를 호출함.
     *
     * @returns void
     */
    private $_doEditorLayout;
    private $_doReportEditorLayout;
    private $_doEmailEditorLayout;
    private $_doExcelEditorLayout;
    /**
     * report set 할 때, 리포트 타입에 따라 특정 에디터 관련 설정을 수행함.
     *
     * @param report 리포트 모델
     * @returns void
     */
    private $_onSetReport;
    /**
     * 리포트 모델을 생성하여 반환함.
     *
     * 리포트 타입에 따라 생성할 구현체가 달라진다.
     * Report, ExcelReport
     *
     * @param source
     * @returns ReportBase source로 생성한 리포트 모델
     */
    private $_createReport;
    /**
     * 리포트 유형에 따라 필요한 에디터만 표시하고, 그 외엔 감춘다.
     * @param type 리포트 모델. 해당 객체의 타입으로 분기하여 표시할 에디터를 결정함.
     */
    private $_showEditor;
    /**
     * 포커스된 아이템을 반환함
     *
     * 기존엔 ReportEditor만 있었기 때문에 이런 함수가 필요하지 않았음.
     * 엑셀, 이메일 에디터가 생기면서, 포커스 된 아이템을 찾는 로직이 이전보다 복잡해짐.
     * 그래서 별도의 private 메서드로 추출함.
     *
     * @returns 현재 활성화된 에디터의 포커스된 아이템
     */
    private $_getFocusedItem;
    /**
     * @returns 현재 활성화된 에디터의 선택된 아이템의 정보를 반환한다.
     */
    private $_getSelectedItems;
    /**
     * 모든 에디터의 줌을 Reset 한다
     */
    private $_resetEditorZoom;
    private _copyHandler;
    private _pasteHandler;
    private _cutHandler;
    private _zoomHandler;
    private _fontHandler;
    private _fontSizeHandler;
    private _colorPickerHandler;
    /**
     * 툴바에서 폰트 색상을 설정하는 함수
     */
    private $_setFontColor;
    /**
     * 툴바에서 배경 색상을 설정하는 함수
     */
    private $_setBackgroundColor;
    private $_setPropertyColor;
    private $_processBlur;
    private $_processInput;
    private $_fireDialogClosed;
    private $_fireReportCommandStackChanged;
    /**
     * DesignerContext saveReport 함수에서 호출할 수 있도록 공개
     */
    _fireReportSaved(): void;
    _fireReportLoaded(): void;
    _fireNewDlgSubmitted(): void;
}

declare interface ReportDesignerOptions {
    /**
     * asset panel 표시 여부
     * @default true
     */
    showAssetPanel?: boolean;
    /**
     * data panel 표시 여부
     * @default true
     */
    showDataPanel?: boolean;
    /**
     * script panel 표시 여부
     * @default true
     */
    showScriptPanel?: boolean;
    /**
     * 왼쪽 아이템바에서 클릭 대신 아이템 아이콘을 drag해서 생성할지 여부
     * @default true
     */
    dragInsert?: boolean;
    /** callbacks */
    getReportListCallback?: () => Promise<ServerReportSources>;
    getReportCallback?: (reportId: string) => Promise<IServerSource>;
    saveReportCallback?: (report: Record<string, any>, reportId?: string) => Promise<{
        reportId: string;
        message: any;
    } | null>;
}

/**
 * 리포트 최상단에서 편집가능 객체 속성 구현
 */
declare class ReportEditableObject<T extends ReportItem> extends ReportItemObject<T> {
    static readonly PROP_EDITABLE = "editable";
    static readonly PROP_TYPE = "type";
    static readonly PROPINFOS: IPropInfo[];
    private _editable;
    get editable(): boolean;
    set editable(value: boolean);
    get pathLabel(): string;
    get displayPath(): string;
    get level(): number;
    constructor(item: T);
    getSaveLabel(): string;
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
}

/**
 * Report 편집 command base.
 */
declare abstract class ReportEditCommand extends EditCommand {
    get page(): ReportPageBase;
}

/**
 * 리포트 view 위에서 편집 관련 tooling을 표시하는 view.
 */
declare class ReportEditLayer extends LayerElement {
    static readonly SELECT_ZINDEX = "100";
    static readonly FOCUS_ZINDEX = "101";
    protected static readonly MarqueeTypes: {
        TableBand: typeof TableBandMarquee;
        TableContainer: typeof TableContainerMarquee;
        BandGroup: typeof BandGroupMarquee;
        ColumnBoxContainer: typeof ColumnBoxMarquee;
        RowBoxContainer: typeof RowBoxMarquee;
        RealChartItem: typeof RealChartMarquee;
        HichartItem: typeof HichartMarquee;
        EmailRealChartItem: typeof RealChartMarquee;
        EmailTableContainer: typeof TableContainerMarquee;
        EmailTableBand: typeof TableBandMarquee;
        EmailColumnBoxContainer: typeof ColumnBoxMarquee;
        EmailRowBoxContainer: typeof RowBoxMarquee;
    };
    private _reportView;
    private _selectPool;
    private _selectViews;
    private _tableSelectPool;
    private _tableSelectViews;
    protected _focusView: FocusView;
    private _editMarquee;
    private _marquees;
    private _errorView;
    private _errorTimer;
    private _hideErrorTimer;
    private _foldableItemButton;
    private _focusVisible;
    private _selecting;
    constructor(doc: Document, reportView: IReportEditView);
    get editMarquee(): EditMarquee<ReportElement>;
    layoutContent(): void;
    closeEditMarquees(): void;
    hideEditMarquees(): void;
    showEditMarquees(): void;
    showFocus(): void;
    hideFocus(): void;
    hideRotateHandle(): void;
    restoreRotateHandle(): void;
    showError(source: ReportItem, error: string, duration?: number): boolean;
    hideError(): void;
    /* Excluded from this release type: itemsRemoved */
    /* Excluded from this release type: itemRemoved */
    resetFocusView(): void;
    getFocusRect(): Rectangle;
    protected _canHiddenFocus(item: ReportPageItem): boolean;
    beginSelect(): void;
    endSelect(): void;
    protected _getCssSelector(): string;
    protected _isEmptySize(): boolean;
    private $_getCellRect;
    private $_getFieldRect;
    private $_layoutSelection;
    protected _getSelectionRect(m: ReportPageItem, r: IRect): IRect;
    private $_layoutTableSelection;
    protected _getItemFocusRect(elt: VisualElement, rotated: boolean): Rectangle;
    protected _layoutFocus(reportView: IReportEditView): void;
    private $_getMarquee;
    private $_getMarqueeParent;
    private $_layoutMarquee;
}

/**
 * 리포트 편집기에 사용되는 report view.
 */
declare class ReportEditor extends ReportEditorBase<PrintContext> implements IReportEditor, IPropertySource {
    static readonly PROP_DEFAULT_UNIT = "defaultUnit";
    static readonly PROP_GUARD_WIDTH = "guardWidth";
    static readonly PROPINFOS: IPropInfo[];
    private _defaultUnit;
    private _reportView;
    private _guard;
    private _tableDesigner;
    private _tableBandDesigner;
    private _simpleBandDesigner;
    /**
     * 복사 붙여넣기한 아이템들을 관리하는 매니저
     */
    private _reportItemClipboardManager;
    private _edit_menu;
    constructor(containerId: string | HTMLDivElement);
    protected _createContext(): PrintContext;
    showEditFocus(): void;
    hideEditFocus(): void;
    getContextMenu(menuKey: string): MenuItem[];
    registerContextMenu(menuKey: string, contextMenus: MenuItem[]): void;
    get displayPath(): string;
    /**
     * reportView.
     */
    get reportView(): ReportEditView;
    get pageView(): PageView;
    /** report */
    get report(): Report_2;
    set report(value: Report_2);
    /** activePage */
    get activePage(): number;
    set activePage(value: number);
    /**
     * defaultUnit
     */
    get defaultUnit(): PrintUnit;
    set defaultUnit(value: PrintUnit);
    /** focusedItem */
    get focusedItem(): ReportPageItem;
    set focusedItem(value: ReportPageItem);
    /** focusedElement */
    get focusedElement(): ReportElement;
    /** focusedItemElement */
    get focusedItemElement(): ReportItemElement;
    /**
     * current edit marquee
     */
    get marquee(): EditMarquee<any>;
    get selections(): Selections;
    get tableDesigner(): TableDesigner;
    get tableBandDesigner(): TableBandDesigner;
    get simpleBandDesigner(): SimpleBandDesigner;
    get editContianer(): LayerElement;
    get reportItemClipboardManager(): ReportItemClipboardManager;
    showAlert(item: ReportItem, message: string): void;
    findDropTarget(source: any, target: HTMLElement): {
        target: HTMLElement;
        view: VisualElement;
        item: ReportItem | TableCell;
    };
    private $_startDesigner;
    startTableDesigner(type: TableDesignerAddType | TableBandDesignerAddType, data: BandArrayData, callback: (item: TableContainer | TableLikeBand) => void): void;
    private $_endAdd;
    endAdd(accept?: boolean, target?: ReportGroupItemElement, callback?: (item: ReportItem) => void): ReportItem;
    private $_endAddCell;
    endAddCell(tableView: TableElement<any>, row: number, col: number, callback?: (item: ReportItem) => void): ReportItem;
    findTable(td: HTMLTableCellElement): TableElement<any>;
    closePopups(): void;
    getEditMarquee(): EditMarquee<ReportElement>;
    getEditMarqueeTarget(dom: HTMLElement): IEditMarqueeTarget;
    closeEditMarquee(): void;
    hideEditMarquee(): void;
    showEditMarquee(): void;
    canDeleteSelection(): boolean;
    deleteSelection(): boolean;
    shareAsSnippet(): ReportSnippet;
    copySelection(): string;
    findSelection(item: ReportPageItem): ISelectionSource;
    findReportElementOf(dom: HTMLElement): ReportElement;
    pasteItems(sources: string, target: ReportPageItem): ReportItem[];
    /**
     * 아이템이 테이블 셀에 포함된 경우 셀을 선택한다.
     * @param item 셀에 포함된 아이템. 지정하지 않으면 focusedItem.
     */
    focusCell(item?: ReportItem): void;
    getFocusRect(): IRect;
    protected _createDefaultTool(): VisualTool;
    hideError(): void;
    getAllElements(bounds: Rectangle): ReportItemElement[];
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _prepareGuards(doc: Document): void;
    protected _getGuard(): ReportElement;
    protected _getReportView(): ReportViewBase;
    protected _doAfterRender(): void;
    findElementAt(x: number, y: number, hitTesting: boolean, blockLayer: boolean): VisualElement;
    getEditMenu(): MenuItem[];
    beginSelet(): void;
    endSelect(): void;
    protected _createEditView(doc: Document): ReportEditView;
    protected _focusedChanged(item: ReportPageItem, old: ReportPageItem): void;
}

declare abstract class ReportEditorBase<T extends PrintContextBase = PrintContextBase> extends ReportContainer<T> implements IReportEditor {
    static readonly SCROLL_CONTAINER_CLASS = "rr-scroll-container";
    static readonly EDIT_CONTAINER_CLASS = "rr-edit-container";
    static readonly ZOOM_LABEL = "zoomLabel";
    static readonly ZOOM_PAGE_WIDTH = -1;
    static readonly ZOOM_FULL_PAGE = -2;
    static readonly POPUP_ZINDEX: number;
    static readonly ZOOM_CHANGED = "onReportEditorZoomChanged";
    static readonly COPY = "onReportEditorCopy";
    static readonly PASTE = "onReportEditorPaste";
    static readonly CUT = "onReportEditorCut";
    static readonly ADD_CANCELED = "onReportEditorAddCanceled";
    static readonly UNIT_CHANGED = "onReportEditorUnitChanged";
    static readonly RULER_CLASS = "rr-ruler";
    protected _guardWidth: number;
    protected _paddingTop: number;
    protected _paddingLeft: number;
    protected _zoom: number;
    private _handMode;
    private _addStyle;
    protected _editContainer: LayerElement;
    protected _scrollContainer: LayerElement;
    protected _feedbackLayer: FeedbackLayer;
    private _popupLayer;
    private _hruler;
    private _vruler;
    protected _started: boolean;
    private _textEditor;
    protected _addType: any;
    protected _addShifted: boolean;
    protected _addedCount: number;
    private _messageBar;
    protected _designer: IReportDesigner;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    isDominantProp(prop: IPropInfo): boolean;
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyleProperty(prop: string): void;
    setStyleProperty(prop: string, value: any): void;
    setItemsStyleProperty(sources: IPropertySource[], prop: string, value: any): void;
    isChildProp(prop: string): boolean;
    getSubStyleProperty(prop: string, style: string): void;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    isCollectionProp(): boolean;
    isEditableCollection(): boolean;
    isCollectionItem(): boolean;
    getPropertySources(): IPropertySource[];
    getCollectionLabel(): string;
    getPopupPropLabel(prop: string): string;
    closePopups(): void;
    abstract getFocusRect(): IRect;
    abstract showEditFocus(): void;
    abstract hideEditFocus(): void;
    abstract get report(): ReportBase;
    get hruler(): HorizontalRulerView;
    get vruler(): VerticalRulerView;
    abstract get reportView(): ReportViewBase;
    /**
     * guardWidth
     */
    get guardWidth(): number;
    set guardWidth(value: number);
    protected _setGuardWidth(value: number): void;
    /** topPos */
    get topPos(): number;
    set topPos(value: number);
    /** leftPos */
    get leftPos(): number;
    set leftPos(value: number);
    /** zoom */
    get zoom(): number;
    set zoom(value: number);
    _setZoom(value: number): void;
    protected _zoomLabelPos(): {
        x: number;
        y: number;
    };
    /** addStyle */
    get addStyle(): ReportAddStyle;
    set addStyle(value: ReportAddStyle);
    /** handMode */
    get handMode(): boolean;
    set handMode(value: boolean);
    /** selectMode */
    get selectMode(): boolean;
    set selectMode(value: boolean);
    /** addMode */
    get addMode(): boolean;
    /** addType */
    get addType(): any;
    /** addShifted */
    get addShifted(): boolean;
    /**
     * add 모드 세션에서 현재 추가된 아이템 개수
     */
    get addedCount(): number;
    get selectionCount(): number;
    isSelected(item: ReportPageItem): boolean;
    getSelection(): ISelectionSource[];
    abstract get selections(): Selections;
    abstract get focusedItem(): ReportPageItem;
    abstract set focusedItem(value: ReportPageItem);
    abstract get focusedElement(): ReportElement;
    abstract get focusedItemElement(): ReportItemElement;
    abstract get activePage(): number;
    abstract get pageView(): PageViewBase;
    setDesigner(designer: IReportDesigner): this;
    isEditContainer(elt: VisualElement): boolean;
    isEditor(elt: HTMLElement): boolean;
    isEditing(): boolean;
    protected _canShowEditor(elt: ReportItemView): boolean;
    showEditor(target?: ReportItemView): boolean;
    hideEditor(accept: boolean): boolean;
    canMultiLine(): boolean;
    beginAdd(itemType: any, shift: boolean): boolean;
    cancelAdd(): boolean;
    showPopup(view: PopupElement): void;
    hidePopup(view: PopupElement): void;
    isStackContainer(element: ReportElement): boolean;
    isScrollContainer(target: any): boolean;
    isRuler(target: any): boolean;
    findReportElementOf(dom: HTMLElement): ReportElement;
    abstract hideError(): void;
    abstract endAdd(accept?: boolean, target?: ReportGroupItemElement, callback?: (item: ReportItem) => void): ReportItem;
    undo(): boolean;
    redo(): boolean;
    copy(): boolean;
    paste(): boolean;
    cut(): boolean;
    abstract getEditMarquee(): EditMarquee<ReportElement>;
    abstract getEditMarqueeTarget(dom: HTMLElement): IEditMarqueeTarget;
    abstract closeEditMarquee(): void;
    abstract showEditMarquee(): void;
    abstract hideEditMarquee(): void;
    abstract beginSelet(): void;
    abstract endSelect(): void;
    abstract canDeleteSelection(): boolean;
    abstract deleteSelection(): boolean;
    abstract shareAsSnippet(): SnippetBase;
    clearSelection(added?: ReportPageItem): void;
    /**
     * shift나 ctrl(cmd) 상태에서 선택되었다.
     */
    toggleSelection(item: ReportPageItem, shift: boolean, meta: boolean): boolean;
    addSelection(item: ISelectionSource): void;
    addSelections(items: ISelectionSource[]): void;
    removeSelection(item: ISelectionSource): void;
    /**
     * 그룹에 포함된 최상위 아이템들을 모두 선택한다.
     *
     * @param group 지정하지 않으면 page에 포함된 모든 최상위 아이템들을 선택한다.
     */
    selectAll(): void;
    getSelectedItems(): ReportPageItem[];
    copySelection(): string;
    findSelection(item: ReportPageItem): ISelectionSource;
    incZoom(delta?: number): void;
    setFocused(item: ReportPageItem, clearSelection?: boolean): void;
    getDisplayParent(item: ReportPageItem): ReportPageItem;
    execute(cmd: EditCommand): boolean;
    abstract getAllElements(bounds: Rectangle): ReportItemElement[];
    abstract getEditMenu(): MenuItem[];
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _prepareGuards(doc: Document): void;
    protected abstract _getReportView(): ReportViewBase;
    protected abstract _getGuard(): ReportElement;
    protected _doLayout(bounds: Rectangle): void;
    makeFocusVisible(): void;
    showMessage(message: string, level: MessageLevel, timeout?: number): void;
    closeMessage(): void;
    private $_containerWidth;
    private $_containerHeight;
    $_modelChanged(oldReport: ReportBase): void;
    /**
     * 선택 범위 내에서 선택한 셀을 제외하고 selection에 추가한다.
     */
    private $_selectCellsInRange;
    protected _setScrollContainerRect(rect: Rectangle): void;
    protected _setEditorContainerRect(rect: Rectangle): void;
    protected _prepareFeedback(doc: Document, layer: FeedbackLayer): void;
    protected _skipFocus(reportView: ReportViewBase, elt: VisualElement): boolean;
    protected _makeFocusVisible(reportView: ReportViewBase): void;
    protected _focusedChanged(item: ReportPageItem, old: ReportPageItem): void;
    protected _createTextEditor(doc: Document, editor: IReportEditor): TextEditor;
}

declare class ReportEditView extends ReportView {
    static readonly ACTIVE_ZINDEX = "2";
    static readonly ACTIVE_PAGE_CHANGED = "onReportActivePageChanged";
    static readonly FOCUSED_CHANGED = "onReportFocusedChanged";
    static readonly SELECTION_CHANGED = "onReportSelectionChanged";
    private _activePage;
    private _headLayer;
    private _pageBorders;
    private _pageHead;
    private _backHead;
    private _frontHead;
    private _breakLayer;
    private _breakLines;
    private _editLayer;
    private _activeConatiner;
    private _pageView;
    constructor(doc: Document);
    get editor(): ReportEditor;
    getActivePage(): ReportPage;
    get activeContainer(): ReportGroupItem;
    get activeContainerView(): ReportGroupItemView;
    get activePage(): number;
    set activePage(value: number);
    setActivePage(value: number, force: boolean): void;
    get currPage(): ReportPage;
    get pageView(): PageEditView;
    /** focusedItem */
    get focusedItem(): ReportPageItem;
    set focusedItem(value: ReportPageItem);
    /** focusedElement */
    get focusedElement(): ReportElement;
    get focusedItemElement(): ReportItemView;
    /** selection */
    get selection(): ISelectionSource[];
    /** lastSelectedItem */
    get lastSelectedItem(): ISelectionSource;
    get zoom(): number;
    get editing(): boolean;
    get editLayer(): ReportEditLayer;
    getFocusedElement(): VisualElement;
    itemOfDom(dom: Element): ReportItem;
    focusCell(item: ReportItem): void;
    getTableElementOfRow(row: TableRow): TableView;
    getTableElementsOfColumn(column: TableColumnBase): TableView[];
    getTableElementOfColumn(column: TableColumn): TableContainerElement;
    getTableBandElementOfColumn(column: TableBandColumn): TableBandElement;
    /**
     * col에서 시작하여 연속적으로 선택된 컬럼들.
     */
    getSelectedTableColums(column: TableColumnBase): TableColumnBase[];
    /**
     * 병합된 셀의 일부를 이동할 수 없다.
     */
    canMoveTableColumns(columns: TableColumnBase[], showAlert?: boolean): boolean;
    /**
     * row에서 시작하여 연속적으로 선택된 row의 개수.
     */
    getSelectedTableRows(row: TableRow): TableRow[];
    /**
     * 병합된 셀의 일부를 이동할 수 없다.
     */
    canMoveTableRows(rows: TableRow[], showAlert?: boolean): boolean;
    focusParent(item: ReportPageItem): void;
    protected _createPageView(doc: Document): PageView;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _resetPages(model: Report_2): void;
    protected _afterLayout(ctx: PrintContext, bounds: Rectangle): void;
    protected _getPageHeadTitlePrefix(type?: ReportPageType): string;
    private $_layoutMask;
    protected _layoutPageBorders(rReport: Rectangle, rPage: Rectangle): void;
    private $_layoutBreaks;
    _fireFocusedChanged(focused: ReportPageItem, old: ReportPageItem): void;
    _fireSelectionChanged(selection: ReportPageItem[]): void;
    protected onReportPageAdded(report: Report_2, page: ReportPage): void;
    protected onReportPageRemoved(report: Report_2, page: ReportPage, index: number): void;
    protected onReportItemAdded(report: Report_2, item: ReportItem, index: number, silent: boolean): void;
    protected onReportItemRemoved(report: Report_2, item: ReportItem, oldParent: ReportGroupItem): void;
    protected onReportItemsRemoved(report: Report_2, items: ReportPageItem[]): void;
    protected onReportItemFolded(item: ReportItem): void;
    protected onReportCellMerged(report: Report_2, cell: TableCell): void;
    protected onReportAlert(report: Report_2, item: ReportItem, message: string): void;
}

/* Excluded from this release type: ReportElement */

/**
 * Report footer model.
 */
declare class ReportFooter extends SpaceableSection {
    static readonly PROP_ALIGN_TO_BOTTOM = "alignToBottom";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _alignToBottom;
    constructor(name?: string);
    /**
     * wrap
     */
    get alignToBottom(): boolean;
    set alignToBottom(value: boolean);
    get outlineLabel(): string;
    get pathLabel(): string;
    canResize(dir: ResizeDirection): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

/* Excluded from this release type: ReportFooterElement */

declare class ReportFooterPrintInfo {
}

/**
 * 하나 이상의 report item을 포함하는 group item 기반 클래스.
 */
declare abstract class ReportGroupItem extends ReportItem {
    static readonly PROP_DESIGN_WIDTH = "designWidth";
    static readonly PROP_DESIGN_HEIGHT = "designHeight";
    static readonly PROPINFOS: IPropInfo[];
    private _designWidth;
    private _designHeight;
    private _items;
    protected _layoutChanged: boolean;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    /**
     * child props를 제공하는가?
     */
    get isChildPropContainer(): boolean;
    /** count */
    get count(): number;
    /** items */
    get items(): ReportItem[];
    _internalItems(): ReportItem[];
    /** designWidth */
    get designWidth(): number;
    set designWidth(value: number);
    /** designHeight */
    get designHeight(): number;
    set designHeight(value: number);
    get dataDominant(): boolean;
    get firstChild(): ReportItem;
    get lastChild(): ReportItem;
    get isDataRowContainer(): boolean;
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    get(index: number): ReportItem;
    canContainsBand(): boolean;
    canContainsBandGroup(): boolean;
    canAddToFrontContainer(): boolean;
    canAddToBackContainer(): boolean;
    contains(item: ReportPageItem, deep?: boolean): boolean;
    indexOf(item: ReportPageItem): number;
    getNames(list: string[], recursive?: boolean): string[];
    find(name: string, recursive?: boolean): ReportItem;
    findOf(hash: string): ReportPageItem;
    canAdd(item: ReportItem): boolean;
    append(item: ReportPageItem, slient?: boolean): boolean;
    /**
     * @param silent View나 Tool 쪽에서 지정하고 사용한다.
     */
    add(item: ReportPageItem, index?: number, silent?: boolean): boolean;
    canRemove(item: ReportItem): boolean;
    remove(item: ReportItem, force?: boolean): void;
    removeAll(items: ReportItem[], force?: boolean): void;
    removeLast(): void;
    clear(): void;
    getMoveType(item: ReportItem): ItemMoveType;
    canResizeChild(item: ReportItem, dir: ResizeDirection): boolean;
    search(page: number, key: string, options: FindOptions, results: FindResult[]): void;
    canChangeChildProp(item: ReportPageItem, prop: string, value: any): boolean;
    changeChildIndex(child: ReportItem, newIndex: number): boolean;
    canAlign(child: ReportItem): boolean;
    canAlignTo(child: ReportPageItem, to: string): boolean;
    filter(callback: (item: ReportItem) => boolean): ReportItem[];
    getDescendants(recursive?: boolean): ReportItem[];
    collectInvalids(report: ReportBase, list: {
        item: ReportItem;
        reason: string;
    }[]): void;
    collectBlankItems(childs?: ReportItem[]): ReportItem[];
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _maxChildCount(): number;
    isGroup(): boolean;
    isAncestorOf(item: ReportPageItem): boolean;
    canParentOf(itemType: string): boolean;
    isUsed(data: IReportData): boolean;
    protected _canChildData(): boolean;
    replaceData(oldName: string, name: string): void;
    prepareLayout(printing: boolean): void;
    preparePrint(ctx: PrintContext): void;
    protected _getNameOfItems(): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    save(target: object): boolean;
    dataNameChanged(data: IReportData, oldName: string): void;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    canMakeSnippet(): boolean;
    protected get internalItems(): ReportItem[];
    protected _valueable(): boolean;
    protected _loadChildProp(child: ReportItem, prop: string, src: any): void;
    protected _loadChildProps(child: ReportItem, props: string[], src: any): void;
    protected _loadChildPropsOf(child: ReportItem, src: any, infos: IPropInfo[]): void;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _loadChild(loader: IReportLoader, item: ReportItem, src: any): ReportItem;
    protected _loadItems(loader: IReportLoader, src: any): void;
    protected _doLoadChild(child: ReportItem, src: any): void;
    protected _saveItems(target: any[]): void;
    protected _doSaveItems(target: any[], items: ReportItem[]): void;
    protected _addItem(item: ReportItem, index: number, silent: boolean): ReportItem;
    protected _removeItem(item: ReportItem): number;
    protected _clearItems(): void;
    protected _doItemsLoaded(): void;
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _doItemsAdded(items: ReportItem[]): void;
    protected _doItemRemoved(item: ReportItem, index: number): void;
    protected _doItemsRemoved(items: ReportItem[]): void;
    protected _doItemsCleared(): void;
    private $_resetIndices;
    private $_childChanged;
    protected _doItemChanged(item: ReportItem, prop: string, value: any, oldValue: any): void;
    protected _setOutlineOrders(start: number, ...items: ReportPageItem[]): void;
}

/* Excluded from this release type: ReportGroupItemElement */

declare type ReportGroupItemView = ReportGroupItemElement<ReportGroupItem>;

/**
 * Report header model.
 */
declare class ReportHeader extends SpaceableSection {
    static readonly $_ctor: string;
    constructor();
    get outlineLabel(): string;
    get pathLabel(): string;
    canResize(dir: ResizeDirection): boolean;
}

/* Excluded from this release type: ReportHeaderElement */

/**
 * Report info.
 */
declare class ReportInfo extends Base {
    name: string;
    author: string;
    version: string;
    created: Date;
    description: string;
    paper: PaperOptions;
    constructor(report: ReportBase);
}

/**
 * Report 구성 요소 기반 클래스.
 *
 * [data]
 * 1. data 속성에 dataProvider에 등록된 리포트 data 이름.
 * 2. value 속성에 "."으로 분리된 값 경로.
 * 3. data를 지정하지 않으면 가장 가까운 조상에 설정된 data.
 * 4. value에 "data::value" 형식으로 지정하면 이 것을 우선.
 */
declare abstract class ReportItem extends ReportPageItem {
    static readonly DEF_DISPLAY_ORDER = 99;
    static readonly PROP_NAME = "name";
    static readonly PROP_TAG = "tag";
    static readonly PROP_LEFT = "left";
    static readonly PROP_RIGHT = "right";
    static readonly PROP_TOP = "top";
    static readonly PROP_BOTTOM = "bottom";
    static readonly PROP_DESIGN_BORDER = "designBorder";
    static readonly PROP_ON_GET_VALUE = "onGetValue";
    static readonly PROP_ON_GET_VISIBLE = "onGetVisible";
    static readonly PROP_STYLES = "styles";
    static readonly PROP_ON_GET_STYLES = "onGetStyles";
    static readonly PROP_VISIBLE = "visible";
    static readonly PROP_DATA = "data";
    static readonly PROP_VALUE = "value";
    static readonly PROP_HINT = "hint";
    static readonly PROP_WIDTH = "width";
    static readonly PROP_HEIGHT = "height";
    static readonly PROP_MIN_WIDTH = "minWdth";
    static readonly PROP_MIN_HEIGHT = "minHeight";
    static readonly PROP_LOCKED = "locked";
    static readonly PROP_PAGE_BREAK = "pageBreak";
    static readonly PROP_STYLE_CALLBACK = "styleCallback";
    static readonly PROP_ROTATION = "rotation";
    static readonly PROP_LINK_URL = "linkUrl";
    static readonly PROP_LINK_TARGET = "linkTarget";
    static readonly PROP_LINK_FIELD = "linkField";
    static readonly DATA_PROP: {
        name: string;
        category: PropCategory;
        type: typeof ListableProperty;
        multiple: boolean;
        default: any;
        domain: any;
    };
    static readonly VALUE_PROP: {
        name: string;
        category: PropCategory;
        type: typeof ListableProperty;
        multiple: boolean;
        default: any;
        domain: any;
        validate: (source: ReportItem, value: any) => void;
    };
    static readonly LINK_FIELD_PROP: {
        name: string;
        category: PropCategory;
        type: typeof ListableProperty;
        multiple: boolean;
        default: any;
        domain: any;
        validate: (source: ReportItem, value: any) => void;
        visible: (source: IPropertySource) => boolean;
    };
    static readonly PROPINFOS: IPropInfo[];
    static readonly SIZE_PROPINFOS: IPropInfo[];
    static readonly LINK_PROPINFOS: IPropInfo[];
    static readonly VALUE_PROPINFOS: IPropInfo[];
    static findFloatingAnchor(item: ReportPageItem): ReportItem;
    private _name;
    private _tag;
    private _visible;
    private _visibleCallback;
    private _onGetVisible;
    private _data;
    private _value;
    private _valueCallback;
    private _onGetValue;
    private _hint;
    private _width;
    private _height;
    private _minWidth;
    private _minHeight;
    private _rotation;
    private _linkUrl;
    private _linkTarget;
    private _linkField;
    private _styles;
    private _styleCallback;
    private _onGetStyles;
    private _pageBreak;
    private _designOrder;
    private _designBorder;
    private _folded;
    private _parent;
    private _index;
    private _childPropInfos;
    private _childProps;
    private _valueCallbackFunc;
    private _valueCallbackDelegate;
    private _styleCallbackFunc;
    private _styleCallbackDelegate;
    private _visibleCallbackFunc;
    private _visibleCallbackDelegate;
    private _leftDim;
    private _rightDim;
    private _topDim;
    private _bottomDim;
    private _widthDim;
    private _heightDim;
    private _minWidthDim;
    private _minHeightDim;
    constructor(name: string);
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    /**
     * Report 편집기에서 수정할 수 있는 속성 정의 목록.
     * 속성이 없는 경우라도 빈 배열을 리턴해야 한다.
     * 각 항목은 아래 속성들을 갖는다.
     * {
     *  name: string,
     *  type: DesignType.
     *  category: string,
     *  domain: any[],
     * }
     */
    getEditProps(): IPropInfo[];
    removeEditProps(props: IPropInfo[], ...names: string[]): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    getPlaceHolder(prop: IPropInfo): string;
    /* Excluded from this release type: getData */
    /* Excluded from this release type: getDataFieldNames */
    getLanguageFields(): string[];
    getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getProperties(props: string[] | ConfigObject): ConfigObject;
    setProperties(props: ConfigObject): void;
    getStyleProperty(prop: string): any;
    setStyleProperty(prop: string, value: any): void;
    getSubStyleProperty(prop: string, style: string): any;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    dataNameChanged(data: IReportData, oldName: string): void;
    dataFieldNameChanged(data: IReportData, newName: string, oldName: string): void;
    runValueCallback(ctx: PrintContextBase, value: any): any;
    get ctor(): string | undefined;
    /** parent */
    get parent(): ReportGroupItem;
    /** dataParent */
    get dataParent(): ReportGroupItem;
    /** index */
    get index(): number;
    /** level */
    get level(): number;
    /** page */
    get page(): ReportPageBase;
    get report(): ReportBase;
    /** name */
    get name(): string;
    set name(value: string);
    get pathLabel(): string;
    get displayPath(): string;
    /** tag */
    get tag(): string;
    set tag(value: string);
    /** load/save 시 array를 사용하면 true */
    get isArray(): boolean;
    get isBand(): boolean;
    /**
     * false면 자리를 차지하지 않는다.
     */
    get visible(): boolean;
    set visible(value: boolean);
    get removable(): boolean;
    /**
     * IReportData name.
     */
    get data(): string;
    set data(value: string);
    replaceData(oldName: string, name: string): void;
    /**
     * 리포트에 지정된 data의 특정 값(들)을 지시하는 경로.
     * "::" 앞쪽에서 설정된 data 이름이 없는 경우,
     * 자신으로 시작해서 Report까지 가장 가까운 곳(dataParent)에 설정된 data에서 값을 가져온다.
     * '${page}', '%{page}', '${pages}', '%{pages}', '${date}', '%{date}' 등으로 print context 값을 지정할 수도 있다.
     */
    get value(): string;
    set value(value: string);
    /**
     * Dom title.
     * 출력 리포트에서 이게 필요한가?
     */
    get hint(): string;
    set hint(value: string);
    /**
     * width
     */
    get width(): ValueString;
    set width(value: ValueString);
    protected _validateWidth(value: ValueString): ValueString;
    /**
     * height
     */
    get height(): ValueString;
    set height(value: ValueString);
    /**
     * minWidth
     */
    get minWidth(): ValueString;
    set minWidth(value: ValueString);
    /**
     * minHeight
     */
    get minHeight(): ValueString;
    set minHeight(value: ValueString);
    /**
     * rotation
     */
    get rotation(): number;
    set rotation(value: number);
    get isRotated(): boolean;
    /**
     * linkUrl
     * linkValue의 값이 있을 경우 해당 속성은 무시된다.
     */
    get linkUrl(): string;
    set linkUrl(value: string);
    /**
     * linkTarget
     */
    get linkTarget(): LinkTarget;
    set linkTarget(value: LinkTarget);
    /**
     * 리포트에 지정된 data의 특정 값(들)을 지시하는 경로.
     * 자신으로 시작해서 Report까지 가장 가까운 곳(dataParent)에 설정된 data에서 값을 가져온다.
     * Link 기능을 사용할 수 있는 아이템에 Url로 사용이 된다.
     * print 시 해당 속성의 값이 linkUrl보다 우선 적용된다.
     */
    get linkField(): string;
    set linkField(value: string);
    /**
     * onGetValue
     */
    get onGetValue(): string;
    set onGetValue(value: string);
    /** valueCallback */
    get valueCallback(): ReportItemValueCallback;
    set valueCallback(value: ReportItemValueCallback);
    /**
     * onGetVisible
     */
    get onGetVisible(): string;
    set onGetVisible(value: string);
    /** visibleCallback */
    get visibleCallback(): ReportItemVisibleCallback;
    set visibleCallback(value: ReportItemVisibleCallback);
    /** styles */
    get styles(): Styles;
    set styles(value: Styles);
    /** styleCallback */
    get styleCallback(): ReportItemStyleCallback;
    set styleCallback(value: ReportItemStyleCallback);
    get onGetStyles(): string;
    set onGetStyles(value: string);
    /** pageBreak */
    get pageBreak(): PageBreakMode;
    set pageBreak(value: PageBreakMode);
    /**
     * 아웃라인에 표시되는 라벨명
     */
    get outlineLabel(): string;
    /** designText */
    get designText(): string;
    /** designLevel */
    get designLevel(): number;
    /**
     *  부모 리포트 아이템으로부터 주입된 속성 목록
     */
    get childPropInfos(): IPropInfo[];
    set childPropInfos(value: IPropInfo[]);
    /** floating */
    get floating(): boolean;
    /**
     * outline viewer 등에서 이 아이템이 표시되는 순서.
     * 값이 작을 수록 먼저 표시된다.
     * 기본값은 99.
     */
    get designOrder(): number;
    set designOrder(value: number);
    get designBorder(): boolean;
    set designBorder(value: boolean);
    isRelativeHeight(): boolean;
    isRelativeWidth(): boolean;
    get folded(): boolean;
    /**
     * ColumnBoxContainer|BoundedContainer
     */
    get left(): any;
    /**
     * ColumnBoxContainer|BoundedContainer
     */
    get right(): any;
    /**
     * RowBoxContainer|BoundedContainer
     */
    get top(): any;
    /**
     * RowBoxContainer|BoundedContainer
     */
    get bottom(): any;
    /**
     * TableContainer.
     * cell row index in table
     */
    get row(): number;
    /**
     * TableContainer.
     * cell column index in table.
     */
    get col(): number;
    /**
     * TableBandRow.
     * 이전 행 값과 동일하면 값을 표시하지 않는다.
     * 값의 비교는 blankFields가 설정되면 그 필드들의 값이 모두 동일한 경우,
     * blankFields가 설정되지 않은 경우 value에 설정된 필드 값이 동일한 경우.
     */
    get equalBlank(): boolean;
    /**
     * TableBandRow.
     * equalBlank가 true일 깨 값을 비교하는 필드들을 ',' 분리해서 지정한다.
     * 이 속성을 지정하지 않으면 value에 지정된 필드의 값으로 비교한다.
     */
    get blankFields(): string;
    /**
     * true로 지정되면 값과 상관 없이 leaf group 내의 모든 셀을 merge한다.
     * 또, 둘 이상의 table row로 출력되는 경우에도 이 아이템이 속한 컬럼 셀들을 모두 병합한다.
     * 한 행으로 구성된 group field에 bind된 아이템에만 적용해야 의미가 있다.
     */
    get mergedInGroup(): boolean;
    /**
     * 디자이너에서 추기될 때 초기값들 설정.
     */
    defaultInit(loader: IReportLoader, group: ReportGroupItem, hintWidth: number, hintHeight: number): this;
    getSaveType(): string;
    /**
     * 하위 object 저장 label.
     * _loadObject(), _saveObject()에서 사용.
     */
    getSaveLabel(): string;
    isContextValue(value?: string): boolean;
    /**
     * 아이템이 특별한 부모에 포함될 때 추가되는 속성들.
     * 예를들어 아이템을 table의 cell로 이동시키면 table에 추가하기 전
     * 사용자가 마우스로 지정한 곳에 있는 셀의 'col', 'row' 속성을 설정해서
     * table이 적절히 item을 배치하도록 한다.
     */
    setChildProp(prop: string, value: any): boolean;
    private $_setChildProp;
    isChildProp(prop: string): boolean;
    getChildProp(prop: string, defaultValue?: any): any;
    getChildProps(): any[];
    isStyleProp(prop: string): boolean;
    canParentOf(itemType: string): boolean;
    canAddTo(group: ReportGroupItem): boolean;
    canAddToFrontContainer(): boolean;
    canAddToBackContainer(): boolean;
    prepareLayout(printing: boolean): void;
    preparePrint(ctx: PrintContext): void;
    getLeft(domain: number): number;
    setLeft(dim: Dimension): void;
    getRight(domain: number): number;
    setRight(dim: Dimension): void;
    getTop(domain: number): number;
    setTop(dim: Dimension): void;
    getBottom(domain: number): number;
    setBottom(dim: Dimension): void;
    getWidth(domain: number): number;
    getHeight(domain: number): number;
    getMinWidth(domain: number): number;
    getMinHeight(domain: number): number;
    canSized(): boolean;
    canResize(dir: ResizeDirection): boolean;
    canResizeWidth(): boolean;
    canResizeHeight(): boolean;
    resize(width: number, height: number): ReportItem;
    canRotate(): boolean;
    canLink(): boolean;
    hasStyle(style: string): boolean;
    getStyle(style: string): string;
    setStyle(style: string, value: any): void;
    clearStyle(style: string): void;
    clearStyles(css: CSSStyleDeclaration): void;
    load(loader: IReportLoader, source: any): void;
    save(target: object): boolean;
    getFloatingContainer(): FloatingContainer;
    delete(force?: boolean): void;
    isAncestor(group: ReportGroupItem): boolean;
    private $_getValue;
    /**
     * onGetStyles 등 callback 내에서 사용할 수 있게 노출.
     */
    getValue(row: number, field: string): any;
    /**
     * 출력 시 ReportItemElement에서 호출.
     */
    getDataValue(dp: IReportDataProvider, row: number): any;
    getLinkValue(dp: IReportDataProvider, row: number): any;
    getDataViewValue(dv: BandDataSortView, row: number): any;
    protected _getParentData(): string;
    canRemoveFrom(): boolean;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    canNamed(): boolean;
    canTagged(): boolean;
    canHide(): boolean;
    canPageBreak(): boolean;
    isBreakBefore(): boolean;
    isBreakAfter(): boolean;
    getInvalids(report: ReportBase): string[];
    canFold(): boolean;
    fold(): boolean;
    unfold(): boolean;
    isI18nFieldValid(): boolean;
    getLanguageFieldValue(language: string, field: string): string;
    /**
     * 리포트 아이템 표시 여부 확인하기
     * TODO: ReportItemElement 제거하고 Model isPrintable 메서드로 처리하도록 옮길 것
     *
     * - 디자인 시점: `model.printable`
     * - 프리뷰 시점: `visibleCallback(ctx, model, row, printValue)` (콜백 실행 오류 시, `model.printable`)
     *
     * @param context 출력 컨텍스트
     * @returns 리포트 아이템 표시 여부
     */
    isPrintable(context: PrintContextBase): boolean;
    getItemBorders(): ReportItemBorders;
    getItemBorderWidths(): ReportItemBorderWidths;
    hasItemBorder(): boolean;
    get marqueeParent(): ReportItem;
    get printable(): boolean;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    canCopy(): boolean;
    protected _sizable(): boolean;
    protected _boundable(): boolean;
    needDesignBorder(): boolean;
    protected _foldedChanged(): void;
    /**
     * 리포트 아이템 생성 시, 수행할 초기화 작업을 정의한다.
     *
     * @param loader - 아이템을 로드하는 리포트 로더
     * @param group - 아이템의 상위 리포트그룹아이템
     * @param hintWidth - 아이템 영역 너비
     * @param hintHeight - 아이템 영역 높이
     */
    protected _doDefaultInit(loader: IReportLoader, group: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    protected _doApplyStyle(prop: string, value: string, target: CSSStyleDeclaration): boolean;
    protected _setLeft(value: ValueString): void;
    protected _setRight(value: ValueString): void;
    protected _setTop(value: ValueString): void;
    protected _setBottom(value: ValueString): void;
    protected _getEditProps(excludedProps?: string[]): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _getChildStyleProps(prop: string): string[];
    protected _valueable(): boolean;
    protected _datable(): boolean;
    private $_attached;
    protected _doAttached(): void;
    $_detached(): void;
    protected _doDetached(): void;
    protected _isLoading(): boolean;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
    get stylable(): boolean;
    isUsed(data: IReportData): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _saveChildPropsOf(target: object, infos: IPropInfo[]): void;
    protected _doSave(target: object): void;
    protected _doAfterLoad(loader: IReportLoader, src: any): void;
    protected _doAfterSave(target: object): void;
    protected _doPrepareLayout(printing: boolean): void;
    protected _doPreparePrint(ctx: PrintContext): void;
    protected _isI18nFieldExist(): boolean;
}

declare interface ReportItemBorders {
    border: string;
    borderLeft: string;
    borderRight: string;
    borderTop: string;
    borderBottom: string;
}

declare interface ReportItemBorderWidths {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

/**
 * 복사 붙여넣기 시 복사 또는 붙여넗기한 아이템들을 관리하는 매니저
 */
declare class ReportItemClipboardManager extends EventAware {
    static readonly OFFSET_X = 12;
    static readonly OFFSET_Y = 12;
    /**
     * 복사한 아이템
     */
    private _copiedItems;
    /**
     * 붙여넣기한 아이템 정보
     */
    private _copiedAndPastedItems;
    /**
     * 붙여넣기한 아이템
     */
    private _pastedItems;
    /**
     * 붙여넣은 컨테이너
     */
    private _pasteTarget;
    /**
     * 붙여넣은 컨테이너가 바뀌었는지 확인
     */
    private _chagedParent;
    get copiedItems(): ReportItem[];
    get pastedItems(): ReportItem[];
    get copiedAndPastedItems(): ICopiedAndPastedItem[];
    /**
     * 복사한 아이템을 저장
     */
    addCopiedItems(items: ReportItem[]): void;
    /**
     * 붙여넣기한 아이템을 저장
     */
    addPastedItems(copyTarget: ICopyTargetItem[], pastedItems: ReportItem[]): void;
    /**
     * 붙여넣기 한 아이템의 위치를 반환
     */
    getPastedItemPosition(item: ReportItem): ICopyTargetItem | null;
    /**
     * 아이템의 위치를 반환
     */
    private $_getPosition;
    /**
     * 몇번째 붙여넣기 된 아이템인지 번호와 함께 text반환
     * 예) Text Copy-1
     */
    private $_getText;
}

declare abstract class ReportItemCollection<T extends ReportPageItem = ReportPageItem> extends ReportPageItem {
    canRemoveFrom(): boolean;
    canParentOf(itemType: string): boolean;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyleProperty(prop: string): any;
    getStyle(style: string): string;
    setStyle(style: string, value: string): void;
    setStyleProperty(prop: string, value: any): void;
    setItemsStyleProperty(sources: IPropertySource[], prop: string, value: any): void;
    isChildProp(prop: string): boolean;
    getSubStyleProperty(prop: string, style: string): any;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    isCollectionProp(): boolean;
    getPropertySources(): IPropertySource[];
    abstract get owner(): ReportPageItem;
    abstract get count(): number;
    abstract get items(): ReportPageItem[];
    abstract get(index: number): T;
    abstract indexOf(item: T): number;
    preparePrint(ctx: PrintContext): void;
    forEach(callback: (item: T, index: number) => void): void;
    protected abstract _doMoveItem(from: number, to: number): boolean;
    moveItem(from: number, to: number): boolean;
    get styles(): Styles;
    canCopy(): boolean;
    canDelete(): boolean;
    protected _itemChanged(item: T, prop: string, newValue: any, oldValue: any): void;
    protected _itemAdded(item: T): void;
    protected _itemsAdded(items: T[]): void;
    protected _itemRemoved(item: T, oldParent: ReportGroupItem | ReportItemCollection): void;
    protected _itemsRemoved(items: T[]): void;
    protected _indexChanged(): void;
    protected _doPreparePrint(ctx: PrintContext): void;
}

declare abstract class ReportItemCollectionItem extends ReportPageItem {
    private _collection;
    private _styles;
    constructor(collection: ReportItemCollection, src?: any);
    protected _doInitDefaults(): void;
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    getSaveType(): string;
    canRemoveFrom(): boolean;
    getPropDomain(prop: IPropInfo): any[];
    getStyleProps(): IPropInfo[];
    getStyle(style: string): string;
    setStyle(style: string, value: any): void;
    getStyleProperty(prop: string): string;
    setStyleProperty(prop: string, value: any): void;
    getSubStyleProps(prop: string): IPropInfo[];
    getPlaceHolder(prop: IPropInfo): string;
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getSubStyleProperty(prop: string, style: string): any;
    isChildProp(prop: string): boolean;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    isCollectionItem(): boolean;
    abstract get itemType(): string;
    /** styles */
    get styles(): Styles;
    set styles(value: Styles);
    get ctor(): string | undefined;
    load(src: any): void;
    save(target: any): any;
    get collection(): ReportItemCollection<any>;
    get level(): number;
    protected _doLoad(src: any): void;
    protected _doAfterLoad(src: ReportSource): void;
    protected _doSave(target: any): void;
    protected _doAfterSave(target: ReportTarget): void;
    protected abstract _getStyleProps(): string[];
    protected _changed(prop: string, newValue: any, oldValue: any): void;
}

/* Excluded from this release type: ReportItemElement */

/**
 * Report Item Element들에 대한 정보를 한곳에 모아서 등록해놓고 용이하게 꺼내쓰기 위해 작성
 */
declare class ReportItemElementMap extends Base {
    private _reportItemElements;
    constructor();
    add<T extends ReportItem>(itemElement: ReportItemElement<T>): void;
    getItemElements(): ReportItemElement<ReportItem>[];
    getItemElementByModelHash<T extends ReportItem>(hash: string): ReportItemElement<T> | undefined;
    getBandElementByModel<T extends DataBand>(model: DataBand): BandElement<T> | undefined;
}

/**
 * 특정 속성 카테고리에서 자식 스타일 정보를 하위로 생성해야할 때 사용
 */
declare abstract class ReportItemObject<T extends ReportItem> extends ReportPageItem implements ReportObject {
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: any[];
    private _item;
    private _styles;
    constructor(item: T);
    get outlineParent(): IOutlineSource | undefined;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    getSaveType(): string;
    canRemoveFrom(): boolean;
    abstract getSaveLabel(): string;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    getSubStyleProps(prop: string): IPropInfo[];
    getPlaceHolder(prop: IPropInfo): string;
    getPropDomain(prop: IPropInfo): any[];
    setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    getStyle(style: string): string;
    setStyle(style: string, value: string): void;
    getStyleProperty(prop: string): any;
    setStyleProperty(prop: string, value: any): void;
    isChildProp(prop: string): boolean;
    getSubStyleProperty(prop: string, style: string): any;
    setSubStyleProperty(prop: string, style: string, value: any): void;
    setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    get item(): T;
    get page(): ReportPageBase;
    get report(): ReportBase;
    get styles(): Styles;
    set styles(value: Styles);
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource): void;
    save(target: ReportTarget): boolean;
    isCollection(): boolean;
    protected _doDefaultInit(): void;
    protected _doLoad(loader: IReportLoader, source: ReportSource): void;
    protected _doSave(target: ReportTarget): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    protected _changed(prop: string, newValue: unknown, oldValue: unknown): void;
}

/**
 * Report Item들에 대한 정보를 한곳에 모아서 등록해놓고 용이하게 꺼내쓰기 위해 작성
 */
declare class ReportItemRegistry extends Base {
    private readonly _masterBandItemTypes;
    private _reportItemFlatMap;
    constructor();
    add(item: ReportItem): void;
    remove(item: ReportItem | ReportPageItem): void;
    getItems(type?: ReportItemType): ReportItem[];
    getItemCount(type: ReportItemType): number;
    /**
     * 가장 최상위에 있는 밴드의 이름들을 반환해주기 위해 작성
     * @returns 가장 최상위 위치에 있는 밴드의 이름들을 모아서 반환
     */
    getRootBandItemNames(): string[];
    getSubBandsByMasterName(masterName: string): DataBand[];
    getItemType(item: ReportItem): ReportItemType | undefined;
    private $_removeChildItems;
}

declare type ReportItemStyleCallback = (ctx: PrintContextBase, item: ReportItem, row: number, value: any) => {
    [key: string]: string | undefined;
};

declare enum ReportItemType {
    TEXT = "text",
    SUMMARY = "summary",
    IMAGE = "image",
    CHECK = "check",
    STACK = "stack",
    CBOX = "cbox",
    RBOX = "rbox",
    DBOX = "dbox",
    LIST = "list",
    TABLE = "table",
    SPACE = "space",
    SIMPLEBAND = "simpleband",
    TABLEBAND = "tableband",
    BANDGROUP = "bandgroup",
    BANDCELL = "bandcell",
    CROSSTAB = "crosstab",
    DATALIST = "datalist",
    TEXTBAND = "textband",
    FLOATING = "floating",
    SHAPE = "shape",
    BARCODE = "barcode",
    QRCODE = "qrcode",
    DATAMATRIX = "datamatrix",
    BAR = "bar",
    RATING = "rating",
    HTML = "html",
    HTMLVIEW = "htmlview",
    SVG = "svg",
    SIGN = "sign",
    REALCHART = "realchart",
    HICHART = "hichart",
    PAGE = "page"
}

declare type ReportItemValueCallback = (ctx: PrintContextBase, item: ReportItem, row: number, value: any) => any;

declare type ReportItemView = ReportItemElement<ReportItem>;

declare type ReportItemVisibleCallback = (ctx: PrintContextBase, item: ReportItem, row: number, value: any) => boolean;

declare interface ReportObject {
    /**
     * 속성 불러오기
     * @param loader 리포트 속성 로더
     * @param source 리포트 속성을 불러올 소스
     */
    load(loader: IReportLoader, source: ReportSource): void;
    /**
     * 속성 저장하기
     * @param target 리포트 속성을 저장할 타겟
     */
    save(target: ReportTarget): boolean;
    /**
     * 저장할 때 사용되는 레이블명 (ReportPageItem.loadObject/saveObject에서 사용)
     */
    getSaveLabel(): string;
    /**
     * 디자이너에서 추기될 때 실행되는 초기값 설정
     */
    defaultInit(): void;
    /**
     * ReportObject를 자식으로 갖는 컬렉션인지 여부
     */
    isCollection(): boolean;
}

declare type ReportOptions = {
    reportId?: string;
};

declare interface ReportOptions_2 {
    reportId?: string;
}

/**
 * 리포트 페이지 모델. 하나 이상의 section들로 구성된다.
 *
 * 1. band는 body의 최상위 항목으로만 추가될 수 있다. 즉, 다른 항목의 자식이 될 수 없다.
 */
declare class ReportPage extends ReportPageBase {
    static readonly PROP_NO_PAGE_BREAK = "noPageBreak";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _noPageBreak;
    private _reportHeader;
    private _reportFooter;
    private _pageHeader;
    private _pageFooter;
    private _body;
    private _backItems;
    private _frontItems;
    private _addItemSection;
    /**
     * true로 지정되면 다른 페이지로 디자인돼도 출력 시 최대한 이전 페이지에 연결해서 출력한다.
     */
    get noPageBreak(): boolean;
    set noPageBreak(value: boolean);
    /**
     * reportHeader
     */
    get reportHeader(): ReportHeader;
    set reportHeader(section: ReportHeader);
    /**
     * reportFooter
     */
    get reportFooter(): ReportFooter;
    set reportFooter(section: ReportFooter);
    /**
     * pageHeader
     */
    get pageHeader(): PageHeader;
    set pageHeader(section: PageHeader);
    /**
     * pageFooter
     */
    get pageFooter(): PageFooter;
    set pageFooter(section: PageFooter);
    /**
     * body
     */
    get body(): PageBody;
    set body(section: PageBody);
    /**
     * addItemSection
     */
    get addItemSection(): ItemAddSection<PageBody>;
    set addItemSection(section: ItemAddSection<PageBody>);
    get backContainer(): PageItemContainer;
    set backContainer(section: PageItemContainer);
    getBackContainer(): PageItemContainer;
    /**
     * backItems
     */
    get backItems(): ReportItem[];
    get frontContainer(): PageItemContainer;
    set frontContainer(section: PageItemContainer);
    getFrontContainer(): PageItemContainer;
    /**
     * frontItems
     */
    get frontItems(): ReportItem[];
    getPageLabel(): string;
    outlineVisible(child: IOutlineSource): boolean;
    getEditProps(): IPropInfo[];
    getPasteTarget(): ReportGroupItem;
    protected _doSave(target: object): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _createRemoveItemsCommand(items: ReportPageItem[]): ReportEditCommand;
    afterLayout(printing: boolean): void;
    /**
     * ReportPage는 따로 visible 속성을 설정하지 않으므로 reportItem.isPrintable을 사용하지 않는다.
     * @returns
     */
    isPrintable(context: PrintContextBase): boolean;
    protected _initSections(): ReportGroupItem[];
    protected _createPageBody(): PageBody;
    protected _createReportFooter(): ReportFooter;
    /**
     * 양식(target)에 저장되는 리포트 푸터 필드명
     */
    protected _getReportFooterSourceFieldName(): string;
}

declare abstract class ReportPageBase extends ReportGroupItem implements IEventAware {
    static readonly PROP_PAGE_TYPE = "type";
    static readonly PROP_ORIENTATION = "orientation";
    static readonly PROP_MARGIN_LEFT = "marginLeft";
    static readonly PROP_MARGIN_RIGHT = "marginRight";
    static readonly PROP_MARGIN_TOP = "marginTop";
    static readonly PROP_MARGIN_BOTTOM = "marginBottom";
    static readonly ITEM_ADDED = "onPageItemAdded";
    static readonly ITEMS_ADDED = "onPageItemsAdded";
    static readonly ITEM_REMOVED = "onPageItemRemoved";
    static readonly ITEMS_REMOVED = "onPageItemsRemoved";
    static readonly ITEM_CHANGED = "onPageItemChanged";
    static readonly COLLECTION_CHANGED = "onPageCollectionChanged";
    static readonly PROPINFOS: IPropInfo[];
    private _type;
    private _orientation;
    private _marginLeft;
    private _marginRight;
    private _marginTop;
    private _marginBottom;
    private _marginLeftDim;
    private _marginRightDim;
    private _marginTopDim;
    private _marginBottomDim;
    private _report;
    private _pageIndex;
    protected _events: EventAware;
    private _nameMap;
    private _hashMap;
    private _sections;
    saveTag: string;
    protected _loading: boolean;
    private _removing;
    constructor(report: ReportBase, name?: string, needHashmap?: boolean);
    addListener(listener: object): IEventAware;
    removeListener(listener: object): IEventAware;
    /**
     * report
     */
    get report(): ReportBase;
    /**
     * type
     */
    get type(): ReportPageType;
    set type(type: ReportPageType);
    /**
     * orientation
     */
    get orientation(): PaperOrientation;
    set orientation(value: PaperOrientation);
    /** marginLeft */
    get marginLeft(): ValueString;
    set marginLeft(value: ValueString);
    /** marginRight */
    get marginRight(): ValueString;
    set marginRight(value: ValueString);
    /** marginTop */
    get marginTop(): ValueString;
    set marginTop(value: ValueString);
    /** marginBottom */
    get marginBottom(): ValueString;
    set marginBottom(value: ValueString);
    /**
     * pageIndex
     */
    get pageIndex(): number;
    set pageIndex(index: number);
    /**
     * sections
     */
    get sections(): ReportGroupItem[];
    /**
     * loading
     */
    get loading(): boolean;
    getOrientation(): PaperOrientation;
    getFrontContainer(): PageItemContainer;
    getBackContainer(): PageItemContainer;
    abstract getPasteTarget(): ReportGroupItem;
    abstract afterLayout(printing: boolean): void;
    getPageLabel(): string;
    getRemoveCommand(item: ReportPageItem): EditCommand;
    /**
     * 만약 리포트 페이지마다 margin이 지정되어있다면 해당 값을 구하기 위해 작성
     * @returns reportPage에 지정된 margin값 지정이 되어있지 않다면 report.paper의 margin 값
     */
    getPageMargins(): {
        pageMarginTop: number;
        pageMarginBottom: number;
        pageMarginLeft: number;
        pageMarginRight: number;
    };
    getPageRect(rect: Rectangle): Rectangle;
    getPageSize(): Rectangle;
    getItem(name: string): ReportItem;
    itemOf(hash: string): ReportItem;
    protected abstract _createRemoveItemsCommand(item: ReportPageItem[]): ReportEditCommand;
    removeItems(commands: EditCommandStack, items: ReportPageItem[]): void;
    search(page: number, key: string, options: FindOptions, results: FindResult[]): void;
    get page(): ReportPageBase;
    get outlineLabel(): string;
    get pathLabel(): string;
    getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    canMove(): boolean;
    canDelete(): boolean;
    protected _ignoreItems(): boolean;
    canResize(dir: ResizeDirection): boolean;
    collectInvalids(report: ReportBase, invalids: {
        item: ReportItem;
        reason: string;
    }[]): void;
    protected abstract _initSections(): ReportGroupItem[];
    private $_itemAdded;
    private $_addItem;
    private $_itemsAdded;
    private $_itemRemoved;
    private $_removeItem;
    private $_itemsRemoved;
    private $_itemChanged;
    private $_collectionChanged;
    /**
     * ReportItem.name에서 호출한다.
     */
    private $_nameChanged;
    /**
     * Report.onDesignDataManagerNameChanged에서 호출한다.
     */
    private $_dataNameChanged;
    /**
     * Report.onDesignDataManagerFieldNameChanged 호출한다.
     */
    private $_dataFieldNameChanged;
    protected _fireItemAdded(item: ReportPageItem, index: number, silent: boolean): void;
    protected _fireItemsAdded(items: ReportPageItem[], index: number): void;
    protected _fireItemRemoved(item: ReportPageItem, oldParent: ReportGroupItem | ReportItemCollection): void;
    protected _fireItemsRemoved(items: ReportPageItem[]): void;
    protected _fireItemChanged(item: ReportPageItem, prop: string, value: any, oldValue: any): void;
    protected _fireCollectionChanged(collection: ReportItemCollection<any>): void;
}

/**
 * Report page 구성 요소 기반 클래스.
 * 현재, ReportItem, TableBandField가 있다.
 */
declare abstract class ReportPageItem extends Base implements ISelectionSource, IOutlineSource, IPropertySource {
    get selectedItem(): ReportPageItem;
    canSelectedWith(other: ISelectionSource): boolean;
    abstract get outlineParent(): IOutlineSource;
    abstract get outlineExpandable(): boolean;
    abstract get outlineLabel(): string;
    outlineOrder: number;
    get index(): number;
    get outlineItems(): IOutlineSource[];
    outlineVisible(child: IOutlineSource): boolean;
    abstract getSaveType(): string;
    abstract canRemoveFrom(): boolean;
    canParentOf(itemType: string): boolean;
    abstract getEditProps(): IPropInfo[];
    abstract getStyleProps(): IPropInfo[];
    abstract getSubStyleProps(prop: string): IPropInfo[];
    abstract getPlaceHolder(prop: IPropInfo): string;
    abstract getPropDomain(prop: IPropInfo): any[];
    getProperty(prop: string): any;
    setProperty(prop: string, value: any): void;
    toggleProperty(prop: string): void;
    abstract setItemsProperty(sources: IPropertySource[], prop: string, value: any): void;
    abstract getStyle(style: string): string;
    abstract setStyle(style: string, value: string): void;
    abstract getStyleProperty(prop: string): any;
    abstract setStyleProperty(prop: string, value: any): void;
    abstract isChildProp(prop: string): boolean;
    abstract getSubStyleProperty(prop: string, style: string): any;
    abstract setSubStyleProperty(prop: string, style: string, value: any): void;
    abstract setItemsSubStyleProperty(sources: IPropertySource[], prop: string, style: string, value: any): void;
    abstract canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    abstract adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    /**
     * 이 속성 값이 변경되면 전체 property model을 변경해야 하는가?
     */
    isDominantProp(prop: IPropInfo): boolean;
    isCollectionProp(): boolean;
    isEditableCollection(): boolean;
    isCollectionItem(): boolean;
    getPropertySources(): IPropertySource[];
    getCollectionLabel(): string;
    setItemsStyleProperty(sources: IPropertySource[], prop: string, value: any): void;
    getPopupPropLabel(prop: string): string;
    hasStyleProperty(prop: string): boolean;
    abstract get page(): ReportPageBase;
    abstract get displayPath(): string;
    abstract get level(): number;
    abstract get styles(): Styles;
    get outlineSource(): IOutlineSource;
    get parent(): ReportGroupItem;
    get dataParent(): ReportGroupItem;
    get displayParent(): ReportPageItem;
    /**
     * 선택됐을 때 표시될 marquee를 생성하는 item.
     */
    get marqueeParent(): ReportItem;
    get printable(): boolean;
    get printEditable(): boolean;
    isGroup(): boolean;
    isAncestorOf(item: ReportPageItem): boolean;
    getProps(): any;
    setProps(src: any): void;
    canMove(): boolean;
    canCopy(): boolean;
    canDelete(): boolean;
    canMakeSnippet(): boolean;
    isUsed(data: IReportData): boolean;
    protected _loadProp(src: any, prop: string): void;
    protected _loadProps(src: any, ...props: string[]): void;
    protected _loadPropOf(src: any, info: IPropInfo): void;
    protected _loadPropsOf(src: any, infos: IPropInfo[]): void;
    protected _saveProp(target: object, prop: string): void;
    protected _saveProps(target: object, ...props: string[]): void;
    /**
     * 속성값이 undefined 이거나 IPropInfo.default와 동일하면 저장하지 않는다.
     * 속성의 기본값은 undefined이거나 IPropInfo.default와 동일해야 한다!!
     */
    protected _savePropOf(target: object, info: IPropInfo): void;
    protected _savePropsOf(target: object, infos: IPropInfo[]): void;
    protected _loadObject(item: ReportItem | ReportObject, loader: IReportLoader, src: any): void;
    protected _loadObjects(items: ReportItem[] | ReportObject[], loader: IReportLoader, src: any): void;
    protected _saveObject(item: ReportItem | ReportObject, target: any): void;
    protected _saveObjects(items: ReportItem[] | ReportObject[], target: any): void;
    protected _arrangePaddingStyles(styles: Styles): void;
    protected _validateSize(v: ValueString): ValueString;
    protected _validateStylesValue(styles: {
        [key: string]: string;
    }): void;
}

declare enum ReportPageType {
    REPORT = "report",
    SUB_BAND = "subBand",
    SHEET = "sheet"
}

declare class ReportRootItem extends ReportGroupItem {
    static readonly PROP_REPORT_NAME = "name";
    static readonly PROP_REPORT_AUTHOR = "author";
    static readonly PROP_REPORT_VERSION = "version";
    static readonly PROP_REPORT_DESCRIPTION = "description";
    static readonly PROP_PRINT_MAX_PAGE_COUNT = "maxPageCount";
    static readonly PROP_PAPER_ORIENTATION = "paperOrientation";
    static readonly PROP_PAPER_SIZE = "paperSize";
    static readonly PROP_PAPER_WIDTH = "paperWidth";
    static readonly PROP_PAPER_HEIGHT = "paperHeight";
    static readonly PROP_MARGIN_LEFT = "marginLeft";
    static readonly PROP_MARGIN_RIGHT = "marginRight";
    static readonly PROP_MARGIN_TOP = "marginTop";
    static readonly PROP_MARGIN_BOTTOM = "marginBottom";
    static readonly PROP_EDITING = "editing";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _report;
    private _type;
    private _maxPageCount;
    private _editing;
    constructor(report: ReportBase, type: ReportType, name?: string);
    get report(): ReportBase;
    /** type */
    get type(): ReportType;
    /** name */
    get name(): string;
    set name(value: string);
    /** author */
    get author(): string;
    set author(value: string);
    /** version */
    get version(): string;
    set version(value: string);
    /** description */
    get description(): string;
    set description(value: string);
    /**
     * 최대 출력 페이지 수.
     * 내용에 상관 없이 이 속성에 지정한 페이지 수만큼만 출력한다.
     */
    get maxPageCount(): number;
    set maxPageCount(value: number);
    /** paperOrientation */
    get paperOrientation(): PaperOrientation;
    set paperOrientation(value: PaperOrientation);
    /** paperSize */
    get paperSize(): PaperSize;
    set paperSize(value: PaperSize);
    /** paperWidth */
    get paperWidth(): ValueString;
    set paperWidth(value: ValueString);
    /** paperHeight */
    get paperHeight(): ValueString;
    set paperHeight(value: ValueString);
    /** marginLeft */
    get marginLeft(): ValueString;
    set marginLeft(value: ValueString);
    /** marginRight */
    get marginRight(): ValueString;
    set marginRight(value: ValueString);
    /** marginTop */
    get marginTop(): ValueString;
    set marginTop(value: ValueString);
    /** marginBottom */
    get marginBottom(): ValueString;
    set marginBottom(value: ValueString);
    /** editing */
    get editing(): ReportEditableObject<ReportRootItem>;
    get outlineLabel(): string;
    get pathLabel(): string;
    get displayPath(): string;
    protected _ignoreItems(): boolean;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    canResize(dir: ResizeDirection): boolean;
    canDelete(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare interface ReportSaveOptions {
    pageOnly?: boolean;
    includeSampleData?: boolean;
}

/**
 * 기본 report snippet 모델.
 */
declare class ReportSnippet extends SnippetBase {
    getType(): string;
    canSnippetable(items: ReportItem[]): boolean;
    protected _doLoad(parent: ReportGroupItem, loader: IReportLoader, data: any[]): ReportItem[];
}

declare type ReportSource = Record<string, unknown> | Record<string, unknown>[];

declare type ReportTarget = Record<string, unknown> | Record<string, unknown>[];

declare type ReportTemplateData = {
    type: 'simple';
    values: {
        [key: string]: any;
    };
} | {
    type: 'band';
    values: {
        [key: string]: any;
    }[];
};

declare enum ReportType {
    REPORT = "report",
    EMAIL = "email",
    SHEET = "sheet"
}

/* Excluded from this release type: ReportView */

declare abstract class ReportViewBase<T extends ReportBase = ReportBase> extends LayerElement implements IImageContainer {
    static readonly PAGE_HEAD = "rr-page-head";
    protected _model: T;
    private _loadError;
    protected _pageLayer: PageViewContainer;
    protected _emptyView: VisualElement;
    private _images;
    protected _nameMap: {
        [key: string]: ReportElement;
    };
    protected _modelDirty: boolean;
    constructor(doc: Document, printing: boolean);
    addImage(url: string): void;
    imageLoaded(url: string): void;
    imagesAllLoaded(): boolean;
    abstract get pageView(): VisualElement;
    /** model */
    get model(): T;
    set model(value: T);
    /** loadError */
    get loadError(): string;
    set loadError(value: string);
    get zoom(): number;
    abstract getElementOf(model: ReportPageItem): ReportElement;
    getItemBoundingRect(element: VisualElement, rotated?: boolean): Rectangle;
    getTableElementsOfColumn(column: TableColumnBase): TableView[];
    getTableElementOfRow(row: TableRow): TableView;
    getTableElementOfColumn(column: TableColumn): TableContainerElement;
    getTableBandElementOfColumn(column: TableBandColumn): TableBandElement;
    protected _getCssSelector(): string;
    protected abstract _createEmptyView(doc: Document): VisualElement;
    abstract _createElement(item: ReportItem): ReportElement;
    protected abstract _resetPages(model: T): void;
    protected _modelReset(): void;
    protected _modelChanged(): void;
    _preparePrint(ctx: PrintContext): void;
    protected onReportReset(report: ReportBase): void;
    protected onReportPaperChanged(report: ReportBase): void;
    protected onReportPageAdded(report: ReportBase, page: ReportPageBase): void;
    protected onReportPageRemoved(report: ReportBase, page: ReportPageBase, index: number): void;
    protected onReportChanged(report: ReportBase): void;
    protected onReportItemAdded(report: ReportBase, item: ReportItem, index: number, silent: boolean): void;
    protected onReportItemRemoved(report: ReportBase, item: ReportItem, oldParent: ReportGroupItem): void;
    protected onReportItemsRemoved(report: ReportBase, items: ReportPageItem[]): void;
    protected onReportItemChanged(report: ReportBase, item: ReportItem, prop: string, value: any, oldValue: any): void;
    protected onReportCommandStackChanged(report: ReportBase, cmd: EditCommand): void;
    get editor(): ReportEditorBase;
}

declare enum ResizeDirection {
    LEFT = "left",
    RIGHT = "right",
    TOP = "top",
    BOTTOM = "bottom",
    TOP_LEFT = "topLeft",
    BOTTOM_RIGHT = "bottomRight",
    TOP_RIGHT = "topRight",
    BOTTOM_LEFT = "bottomLeft"
}

declare namespace ResizeDirection {
    function isLeft(dir: ResizeDirection): boolean;
    function isTop(dir: ResizeDirection): boolean;
    function isEdge(dir: ResizeDirection): boolean;
    function isIn(dir: ResizeDirection, ...dirs: ResizeDirection[]): boolean;
}

/**
 * 수평으로 자식 item들을 배치한다.
 * Html flex box를 활용한다.
 */
declare class RowBoxContainer extends BoxContainer {
    static readonly CHILD_PROPS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Row Box";
    private _child_top;
    private _child_bottom;
    constructor(name: string);
    /**
     * top
     */
    getTopOf(item: ReportItem): number | string;
    setTopOf(item: ReportItem, value: number | string): void;
    /**
     * bottom
     */
    getBottomOf(item: ReportItem): number | string;
    setBottomOf(item: ReportItem, value: number | string): void;
    getSaveType(): string;
    get outlineLabel(): string;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoadChild(child: ReportItem, src: any): void;
    canAlignTo(item: ReportPageItem, to: string): boolean;
    canResizeChild(item: ReportItem, dir: ResizeDirection): boolean;
}

/**
 * View for RowBoxContainer
 */
declare class RowBoxContainerElement extends BoxContainerElement<RowBoxContainer> {
    private _points;
    constructor(doc: Document, model: RowBoxContainer);
    getColPoints(): number[];
    get debugLabel(): string;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContext): void;
    protected _layoutItem(ctx: PrintContext, child: ReportElement, model: ReportItem, x: number, y: number, width: number, height: number): void;
    getUpper(view: ReportItemView): ReportItemView;
    getLower(view: ReportItemView): ReportItemView;
}

declare class RowBoxMarquee extends EditMarquee<RowBoxContainerElement> {
    private static readonly STYLE_NAME;
    static getTarget(target: ReportItem, dom: HTMLElement): IEditMarqueeTarget;
    private _topItems;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doLayout(doc: Document, dom: HTMLElement, rowBoxRect: Rectangle): void;
    private $_getItems;
}

declare class RowHeaderLayer extends HeaderLayer$1 {
    static readonly MENU = "row_header";
    private _CONTEXT_MENUS;
    _headerView: DesingRowHeaderView;
    private _yPage;
    private _rowPts;
    private _startPosition;
    constructor(doc: Document, editor: ExcelReportEditor);
    get startPosition(): number;
    set startPosition(position: number);
    setPage(reportView: ExcelReportEditView, rowPts: number[], zoom: number): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContextBase, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doLayoutContent(ctx: PrintContextBase): void;
    private $_layoutHandles;
}

declare class RowHeaderSelection2 extends HeaderSelection implements ISelectionSource {
    row: SheetRow;
    constructor(row: SheetRow, count?: number);
    get selectedItem(): SheetRow;
}

declare abstract class RulerView extends LayerElement {
    protected static readonly RULER_WIDTH = 14;
    private _unit;
    private _startPos;
    private _length;
    private _marginStart;
    private _marginEnd;
    private _zoom;
    private _container;
    protected _contentMask: HTMLDivElement;
    protected _tickBar: HTMLDivElement;
    private _tickPool;
    protected _ticks: HTMLSpanElement[];
    private _labelPool;
    protected _labels: HTMLSpanElement[];
    protected _lengthDim: Dimension;
    protected _marginStartDim: Dimension;
    protected _marginEndDim: Dimension;
    private _layoutChanged;
    private _dimChanged;
    constructor(doc: Document, name: string, container: ReportEditorBase);
    protected _doDispose(): void;
    /** unit */
    get unit(): PrintUnit;
    set unit(value: PrintUnit);
    /** startPos */
    get startPos(): number;
    set startPos(value: number);
    /** length */
    get length(): number;
    set length(value: number);
    get marginStart(): number;
    set marginStart(value: number);
    get marginEnd(): number;
    set marginEnd(value: number);
    get zoom(): number;
    set zoom(value: number);
    refreshView(): void;
    getTick(index: number): HTMLSpanElement;
    setFocusedElement(element: ReportElement): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected abstract _doRefreshView(container: ReportEditorBase): void;
    protected _changed(): void;
    protected _dimensionChanged(): void;
    protected _clearTicks(): void;
    protected _addTick(doc: Document): HTMLSpanElement;
    protected _addLabel(doc: Document): HTMLSpanElement;
    protected _prepareTicks(doc: Document): void;
}

declare type SaveCallbackResponse = {
    reportId: string;
    message?: string;
};

/**
 * section bar
 */
declare abstract class SectionBar extends Base {
    vertical: boolean;
    static setItemTags(items: SectionBarItemConfig[], tag: SectionBarItem['tag']): void;
    private _items;
    private _itemMap;
    private _groupMap;
    constructor(vertical: boolean, config: SectionBarItemConfig[]);
    /** count */
    get count(): number;
    get items(): SectionBarItem[];
    get(index: number): SectionBarItem;
    itemOf<T extends SectionBarSingleItem = SectionBarSingleItem>(id: string): T;
    groupOf(id: string): SectionBarGroupItem;
    groupsOf(tag: string): SectionBarGroupItem[];
    itemsOf(tag: string): SectionBarItem[];
    refresh(ctx: IDesignerContext): void;
    private $_load;
    private $_addGroup;
    private $_addItem;
    protected abstract _doRefresh(ctx: IDesignerContext): void;
}

declare abstract class SectionBarActionItem extends SectionBarItemBase {
    private _label?;
    private _hint?;
    readonly icon?: string;
    readonly svg?: string;
    readonly placeholder?: string;
    readonly action?: IDesignerAction;
    constructor(config: SectionBarActionItemConfig);
    get label(): string | undefined;
    set label(value: string);
    get hint(): string | undefined;
}

declare interface SectionBarActionItemConfig extends SectionBarItemConfigBase {
    label?: string;
    icon?: string;
    hint?: string;
    svg?: string;
    action?: IDesignerAction;
    placeholder?: string;
    disabled?: boolean;
}

/**
 * ToolButton의 모델
 */
declare class SectionBarButtonItem extends SectionBarActionItem {
    readonly type: 'button';
    readonly variant?: ToolButonVariant;
    constructor(config: SectionBarButtonItemConfig);
    getToolOptions(): ToolButtonOptions;
    checkDisabled(ctx: IDesignerContext): boolean;
}

declare interface SectionBarButtonItemConfig extends SectionBarActionItemConfig {
    type: 'button';
    variant?: ToolButonVariant;
}

/**
 * ToolCheck 모델
 */
declare class SectionBarCheckInputItem extends SectionBarActionItem {
    readonly type: 'check';
    value?: boolean;
    full: boolean;
    align?: Align;
    onChange?: ToolEditHandler<boolean>;
    constructor(config: SectionBarCheckItemConfig);
    getToolOptions(): ToolCheckInputOptions;
}

declare interface SectionBarCheckItemConfig extends SectionBarActionItemConfig {
    type: 'check';
    value?: boolean;
    full?: boolean;
    align?: Align;
    onChange?: ToolEditHandler<boolean>;
}

/**
 * ToolGroupView의 모델
 */
declare class SectionBarGroupItem extends SectionBarItemBase {
    readonly display?: ToolGroupViewDisplay;
    private readonly _items;
    private readonly _itemMap;
    private readonly _sectionBar;
    constructor(sectionBar: SectionBar, config: SectionBarGroupItemConfig);
    readonly type: 'group';
    /** count */
    get count(): number;
    get items(): SectionBarSingleItem[];
    getItem(index: number): SectionBarSingleItem;
    itemOf(id: string): SectionBarSingleItem;
    private $_load;
    private $_addItem;
}

declare interface SectionBarGroupItemConfig extends SectionBarItemConfigBase {
    type: 'group';
    items: SectionBarSingleItemConfig[];
    display?: ToolGroupViewDisplay;
}

/**
 * ToolInput의 모델
 */
declare class SectionBarInputItem extends SectionBarActionItem {
    readonly type: 'input';
    value?: string;
    full: boolean;
    align?: Align;
    onEdit?: ToolEditHandler<string>;
    constructor(config: SectionBarInputItemConfig);
    getToolOptions(): ToolInputOptions;
}

declare interface SectionBarInputItemConfig extends SectionBarActionItemConfig {
    type: 'input';
    value?: string;
    full?: boolean;
    align?: Align;
    onEdit?: ToolEditHandler<string>;
}

declare type SectionBarItem = SectionBarButtonItem | SectionBarInputItem | SectionBarNumberInputItem | SectionBarCheckInputItem | SectionBarSelectItem | SectionBarListItem | SectionBarTextItem | SectionBarSpaceItem | SectionBarSeparatorItem | SectionBarGroupItem;

/**
 * ToolItem의 모델
 */
declare abstract class SectionBarItemBase {
    static create(sectionBar: SectionBar, config: SectionBarItemConfig): SectionBarItem;
    abstract type: SectionBarItemType;
    readonly id: string;
    readonly tag?: any;
    readonly style?: default_2.Properties;
    visible: boolean;
    disabled: boolean;
    supportTypes: ReportType[] | undefined | null;
    serverRequired: boolean;
    protected constructor(config: SectionBarItemConfigBase);
    getToolOptions(): ToolOptions;
    checkDisabled(ctx: IDesignerContext): boolean;
}

declare type SectionBarItemConfig = SectionBarButtonItemConfig | SectionBarInputItemConfig | SectionBarNumberInputItemConfig | SectionBarCheckItemConfig | SectionBarSelectItemConfig | SectionBarListItemConfig | SectionBarTextItemConfig | SectionBarSpaceItemConfig | SectionBarSeparatorItemConfig | SectionBarGroupItemConfig;

declare interface SectionBarItemConfigBase {
    type: SectionBarItemType;
    id?: string;
    tag?: any;
    style?: default_2.Properties;
    supportTypes?: ReportType[];
    serverRequired?: boolean;
}

declare type SectionBarItemType = 'button' | 'input' | 'number-input' | 'check' | 'select' | 'list' | 'text' | 'space' | 'separator' | 'group';

declare class SectionBarListItem extends SectionBarActionItem {
    readonly type: 'list';
    constructor(config: SectionBarListItemConfig);
}

declare interface SectionBarListItemConfig extends SectionBarActionItemConfig {
    type: 'list';
}

/**
 * ToolNumberInput의 모델
 */
declare class SectionBarNumberInputItem extends SectionBarActionItem {
    readonly type: 'number-input';
    value?: number;
    full: boolean;
    align?: Align;
    min?: number;
    max?: number;
    onEdit?: ToolEditHandler<number>;
    constructor(config: SectionBarNumberInputItemConfig);
    getToolOptions(): ToolNumberInputOptions;
}

declare interface SectionBarNumberInputItemConfig extends SectionBarActionItemConfig {
    type: 'number-input';
    value?: number;
    full?: boolean;
    align?: Align;
    min?: number;
    max?: number;
    onEdit?: ToolEditHandler<number>;
}

declare interface SectionBarNumberInputItemConfig extends SectionBarActionItemConfig {
    type: 'number-input';
    value?: number;
    full?: boolean;
    align?: Align;
    min?: number;
    max?: number;
    onEdit?: ToolEditHandler<number>;
}

/**
 * ToolSelect의 모델
 */
declare class SectionBarSelectItem extends SectionBarActionItem {
    readonly type: 'select';
    domain: string[];
    iconsColors?: string[];
    value?: string;
    full: boolean;
    onEdit?: ToolEditHandler<string>;
    constructor(config: SectionBarSelectItemConfig);
    getToolOptions(): ToolSelectOptions;
}

declare interface SectionBarSelectItemConfig extends SectionBarActionItemConfig {
    type: 'select';
    domain: string[];
    iconsColors?: string[];
    value?: string;
    full?: boolean;
    onEdit?: ToolEditHandler<string>;
}

/**
 * ToolSeparator의 모델
 */
declare class SectionBarSeparatorItem extends SectionBarItemBase {
    readonly type: 'separator';
    readonly size: ToolSeparatorOptions['size'];
    readonly margin: ToolSeparatorOptions['margin'];
    readonly color: ToolSeparatorOptions['color'];
    readonly direction: ToolSeparatorOptions['direction'];
    constructor(config: SectionBarSeparatorItemConfig);
    getToolOptions(): ToolSeparatorOptions;
}

declare interface SectionBarSeparatorItemConfig extends SectionBarItemConfigBase {
    type: 'separator';
    size?: ToolSeparatorOptions['size'];
    margin?: ToolSeparatorOptions['margin'];
    color?: ToolSeparatorOptions['color'];
    direction?: ToolSeparatorOptions['direction'];
}

declare type SectionBarSingleItem = Exclude<SectionBarItem, SectionBarGroupItem>;

declare type SectionBarSingleItemConfig = Exclude<SectionBarItemConfig, SectionBarGroupItemConfig>;

declare class SectionBarSpaceItem extends SectionBarItemBase {
    readonly type: 'space';
    readonly size?: default_2.Properties['width'];
    text: string;
    constructor(config: SectionBarSpaceItemConfig);
    getToolOptions(): ToolSpaceOptions;
}

/**
 * ToolSpace의 모델
 */
declare interface SectionBarSpaceItemConfig extends SectionBarItemConfigBase {
    type: 'space';
    size?: default_2.Properties['width'];
    text?: string;
}

/**
 * ToolText의 모델
 */
declare class SectionBarTextItem extends SectionBarItemBase {
    readonly type: 'text';
    value: string;
    constructor(config: SectionBarTextItemConfig);
    getToolOptions(): ToolTextOptions;
}

declare interface SectionBarTextItemConfig extends SectionBarItemConfigBase {
    type: 'text';
    value: string;
}

/**
 * Section container base.
 */
declare abstract class SectionContainer<T extends SectionModel = SectionModel> extends VisualContainer {
    private _model;
    constructor(container: HTMLDivElement, className: string, model: T);
    /** model */
    get model(): T;
    set model(value: T);
    findToolItem(dom: Element): ToolItem;
    findToolItemById(id: string): ToolItem;
    refreshButtons(ctx: IDesignerContext): void;
    protected _createDefaultTool(): VisualTool;
    protected abstract _doBuildModel(doc: Document, model: T): void;
    protected abstract _doRefreshButtons(ctx: IDesignerContext): void;
}

/* Excluded from this release type: SectionElement */

declare enum SectionInherit {
    NONE = "none",
    HEAD = "head",
    PREVIOUS = "previous"
}

/**
 * section.
 */
declare abstract class SectionModel extends EventAware {
    ctx: IDesignerContext;
    vertical: boolean;
    constructor(ctx: IDesignerContext, vertical?: boolean);
}

declare class Selections extends EventAware {
    static readonly CHANGED = "onSelectionsChanged";
    protected _items: ISelectionSource[];
    get count(): number;
    get isEmpty(): boolean;
    get items(): ISelectionSource[];
    get pageItems(): ReportPageItem[];
    get deletableItems(): ReportPageItem[];
    get last(): ISelectionSource;
    get first(): ISelectionSource;
    get isSinlge(): boolean;
    get(index: number): ISelectionSource;
    forEach(callback: (sel: ISelectionSource, index: number) => any): void;
    indexOf(item: ISelectionSource): number;
    find(item: ReportPageItem): ISelectionSource;
    contains(item: ReportPageItem): boolean;
    clear(): boolean;
    private $_add;
    add(item: ISelectionSource): boolean;
    addAll(items: ISelectionSource[]): boolean;
    removeAt(index: number): boolean;
    remove(item: ISelectionSource): boolean;
    removeAll(except: ISelectionSource): boolean;
    /**
     * items 들만 남기고 나머지는 제거한다.
     */
    replace(items: ISelectionSource[]): boolean;
    resize(sel: TableSelection, to: TableCell): void;
    resizeBy(sel: TableSelection, dx: number, dy: number): void;
    getLinkedTableColumns(column: TableColumnBase): TableColumnBase[];
    isSingleTableColumns(): boolean;
    getLinkedTableRows(row: TableRow): TableRow[];
    isSingleTableRows(): boolean;
    protected _changed(): void;
}

declare interface SelectOption {
    value: string;
    label: string;
}

declare type ServerReportGroupSource = {
    type: 'group';
    name: string;
    children: ServerReportSources;
    createdAt?: string;
    updatedAt?: string;
};

declare type ServerReportSource = {
    type: 'report' | 'email' | 'sheet';
    id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
};

declare type ServerReportSources = (ServerReportGroupSource | ServerReportSource)[];

/**
 * A sheet design model.
 */
declare class Sheet extends ReportGroupItem {
    static readonly PROP_SHEET_NAME = "sheetName";
    static readonly PROP_COLUMNS = "columns";
    static readonly PROP_ROWS = "rows";
    static readonly PROP_COL_COUNT = "colCount";
    static readonly PROP_ROW_COUNT = "rowCount";
    static readonly PROP_COLUMN_WIDTH = "columnWidth";
    static readonly PROP_AUTO_ROW_HEIGHT = "autoRowHeight";
    static readonly PROP_ROW_HEIGHT = "rowHeight";
    static readonly PROPINFOS: IPropInfo[];
    private _sheetName;
    private _colCount;
    private _rowCount;
    private _columnWidth;
    private _autoRowHeight;
    private _rowHeight;
    private _owner;
    private _columns;
    private _rows;
    private _colWidths;
    private _rowHeights;
    private _conditionalFormatting;
    private _conditionalFormattingRef;
    constructor(owner?: ISheetOwner, options?: ISheetOptions);
    get outlineItems(): IOutlineSource[];
    /**
     * sheetName
     */
    get sheetName(): string;
    set sheetName(value: string);
    /**
     * design-time 컬럼 갯수.
     */
    get colCount(): number;
    set colCount(value: number);
    protected _validateColCount(count: number): number;
    /**
     * design-time row 갯수.
     */
    get rowCount(): number;
    set rowCount(value: number);
    protected _validateRowCount(count: number): number;
    /**
     * default column width.
     */
    get columnWidth(): number;
    set columnWidth(value: number);
    /**
     * default row height.
     */
    get rowHeight(): number;
    set rowHeight(value: number);
    getRowHeight(): number;
    /**
     * true로 지정되면 명시적으로 높이가 설정되지 않은 행의 높이가 출력 시에 내용에 따라 자동 결정된다.
     */
    get autoRowHeight(): boolean;
    set autoRowHeight(value: boolean);
    get columns(): SheetColumnCollection;
    get rows(): SheetRowCollection;
    get isEmpty(): boolean;
    get conditionalFormatting(): IConditionalFormattingOptions[];
    get conditionalFormattingRef(): string[];
    addConditionalRef(ref: string): void;
    createColumn(): SheetColumn;
    createRow(): SheetRow;
    columnAt(index: number): SheetColumn;
    addColumn(column: SheetColumn, index: number): void;
    removeColumn(column: SheetColumn): void;
    moveColumn(column: SheetColumn, newIndex: number): void;
    rowAt(index: number): SheetRow;
    addRow(row: SheetRow, index: number): void;
    removeRow(row: SheetRow): void;
    moveRow(row: SheetRow, newIndex: number): void;
    getColWidths(): number[];
    getRowHeights(): number[];
    getCellWidth(col: number, span: number): number;
    getCellHeight(row: number, span: number): number;
    setConditionalFormatting(options: IConditionalFormattingOptions): void;
    getCD(): IConditionalFormattingOptions[];
    prepareRowHeightsAndColumnWidths(): void;
    getSaveType(): string;
    get outlineLabel(): string;
    get pathLabel(): string;
    canDelete(): boolean;
    canSized(): boolean;
    canRotate(): boolean;
    needDesignBorder(): boolean;
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, group: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doPrepareLayout(printing: boolean): void;
    private $_resetColWidths;
    private $_resetRowHeights;
}

declare abstract class SheetCollectionItem extends ReportItemCollectionItem {
    private static readonly STYLE_PROPS;
    _index: number;
    remove(): void;
    abstract get itemType(): string;
    get collection(): SheetItemCollection;
    /**
     * index
     */
    get index(): number;
    get page(): ReportPageBase;
    protected _getStyleProps(): string[];
}

/**
 * sheet column info.
 */
declare class SheetColumn extends SheetCollectionItem {
    static readonly PROP_COL = "col";
    static readonly PROP_WIDTH = "width";
    static readonly PROPINFOS: IPropInfo[];
    private _col;
    private _width;
    /**
     * width
     */
    get col(): number;
    set col(value: number);
    /**
     * width
     */
    get width(): number;
    set width(value: number);
    equals(other: any): boolean;
    get itemType(): string;
    get outlineLabel(): string;
    get displayPath(): string;
    getCollectionLabel(): string;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): void;
}

declare class SheetColumnCollection extends SheetItemCollection<SheetColumn> {
    findColumn(col: number): SheetColumn;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    getPropertySources(): IPropertySource[];
    getSaveType(): string;
    protected _createItem(source: any): SheetColumn;
}

declare class SheetColumnHeaderLayer extends HeaderLayer<SheetColumnHeaderView> {
    private _colPts;
    private _x1;
    private _xHeader;
    private _hHeader;
    constructor(doc: Document);
    protected _createHeaderView(doc: Document): SheetColumnHeaderView;
    refresh(doc: Document, selections: SheetSelectionCollection, colPts: number[]): void;
    scroll(sx: number, sy: number): void;
    getResizer(x: number, y: number): number;
    getResizerPos(col: number): number;
    getColWidth(col: number): number;
}

declare class SheetColumnHeaderView extends ExcelColumnHeaderView {
    refresh(doc: Document, colPts: number[]): void;
    protected _getCssSelector(): string;
}

/**
 * Excel 리포트 결과를 sheet-base로 표시한다.
 */
declare class SheetEditor extends ReportContainer<ExcelPrintContext> {
    private _virtualMode;
    private _virtualThreadoff;
    private _page;
    private _colContainer;
    private _titleView;
    private _colHeader;
    private _rowHeader;
    private _rowContainer;
    private _editContainer;
    private _editViews;
    private _editView;
    private _signLayer;
    private _signPanel;
    private _signed;
    private _stampPanel;
    private _needReset;
    private _layouted;
    private _observer;
    xOrg: number;
    yOrg: number;
    private _cells;
    private _heights;
    private _previewOptions;
    private _report;
    constructor(containerId: string | HTMLDivElement);
    get editView(): SheetEditView;
    get columnHeader(): SheetColumnHeaderLayer;
    get rowHeader(): SheetRowHeaderLayer;
    get cells(): IExcelRenderInfo[][];
    get heights(): number[][];
    /**
     * page
     */
    get page(): number;
    set page(value: number);
    setPage(index: number): void;
    get sx(): number;
    get sy(): number;
    onGetStampImage: () => Promise<string>;
    preview(report: ExcelReport, data: ReportDataProvider, options: IPreviewOptions, allPages?: boolean): void;
    load(file: File): Promise<void>;
    invalidateExtents(): void;
    invalidateColumnWidths(): void;
    invalidateRowHeights(): void;
    makeCellVisible(cell: ICell): boolean;
    scrollVert(delta: number): void;
    scrollHorz(delta: number): void;
    moveHome(shift: boolean): boolean;
    moveLeft(shift: boolean): boolean;
    moveRight(shift: boolean): boolean;
    moveUp(shift: boolean): boolean;
    moveDown(shift: boolean): boolean;
    rowAt(y: number): number;
    colAt(x: number): number;
    getClientRect(dx: number, dy: number): {
        x: number;
        y: number;
        right: number;
        bottom: number;
    };
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _createDefaultTool(): VisualTool;
    protected _createContext(): ExcelPrintContext;
    protected _doLayout(bounds: Rectangle): void;
    private $_clickHandler;
    $_keydownHandler: (ev: KeyboardEvent) => boolean;
}

/**
 * @private
 *
 * Sheet-based report page table.
 */
declare class SheetEditTable extends ExcelTableElementBase {
    private _editable;
    private _sheet;
    private _rowPts;
    private _colPts;
    private _xOff;
    private _yOff;
    private _leftCol;
    private _topRow;
    private _cellAddress;
    private _refs;
    private _conditionalRef;
    get model(): EditSheet;
    get leftPos(): number;
    get topPos(): number;
    get leftCol(): number;
    get topRow(): number;
    get conditionalRef(): string;
    render(sheet: Sheet, cells: {
        infos: IExcelRenderInfo[];
        heights: number[];
    }, pageWidth?: number): void;
    getConditionalRef(): string[];
    columnWidthsChanged(): void;
    rowHeightsChanged(): void;
    scrolled(xScroll: number, yScroll: number): void;
    makeVisible(w: number, h: number, row: number, col: number): IPoint;
    resetExtents(): void;
    getExtents(): {
        leftCol: number;
        topRow: number;
        xOff: number;
        yOff: number;
        colPoints: number[];
        rowPoints: number[];
    };
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _setTableStyle(table: HTMLTableElement): void;
    protected _setSizeStyle(css: CSSStyleDeclaration): void;
    private $_prepareSheet;
    private $_prepareColumns;
    private $_prepareRows;
    private $_recalcHeights;
    /**
     * [주의] cells가 위에서 아래로, 왼쪽에 오른쪽으로 정렬되어 있다고 가정한다.
     */
    private $_renderCells;
    private $_writeCell;
    private $_prepareImageContent;
    private $_prepareBarContent;
    private $_prepareConditionalFormattingRef;
    private $_getCellRef;
    /**
     * 셀 영역 업데이트
     */
    private $_updateRefs;
}

/**
 * Edit view for SheetEditor.
 */
declare class SheetEditView extends DesignerElement implements ISheetSelectionOwner {
    static getCellInfo(dom: HTMLElement): IExcelCell;
    static prepareImageContent(div: HTMLElement, cell: IExcelCell, rowHeight: number): void;
    static prepareBarContent(cellContainer: HTMLElement, cell: IExcelCell, rowHeight: number): void;
    private _sheetView;
    private _selectionLayer;
    private _selections;
    constructor(doc: Document);
    get rowCount(): number;
    get colCount(): number;
    selectionAdded(sel: SheetSelection): void;
    selectionRemoved(sel: SheetSelection): void;
    selectionCleared(): void;
    selectionChanged(sel: SheetSelection): void;
    private $_selectionChanged;
    get sheet(): EditSheet;
    get sheetView(): SheetEditTable;
    get selection(): SheetSelection;
    get selections(): SheetSelectionCollection;
    get focused(): ICell;
    render(sheet: Sheet, cells: {
        infos: IExcelRenderInfo[];
        heights: number[];
    }): void;
    validateColumnWidths(): void;
    validateRowHeights(): void;
    moveHome(shift: boolean): {
        r: number;
        c: number;
    };
    moveEnd(shift: boolean): {
        r: number;
        c: number;
    };
    moveLeft(shift: boolean): {
        r: number;
        c: number;
    };
    moveRight(shift: boolean): {
        r: number;
        c: number;
    };
    moveUp(shift: boolean): {
        r: number;
        c: number;
    };
    moveDown(shift: boolean): {
        r: number;
        c: number;
    };
    getConditionalRef(): string[];
    private $_selectFirstCell;
    private $_getHead;
}

declare abstract class SheetItemCollection<C extends SheetCollectionItem = SheetCollectionItem> extends ReportItemCollection<C> {
    sheet: Sheet;
    protected _items: C[];
    constructor(sheet: Sheet);
    init(count: number): void;
    load(source: any): void;
    save(target: any): void;
    add(item: C, index: number): C;
    append(item: C): C;
    remove(item: C): C;
    removeAt(index: number): C;
    contains(item: C): boolean;
    get owner(): ReportPageItem;
    get count(): number;
    get items(): ReportPageItem[];
    get(index: number): C;
    indexOf(item: C): number;
    protected _doMoveItem(from: number, to: number): boolean;
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get page(): ReportPageBase;
    get level(): number;
    get displayPath(): string;
    abstract get outlineLabel(): string;
    abstract getSaveType(): string;
    protected abstract _createItem(source: any): C;
    protected _resetIndices(from: number): void;
}

/**
 * Print view for a sheet report.
 */
declare class SheetPrintView extends LayerElement {
    print(doc: Document, ctx: ExcelPrintContext, previewOptions: IPreviewOptions): void;
}

/**
 * sheet row info.
 */
declare class SheetRow extends SheetCollectionItem {
    static readonly PROP_ROW = "row";
    static readonly PROP_HEIGHT = "height";
    static readonly PROPINFOS: IPropInfo[];
    private _row;
    private _height;
    /**
     * row
     */
    get row(): number;
    set row(value: number);
    /**
     * height
     */
    get height(): number;
    set height(value: number);
    equals(other: any): boolean;
    get itemType(): string;
    get outlineLabel(): string;
    get displayPath(): string;
    getCollectionLabel(): string;
    getEditProps(): IPropInfo[];
    getStyleProps(): IPropInfo[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): void;
}

declare class SheetRowCollection extends SheetItemCollection<SheetRow> {
    findRow(row: number): SheetRow;
    get outlineLabel(): string;
    get outlineItems(): IOutlineSource[];
    getPropertySources(): IPropertySource[];
    getSaveType(): string;
    protected _createItem(source: any): SheetRow;
}

declare class SheetRowHeaderLayer extends HeaderLayer<SheetRowHeaderView> {
    private _rowPts;
    private _y1;
    private _yHeader;
    private _wHeader;
    constructor(doc: Document);
    protected _createHeaderView(doc: Document): SheetRowHeaderView;
    refresh(doc: Document, selections: SheetSelectionCollection, topRow: number, rows: number, rowPts: number[]): void;
    scroll(sx: number, sy: number): void;
    getResizer(x: number, y: number): number;
    getResizerPos(row: number): number;
    getRowHeight(row: number): number;
}

declare class SheetRowHeaderView extends ExcelRowHeaderView {
    refresh(doc: Document, topRow: number, rows: number, rowPts: number[]): HTMLCollectionOf<HTMLTableRowElement>;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _setSizeStyle(css: CSSStyleDeclaration): void;
}

declare abstract class SheetSelection {
    owner: ISheetSelectionOwner;
    constructor(owner: ISheetSelectionOwner);
    get isSingle(): boolean;
    abstract get row(): number;
    abstract get col(): number;
    abstract get start(): ICell;
    abstract get end(): ICell;
    abstract contains(r: number, c: number): boolean;
    abstract containsRow(r: number): boolean;
    abstract containsCol(c: number): boolean;
    canMerge(): boolean;
    resize(cell: ICell): boolean;
    protected abstract _doResize(cell: ICell): boolean;
}

declare class SheetSelectionCollection extends Base {
    owner: ISheetSelectionOwner;
    private _items;
    constructor(owner: ISheetSelectionOwner);
    protected _doDispose(): void;
    get first(): SheetSelection;
    get last(): SheetSelection;
    get count(): number;
    get items(): SheetSelection[];
    get(index: number): SheetSelection;
    clear(): this;
    add(cell: ICell): SheetSelection;
    addCol(c1: number, c2?: number): SheetSelection;
    addRow(r1: number, r2?: number): SheetSelection;
    remove(sel: SheetSelection): this;
    resize(sel: SheetSelection, r2: number, c2: number): this;
    containsRow(row: number): boolean;
    containsCol(col: number): boolean;
    private $_addSelection;
}

declare type SignCallback = (item: IItemPrintInfo, sign: ISignResult) => void;

/**
 * 사인 이미지를 표시한다.
 * 클릭하면 사인 panel이 표시된다.
 */
declare class SignItem extends ReportItem {
    static readonly PROP_LINE_SCALE = "lineScale";
    static readonly PROP_PRESERVE = "preserve";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Sign";
    private _prevserve;
    private _lineScale;
    /**
     * sign image의 line 두께 정도를 지정한다.
     * 기본값 1이면 1~5 사이의 값과 이 속성값을 곱한 두께로 사인 이미지를 그린다.
     */
    get lineScale(): number;
    set lineScale(value: number);
    /**
     * sign panel을 열 때 기존 sign을 유지한다.
     */
    get preserve(): boolean;
    set preserve(value: boolean);
    getSaveType(): string;
    get outlineLabel(): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canRotate(): boolean;
    canAdoptDragSource(source: any): boolean;
}

declare type SignLine = Array<{
    x: number;
    y: number;
    w: number;
    t: number;
}>;

/**
 * 페이지를 넘어갈 수 있다.
 * 한 row는 페이지를 넘어갈 수 없다.
 * 페이지를 넘어갈 수 있으므로 매 페이지마다 header나 footer를 표시할 필요가 있을 수 있다.
 */
declare class SimpleBand extends DataBand {
    static readonly PROP_SIMPLE_BAND_GROUPS = "groups";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Simple Band";
    private _groups;
    private _header;
    private _footer;
    private _dataRow;
    constructor(name: string);
    get outlineItems(): IOutlineSource[];
    /** groups */
    get groups(): SimpleBandRowGroupCollection;
    /** header */
    get header(): SimpleBandHeader;
    /** footer */
    get footer(): SimpleBandFooter;
    /** dataRow */
    get dataRow(): SimpleBandRow;
    /**
     * Current printing data row
     */
    get pr(): number;
    setPrinting(ctx: PrintContext, row: number): void;
    getSaveType(): string;
    get outlineLabel(): string;
    get isBand(): boolean;
    protected _ignoreItems(): boolean;
    canFold(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    isAncestorOf(item: ReportPageItem): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    private $_groupChanged;
    protected _doPreparePrint(ctx: PrintContext): void;
    protected _doPrepareIndices(ctx: PrintContext): void;
    canRemove(item: ReportItem): boolean;
    getNextDetailRows(dataView: BandDataSortView, from?: number): number[];
    containsInSection(item: ReportItem): boolean;
}

/**
 * SimpleBand 생성 designer.
 * Band data 목록 표시. 필드 목록 설정.
 */
declare class SimpleBandDesigner extends BandDesigner {
    private _callback;
    constructor(doc: Document);
    run(editor: ReportEditor, callback: (band: SimpleBand) => void): void;
    protected _getCssSelector(): string;
    protected _getTitle(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    buttonClick(button: HTMLButtonElement): void;
    private $_prepareData;
    private $_prepareButtons;
    _end(completed: boolean): void;
}

declare class SimpleBandFooter extends SimpleBandSection {
    static readonly PROP_ATTACH_TO_BODY = "attachToBody";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _attachToBody;
    /**
     * 두 컬럼 이상의 밴드에서,
     * true면 multi column 모드일 때 마지막 컬럼의 마지막 행에 붙여서 출력하고,
     * false면 모든 컬럼의 가장 아래쪽에 붙여서 출력한다.
     *
     * @default false
     */
    get attachToBody(): boolean;
    set attachToBody(value: boolean);
    get outlineLabel(): string;
    get pathLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class SimpleBandGroupSectionElement<T extends SimpleBandRowGroupSection> extends StackContainerElement<T> {
    constructor(doc: Document, model: T);
    applyGroupStyles(elt: HTMLElement): void;
    protected _needDesignBox(): boolean;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doAfterMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number, sz: Size): void;
}

declare class SimpleBandHeader extends SimpleBandSection {
    static readonly $_ctor: string;
    get outlineLabel(): string;
    get pathLabel(): string;
}

declare type SimpleBandPrintRow = BandPrintRow | ISimpleGroupPrintInfo;

declare class SimpleBandRow extends SimpleBandSection {
    static readonly PROP_EQUAL_BLANK = "equalBlank";
    static readonly PROP_BLANK_FIELDS = "blankFields";
    static readonly CHILD_PROPS: IPropInfo[];
    static readonly $_ctor: string;
    private _blankItems;
    masterRow: number;
    get blankItems(): ReportItem[];
    canBlank(item: ReportItem, row: number): boolean;
    get outlineLabel(): string;
    get pathLabel(): string;
    get dataDominant(): boolean;
    get isDataRowContainer(): boolean;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doLoadChild(child: ReportItem, src: any): void;
    protected _doPreparePrint(ctx: PrintContext): void;
}

declare class SimpleBandRowGroup extends DataBandRowGroup {
    static readonly PROPINFOS: IPropInfo[];
    private _collection;
    private _header;
    private _footer;
    constructor(collection: SimpleBandRowGroupCollection);
    get outlineParent(): IOutlineSource;
    get marqueeParent(): ReportItem;
    getEditProps(): IPropInfo[];
    /** header */
    get header(): SimpleBandRowGroupHeader;
    /** footer */
    get footer(): SimpleBandRowGroupFooter;
    /** band */
    get band(): SimpleBand;
    get page(): ReportPageBase;
    get report(): ReportBase;
    get collection(): SimpleBandRowGroupCollection;
    get dataParent(): ReportGroupItem;
    get outlineLabel(): string;
    get displayPath(): string;
    protected _ignoreItems(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
}

declare class SimpleBandRowGroupCollection extends ReportItemCollection<SimpleBandRowGroup> {
    static readonly $_ctor: string;
    private _band;
    private _groups;
    constructor(band?: SimpleBand);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    canRemoveFrom(): boolean;
    canParentOf(itemType: string): boolean;
    get owner(): ReportItem;
    /** band */
    get band(): SimpleBand;
    /** count */
    get count(): number;
    get items(): ReportPageItem[];
    get visibleCount(): number;
    /** groups */
    get groups(): SimpleBandRowGroup[];
    load(loader: IReportLoader, src: any): void;
    save(target: any): void;
    get(index: number): SimpleBandRowGroup;
    indexOf(field: SimpleBandRowGroup): number;
    add(group: SimpleBandRowGroup | ConfigObject, index?: number): SimpleBandRowGroup;
    addAll(groups: (SimpleBandRowGroup | ConfigObject)[], index?: number): boolean;
    removeAt(index: number): boolean;
    remove(group: SimpleBandRowGroup): boolean;
    clear(): boolean;
    getValidGroups(data: IBandData): SimpleBandRowGroup[];
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    isAncestorOf(item: ReportPageItem): boolean;
    protected _doMoveItem(from: number, to: number): boolean;
    private $_add;
    private $_invalidateGroups;
    private $_groupChanged;
}

declare class SimpleBandRowGroupFooter extends SimpleBandRowGroupSection {
    static readonly $_ctor: string;
    constructor(group: SimpleBandRowGroup);
    get outlineLabel(): string;
    get pathLabel(): string;
}

declare class SimpleBandRowGroupHeader extends SimpleBandRowGroupSection {
    static readonly $_ctor: string;
    constructor(group: SimpleBandRowGroup);
    get outlineLabel(): string;
    get pathLabel(): string;
}

declare abstract class SimpleBandRowGroupSection extends StackContainer {
    static readonly STYLE_PROPS: string[];
    private _group;
    constructor(group: SimpleBandRowGroup, name: string);
    /** group */
    get group(): SimpleBandRowGroup;
    /** band */
    get band(): SimpleBand;
}

declare abstract class SimpleBandSection extends StackContainer {
    static readonly PROP_SIMPLE_BAND_SECTION_REPEAT = "repeat";
    static readonly PROPINFOS: IPropInfo[];
    static readonly PROP_FIELD = "field";
    private _child_field;
    private _band;
    constructor(band: SimpleBand);
    /** band */
    get band(): SimpleBand;
    /**
     * field
     */
    getFieldOf(item: ReportItem): string;
    setFieldOf(item: ReportItem, value: string): void;
    get designLevel(): number;
    get marqueeParent(): ReportItem;
    canCopy(): boolean;
    canResize(dir: ResizeDirection): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doLoadChild(child: ReportItem, src: any): void;
}

/**
 * 단순형 값이나, json 객체를 값으로 지정한다.
 */
declare class SimpleData extends LinkableReportData implements ISimpleData {
    private _isObj;
    private _linkedValues;
    private _embeddedValues;
    private _dirty;
    onClean: () => void;
    constructor(name: string, values: SimpleDataValueType, link?: IReportDataLink, fields?: ISimpleDataField[], dp?: IReportDataProvider);
    getValue(path?: string): any;
    getValues(): any;
    setValue(path: string, value: any): void;
    changeName(path: string, newName: string): void;
    private get _values();
    private set _values(value);
    get sample(): SimpleDataValueType;
    get rowCount(): number;
    getSaveType(): string;
    getSaveValues(): any;
    setSample(values: any): void;
    getFieldNames(): string[];
    /**
     * 특정 모드의 데이터를 일회성으로 조작하기 위한 편의성 메서드 (callback 실행 후 모드는 원복됨)
     */
    runInMode(mode: LinkableReportData['_mode'], callback: (() => void) | Promise<void>): void;
    readValue(field: ISimpleDataField, value: any): any;
    setSource(source: SimpleDataValueType): void;
    save(target: any): any;
    loadJson(source: string): Promise<void>;
    loadCsv(source: string): Promise<void>;
    loadExcel(source: ArrayBuffer, reader: IExcelDataReader, info: IExcelDataInfo): Promise<void>;
    setDirty(): void;
    isDirty(): boolean;
    clean(): void;
    protected _doDataFetched(fetchedData: unknown): void;
    private $_isSimpleValueType;
}

declare type SimpleDataValueType = {
    [key: string]: any;
};

/* Excluded from this release type: Size */

/**
 * 재사용되는 아이템 묶음.
 * 생성되는 아이템들이 한 그룹에 포함된다.
 */
declare class SnippetAsset extends AssetItem {
    protected _doSave(target: any): void;
}

/**
 * Report snippet base.
 */
declare abstract class SnippetBase extends Base {
    private _items;
    constructor(items: ReportItem[]);
    abstract getType(): string;
    canSnippetable(items: ReportItem[]): boolean;
    save(name: string): SnippetAsset;
    load(parent: ReportGroupItem, asset: SnippetAsset): ReportItem[];
    protected _doLoad(parent: ReportGroupItem, loader: IReportLoader, data: any[]): ReportItem[];
    protected _doSave(items: ReportItem[]): string;
}

/**
 * 섹션 위아래에 공간(space)를 설정할 수 있는 page 섹션.
 */
declare abstract class SpaceableSection extends PageSection {
    static readonly PROP_SPACE_TOP = "spaceTop";
    static readonly PROP_SPACE_BOTTOM = "spaceBottom";
    static readonly PROPINFOS: IPropInfo[];
    private _spaceTop;
    private _spaceBottom;
    constructor(name: string);
    /**
     * spaceTop
     */
    get spaceTop(): number;
    set spaceTop(value: number);
    /**
     * spaceBottom
     */
    get spaceBottom(): number;
    set spaceBottom(value: number);
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _getEditProps(): IPropInfo[];
}

/**
 * Box container 내에서 아이템들 사이에 일정 크기의 자리를 차지하는 place holder 아이템.
 * 대개는 비어 있는 상태이지만, border 스타일을 이용해 수직/수평 선을 표시하는 용도로 사용할 수 있다.
 * 페이지를 넘어갈 수 없다.
 */
declare class SpaceItem extends ReportItem {
    static readonly PROP_SIZE = "size";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Space";
    private _size;
    private _sizeDim;
    constructor(name: string);
    /**
     * 높이나 너비.
     * RowBoxContainer 안에서는 너비.
     * ColumnBoxContainer 안에서는 높이.
     */
    get size(): ValueString;
    set size(value: ValueString);
    getSize(domain: number): number;
    getSaveType(): string;
    canAddToFrontContainer(): boolean;
    canAddToBackContainer(): boolean;
    get outlineLabel(): string;
    protected _sizable(): boolean;
    protected _boundable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canAddTo(parent: ReportGroupItem): boolean;
}

/**
 * 자식 item들을 순서대로 쌓아가며 배치한다.
 * 위치 설정이 안된 item은 중앙에 정렬 시킨다.
 */
declare class StackContainer extends BoundedContainer {
    static readonly PROP_OVERFLOW = "overflow";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Stack Container";
    static readonly STYLE_PROPS: string[];
    private _overflow;
    constructor(name: string);
    /**
     * true로 설정되면 자식이 넘칠 수 있다.
     * 특히, table을 자식으로 갖는 경우 true로 설정해야 우측 끝이 표시되는 경우가 있을 수 있다.
     */
    get overflow(): boolean;
    set overflow(value: boolean);
    canOverflow(): boolean;
    get outlineLabel(): string;
    getSaveType(): string;
    protected _datable(): boolean;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getStyleProps(): string[];
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canAlign(child: ReportItem): boolean;
    canAdoptDragSource(source: any): boolean;
    getMoveType(item: ReportItem): ItemMoveType;
}

/* Excluded from this release type: StackContainerElement */

declare type StampCallback = (item: IItemPrintInfo, stamp: IStampResult) => void;

/**
 * 도장 이미지를 표시한다.
 * 클릭하면 도장 panel이 표시된다.
 */
declare class StampItem extends ReportItem {
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Stamp";
    getSaveType(): string;
    get outlineLabel(): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    canRotate(): boolean;
    canAdoptDragSource(source: any): boolean;
}

/**
 * Stock asset template manager.
 */
declare class StockAssetTemplateNanager implements IAssetTemplateManager {
    private _templates;
    /**
     * 사용자 지정한 에셋에서 파일 경로일 경우 데이터로 변환해서 설정한다.
     * @param templates 사용자가 지정한 에셋 템플릿
     */
    setTemplates(templates: UserAssetTemplateGroup[]): Promise<void>;
    getAll(): AssetTemplateGroup[];
}

/**
 * Stock data template manager.
 */
declare class StockDataTemplateManager implements IDataTemplateManager {
    private _templates;
    /**
     * 사용자가 데이터 경로
     * @param templates
     * @returns
     */
    setTemplates(templates: UserDataTemplateGroup[]): Promise<void>;
    getTemplate(name: string): DataTemplateGroup;
    getAll(): DataTemplateGroup[];
    removeTemplate(name: string): void;
    private $_isFieldExist;
    private $_isSampleExist;
}

/**
 * String property.
 */
declare class StringProperty extends ValueProperty {
    static readonly $_ctor: string;
}

declare type Styles = {
    [key: string]: string | undefined;
};

declare class SubBandPage extends ReportPage {
    static readonly $_ctor: string;
    constructor(report: Report_2, name?: string);
    get outlineLabel(): string;
    getPageLabel(): string;
    protected _initSections(): ReportGroupItem[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    protected _doSave(target: object): void;
}

/**
 * expression 속성에 summary 수식을 지정한다.
 */
declare class SummaryItem extends TextItemBase {
    static readonly PROP_EXPRESSION = "expression";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Summary";
    private _expression;
    private _exprNode;
    constructor(name: string);
    /**
     * expression
     */
    get expression(): string;
    set expression(value: string);
    getSummary(runtime: DataBandSummaryRuntime, ctx: PrintContext | ExcelPrintContext): any;
    getSaveType(): string;
    canAddToFrontContainer(): boolean;
    canAddToBackContainer(): boolean;
    get designText(): string;
    get outlineLabel(): string;
    get pathLabel(): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    getDesignText2(system: boolean): string;
}

/**
 * Svg xml.
 */
declare class SvgAsset extends AssetItem {
    protected _doSave(target: any): void;
}

/**
 * 페이지를 넘어갈 수 있다.
 * 한 row는 페이지를 넘어갈 수 없다.
 * header/footer와 row의 컬럼 너비를 반드시 맞춰야 하거나 컬럼 line을 표시해야 할 경우 사용.
 * header/footer/pageFooter 각 컬럼의 너비는 row의 컬럼 너비를 자동으로 따라간다.
 * design-time에는 section마다 별도의 table로 표시되지만 printing 시에는 하나의 table element로 구현한다.
 */
declare class TableBand extends TableLikeBand {
    static readonly PROP_COL_COUNT = "colCount";
    static readonly PROP_COLUMNS = "columns";
    static readonly PROP_GROUPS = "groups";
    static readonly PROP_END_ROW_MERGED = "endRowMerged";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly DEFAULT_COL_COUNT = 5;
    static readonly $_ctor: string;
    static readonly ITEM_TYPE: string;
    private _colCount;
    private _endRowMerged;
    private _columns;
    private _groups;
    private _header;
    private _footer;
    private _dataRow;
    private _tables;
    private _tr;
    private _lastTrs;
    constructor(name: string);
    protected _createColumns(): TableBandColumnCollection;
    protected _createGroups(): TableBandRowGroupCollection;
    get outlineItems(): IOutlineSource[];
    /** colCount */
    get colCount(): number;
    set colCount(value: number);
    /**
     * true면 end row 행들을 하나로 묶어서 표시한다. #760
     */
    get endRowMerged(): boolean;
    set endRowMerged(value: boolean);
    /** columns */
    get columns(): TableBandColumnCollection;
    /** groups */
    get groups(): TableBandRowGroupCollection;
    /** header */
    get header(): TableBandHeader;
    /** footer */
    get footer(): TableBandFooter;
    /** dataRow */
    get dataRow(): TableBandDataRow;
    /**
     * Current printing data row index.
     */
    get pr(): number;
    /**
     * Current printing table row index.
     */
    get tr(): number;
    /**
     * Last printing tr count.
     */
    get lastTrs(): number;
    getColumn(index: number): TableBandColumn;
    getGroup(index: number): TableBandRowGroup;
    /* Excluded from this release type: getTables */
    removeColumn(col: number | TableBandColumn): void;
    addColumn(index: number, column: TableBandColumn): TableBandColumn;
    canMoveColumns(col: number, count: number, newCol: number, alert?: boolean): boolean;
    getNearestMovableColumn(col: number, count: number, delta: number): number;
    moveColumns(col: number, count: number, delta: number, force?: boolean): boolean;
    getCellWidths(): DimensionCollection;
    setPrinting(ctx: PrintContext, pr: number, trows?: number): void;
    getSaveType(): string;
    get outlineLabel(): string;
    canFold(): boolean;
    protected _getStyleProps(): string[];
    get isBand(): boolean;
    protected _ignoreItems(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    isAncestorOf(item: ReportPageItem): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    private $_columnChanged;
    private $_groupChanged;
    protected _doPreparePrint(ctx: PrintContext): void;
    protected _doPrepareIndices(ctx: PrintContext): void;
    remove(item: ReportPageItem): void;
    getNextDetailRows(dataView: BandDataSortView, from?: number): number[];
    containsInSection(item: ReportItem): boolean;
    protected _createHeader(): TableBandHeader;
    protected _createDataRow(): TableBandDataRow;
    protected _createFooter(): TableBandFooter;
}

/* Excluded from this release type: TableBandCellElement */

/**
 * TableBand의 셀 모델.
 * span할 수 있다.
 * 자식 하나만 가질 수 있다.
 */
declare class TableBandCellItem extends TableCellItem {
    static readonly $_ctor: string;
}

declare class TableBandColumn extends TableColumnBase {
    constructor(collection: TableBandColumnCollection, src?: any);
    getCollectionLabel(): string;
    /** band */
    get band(): TableBand;
    get displayPath(): string;
    get collection(): TableBandColumnCollection;
    get marqueeParent(): ReportItem;
    isAncestor(group: ReportGroupItem): boolean;
    canRemoveFrom(): boolean;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
}

declare class TableBandColumnCollection extends TableColumnCollectionBase<TableBand, TableBandColumn> {
    /** band */
    get band(): TableBand;
    protected _createColumn(src: any): TableBandColumn;
}

/**
 * Data row template in table band.
 * 하나 이상의 table row로 구성할 수 있다.
 */
declare class TableBandDataRow extends TableBandSection {
    static readonly PROP_EQUAL_BLANK = "equalBlank";
    static readonly PROP_BLANK_FIELDS = "blankFields";
    static readonly PROP_MERGED_IN_GROUP = "mergedInGroup";
    static readonly CHILD_PROPS: IPropInfo[];
    static readonly $_ctor: string;
    private _blankItems;
    masterRow: number;
    get blankItems(): ReportItem[];
    canBlank(item: ReportItem, row: number): boolean;
    getMergedColumns(): number[];
    getMergedCells(): TableCell[];
    get outlineLabel(): string;
    get pathLabel(): string;
    get dataDominant(): boolean;
    get isDataRowContainer(): boolean;
    protected _createCells(): TableCellCollection;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doLoadChild(child: ReportItem, src: any): void;
    protected _doPreparePrint(ctx: PrintContext): void;
    private $_collectBlankItems;
}

declare class TableBandDataRowElement extends TableBandSectionElement<TableBandDataRow> {
    private _styles;
    private _cellStyles;
    applyCellStyles(ctx: PrintContext, band: TableBand, tr: HTMLTableRowElement, trow: number, dynRowStyles: any): void;
    protected _setTableStyles(table: HTMLTableElement): void;
    protected _setRowStyles(tr: HTMLTableRowElement, row: number): void;
}

/**
 * TableBand 생성 designer.
 * Band data 목록 표시. 필드 목록 설정.
 */
declare class TableBandDesigner extends BandDesigner {
    private _nameContainer;
    private _spanData;
    private _spanSelect;
    private _spanSelectContainer;
    private _spanSpace;
    private _addType;
    private _callback;
    private _useFieldLabelsCheckbox;
    private _designer;
    protected _bandUseLabelCheck: boolean;
    constructor(doc: Document, designer?: any);
    data: BandArrayData;
    get designer(): any;
    set designer(value: any);
    run(editor: VisualContainer, addType: TableBandDesignerAddType, callback: (band: TableLikeBand) => void): void;
    protected _getCssSelector(): string;
    protected _getTitle(): string;
    protected _doClose(): void;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _refreshBandFields(): void;
    buttonClick(button: HTMLButtonElement): void;
    protected _createFields(band: DataBand, fields: HTMLElement[]): void;
    protected _createTableBand(addType: TableBandDesignerAddType, name: string): TableLikeBand;
    protected _createTextItem(addType: TableBandDesignerAddType, name: string, text?: string): TextItem | EmailTextItem;
    private $_prepareArrows;
    private $_prepareButtons;
    private $_prepareTitle;
    private $_prepareHeaderContainer;
    private $_prepareNameContainer;
    private $_prepareSelect;
    _end(completed: boolean): void;
    private $_buildDesinger;
    private $_collectFields;
    private $_drawListManager;
}

declare type TableBandDesignerAddType = typeof TableBand | typeof EmailTableBand;

/* Excluded from this release type: TableBandElement */

declare class TableBandFooter extends TableBandSection {
    static readonly PROP_ATTACH_TO_BODY = "attachToBody";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _attachToBody;
    private _pageSection;
    constructor(band: TableBand, pageSection?: boolean);
    /**
     * true면 multi column 모드일 때 마지막 컬럼의 마지막 행에 붙여서 출력하고,
     * false면 모든 컬럼의 가장 아래쪽에 붙여서 출력한다.
     *
     * @default false
     */
    get attachToBody(): boolean;
    set attachToBody(value: boolean);
    get outlineLabel(): string;
    get pathLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class TableBandFooterElement extends TableBandSectionElement<TableBandFooter> {
    protected _setTableStyles(table: HTMLTableElement): void;
    protected _setRowStyles(tr: HTMLTableRowElement, row: number): void;
}

/* Excluded from this release type: TableBandGroupElement */

declare class TableBandGroupFooterElement extends TableBandGroupSectionElement<TableBandRowGroupFooter> {
    constructor(doc: Document, model: TableBandRowGroupFooter);
    protected _getCssSelector(): string;
    protected _setTableStyles(table: HTMLTableElement): void;
}

declare class TableBandGroupHeaderElement extends TableBandGroupSectionElement<TableBandRowGroupHeader> {
    constructor(doc: Document, model: TableBandRowGroupHeader);
    protected _getCssSelector(): string;
    protected _setTableStyles(table: HTMLTableElement): void;
}

declare class TableBandGroupSectionElement<T extends TableBandRowGroupSection> extends TableElement<T> {
    constructor(doc: Document, model: T);
    applyGroupStyles(tr: HTMLTableRowElement): void;
    protected _needDesignBox(): boolean;
    protected _createCellElement(doc: Document, cell: TableCellItem): TableCellElementBase;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doAfterMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number, sz: Size): void;
}

declare class TableBandHeader extends TableBandSection {
    static readonly $_ctor: string;
    private _pageSection;
    constructor(band: TableBand, pageSection?: boolean);
    get outlineLabel(): string;
    get pathLabel(): string;
}

declare class TableBandHeaderElement extends TableBandSectionElement<TableBandHeader> {
    protected _setTableStyles(table: HTMLTableElement): void;
    protected _setRowStyles(tr: HTMLTableRowElement, row: number): void;
}

declare class TableBandMarquee extends EditMarquee<TableBandElement> implements ITableMarquee {
    private static readonly STYLE_NAME;
    private static readonly W_ITEM;
    private static readonly H_ITEM;
    static $_isBand(dom: HTMLElement): boolean;
    static getTarget(target: ReportPageItem, dom: HTMLElement): IEditMarqueeTarget;
    static isColSizeTracker(dom: Element): number;
    static isRowSizeTracker(dom: Element): {
        table: TableBase;
        row: number;
    };
    static $_getTable(dom: HTMLElement): TableBase;
    private _leftItems;
    private _leftSizeItems;
    private _leftTrackers;
    private _topItems;
    private _topSizeItems;
    private _topTrackers;
    private _sizeFeedback;
    private _sizeValueFeedback;
    private _sectionFocus;
    private _colFocus;
    private _rowFocus;
    private $_createResizeFeedback;
    showColSizeFeedback(col: number, x: number, width: string): void;
    showRowSizeFeedback(table: TableElement<any>, row: number, y: number, height: string): void;
    hideSizeFeedbacks(): void;
    protected _getCssSelector(): string;
    protected _doLayout(doc: Document, dom: HTMLElement, r: Rectangle): void;
    private $_prepareSizeItems;
    private $_getDivs;
    private $_getItems;
    private $_getTrackers;
}

declare class TableBandPrintInfo extends BandPrintInfo<TableBand> {
    bandView: TableBandElement;
    headerView: TableBandHeaderElement;
    footerView: TableBandFooterElement;
    groupViews: TableBandGroupElement[];
    rowView: TableBandDataRowElement;
    rows: TableBandPrintRow[];
    prevGroup: TableBodyLine;
    prevLine: HTMLTableRowElement[];
    /** 이전 행 출력 정보 */
    prevPrintRow: TableBandPrintRow;
    endRowView: TableBodyLine;
    endMessageView: TableBodyLine;
    table: HTMLTableElement;
    save: {
        rows: TableBandPrintRow[];
        detailRows: number[];
    };
    prevGroupPageBreak: PageBreakMode;
    isEnded(): boolean;
    getRows(): any[];
    resetRowIndex(): void;
    rollback(page: HTMLDivElement): void;
    getNextPage(doc: Document, ctx: PrintContext, pageWidth: number, parent: HTMLDivElement): HTMLDivElement | null;
    getNoPagingPage(doc: Document, ctx: PrintContext, width: number, parent: HTMLDivElement): HTMLDivElement | null;
    getEmptyDataBandPage(doc: Document, ctx: PrintContext, bandPrintInfo: TableBandPrintInfo, pageWidth: number, parent: HTMLDivElement): HTMLDivElement | null;
    private $_createContainer;
    private $_createTable;
    private $_createHeaderSection;
    private $_createFooterSection;
    private $_addHeader;
    private $_addFooter;
    private $_addEndRow;
    /**
     * 왼쪽에서 오른쪽으로 먼저 끝에서 첫번째 컬럼으로 다시.
     * 최대한 모든 컬럼에 골고루 배치.
     * header는 밴드가 포함된 모든 페이지의 모든 컬럼 시작 위치에 표시.
     * footer는 마지막 페이지 마지막 행이 속한 컬럼 아래.
     *
     * 모든 컬럼의 같은 행 높이가 같게 표시된다.
     * 컬럼들 중 하나라도 페이지를 넘치면 중단하고 다음 페이지로 넘어간다.
     */
    private $_getAcrossPages;
    /**
     * 아래로 내려간 후 다음 컬럼 처음으로.
     * 최대한 모든 컬럼에 골고루 배치.
     * header는 밴드가 포함된 모든 페이지의 모든 컬럼 시작 위치에 표시.
     * footer는 마지막 페이지 마지막 행이 속한 컬럼 아래.
     *
     * 각 컬럼의 헤더 높이는 최대 높이로 동일하게 맞춘다.
     * 하지만, 각 컬럼의 행 높이들이 다를 수 있다.
     */
    private $_getDownPages;
    private $_setGroupFooterPB;
    private $_addBorderContainer;
    protected _createPage(doc: Document, parent: HTMLDivElement): HTMLDivElement;
}

declare type TableBandPrintRow = BandPrintRow | ITableGroupPrintInfo;

declare class TableBandRowGroup extends DataBandRowGroup {
    static readonly PROPINFOS: IPropInfo[];
    private _merged;
    private _collection;
    private _header;
    private _footer;
    constructor(collection: TableBandRowGroupCollection);
    get outlineParent(): IOutlineSource;
    get marqueeParent(): ReportItem;
    getEditProps(): IPropInfo[];
    getCollectionLabel(): string;
    /** header */
    get header(): TableBandRowGroupHeader;
    /** footer */
    get footer(): TableBandRowGroupFooter;
    /** band */
    get band(): TableBand;
    get page(): ReportPageBase;
    get report(): ReportBase;
    get collection(): TableBandRowGroupCollection;
    get dataParent(): ReportGroupItem;
    get outlineLabel(): string;
    get displayPath(): string;
    protected _ignoreItems(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
}

declare class TableBandRowGroupCollection extends ReportItemCollection<TableBandRowGroup> {
    static readonly $_ctor: string;
    private _band;
    private _groups;
    constructor(band?: TableBand);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get owner(): ReportItem;
    /** band */
    get band(): TableBand;
    /** count */
    get count(): number;
    get items(): ReportPageItem[];
    get visibleCount(): number;
    /** groups */
    get groups(): TableBandRowGroup[];
    load(loader: IReportLoader, src: any): void;
    save(target: any): void;
    get(index: number): TableBandRowGroup;
    indexOf(group: TableBandRowGroup): number;
    add(group: TableBandRowGroup | ConfigObject, index?: number): TableBandRowGroup;
    addAll(groups: (TableBandRowGroup | ConfigObject)[], index?: number): boolean;
    removeAt(index: number): boolean;
    remove(group: TableBandRowGroup): boolean;
    clear(): boolean;
    getValidGroups(data: IBandData): TableBandRowGroup[];
    removeCols(index: number, count: number): void;
    resetCells(): void;
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    isAncestorOf(item: ReportPageItem): boolean;
    protected _doMoveItem(from: number, to: number): boolean;
    private $_add;
    private $_invalidateGroups;
    private $_groupChanged;
}

declare class TableBandRowGroupFooter extends TableBandRowGroupSection {
    static readonly PROP_MERGED = "merged";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _merged;
    constructor(group: TableBandRowGroup);
    /**
     * True면 병합 컬럼에 포함되는 셀은 병합 데이터셀에 포함시킨다.
     */
    get merged(): boolean;
    set merged(value: boolean);
    get outlineLabel(): string;
    get pathLabel(): string;
    getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class TableBandRowGroupHeader extends TableBandRowGroupSection {
    static readonly $_ctor: string;
    constructor(group: TableBandRowGroup);
    get outlineLabel(): string;
    get pathLabel(): string;
}

declare class TableBandRowGroupSection extends TableBase {
    static readonly STYLE_PROPS: string[];
    static readonly DEFAULT_ROWS = 1;
    private _group;
    /* Excluded from this release type: removedCells */
    constructor(group: TableBandRowGroup, name: string);
    /** group */
    get group(): TableBandRowGroup;
    /** band */
    get band(): TableBand;
    protected _getStyleProps(): string[];
    needDesignHeight(): boolean;
    needDesignWidth(): boolean;
    canResize(dir: ResizeDirection): boolean;
    get marqueeParent(): ReportItem;
    get colCount(): number;
    getColumn(col: number): TableColumnBase;
    getCellWidths(): DimensionCollection;
    protected _createCell(item: ReportItem): TableCellItem;
    isAncestorOf(item: ReportPageItem): boolean;
}

/**
 * TableBand의 행 영역 모델.
 * TableBandCellItem들로 구성된다.
 * field item들은 TableBand에 설정된 file item 설정에 따라 자동으로 추가한다.(?)
 */
declare abstract class TableBandSection extends TableBase {
    static readonly PROP_LINES = "lines";
    static readonly STYLE_PROPS: string[];
    static readonly DEFAULT_ROWS = 1;
    private _band;
    /* Excluded from this release type: removedCells */
    constructor(band: TableBand);
    /** band */
    get band(): TableBand;
    protected _getStyleProps(): string[];
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    canCopy(): boolean;
    canResize(dir: ResizeDirection): boolean;
    canDelete(): boolean;
    get marqueeParent(): ReportItem;
    get colCount(): number;
    getColumn(col: number): TableColumnBase;
    getCellWidths(): DimensionCollection;
    protected _createCell(item: ReportItem): TableBandCellItem;
    isAncestorOf(item: ReportPageItem): boolean;
}

/* Excluded from this release type: TableBandSectionElement */

/**
 * 자식 item들을 TableCellItem에 추가해서 배치한다.
 * 페이지를 넘어갈 수 없다.
 * // TODO: columns(컬럼 단위 정보, width, style...), rows(행 단위 정보, height, style...) 추가할 것!
 */
declare abstract class TableBase extends CellContainer {
    static readonly PROP_ROW_COUNT = "rowCount";
    static readonly PROP_MIN_ROW_HEIGHT = "minRowHeight";
    static readonly PROP_ROWS = "rows";
    static readonly PROP_TABLE_CELL_STYLES = "cellStyles";
    static readonly PROP_CELL_LAYOUT = "table_cell_layout";
    static readonly PROP_FIXED = "fixed";
    static readonly PROP_TABLE_COL = "col";
    static readonly PROP_TABLE_ROW = "row";
    static readonly PROPINFOS: IPropInfo[];
    static readonly TABLE_CHILD_PROPS: IPropInfo[];
    private static readonly TABLE_STYLES;
    private static readonly CELL_STYLES;
    private _rowCount;
    private _minRowHeight;
    onCellChanged: (item: ReportItem, prop: string, oldValue: any) => void;
    private _fixed;
    private _cellStyles;
    private _rows;
    private _cells;
    private _cellMap;
    private _spans;
    private _minRowHeightDim;
    private _focus;
    private _spanDirty;
    private _itemDirty;
    constructor(name: string);
    protected _createCells(): TableCellCollection;
    getSubStyleProps(prop: string): IPropInfo[];
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    get outlineItems(): IOutlineSource[];
    /** colCount */
    abstract get colCount(): number;
    /** rowCount */
    get rowCount(): number;
    set rowCount(value: number);
    /** rows */
    get rows(): TableRowCollection;
    /** cells */
    get cells(): TableCellCollection;
    /**
     * minimum table row height
     */
    get minRowHeight(): string;
    set minRowHeight(value: string);
    /** cellStyles */
    get cellStyles(): Styles;
    set cellStyles(value: Styles);
    /**
     * true이면 내부 table element의 너비를 '100%'로 하지 않고,
     * colGroup 전체 너비로 설정한다.
     * 즉, 모든 컬럼들의 너비가 모두 고정인 경우, table의 너비가 부도 div 대신 컬럼 너비들의 합이 된다.
     */
    get fixed(): boolean;
    set fixed(value: boolean);
    get spans(): TableCellSpan[][];
    abstract getCellWidths(): DimensionCollection;
    abstract getColumn(col: number): TableColumnBase;
    getRow(index: number): TableRow;
    getRowHeights(): DimensionCollection;
    getCell(row: number, col: number): TableCell;
    getCellItemAt(row: number, col: number): TableCellItem;
    getCellItem(cell: TableCell): TableCellItem;
    isHiddenAt(row: number, col: number): boolean;
    isHiddenCell(cell: TableCell): boolean;
    getHeadCell(cell: TableCell): TableCell;
    getLeftCol(cell: TableCell): number;
    getTopRow(cell: TableCell): number;
    getMinRowHeight(): number;
    getColItems(col: number, same?: boolean): ReportItem[];
    getRowItems(row: number, same?: boolean): ReportItem[];
    getRowItemsFrom(rowFrom: number): ReportItem[];
    getRectItems(r1: number, c1: number, r2: number, c2: number, exceptFirst?: boolean): ReportItem[];
    prepareLayout(): TableCellSpan[][];
    setFocus(focus: {
        col: number;
        row: number;
    }): void;
    /* Excluded from this release type: removeRow */
    /* Excluded from this release type: addRow */
    /* Excluded from this release type: canMoveRows */
    getNearestMovableRow(row: number, count: number, delta: number): number;
    moveRows(row: number, count: number, newRow: number, force?: boolean): boolean;
    /* Excluded from this release type: canMoveCols */
    getNearestMovableColumn(col: number, count: number, delta: number): number;
    /* Excluded from this release type: checkCounts */
    getSelection(cell: TableCell): TableSelection;
    /**
     * 가장 상단의 item만 보존된다.
     */
    mergeCells(r1: number, c1: number, r2: number, c2: number): void;
    removeCols(index: number, count: number): void;
    resetCells(): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: any): void;
    protected _doSaveItems(target: any[], items: ReportItem[]): void;
    protected _getChildPropInfos(item: ReportItem): IPropInfo[];
    protected _doLoadChild(child: ReportItem, src: any): void;
    protected abstract _createCell(item: ReportItem): TableCellItem;
    protected _prepareCellGroup(item: ReportItem): CellGroup;
    protected _unprepareCellGroup(item: ReportItem): CellGroup;
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _doItemRemoved(item: ReportItem, index: number): void;
    protected _doItemChanged(item: ReportItem, prop: string, value: any, oldValue: any): void;
    isAncestorOf(item: ReportPageItem): boolean;
    protected _createRows(): TableRowCollection;
    protected _spanChanged(cell: TableCell): void;
    protected _addCols(col: number, count: number): void;
    protected _moveCols(col: number, count: number, newCol: number): void;
    protected _removeRows(index: number, count: number): void;
    protected _addRows(index: number, count: number): void;
    protected _moveRows(row: number, count: number, newRow: number): void;
    canChangeChildProp(item: ReportPageItem, prop: string, value: any): boolean;
    private $_rowChanged;
    private $_resetSpans;
    protected _addColumn(index: number): void;
    protected _removeColumn(col: number): void;
}

/* Excluded from this release type: TableBodyLine */

declare type TableBounds = {
    r1: number;
    c1: number;
    r2: number;
    c2: number;
};

/**
 * Table cell model. {@link TableCellCollection} 구성 요소로 포함된다.
 */
declare class TableCell extends ReportItemCollectionItem {
    static readonly PROP_COL = "col";
    static readonly PROP_ROW = "row";
    static readonly PROP_COLSPAN = "colspan";
    static readonly PROP_ROWSPAN = "rowspan";
    static readonly PROP_APPLY_END_STYLES = "applyEndStyles";
    static readonly PROP_ON_GET_STYLES = "onGetStyles";
    static readonly PROP_STYLE_CALLBACK = "styleCallback";
    static readonly $_ctor: string;
    static readonly PROPINFOS: IPropInfo[];
    private static readonly styleProps;
    private _colspan;
    private _rowspan;
    private _oldColspan;
    private _oldRowspan;
    private _applyEndStyles;
    private _styleCallback;
    private _onGetStyles;
    private _row;
    private _col;
    private _styleCallbackFunc;
    private _styleCallbackDelegate;
    constructor(collection: TableCellCollection, row: number, col: number, src?: any);
    /* Excluded from this release type: outlineLabel */
    getEditProps(): IPropInfo[];
    get table(): TableBase;
    get row(): number;
    get col(): number;
    get height(): number;
    get width(): number;
    get bottom(): number;
    get right(): number;
    get isSingle(): boolean;
    /**
     * col span
     */
    get colspan(): number;
    set colspan(value: number);
    get oldColspan(): number;
    set oldColspan(value: number);
    /**
     * row span
     */
    get rowspan(): number;
    set rowspan(value: number);
    get oldRowspan(): number;
    set oldRowspan(value: number);
    /**
     * true면 span 됐을 때 마지막 셀에 해당하는 tableRowStyles, tableColumnStyles를 적용한다.
     * autoMerge된 셀의 rowspan은 적용되지 않는다.
     */
    get applyEndStyles(): boolean;
    set applyEndStyles(value: boolean);
    /** styleCallback */
    get styleCallback(): TableCellStyleCallback;
    set styleCallback(value: TableCellStyleCallback);
    /** onGetStyles */
    get onGetStyles(): string;
    set onGetStyles(value: string);
    adoptDragSource(source: any): IDropResult;
    resetSelection(): void;
    get itemType(): string;
    get collection(): TableCellCollection;
    get page(): ReportPageBase;
    get displayPath(): string;
    get marqueeParent(): ReportItem;
    protected _getStyleProps(): string[];
    setProps(src: any): void;
    canSelectedWith(other: ISelectionSource): boolean;
    protected _doLoad(src: any): void;
    protected _doSave(target: any): void;
    canDelete(): boolean;
}

/* Excluded from this release type: TableCellCollection */

/* Excluded from this release type: TableCellElement */

/* Excluded from this release type: TableCellElementBase */

/**
 * TableBase가 자동 생성한다.
 * 자식 하나만 가질 수 있다.
 */
declare abstract class TableCellItem extends CellGroup {
    constructor(item: ReportItem);
    /**
     * table
     */
    get table(): TableBase;
    /**
     * col
     */
    get col(): number;
    /**
     * row
     */
    get row(): number;
    canChangeChildProp(item: ReportPageItem, prop: string, value: any): boolean;
}

declare type TableCellSpan = {
    r: number;
    c: number;
    v: TableCell;
    m: TableCellItem;
};

declare type TableCellStyleCallback = (ctx: PrintContext, cell: TableCell, row: number) => {
    [key: string]: string | undefined;
};

declare class TableColumn extends TableColumnBase {
    static readonly $_ctor: string;
    constructor(collection: TableColumnCollection, src?: any);
    /** table */
    get table(): TableContainer;
    get displayPath(): string;
    get collection(): TableColumnCollection;
    get marqueeParent(): ReportItem;
    isAncestor(group: ReportGroupItem): boolean;
    canRemoveFrom(): boolean;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
}

declare abstract class TableColumnBase extends ReportItemCollectionItem {
    static readonly PROP_WIDTH = "width";
    static readonly PROPINFOS: IPropInfo[];
    private static readonly styleProps;
    static readonly $_ctor: string;
    private _width;
    private _index;
    private _widthDim;
    constructor(collection: ReportItemCollection, src?: any);
    getEditProps(): IPropInfo[];
    getCollectionLabel(): string;
    /** index */
    get index(): number;
    /**
     * width
     */
    get width(): ValueString;
    set width(value: ValueString);
    getWidth(bounds: number): number;
    get itemType(): string;
    get page(): ReportPageBase;
    canSelectedWith(other: ISelectionSource): boolean;
    protected _getStyleProps(): string[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): any;
    protected abstract _changed(prop: string, newValue: any, oldValue: any): void;
}

declare class TableColumnCollection extends TableColumnCollectionBase<TableContainer, TableColumn> {
    static readonly $_ctor: string;
    constructor(table?: TableContainer);
    /** table */
    get table(): TableContainer;
    protected _createColumn(src: any): TableColumn;
}

declare abstract class TableColumnCollectionBase<T extends ReportGroupItem, C extends TableColumnBase> extends ReportItemCollection<C> {
    private _owner;
    private _columns;
    private _widths;
    constructor(owner?: T);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    /** owner */
    get owner(): T;
    /** count */
    get count(): number;
    set count(value: number);
    get items(): ReportPageItem[];
    /** columns */
    get columns(): C[];
    load(src: any, count: number): number;
    save(target: any): void;
    get(index: number): C;
    /**
     * i1과 i2에 위치한 아이템과 그 사이에 포함된 아이템들을 순서대로 배열로 리턴한다.
     */
    getRange(i1: number, i2: number): C[];
    indexOf(column: C): number;
    /**
     * 컬럼 너비들을 절대/상대 값으로 지정한다.
     * 지정하지 않은 컬럼 너비는 컬럼에 속한 셀들을 계산한 최대 너비로 설정된다.
     * 상대 너비는 '%'로 지정하고, 부모에서 절대 너비를 제외한 나머지 너비를 기준으로
     * 상대 너비를 모두 더한 값에 대한 비율로 설정된다.
     * 너비 합계가 부모 너비보다 클 수 있다.
     */
    getWidths(): DimensionCollection;
    add(column: C | ConfigObject, index?: number): C;
    /* Excluded from this release type: remove */
    /* Excluded from this release type: clear */
    /* Excluded from this release type: move */
    /**
     * 오른쪽 이웃 컬럼의 너비를 줄이거나 늘이면서 컬럼의 너비를 변경한다.
     */
    adjustWidths(col: number, colPoints: number[], newSize: number): any[];
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    get marqueeParent(): ReportItem;
    isAncestor(group: ReportGroupItem): boolean;
    protected _doMoveItem(from: number, to: number): boolean;
    protected abstract _createColumn(src: any): C;
    private $_add;
    private $_resetColumns;
    private $_columnChanged;
}

/**
 * 자식 item들을 TableCellItem에 추가해서 배치한다.
 * 페이지를 넘어갈 수 없다.
 */
declare class TableContainer extends TableBase {
    static readonly PROP_BASE_TABLE = "baseTable";
    static readonly PROP_COL_COUNT = "colCount";
    static readonly PROP_COLUMNS = "columns";
    static readonly PROPINFOS: IPropInfo[];
    static readonly DEFAULT_ROW_COUNT = 4;
    static readonly DEFAULT_COL_COUNT = 4;
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Table";
    private _baseTable;
    private _colCount;
    private _baseContainer;
    private _columns;
    constructor(name: string);
    changeColumnWidth(col: number, delta: number): void;
    getColumnWidth(col: number): ValueString;
    get outlineItems(): IOutlineSource[];
    /**
     * 기준 table의 name.
     * 기준 table의 cell 너비 설정을 따라간다.
     */
    get baseTable(): string;
    set baseTable(value: string);
    /** cols */
    get colCount(): number;
    set colCount(value: number);
    /** columns */
    get columns(): TableColumnCollection;
    getColumn(index: number): TableColumn;
    removeColumn(col: number | TableColumn): void;
    addColumn(index: number, column: TableColumn): TableColumn;
    canMoveColumns(col: number, count: number, newCol: number, alert?: boolean): boolean;
    moveColumns(col: number, count: number, newCol: number, force?: boolean): boolean;
    getSaveType(): string;
    get outlineLabel(): string;
    get pathLabel(): string;
    needDesignWidth(): boolean;
    needDesignHeight(): boolean;
    protected _datable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doLoadChild(child: ReportItem, src: any): void;
    protected _doSave(target: object): void;
    protected _createCell(item: ReportItem): TableContainerCellItem;
    getCellWidths(): DimensionCollection;
    prepareLayout(): TableCellSpan[][];
    isAncestorOf(item: ReportPageItem): boolean;
    private $_columnChanged;
}

/**
 * TableContainer가 자동 생성한다.
 * 자식 하나만 가질 수 있다.
 */
declare class TableContainerCellItem extends TableCellItem {
    static readonly $_ctor: string;
    constructor(item: ReportItem);
    get pathLabel(): string;
}

/* Excluded from this release type: TableContainerElement */

declare class TableContainerMarquee extends EditMarquee<TableContainerElement> implements ITableMarquee {
    private static readonly STYLE_NAME;
    private static readonly W_ITEM;
    private static readonly H_ITEM;
    static $_isContainer(dom: HTMLElement): boolean;
    static getTarget(target: ReportItem, dom: HTMLElement): IEditMarqueeTarget;
    static isColSizeTracker(dom: Element): number;
    static isRowSizeTracker(dom: Element): number;
    private _tableItem;
    private _leftItems;
    private _topItems;
    private _leftTrackers;
    private _topTrackers;
    private _leftSizeItems;
    private _topSizeItems;
    private _sizeFeedback;
    private _sizeValueFeedback;
    private _colFocus;
    private _rowFocus;
    private $_createResizeFeedback;
    showColSizeFeedback(col: number, x: number, width: string): void;
    showRowSizeFeedback(table: TableElement<any>, row: number, y: number, height: string): void;
    hideSizeFeedbacks(): void;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doLayout(doc: Document, dom: HTMLElement, r: Rectangle): void;
    private $_prepareSizeItems;
    private $_getDivs;
    private $_getItems;
    private $_getTrackers;
}

/**
 * TableContainer 생성 designer.
 * Row, column 수 지정.
 */
declare class TableDesigner extends PopupElement {
    static readonly CELL_CLASS = "rr-table-designer-cell";
    static readonly TITLE_CLASS = "rr-table-designer-title";
    private static readonly COLS;
    private static readonly ROWS;
    private static readonly CELL_WIDTH;
    private static readonly CELL_HEIGHT;
    static readonly FOOTER_CLASS = "rr-table-designer-footer";
    static readonly TITLE_CONTAINER_CLASS = "rr-table-designer-title-container";
    static readonly SUBMIT_BTN_CLASS = "rr-table-designer-submit-button";
    private _spanTitle;
    private _cellContainer;
    private _buttonContainer;
    private _spanRange;
    private _cells;
    private _colLen;
    private _rowLen;
    private _addType;
    private _callback;
    private _row;
    private _col;
    protected _container: HTMLDivElement;
    protected _dataContainer: HTMLDivElement;
    protected _arrowContainer: HTMLDivElement;
    protected _bandContainer: HTMLDivElement;
    protected _ok: HTMLButtonElement;
    protected _cancel: HTMLButtonElement;
    _sizer: HTMLDivElement;
    private _rowInput;
    private _colInput;
    private _addTextItem;
    private _document;
    private _designer;
    constructor(doc: Document, designer?: any);
    get designer(): any;
    set designer(value: any);
    get document(): any;
    set document(value: any);
    run(editor: ReportEditor, addType: TableDesignerAddType, callback: (table: TableContainer) => void): void;
    setRange(row: number, col: number): void;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _getTitle(): string;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    buttonClick(button: HTMLButtonElement): void;
    protected _doClose(): void;
    private $_prepareCells;
    private $_prepareButtons;
    $_end(completed: boolean): void;
    private $_createTableContainer;
    private $_prepareTitle;
    private $_createSizeContainer;
    private $_createCellsSection;
    private $_createCellContainerWrapper;
    private $_createDialogWrapper;
    private $_createFooter;
    private $_createSizer;
}

declare type TableDesignerAddType = typeof TableContainer | typeof EmailTableContainer;

/* Excluded from this release type: TableElement */

declare abstract class TableLikeBand extends DataBand {
}

/**
 * Table 행 모델.
 */
declare class TableRow extends ReportItemCollectionItem {
    static readonly PROP_HEIGHT = "height";
    private static readonly styleProps;
    static readonly $_ctor: string;
    static readonly PROPINFOS: IPropInfo[];
    private _height;
    private _index;
    private _heightDim;
    constructor(collection: TableRowCollectionBase, src?: any);
    getEditProps(): IPropInfo[];
    getCollectionLabel(): string;
    /** table */
    get table(): TableBase;
    /** index */
    get index(): number;
    /**
     * height
     */
    get height(): string | number;
    set height(value: string | number);
    getHeight(bounds: number): number;
    get itemType(): string;
    get page(): ReportPageBase;
    get displayPath(): string;
    get collection(): TableRowCollection;
    get marqueeParent(): ReportItem;
    isAncestor(group: ReportGroupItem): boolean;
    canRemoveFrom(): boolean;
    canSelectedWith(other: ISelectionSource): boolean;
    protected _getStyleProps(): string[];
    protected _doLoad(src: any): void;
    protected _doSave(target: any): any;
}

declare class TableRowCollection extends TableRowCollectionBase {
    constructor(table?: TableBase);
    /** table */
    get table(): TableBase;
}

/**
 * Table row object collection.
 */
declare class TableRowCollectionBase extends ReportItemCollection<TableRow> {
    private _table;
    private _rows;
    private _heights;
    static readonly $_ctor: string;
    constructor(table?: ReportGroupItem);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get owner(): ReportGroupItem;
    /** count */
    get count(): number;
    set count(value: number);
    get items(): ReportPageItem[];
    load(src: any, count: number): number;
    save(target: any): void;
    get(index: number): TableRow;
    /**
     * i1과 i2에 위치한 아이템과 그 사이에 포함된 아이템들을 순서대로 배열로 리턴한다.
     */
    getRange(i1: number, i2: number): TableRow[];
    indexOf(row: TableRow): number;
    getHeights(): DimensionCollection;
    /* Excluded from this release type: add */
    /* Excluded from this release type: remove */
    /* Excluded from this release type: move */
    /**
     * 아래쪽 이웃 행의 높이를 줄이거나 늘이면서 행의 높이를 변경한다.
     */
    adjustHeights(row: number, rowPoints: number[], newSize: number): any[];
    get page(): ReportPageBase;
    get displayPath(): string;
    get level(): number;
    get marqueeParent(): ReportItem;
    isAncestor(group: ReportGroupItem): boolean;
    protected _doMoveItem(from: number, to: number): boolean;
    private $_add;
    private $_invalidateRows;
    private $_rowChanged;
}

declare class TableSelection implements ISelectionSource {
    selectedItem: TableCell;
    cols: number;
    rows: number;
    private _cell;
    private _lastCell;
    constructor(cell: TableCell, cols: number, rows: number);
    get table(): TableBase;
    get cell(): TableCell;
    get col(): number;
    get row(): number;
    get right(): number;
    get bottom(): number;
    canSelectedWith(other: ISelectionSource): boolean;
    canMakeSnippet(): boolean;
    contains(row: number, col: number): boolean;
    containsCell(cell: TableCell): boolean;
    isSingle(ignoreHiddens: boolean): boolean;
    getCells(ignoreHiddens: boolean): TableCell[];
    resizeTo(cell: TableCell): boolean;
    resizeBy(dx: number, dy: number): boolean;
    resize(): boolean;
    getSize(foc: TableCell): number[];
    softEquals(cell: TableCell): boolean;
    equals(cell: TableCell): boolean;
}

declare type TableView = TableElement<TableBase>;

/**
 * 페이지를 넘길 수 있는 멀티 라인 텍스트 아이템.
 */
declare class TextBand extends ReportBandItem {
    static readonly PROP_TEXT = "text";
    static readonly PROP_LINE_SEPARATORS = "lineSeparators";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Text Band";
    private _text;
    private _lineSeparators;
    private _editing;
    private _header;
    private _footer;
    prevHead: boolean;
    rowIndex: number;
    _pr: number;
    _pageNo: number;
    constructor(name: string);
    /** header */
    get header(): TextBandHeader;
    /** footer */
    get footer(): TextBandFooter;
    /** text */
    get text(): string;
    set text(value: string);
    /** html */
    get lineSeparators(): string;
    set lineSeparators(value: string);
    /**
     * editing
     * - 텍스트를 미리보기 시점에 수정가능하게 하는 속성
     */
    get editing(): EditableObject<TextBand>;
    getText(v: any): string;
    getDesignText(): string;
    isEmpty(): boolean;
    get outlineLabel(): string;
    getSaveType(): string;
    protected _valueable(): boolean;
    protected _ignoreItems(): boolean;
    /**
     * ReportGroupItem은 onGetValue 이벤트를 사용하지 않는 설정이 기본설정
     * TextBand는 Text 속성에 값 하나만 연결해서 사용하기 때문에 onGetValue를 사용할 수 있도록 설정한다.
     */
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    canAdoptDragSource(source: any): boolean;
    canAdd(item: ReportItem): boolean;
    canRemove(item: ReportItem): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

/* Excluded from this release type: TextBandElement */

declare class TextBandFooter extends TextBandSection {
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    get outlineLabel(): string;
    get pathLabel(): string;
    canDelete(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class TextBandHeader extends TextBandSection {
    static readonly $_ctor: string;
    get outlineLabel(): string;
    get pathLabel(): string;
    canDelete(): boolean;
}

declare type TextBandLine = {
    r: IRect;
    line: string;
};

declare class TextBandPrintInfo {
    band: TextBand;
    bandView: TextBandElement;
    headerView: TextBandSectionElement;
    footerView: TextBandSectionElement;
    text: string;
    lines: TextBandLine[];
    bandCellWidth: number;
    bandCellHeight: number;
    isEnded(): boolean;
    getNextPage(doc: Document, ctx: PrintContext, pageWidth: number, parent: HTMLDivElement): HTMLDivElement;
    protected _createPage(doc: Document, parent: HTMLDivElement): HTMLDivElement;
}

declare abstract class TextBandSection extends StackContainer {
    static readonly PROP_REPEAT = "repeat";
    static readonly PROPINFOS: IPropInfo[];
    private _repeat;
    private _band;
    constructor(band: TextBand);
    /** band */
    get band(): TextBand;
    /** repeat */
    get repeat(): boolean;
    set repeat(value: boolean);
    get designLevel(): number;
    get marqueeParent(): ReportItem;
    protected _datable(): boolean;
    canCopy(): boolean;
    canResize(dir: ResizeDirection): boolean;
    /**
     * TextBand Header, Footer는 기본 visible이 false로 따로 처리함
     */
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class TextBandSectionElement extends StackContainerElement<TextBandSection> {
    constructor(doc: Document, model: TextBandSection, styleName: string);
    get debugLabel(): string;
    protected _getCssSelector(): string;
    protected _needDesignBox(): boolean;
    protected _needContentBox(): boolean;
    protected _doAfterMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number, sz: Size): void;
}

/* Excluded from this release type: TextEditor */

/**
 * 고정된 텍스트나 데이터 필드의 값을 출력하는 아이템.
 */
declare class TextItem extends TextItemBase {
    static readonly PROP_MULTI_LINE = "multiLine";
    static readonly PROP_TEXT = "text";
    static readonly PROP_ON_GET_CONTEXT_VALUE = "onGetContextValue";
    static readonly PROP_I18N = "internationalization";
    static readonly PROP_MERGE_RULE = "mergeRule";
    static readonly PROP_RICH = "rich";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Text";
    private _text;
    private _rich;
    private _editing;
    private _i18nObject;
    private _mergeRule;
    private _contextValueCallback;
    private _onGetContextValue;
    private _contextValueCallbackFunc;
    private _contextValueCallbackDelegate;
    constructor(name: string, text?: string);
    /**
     * text
     */
    get text(): string;
    set text(value: string);
    /**
     * rich
     */
    get rich(): boolean;
    set rich(value: boolean);
    /**
     * editing
     * - 텍스트를 미리보기 시점에 수정가능하게 하는 속성
     */
    get editing(): EditableObject<TextItem>;
    get internationalization(): I18nObject<TextItem>;
    /**
     * text
     */
    get mergeRule(): string;
    set mergeRule(value: string);
    /**
     * onGetContextValue
     */
    get onGetContextValue(): string;
    set onGetContextValue(value: string);
    /**
     * contextValueCallback
     */
    get contextValueCallback(): ContextValueCallback;
    set contextValueCallback(value: ContextValueCallback);
    getDesignText2(system: boolean): string;
    get printEditable(): boolean;
    getSaveType(): string;
    get outlineLabel(): string;
    get designText(): string;
    get pathLabel(): string;
    isContextValue(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _isI18nFieldExist(): boolean;
    canResize(dir: ResizeDirection): boolean;
    canSized(): boolean;
    canRotate(): boolean;
}

/**
 * 한 줄 혹은 여러줄의 텍스트를 표시한다.
 * value 속성으로 지정된 data 위치가 타당하면 그 값을, 아니면 text 속성으로 지정한 문자열을 표시한다.
 */
declare abstract class TextItemBase extends ReportItem {
    static readonly PROP_WRAP = "wrap";
    static readonly PROP_MULTI_LINE = "multiLine";
    static readonly PROP_BOOLEAN_FORMAT = "booleanFormat";
    static readonly PROP_NUMBER_FORMAT = "numberFormat";
    static readonly PROP_DATE_FORMAT = "dateFormat";
    static readonly PROP_TEXT_FORMAT = "textFormat";
    static readonly PROP_TEXT_PREFIX = "prefix";
    static readonly PROP_TEXT_SUFFIX = "suffix";
    static readonly PROPINFOS: IPropInfo[];
    static readonly STYLE_PROPS: string[];
    private _wrap;
    private _multiLine;
    private _booleanFormat;
    private _numberFormat;
    private _dateFormat;
    private _textFormat;
    private _prefix;
    private _suffix;
    /**
     * wrap
     */
    get wrap(): boolean;
    set wrap(value: boolean);
    /**
     * multiLine
     * true면 '<br>'이나 '\n', '\r\n'으로 줄을 나눠 표시한다.
     */
    get multiLine(): boolean;
    set multiLine(value: boolean);
    /**
     * booleanFormat
     */
    get booleanFormat(): string;
    set booleanFormat(value: string);
    /**
     * numberFormat
     */
    get numberFormat(): string;
    set numberFormat(value: string);
    /**
     * dateFormat
     */
    get dateFormat(): string;
    set dateFormat(value: string);
    /**
     * 세미콜론(;)으로 구분하여 왼쪽에는 String.prototype.replace의 첫 번째 매개변수,
     * 오른쪽에는 두 번째 매개변수와 같은 타입으로 지정
     * 예) Mr. 홍길동: `'([A-Za-z]*); Mr\. \$1'`,
     * 예) 사업자번호: '(\\d{3})(\\d{2})(\\d{5});$1-$2-$3'
     */
    get textFormat(): string;
    set textFormat(value: string);
    /**
     * 접두어.
     * expression을 이용해서 표현할 수도 있지만,
     * 이 속성으로 설정하면 text와 다른 스타일을 적용할 수 있다.
     */
    get prefix(): string;
    set prefix(value: string);
    /**
     * 접미어.
     * expression을 이용해서 표현할 수도 있지만,
     * 이 속성으로 설정하면 text와 다른 스타일을 적용할 수 있다.
     */
    get suffix(): string;
    set suffix(value: string);
    getText(v: any): string;
    getDesignText2(system: boolean): string;
    protected _doDefaultInit(loader: IReportLoader, parent: ReportGroupItem, hintWidth: number, hintHeight: number): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doApplyStyle(prop: string, value: string, target: CSSStyleDeclaration): boolean;
    canRotate(): boolean;
    canLink(): boolean;
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    canPropAdoptDragSource(prop: IPropInfo, source: any): boolean;
    adoptPropDragSource(prop: IPropInfo, source: any): IDropResult;
    getDataValue(dp: IReportDataProvider, row: number): any;
}

/* Excluded from this release type: TextItemElement */

/* Excluded from this release type: TextItemElementBase */

declare class TextPrintInfo {
    bandCellWidth: number;
    bandCellHeight: number;
    element: TextItemElement;
    constructor(bandCellWidth: number, bandCellHeight: number, element: TextItemElement);
}

declare type ToolButonVariant = 'default' | 'outline' | 'filled' | 'subtle';

declare interface ToolButtonOptions {
    id?: string;
    className?: string;
    enabled?: boolean;
    size?: string;
    variant?: ToolButonVariant;
    long?: boolean;
    separator?: boolean;
    label?: string;
    action?: IDesignerAction;
    visible?: boolean;
    large?: boolean;
    ended?: boolean;
    checked?: boolean;
    shifted?: boolean;
    tag?: any;
    group?: any;
    svg?: string;
    svgAttributes?: {
        [key: string]: string;
    };
    hint?: string;
    style?: default_2.Properties;
    /**
     * action 보다 우선한다. 명시적 true를 리턴하면 action은 실행되지 않는다.
     */
    onClick?: (ctx: IDesignerContext, tag: any) => any;
}

declare interface ToolCheckInputOptions extends ToolInputOptionsBase<boolean> {
    value: boolean;
}

declare type ToolEditHandler<ValueType> = (context: IDesignerContext, value: ValueType) => void;

declare type ToolGroupViewDisplay = 'flex' | 'grid';

declare type ToolInputHandler<ValueType> = (context: IDesignerContext, value: ValueType) => void;

declare interface ToolInputOptions extends ToolInputOptionsBase<string> {
}

declare interface ToolInputOptionsBase<ValueType> extends ToolOptions {
    id?: string;
    label?: string;
    value?: ValueType;
    placeholder?: string;
    disabled?: boolean;
    full?: boolean;
    align?: Align;
    style?: default_2.Properties;
    validator?: (value: ValueType) => boolean | string;
    onEdit?: ToolEditHandler<ValueType>;
    onInput?: ToolInputHandler<ValueType>;
    onChange?: ToolEditHandler<ValueType>;
}

/**
 * ToolItem 뷰 기반 클래스
 */
declare abstract class ToolItem extends DesignerElement {
    readonly tag?: string;
    constructor(doc: Document, className?: string, options?: ToolOptions);
    get id(): string;
    set id(value: string);
    abstract update(model: SectionBarItem): void;
}

declare interface ToolNumberInputOptions extends ToolInputOptionsBase<number> {
    min?: number;
    max?: number;
}

declare interface ToolOptions {
    id?: string;
    tag?: string;
    style?: default_2.Properties;
}

declare interface ToolSelectOptions extends ToolOptions {
    label?: string;
    iconsColors?: string[];
    domain: string[];
    value?: string;
    disabled?: boolean;
    full?: boolean;
    onEdit?: ToolEditHandler<string>;
}

declare interface ToolSeparatorOptions extends ToolOptions {
    group?: unknown;
    color?: string;
    size?: default_2.Properties['width'];
    margin?: number;
    direction?: 'horizontal' | 'vertical';
}

declare interface ToolSpaceOptions extends ToolOptions {
    size?: default_2.Properties['width'];
}

declare interface ToolTextOptions extends ToolOptions {
    value?: string;
    style?: default_2.Properties;
    svg?: string;
    size?: string;
    svgAttributes?: {
        [key: string]: string;
    };
}

/* Excluded from this release type: TreeBodyView */

/* Excluded from this release type: TreeElement */

/**
 * Tree model 구성 요소.
 */
declare class TreeItem extends Base {
    private _source;
    private _name;
    private _label;
    private _editable;
    private _expandable;
    private _loadable;
    private _children;
    private _iconType;
    tag: any;
    private _parent;
    constructor(source: TreeItemSource);
    /** tree */
    get tree(): TreeModel;
    /** parent */
    get parent(): TreeItem;
    /** count */
    get count(): number;
    /** source */
    get source(): TreeItemSource;
    /** name */
    get name(): string;
    set name(value: string);
    /** editable */
    get editable(): boolean;
    /** name */
    get path(): string;
    /** displayText */
    get displayText(): string;
    /** 아예 확장이 불가한 아이템일 경우 사용 */
    get canExpandable(): boolean;
    /** expandable */
    get expandable(): boolean;
    set expandable(expandable: boolean);
    get loadable(): boolean;
    get iconType(): TreeItemIconType;
    get(index: number): TreeItem;
    /**
     * 주의: 중복적되는 name이 있을경우 먼저 찾은것이 반환된다.
     * @param name
     * @returns
     */
    findByName(name: string): TreeItem;
    findByTag(tag: any): TreeItem;
    add(item: TreeItem, index: number): number;
    remove(item: TreeItem): boolean;
    setLoadable(value: boolean): void;
    private $_load;
    protected _clear(): void;
    protected _addItem(item: TreeItem, index: number): number;
    protected _removeItem(item: TreeItem): void;
}

declare type TreeItemIconType = 'group' | 'report' | 'sheet' | 'reportFolder' | 'asset' | 'favorite' | 'bandData' | 'simpleData' | 'language';

declare type TreeItemSource = {
    name: string;
    label?: string;
    editable?: boolean;
    expandable?: boolean;
    loadable?: boolean;
    tag?: any;
    value?: string;
    type?: string;
    iconType?: TreeItemIconType;
    children?: TreeItemSource[];
};

/**
 * Tree viewer 모델.
 */
declare class TreeModel extends EventAware {
    static readonly SOURCE_CHANGED = "onTreeRootChanged";
    static readonly ITEM_ADDED = "onTreeItemAdded";
    static readonly ITEM_REMOVED = "onTreeItemRemoved";
    static readonly ITEM_EXPADNING = "onTreeItemExpanding";
    private _root;
    private _source;
    constructor(source?: TreeItemSource);
    protected _doDispose(): void;
    /** source */
    get source(): any;
    set source(value: any);
    /** root */
    get root(): TreeRootItem;
    findByName(name: string): TreeItem;
    findByTag(tag: any): TreeItem;
    addItem(parent: TreeItem, source: TreeItemSource, index?: number): TreeItem;
    removeItem(item: TreeItem): void;
    canExapnd(item: TreeItem): boolean;
    private $_setSource;
    private $_build;
    protected _fireSourceChanged(): void;
    protected _fireItemAdded(item: TreeItem, index: number): void;
    protected _fireItemRemoved(item: TreeItem, oldParent: TreeItem): void;
    protected _fireItemExpanding(item: TreeItem): boolean;
}

/**
 * Tree model root item.
 */
declare class TreeRootItem extends TreeItem {
    private _model;
    constructor(model: TreeModel, source: any);
    get tree(): TreeModel;
    get parent(): TreeItem;
    get path(): string;
}

/* Excluded from this release type: TreeRowElement */

/**
 * Tree viewer.
 */
declare class TreeViewer extends VisualContainer {
    static readonly FOCUSED_CHANGED = "onTreeFocusedChanged";
    static readonly EXPANDED = "onTreeExpanded";
    static readonly DOUBLE_CLICKED = "onTreeDoubleClicked";
    static readonly Model_CHANGED = "onTreeModelChanged";
    private _model;
    private _rootVisible;
    private _itemDraggable;
    private _focusedItem;
    onEdit: (item: TreeItem, text: string) => void;
    private _bodyView;
    private _editMask;
    private _selections;
    private _focusRequested;
    private _editHiding;
    constructor(containerId: string | HTMLDivElement);
    protected _doDispose(): void;
    private onTreeSourceChanged;
    private onTreeItemAdded;
    private onTreeItemRemoved;
    /** model */
    get model(): TreeModel;
    set model(value: TreeModel);
    /** rootVisible */
    get rootVisible(): boolean;
    set rootVisible(value: boolean);
    /** itemDraggable */
    get itemDraggable(): boolean;
    set itemDraggable(value: boolean);
    /** bodyView */
    get bodyView(): TreeBodyView;
    /** topPos */
    get topPos(): number;
    set topPos(value: number);
    /** leftPos */
    get leftPos(): number;
    set leftPos(value: number);
    /** focusedItem */
    get focusedItem(): TreeItem;
    set focusedItem(value: TreeItem);
    /** selection */
    get selection(): TreeItem[];
    /** lastSelectedItem */
    get lastSelectedItem(): TreeItem;
    /** editing */
    get editing(): boolean;
    expand(row?: TreeRowElement): void;
    expandAll(row?: TreeRowElement): void;
    collapse(row?: TreeRowElement): void;
    collapseAll(row?: TreeRowElement): void;
    clearSelection(item?: TreeItem): void;
    select(item: TreeItem): void;
    toggleSelect(item: TreeItem): void;
    selectAll(items?: TreeItem[]): void;
    unselect(item: TreeItem): void;
    setFocusedRow(row: TreeRowElement): void;
    isFocused(item: TreeItem): boolean;
    isSelected(item: TreeItem): boolean;
    itemOfDom(dom: Element): TreeItem;
    showEdit(): boolean;
    hideEdit(accept: boolean, focus: boolean): boolean;
    makeVisible(item: TreeItem): void;
    protected _createDefaultTool(): VisualTool;
    protected _doPrepareContainer(doc: Document, dom: HTMLElement): void;
    protected _doLayout(bounds: Rectangle): void;
    setFocus(): void;
    private $_acceptEdit;
    private $_editorBlur;
    protected _fireFocusedChanged(focused: TreeItem, old: TreeItem): void;
    protected _fireExpanded(group: TreeItem, expanded: boolean): void;
    protected _fireDoubleClicked(item: TreeItem): void;
    protected _fireModelChanged(): void;
}

/* Excluded from this release type: UIContainer */

/* Excluded from this release type: UIDragTracker */

/* Excluded from this release type: UIEditRequest */

declare class UIElement extends EventAware {
    userData: any;
    private _parent;
    private _dom;
    private _elements;
    constructor(doc: Document, className: string, elementType?: string);
    get dom(): HTMLElement;
    /** parent */
    get parent(): UIElement;
    /** container */
    get container(): UIContainer;
    /** x */
    get x(): number;
    set x(value: number);
    /** y */
    get y(): number;
    set y(value: number);
    /** width */
    get width(): number;
    /** height */
    get height(): number;
    isDom(dom: Element): boolean;
    setClassName(className: string): void;
    setHint(title: string): void;
    setStyle(style: string, value: string): void;
    clearStyle(style: string): void;
    setStyles(styles: object): void;
    setImportantStyle(style: string, value: any): void;
    getBounds(): IRect;
    setBounds(x: number, y: number, width: number, height: number): void;
    setRect(r: IRect): void;
    move(x: number, y: number): UIElement;
    setXP(x: number): void;
    setYP(y: number): void;
    contains(dom: Element | UIElement): boolean;
    appendDom(dom: Element): void;
    clear(): this;
    addChild(child: UIElement): boolean;
    removeChild(child: UIElement): boolean;
    removeLast(): UIElement;
    containerToLocal(x?: number, y?: number): {
        x: number;
        y: number;
    };
    setText(text: string): this;
    hide(): this;
    show(style?: string): this;
    setRotation(rotation: number): this;
    protected _addChild(child: UIElement): void;
    protected _removeChild(child: UIElement): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
}

/* Excluded from this release type: UITool */

/* Excluded from this release type: UIToolOwner */

declare class UploadArchiveDlg extends DialogView {
    constructor(ctx: IDesignerContext);
    get bodyView(): BodyView;
    get bottomView(): BottomView;
    protected _doInitStyles(dom: HTMLElement): void;
    get result(): {
        fileType: ReportArchiveType;
        tag: string;
    };
    protected _initBody(ctx: IDesignerContext): DialogBodyView;
    protected _createBottom(ctx: IDesignerContext): BottomView;
    protected _doShow(): void;
    protected _bodyChanged(element?: HTMLElement): void;
    canSubmit(): boolean;
}

export declare interface UserAssetTemplateGroup {
    name: string;
    title: string;
    description: string;
    items: UserAssetTemplateItem[];
}

declare interface UserAssetTemplateItem {
    name: string;
    description?: string;
    file?: string;
    image?: string;
}

export declare interface UserDataTemplateGroup {
    name: string;
    title: string;
    description: string;
    items: IUserDataTemplateItem[];
}

declare type UserFontSource = {
    name: string;
    source: string;
    fontWeight: FontWeight;
};

export declare interface UserReportCategoryTemplate {
    category: string;
    templates: UserReportTemplate[];
}

declare interface UserReportTemplate {
    name: string;
    report?: Record<string, any>;
    file?: string;
    data?: {
        [key: string]: ReportTemplateData;
    };
    dataFile?: string;
    thumbnail?: string;
    description?: string;
}

/**
 * Value property base.
 */
declare abstract class ValueProperty extends PropertyItem {
    private _defaultValue;
    /**
     * 기본값.
     */
    get defaultValue(): any;
    set defaultValue(value: any);
}

declare type ValueString = string | number;

declare enum VerticalAlign {
    TOP = "top",
    MIDDLE = "middle",
    BOTTOM = "bottom"
}

declare class VerticalRulerView extends RulerView {
    private _indicator;
    constructor(doc: Document, container: ReportEditorBase);
    protected _doDispose(): void;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doRefreshView(container: ReportEditor): void;
    setFocusedElement(element: ReportElement): void;
    private $_layoutTicks;
}

/* Excluded from this release type: VisualContainer */

/* Excluded from this release type: VisualElement */

declare type VisualElementCallback = (element: VisualElement, dom: HTMLElement) => void;

/* Excluded from this release type: VisualTool */

/* Excluded from this release type: VisualToolOwner */

export { }


declare namespace ResizeDirection {
    function isLeft(dir: ResizeDirection): boolean;
    function isTop(dir: ResizeDirection): boolean;
    function isEdge(dir: ResizeDirection): boolean;
    function isIn(dir: ResizeDirection, ...dirs: ResizeDirection[]): boolean;
}

