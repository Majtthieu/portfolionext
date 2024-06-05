import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matthieu Jankowiak",
  description:
    "Découvrez le portfolio de Matthieu Jankowiak, développeur web. Parcourez ses réalisations et projets variés, allant du développement front-end au back-end. Explorez son expertise dans les technologies web modernes et contactez-le pour discuter de collaborations potentielles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
