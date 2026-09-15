import type { Metadata } from "next";
import { Lato, JetBrains_Mono, Outfit, Gochi_Hand, Bricolage_Grotesque } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

// Self-hosted straight from the type foundry's own OFL source (the same
// repo Google Fonts itself builds from), not next/font/google - the
// build Google actually serves over its API is missing this typeface's
// default contextual "&" alternate (verified: tried every relevant
// OpenType feature tag against the Google-served file with no change,
// then confirmed the raw source file renders the correct glyph with zero
// feature flags needed). This is the fix, not a workaround.
const fraunces = localFont({
  src: [
    { path: "./fonts/Fraunces-Variable.ttf", style: "normal" },
    { path: "./fonts/Fraunces-Italic-Variable.ttf", style: "italic" },
  ],
  weight: "100 900",
  variable: "--font-fraunces",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-lato",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const gochiHand = Gochi_Hand({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-gochi-hand",
  display: "swap",
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jeevitesh Gaur — Portfolio",
  description: "Designer who solves, builds, codes, and ships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${lato.variable} ${jetbrainsMono.variable} ${outfit.variable} ${gochiHand.variable} ${bricolageGrotesque.variable} bg-[#EFF0F1] antialiased dark:bg-[#18191B]`}
      >
        {/* attribute="class" toggles Tailwind's dark: variant via a class
            on <html>. defaultTheme + no enableSystem: every new visitor
            opens in light mode regardless of their OS setting - only an
            explicit toggle click (persisted to localStorage from then on)
            switches to dark. suppressHydrationWarning on <html> is required
            here: next-themes sets the class before React hydrates via an
            inline script, which would otherwise trip a mismatch warning. */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
