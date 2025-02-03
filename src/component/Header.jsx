import React from 'react'
import logo from "../assets/logo.png"

import Button from './Button';

const Header = () => {

    const menuitem = [
        {
            id: 1,
            name: "Home",
        }, {
            id: 1,
            name: "Solutions",
        },
        {
            id: 1,
            name: "Classes",
        },
        {
            id: 1,
            name: "About us",
        },
        {
            id: 1,
            name: "Blog",
        },
        {
            id: 1,
            name: "Contact us",
        },
    ];

    return (
        <div className='container'>
        <div className='mt-[24px]  flex justify-between items-center'>
            <picture>
                <img src={logo} alt='{logo}' />
            </picture>

            <div>
                <ul className='flex items-center gap-x-[44px] '>
                    {

                        menuitem.map((item) => {
                            return (
                                <li key={item.id}>
                                    <a href="#" className='menu font-nunito font-bold text-[20px]capitalize'>{item.name}</a>
                                </li>
                            )

                        })
                    }
                </ul>
            </div>

            <Button btnContent="Get in touch"
                btnDesign={"bg-yellow font-bold font-nunito text-white text-[20px] p-3 rounded-lg btn"} />

        </div>
        </div>



    )



}

export default Header
