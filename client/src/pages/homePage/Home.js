import styles from "./Home.module.css";
import { MdOutlineTimer } from "react-icons/md";
import HomeDetails from "../../components/homeDetails/HomeDetails";
import ServiceAndProductSec from "../../serviceAndProduct/ServiceAndProductSec";


export default function Home(){


    return(

        <>
        <div className={styles.homePageContainer}>
            <div className={styles.firstHeader}>

                <div className={styles.trendIcon}>
                    <img src="./trend.png" alt="Trand"  />
                </div>
               
                <h1>Rate drop alert</h1>
            </div>

        <div className={styles.mainBannerColleps}>
            <h1 className={styles.mainHeading}>The rate drop you’ve <br/> been waiting for</h1>


            <div className={styles.bannerImg}>
                <img src="https://media.better.com/better-com/homepage/rate-drop-notify.webp" 
                className={styles.homeBanerImage} />

            </div>

        </div>


             <div className={styles.startAproveDiv}>
                <button>
                    Start my approve
                </button>
                <p className={styles.startPara}>
                    <MdOutlineTimer className={styles.timerIcons} />
                    <span>3 min | No credit impact</span>
                </p>

            </div>


        <div className={styles.ratingBox}>

            <div className={styles.ratingHeader}>
                <img src="./google.png" alt="google" className={styles.googleIcon}/>
                <img src="./star.png" alt="fullrate" className={styles.fullSter} />
                <img src="./star.png" alt="fullrate" className={styles.fullSter} />
                <img src="./star.png" alt="fullrate" className={styles.fullSter} />
                <img src="./star.png" alt="fullrate" className={styles.fullSter} />
                <img src="./rating.png" alt="halfrate" className={styles.halfSter} />
            </div>

            <p className={styles.ratingInfo}>4.6 Stars | 3177 Google reviews</p>

            </div>

        </div>

        <HomeDetails />
        <ServiceAndProductSec />
    </>)

}