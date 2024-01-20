import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const ibm_plex_mono = IBM_Plex_Mono({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Auto-RSVP Meetup CLI",
  description:
    "Automate your Meetup event RSVPs effortlessly with the Auto-RSVP Meetup CLI tool. Simplify event management from the command line.",
  keywords: ["meetup", "CLI", "automation", "RSVP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ibm_plex_mono.className} dark`}>{children}</body>
    </html>
  );
}
