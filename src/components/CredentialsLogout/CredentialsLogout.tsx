import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface SecurityRegisterLoginProps {
  children: JSX.Element;
}

const CredentialsLogout = ({ children }: SecurityRegisterLoginProps) => {
  const { isLogged } = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLogged) {
      navigate("/home");
    }
  }, [navigate, isLogged]);

  return children;
};

export default CredentialsLogout;
