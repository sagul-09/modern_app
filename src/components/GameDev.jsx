import React from 'react'
import {gd, apple, google} from '../assets'
import styles, {layout } from '../style'
import { socialMediaGd } from '../constants'

const Billing = () =>  (
   <section id='product' className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
<img src={gd} alt='GameDev' className='w-[85%] h-[100%] relative z-[5] '/>
{/* gradient start */}
<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
</div>

<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Game and App <br className='sm:hidden'/>Development</h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  We're a passionate community of developers, designers, and creators dedicated to game and app development. Join us to learn, collaborate, and bring your digital ideas to life. Together, we'll build, innovate, and inspire.
      </p>
      <div className="flex flex-row  mt-4">
        {socialMediaGd.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMediaGd.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
  

</div>
   </section>
  )


export default Billing