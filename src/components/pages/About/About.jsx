import Heading from '~/components/common/Heading';
import cv from '~/assets/files/cv_inter.pdf';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Item from './Item';

import Html from '~/assets/image/skills/html.png';
import Css from '~/assets/image/skills/css.png';
import Firebase from '~/assets/image/skills/firebase.png';
import Git from '~/assets/image/skills/git.png';
import Bootstrap from '~/assets/image/skills/bootstrap.png';
import Javascript from '~/assets/image/skills/javascript.png';
import Responsive from '~/assets/image/skills/responsive.png';
import Sass from '~/assets/image/skills/sass.png';
import Redux from '~/assets/image/skills/redux.png';
import ReactImg from '~/assets/image/skills/react.png';

import SkillItem from './SkillItem';
import EducationItem from './EductionItem';

function About() {
    const mode = useSelector((state) => state.mote.value);

    return (
        <div>
            <Heading title="About" mainTitle="Me" hiddenTitle="Resume" />
            <div className="flex phone:flex-col max-w-6xl m-auto">
                <div className="w-1/2 text-left phone:w-full phone:mb-5">
                    <h3
                        className={classNames('text-white text-[26px] pb-[22px] font-semibold', {
                            'text-lightText': mode === 'light',
                        })}
                    >
                        PERSONAL INFOS
                    </h3>
                    <ul className="flex flex-wrap">
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">First name: </span>
                            Vo Van
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">Last name: </span>
                            Viet
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">Age: </span>
                            {new Date().getFullYear() - 2002}
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">Gender: </span>
                            Male
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">National: </span>
                            Vietnam
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">Address: </span>
                            Da Nang City
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">Email: </span>
                            vvviet.it@gmail.com
                        </li>
                        <li
                            className={classNames('text-[15px] font-semibold w-1/2 pb-5 text-white', {
                                'text-lightText': mode === 'light',
                            })}
                        >
                            <span className="opacity-80">Facebook: </span>
                            facebook.com/vovanviet.it/
                        </li>
                    </ul>
                    <a
                        href={cv}
                        download
                        className={classNames(
                            'relative group flex items-center border-main border rounded-full h-[50px] w-fit',
                            {
                                'border-lightBg': mode === 'light',
                            },
                        )}
                    >
                        <div
                            className={classNames(
                                'flex absolute top-0 w-[50px] group-hover:w-full left-0 justify-end  rounded-full  bg-main ease-[ease] duration-300 transition-all',
                                { 'bg-lightBg': mode === 'light' },
                            )}
                        >
                            <div className="flex w-[50px] h-[50px] justify-center items-center ">
                                <FontAwesomeIcon
                                    icon={faArrowRight}
                                    size="xl"
                                    className="absolute text-white transition-all ease-out duration-500"
                                />
                            </div>
                        </div>
                        <p
                            className={classNames(
                                'z-50 text-white uppercase font-semibold text-[15px] pl-[64px] pr-8 group-hover:pr-[64px] group-hover:pl-8 ease-[ease] duration-300 transition-all',
                                { 'text-lightText': mode === 'light', 'group-hover:text-white': mode === 'light' },
                            )}
                        >
                            Download CV
                        </p>
                    </a>
                </div>
                <div className="w-1/2 flex flex-wrap phone:w-full">
                    <Item timing={1} name="Years of " keyword="experience" right />
                    <Item timing={1} name="COMPLETED " keyword="projects" left />
                    <Item timing={1} name="AWARD " keyword="WOn" right />
                    <Item timing={1} name="Years of " keyword="experience" left />
                </div>
            </div>
            <div className="w-[40%] mx-auto my-[70px] h-[1px] bg-lightText"></div>
            <div className="max-w-6xl m-auto">
                <h2
                    className={classNames('text-[24px] mb-12 uppercase font-bold text-white', {
                        'text-lightText': mode === 'light',
                    })}
                >
                    My skills
                </h2>
                <div className="flex flex-wrap gap-y-10">
                    <SkillItem image={Html} name="HTML" />
                    <SkillItem image={Css} name="Css" />
                    <SkillItem image={Sass} name="Sass" />
                    <SkillItem image={Javascript} name="Javascript" />
                    <SkillItem image={Bootstrap} name="Bootstrap" />
                    <SkillItem image={Responsive} name="Responsive" />
                    <SkillItem image={ReactImg} name="React" />
                    <SkillItem image={Redux} name="Redux" />
                    <SkillItem image={Git} name="Git" />
                    <SkillItem image={Firebase} name="Firebase" />
                </div>
            </div>
            <div className="w-[40%] mx-auto my-[70px] h-[1px] bg-lightText"></div>
            <div className="max-w-6xl m-auto">
                <h2
                    className={classNames('text-[24px] mb-12 uppercase font-bold text-white', {
                        'text-lightText': mode === 'light',
                    })}
                >
                    Education
                </h2>
                <div className="flex flex-wrap">
                    <EducationItem
                        timing="2017-2020"
                        name="Anh Son II"
                        step="High school"
                        description="This is a beautiful school in the west of Nghe An province. Here I rekindled my passion for science and also brought me to the information technology industry."
                    />
                    <EducationItem
                        timing="2017-2020"
                        name="Vietnam-Korea University "
                        step="information technology"
                        description="The first year is the most difficult time when getting used to new knowledge and teaching methods. But in the end, I overcame with my own efforts."
                    />
                    <EducationItem
                        timing="2017-2020"
                        name="Vietnam-Korea University "
                        step="Data Science & Artificial Intelligence"
                        description="Currently I am majoring in Data Science & Artificial Intelligence, but my orientation is still web developer and I am still on the way to conquer it."
                    />
                </div>
            </div>
        </div>
    );
}

export default About;
