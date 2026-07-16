import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MyGrandStand | My Sports. My Way.",
  description: "A new generation of sports companion apps designed around the fan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
