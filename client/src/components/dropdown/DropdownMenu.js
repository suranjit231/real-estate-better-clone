import styles from "./DropdownMenu.module.css";
import { useNavContext } from "../../context/NavContaxt";
import { useState, useEffect } from "react";
import getListItems from "../../utility/getListItems";
import { FaArrowRight } from "react-icons/fa6";

export default function DropDownMenu() {
    const { activeLink } = useNavContext();
    const [listItems, setListItems] = useState([]);
    const [callActive, setCallActiveMenu ] = useState(null);

    useEffect(() => {
        const items = getListItems(activeLink);

        if(activeLink==="call"){
            setCallActiveMenu(activeLink);
            return;
        }

        setListItems(items || []);  // Ensure items are an array even if null
    }, [activeLink]);

    return (

        <>
            {!callActive ?
             <div className={styles.dropdownContainer}>
                {listItems.map((item, index) => (
                    <div key={index} className={styles.menuItem}>
                        <span>{item}</span>

                        <FaArrowRight className={styles.rightArrow}/>

                    </div>
                ))}
            </div>:
             <p className={styles.callActiveMenu}>
                Call us any time at +917636955111
            </p>}
        
        </>
        
    );
}
