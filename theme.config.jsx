import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

export default {
  logo: () => {
    const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
    }, [])
  
    const { theme, resolvedTheme } = useTheme()
    if (!mounted) return null
    return (
      <img
        src={
          theme === 'dark' || resolvedTheme === 'dark'
            ? '/images/icons/icon-light.svg'
            : '/images/icons/icon-dark.svg'
        }
        alt="Logo"
        width="40"
        height="40"
      />
    )
  },
  feedback: {
    content: null
  },
  editLink: {
    component: null 
  },
  footer: {
    content: (
      <span>
        © {new Date().getFullYear()} {' '}
        <a href="https://lunarkai.org" target="_blank">
          Lunark AI
        </a>
      </span>
    )
  },
  navigation: {
    prev: true,
    next: true
  },
  darkMode: true,
  themeSwitch: false,
  nextThemes: {
    defaultTheme: "dark",
    storageKey: "lunark-theme",
  },
  theme: "dark",
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Lunark AI - Documentation" />
      <title>Lunark AI - Documentation</title>
      <link rel="icon" href="/images/icons/icon-light.svg" media="(prefers-color-scheme: dark)"/>
      <link rel="icon" href="/images/icons/icon-dark.svg" media="(prefers-color-scheme: light)"/>
    </>
  )
}