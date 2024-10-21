import { useEffect, useState } from "react";
import styles from "./ServiceAndProductSec.module.css";
import { GrLinkNext } from "react-icons/gr";
import { serviceList } from "../data";

export default function ServiceAndProductSec() {

    const [activeService, setActiveService] = useState(0)
    const [services, setServiceList ] = useState([
        {serviceTitle:"Our Products", value:"product"}, 
        {serviceTitle:"Calculator", value:"calculator"},
        {serviceTitle:"Guides & FAQs", value:"question"}
    ])


    useEffect(()=>{
        setActiveService(serviceList[1].calculator)

    },[])

    console.log("activeService: ", activeService);


    function handleChangeActiveService(name, idx){
        setActiveService(serviceList[idx][name])
    }



  return (
    <section className={styles.serviceSecContainer}>
      <div className={styles.serviceSectionHeader}>
        <h2>
          Got questions? <br />
          We've got answers
        </h2>

        <div className={styles.serviceBtnHeaderContainer}>

            { services.map((service, idx)=>(
                    <div key={idx} onClick={() => handleChangeActiveService(service.value, idx) } 
                    className={`${styles.btnWrapper}`}>
                        <button>{service.serviceTitle}</button>
                    </div>

            ))}


        </div>
      </div>

      {/* ========== first service sections ======== */}

    { activeService && 

<>
      <div className={styles.firstServiceRaw}>
        <div className={styles.smallServiceBox}>
          <h2>{activeService[0].title}</h2>
          <div className={styles.serviceBtn}>
            <GrLinkNext className={styles.prevIcon} />
          </div>

          <div className={styles.smallCardImgBox}>
            <img
              src={activeService[0].url}
              alt="HomeImg"
              className="cardHomeImg"
            />
          </div>
        </div>

        <div className={styles.bigServiceBox}>
          <div className={styles.serviceInfoDiv}>
            <h2>
            {activeService[1].title}
            </h2>
            <p>
             {activeService[1].desc}
            </p>

            <div className={styles.serviceBtn}>
              <GrLinkNext className={styles.prevIcon} />
            </div>
          </div>

          <div className={styles.bigServiceBoxImage}>
            <img
              src={activeService[1].url}
              alt="Mortgage"
            />
          </div>
        </div>
      </div>

        
    {/* ====================== seconds line service ================== */}
      <div className={`${styles.firstServiceRaw} ${styles.firstServiceRaw2}`}>
        <div className={`${styles.bigServiceBox} ${styles.bigServiceBox2}`}>
          <div className={styles.serviceInfoDiv}>
            <h2>{activeService[2].title}</h2>
            <p>
                {activeService[2].desc}
            </p>

            <div className={styles.serviceBtn}>
              <GrLinkNext className={styles.prevIcon} />
            </div>
          </div>

          <div className={styles.bigServiceBoxImage}>
            <img
              src={activeService[2].url}
              alt="Mortgage"
            />
          </div>
        </div>

        <div className={styles.smallServiceBox}>
          <h2>{activeService[3].title}</h2>
          <div className={styles.serviceBtn}>
            <GrLinkNext className={styles.prevIcon} />
          </div>

          <div className={styles.smallCardImgBox}>
            <img
              src={activeService[3].url}
              alt="HomeImg"
              className="cardHomeImg"
            />
          </div>
        </div>
      </div>

</>}
    </section>
  );
}
