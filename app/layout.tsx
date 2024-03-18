import type { Metadata } from "next";
import "@/app/ui/globals.css";
import Provider from "@/app/providers";
import ThemeSwitcher from "@/app/ui/ThemeSwitcher";

export const metadata: Metadata = {
  title: "Jonathan Young",
  description: "Software Engineer",
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
          <ThemeSwitcher />
          {children}
        </Provider>
      </body>
    </html>
  );
}
