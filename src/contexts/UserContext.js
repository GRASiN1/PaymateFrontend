import { createContext, useContext, useEffect, useState } from "react";
import { api, END_POINTS } from "../services/api";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // ✅ Load from localStorage on initial render
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("authToken");
      if (!token) return;

      try {
        const response = await api.get(END_POINTS.GET_USER, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data.success) {
          setUser(response.data.data);
          localStorage.setItem("user", JSON.stringify(response.data.data)); // ✅ Ensure latest data
        } else {
          throw new Error(response.data.error);
        }
      } catch (error) {
        console.error("Failed to fetch user:", error);
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        setUser(null); // ✅ Reset on error
      }
    };

    fetchUser();
  }, []);

  async function loginUser(email, password) {
    try {
      const response = await api.post(END_POINTS.LOGIN, { email, password });

      if (response.data.success) {
        localStorage.setItem("authToken", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      window.alert("Login failed: " + error.message);
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
        localStorage.setItem("authToken", response.data.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.data));
        setUser(response.data.data);
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      window.alert("Signup failed: " + error.message);
    }
  }

  function logoutUser() {
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    setUser(null);
  }

  async function updateUser(name, email, number, dob, gender, image) {
    const token = localStorage.getItem("authToken");
    if (!token) {
      window.alert("You are not authorized. Please log in again.");
      return;
    }
    try {
      const response = await api.put(
        END_POINTS.UPDATE,
        { name, email, number, dob, gender, image },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (response.data.success) {
        setUser(response.data.data);
        localStorage.setItem("user", JSON.stringify(response.data.data));
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      window.alert("Update failed: " + error.message);
    }
  }

  async function updatePassword(enteredOldPassword, enteredNewPassword) {
    const token = localStorage.getItem("authToken");
    if (!token) {
      return;
    }
    try {
      const response = await api.put(END_POINTS.RESET_PASSWORD, {
        headers: {
          Authorization: `Bearer ${token}`,
          oldpassword: enteredOldPassword,
          newpassword: enteredNewPassword,
        },
      });
      if (response.data.success) {
        return;
      } else {
        throw new Error(response.data.error);
      }
    } catch (error) {
      console.error(error);
      window.alert("Update failed: " + error.message);
    }
  }

  return (
    <UserContext.Provider
      value={{
        user,
        loginUser,
        signupUser,
        logoutUser,
        updateUser,
        updatePassword,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};
