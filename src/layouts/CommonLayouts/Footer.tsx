import Copyright from "@/components/Footer/Copyright"
import Links from "@/components/Footer/Links"
import React from "react"

const Footer: React.FC = () => {
  return (
    <div className="pt-24 bg-primary text-secondary">
      <Links />
      <Copyright />
    </div>
  )
}

export default Footer
