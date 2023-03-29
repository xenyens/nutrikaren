import '../styles/globals.css'
import Footer from './components/Footer'
import Header from './components/Header'
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body className=''>
        <Header/>
        <main className='h-screen'>{children}</main>
        <Footer/>
      </body>
    </html>
  )
}