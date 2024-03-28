import "@/app/globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Provider from "@/app/components/Provider";

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
      <body className="min-h-screen mx-auto max-w-6xl flex flex-col bg-white dark:bg-gray-900">
        <Provider>
          <Navbar />
          <main className="flex flex-col flex-1 max-w-6xl w-full">
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
