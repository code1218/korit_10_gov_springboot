import { Route, Routes } from "react-router";
import { Global, css } from '@emotion/react';
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ProtectedRoutes, { PublicOnlyRoute } from "./components/ProtectedRoutes";

const globalStyles = css`
  @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Pretendard', sans-serif;
  }
  
  body {
    background-color: #090a0f;
    color: #fff;
    overflow-x: hidden;
  }
  
  a {
    color: #00f0ff;
    text-decoration: none;
    transition: text-shadow 0.2s;
  }
  
  a:hover {
    text-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
  }
`;

function App() {

    return (
        <>
        <Global styles={globalStyles} />
        <Routes>
            <Route path="/" element={<></>} />

            <Route element={<PublicOnlyRoute />}>
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/signin" element={<SignIn />} />
            </Route>

            <Route element={<ProtectedRoutes />}>
              <Route path="/dash" element={<></>} />
            </Route>
        </Routes>
        </>
    )
}

export default App;