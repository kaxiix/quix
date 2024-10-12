import { Quicksand } from "next/font/google"; // Import Quicksand font
import "./globals.css";

// Load the Quicksand font
const quicksand = Quicksand({ subsets: ["latin"] });

export const metadata = {
  title: "Quixstudio", // Set the title to "Quixstudio"
  description:
    "Welcome to Quixstudio, where we create amazing digital experiences.",
  keywords: "Quixstudio, digital agency, web development, creative design",
  authors: [{ name: "Quixstudio Team", url: "https://quixstudio.com" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/logo1.ico" type="image/x-icon" />

        {/* SEO Meta Tags */}
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content="Quixstudio Team" />
        <meta name="viewport" content={metadata.viewport} />
        <meta name="theme-color" content={metadata.themeColor} />
        <title>{metadata.title}</title>
      </head>
      <body className={quicksand.className}>
        {/* Apply Quicksand as the default font */}
        {children}
      </body>
    </html>
  );
}
