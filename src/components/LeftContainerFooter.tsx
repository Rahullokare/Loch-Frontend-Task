import styles from "../styles/LeftContainerFooter.module.css";
import { testimonialData } from "../utils/TestimonialData";
import { lochLogo } from "../utils/images";
import TestimonialCard from "./TestimonialCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay } from "swiper/modules";
const LeftContainerFooter = () => {
  const breakpoints = {
    // Define breakpoints and their settings
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1.4,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 1.8,
      spaceBetween: 10,
    },
    1424: {
      slidesPerView: 1.9,
      spaceBetween: 10,
    },
    1624: {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4 className={styles.subheading}>Testimonials</h4>
        <div className={styles.horizontalLine}></div>
      </div>

      <div className={styles.flex}>
        <div className={styles.logo}>
          <img src={lochLogo} alt="Loch Logo" title="Loch Logo" />
        </div>
        <div className={styles.slider}>
          <Swiper
            breakpoints={breakpoints}
            spaceBetween={10}
            centeredSlides={true}
            modules={[Autoplay]}
            className="mySwiper"
          >
            {testimonialData.map((d: any, id: any) => {
              return (
                <SwiperSlide>
                  <TestimonialCard
                    key={id}
                    jobTitle={d.jobTitle}
                    personName={d.personName}
                    testimonialText={d.testimonialText}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default LeftContainerFooter;
