import React from 'react'
import {bill, apple, google} from '../assets'
import styles, {layout } from '../style'

const Billing = () =>  (
   <section id='product' className={layout.sectionReverse}>
<div className={layout.sectionImgReverse}>
<img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5] '/>
{/* gradient start */}
<div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
</div>

<div className={layout.sectionInfo}>
  <h2 className={styles.heading2}>Game and <br className='sm:hidden'/>App Development.</h2>
  <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
  We're a passionate community of developers, designers, and creators dedicated to game and app development. Join us to learn, collaborate, and bring your digital ideas to life. Together, we'll build, innovate, and inspire.
      </p>
  

</div>
   </section>
  )


export default Billing