import React from "react"
import Iframe from 'react-iframe';

const MoreDetailsRightSide = () => {
  return (
    <div>
      <iframe
        // width="600"
        // height="450"
        className="w-full h-96"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src="https://maps.app.goo.gl/YP4GyA1nTpi1US9B6"
      ></iframe>
      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096036!2d144.95373531531592!3d-37.8172099797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1631233126322!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe> */}
    </div>
  )
}

export default MoreDetailsRightSide
