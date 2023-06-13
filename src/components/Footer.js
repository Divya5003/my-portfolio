import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base '>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Build with <span className='text-primary dark:text-primaryDark text-2xl px-1'>&#9825;</span> by
                    <Link className="underline underline-offset-2 pl-1" Link href="https://github.com/Divya5003" target={"_blank"}>
                        Divya Mahajan
                    </Link>
                </div>
                <Link className="underline underline-offset-2" href="mailto:divyamahajan5003@gmail.com" target={"_blank"}>
                    Say Hello!
                </Link>
            </Layout>
        </footer>
    )
}

export default Footer;