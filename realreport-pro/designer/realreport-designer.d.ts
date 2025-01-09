import { ReportDesigner } from './designer/ReportDesigner';

/* Excluded from this release type: DatetimeReader */

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

declare interface IBandDataTemplate extends IDataTemplate {
    type: 'band';
    template: IBandTemplate;
}

declare interface IBandTemplate {
    fields: IBandDataField[];
    samples: {
        [key: string]: any;
    }[];
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

declare interface ISimpleDataTemplate extends IDataTemplate {
    type: 'simple';
    template: ISimpleTemplate;
}

declare interface ISimpleTemplate {
    [key: string]: any;
}

declare interface IUserDataTemplateItem {
    name: string;
    description?: string;
    file?: string;
    template?: ISimpleDataTemplate | IBandDataTemplate;
}

declare const LocalFileTypes: readonly ["json", "csv", "excel"];

declare enum PanelMode {
    ASSET = "asset",
    DATA = "data",
    SCRIPT = "script",
    ARCHIVE = "archive",
    TRANSFER = "transfer",
    SCHEDULE = "schedule",
    LANGUAGES = "languages"
}

declare type PreviewParam = {
    [data: string]: {
        [param: string]: any;
    } | string | Buffer;
};

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
    get userId(): string;
    get url(): string;
    get imageUrl(): string;
}

declare interface R2ServerOptions {
    userId: string;
    url: string;
    imageUrl: string;
}

declare enum ReportArchiveType {
    EXCEL = "excel",
    PDF = "pdf",
    IMAGE = "image"
}

declare type ReportContext = {
    name: string;
    isModified: boolean;
};

declare enum ReportDataLinkFormat {
    JSON = "JSON",
    CSV = "CSV",
    SHEET = "SHEET"
}

export { ReportDesigner }

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

declare type SaveCallbackResponse = {
    reportId: string;
    message?: string;
};

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

export { }


declare namespace ResizeDirection {
    function isLeft(dir: ResizeDirection): boolean;
    function isTop(dir: ResizeDirection): boolean;
    function isEdge(dir: ResizeDirection): boolean;
    function isIn(dir: ResizeDirection, ...dirs: ResizeDirection[]): boolean;
}

