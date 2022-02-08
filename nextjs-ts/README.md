# RealReport Code Sample - NextJs Typescript

## Install

```
npm install realreport
```

or 

```
yarn add realreport
```

## Use

```
    const { report } = props;
    const reportRef = createRef();

    const onClick = () => {
        const viewer = new ReportViewer(reportRef.current);
        viewer.preview(report);
    }

    return (
        <div>
            <button onClick={onClick}>Preview</button>
            <div ref={reportRef} id="realreport"></div>
        </div>
    )
```

## License

public/index.html script tag 추가.

```
<script>
    var realReportLic = 'upVcPE+wPOkcfqywe+clVN+UVTCvO3is+83EYTz6U/tlgUhoSvttjZbNKlJ0uYxkrxmBQfufprOx2QEuScwZ2tqLHBT3CFSQkn/JIEkiRbk=';
</script>
```