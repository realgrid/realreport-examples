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
declare abstract class AssetItem {
    name: string;
    data: string;
    parent: AssetGroup;
    description: string;
    tag: any;
    constructor(name: string, data: string);
    get isGroup(): boolean;
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
    private _root;
    private _nameMap;
    constructor();
    protected _doDispose(): void;
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
    getChartist(name: string): ChartistThemeAsset;
    getHighchart(name: string): HighchartThemeAsset;
    findGroup(path: string): AssetGroup;
    forceGroup(path: string): AssetGroup;
    addGroup(parent: string | AssetGroup, group: string): AssetGroup;
    removeGroup(group: string | AssetGroup): boolean;
    add(group: string | AssetGroup, item: AssetItem): void;
    remove(item: AssetItem): void;
    addImage(group: string | AssetGroup, name: string, imageData: string): ImageAsset;
    addSvg(group: string | AssetGroup, name: string, svgData: string): SvgAsset;
    addPalette(group: string | AssetGroup, name: string, paletteData: string): ColorPaletteAsset;
    addCharitst(group: string | AssetGroup, name: string, themeData: string): ChartistThemeAsset;
    addHighchart(group: string | AssetGroup, name: string, themeData: string): HighchartThemeAsset;
    getTree(root?: string): TreeItemSource;
    private $_parseTree;
    getValidName(prefix: string): string;
    isValidName(name: string): boolean;
    private $_findGroup;
    private $_addGroup;
    private $_removeGroup;
    private $_addItem;
    private $_removeItem;
    private $_addImage;
    private $_addSvg;
    private $_addPalette;
    private $_addChartist;
    private $_addHighchart;
}

declare interface AsyncLoadable {
    loadAsync(ctx: PrintContext): Promise<void>;
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
    private _sampleCount;
    private get _values();
    private set _values(value);
    constructor(name: string, fields: IBandDataField[], values: any[], sampleCount?: number, link?: IReportDataLink, dp?: IReportDataProvider);
    get rowCount(): number;
    getRowValues(row: number): any;
    getValue(path: string): any;
    getRowValue(row: number, field: string | number): any;
    getFieldValues(field: string | number, rows?: number[]): any[];
    equalValues(row: number, fields: string[], values: any[]): boolean;
    equalRows(row1: number, row2: number, fields?: string[]): boolean;
    findRows(values: object): number[];
    get sample(): any[];
    getValues(): any[];
    setValues(vals: any[]): void;
    getFieldSample(): any[];
    setSource(source: any[]): void;
    /**
     * 특정 모드의 데이터를 일회성으로 조작하기 위한 편의성 메서드 (callback 실행 후 모드는 원복됨)
     */
    runInMode(mode: LinkableReportData['mode'], callback: (() => void) | Promise<void>): void;
    getSaveType(): string;
    protected _doDataFetched(fetchedData: unknown): void;
    private $_cloneRow;
    protected _getSampleValues(): any[];
    protected _readRows(): void;
    protected _prepareCalcField(fields: IBandDataField[], fieldMap: any, calcField: IBandDataField, index: number, node: ExpressionNode): void;
}

declare interface BandBorders {
    border: string;
    borderLeft: string;
    borderRight: string;
    borderTop: string;
    borderBottom: string;
}

declare class BandCollectionElement extends ReportGroupItemElement<DataBandCollection> {
    constructor(doc: Document, model: DataBandCollection);
    protected _doDispose(): void;
    get debugLabel(): string;
    protected _getCssSelector(): string;
    protected _needDesignBox(): boolean;
    protected _initDom(doc: Document, dom: HTMLElement): void;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doAfterMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number, sz: Size): void;
    protected _doLayoutContent(ctx: PrintContext): void;
}

declare abstract class BandData extends LinkableReportData {
    protected _fields: IBandDataField[];
    protected _fieldMap: any;
    protected _calcFieldRuntime: FieldValueRuntime;
    constructor(name: string, fields: IBandDataField[], link?: IReportDataLink, dp?: IReportDataProvider);
    get fields(): IBandDataField[];
    get fieldCount(): number;
    abstract get rowCount(): number;
    getFields(): IBandDataField[];
    getField(index: number): IBandDataField;
    getFieldByName(fieldName: string): IBandDataField;
    getFieldIndex(field: string): number;
    containsField(fieldName: string): boolean;
    indexOfField(field: IBandDataField): number;
    setField(index: number, field: IBandDataField): void;
    getSaveFields(): IBandDataField[];
    getSaveValues(): any[];
    getNextFieldName(prefix?: string): string;
    getFieldNames(): string[];
    addField(index: number, field: IBandDataField): boolean;
    removeField(field: IBandDataField): boolean;
    abstract getRowValue(row: number, field: string | number): any;
    groupBy(dataView: BandDataView, fields: string[], subRows?: number[]): (number | IBandRowGroup | IBandRowGroupFooter)[];
    readValue(field: IBandDataField, value: any): any;
    readRow(row: any): any;
    dateToStr(field: IBandDataField, v: Date): string;
    abstract getFieldValues(field: string | number, rows?: number[]): any[];
    get isBand(): boolean;
    preparePrint(ctx: PrintContext, design: boolean): void;
    protected _getSampleValues(): any[];
    protected _readRows(): void;
    protected _prepareCalcField(fields: IBandDataField[], fieldMap: any, calcField: IBandDataField, index: number, node: ExpressionNode): void;
}

declare interface BandDataTemplate extends IDataTemplate {
    type: 'band';
    template: BandTemplate;
}

declare class BandDataView extends Base implements IBandDataView {
    static readonly SOURCE_INDEX = "_sourceIndex";
    private _source;
    private _view;
    constructor(data: IBandData);
    get rowCount(): number;
    sort(field: string, direction: DataDirection): this;
    getRowValue(row: number, field: string): any;
    getFieldValues(field: string, rows?: number[]): any[];
    $_isValidField(field: string): boolean;
}

declare abstract class BandElement<T extends DataBand> extends ReportGroupItemElement<T> {
    static readonly END_ROW_MESSAGE_CLASS = "rr-end-row-message";
    static readonly END_ROW_CLASS = "rr-end-row";
    static readonly BORDER_CONTAINER = "rr-band-border-container";
    abstract get rowView(): ReportGroupItemView;
    private _needFooterView;
    get needFooterView(): boolean;
    set needFooterView(value: boolean);
    abstract getLines(): ReportItemView[];
    abstract printRow(ctx: PrintContext, row: number): any;
    getSibling(item: ReportItemView, delta: number): ReportItemView;
    findMasterBand(band: DataBand): DataBand;
    getBandLevel(masterBand: DataBand, band: DataBand): string;
    abstract addMasterRow(page: HTMLDivElement, headerView: any, rowView: any, x: number, y: number): number;
    abstract prepareAsync(doc: Document, ctx: PrintContext, width: number, subRows: number[], masterRow: number): BandPrintInfo<any>;
    abstract prepareSubBand(doc: Document, ctx: PrintContext, width: number, dataRows: number[]): BandPrintInfo<any>;
    protected _prepareDetail(doc: Document, ctx: PrintContext, band: DataBand, details: DataBandCollection, detailViews: BandCollectionElement, masterBandRow: number, rows: BandPrintRow[], width: number): void;
    protected _getNext(item: ReportItemView): ReportItemView;
    protected _getPrev(item: ReportItemView): ReportItemView;
    private $_prepareDetailDataBand;
    private $_prepareDetailBandGroup;
    private $_setBandLevel;
}

declare class BandFooterPrintInfo {
}

declare class BandGroup extends ReportGroupItem {
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
    abstract getNextPage(doc: Document, ctx: PrintContext, width: number, parent: HTMLDivElement): HTMLDivElement | null;
    abstract getNoPagingPage(doc: Document, ctx: PrintContext, width: number, parent: HTMLDivElement): HTMLDivElement;
    abstract getEmptyDataBandPage(doc: Document, ctx: PrintContext, bandPrintInfo: BandPrintInfo<T>, width: number, parent: HTMLDivElement): HTMLDivElement | null;
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
    setBandBoundPosition(ctx: PrintContext, model: BandModel, div: HTMLDivElement): void;
    setBandPrevIndex(index: number): void;
    createBorderContaienr(doc: Document, y: number, w: number, name: string, tModel: string): HTMLDivElement;
    setBorderContainerStyle(borderContainer: HTMLDivElement, styles: {
        [x: string]: string;
    }): void;
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
    protected _prepareDetailBandPrintNext(ctx: PrintContext, band: DataBand, row: BandPrintInfo<SimpleBand | TableBand | BandGroup>, rows: BandPrintRow[], rowsPerPage: number): void;
    protected _isNextRowDataRow(rows: BandPrintRow[]): boolean;
}

