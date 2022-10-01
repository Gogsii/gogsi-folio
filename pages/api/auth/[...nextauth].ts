import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

// http://localhost:3000/api/auth/ redirect URI

export default NextAuth({
  secret: process.env.NEXT_AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.OAUTH_CLIENT_KEY,
      clientSecret: process.env.OAUTH_CLIENT_SECRET
    })
  ]
});
