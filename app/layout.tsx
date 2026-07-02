import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "To Do List",
  description: "To Do List",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <script src="/config/config.js"></script>
      </head>
      <body className="min-h-screen bg-gray-50">
       {children}
      </body>
    </html>
  );
}
