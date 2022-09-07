import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import DetailsPage from "../../pages/DetailsPage";
import SecurityRoutes from "../SecurityRoutes/SecurityRoutes";
import { useEffect } from "react";
import decodeToken from "../../utils/auth";
import { useAppDispatch } from "../../store/hooks";
import { logInUserActionCreator } from "../../store/slice/usersSlice";
import SecurityRegisterLogin from "../SecurityRegisterLogin/SecurityRegisterLogin";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    debugger;
    const tokenEncrypted = localStorage.getItem("token");
    if (tokenEncrypted) {
      debugger;
      const token = decodeToken(tokenEncrypted);
      const user = { ...token, isLogged: true };
      dispatch(logInUserActionCreator(user));
    }
  }, [dispatch]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <SecurityRegisterLogin>
              <LoginPage />
            </SecurityRegisterLogin>
          }
        />
        <Route path="/games" element={<></>} />
        <Route
          path="/register"
          element={
            <SecurityRegisterLogin>
              <RegisterPage />
            </SecurityRegisterLogin>
          }
        />
        <Route
          path="/my-collection"
          element={
            <SecurityRoutes>
              <></>
            </SecurityRoutes>
          }
        />
        <Route
          path="/details/:id"
          element={
            <SecurityRoutes>
              <DetailsPage />
            </SecurityRoutes>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
