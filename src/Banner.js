
import { Swiper, SwiperSlide } from 'swiper/react';
import datainfo from './data/db.json';

const Banner = () => {
    return (
        <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
    >
                {
                    datainfo.banner.map((v, i)=>{
                        return(
                            <SwiperSlide className={v.cls}>{v.atext}</SwiperSlide>
                        )
                    })
                    
                }
                
                
    </Swiper>
    )
}

export default Banner
