import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface SecurityRegisterLoginProps {
  children: JSX.Element;
}

const SecurityRegisterLogin = ({ children }: SecurityRegisterLoginProps) => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  useEffect(() => {
    if (user.isLogged) {
      navigate("/home");
    }
  }, [navigate, user.isLogged]);

  return children;
};

export default SecurityRegisterLogin;
