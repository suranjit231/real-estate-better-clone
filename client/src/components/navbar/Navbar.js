import styles from "./Navbar.module.css";
import { IoIosCall } from "react-icons/io";
import DropDownMenu from "../dropdown/DropdownMenu";
import { useState } from "react";
import { useNavContext } from "../../context/NavContaxt";
import { MdMenu } from "react-icons/md";

export default function Navbar({ setIsShowSidebar }) {
   
    const { activeLink, showDropDown, hideDropDown, isSticky, setIsSticky} = useNavContext();

    return (

        <div className={`${styles.navbarContainer} ${isSticky ? styles.sticky : ""}`}>
            <div className={styles.leftNavbar}>
                <h3 className={styles.navLogo}>Better</h3>

                <p 
                    onMouseOver={() => showDropDown('buy')}
                    onMouseLeave={hideDropDown}
                    className={styles.navLink}>
                    Buy
                    {activeLink === 'buy' && <DropDownMenu />}
                </p>

                <p 
                    onMouseOver={() => showDropDown('refinance')}
                    onMouseLeave={hideDropDown}
                    className={styles.navLink}>
                    Refinance
                    {activeLink === 'refinance' && <DropDownMenu />}
                </p>

                <p 
                    onMouseOver={() => showDropDown('heloc')}
                    onMouseLeave={hideDropDown}
                    className={styles.navLink}>
                    HELOC
                    {activeLink === 'heloc' && <DropDownMenu/>}
                </p>

                <p 
                    onMouseOver={() => showDropDown('rates')}
                    onMouseLeave={hideDropDown}
                    className={styles.navLink}>
                    Rates
                    {activeLink === 'rates' && <DropDownMenu/>}
                </p>

                <p 
                    onMouseOver={() => showDropDown('betterPlus')}
                    onMouseLeave={hideDropDown}
                    className={styles.navLink}>
                    Better+
                    {activeLink === 'betterPlus' && <DropDownMenu />}
                </p>
            </div>

            <div className={styles.rightNavbar}>

                <div onMouseOver={() => showDropDown('call')}
                    onMouseLeave={hideDropDown}
                    className={styles.contactLink}>
                    <IoIosCall className={styles.callIcons} />

                    {activeLink === 'call' && <DropDownMenu />}
                </div>

                <div className={styles.signinLink}>Sign in</div>


                <MdMenu className={styles.menuIcon}
                onClick={() => setIsShowSidebar((prev) => !prev)}  />

            </div>

        </div>
    );
}
