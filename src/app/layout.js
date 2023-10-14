import "./globals.css";
import { Poppins, Lora } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-text",
});

const lora = Lora({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

export const metadata = {
  title: "Fadhil Space",
  description:
    "Fadhil Muhammad Rafi personal spaces, look for Fadhil Muhammad Rafi experiences, projects, and education. Hire Fadhil to help creating your own app.",
};

export default function RootLayout({ children }) {
  // const windowSize = useWindowSize();

  return (
    <html lang="en">
      <body className={`${inter.variable} ${lora.variable}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
