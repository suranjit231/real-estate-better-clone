import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import styles from "../components/sidebar/Sidebar.module.css";



export default function Accordion({ title, isOpen, toggleAccordion, listItems }) {
  return (
    <div className={styles.sidebarLinkBox}>
      <div className={styles.linkHeader}>
        <p className={styles.linkTitle}>{title}</p>
        {isOpen ? (
          <RiArrowUpSFill onClick={toggleAccordion} className={styles.expandIcon} />
        ) : (
          <RiArrowDownSFill onClick={toggleAccordion} className={styles.expandIcon} />
        )}
      </div>
      {isOpen && (
        <div className={styles.activeAccordianListBox}>
          {listItems.map((item, idx) => (
            <p className={styles.accordianItem} key={idx}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}
