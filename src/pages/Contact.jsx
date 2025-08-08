import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion'
import emailjs from '@emailjs/browser'

import ContactHeroImage from '../assets/Images/contact-hero-image2.png'
import RoundedBottomRight from '../assets/Images/hero-bottom-right.svg'
import RoundedBottomLeft from '../assets/Images/hero-bottom-left.svg'
// import PrimaryButton from '../components/PrimaryButton'

import { ConversationSparkIcon } from '../assets/Icons/Icons'

import CollapsableCard from '../components/CollapsableCard'
import SectionPill from '../components/SectionPill'

import {
    contentBasicVariants,
    heroSectionBottomContainerVariants,
    overlayVariants
} from '../utils/animationVariants'

import '../index.css';

const Contact = () => {
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

    const validate = (fields) => {
        const errs = {}
        if (!fields.name || fields.name.trim() === '') {
            errs.name = 'Name is required.'
        }
        if (!fields.email || fields.email.trim() === '') {
            errs.email = 'Email is required.'
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
            errs.email = 'Enter a valid email address.'
        }
        if (!fields.phone || fields.phone.trim() === '') {
            errs.phone = 'Phone number is required.'
        } else {
            // Remove non-digit characters
            const digits = fields.phone.replace(/\D/g, '');
            if (digits.length !== 10) {
                errs.phone = 'Phone number must be exactly 10 digits.';
            }
        }
        if (!fields.message || fields.message.trim() === '') {
            errs.message = 'Message is required.'
        } else if (fields.message.trim().length < 10) {
            errs.message = 'Message should be at least 10 characters.'
        }
        return errs
    }

    const sendEmail = (e) => {
        e.preventDefault();
        const form = e.target
        const fields = {
            name: form.name.value,
            email: form.email.value,
            phone: form.phone.value,
            message: form.message.value,
        }
        const validationErrors = validate(fields)
        setErrors(validationErrors)
        if (Object.keys(validationErrors).length > 0) {
            return
        }

        setIsSubmitting(true)
        console.log('Submitted... ');

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            e.target,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        ).then(() => {
            alert('Success');
            e.target.reset();
            setErrors({})
            setIsSubmitting(false)
        }).catch((error) => {
            console.error(error);
            setIsSubmitting(false)
        })
    }

    return (
        <>
            <section className='w-full h-full' role="banner" aria-labelledby="hero-title">
                <AnimatePresence mode='sync'>
                    <div className='w-full h-full relative'>
                        <motion.div
                            className='w-full h-full absolute inset-0 bg-linear-to-t from-transparent via-gray-1/50 to-gray-1'
                            variants={overlayVariants}
                            initial='initial'
                            whileInView='whileInView'
                            exit='exit'
                            aria-hidden="true"
                        ></motion.div>
                        <img
                            src={ContactHeroImage}
                            alt='Contact hero section featuring SLSRP office building with modern architecture and green landscaping'
                            className='w-full h-[100vh] object-cover overflow-hidden'
                            loading='eager'
                        />
                        <div className='absolute w-full flex flex-col justify-center items-center gap-y-2 md:gap-y-15 bottom-0 left-0 right-0'>
                            <div className='flex flex-col justify-center items-center gap-y-7 max-w-lg'>
                                <motion.h1
                                    id="hero-title"
                                    className='mx-auto text-white!'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    custom={1}
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                >
                                    Contact us
                                </motion.h1>
                                <motion.p
                                    className='mx-auto text-white font-medium text-center'
                                    variants={contentBasicVariants}
                                    initial='initial'
                                    whileInView='whileInView'
                                    viewport={{ once: true, amount: "some" }}
                                    exit='exit'
                                    custom={3}
                                >
                                    Innovations for life sciences begin with conscious collaboration. Whether you're advancing noetic research, incubating green technologies, or seeking wholistic environmental solutions, SLSRP is ready to empower your journey.
                                </motion.p>
                            </div>
                            <div className='xs:w-full sm:w-8/10 md:w-9/10 lg:w-8/10 flex flex-row justify-between items-center gap-0'>
                                <img
                                    src={RoundedBottomLeft}
                                    alt=''
                                    className='self-end -mb-[0.8px] -me-[0.8px]'
                                    aria-hidden="true"
                                />
                                <motion.div
                                    className='w-full grid xs:grid-cols-1 md:grid-cols-3 md:gap-x-5 rounded-tl-xl rounded-tr-xl bg-gray-8 px-4 pt-4 pb-2 bg-gradient-to-t from-gray-8 to-[#fff3d1]'
                                    variants={heroSectionBottomContainerVariants}
                                    initial='initial'
                                    animate='animate'
                                    role="contentinfo"
                                    aria-label="Contact information"
                                >
                                    <motion.div
                                        className='flex flex-col justify-center items-center gap-y-2 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        custom={1}
                                        viewport={{ once: true, amount: "some" }}
                                        exit='exit'
                                    >
                                        <h5>Call us anytime</h5>
                                        <a
                                            href='tel:+1234567890'
                                            className='text-gray-3 hover:text-gray-2'
                                            aria-label="Call SLSRP at +1234567890"
                                        >
                                            +1234567890
                                        </a>
                                    </motion.div>
                                    <motion.div
                                        className='flex flex-col justify-center items-center gap-y-2 h-full xs:border-b-1 md:border-b-0 md:border-r-1 border-dashed border-gray-4 p-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        custom={4}
                                        viewport={{ once: true, amount: "some" }}
                                        exit='exit'
                                    >
                                        <h5>Write to us</h5>
                                        <a
                                            href='mailto:info@slsrp.com'
                                            className='text-gray-3 hover:text-gray-2'
                                            aria-label="Send email to SLSRP"
                                        >
                                            info@slsrp.com
                                        </a>
                                    </motion.div>
                                    <motion.div
                                        className='text-center flex flex-col justify-center items-center gap-y-2 h-full p-4'
                                        variants={contentBasicVariants}
                                        initial='initial'
                                        whileInView='whileInView'
                                        custom={8}
                                        viewport={{ once: true, amount: "some" }}
                                        exit='exit'
                                    >
                                        <h5>Open hours</h5>
                                        <p className='text-gray-3 mb-0!'>Sat: 10:00 AM – 3:00 PM</p>
                                        <p className='text-gray-3'>Sun: Taking a breath of fresh air (closed)</p>
                                    </motion.div>
                                </motion.div>
                                <img
                                    src={RoundedBottomRight}
                                    alt=''
                                    className='self-end -mb-[0.8px] -ms-[0.8px]'
                                    aria-hidden="true"
                                />
                            </div>
                        </div>
                    </div>
                    <div className='w-full flex flex-col justify-center items-center gap-y-10 my-10'>
                        <span className="relative flex w-16 h-16 items-center justify-center -mb-3 mt-10" aria-hidden="true">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-1/50 opacity-75"></span>
                            <span className="relative inline-flex w-16 h-16 rounded-full bg-primary-1 items-center justify-center">
                                <ConversationSparkIcon width={30} height={30} />
                            </span>
                        </span>
                        <motion.h2
                            className='text-center'
                            variants={contentBasicVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport={{ once: true, amount: "some" }}
                            exit='exit'
                            custom={1}
                            id="contact-form-title"
                        >
                            Let's start a <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>conversation</span>
                        </motion.h2>
                        <motion.form
                            className='w-9/10 md:w-7/10 h-full flex flex-col justify-start items-start xs:gap-y-5 md:gap-y-7 rounded-3xl xs:p-5 md:p-10 bg-white border-0 focus-within:shadow-2xl'
                            variants={contentBasicVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport={{ once: true, amount: "some" }}
                            exit='exit'
                            custom={3}
                            onSubmit={sendEmail}
                            role="form"
                            aria-labelledby="contact-form-title"
                            aria-describedby="form-description"
                            noValidate
                        >
                            <div id="form-description" className="sr-only">
                                Use this form to send a message to SLSRP. All fields are required.
                            </div>
                            <div className='w-full'>
                                <label htmlFor='name' className='block mb-2 text-black'>
                                    What is your full name? <span aria-label="required" className="text-red-500">*</span>
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Type your full name'
                                    className={`w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200${errors.name ? ' border-red-500' : ''}`}
                                    aria-required="true"
                                    aria-invalid={errors.name ? 'true' : 'false'}
                                    aria-describedby={errors.name ? 'name-error' : undefined}
                                />
                                <div className='h-6 mt-1'>
                                    {errors.name && <span id="name-error" className='text-red-500 text-sm' role="alert">{errors.name}</span>}
                                </div>
                            </div>
                            <div className='w-full flex xs:flex-col md:flex-row justify-between items-start gap-x-8 xs:gap-y-5 md:gap-y-7'>
                                <div className='w-full self-start'>
                                    <label htmlFor='email' className='block mb-2 text-black'>
                                        Email Address <span aria-label="required" className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        id='email'
                                        placeholder='Type your email address'
                                        className={`w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200${errors.email ? ' border-red-500' : ''}`}
                                        aria-required="true"
                                        aria-invalid={errors.email ? 'true' : 'false'}
                                        aria-describedby={errors.email ? 'email-error' : undefined}
                                        autoComplete="email"
                                    />
                                    <div className='h-5 mt-1'>
                                        {errors.email && <span id="email-error" className='text-red-500 text-xs' role="alert">{errors.email}</span>}
                                    </div>
                                </div>
                                <div className='w-full self-start'>
                                    <label htmlFor='phone' className='block mb-2 text-black'>
                                        Phone Number <span aria-label="required" className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        id='phone'
                                        placeholder='Type your phone number'
                                        className={`w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200${errors.phone ? ' border-red-500' : ''}`}
                                        aria-required="true"
                                        aria-invalid={errors.phone ? 'true' : 'false'}
                                        aria-describedby={errors.phone ? 'phone-error phone-help' : 'phone-help'}
                                        autoComplete="tel"
                                    />
                                    <div id="phone-help" className="sr-only">Enter a 10-digit phone number</div>
                                    <div className='h-5 mt-1'>
                                        {errors.phone && <span id="phone-error" className='text-red-500 text-sm' role="alert">{errors.phone}</span>}
                                    </div>
                                </div>
                            </div>
                            <div className='w-full'>
                                <label htmlFor='message' className='block mb-2 text-black'>
                                    Send us a message <span aria-label="required" className="text-red-500">*</span>
                                </label>
                                <textarea
                                    name='message'
                                    id='message'
                                    rows='5'
                                    placeholder='Type your message here'
                                    className={`w-full p-4 border border-dashed border-gray-4 focus:outline-dashed focus:ring-gray-2 focus:border-transparent rounded-md transition-all duration-200 resize-vertical${errors.message ? ' border-red-500' : ''}`}
                                    aria-required="true"
                                    aria-invalid={errors.message ? 'true' : 'false'}
                                    aria-describedby={errors.message ? 'message-error message-help' : 'message-help'}
                                />
                                <div id="message-help" className="sr-only">Message must be at least 10 characters long</div>
                                <div className='h-6 mt-1'>
                                    {errors.message && <span id="message-error" className='text-red-500 text-sm' role="alert">{errors.message}</span>}
                                </div>
                            </div>
                            <input
                                type='submit'
                                name='submit'
                                id='submit'
                                value={isSubmitting ? 'Sending...' : 'Send Message'}
                                className='rounded-full bg-primary-1 border-1 border-dashed border-primary-1 hover:bg-black hover:text-white text-black px-4 py-2 transition-colors duration-300 ease-in-out text-nowrap font-medium cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed'
                                disabled={isSubmitting}
                                aria-describedby="submit-help"
                            />
                            <div id="submit-help" className="sr-only">Click to send your message to SLSRP</div>
                        </motion.form>
                    </div>
                </AnimatePresence>
            </section>
            <section
                className='w-full min-h-screen p-2 flex flex-col justify-start items-center gap-y-8 pt-20!'
                role="list"
                aria-label="Frequently asked questions"
                aria-labelledby="faq-title"
            >
                <SectionPill sectionTitle={'FAQ'} />
                <motion.h2
                    id="faq-title"
                    className='text-center font-semibold max-w-lg'
                    variants={contentBasicVariants}
                    initial='initial'
                    whileInView='whileInView'
                    custom={1}
                    viewport={{ once: true, amount: "some" }}
                    exit='exit'
                >
                    Clearing doubts about our <span className='bg-gradient-to-r from-primary-1 via-primary-variant-2 to-primary-variant-3 bg-clip-text text-transparent'>organisation & services</span>
                </motion.h2>
                <CollapsableCard
                    heading={'Who founded SLSRP and what is its core philosophy?'}
                    text={'SLSRP was founded by Thiru. Jeyachandran Srinivasan, a distinguished socialpreneur and thought leader. Its philosophy emphasizes a wholistic model of transformation that integrates science with spirit, technology with ethics, and intangible human consciousness with tangible global development goals.'}
                />
                <CollapsableCard
                    heading={'What is the Noetic Science Enablement on Unified Wholeness (nseUW) program?'}
                    text={'nseUW is a non-commercial, merit-based certification ecosystem offered by SLSRP. It provides a three-year progression-based certification in noetic science, focusing on consciousness practices rooted in Eastern wisdom. It includes capacity building through institutional scopes of work and certifies subject matter experts based on merit.'}
                />
                <CollapsableCard
                    heading={'How does SLSRP integrate ancient knowledge with modern science?'}
                    text={'SLSRP validates and positions ancient systems like Tamil Siddha science, Eastern traditional medicine, and indigenous healing through rigorous scientific research. It bridges East-West integration via mixed-method studies, symposia, and publications that compare ancient practices with Western models.'}
                />
                <CollapsableCard
                    heading={'What are SLSRP\'s funding sources?'}
                    text={'SLSRP uses diversified streams such as government grants from ministries like AYUSH and CSIR, angel and venture capital, NRI investments, corporate CSR projects, project-based revenue, IP commercialization, and merit-based certifications. Revenue is allocated with 80% toward core programs and 20% for operations, with full reinvestment for national development.'}
                />
                <CollapsableCard
                    heading={'How can individuals or organizations collaborate with SLSRP?'}
                    text={'SLSRP partners with ministries, universities, CSR wings, and international agencies for co-creation, policy insights, and empowerment programs. Opportunities include research collaborations, youth cohorts, startup incubation, and participation in noetic certification. Contact SLSRP for merit-based involvement in programs like nseUW or environmental initiatives.'}
                />
            </section>
            <div className='w-full h-30'></div>
        </>
    )
}

export default Contact