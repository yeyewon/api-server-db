## 웹 서버 만들기
- Language: JavaScript
- 개발환경: node.js
- 서버 설치 명령어: npm init -y -> package.json

### Express 프레임워크 설치
- 설치 명령어: npm install express
- .gitignore 파일 생성, /node_modules 작성
- index.js 생성
- import 사용: ES6 문법
- package.json 변경, "type":"commonjs" -> module

- 서버 자동 실행: nodemon 설치 (npm i nodemon)
- 설치 후 package.json scripts 안에 "start": "nodemon index.js" 추가
- 실행 명령어: npx nodemon index

## DB 연결
### mysql2 라이브러리 설치
- npm install mysql2

### MySQL DBMS 연결 설정
{
    host: 'localhost',
    user: 'jsuser',
    password: 'js1234',
    database: 'jsdb'
}

### rest api
- 상품 조회: app.get()
- 상품 등록: app.post()
- 상품 수정: app.put()
- 상품 삭제: app.delete()