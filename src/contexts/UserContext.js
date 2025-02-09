import { createContext, useContext, useEffect, useState } from "react";
import { api, END_POINTS } from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getUser() {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const response = await api.get(END_POINTS.GET_USER, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.data.success) {
          setUser(response.data.data);
        } else {
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        localStorage.removeItem("authToken");
      }
    }
    getUser();
  }, []);

  async function loginUser(email, password) {
    try {
      const response = await api.post(END_POINTS.LOGIN, {
        email,
        password,
      });
      if (response.data.success) {
        setUser(response.data.data);
        localStorage.setItem("authToken", response.data.data.token);
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function signupUser(name, email, password) {
    try {
      const response = await api.post(END_POINTS.SIGNUP, {
        name,
        email,
        password,
      });
      if (response.data.success) {
        setUser(response.data.data);
        localStorage.setItem("authToken", response.data.data.token);
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }
  function logoutUser() {
    setUser(null);
    localStorage.removeItem("authToken");
  }

  return (
    <UserContext.Provider value={{ user, loginUser, signupUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
