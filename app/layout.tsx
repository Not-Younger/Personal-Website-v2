import type { Metadata } from "next";
import "@/app/ui/globals.css";
import Providers from "@/app/providers";
import NavBar from "@/app/ui/Navbar";

export const metadata: Metadata = {
  title: "Jonathan Young",
  description: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
