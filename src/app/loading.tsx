"use client"
import NextNProgress from "nextjs-progressbar"

export default function App({ Component, pageProps }: any) {
  return (
    <div>
      <NextNProgress />
      {/* <Component {...pageProps} />; */}
    </div>
  )
}
