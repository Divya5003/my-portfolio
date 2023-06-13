import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div
            className='flex items-center justify-center py-3 px-6 rounded-full font-semibold bg-dark text-light shadow-dark dark:bg-light dark:text-dark dark:shadow-light absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold'
            whileHover={{ scale: 1.25 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>
    )
}

const Skills = () => {
    return (
        <>
            <h1 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h1>
            <div
                className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm'
            >
                <motion.div
                    className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark dark:bg-light dark:text-dark dark:shadow-light lg:p-6 md:p-4 xs:text-xs xs:p-2'
                    whileHover={{ scale: 1.05 }}
                >
                    Web
                </motion.div>
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="JavaScript" x="20vw" y="6vw" />
                <Skill name="ReactJS" x="0vw" y="12vw" />
                <Skill name="NextJS" x="-20vw" y="-15vw" />
                <Skill name="MongoDB" x="15vw" y="-12vw" />
                <Skill name="TypeScript" x="32vw" y="-5vw" />
                <Skill name="NodeJS" x="0vw" y="-20vw" />
                <Skill name="Firebase" x="-25vw" y="18vw" />
                <Skill name="Tailwind CSS" x="28vw" y="18vw" />
                <Skill name="Git" x="-36vw" y="-5vw" />
            </div>

        </>
    )
}

export default Skills