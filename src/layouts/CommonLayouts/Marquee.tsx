import Text1 from "@/components/Marquee/Text1"
import Text2 from "@/components/Marquee/Text2"
import React from "react"
import FastMarquee from "react-fast-marquee"

const Marquee: React.FC = () => {
  return (
    <div className=" bg-theme-1 border-y-2 border-primary py-2 w-full">
      <FastMarquee>
        <Text1 text="LIKE NEVER BEFORE" />
        <Text2 text="Exclusive offers & deals" />
        <Text1 text="FEATURE PACKED" />
        <Text2 text="Easy booking" />
      </FastMarquee>
    </div>
  )
}

export default Marquee
