// @ts-ignore
import {useAuth} from "@lib/provider/auth-provider";
import { Navigate } from "react-router-dom";
import {ReactNode} from "react";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};
