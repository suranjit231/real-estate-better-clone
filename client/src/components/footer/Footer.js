import styles from "./Footer.module.css";


export default function Footer(){
    return (
        <div className={styles.footerContainer}>
            <hr></hr>

            <div className={styles.footerLogo}>
                <h1>Better</h1>
                
            </div>

            <div className={styles.footerLinkSection}>


                {/* ================== footer link box 1=================== */}
                <div className={styles.footerLinkBox}>

                <p className={styles.linkDesc}>Better is a family of companies serving all your homeownership needs.</p>
                   

                    <div className={styles.linkItem}>
                        <div className={styles.footerTitle}>
                            <img src="https://media.better.com/better-com/1660240096238/better-mortgage-logo.svg" alt="logo" /> 

                        </div>
                        <p className={styles.linkDesc}>We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.</p>
                        

                    </div>



                    <div className={styles.linkItem}>
                        <div className={styles.footerTitle}>
                            <img src="https://media.better.com/better-com/1660240096238/better-real-estate-logo.svg" alt="logo" />

                        </div>
                        <p className={styles.linkDesc}>Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.</p>
                        

                    </div>


                    <div className={styles.linkItem}>
                        <div className={styles.footerTitle}>
                            <img src="https://media.better.com/better-com/1660240096238/better-cover-logo.svg" alt="logo" /> 

                        </div>

                        <p className={styles.linkDesc}>Shop, bundle, and save on insurance coverage for home, auto, life, and more.</p>
                       
                        

                    </div>


                    
                    <div className={styles.linkItem}>
                        <div className={styles.footerTitle}>
                            <img src="https://media.better.com/better-com/1660240096238/better-inspect-logo.svg" alt="logo" />

                        </div>
                        <p className={styles.linkDesc}>Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.</p>
                        

                    </div>


                       
                    <div className={styles.linkItem}>
                        <div className={styles.footerTitle}>
                            <img className={styles.mylogo} src="https://media.better.com/better-com/1660240096238/better-settlement-services-logo.svg" alt="logo" />

                        </div>
                        <p className={styles.linkDesc}> <p className={styles.linkDesc}>Get transparent rates when you shop for title insurance all in one convenient place.</p></p>
                        

                    </div>


            
                </div>

                
        {/* ================== footer link box 1=================== */}
                    <div className={styles.footerBox}>
                        <h2 className={styles.resourceHeading}>Resources</h2>

                        <span>Home affordability calculator</span>
                        <span>Mortgage calculator</span>
                        <span>Free mortgage calculator</span>
                        <span>Mortgage calculator with taxes</span>
                        <span>Mortgage calculator with PMI</span>
                        <span>Rent vs buy calculator</span>
                        <span>HELOC payment calculator</span>
                        <span>HELOC vs cash-out refinance calculator</span>
                        <span>Buy a home</span>
                        <span>Sell a home</span>

                        <span>Get home inspection</span>
                    </div>

                    <div className={styles.footerBox}>
                        <h2 className={styles.resourceHeading}>Company</h2>

                        <span>About Us</span>
                        <span>Careers</span>
                        <span>Media</span>
                        <span>Partner With Us</span>
                        <span>Learning center</span>
                        <span>FAQs</span>
                        <span>Investor Relations</span>
                    </div>

                    <div className={styles.footerBox}>
                        <h2 className={styles.resourceHeading}>Contact Us</h2>

                        <span>hello@better.com</span>
                        <span>415-523-8837</span>
                        <span>FAQ</span>
                        <span>Glossary</span>
                        <span>Legal</span>
                        <span>NMLS Consumer Access</span>
                        <span>Terms of Use</span>
                        <span>Disclosures & Licensing</span>
                        <span>Affiliated Business</span>
                        <span>Browser Disclaimer</span>
                    </div>

               

            </div>

            <p className={styles.copyWrite}>© 2024 Better. All rights reserved. </p>

        </div>
    )
}