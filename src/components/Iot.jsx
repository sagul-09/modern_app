import React from 'react'
import {iot} from '../assets'
import styles, {layout } from '../style'
import { socialMediaIot } from '../constants'

const Iot = () =>  (
   <section id='product' className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
<img src={iot} alt='billing' className='w-[100%] h-[100%] relative z-[5] '/>

{/* gradient start */}
<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}

</div>

<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Internet of Things</h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  We're the IoT Community, a gathering place for IoT enthusiasts, innovators, and experts. Join us to dive into the world of connected devices, share insights, collaborate on IoT projects, and envision a smarter, more connected future. Together, we'll unlock the potential of IoT and drive technological advancements.
  </p>
  <div className="flex flex-row  mt-4">
        {socialMediaIot.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMediaIot.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
  

</div>
   </section>
  )


export default Iot