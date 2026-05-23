import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AWEnvi Solutions | Environmental Consultancy",
  description:
    "AWEnvi Solutions provides STP, ETP, EPR registration, waste management, fire safety systems and PCB approvals.",
  metadataBase: new URL("https://awenvi-solutions.vercel.app"),
  openGraph: {
    title: "AWEnvi Solutions | Environmental Consultancy",
    description:
      "AWEnvi Solutions provides STP, ETP, EPR registration, waste management, fire safety systems and PCB approvals.",
    url: "https://awenvi-solutions.vercel.app",
    siteName: "AWEnvi Solutions",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AWEnvi Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AWEnvi Solutions | Environmental Consultancy",
    description:
      "AWEnvi Solutions provides STP, ETP, EPR registration, waste management, fire safety systems and PCB approvals.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
