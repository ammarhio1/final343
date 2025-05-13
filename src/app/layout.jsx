import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Menubar from "./components/Menubar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Hasan, Ammar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Menubar />
        {children}
      </body>
    </html>
  );
}