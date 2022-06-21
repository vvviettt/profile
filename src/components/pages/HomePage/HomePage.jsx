import { useSelector } from 'react-redux';
import Button from '../../common/Button';
import classNames from 'classnames';

function HomePage() {
    const mode = useSelector((state) => state.mote.value);

    return (
        <div className=" h-screen phone:h-auto">
            <div
                className={classNames(
                    'z-10 fixed  left-[-80px] w-[400px]  h-[200%] translate-y-[-10%] bg-main rotate-[-15deg] phone:hidden',
                    { 'bg-lightBg': mode === 'light' },
                )}
            ></div>

            <div className="flex h-full phone:flex-col ">
                <div className="flex items-center h-full w-1/3 px-8 phone:w-full phone:justify-center">
                    <div className=" z-20 bg-me w-full aspect-7/10 bg-no-repeat bg-cover rounded-2xl phone:w-[230px] phone:h-[230px] phone:aspect-[10/10] phone:rounded-full"></div>
                </div>
                <div className="flex flex-col justify-center h-full w-2/3 px-16 pr-28 phone:w-full  phone:px-0">
                    <div className="flex justify-center">
                        <div
                            className={classNames('h-[5px] mt-8 w-10 mr-5 bg-main rounded-full phone:hidden', {
                                'bg-lightBg': mode === 'light',
                            })}
                        ></div>
                        <div className="text-justify phone:flex phone:items-center phone:flex-col phone:my-4">
                            <p
                                className={classNames(
                                    'text-main font-bold text-[50px] leading-[62px] phone:text-[26px] phone:leading-none',
                                    {
                                        'text-lightBg': mode === 'light',
                                    },
                                )}
                            >
                                I'm Vo Van Viet
                            </p>
                            <p
                                className={classNames(
                                    'text-white font-bold text-[50px] leading-[62px] phone:text-[26px] phone:leading-none',
                                    {
                                        'text-lightText': mode === 'light',
                                    },
                                )}
                            >
                                Website Developer
                            </p>
                        </div>
                    </div>
                    <div className="">
                        <p
                            className={classNames(
                                'text-white text-left text-[16px] leading-[35px] mt-4 phone:leading-7 phone:text-[14px] phone:text-center',
                                {
                                    'text-lightText': mode === 'light',
                                },
                            )}
                        >
                            Hello everyone! I'm Viet, currently a 2nd year student at Vietnam-Korea University of
                            information and communication technology in Da Nang city. My chance to come to IT is thanks
                            to the stories "IT is the king of professions", or the story "the younger brother studied
                            University of science and technology mechanics born in 1996". In April 2021, I started
                            approaching the website development platform and so far I have had a few small projects.
                        </p>
                    </div>
                    <div className="flex justify-start mt-9 phone:justify-center">
                        <Button href="/portfolio" title="Portfolio" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
