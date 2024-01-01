import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';
import { BiSearch } from 'react-icons/bi';

type Props = {};

const Hero: FC<Props> = (Props) => {
    return (
        <div className='flex flex-col lg:flex-row items-center hero_animation min-h-screen overflow-x-hidden'>
            {/* Image Section */}
            <div className='lg:w-1/2'>
                <div className='rounded-full overflow-hidden w-48 h-48 lg:w-full lg:h-full'>
                    <Image
                        src={require('../../../public/assets/banner-img-1.jpg')}
                        alt=''
                        className='object-cover w-full h-full'
                    />
                </div>
            </div>

            {/* Content Section */}
            <div className='lg:w-1/2 p-8'>
                <h2 className='dark:text-white text-black text-4xl lg:text-5xl font-semibold mb-4'>
                    Improve Your Online
                </h2>
                <p className='dark:text-white text-black text-lg lg:text-xl mb-8'>
                    Discover 40K+ online courses to enhance your knowledge. Start your learning journey today!
                </p>

                {/* Search Bar */}
                <div className='w-full flex items-center mb-4'>
                    <input
                        type='search'
                        placeholder='Search Courses ...'
                        className='flex-1 bg-transparent border dark:border-none dark:bg-[#57575758] dark:placeholder:text-[#ffffff41] rounded-[5px] p-2 mr-2 outline-none text-black dark:text-white text-[18px] font-[500] font-Josefin'
                    />
                    <BiSearch className='cursor-pointer text-white bg-cyan-600 rounded-[5px] p-2' size={40} />
                </div>

                {/* Client Section */}
                <div className='flex items-center'>
                    <Image src={require('../../../public/assets/client-img-1.jpg')} alt='' className='rounded-full' width={40} height={40} />
                    <Image src={require('../../../public/assets/client-img-2.jpg')} alt='' className='rounded-full ml-4' width={40} height={40} />
                    <Image src={require('../../../public/assets/client-img-3.jpg')} alt='' className='rounded-full ml-4' width={40} height={40} />
                    <p className='font-semibold dark:text-[#edfff4] text-black ml-2 text-lg lg:text-xl flex items-center gap-1'>
                        599K People Already Trusted Us.{' '}
                        <Link href='/courses' className='dark:text-green-600 text-[crimson] '>
                            View Courses
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
