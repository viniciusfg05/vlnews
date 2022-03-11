import {query as q} from 'faunadb'
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

import { fauna } from '../../../services/fauna'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
        authorization: {
            params: {
                scope: 'read:user, user:email', 
            },
        }
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      
      return true
    },
  }
})