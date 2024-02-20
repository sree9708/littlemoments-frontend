import React from "react"

interface ITitleProps {
  text: string
}
const Title: React.FC<ITitleProps> = ({ text }) => {
  return <div className="text-title-sm font-title">{text}</div>
}

export default Title
