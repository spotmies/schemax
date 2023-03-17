import './globals.css'

export const metadata = {
  title: 'Schemax',
  description: 'Creative Solutions For Better Business',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
