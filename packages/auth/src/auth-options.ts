import { type NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  // Configure one or more authentication providers
  // adapter: PrismaAdapter(prisma),
  providers: [
    // DiscordProvider({
    //   clientId: process.env.DISCORD_CLIENT_ID as string,
    //   clientSecret: process.env.DISCORD_CLIENT_SECRET as string,
    // }),
    // ...add more providers here
  ],
  callbacks: {
    session({ session }) {
      if (session.user) {
        // session.user.id = user.id;
      }
      return session;
    },
  },
};
