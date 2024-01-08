import React from 'react';
import Mobil1 from '../../assets/product/mobil1.jpg';
import Mobil2 from '../../assets/product/mobil2.jpeg';
import Mobil3 from '../../assets/product/mobil3.jpg';
import Mobil4 from '../../assets/product/mobil4.jpg';
import Mobil5 from '../../assets/product/mobil5.jpeg';
import { FaStar } from 'react-icons/fa6';

const ProductsData = [
  {
    id: 1,
    img: Mobil1,
    title: 'bmw',
    ratting: 5.5,
  },
  {
    id: 2,
    img: Mobil2,
    title: 'bmw',
    ratting: 5.5,
  },
  {
    id: 3,
    img: Mobil3,
    title: 'bmw',
    ratting: 5.5,
  },
  {
    id: 4,
    img: Mobil4,
    title: 'bmw',
    ratting: 5.2,
  },
  {
    id: 5,
    img: Mobil5,
    title: 'bmw',
    ratting: 5.3,
  },
];

export const Products = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 className="text-3xl font-bold">Products</h1>
          <p className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo asperiores error vel.</p>
        </div>
        {/* body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div data-aos="fade-up" data-aos-delay={data.aosDelay} key={data.id} className="space-y-3">
                <img src={data.img} alt="" className="h-[300px] w-[300px]  rounded-md" />
                <div>
                  <h3 className="font-bold">{data.title}</h3>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400"></FaStar>
                    <p className="">{data.ratting}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
