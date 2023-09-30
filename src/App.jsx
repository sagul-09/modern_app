import styles from "./style";
import {  NavBar,Hero, Stats, AboutTs, GameDev, WebDev, Testimonials, JoinNow, Footer, Iot, Ml } from './components';



const App = () =>(
  <div className="h-auto scrollbar scrollbar-thumb-rose-500 scrollbar-track-slate-700">
  <div className="bg-primary w-full overflow-hidden ">
    
    <div className={`${styles.paddingX}} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar/>
      </div>
    </div>

<div className={`bg-primary ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
<Hero/>
  </div>

</div>

<div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
  <div className={`${styles.boxWidth}`}>
<Stats/>
<AboutTs/>
<GameDev/>
<WebDev/>
<Iot/>
<Ml/>
<Testimonials/>
<JoinNow/>
<Footer/>
  </div>

</div>

  </div>
  </div> 
  
)

export default App