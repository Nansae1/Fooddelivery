"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { email } from "zod";

type AuthContextType = {
  user: User | null;
};

type User = {
  _id: string;
  name: string;
  email: string;
};

const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<User | null>(null);
  return (
    <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
