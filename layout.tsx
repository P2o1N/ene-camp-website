import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ENE Camp ครั้งที่ 15 | มจธ.',
  description: 'ค่ายวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม มหาวิทยาลัยเทคโนโลยีพระจอมเกล้าธนบุรี',
  openGraph: {
    title: 'ENE Camp ครั้งที่ 15',
    description: 'ค่ายวิศวกรรมอิเล็กทรอนิกส์และโทรคมนาคม มจธ.',
    locale: 'th_TH',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
