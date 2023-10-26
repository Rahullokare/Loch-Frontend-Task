import SliderCard from "./SliderCard";
import {
  barChart2,
  bell2,
  checkbox,
  clock,
  traingleDown,
} from "../utils/images";
import styles from "../styles/NotificationSlider.module.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
const NotificationSlider = () => {
  const breakpoints = {
    // Define breakpoints and their settings
    320: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.7,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 0,
    },
    1424: {
      slidesPerView: 1.9,
      spaceBetween: 0,
    },
    1624: {
      slidesPerView: 1.9,
      spaceBetween: 0,
    },
  };
  return (
    <div className={styles.container}>
      <div className={styles.blackOverlay}></div>
      <Swiper
        breakpoints={breakpoints}
        loop={true}
        keyboard={{
          enabled: true,
        }}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          {" "}
          <SliderCard
            icon={bell2}
            rightIcon={<p className={styles.cardTextHeader}>Save</p>}
            classname={"bg-gradient"}
          >
            <p className={styles.cardText1}>
              We’ll be sending notifications to you here
            </p>
            <div className={styles.emailContainer}>hello@gmail.com</div>
          </SliderCard>
        </SwiperSlide>

        <SwiperSlide>
          <SliderCard
            icon={barChart2}
            rightIcon={<img src={checkbox} className={styles.checkbox} />}
          >
            <p className={styles.cardText2}>
              Notify me when any wallets move more than
            </p>
            <div className={styles.money}>
              <p>$1,000.00</p>
              <img
                src={traingleDown}
                alt="traingleDown Icon"
                title="traingleDown Icon"
              />
            </div>
          </SliderCard>
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard
            icon={clock}
            rightIcon={<img src={checkbox} className={styles.checkbox} />}
          >
            <p className={styles.cardText2} style={{ marginTop: "39.2px" }}>
              Notify me when any wallet dormant for
            </p>
            <div className={styles.money} style={{ marginTop: "9px" }}>
              <p>&gt; 30 days</p>
              <img src={traingleDown} alt="clock Icon" title="clock Icon" />
            </div>
            <p className={styles.cardText2} style={{ marginTop: "8.4px" }}>
              becomes active
            </p>
          </SliderCard>
        </SwiperSlide>
        <div className={styles.rightOverlay}></div>
      </Swiper>
    </div>
  );
};

export default NotificationSlider;
