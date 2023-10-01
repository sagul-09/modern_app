import { wb } from "../assets"
import styles, { layout } from "../style";
import Button from "./Button";
import { socialMediaWeb } from "../constants";

const WebDev = () =>  (
   <section className={layout.section} >
<div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Web Development  
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Welcome to our Web Development Community, a hub for web enthusiasts and professionals. Join us to explore the ever-evolving world of web development, share knowledge, collaborate on projects, and stay at the forefront of web technologies. Together, we'll shape the future of the internet.
      </p>
      <div className="flex flex-row  mt-4">
        {socialMediaWeb.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[21px] h-[21px] object-contain cursor-pointer ${
              index !== socialMediaWeb.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>

      {/* <Button styles={`mt-10`} /> */}
    </div>
    <div className={layout.sectionImg}>
      <img src={wb} alt="card" className="w-[100%] h-[100%]"/>
    </div>
   </section>
  )


export default WebDev