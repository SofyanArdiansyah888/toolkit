
import { useLocalStorage } from "../hooks/useLocalStorage";
import {createContext, ReactNode, useContext, useMemo} from "react";
import { useNavigate } from "react-router-dom"

const AuthContext = createContext<IValue>({
  user: null,
  login: null,
  logout: null
});

interface IAuthProvider {
  children: ReactNode;
}

interface IValue {
  user: any;
  login: any;
  logout: any;
}
export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: any) => {
    setUser(data);
    navigate("/beranda");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  const value: IValue = useMemo(
      () => ({
        user,
        login,
        logout,
        setUser
      }),
      [login, logout, setUser, user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
