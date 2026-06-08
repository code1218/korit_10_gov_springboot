import { Route, Routes } from "react-router";
import SignUp from "./pages/SignUp";
import ProtectedRoutes, { PublicOnlyRoute } from "./components/ProtectedRoutes";

function App() {

    return (
        <Routes>
            <Route path="/" element={<></>} />

            <Route element={<ProtectedRoutes />}>
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/auth/signin" element={<SignIn />} />
            </Route>

            <Route element={<PublicOnlyRoute />}>
              
            </Route>
        </Routes>
    )
}

export default App;