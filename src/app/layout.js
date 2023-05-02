import "./globals.css";

export const metadata = {
  title: "Schemax",
  description: "Creative Solutions For Better Business",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta
          name="facebook-domain-verification"
          content="zh9j2l2ohzd3g8m4u9glb7pqv035l2"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
