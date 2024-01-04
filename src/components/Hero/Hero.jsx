import React from 'react';
import Image1 from '../../assets/hero/3.png';
import Image2 from '../../assets/hero/2.png';
import Image3 from '../../assets/hero/4.png';
import Slider from 'react-slick';

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: 'Toyota',
    description: 'Rayakan bulan kemerdekaan Indonesia bersama kami, Toyota!  Untuk setiap pembelian mobil Toyota matic di bulan ini, kamu bisa hemat jutaan rupiah.  Kami menawarkan diskon 10% hingga Rp 5000000',
  },
  {
    id: 2,
    img: Image2,
    title: 'Honda',
    description: 'Rayakan bulan kemerdekaan Indonesia bersama kami, Toyota!  Untuk setiap pembelian mobil Toyota matic di bulan ini, kamu bisa hemat jutaan rupiah.  Kami menawarkan diskon 10% hingga Rp 5000000',
  },
  {
    id: 3,
    img: Image3,
    title: 'BMW',
    description: 'Rayakan bulan kemerdekaan Indonesia bersama kami, Toyota!  Untuk setiap pembelian mobil Toyota matic di bulan ini, kamu bisa hemat jutaan rupiah.  Kami menawarkan diskon 10% hingga Rp 5000000',
  },
];

const Hero = () => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pouseOnHover: false,
    pouseOnFocus: true,
  };
  return (
    <div>
      <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
        {/* backgroun pattern */}
        <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-full rotate-45  -z-9 "></div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div>
                <div className="grid grid-cols-1 sm:grid-cols-2 ">
                  {/* text conten */}
                  <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                    <p className="text-sm">{data.description}</p>
                    <div>
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-10 duration-200 text-white py-2 px-4 rounded-full">order now</button>
                    </div>
                  </div>
                  {/* img */}
                  <div className="order-1 sm:order-2">
                    <div className="relative z-10">
                      <img src={data.img} alt="" className="w-[400px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-120 object-contain mx-auto" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Hero;
