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
    async signIn({ user, account, profile }) {
      //inserção no banco de dados
      const { email } = user

      try {
        await fauna.query(
          q.If(
            q.Not(
              q.Exists(
                q.Match(
                  q.Match(
                    q.Index('user-by-email')
                    q.Casefold(user.email)
                  )
                )
              )
            ),
            q.Create(
              q.Create(
                q.Collection('users'),
                { data: { email} }
              )
            )
          )
          
        )
        

        return true //significa que o login deu certo

      } catch {
        return false //significa que o login deu errado
      }

    },
  }
})