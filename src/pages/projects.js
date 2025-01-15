import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import { motion } from 'framer-motion'
import project1 from '../../public/images/projects/netflix-clone.jpg'
import project2 from '../../public/images/projects/resume-analysis.jpg'
import project3 from '../../public/images/projects/team-allocation.jpg'
import project4 from '../../public/images/projects/meals-app.jpg'
import project5 from '../../public/images/projects/dall-e.png'
import project6 from '../../public/images/projects/chat-app.png'
import project7 from '../../public/images/projects/car-showcase.jpg'
import project8 from '../../public/images/projects/e-bookstore.png'
import project9 from '../../public/images/projects/classroom-app.png'
import project10 from '../../public/images/projects/reading-comprehension-system.png'
import project11 from '../../public/images/projects/my-therapist.png'
import TransitionEffect from '@/components/TransitionEffect'

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-br-2xl rounded-3xl border border-solid border-dark bg-light dark:bg-dark dark:border-light shadow-2xl p-12 relative lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link
                href={link}
                target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'
            >
                <FramerImage
                    src={img}
                    alt={title}
                    className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text:sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link
                        href={link}
                        target="_blank"
                        className='ml-4 rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'
                    >
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const Project = ({ title, type, img, summary, github }) => {

    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={github} target="_blank"
                className='w-full cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    priority
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>

            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={github} target="_blank" className='hover:underline underline-offset-2 dark:text-light'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='w-full mt-2 flex items-center justify-between'>
                    <p className='my-2 w-3/4 font-medium text-dark dark:text-light'>{summary}</p>
                    <Link href={github} target="_blank" className='w-8 md:w-6'>
                        <GithubIcon />
                    </Link>

                </div>
            </div>
        </article>
    )
}


const projects = () => {
    return (
        <>
            <Head>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                <title>Divya's Portfolio | Projects</title>
                <meta name='description' content='any description' />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light '>
                <Layout className='pt-16'>
                    <AnimatedText className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' text="Imagination Trumps Knowledge!" />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="MyTherapist"
                                type="Full-stack Application"
                                summary="AI-driven mental health support system designed to predict mental health challenges early, monitor progress over time, and offer personalized care."
                                img={project11}
                                github="https://github.com/Divya5003/Mental-Health-Prediction"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="ReadIQ"
                                type="Full-stack Application"
                                summary="Developed a system using AI (transformers like BERT and GPT) to generate practice questions (MCQs, True/False, Fill-in-the-blanks) for reading comprehension."
                                img={project10}
                                github="https://github.com/Divya5003/reading-comprehension-questions-generator"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Smart Classroom"
                                type="Full-stack Web Application"
                                img={project9}
                                summary="A robust online platform for efficient assignment management within classrooms, leveraging AWS technologies and NextJS to build a serverless system."
                                github="https://github.com/Divya5003/classroom-app"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="BookFlix"
                                type="Full-stack Web Application"
                                img={project8}
                                summary="A Full Stack E-Bookstore website with Spring Boot, ReactJS and Oracle Database. Users can filter, sort, add their favorite books to cart and buy them online."
                                github="https://github.com/Divya5003/e-bookstore"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="CarHub"
                                type="Modern Next.js Application"
                                summary="A Modern Car Showcase Application built with React, NextJS 13, TypeScript, Tailwind CSS and RapidAPI having search and filter features."
                                img={project7}
                                link="https://car-hub-sand.vercel.app/"
                                github="https://github.com/Divya5003/car-showcase"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="ChatGram"
                                type="Full-stack Web Application"
                                img={project6}
                                summary="A web application built with React, Redux Toolkit, Node and OpenAI that enables users to interact with each other. New ChatGPT API provides AI assistance."
                                github="https://github.com/Divya5003/chat-app"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Dall-E clone"
                                type="MERN-stack Web Application"
                                img={project5}
                                summary="A Full Stack MERN AI Image Generation App replicating Dall-E by OpenAI. Users can generate images through text prompts and chare with community."
                                github="https://github.com/Divya5003/ai-image-generator"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Meals Forever"
                                type="React Web Application"
                                summary="A web application that enables user to find recipes of variety of meals, add them to favorites, and get a suprise meal recipe. Fully functional and visually appealing web application developed using ReactJS."
                                img={project4}
                                link="https://meals-application-9138f.web.app/"
                                github="https://github.com/Divya5003/meals-application"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Team-Up"
                                type="React Web Application"
                                img={project3}
                                summary="A web application built with React to help resource management, manage employees and build teams on the basis of their domain and skills."
                                github="https://github.com/Divya5003/team-allocation-app"
                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                title="Resume Analyzer"
                                type="NLP Model deployed on Flask Web App"
                                img={project2}
                                summary="An NLP based ML model that can compare resumes, parse important details, and suggest jobs on the basis of skills and experience. Helpful for both recruiters and applicants."
                                github="https://github.com/Divya5003/Resume-Analysis-using-nlp"
                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                title="Netflix clone"
                                type="Full-stack Web Application"
                                summary="A full-stack Netflix clone developed using ReactJS, Typescript, Tailwind CSS, NextJS, Prisma, MongoDB and NextAuth with multiple features."
                                img={project1}
                                link="https://netflix-clone-by-divya.vercel.app/"
                                github="https://github.com/Divya5003/netflix-clone"
                            />
                        </div>
                    </div>
                </Layout>
            </main>
        </>
    )
}

export default projects