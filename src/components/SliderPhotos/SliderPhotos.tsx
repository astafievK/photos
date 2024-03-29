import { Swiper, SwiperSlide } from 'swiper/react';

const SliderPhotos = () => {
    return (
        <Swiper
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={5}
            slideToClickedSlide={true}
            grabCursor={true}
            mousewheel={true}
            centeredSlides={true}
            effect={"coverflow"}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 0,
                modifier: 1,
                slideShadows: false
            }}
        >
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
            <SwiperSlide><img src="../../../public/no%20photo.jpg"></img></SwiperSlide>
        </Swiper>
    );
};

export default SliderPhotos