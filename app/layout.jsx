import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jet = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jet",
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "StableStrategy — Perpetual Stable Machine",
  description:
    "StableStrategy is a self-sustaining protocol that automates Bitcoin accumulation, burns  $STBLSTR, and maintains long-term equilibrium through on-chain mechanics.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={jet.variable}>
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}
