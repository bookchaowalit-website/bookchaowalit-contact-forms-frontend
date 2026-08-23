import type { Metadata } from "next";
import { Inconsolata, Libre_Franklin } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const correspondenceSans = Libre_Franklin({ variable: "--font-correspondence-sans", subsets: ["latin"] });
const correspondenceDisplay = Libre_Franklin({ variable: "--font-correspondence-display", subsets: ["latin"] });
const correspondenceMono = Inconsolata({ variable: "--font-correspondence-mono", subsets: ["latin"], weight: ["400", "600"] });

export const metadata: Metadata = { title: "Inbox — Contact intake desk", description: "Compose and inspect local contact form submissions.", metadataBase: new URL("https://contact-forms.bookchaowalit.com"), alternates: { canonical: "https://contact-forms.bookchaowalit.com" } };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${correspondenceSans.variable} ${correspondenceDisplay.variable} ${correspondenceMono.variable}`}><body><Analytics /><SpeedInsights />{children}</body></html>;
}
