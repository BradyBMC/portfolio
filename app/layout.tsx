import "../styles/globals.css"
import Navbar from "@/components/Navbar"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
