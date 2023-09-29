import Header from "@/components/Header/Header";
import './globals.css'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  )
}
