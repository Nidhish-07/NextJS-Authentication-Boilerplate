import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"

const authHandler=NextAuth({
    providers: [
        CredentialsProvider({
            name:"Credentials",
            credentials:{
                email:{label:'Email',type:'text'},password:{label:'Password',type:'password'}
            },
            async authorize(credentials) {
                try {
return null
                } catch (error) {
                    throw new Error(error)
                }
            }
        })
    ]
})

export {authHandler as GET, authHandler as POST}