'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { NAV_LINKS } from '@/constants'
import Button from './Button'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen)
        console.log('di klik')
    }

    return (
        <nav className=' flexBetween max-container padding-container relative z-30 py-5'>
            <Link href='/'>
                <Image src='/hilink-logo.svg' alt='logo' width={74} height={29} />

            </Link>
            <ul className={`hidden h-full gap-12 lg:flex transition-all ${menuOpen ? 'block' : 'hidden'}`}>
                {NAV_LINKS.map((link) => (
                    <Link href={link.href} key={link.key} className='regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold'>{link.label}</Link>
                ))}
            </ul>
            <div className='lg:flexCenter hidden'>
                <Button type="button" title='Login' icon='/user.svg' variant="btn_dark_green" />
            </div>
            <div className='lg:hidden'>
                <Image src={`/menu.svg`} alt='menu' width={32} height={32} onClick={handleMenuClick} />
            </div>
            <div
                className={`absolute w-screen h-screen bg-white right-0 top-0 flex justify-center items-center text-center ${menuOpen ? 'block' : 'hidden'}`}
            >
                <ul className='list-disc'>
                    {NAV_LINKS.map((link) => (
                        <li key={link.key} className='flex items-center justify-center '>
                            <Link href={link.href} className='regular-16 text-black cursor-pointer pb-3 transition-all hover:font-bold'>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
            {menuOpen && (
                <div className='absolute right-0 top-0 mt-4 mr-4'>
                    <button className='px-5 py2 border-[1px] border-black rounded-3xl' onClick={handleMenuClick}>X</button>
                </div>
            )}
        </nav>
    )
}

export default Navbar
