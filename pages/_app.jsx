import '../styles/globals.css'  
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  // Clean up any potential memory leaks when changing pages
  useEffect(() => {
    return () => {
      // Force garbage collection of any hanging references
      if (window.gc) {
        window.gc()
      }
    }
  }, [])

  return <Component {...pageProps} />
}