import styles from "../style";
import Button from "./Button";

const JoinNow= () => (
  <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex-1 flex flex-col">
      <h2 className={styles.heading2}>Join now!</h2>
      <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
        Everything you need is to click the <span className="text-gradient">"Get Started"</span> button.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
);

export default JoinNow;