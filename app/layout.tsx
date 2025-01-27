import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shop app",
  description: "My shop wep app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
