import styles from "./Sidebar.module.css";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import getListItems from "../../utility/getListItems";
import Accordion from "../../utility/accordian";
import { useNavContext } from "../../context/NavContaxt";

export default function Sidebar({ isShowSidebar, setIsShowSidebar }) {
  const [isOpen, setIsOpen] = useState(null);
  const [activeAccordianList, setActiveItemList] = useState([]);
  const { isMobile } = useNavContext()

  useEffect(()=>{
    if(isShowSidebar){
      handleCloseSidebar();
    }

  },[isMobile])


  //====== function for handling accordian toggling ========//
  const handleAccordionToggle = (accordionName) => {
    if (isOpen === accordionName) {
      setIsOpen(null);  // Close if the same accordion is clicked again
    } else {
      setIsOpen(accordionName);
      const items = getListItems(accordionName);
      setActiveItemList([...items]);
    }
  };

  //======== function toggling sidebar ======//
  function handleCloseSidebar(){
    setIsShowSidebar((prev)=>!prev)
  }


  const accordions = [
    { name: "buy", title: "Buy" },
    { name: "refinance", title: "Refinance" },
    { name: "heloc", title: "HELOC" },
    { name: "rates", title: "Rates" },
    { name: "betterPlus", title: "Better+" },
  ];

  return (
    <div className={`${styles.sidebarConteiner} ${isShowSidebar ? styles.show : ""}`}>
      <div className={styles.sidebarHeader}>
        <h3 className={styles.sidebarLogo}>Better</h3>
        <div onClick={()=>handleCloseSidebar()} className={styles.closeSidebar}>
          <IoClose className={styles.closeSideIcon} />
        </div>
      </div>

      {accordions.map(({ name, title }) => (
        <Accordion
          key={name}
          title={title}
          isOpen={isOpen === name}
          toggleAccordion={() => handleAccordionToggle(name)}
          listItems={activeAccordianList}
        />
      ))}

      <div className={styles.responsiveCallButton}>
        <IoIosCall className={styles.callIcons} /> Call us anytime at (415) 523 88371
      </div>



      <div className={styles.sidebarBtnBox}>

        <button className={styles.startBtn}>
          <span>Get Started</span>
          <span>3min | No credit impact</span>
        </button>

        <button className={styles.signinBtn}>
          Sign in <FaUser className={styles.userIcon} />
        </button>


      </div>


    </div>
  );
}