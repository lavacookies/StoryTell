import Image from "next/image";
import BG from "@/public/bg.jpg";
import "./globals.css";

export const metadata = {
  title: "STORY TELL",
  description: "OUR BIYE PROJECT!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{ background: `url('/bg.jpg') center/cover no-repeat fixed` }}
      >
        {children}
      </body>
    </html>
  );
}
