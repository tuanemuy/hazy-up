import {
  Session,
  DefaultSession,
  DefaultUser,
  JWT,
  DefaultJWT,
} from "next-auth";

declare module "next-auth" {
  interface User extends DefaultSession["user"] {
    id: string;
    role: string;
  }

  interface Session extends DefaultSession {
    user: User;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    id: string;
    role: string;
  }
}
