import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

interface SecurityRoutesProps {
  children: JSX.Element;
}

const SecurityRoutes = ({ children }: SecurityRoutesProps) => {
  const user = useAppSelector((state) => state.user);
  const navigate = useNavigate();
  debugger;
  useEffect(() => {
    if (!user.isLogged) {
      navigate("/login");
    }
  }, [navigate, user.isLogged]);

  return children;
};

export default SecurityRoutes;
