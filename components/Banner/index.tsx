import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import styles from './styles.module.css';
import 'swiper/css';

export const Banner = () => {
    return (
        <div className={styles.container}>
            <Swiper 
                slidesPerView={1} 
                className={styles.swiper}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                loop={true}
            >

                <SwiperSlide className={styles.swiperSlide}>
                    <img src="/tmp/banner1.png" alt="banner 1" className={styles.swiperSlideImage}/>
                </SwiperSlide>
                <SwiperSlide className={styles.swiperSlide}>
                    <img src="/tmp/banner2.png" alt="banner 2" className={styles.swiperSlideImage}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}