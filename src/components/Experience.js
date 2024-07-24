import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);
    return (
        <li
            ref={ref}
            className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]'
        >
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}
            >
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;
                    <a
                        className='text-primary capitalize dark:text-primaryDark'
                        href={companyLink}
                        target={"_blank"}
                    >
                        {company}
                    </a>
                </h3>
                <span
                    className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'
                >
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
            </motion.div>
        </li>
    )
}

const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )

    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-primaryDark origin-top md:w-[2px] md:left-[30px] xs:left-[20px]'
                />
                <ul className='w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
                    <Details
                        position="Summer Intern"
                        company="@Deutsche Bank"
                        companyLink="https://www.db.com/index?language_id=1&kid=sl.redirect-en.shortcut"
                        time="May 2024 - July 2024"
                        address="Pune, India"
                        work="Empowered HR's ability to analyze employee data with interactive dashboards and customizable reports for strategic decision-making. Leveraged ReactJS, Spring Boot and Criteria API to empower HR with on-demand query creation for deeper workforce insights."
                    />
                    <Details
                        position="Software Development Intern"
                        company="@Systech Solutions, Inc"
                        companyLink="http://www.systechusa.com/"
                        time="Aug 2023 - Oct 23"
                        address="Remote"
                        work="Developed a comprehensive, in-house ERP system covering HRM, project management, inventory, and finance. Used Reactjs, Nodejs, and MySQL for smooth integration, crafting user-friendly interfaces. Implemented API integration for enhanced functionality."
                    />
                    <Details
                        position="Software Development Intern"
                        company="@HealTech Product (OPC) Pvt. Ltd"
                        companyLink="https://www.healtech.co.in/"
                        time="June 2023 - Oct 2023"
                        address="Remote"
                        work="Designed a user-friendly web app for doctors to seamlessly capture patient details. Used React.js, Tailwind, React Router, and Axios. Collaborated with the back-end team to integrate it seamlessly with Node.js-based RESTful APIs."
                    />
                    <Details
                        position="Technical Team Member"
                        company="@TeamQuarkVITPune"
                        companyLink="https://www.teamquark.com/"
                        time="Feb 2023 - Present"
                        address="Pune, India"
                        work="Coordinated at Team Quark with expertise in Competetive Programming. Helped organize various events like workshops, hackathons, and speaker sessions with the club."
                    />
                    <Details
                        position="Event Head"
                        company="@EPECVITPune"
                        companyLink="https://epecvitpune.com/"
                        time="April 2022 - July 2022"
                        address="Pune, India"
                        work="Lead a team at Event Planning and Execution Committee of Vishwakarma Institute of Technology, for a technical event. Took charge of the planning of the event from start to finish."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience