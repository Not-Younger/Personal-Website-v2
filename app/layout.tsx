import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Provider from "@/app/components/Provider";
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: "Jonathan Young",
  description: "Personal Portfolio of Jonathan Young, a Software Engineer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
      </head>
      <body className="min-h-screen mx-auto w-full flex flex-col bg-white dark:bg-gray-800">
        <Provider>
          <Navbar />
          <main className="flex flex-col flex-1 w-full">
            {children}
          </main>
          <Footer />
        </Provider>
        <Analytics />
      </body>
    </html>
  );
}
