import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  callbacks: {
    async signIn(user, account, profile) {
      // This callback is called when the user signs in using Google.
      // You can check if the user is a first-time user here.
      // If it's their first time, set a flag in the user object.
      // For example:
      user.isFirstTimeLogin = true;
      return true; // Allow sign-in
    },
  },
};

export default NextAuth(authOptions);
