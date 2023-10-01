import { ml } from "../assets"
import styles, { layout } from "../style";
import Button from "./Button";
import { socialMediaMl } from "../constants";

const Ml = () =>  (
   <section className={layout.section} >
<div className={layout.sectionInfo}>

      <h2 className={styles.heading2}>
        Machine Learning
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Welcome to our Machine Learning Community, a haven for data scientists, AI enthusiasts, and learners. Join us to explore the realm of machine learning, share knowledge, collaborate on projects, and advance the boundaries of artificial intelligence. Together, we'll harness the power of data and algorithms to shape the future.
      </p>
      <div className="flex flex-row  mt-4 ">
        {socialMediaMl.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMediaMl.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

      {/* <Button styles={`mt-10`} /> */}
    </div>
    <div className={layout.sectionImg}>
      <img src={ml} alt="card" className="w-[100%] h-[100%]"/>
    </div>
   </section>
  )


export default Ml