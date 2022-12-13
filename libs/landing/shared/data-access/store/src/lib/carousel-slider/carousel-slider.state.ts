import { LandingSwiperState } from '../swiper';

export interface LandingCarouselSliderState extends LandingSwiperState<LandingCarouselSliderItem>{
  imgSize: ImgSize
};

export interface LandingCarouselSliderItem {
  title: string;
  imageSrc: string;
  description: string;
  extraClass?: 'right-0' | 'left-0' | '';
}

export interface ImgSize {
  imgCollapseWidth: number;
  imgCollapseHeight: number;
  imgExpandWidth: number;
  imgExpandHeight: number;
}
