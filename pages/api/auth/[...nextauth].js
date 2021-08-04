import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default NextAuth({
    // OAuth authentication providers
    providers: [
        Providers.Email({
            server: process.env.EMAIL_SERVER,
            from: 'NextAuth.js <no-reply@example.com'
    }),
    ],
    adapter: PrismaAdapter(prisma)
})