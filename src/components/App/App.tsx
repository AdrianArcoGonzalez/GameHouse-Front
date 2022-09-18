import { Routes, Route, Navigate } from "react-router-dom";
import Header from "../Header/Header";
import RegisterPage from "../../pages/RegisterPage";
import Footer from "../Footer/Footer";
import LoginPage from "../../pages/LoginPage";
import HomePage from "../../pages/HomePage";
import NotFoundPage from "../../pages/NotFoundPage";
import DetailsPage from "../../pages/DetailsPage";
import CredentialsLogin from "../CredentialsLogin/CredentialsLogin";
import CredentialsLogout from "../CredentialsLogout/CredentialsLogout";
import MyCollectionPage from "../../pages/MyCollectionPage";
import CreateGamePage from "../../pages/CreateGamePage";
import EditGamePage from "../../pages/EditGamePage";
import Loading from "../Loading/Loading";

const App = (): JSX.Element => {
  return (
    <>
    <Loading/>
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
        <Route
          path="/add-game"
          element={
            <CredentialsLogin>
              <CreateGamePage />
            </CredentialsLogin>
          }
        />
        <Route
          path="/edit-game/:id"
          element={
            <CredentialsLogin>
              <EditGamePage />
            </CredentialsLogin>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
