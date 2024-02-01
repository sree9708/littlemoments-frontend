import Copyright from "@/components/Footer/Copyright"
import Links from "@/components/Footer/Links"
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="pt-24 bg-primary text-secondary">
      <Links />
      <Copyright />
    </footer>
  )
}

export default Footer
