import "~/styles/globals.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Topnav } from "./_components/topnav";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by a Theo sub",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex-col gap-4">
          <Topnav />
          {children}
          </body>
      </html>
    </ClerkProvider>
  );
}
