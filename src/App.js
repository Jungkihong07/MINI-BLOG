import "./App.css";
import styled from "styled-components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/page/MainPage";
import PostViewPage from "./components/page/PostViewPage";
import PostWritePage from "./components/page/PostWritePage";

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>기홍의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="post-write" element={<PostWritePage />} />
        <Route path="post/:postId" element={<PostViewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
