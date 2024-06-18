import "../globals.scss";

import "./globals.css";

export const metadata = {
  title: "Real Estate in Dubai",
  description: "Real Estate in Dubai: Ideal for Living and Investing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
