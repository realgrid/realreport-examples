# example-springboot

이 샘플 코드는 스프링부트 프로젝트에서 RealReport 미리보기를 구현한 예제입니다.
- java : 11
- SpringBoot: 2.7.0
- 사용한 의존성 : [`spring-boot-starter-web`]
### 스프링부트 의존성 설치

```bash
java -jar ./build/libs/demo-0.0.1-SNAPSHOT.jar 
```

### realreport 패키지 설치

- 이미 `src/main/resources/static/js/realreport`밑에 리얼리포트 패키지를 설치해놓은 상태이므로,    
  별도 설치가 필요하지 않습니다. 

### 로컬환경 실행

```bash
java -jar ./build/libs/demo-0.0.1-SNAPSHOT.jar 
```
- 이후, 브라우저에서 `http://127.0.0.1:8080`로 이동하시면 예제 페이지를 확인하실 수 있습니다. 
