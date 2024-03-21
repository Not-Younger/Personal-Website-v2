import type { Metadata } from "next";
import "@/app/ui/globals.css";
import Provider from "@/app/providers";
import NavBar from "@/app/ui/Navbar";

export const metadata: Metadata = {
  title: "Gym App",
  description: "App for tracking weight room progress",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <NavBar />
          {children}
        </Provider>
      </body>
    </html>
  );
}
