import express from "express";

const app = express()

// 루트 라우트 설정
app.get('/', (req, res) => {
    res.send('<h1>hello express</h1>')
})

// 서버 시작
const PORT = 8000
app.listen(PORT, () => {
    console.log(`${PORT} 서버 실행 중...`);
})