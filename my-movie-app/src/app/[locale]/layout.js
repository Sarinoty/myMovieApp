import Header from "@/components/Header/Header";
import './globals.scss'
import "@fortawesome/fontawesome-svg-core/styles.css";
import { roboto, montserrat } from "@/fonts"; // On importe les fonts crées dans fonts.js au niveau du RooLayout pour qu'elles soient dispo pour toute l'app
import { availableLocales } from "@/utils/i18n";
import AuthProvider from "@/components/auth-provider/AuthProvider";

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export function generateStaticParams() { // Pour générer de façon statique avec les locales prises en charge.
  return availableLocales.map((locale) => ({
    locale,
  }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable}`}>
        <Header locale={locale} />
        <main>
          <AuthProvider>{children}</AuthProvider>
        </main>
      </body>
    </html>
  );
}
