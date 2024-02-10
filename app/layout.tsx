import "../styles/globals.css"
import Navbar from "@/components/Navbar"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="bg-blue-950 no-scrollbar h-dvh">
      <head />
      <body>
        {children}
      </body>
    </html>
  )
}
