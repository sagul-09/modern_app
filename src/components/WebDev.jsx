import { wb } from "../assets"
import styles, { layout } from "../style";
import Button from "./Button";

const WebDev = () =>  (
   <section className={layout.section} >
<div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Web Development  
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Welcome to our Web Development Community, a hub for web enthusiasts and professionals. Join us to explore the ever-evolving world of web development, share knowledge, collaborate on projects, and stay at the forefront of web technologies. Together, we'll shape the future of the internet.
      </p>

      {/* <Button styles={`mt-10`} /> */}
    </div>
    <div className={layout.sectionImg}>
      <img src={wb} alt="card" className="w-[100%] h-[100%]"/>
    </div>
   </section>
  )


export default WebDev