import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "New India Export",
  description: "Exporting quality products worldwide",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 dark:bg-black dark:text-gray-100">
        <Navbar/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );
}
