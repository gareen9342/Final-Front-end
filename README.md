# Final-Front-end

통장잔고 2조의 프론트-엔드 🤾‍♀️

## Commit 규칙

주요사항 : 제목
- 추가 :whale: 
- 수정 :star:
- 삭제 :boom:


## 파일구조

- pages  
  _페이지 단위당 구성 요소_

- components  
  _header, footer 이런 식으로 정말로 분리되어서 쓸 수 있는 컴포넌트들_

- util  
  _자주 쓰는 유틸함수_

- hooks  
  _React hooks_

- service  
  _API server와 연동_

## dependencies

### react

```json
  "react": "^17.0.2",
  "react-dom": "^17.0.2",
  "react-router-dom": "^5.2.0"
```

### 웹팩

```json
  "webpack": "^5.38.1",
  "webpack-cli": "^4.7.2",
  "webpack-dev-server": "^3.11.2"
  "react-refresh": "^0.10.0",
  ========== webpack
  "@babel/core": "^7.14.3"
  "@babel/preset-env": "^7.14.4",
  "@babel/preset-react": "^7.13.13",
  "@babel/plugin-transform-runtime" : regenerator runtime해결
  ==== 참고 문서 https://velog.io/@haebin/React-regeneratorRuntime-is-not-defined-%EC%97%90%EB%9F%AC-%ED%95%B4%EA%B2%B0
  ========== Babel
  "babel-loader": "^8.2.2",
  "html-loader": "^2.1.2",
  "html-webpack-plugin": "^5.3.1",
  "css-loader": "^5.2.6",
  "style-loader": "^2.0.0",
  ========== loaders
```

### css

```json
  "autoprefixer": "^10.2.6",
  "tailwindcss": "^2.1.4",
  "postcss": "^8.3.0",
  "postcss-loader": "^5.3.0",
  "mini-css-extract-plugin": "^1.6.0",
```
