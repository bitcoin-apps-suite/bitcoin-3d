import NextAuth from 'next-auth'

const handler = NextAuth({
  providers: [],
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/auth/signin',
  },
})

export { handler as GET, handler as POST }