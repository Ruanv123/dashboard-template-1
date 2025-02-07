/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "@/lib/api";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNavigate } from "react-router";

type AuthContextType = {
  user: any;
  logout: () => void;
  isAuthenticated: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function AuthProvider({ children }: PropsWithChildren) {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const { data } = await api.get("/auth/me", { withCredentials: true });
        setUser(data);
      } catch {
        setUser(null);
      }
    };

    fetchUser();
  }, []);

  const logout = async () => {
    try {
      await api.delete("/auth/logout", { withCredentials: true });
      setUser(null);
      navigate("/login");
    } catch {
      console.error("Erro ao fazer logout");
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

export { AuthProvider, useAuth };
