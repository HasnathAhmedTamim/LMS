import Link from 'next/link';
import React from 'react';

type Props = {
    activeItem: number;
    isMobile: boolean;
};

export const navItemsData = [
    {
        name: "Home",
        url: '/'
    },
    {
        name: "Courses",
        url: '/courses'
    },
    {
        name: "About",
        url: '/about'
    },
    {
        name: "Policy",
        url: '/policy'
    },
    {
        name: "FAQ",
        url: '/faq'
    },
];

const NavItems: React.FC<Props> = ({ activeItem, isMobile }) => {
    return (
        <>
            <div className='hidden sm:flex'>
                {/* className="hidden 800px:flex" */}
                {navItemsData &&
                    navItemsData.map((i, index) => (
                        <Link href={i.url} key={index} passHref>
                            <span
                                className={`${activeItem === index
                                    ? "dark:text-[#37a39a] text-[crimson]"
                                    : "dark:text-white text-black"
                                    } text-[18px] px-6 font-Poppins font-[400]`}
                            >
                                {i.name}

                            </span>
                        </Link>
                    ))}

            </div>
            {isMobile && (
                <div className='sm:hidden mt-5'>
                    {/* here className=" 800px:hidden " */}
                    <div className='w-full text-center py-6'>
                        <Link href={"/"} passHref></Link>
                        <span  className={`text-[25px] font-Poppins font-[500] text-black dark:text-white`}>
                            Elearning
                        </span>
                    </div>
                    {navItemsData &&
                        navItemsData.map((i, index) => (
                            <Link href="/" key={index} passHref>
                                <span
                                    className={`${activeItem === index
                                        ? "dark:text-[#37a39a] text-[crimson]"
                                        : "dark:text-white text-black"
                                        } block py-5 text-[18px] px-6 font-Poppins font-[400]`}
                                >
                                    {i.name}
                                </span>
                            </Link>
                        ))}

                </div>
            )}

        </>
    );
};

export default NavItems;
