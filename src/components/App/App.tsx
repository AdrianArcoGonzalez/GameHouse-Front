import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import DetailsPage from "../../pages/DetailsPage";
import CredentialsLogin from "../CredentialsLogin/CredentialsLogin";
import { useEffect } from "react";
import decodeToken from "../../utils/auth";
import { useAppDispatch } from "../../store/hooks";
import { logInUserActionCreator } from "../../store/slice/usersSlice";
import CredentialsLogout from "../CredentialsLogout/CredentialsLogout";
import MyCollectionPage from "../../pages/MyCollectionPage";
import CreateGamePage from "../../pages/CreateGamePage";

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const tokenEncrypted = localStorage.getItem("token");

  useEffect(() => {
    if (tokenEncrypted) {
      const token = decodeToken(tokenEncrypted);
      const user = { ...token, isLogged: true };
      dispatch(logInUserActionCreator(user));
    }
  }, [dispatch, tokenEncrypted]);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <CredentialsLogout>
              <LoginPage />
            </CredentialsLogout>
          }
        />
        <Route path="/games" element={<></>} />
        <Route
          path="/register"
          element={
            <CredentialsLogout>
              <RegisterPage />
            </CredentialsLogout>
          }
        />
        <Route
          path="/my-collection"
          element={
            <CredentialsLogin>
              <MyCollectionPage />
            </CredentialsLogin>
          }
        />
        <Route
          path="/details/:id"
          element={
            <CredentialsLogin>
              <DetailsPage />
            </CredentialsLogin>
          }
        />
        <Route path="/create-game" element={<CreateGamePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
