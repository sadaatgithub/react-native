import { useContext } from "react";
import AuthContext from "./context";
import authStorage from "./storage";
import jwtDecode from "jwt-decode";

export default useAuth = () => {
  const { user, setUser } = useContext(AuthContext);
  const logOut = () => {
    setUser(null);
    authStorage.removeToken();
  };

  const logIn = async (authToken) => {
    await authStorage.storeToken(authToken);
    const user = jwtDecode(authToken);
    setUser(user);
  };
  // const register = async ()
  
  return {
    user,
    logOut,
    logIn,
  };
};
