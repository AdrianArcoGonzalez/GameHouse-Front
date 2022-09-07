import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface SecurityRoutesProps {
  children: JSX.Element;
}

const CredentialsLogin = ({ children }: SecurityRoutesProps) => {
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogged) {
      navigate("/login");
    }
  }, [navigate, isLogged]);

  return children;
};

export default CredentialsLogin;
