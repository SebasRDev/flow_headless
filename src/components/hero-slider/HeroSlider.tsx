"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Button } from ".."

// Import Swiper styles
import 'swiper/css';

export const HeroSlider= () => {
  return (
    <Swiper>
      <SwiperSlide className="!h-[450px] sm:!h-[650px] relative overflow-hidden">
        <picture>
          <source srcSet="/images/accelerate_desktop.jpg" media="(min-width: 640px)" />
          <img src="/images/accelerate_mobile.jpg" alt="banner" loading="lazy" className="absolute sm:max-w-none h-full left-1/2 top-0 -translate-x-1/2 -z-[1]"/>  
        </picture>
        <div className="container h-full flex items-center">
          <div className="w-[438px] gap-8 flex flex-col justify-center">
            <h2 className="text-primary-500 text-font-size-1000 font-bold">Accelerating your digital transformation</h2>
            <p className="text-gray-15 text-font-size-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <Button variant="secondary" label="Explore our solutions" size="big"/>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="!h-[450px] sm:!h-[650px] relative overflow-hidden">
        <picture>
          <source srcSet="/images/accelerate_desktop.jpg" media="(min-width: 640px)" />
          <img src="/images/accelerate_mobile.jpg" alt="banner" loading="lazy" className="absolute sm:max-w-none h-full left-1/2 top-0 -translate-x-1/2 -z-[1]"/>  
        </picture>
        <div className="container h-full flex items-center">
          <div className="w-[438px] gap-8 flex flex-col justify-center">
            <h2 className="text-primary-500 text-font-size-1000 font-bold">Accelerating your digital transformation</h2>
            <p className="text-gray-15 text-font-size-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
            <Button variant="secondary" label="Explore our solutions" size="big"/>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  )
}
