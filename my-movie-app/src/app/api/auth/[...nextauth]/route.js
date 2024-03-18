import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

// Next-auth nécessite des infos présentes dans .env

const handler = NextAuth({
  providers: [ // Ici on a un tableau de providers car on peut en utiliser plusieurs (voir la doc de la librairie qui fourni des exemple de code)
    CredentialsProvider({ // Provider fourni par Next-auth
      name: "MovieApp",
      credentials: {
        email: { label: "E-mail", type: "text", placeholder: "Votre e-mail" },
        password: {
          label: "Mot de passe",
          type: "password",
          placeholder: "Votre mot de passe",
        },
      },
      async authorize(credentials, request) {
        const response = await fetch("http://localhost:3000/api/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password,
          }),
        });

        const user = await response.json(); // On récupère l'utilisateur dans la réponse

        return user || null; // On retourne l'utilisateur s'il y en a un sinon on retourne null
      },
    }),
  ],
});

export { handler as GET, handler as POST };