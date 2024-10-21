import { useEffect, useState } from "react";
import styles from "./HomeDetails.module.css";
import { MdStarRate } from "react-icons/md";
import { reviewData } from "../../data";

export default function HomeDetails(){
    const [aciveCustomerReview,setActiveCustomerReview ] = useState(reviewData[0]);
    const [reviewList, setReviewList] = useState(reviewData);

    useEffect(()=>{
        // setActiveCustomerReview()
        console.log("active user: ", aciveCustomerReview);

    },[])

    function handleActiveUserList(idx){
        setActiveCustomerReview(reviewList[idx])

    }


    return(
        <div className={styles.homeDetailsContainer}>
            <section className={styles.customerReviewSeaction}>
                <div className={styles.leftReviewContainer}>
                    <div className={styles.reviewBox}>
                        <img src={aciveCustomerReview.url} 
                        alt="Amanda" className={styles.customerImg} />
                    </div>

                    <div className={styles.reviewControlBtnBox}>
                       

                        { reviewList.map((review, idx)=>(
                             <div onClick={()=>handleActiveUserList(idx)}
                              key={idx}
                               className={`${styles.btnWrapper} ${aciveCustomerReview.name === review.name && styles.activeR}`}>
                                <button>{review.name}</button>
                             </div>
                        ))}


                       
                    </div>
                   
                </div>





                {/* ========= right side home details ========== */}
                <div className={styles.rightReviewContainer}>
                    <h1 >Find out why <br /> we’re better.</h1>
                    <button className={styles.storiesBtn}>See all our stories</button>

                    <div className={styles.trustPilotRateInfo}>
                         
                            <div className={styles.sterIcon} >
                                <MdStarRate /> 
                                <span>TrustPolit</span>
                            </div>
                            <span>Excellent</span>
                            <span>4.4 out of 5</span>
                    </div>
                </div>
            </section>
        </div>
    )
}