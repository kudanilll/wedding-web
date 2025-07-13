import type { Metadata } from "next";
import { Afacad } from "next/font/google";
import "./globals.css";

const font = Afacad({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shofi & Nanda | Undangan Pernikahan",
  description: "Undangan Pernikahan Shofi & Nanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="scroll-smooth no-scrollbar antialiased bg-black"
      suppressHydrationWarning
      style={{ scrollBehavior: "smooth" }}
    >
      <body className={`${font.className} min-h-dvh`}>
        <main>{children}</main>
      </body>
    </html>
  );
}
