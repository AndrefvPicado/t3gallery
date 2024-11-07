import "~/styles/globals.css";
import "@uploadthing/react/styles.css";
import { ClerkProvider } from '@clerk/nextjs'
import { Topnav } from "./_components/topnav";
import { Inter } from "next/font/google";
import { type Metadata } from "next";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "Generated by a Theo sub",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
  modal
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${inter.variable} dark`}>
          <div className="grid h-screen grid-rows-[auto,1fr]">
          <Topnav />
          <main className="overflow-y-scroll">{children}</main>
          </div>
          {modal}
          <div id="modal-root" />
          <Toaster />
        </body>
      </html>
    </ClerkProvider>
  );
}
