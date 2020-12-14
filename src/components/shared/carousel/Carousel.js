import React from 'react';
import image1 from '../../../assets/carousel_images/user.png';
import image2 from '../../../assets/carousel_images/background.jpg';
import styles from './Carousel.module.scss';


function Carousel() {

    return (
        <div>
            <div className={styles['carousel-wrapper']}>
                <div className={styles['carousel_image']}>
                   <img src={image1} alt="" className={styles.image}/> 
                </div>

                <div className={styles['carousel_image']}>
                   <img src={image2} alt="" className={styles.image}/> 
                </div>
            </div>
        </div>
    )
}

export default Carousel
