"use client";

import { SessionProvider } from "next-auth/react";

const AuthProvider = ({ children }) => { // Récupère les enfants qu'on pourrait lui passer et va automatiquement les inclure dans le SessionProvider de Next-auth.
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthProvider;