import { faEnvelopeOpen, faLocationDot, faPaperPlane, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Heading from '~/components/common/Heading';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function Contact() {
    const mode = useSelector((state) => state.mote.value);
    const form = useRef();

    return (
        <div>
            <Heading title="get in" mainTitle="Touch" hiddenTitle="Contact" />
            <div className="flex max-w-6xl m-auto phone:flex-col">
                <div className="w-1/3 text-left phone:w-full">
                    <h3
                        className={classNames('text-[26px] mb-4 uppercase font-extrabold text-white', {
                            'text-lightText': mode === 'light',
                        })}
                    >
                        Don't be Shy!
                    </h3>
                    <p className={classNames('text-[15px] text-white mb-6', { 'text-lightText': mode === 'light' })}>
                        Feel free to get in touch with me. I am always open to discussing new projects, creative ideas
                        or opportunities to be part of your visions.
                    </p>
                    <div className="">
                        <div className="flex mb-5">
                            <div className="w-10 pt-2">
                                <FontAwesomeIcon
                                    className={classNames('text-main text-[26px] ', {
                                        'text-lightBg': mode === 'light',
                                    })}
                                    icon={faLocationDot}
                                />
                            </div>
                            <div
                                className={classNames('text-[16px] text-white font-semibold', {
                                    'text-lightText': mode === 'light',
                                })}
                            >
                                <h4 className={classNames('opacity-80 uppercase')}>Address</h4>
                                <p>Da Nang City</p>
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <div className="w-10 pt-2">
                                <FontAwesomeIcon
                                    className={classNames('text-main text-[26px]', {
                                        'text-lightBg': mode === 'light',
                                    })}
                                    icon={faEnvelopeOpen}
                                />
                            </div>
                            <div
                                className={classNames('text-[16px] text-white font-semibold', {
                                    'text-lightText': mode === 'light',
                                })}
                            >
                                <h4 className={classNames('opacity-80 uppercase')}>Email</h4>
                                <p>vvviet.it@gmail.com</p>
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <div className="w-10 pt-2">
                                <FontAwesomeIcon
                                    className={classNames('text-main text-[26px]', {
                                        'text-lightBg': mode === 'light',
                                    })}
                                    icon={faPhone}
                                />
                            </div>
                            <div
                                className={classNames('text-[16px] text-white font-semibold', {
                                    'text-lightText': mode === 'light',
                                })}
                            >
                                <h4 className={classNames('opacity-80 uppercase')}>Phone</h4>
                                <a href="tel:09132492208">09132492xx</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-2/3 text-left px-[30px] phone:w-full phone:px-0">
                    <Formik
                        initialValues={{ email: '', name: '', subject: '', message: '' }}
                        validate={(values) => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Invalid email address';
                            }

                            if (!values.name) {
                                errors.name = 'Required';
                            }

                            if (!values.subject) {
                                errors.subject = 'Required';
                            }

                            if (!values.message) {
                                errors.message = 'Required';
                            }

                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            emailjs
                                .sendForm('service_yrut6mr', 'template_fwxuktb', form.current, 'I5lvMmUtb6nctDtOl')
                                .then(
                                    (result) => {
                                        alert('Send message is successful!');
                                    },
                                    (error) => {
                                        console.log(error.text);
                                    },
                                );
                        }}
                    >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form ref={form} onSubmit={handleSubmit}>
                                <div className="flex mb-5 phone:flex-col">
                                    <div className="w-1/2 pr-2 phone:w-full phone:p-0 phone:mb-5">
                                        <input
                                            className={classNames(
                                                'w-full text-[15px] text-white outline-0 px-8 py-4 bg-toggle rounded-full border-[1px] border-toggle focus:border-main',
                                                {
                                                    'text-lightText bg-blur border-blur focus:border-lightBg':
                                                        mode === 'light',
                                                },
                                            )}
                                            placeholder="YOUR NAME"
                                            type="text"
                                            name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.name}
                                        />
                                        <p className="text-[14px] pl-2 pt-1 font-medium text-red-700">
                                            {errors.name && touched.name && errors.name}
                                        </p>
                                    </div>
                                    <div className="w-1/2 pl-2 phone:w-full phone:p-0">
                                        <input
                                            className={classNames(
                                                'w-full text-[15px] text-white outline-0 px-8 py-4 bg-toggle rounded-full border-[1px] border-toggle focus:border-main',
                                                {
                                                    'text-lightText bg-blur border-blur focus:border-lightBg':
                                                        mode === 'light',
                                                },
                                            )}
                                            placeholder="YOUR EMAIL"
                                            type="email"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        <p className="text-[14px] pl-2 pt-1 font-medium text-red-700">
                                            {errors.email && touched.email && errors.email}
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full mb-5">
                                    <input
                                        className={classNames(
                                            'w-full text-[15px] text-white outline-0 px-8 py-4 bg-toggle rounded-full border-[1px] border-toggle focus:border-main',
                                            {
                                                'text-lightText bg-blur border-blur focus:border-lightBg':
                                                    mode === 'light',
                                            },
                                        )}
                                        placeholder="SUBJECT"
                                        type="text"
                                        name="subject"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.subject}
                                    />
                                    <p className="text-[14px] pl-2 pt-1 font-medium text-red-700">
                                        {errors.subject && touched.subject && errors.subject}
                                    </p>
                                </div>
                                <div className="w-full mb-5">
                                    <textarea
                                        className={classNames(
                                            'w-full text-[15px] text-white outline-0 px-8 py-4 bg-toggle rounded-2xl border-[1px] border-toggle focus:border-main',
                                            {
                                                'text-lightText bg-blur border-blur focus:border-lightBg':
                                                    mode === 'light',
                                            },
                                        )}
                                        placeholder="MESSAGE"
                                        rows={6}
                                        type="text"
                                        name="message"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.message}
                                    />
                                    <p className="text-[14px] pl-2 pt-1 font-medium text-red-700">
                                        {errors.message && touched.message && errors.message}
                                    </p>
                                </div>
                                <button
                                    disabled={isSubmitting}
                                    type="submit"
                                    className={classNames(
                                        'relative mb-5 group flex items-center border-main border rounded-full h-[50px] w-fit',
                                        {
                                            'border-lightBg': mode === 'light',
                                        },
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            'flex absolute top-[-2px] w-[50px] group-hover:w-full left-0 justify-end  rounded-full  bg-main ease-[ease] duration-300 transition-all',
                                            { 'bg-lightBg': mode === 'light' },
                                        )}
                                    >
                                        <div className="flex w-[50px] h-[50px] justify-center items-center ">
                                            <FontAwesomeIcon
                                                icon={faPaperPlane}
                                                size="1x"
                                                className="absolute text-white transition-all ease-out duration-500"
                                            />
                                        </div>
                                    </div>
                                    <p
                                        className={classNames(
                                            'z-40 text-white uppercase font-semibold text-[15px] pl-[64px] pr-8 group-hover:pr-[64px] group-hover:pl-8 ease-[ease] duration-300 transition-all',
                                            {
                                                'text-lightText': mode === 'light',
                                                'group-hover:text-white': mode === 'light',
                                            },
                                        )}
                                    >
                                        Send
                                    </p>
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Contact;
