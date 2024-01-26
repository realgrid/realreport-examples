# 리얼리포트 인쇄 예제 코드

이 예제는 리얼리포트 뷰어 v1.8.1 이하 버전을 사용하는 사용자를 위해 HTML iframe을 사용하여 리포트 인쇄 기능을 구현한 예제입니다.

리얼리포트 뷰어 v1.8.2 버전 이상을 사용하는 사용자는 [viewer.print()](https://real-report.com/docs/viewer/05-print)를 사용해 주세요.

## 코드 실행 방법

1. NPM 패키지 설치

- `$ npm install`

2. 웹 서버 실행

- `$ npm run start`
- 브라우저 접속: `http://localhost:8080`

## 주요 파일

- `index.html`: 샘플 화면
- `print.html`: 리포트 인쇄용 HTML (index.html 내부에서 사용되는 파일)
- `public/lib/realreport`: 리얼리포트 뷰어 라이브러리
- `public/lib/highcharts`: 하이차트 라이브러리 (리포트 양식에서 하이차트 아이템이 사용된 경우에만 필요함)
- `public/report/form.js`: 리포트 양식 파일
