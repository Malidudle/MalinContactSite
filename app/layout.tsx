import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Share_Tech_Mono } from "next/font/google";
import RootStyleRegistry from "./emotion";

const ShareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Malin Grafton",
  description: "Hey! My name is Malin and this is my site where you can contact me and learn a little bit about me.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <RootStyleRegistry>
        <body className={ShareTechMono.className}>
            <Navbar />
            {children}
        </body>
      </RootStyleRegistry>
    </html>
  );
}
