import React from 'react';
import Best1 from '../../assets/best/best1.png';
import Best2 from '../../assets/best/best2.png';
import Best3 from '../../assets/best/best3.png';
import { FaStar } from 'react-icons/fa6';
const ProductsData = [
  {
    id: 1,
    img: Best1,
    title: 'bmw',
    description: 'Mobil ini berwarna hitam. Memiliki 6 kaca jendela, 2 di sebelah kanan, 2 lagi di sebelah kiri, 1 di depan dan 1 di belakang. Mobil ini pendek. Hampir seperti CEDAN. ',
    ratting: 5.5,
  },
  {
    id: 2,
    img: Best2,
    title: 'bmw',
    description: 'Mobil ini berwarna hitam. Memiliki 6 kaca jendela, 2 di sebelah kanan, 2 lagi di sebelah kiri, 1 di depan dan 1 di belakang. Mobil ini pendek. Hampir seperti CEDAN ',
    ratting: 5.5,
  },
  {
    id: 3,
    img: Best3,
    title: 'bmw',
    description: 'Mobil ini berwarna hitam. Memiliki 6 kaca jendela, 2 di sebelah kanan, 2 lagi di sebelah kiri, 1 di depan dan 1 di belakang. Mobil ini pendek. Hampir seperti CEDAN',
    ratting: 5.5,
  },
];
const TopProducts = () => {
  return (
    <div>
      <div className="container">
        {/* header section */}
        <div className="text-left mb-10">
          <h1 className="text-3xl font-bold"> Best Products</h1>
          <p className="text-xs text-gray-400">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo asperiores error vel.</p>
        </div>
        {/* body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-20 md:gap-5 place-items-center">
          {ProductsData.map((data) => (
            <div className="flex flex-col text-black justify-center items-center w-auto h-auto gap-5 p-5 bg-primary/40 rounded-lg md:flex-row dark:text-white ">
              {/* image section */}
              <div className="flex justify-center items-center p-5  duration-700 hover:scale-125">
                <img src={data.img} alt="" className="w-28 h-28 md:w-[800px] md:h-56 lg:w-[800px] lg:h-44 " viewBox="0 0 29.667 31.69" fill="white" />
              </div>
              {/* detail products */}
              <div class="max-w-sm h-auto space-y-3">
                <div class="flex justify-center items-center sm:justify-between">
                  <h2 class=" text-2xl font-bold tracking-widest">{data.title}</h2>
                  <svg viewBox="0 0 24 24" height="20" width="20" xmlns="http://www.w3.org/2000/svg" class="hidden sm:flex hover:scale-150 duration-300 fill-yellow cursor-pointer">
                    <path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"></path>
                  </svg>
                </div>
                <p class="text-sm ">{data.description}</p>
                <div class="flex gap-6 items-center justify-center">
                  <p class=" font-bold text-lg">$300.00</p>
                  <p class="font-semibold text-sm line-through">$320.00</p>
                </div>
                <div class="flex justify-around items-center my-2">
                  <button class="px-2 bg-yellow-300 p-1 m-4 rounded-md  font-semibold shadow-xl shadow-blue-500/50 hover:ring-2 ring-blue-400 hover:scale-75 duration-500">Buy Now</button>
                  <button class="px-2 border-2 bg-yellow-300  p-1 rounded-md  font-semibold shadow-lg shadow-blue-500/50 hover:scale-75 duration-500">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