declare type BandPrintRow = number | BandFooterPrintInfo | BandPrintInfo<any> | EndRowMarker;

declare enum BandSectionLayout {
    ACROSS_DOWN = "acrossDown",
    DOWN_ACROSS = "downAcross"
}

declare interface BandTemplate {
    fields: IBandDataField[];
    samples: {
        [key: string]: any;
    }[];
}

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

declare interface BorderWidths {
    left: number;
    right: number;
    top: number;
    bottom: number;
}

/**
 * 자식들의 위치를 지정할 수 있는 container.
 * 위치 설정이 안된 item은 중앙에 정렬 시킨다.
 */
declare abstract class BoundedContainer extends ReportGroupItem {
    static readonly CHILD_PROPS: IPropInfo[];
    constructor(name: string);
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

/**
 * CellGroup들만을 자식으로 갖는다.
 */
declare abstract class CellContainer extends ReportGroupItem {
    /* Excluded from this release type: noPrepareCell */
    constructor(name: string);
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
    load(loader: IReportLoader, source: ReportSource$1): void;
    save(target: ReportTarget): boolean;
    get(index: number): ChartAxis<T, C>;
    indexOf(axis: ChartAxis<T, C>): number;
    addNew(loader: IReportLoader, type: string): ChartAxis<T, C>;
    add(axis: ChartAxis<T, C>): ChartAxis<T, C>;
    removeAt(index: number): boolean;
    remove(axis: ChartAxis<T, C>): boolean;
    clear(): boolean;
    get page(): ReportPage;
    abstract get displayPath(): string;
    get level(): number;
    isCollection(): boolean;
    isAncestorOf(item: ReportPageItem): boolean;
    getCollectionLabel(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    protected abstract _createAxis(loader: IReportLoader, src: ReportSource$1): ChartAxis<T, C>;
    protected abstract _axesChanged(): void;
    protected _doDefaultInit(): void;
    private $_invalidateAxes;
}

declare abstract class ChartDataObject<T extends ChartItem, C = unknown> extends ChartObject<T, C> {
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
    protected _doSave(target: ReportTarget): void;
}

/**
 * Chartist Theme
 */
declare class ChartistThemeAsset extends AssetItem {
    theme: object;
    protected _parsetData(data: string): void;
    protected _doSave(target: any): void;
}

declare abstract class ChartItem<C = unknown> extends ReportGroupItem implements ChartWrappable<C> {
    abstract getChartConfig(context: PrintContext): C;
    getParentBand(): DataBand;
}

declare abstract class ChartObject$1<T extends ReportGroupItem> extends ReportItem {
    static readonly PROPINFOS: IPropInfo[];
    private _chart;
    constructor(chart: T, name?: string);
    get chart(): T;
    canHide(): boolean;
    getWrapper(): object;
    get page(): ReportPage;
    get report(): Report_2;
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

declare abstract class ChartObject<T extends ChartItem, C = unknown> extends ReportPageItem implements ReportObject, ChartWrappable<C> {
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
    get page(): ReportPage;
    get report(): Report_2;
    get pathLabel(): string;
    get displayPath(): string;
    get level(): number;
    get styles(): Styles;
    set styles(value: Styles);
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource$1): void;
    save(target: ReportTarget): boolean;
    abstract getChartConfig(context: PrintContext): C;
    get dataParent(): ReportGroupItem;
    get marqueeParent(): ReportItem;
    isCollection(): boolean;
    protected _doDefaultInit(): void;
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
    protected _doSave(target: ReportTarget): void;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _getSubStyle(prop: string, style: string): any;
    protected _setSubStyle(prop: string, style: string, value: any): void;
    protected _getParentData(): string;
    protected _changed(prop: string, newValue: unknown, oldValue: unknown): void;
}

declare abstract class ChartSeries$1<T extends ReportGroupItem> extends ChartObject$1<T> {
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

declare abstract class ChartSeries<T extends ChartItem, C = unknown> extends ChartDataObject<T, C> {
    static readonly PROP_VALUE_FIELD = "valueField";
    static readonly PROP_VALUES = "values";
    static readonly PROPINFOS: IPropInfo[];
    private _valueField;
    private _values;
    private _collection;
    private _index;
    private _designVisible;
    constructor(collection: ChartSeriesCollection<T>);
    getPropDomain(prop: IPropInfo): any[];
    get outlineLabel(): string;
    get outlineParent(): IOutlineSource;
    abstract get type(): string;
    get valueField(): string;
    set valueField(value: string);
    get values(): number[];
    set values(value: number[]);
    get collection(): ChartSeriesCollection<T>;
    set collection(value: ChartSeriesCollection<T>);
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

declare abstract class ChartSeriesCollection$1<T extends ReportGroupItem> extends ReportItemCollection<ChartSeries$1<T>> {
    private _chart;
    protected _series: ChartSeries$1<T>[];
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
    get(index: number): ChartSeries$1<T>;
    indexOf(series: ChartSeries$1<T>): number;
    add(loader: IReportLoader, series: ChartSeries$1<T> | ConfigObject, index?: number): ChartSeries$1<T>;
    addAll(loader: IReportLoader, series: (ChartSeries$1<T> | ConfigObject)[], index?: number): boolean;
    removeAt(index: number): boolean;
    remove(series: ChartSeries$1<T>): boolean;
    clear(): boolean;
    select(series: ChartSeries$1<T>): void;
    getSaveType(): string;
    get page(): ReportPage;
    get displayPath(): string;
    get level(): number;
    isAncestorOf(item: ReportPageItem): boolean;
    protected abstract _createSeries(loader: IReportLoader, src: any): ChartSeries$1<T>;
    protected abstract _seriesChanged(series: ChartSeries$1<T>): void;
    private $_add;
    private $_invalidateSeries;
    private $_seriesChanged;
    protected _doMoveItem(from: number, to: number): boolean;
}

declare abstract class ChartSeriesCollection<T extends ChartItem, C = unknown> extends ReportItemCollection<ChartSeries<T, C>> implements ReportObject {
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
    get items(): ChartSeries<T, C>[];
    get visibleCount(): number;
    abstract getChartConfig(context: PrintContext): C[];
    getSaveLabel(): string;
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource$1): void;
    save(target: ReportTarget): boolean;
    get(index: number): ChartSeries<T, C>;
    indexOf(series: ChartSeries<T, C>): number;
    addNew(loader: IReportLoader, type: string): ChartSeries<T, C>;
    add(series: ChartSeries<T, C>): ChartSeries<T, C>;
    removeAt(index: number): boolean;
    remove(series: ChartSeries<T, C>): boolean;
    clear(): boolean;
    select(series: ChartSeries<T, C> | null): void;
    get page(): ReportPage;
    get displayPath(): string;
    get level(): number;
    isCollection(): boolean;
    isAncestorOf(item: ReportPageItem): boolean;
    getCollectionLabel(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    protected abstract _createSeries(loader: IReportLoader, src: ReportSource$1): ChartSeries<T, C>;
    protected abstract _seriesChanged(): void;
    protected _doDefaultInit(): void;
    private $_invalidateSeriesList;
}

declare abstract class ChartTextObject$1<T extends ReportGroupItem> extends ChartObject$1<T> {
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

declare abstract class ChartTextObject<T extends ChartItem, C = unknown> extends ChartObject<T, C> {
    static readonly PROP_TEXT = "text";
    static readonly PROPINFOS: IPropInfo[];
    private _text;
    constructor(chart: T, text?: string);
    /** text */
    get text(): string;
    set text(value: string);
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
    protected _doSave(target: ReportTarget): void;
}

declare interface ChartWrappable<ChartConfig> {
    getChartConfig(context: PrintContext): ChartConfig;
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
    constructor(doc: Document, model: ColumnBoxContainer, name?: string);
    protected _doDispose(): void;
    getRowPoints(): number[];
    get debugLabel(): string;
    protected _getCssSelector(): string;
    protected _initDom(doc: Document, dom: HTMLElement): void;
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

declare type ConfigObject = {
    [key: string]: any;
};

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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
declare abstract class DataBand extends ReportGroupItem {
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
    private _subBandKeyFieldValues;
    private _subBandMasterKeyFieldValues;
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
    get dataView(): BandDataView;
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
    prepareIndices(ctx: PrintContext): void;
    protected abstract _doPrepareIndices(ctx: PrintContext): void;
    getColPoints(w: number, x?: number): number[];
    getColWidth(w: number): number;
    getValues(dataView: BandDataView, row: number, fields: string[]): any[];
    getNextSubBandDetailRows(dataView: BandDataView, from: number): number[];
    protected _selectRow(dataView: BandDataView, row: number, idx: number): boolean;
    protected _selectSubBandRow(dataView: BandDataView, row: number, idx: number): boolean;
    abstract getNextDetailRows(dataView: BandDataView, from?: number): number[];
    protected _getNextDetailRows(dataView: BandDataView, from: number): number[];
    protected _getNextSubBandDetailRows(dataView: BandDataView, from: number): number[];
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
    getBandBorders(): BandBorders;
    getBandBorderWidths(): BorderWidths;
    hasBorder(): boolean;
    getPropDomain(prop: IPropInfo): any[];
    /**
     * 출력시 사용되는 밴드의 정보를 초기값으로 초기화
     */
    resetBandPrintingValue(): void;
    abstract containsInSection(item: ReportItem): boolean;
    get designLevel(): number;
    get dataDominant(): boolean;
    protected _datable(): boolean;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    canAddTo(group: ReportGroupItem): boolean;
    canResize(dir: ResizeDirection): boolean;
    canPageBreak(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _doPreparePrint(ctx: PrintContext): void;
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
    constructor(name: string);
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

declare enum DataDirection {
    ASCENDING = "ascending",
    DESCENDING = "descending"
}

/* Excluded from this release type: DatetimeReader */

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
    private _dataMap;
    private _contextData;
    constructor(commands: EditCommandStack);
    protected _doDispose(): void;
    get designTime(): boolean;
    preparePrint(ctx: PrintContext): void;
    getAll(): IReportData[];
    getNames(): string[];
    get(name: string): IReportData;
    getContextValue(path: string): any;
    /**
     * @param path data name + "." + data path
     */
    getValue(path: string, row: number): any;
    getValueAt(data: string, path: string, row: number): any;
    getFieldValues(data: string, field: string, rows?: number[]): any[];
    addData(data: IReportData): boolean;
    removeData(data: string | IReportData): IReportData;
    dataNameChanged(data: IReportData, oldName: string): void;
    fieldNameChanged?(data: IReportData, newName: string, oldName: string): void;
    clear(): DesignDataManager;
    load(source: any, clear?: boolean): DesignDataManager;
    save(target: object): void;
    getFieldIndex(data: string, field: string): number;
    updateField(data: BandData, index: number, field: IBandDataField): void;
    addField(data: BandData, index: number, field: IBandDataField): void;
    removeField(data: BandData, field: IBandDataField): void;
    renameData(data: IReportData, newName: string): void;
    private $_register;
    private $_unregister;
    private $_fireDataAdded;
    private $_fireDataRemoved;
    private $_fireDataUpdated;
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

/* Excluded from this release type: DragTracker */

declare enum DropResultType {
    PROP = "prop",
    ITEM = "item"
}

/**
 * Edit command base.
 * 편집 행위 외에 다른 로직이 포함되지 않도록 한다.
 */
declare abstract class EditCommand extends Base {
    private _name;
    private _id;
    private _time;
    constructor(name: string);
    protected _doDispose(): void;
    /** name */
    get name(): string;
    /** id */
    get id(): number;
    /** time */
    get time(): Date;
    /** displayLabel */
    get displayLabel(): string;
    /** description */
    get description(): string;
    abstract get source(): any;
    abstract undo(): void;
    abstract redo(redoing: boolean): any;
    run(): any;
}

/**
 * Edit command stack.
 * 커맨드는 반드시 이 객체를 통해서 실행되거나 undo 되어야 한다.
 */
declare class EditCommandStack extends EventAware {
    private _owner;
    private _commands;
    private _current;
    private _closed;
    private _undoing;
    private _redoing;
    constructor(owner: IEditCommandStackOwner);
    protected _doDispose(): void;
    /** owner */
    get owner(): IEditCommandStackOwner;
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

/* Excluded from this release type: EditRequest */

declare class EndRowMarker {
    count: number;
    maxCount: number;
    constructor(count: number, maxCount: number);
}

/* Excluded from this release type: EventAware */

/* Excluded from this release type: ExpressionNode */

/* Excluded from this release type: ExpressionRuntime */

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

declare abstract class HichartAxis extends ChartObject$1<HichartItem> {
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

declare class HichartAxisLabels extends ChartObject$1<HichartItem> {
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
    get page(): ReportPage;
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
    get page(): ReportPage;
    get displayPath(): string;
    get level(): number;
    get marqueeParent(): ReportItem;
    get(index: number): HichartAxisPlotBand;
    getSaveType(): string;
    protected _doMoveItem(from: number, to: number): boolean;
    private $_resetBands;
}

declare class HichartAxisPlotLabel extends ChartObject$1<HichartItem> {
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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
declare class HichartAxisTitle extends ChartTextObject$1<HichartItem> {
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

declare class HichartLegend extends ChartObject$1<HichartItem> {
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

declare abstract class HichartSeries extends ChartSeries$1<HichartItem> {
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

declare class HichartSeriesCollection extends ChartSeriesCollection$1<HichartItem> {
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
declare class HichartTitle extends ChartTextObject$1<HichartItem> {
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

/**
 * Highchart Theme
 */
declare class HighchartThemeAsset extends AssetItem {
    theme: object;
    protected _parsetData(data: string): void;
    protected _doSave(target: any): void;
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

declare interface IBandData extends IReportData {
    fieldCount: number;
    rowCount: number;
    getField(index: number): IBandDataField;
    getFields(): IBandDataField[];
    getFieldByName(fieldName: string): IBandDataField;
    getFieldIndex(fieldName: string): number;
    containsField(fieldName: string): boolean;
    getRowValue(row: number, field: string | number): any;
    getFieldValues(field: string | number): any[];
    equalValues(row: number, fields: string[], values: any[]): boolean;
    equalRows(row1: number, row2: number, fields?: string[]): boolean;
    groupBy(dataView: BandDataView, fields: string[], rows: number[]): (number | IBandRowGroup | IBandRowGroupFooter)[];
    getValues(): any[];
}

declare interface IBandDataField {
    fieldName: string;
    dataType?: "text" | "number" | "bool" | "array" | "datetime";
    source?: string;
    expression?: string;
    format?: string;
    description?: string;
    sample?: any;
    dateReader?: DatetimeReader;
    width?: number;
}

/**
 * @filename BandDataView.ts
 * @author sykim <KIMSANGYEOB>
 * @date 2023.07.13
 * @description <밴드 데이터에서 추가적인 설정을 적용 후 표현하기 위해 작성>
 */

declare interface IBandDataView {
    rowCount: number;
    sort: (field: string, direction: DataDirection) => void;
    getRowValue: (row: number, field: string) => any;
    getFieldValues: (field: string, rows?: number[]) => any[];
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

declare interface IDataTemplate {
    name: string;
    category?: string;
    type?: string;
    description?: string;
    file?: string;
    fields?: IReportDataField[];
    sample?: Record<string, any> | Record<string, any>[];
    dataLink?: IReportDataLink;
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
}

declare interface IEventAware {
    addListener(listener: object): IEventAware;
    removeListener(listener: object): IEventAware;
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

/**
 * Image data url.
 */
declare class ImageAsset extends AssetItem {
    protected _doSave(target: any): void;
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
}

declare interface IRect extends IPoint {
    width: number;
    height: number;
}

declare interface IReportAssetItem {
    id: string;
    group?: string;
    name: string;
    type: string;
    data: string;
}

declare interface IReportData {
    name: string;
    isBand: boolean;
    getFieldNames(): string[];
    getSaveType(): string;
    getValue(path: string): any;
}

declare interface IReportDataField {
    fieldName: string;
    dataType: 'text' | 'number' | 'bool' | 'datetime';
    source?: string;
    description?: string;
    sample?: any;
}

declare interface IReportDataInfo {
    id: string;
    category?: string;
    name: string;
    type: string;
    fields?: IReportDataField[];
    description?: string;
    sample?: any;
    dataLink?: IReportDataLink;
}

declare interface IReportDataLink {
    url: string;
    method?: 'GET' | 'POST' | 'PUT';
    format?: ReportDataLinkFormat;
    /**
     * format이 json일 때 value 배열 위치.
     */
    dataPath?: string;
    params?: {
        [name: string]: string;
    };
    headers?: {
        [name: string]: string;
    };
    body?: string;
}

declare interface IReportDataProvider {
    designTime?: boolean;
    preparePrint(ctx: PrintContext): void;
    getAll(): IReportData[];
    get(name: string): IReportData;
    getContextValue(path: string): any;
    getValue(path: string, row: number): any;
    getValueAt(data: string, path: string, row: number): any;
    getFieldValues(data: string, field: string, rows?: number[]): any[];
    addData?(data: IReportData): boolean;
    removeData?(data: string | IReportData): IReportData;
    dataNameChanged?(data: IReportData, oldName: string): void;
    fieldNameChanged?(data: IReportData, newName: string, oldName: string): void;
}

declare interface IReportDesignerOptions {
    showAssetPanel?: boolean;
    showDataPanel?: boolean;
    showScriptPanel?: boolean;
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
    /** action bar에서 클릭 대신 아이템 아이콘을 drag해서 생성 */
    dragInsert?: boolean;
    /** callbacks */
    getReportListCallback?: () => Promise<ReportListSource>;
    getReportCallback?: (reportId: string) => Promise<IReportSource>;
    saveReportCallback?: (report: Record<string, any>, reportId: string, reportContext: ReportContext) => Promise<SaveCallbackResponse | null>;
    getOptionsCallback?: () => Promise<Partial<IReportDesignerOptions>>;
    saveOptionsCallback?: (options: IReportDesignerOptions) => Promise<string | null>;
}

/**
 * Report loader spec.
 */
declare interface IReportLoader {
    getCreator(type: string): (name: string) => ReportItem;
    createItem(type: any): ReportItem;
    createRealChartAxis(collection: RCAxisCollection, src: ReportSource$1): RCAxis;
    createRealChartSeries(collection: RCSeriesCollection, src: ReportSource$1): RCSeries;
    createHichartSeries(chart: HichartItem, src: any): HichartSeries;
}

declare interface IReportResponse {
    id?: string;
    message?: string;
    error?: string;
}

declare interface IReportServer {
    getReportList(): Promise<ReportListSource>;
    getReport(id: string): Promise<IReportSource>;
    saveReport?(report: Record<string, any>, id: string, reportContext: ReportContext): Promise<IReportResponse | null>;
    getDataGroups(parent?: string): Promise<string[]>;
    getDataList(group: string): Promise<IReportDataInfo[]>;
    getData?(id: string): Promise<IReportDataInfo>;
    getAssetGroups(parent?: string): Promise<string[]>;
    getAssetList(group: string): Promise<IReportAssetItem[]>;
    getOptions?(): Promise<Partial<IReportDesignerOptions>>;
    saveOptions?: (options: IReportDesignerOptions) => Promise<string>;
}

declare interface IReportSource {
    id?: string;
    source?: Record<string, any>;
}

declare interface ISelectionSource {
    selectItem: ReportPageItem;
    canSelectedWith(other: ISelectionSource): boolean;
}

declare interface ISides {
    left: number;
    top: number;
    right: number;
    bottom: number;
}

declare interface ISimpleData extends IReportData {
    getField(index: number): ISimpleDataField;
    getFields(): ISimpleDataField[];
    getFieldByName(fieldName: string): ISimpleDataField;
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

declare interface ISimpleGroupPrintInfo extends IGroupPrintInfo {
    view: SimpleBandGroupSectionElement<SimpleBandRowGroupHeader | SimpleBandRowGroupFooter>;
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

declare type LanguageCode = keyof typeof ISO_639_LANGUAGES;

declare type LanguageItem = {
    field: string;
    value: string;
};

/* Excluded from this release type: LayerElement */

declare abstract class LinkableReportData extends ReportData {
    mode: 'link' | 'embed';
    _link?: IReportDataLink;
    constructor(name: string, link?: IReportDataLink, dp?: IReportDataProvider);
    get link(): IReportDataLink;
    set link(value: IReportDataLink);
    get linkUrl(): IReportDataLink['url'];
    fetch(): Promise<void>;
    save(target: object): void;
    protected abstract _doDataFetched(fetchedData: unknown): void;
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
    constructor(prop: IPropInfo);
}

declare interface ModelPropertyTypeProps {
    /**
     * 포함해야할 모델 내부 속성을 정의
     */
    include?: string[];
}

/**
 * Report header/footer, Page header/footer를 제외한 리포트 페이지 영역.
 */
declare class PageBody extends PageSection {
    static readonly CLASS: string;
    static readonly STYLE_PROPS: string[];
    static readonly $_ctor: string;
    private _bodyItems;
    constructor(name?: string);
    /**
     * items
     */
    get bodyItems(): ReportItem[];
    get itemsContainer(): ColumnBoxContainer;
    get itemsAlign(): BoxItemsAlign;
    get outlineLabel(): string;
    canParentOf(itemType: string): boolean;
    canResize(dir: ResizeDirection): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _loadItems(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    protected _doSave(target: object): void;
    canRemove(item: ReportItem): boolean;
    protected _createPageBodyItems(): PageBodyItems;
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
    get page(): ReportPage;
    canMove(): boolean;
    getSaveType(): string;
    canResize(dir: ResizeDirection): boolean;
    protected _getStyleProps(): string[];
}

declare class PageSectionGuard extends ReportItemElement<ReportPage> {
    get guardLabel(): string;
}

/* Excluded from this release type: PageView */

declare interface PageViewOptions {
    frontEnabled?: boolean;
    backEnabled?: boolean;
    reportHeaderEnabled?: boolean;
    reportFooterEnabled?: boolean;
    pageHeaderEnabled?: boolean;
    pageFooterEnabled?: boolean;
    addBodyItemSectionEnabled?: boolean;
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
    constructor(report: Report_2);
    protected _doDispose(): void;
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
    getOrientation(page?: ReportPage): PaperOrientation;
    getPaperSize(): Size;
    getPageSize(page?: ReportPage): Size;
    getMargins(): ISides;
    getContentRect(r: Rectangle): Rectangle;
    getClientRect(page: ReportPage): Rectangle;
    applyExtents(page: ReportPage, css: CSSStyleDeclaration): void;
    applyPreviewExtents(page: ReportPage, css: CSSStyleDeclaration, paperOrientation: PaperOrientation): {
        pageWidth: number;
        pageHeight: number;
    };
    applyClient(page: ReportPage, css: CSSStyleDeclaration): void;
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

/* Excluded from this release type: Point */

/**
 * Printing 관련 상태 정보 모델.
 */
declare class PrintContext extends Base {
    static readonly VALUES: string[];
    private _printing;
    private _compositePrinting;
    private _dp;
    private _desingDp;
    private _assets;
    private _reportView;
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
    report: Report_2;
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
    band: DataBand | CrosstabBand;
    pages: PrintPage[];
    floatings: HTMLDivElement[];
    reportCount: number;
    reportIndex: number;
    prevPages: number;
    firstReport: PrintContext;
    nextReport: PrintContext;
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
     * reportView
     */
    get reportView(): ReportView;
    set reportView(value: ReportView);
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
    preparePrint(report?: Report_2): void;
    preparePage(page: number, allPage: number): void;
    setDetailPage(count: number, page: number): void;
    finishPrint(pageCount: number): void;
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
}

declare type PrintLine = {
    line: HTMLElement | BandPrintInfo<BandModel> | ReportFooterPrintInfo | PageBreaker;
    pageIndex: number;
};

/**
 * print page model.
 */
declare class PrintPage {
    page: HTMLDivElement;
    pageOrientation: PaperOrientation;
    pageHeader: HTMLDivElement;
    pageFooter: HTMLDivElement;
    background: HTMLDivElement;
    contents: HTMLDivElement[];
    foreground: HTMLDivElement;
}

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
    EMAIL_LAYOUT = "email layout"
}

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
    add(item: PropertyItem): void;
    clear(): void;
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
    setValue(source: IPropertySource, value: any): void;
    setValues(sources: IPropertySource[], value: any): void;
    hasColor(): boolean;
}

/**
 * R2 report server client.
 */
export declare class R2Server implements IReportServer {
    options: R2ServerOptions;
    private _url;
    entity: string;
    constructor(options: R2ServerOptions);
    get url(): string;
    getAssetGroups(): Promise<string[]>;
    getAssetList(group: string): Promise<IReportAssetItem[]>;
    getDataGroups(): Promise<string[]>;
    getDataList(group: string): Promise<IReportDataInfo[]>;
    getData(id: string): Promise<IReportDataInfo>;
    getReportGroups(): Promise<string[]>;
    getReportList(group?: string): Promise<ReportListSource>;
    getReport(id: string): Promise<IReportSource>;
    getOptions(): Promise<Partial<IReportDesignerOptions>>;
    saveOptions(options: IReportDesignerOptions): Promise<string>;
    saveReport(report: Report_2, id?: string): Promise<IReportResponse | null>;
    connect(): Promise<void>;
    disconnect(): Promise<void>;
}

declare interface R2ServerOptions {
    url: string;
    userId?: string;
    entity?: string;
    password?: string;
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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

declare abstract class RCAxisObject<C> extends ChartObject<RealChartItem, C> {
    readonly axis: RCAxis<unknown>;
    constructor(axis: RCAxis<unknown>);
}

declare abstract class RCAxisTextObject<C> extends ChartTextObject<RealChartItem, C> {
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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

declare class RCBody extends ChartObject<RealChartItem, RCBodyConfig> {
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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

declare class RCLegend extends ChartObject<RealChartItem, RCLegendConfig> {
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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

declare class RCOptions extends ChartObject<RealChartItem, RCOptionsConfig> {
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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

declare abstract class RCSeries<C = RCSeriesConfig> extends ChartSeries<RealChartItem, C> {
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

declare class RCSeriesCollection extends ChartSeriesCollection<RealChartItem, RCSeriesConfig> {
    getChartConfig(context: PrintContext): RCSeriesConfig[];
    protected _createSeries(loader: IReportLoader, src: ReportSource$1): RCSeries;
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

declare class RCSubtitle extends ChartTextObject<RealChartItem, RCSubtitleConfig> {
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

declare class RCTitle extends ChartTextObject<RealChartItem, RCTitleConfig> {
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
    protected _createAxis(loader: IReportLoader, src: ReportSource$1): RCAxis;
    protected _axesChanged(): void;
}

declare class RCYAxisCollection extends RCAxisCollection {
    get outlineLabel(): string;
    get direction(): RCAxisDirection;
    get displayPath(): string;
    getSaveLabel(): string;
    protected _createAxis(loader: IReportLoader, src: ReportSource$1): RCAxis;
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
    protected _doLoad(loader: IReportLoader, src: ReportSource$1): void;
    protected _doSave(target: ReportTarget): void;
    canAddTo(group: ReportGroupItem): boolean;
}

/* Excluded from this release type: Rectangle */

/**
 * Report model.
 */
declare class Report_2 extends EventAware implements IEditCommandStackOwner, IPropertyContainer {
    static readonly RESET = "onReportReset";
    static readonly PAPER_CHANGED = "onReportPaperChanged";
    static readonly PAGE_ADDED = "onReportPageAdded";
    static readonly PAGE_REMOVED = "onReportPageRemoved";
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
    static readonly DIRTY_CHANGED = "onReportDirtyChanged";
    static readonly DATA_ADDED = "onReportDataAdded";
    static readonly DATA_REMOVED = "onReportDataRemoved";
    static readonly DATA_UPDATED = "onReportDataUpdated";
    static readonly DATA_NAME_CHANGED = "onReportDataNameChanged";
    static readonly DATA_FIELD_NAME_CHANGED = "onReportDataFieldNameChanged";
    static readonly CELL_MERGED = "onReportCellMerged";
    static readonly ALERT = "onReportAlert";
    static readonly LANGUAGE_ADDED = "onReportLanguageAdded";
    static readonly LANGUAGE_REMOVED = "onReportLanguageRemoved";
    static readonly LANGUAGE_FIELD_ADDED = "onReportLanguageFieldAdded";
    static readonly LANGUAGE_FIELD_REMOVED = "onReportLanguageFieldRemoved";
    static readonly DEFAULT_LANGUAGE_CHANGED = "onReportDefaultLanguageChanged";
    static isReportSource(source: any): boolean;
    private _info;
    private _unit;
    private _assetRoot;
    private _root;
    private _pages;
    private _assets;
    private _data;
    private _designData;
    private _i18n;
    private _fontManager;
    designTag: any;
    models: Record<number, ReportItem>;
    private _designTime;
    private _loader;
    private _commands;
    private _loading;
    private _invalids;
    private _reportItemRegistry;
    constructor(designTime?: boolean, source?: any);
    _doDispose(): void;
    onDesignDataManagerDataAdded(dm: DesignDataManager, data: IReportData): void;
    onDesignDataManagerDataRemoved(dm: DesignDataManager, data: IReportData): void;
    onDesignDataManagerDataUpdated(dm: DesignDataManager, data: IReportData): void;
    onDesignDataManagerNameChanged(dm: DesignDataManager, data: IReportData, oldName: string): void;
    onDesignDataManagerFieldNameChanged(dm: DesignDataManager, data: IReportData, newName: string, oldName: string): void;
    onI18nManagerLanguageAdded(i18n: I18nManager, language: string): void;
    onI18nManagerLanguageRemoved(i18n: I18nManager, language: string): void;
    onI18nManagerFieldAdded(i18n: I18nManager, field: string): void;
    onI18nManagerFieldRemoved(i18n: I18nManager, field: string): void;
    onI18nManagerDefaultLanguageChanged(i18n: I18nManager, language: string): void;
    editCommandStackChanged(stack: EditCommandStack, cmd: EditCommand, undoable: boolean, redoable: boolean): void;
    editCommandStackDirtyChanged(stack: EditCommandStack): void;
    addCollectionItem(collection: IPropertySource): void;
    get designTime(): boolean;
    /* Excluded from this release type: loader */
    /** type */
    get type(): ReportType;
    /** info */
    get info(): ReportInfo;
    /** paper */
    get paper(): PaperOptions;
    /** unit */
    get unit(): PrintUnit;
    set unit(value: PrintUnit);
    /** assetRoot */
    get assetRoot(): string;
    set assetRoot(value: string);
    get root(): ReportRootItem;
    /** page */
    get page(): ReportPage;
    get pages(): ReportPage[];
    get pageCount(): number;
    /** assets */
    get assets(): AssetManager;
    /** data */
    get data(): IReportDataProvider;
    /** desingData */
    get designData(): DesignDataManager;
    /** i18n */
    get i18n(): I18nManager;
    /** fontManager */
    get fontManager(): FontManager;
    /**
     * Setter Injection인 이유는 리소스는 외부에서 한번만 생성후에 관리한다.
     * 새로운 리포트 모델을 생성할 때 폰트관련 리소스는 외부 정보이므로 주입받아서 사용하자.
     */
    set fontManager(fontManager: FontManager);
    /** canUndo */
    get canUndo(): boolean;
    /** canRedo */
    get canRedo(): boolean;
    /** dirty */
    get dirty(): boolean;
    /** reportItemRegistry */
    get reportItemRegistry(): ReportItemRegistry;
    /** editing */
    get editing(): ReportEditableObject<ReportRootItem>;
    load(src: any): Report_2;
    setSaveTagging(tag: string): Report_2;
    save(pageOnly?: boolean): object;
    getPage(index: number): ReportPage;
    addPage(): ReportPage;
    addSubBandPage(): SubBandPage;
    removePage(index: number): boolean;
    movePage(index: number, newIndex: number): void;
    internalAddPage(page?: ReportPage): ReportPage;
    internalAddSubBandPage(page?: SubBandPage): SubBandPage;
    internalRemovePage(page: ReportPage): boolean;
    internalMovePage(index: number, newIndex: number): void;
    getMaxPageCount(): number;
    prepareLayout(): void;
    preparePrint(ctx: PrintContext): void;
    getImageUrl(url: string): string;
    clearHistory(): void;
    closeHistory(): void;
    undo(): boolean;
    redo(): boolean;
    execute(cmd: EditCommand): boolean;
    getEditHistory(all?: boolean): EditCommand[];
    getCommand(id: number): EditCommand;
    itemByName(name: string): ReportItem;
    defaultInit(item: ReportItem, group: ReportGroupItem, hintWidth: number, hintHeight: number): void;
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
    setItemProperty(item: ReportPageItem, prop: string, value: any): void;
    setItemProperties(item: ReportPageItem, props: ConfigObject): void;
    setItemsProperties(items: ReportItem[], props: ConfigObject): void;
    resetItemProperty(item: ReportPageItem, prop: IPropInfo): boolean;
    setItemsProperty(items: ReportPageItem[], prop: string, value: any): void;
    setItemStyle(item: ReportPageItem, style: string, value: any): void;
    setItemsStyle(items: ReportPageItem[], style: string, value: any): void;
    setChildStyleProperty(item: ReportItem, prop: string, style: string, value: any): void;
    setItemsChildStyleProperty(items: ReportItem[], prop: string, style: string, value: any): void;
    addTableBandColumn(band: TableBand, config: any, index?: number): void;
    addTableBandGroup(band: TableBand, config: any, index?: number): void;
    addSimpleBandGroup(band: SimpleBand, config: any, index?: number): void;
    canMergeSelection(selection: ISelectionSource): boolean;
    mergeSelection(selection: TableSelection): void;
    canUnmergeCell(cell: TableCell): boolean;
    unmergeCell(cell: TableCell): void;
    search(key: string, options?: FindOptions): FindResult[];
    applyDropResult(item: ReportItem | TableCell, r: IDropResult): boolean;
    addAsset(group: AssetGroup | string, item: AssetItem): void;
    removeAsset(item: AssetItem): void;
    renameData(data: IReportData, newName: string): boolean;
    addData(data: IReportData): boolean;
    removeData(data: string | IReportData): boolean;
    saveSimpleData(data: SimpleData, values: any): void;
    saveItems(items: ReportItem[]): string;
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
    changeItemIndex(item: ReportItem, newIndex: number): boolean;
    clearTexts(items: ReportItem[]): void;
    /**
     * col + 1 컬럼의 너비를 줄이거나 늘이면서 col 컬럼의 너비를 변경한다.
     */
    adjustColumnWidths(table: ITable, col: number, colPoints: number[], newSize: number): void;
    /**
     * row + 1 행의 높이를 줄이거나 늘이면서 row 행의 높이를 변경한다.
     */
    adjustRowHeights(table: TableBase, row: number, rowPoints: number[], newSize: number): void;
    getInvalids(): {
        item: ReportItem;
        reason: string;
    }[];
    foldedChanged(item: ReportItem): void;
    isFirstPageLandscape(): boolean;
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
    protected _createReportRootItem(report: Report_2): ReportRootItem;
    protected _createReportInfo(report: Report_2): ReportInfo;
    protected _createReportLoader(): IReportLoader;
    protected _createReportPage(report: Report_2): ReportPage;
    protected _createSubBandPage(report: Report_2): SubBandPage;
    private $_loadPages;
    private $_addPage;
    private $_addSubBandPage;
    private $_refreshInvalids;
    private $_refereshPages;
    private $_resetPages;
    private $_updateReportItemsLanguageField;
    protected onPageItemAdded(source: IEventAware, item: ReportPageItem, index: number, silent: boolean): void;
    protected onPageItemsAdded(source: IEventAware, items: ReportPageItem[], index: number): void;
    protected onPageItemRemoved(source: IEventAware, item: ReportPageItem, oldParent: ReportGroupItem): void;
    protected onPageItemsRemoved(source: IEventAware, items: ReportPageItem[]): void;
    protected onPageItemChanged(source: IEventAware, item: ReportPageItem, prop: string, value: any, oldValue: any): void;
    protected onPageCollectionChanged(source: IEventAware, collection: ReportItemCollection<any>): void;
    protected _fireReset(): void;
    protected _firePaperChanged(): void;
    protected _fireItemAdd(group: ReportGroupItem, item: ReportItem, index: number): boolean;
    protected _fireItemMoved(item: ReportItem, index: number): void;
    protected _fireCollectionChanged(collection: ReportItemCollection<any>): void;
    protected _fireCellMerged(cell: TableCell): void;
    protected _fireAlert(item: ReportItem, message: string): void;
}

declare type ReportContext = {
    name: string;
    isModified: boolean;
};

declare abstract class ReportData extends Base {
    private _name;
    private _dp;
    constructor(name: string, dp: IReportDataProvider);
    get provider(): IReportDataProvider;
    get designTime(): boolean;
    get isBand(): boolean;
    /** name */
    get name(): string;
    set name(value: string);
    preparePrint(ctx: PrintContext, design: boolean): void;
}

declare enum ReportDataLinkFormat {
    JSON = "JSON",
    CSV = "CSV"
}

export declare class ReportDesigner {
    private readonly _core;
    constructor(containerId: string | HTMLDivElement, options?: ReportDesignerOptions, server?: ReportServer, licenseKey?: string);
    get designMode(): boolean;
    set designMode(value: boolean);
    set defaultFont(fontName: string);
    loadReport(source: any, options?: ReportOptions): void;
    setReportTemplates(templates: UserReportCategoryTemplate[]): Promise<void>;
    setDataTemplates(templates: UserDataTemplateGroup[]): Promise<void>;
    setAssetTemplates(templates: UserAssetTemplateGroup[]): Promise<void>;
    registerFonts(fonts: UserFontSource[], defaultFont?: string): Promise<void>;
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
    getReportListCallback?: () => Promise<ReportListSource>;
    getReportCallback?: (reportId: string) => Promise<IReportSource>;
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
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
    protected _doSave(target: ReportTarget): void;
    getEditProps(): IPropInfo[];
    getPropDomain(prop: IPropInfo): any[];
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
    layoutChanged: boolean;
    constructor(name: string);
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
    canAdd(item: ReportItem): boolean;
    append(item: ReportPageItem, slient?: boolean): boolean;
    /**
     * @param silent View나 Tool 쪽에서 지정하고 사용한다.
     */
    add(item: ReportPageItem, index?: number, silent?: boolean): boolean;
    canRemove(item: ReportItem): boolean;
    remove(item: ReportItem): void;
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
    getDescendants(all?: boolean, recursive?: boolean): ReportItem[];
    collectInvalids(report: Report_2, list: {
        item: ReportItem;
        reason: string;
    }[]): void;
    collectBlankItems(childs?: ReportItem[]): ReportItem[];
    canAdoptDragSource(source: any): boolean;
    adoptDragSource(source: any): IDropResult;
    protected _getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    protected _maxChildCount(): number;
    isAncestorOf(item: ReportPageItem): boolean;
    canParentOf(itemType: string): boolean;
    prepareLayout(printing: boolean): void;
    preparePrint(ctx: PrintContext): void;
    protected _getNameOfItems(): string;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    save(target: object): boolean;
    dataNameChanged(data: IReportData, oldName: string): void;
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
    protected _doItemAdded(item: ReportItem, index: number): void;
    protected _doItemRemoved(item: ReportItem, index: number): void;
    private $_resetIndices;
    private $_childChanged;
    protected _doItemChanged(item: ReportItem, prop: string, value: any, oldValue: any): void;
    protected _setOutlineOrders(start: number, ...items: ReportPageItem[]): void;
}

/* Excluded from this release type: ReportGroupItemElement */

declare type ReportGroupItemView = ReportGroupItemElement<ReportGroupItem>;

declare type ReportGroupSource = {
    type: 'group';
    name: string;
    children: ReportListSource;
};

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
    constructor(report: Report_2);
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
    get page(): ReportPage;
    get report(): Report_2;
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
    defaultInit(loader: IReportLoader, group: ReportGroupItem, hintWidth: number, hintHeight: number): void;
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
    setStyle(style: string, value: string): void;
    clearStyle(style: string): void;
    clearStyles(css: CSSStyleDeclaration): void;
    load(loader: IReportLoader, source: any): void;
    save(target: object): boolean;
    getFloatingContainer(): FloatingContainer;
    delete(): void;
    isAncestor(group: ReportGroupItem): boolean;
    private $_getValue;
    /**
     * onGetStyles 등 callback 내에서 사용할 수 있게 노출.
     */
    getValue(row: number, field: string): any;
    /**
     * 출력 시 ReportItemElement에서 호출.
     */
    getPrintValue(dp: IReportDataProvider, row: number): any;
    getLinkValue(dp: IReportDataProvider, row: number): any;
    getDataViewValue(dv: BandDataView, row: number): any;
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
    getInvalids(report: Report_2): string[];
    canFold(): boolean;
    fold(): boolean;
    unfold(): boolean;
    isI18nFieldValid(): boolean;
    getLanguageFieldValue(language: string, field: string): string;
    get marqueeParent(): ReportItem;
    get printable(): boolean;
    isReadOnlyProperty(prop: IPropInfo): boolean;
    protected _sizable(): boolean;
    protected _boundable(): boolean;
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
    private $_detached;
    protected _doDetached(): void;
    protected _isLoading(): boolean;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
    get stylable(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _saveChildPropsOf(target: object, infos: IPropInfo[]): void;
    protected _doSave(target: object): void;
    protected _doAfterLoad(loader: IReportLoader, src: any): void;
    protected _doAfterSave(target: object): void;
    protected _doPrepareLayout(printing: boolean): void;
    protected _doPreparePrint(ctx: PrintContext): void;
    protected _isI18nFieldExist(): boolean;
}

declare abstract class ReportItemCollection<T extends ReportPageItem> extends ReportPageItem {
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
    abstract get owner(): ReportItem;
    abstract get count(): number;
    abstract get items(): ReportPageItem[];
    abstract get(index: number): T;
    abstract indexOf(item: T): number;
    preparePrint(ctx: PrintContext): void;
    forEach(callback: (item: T, index: number) => void): void;
    protected abstract _doMoveItem(from: number, to: number): boolean;
    moveItem(from: number, to: number): boolean;
    get styles(): Styles;
    protected _itemChanged(item: ReportPageItem, prop: string, newValue: any, oldValue: any): void;
    protected _itemAdded(item: ReportPageItem): void;
    protected _itemsAdded(items: ReportPageItem[]): void;
    protected _itemRemoved(item: ReportPageItem, oldParent: ReportGroupItem): void;
    protected _itemsRemoved(items: ReportPageItem[]): void;
    protected _indexChanged(): void;
    protected _doPreparePrint(ctx: PrintContext): void;
}

declare abstract class ReportItemCollectionItem extends ReportPageItem {
    private _collection;
    private _styles;
    constructor(collection: ReportItemCollection<any>, src?: any);
    protected _doInitDefaults(): void;
    get outlineParent(): IOutlineSource;
    get outlineExpandable(): boolean;
    get outlineLabel(): string;
    getSaveType(): string;
    canRemoveFrom(): boolean;
    getPropDomain(prop: IPropInfo): any[];
    getStyleProps(): IPropInfo[];
    getStyle(style: string): string;
    setStyle(style: string, value: string): void;
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
    protected _doAfterLoad(src: ReportSource$1): void;
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
    get page(): ReportPage;
    get report(): Report_2;
    get styles(): Styles;
    set styles(value: Styles);
    defaultInit(): void;
    load(loader: IReportLoader, source: ReportSource$1): void;
    save(target: ReportTarget): boolean;
    isCollection(): boolean;
    protected _doDefaultInit(): void;
    protected _doLoad(loader: IReportLoader, source: ReportSource$1): void;
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

declare type ReportItemStyleCallback = (ctx: PrintContext, item: ReportItem, row: number, value: any) => {
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
    REALCHART = "realchart",
    HICHART = "hichart",
    PAGE = "page"
}

declare type ReportItemValueCallback = (ctx: PrintContext, item: ReportItem, row: number, value: any) => any;

declare type ReportItemView = ReportItemElement<ReportItem>;

declare type ReportItemVisibleCallback = (ctx: PrintContext, item: ReportItem, row: number, value: any) => boolean;

declare type ReportListSource = (ReportGroupSource | ReportSource)[];

declare interface ReportObject {
    /**
     * 속성 불러오기
     * @param loader 리포트 속성 로더
     * @param source 리포트 속성을 불러올 소스
     */
    load(loader: IReportLoader, source: ReportSource$1): void;
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

declare interface ReportOptions {
    reportId?: string;
}

/**
 * 리포트 페이지 모델. 하나 이상의 section들로 구성된다.
 *
 * 1. band는 body의 최상위 항목으로만 추가될 수 있다. 즉, 다른 항목의 자식이 될 수 없다.
 */
declare class ReportPage extends ReportGroupItem implements IEventAware {
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
    static readonly $_ctor: string;
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
    private _events;
    private _nameMap;
    private _reportHeader;
    private _reportFooter;
    private _pageHeader;
    private _pageFooter;
    private _body;
    private _backItems;
    private _frontItems;
    private _sections;
    saveTag: string;
    private _loading;
    private _removing;
    private _addItemSection;
    constructor(report: Report_2, name?: string);
    addListener(listener: object): IEventAware;
    removeListener(listener: object): IEventAware;
    /**
     * report
     */
    get report(): Report_2;
    /**
     * pageIndex
     */
    get pageIndex(): number;
    set pageIndex(index: number);
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
    /**
     * backItems
     */
    get backItems(): ReportItem[];
    get frontContainer(): PageItemContainer;
    set frontContainer(section: PageItemContainer);
    /**
     * frontItems
     */
    get frontItems(): ReportItem[];
    /**
     * sections
     */
    get sections(): ReportGroupItem[];
    set sections(groupItems: ReportGroupItem[]);
    /**
     * loading
     */
    get loading(): boolean;
    set loading(value: boolean);
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
    getItem(name: string): ReportItem;
    removeItems(commands: EditCommandStack, items: ReportPageItem[]): number;
    search(page: number, key: string, options: FindOptions, results: FindResult[]): void;
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
    get outlineLabel(): string;
    get pathLabel(): string;
    get page(): ReportPage;
    outlineVisible(child: IOutlineSource): boolean;
    canMove(): boolean;
    getEditProps(): IPropInfo[];
    protected _getStyleProps(): string[];
    canDelete(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    protected _doSave(target: object): void;
    canResize(dir: ResizeDirection): boolean;
    getAllItems(root?: ReportGroupItem, all?: boolean): ReportItem[];
    collectInvalids(report: Report_2, invalids: {
        item: ReportItem;
        reason: string;
    }[]): void;
    protected _addSectionModel(): void;
    protected _createPageBody(): PageBody;
    protected _createReportFooter(): ReportFooter;
    /**
     * 양식(target)에 저장되는 리포트 푸터 필드명
     */
    protected _getReportFooterSourceFieldName(): string;
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
    protected _fireItemRemoved(item: ReportPageItem, oldParent: ReportGroupItem): void;
    protected _fireItemsRemoved(items: ReportPageItem[]): void;
    protected _fireItemChanged(item: ReportPageItem, prop: string, value: any, oldValue: any): void;
    protected _fireCollectionChanged(collection: ReportItemCollection<any>): void;
}

/**
 * Report page 구성 요소 기반 클래스.
 * 현재, ReportItem, TableBandField가 있다.
 */
declare abstract class ReportPageItem extends Base implements ISelectionSource, IOutlineSource, IPropertySource {
    get selectItem(): ReportPageItem;
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
    abstract get page(): ReportPage;
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
    isAncestorOf(item: ReportPageItem): boolean;
    getProps(): any;
    setProps(src: any): void;
    canMove(): boolean;
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
    SUB_BAND = "subBand"
}

declare class ReportRootItem extends ReportGroupItem {
    static readonly PROP_REPORT_TYPE = "type";
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
    constructor(report: Report_2, name?: string);
    get report(): Report_2;
    /** type */
    get type(): ReportType;
    set type(value: ReportType);
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
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare interface ReportServer {
    getReportList(): Promise<ReportListSource>;
    getReport(id: string): Promise<IReportSource>;
    saveReport?(report: Record<string, any>, id?: string): Promise<IReportResponse | null>;
    getDataGroups(parent?: string): Promise<string[]>;
    getDataList(group: string): Promise<IReportDataInfo[]>;
    getData?(id: string): Promise<IReportDataInfo>;
    getAssetGroups(parent?: string): Promise<string[]>;
    getAssetList(group: string): Promise<IReportAssetItem[]>;
}

declare type ReportSource$1 = Record<string, unknown> | Record<string, unknown>[];

declare type ReportSource = {
    type: 'report';
    id: string;
    name: string;
};

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
    EMAIL = "email"
}

/* Excluded from this release type: ReportView */

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

declare type SaveCallbackResponse = {
    reportId: string;
    message?: string;
};

/* Excluded from this release type: SectionElement */

declare enum SectionInherit {
    NONE = "none",
    HEAD = "head",
    PREVIOUS = "previous"
}

/**
 * 페이지를 넘어갈 수 있다.
 * 한 row는 페이지를 넘어갈 수 없다.
 * 페이지를 넘어갈 수 있으므로 매 페이지마다 header나 footer를 표시할 필요가 있을 수 있다.
 */
declare class SimpleBand extends DataBand {
    static readonly PROP_SIMPLE_BAND_GROUPS = "groups";
    static readonly PROPINFOS: IPropInfo[];
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
    getNextDetailRows(dataView: BandDataView, from?: number): number[];
    containsInSection(item: ReportItem): boolean;
}

declare class SimpleBandFooter extends SimpleBandSection {
    static readonly PROP_ATTACH_TO_BODY = "attachToBody";
    static readonly PROPINFOS: IPropInfo[];
    static readonly $_ctor: string;
    private _attachToBody;
    /**
     * true면 multi column 모드일 때 마지막 컬럼의 마지막 행에 붙여서 출력하고,
     * false면 모든 컬럼의 가장 아래쪽에 붙여서 출력한다.
     *
     * @default false
     */
    get attachToBody(): boolean;
    set attachToBody(value: boolean);
    get outlineLabel(): string;
    protected _getEditProps(): IPropInfo[];
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
}

declare class SimpleBandGroupSectionElement<T extends SimpleBandRowGroupSection> extends StackContainerElement<T> {
    constructor(doc: Document, model: T, name: string);
    applyGroupStyles(elt: HTMLElement): void;
    protected _needDesignBox(): boolean;
    protected _doMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number): Size;
    protected _doAfterMeasure(ctx: PrintContext, dom: HTMLElement, hintWidth: number, hintHeight: number, sz: Size): void;
}

declare class SimpleBandHeader extends SimpleBandSection {
    static readonly $_ctor: string;
    constructor(band: SimpleBand);
    get outlineLabel(): string;
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
    get page(): ReportPage;
    get report(): Report_2;
    get collection(): SimpleBandRowGroupCollection;
    get dataParent(): ReportGroupItem;
    protected _ignoreItems(): boolean;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _doSave(target: object): void;
    protected _changed(prop: string, newValue: any, oldValue: any): void;
}

declare class SimpleBandRowGroupCollection extends ReportItemCollection<SimpleBandRowGroup> {
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
    get page(): ReportPage;
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
}

declare class SimpleBandRowGroupHeader extends SimpleBandRowGroupSection {
    static readonly $_ctor: string;
    constructor(group: SimpleBandRowGroup);
    get outlineLabel(): string;
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
    private _repeat;
    private _child_field;
    private _band;
    constructor(band: SimpleBand);
    /** band */
    get band(): SimpleBand;
    /** repeat */
    get repeat(): boolean;
    set repeat(value: boolean);
    /**
     * field
     */
    getFieldOf(item: ReportItem): string;
    setFieldOf(item: ReportItem, value: string): void;
    get designLevel(): number;
    get marqueeParent(): ReportItem;
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
    private _fields;
    private _linkedValues;
    private _embeddedValues;
    private get _values();
    private set _values(value);
    constructor(name: string, values: SimpleDataValueType, link?: IReportDataLink, fields?: ISimpleDataField[], dp?: IReportDataProvider);
    /**
     * TODO: array index
     */
    getValue(path?: string): any;
    getValues(): any;
    get sample(): SimpleDataValueType;
    get rowCount(): number;
    get fields(): ISimpleDataField[];
    get fieldCount(): number;
    setSample(values: any): void;
    getFieldNames(): string[];
    getFields(): ISimpleDataField[];
    getField(index: number): ISimpleDataField;
    getFieldByName(fieldName: string): ISimpleDataField;
    getFieldIndex(field: string): number;
    indexOfField(field: ISimpleDataField): number;
    setField(index: number, field: ISimpleDataField): void;
    getSaveFields(): ISimpleDataField[];
    getNextFieldName(prefix?: string): string;
    addField(index: number, field: ISimpleDataField): boolean;
    removeField(field: ISimpleDataField): boolean;
    dateToStr(field: ISimpleDataField, v: Date): string;
    /**
     * 특정 모드의 데이터를 일회성으로 조작하기 위한 편의성 메서드 (callback 실행 후 모드는 원복됨)
     */
    runInMode(mode: LinkableReportData['mode'], callback: (() => void) | Promise<void>): void;
    readValue(field: ISimpleDataField, value: any): any;
    getSaveType(): string;
    getSaveValues(): any;
    protected _doDataFetched(fetchedData: unknown): void;
    setSource(source: SimpleDataValueType): void;
    private $_isSimpleValueType;
    private $_parseValue;
    private $_createField;
    private $_createFields;
}

declare interface SimpleDataTemplate extends IDataTemplate {
    type: 'simple';
    template: SimpleTemplate;
}

declare type SimpleDataValueType = {
    [key: string]: any;
};

declare interface SimpleTemplate {
    [key: string]: any;
}

/* Excluded from this release type: Size */

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

/**
 * String property.
 */
declare class StringProperty extends ValueProperty {
    static readonly $_ctor: string;
    constructor(prop: IPropInfo);
}

declare type Styles = {
    [key: string]: string | undefined;
};

declare class SubBandPage extends ReportPage {
    constructor(report: Report_2, name?: string);
    static readonly $_ctor: string;
    get outlineLabel(): string;
    protected _addSectionModel(): void;
    protected _doLoad(loader: IReportLoader, src: any): void;
    protected _ignoreItems(): boolean;
    protected _doSave(target: object): void;
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
declare class TableBand extends DataBand {
    static readonly PROP_COL_COUNT = "colCount";
    static readonly PROP_COLUMNS = "columns";
    static readonly PROP_GROUPS = "groups";
    static readonly PROP_END_ROW_MERGED = "endRowMerged";
    static readonly PROPINFOS: IPropInfo[];
    static readonly DEFAULT_COL_COUNT = 5;
    static readonly $_ctor: string;
    static readonly ITEM_TYPE = "Table Band";
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
    get outlineItems(): IOutlineSource[];
    /** cols */
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
    getNextDetailRows(dataView: BandDataView, from?: number): number[];
    containsInSection(item: ReportItem): boolean;
    protected _createHeader(): TableBandHeader;
    protected _createDataRow(): TableBandDataRow;
    protected _createFooter(): TableBandFooter;
}

/**
 * TableBand의 셀 모델.
 * span할 수 있다.
 * 자식 하나만 가질 수 있다.
 */
declare class TableBandCellItem extends TableCellItem {
    static readonly $_ctor: string;
    constructor(item: ReportItem);
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
    constructor(band?: TableBand);
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

declare class TableBandGroupSectionElement<T extends TableBandRowGroupSection> extends TableElement<T> {
    constructor(doc: Document, model: T, name: string);
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
    get page(): ReportPage;
    get report(): Report_2;
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
    get page(): ReportPage;
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
    canResize(dir: ResizeDirection): boolean;
    get marqueeParent(): ReportItem;
    get colCount(): number;
    getColumn(col: number): TableColumnBase;
    getCellWidths(): DimensionCollection;
    protected _createCell(item: ReportItem): TableBandCellItem;
    isAncestorOf(item: ReportPageItem): boolean;
}

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
    protected _resetCells(): void;
    protected _removeCols(index: number, count: number): void;
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
    /**
     * row span
     */
    get rowspan(): number;
    set rowspan(value: number);
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
    get itemType(): string;
    get collection(): TableCellCollection;
    get page(): ReportPage;
    get displayPath(): string;
    get marqueeParent(): ReportItem;
    protected _getStyleProps(): string[];
    setProps(src: any): void;
    canSelectedWith(other: ISelectionSource): boolean;
    protected _doLoad(src: any): void;
    protected _doSave(target: any): void;
}

/* Excluded from this release type: TableCellCollection */

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
    constructor(collection: ReportItemCollection<any>, src?: any);
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
    get page(): ReportPage;
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
    get page(): ReportPage;
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

/* Excluded from this release type: TableElement */

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
    constructor(collection: TableRowCollection, src?: any);
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
    get page(): ReportPage;
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

/**
 * Table row object collection.
 */
declare class TableRowCollection extends ReportItemCollection<TableRow> {
    private _table;
    private _rows;
    private _heights;
    static readonly $_ctor: string;
    constructor(table?: TableBase);
    get outlineParent(): IOutlineSource;
    get outlineLabel(): string;
    get outlineExpandable(): boolean;
    get outlineItems(): IOutlineSource[];
    getSaveType(): string;
    get owner(): ReportItem;
    /** table */
    get table(): TableBase;
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
    get page(): ReportPage;
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
    selectItem: TableCell;
    cols: number;
    rows: number;
    private _cell;
    constructor(cell: TableCell, cols: number, rows: number);
    get table(): TableBase;
    get cell(): TableCell;
    get col(): number;
    get row(): number;
    get right(): number;
    get bottom(): number;
    canSelectedWith(other: ISelectionSource): boolean;
    contains(row: number, col: number): boolean;
    containsCell(cell: TableCell): boolean;
    isSingle(ignoreHiddens: boolean): boolean;
    getCells(ignoreHiddens: boolean): TableCell[];
    resizeTo(cell: TableCell): boolean;
    resizeBy(dx: number, dy: number): boolean;
    equals(cell: TableCell): boolean;
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
    constructor(name: string);
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
    getPrintValue(dp: IReportDataProvider, row: number): any;
}

/* Excluded from this release type: TextItemElementBase */

declare type TreeItemIconType = 'group' | 'report' | 'reportFolder' | 'asset' | 'favorite' | 'bandData' | 'simpleData' | 'language';

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
    clear(): void;
    addChild(child: UIElement): boolean;
    removeChild(child: UIElement): boolean;
    removeLast(): UIElement;
    containerToLocal(x?: number, y?: number): {
        x: number;
        y: number;
    };
    setText(text: string): void;
    hide(): void;
    show(style?: string): void;
    setRotation(rotation: number): void;
    protected _addChild(child: UIElement): void;
    protected _removeChild(child: UIElement): boolean;
    protected _prepareDom(doc: Document, dom: HTMLElement): void;
}

/* Excluded from this release type: UITool */

/* Excluded from this release type: UIToolOwner */

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
    items: UserDataTemplateItem[];
}

declare interface UserDataTemplateItem {
    name: string;
    description?: string;
    file?: string;
    template?: SimpleDataTemplate | BandDataTemplate;
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
    constructor(prop: IPropInfo);
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

