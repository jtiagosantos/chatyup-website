import { Poppins } from 'next/font/google';

const poppins = Poppins({ weight: ['400', '500', '600', '900'], subsets: ['latin'] })

export const metadata = {
  title: 'Recovery Password | Chatyup',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
