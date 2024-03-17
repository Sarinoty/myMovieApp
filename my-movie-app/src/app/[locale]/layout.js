import Header from "@/components/Header/Header";
import './globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts"; // On importe les fonts crées dans fonts.js au niveau du RooLayout pour qu'elles soient dispo pour toute l'app

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}