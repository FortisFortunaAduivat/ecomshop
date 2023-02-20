import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GitHubProvider from 'next-auth/providers/github'
import AuthOProvider from 'next-auth/providers/auth0'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import clientPromise from './lib/mongodb'

export default NextAuth({
  adapter: new MongoDBAdapter(clientPromise),

  providers: [
    // OAuth authentication providers...
    AuthOProvider({
      clientId: process.env.AUTHO_CLIENT_ID,
      clientSecret: process.env.AUTHO_CLIENT_SECRET,
      issuer: process.env.AUTHO_ISSUER
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    })
  ],
  // signin pages
  pages: {
    signIn: '/signin'
  },
  session: {
    strategy: 'jwt'
  },
  secret: process.env.JWT_SECRET
})
