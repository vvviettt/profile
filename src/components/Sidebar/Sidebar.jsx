import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBriefcase, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

function Sidebar() {
    const mode = useSelector((state) => state.mote.value);

    return (
        <div className="fixed right-4 z-50 top-1/2 translate-y-[-50%] phone:bottom-0 phone:right-0 phone:left-0 phone:top-auto phone:translate-y-0 phone:bg-[#2b2a2a]">
            <ul className="phone:flex phone:justify-around">
                <li className="my-5 phone:my-1">
                    <Button
                        title="Home"
                        link="/"
                        children={
                            <FontAwesomeIcon
                                icon={faHome}
                                size="lg"
                                className={classNames('text-white z-50', {
                                    'text-lightText phone:text-white': mode === 'light',
                                })}
                            />
                        }
                    />
                </li>
                <li className="my-5 phone:my-1">
                    <Button
                        title="Portfolio"
                        link="/portfolio"
                        children={
                            <FontAwesomeIcon
                                icon={faBriefcase}
                                size="lg"
                                className={classNames('text-white z-50 ', {
                                    'text-lightText phone:text-white': mode === 'light',
                                })}
                            />
                        }
                    />
                </li>
                <li className="my-5 phone:my-1">
                    <Button
                        title="About"
                        link="/about"
                        children={
                            <FontAwesomeIcon
                                icon={faUser}
                                size="lg"
                                className={classNames('text-white z-50', {
                                    'text-lightText phone:text-white': mode === 'light',
                                })}
                            />
                        }
                    />
                </li>
                <li className="my-5 phone:my-1">
                    <Button
                        title="Contact"
                        link="/contact"
                        children={
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                size="lg"
                                className={classNames('text-white z-50', {
                                    'text-lightText phone:text-white': mode === 'light',
                                })}
                            />
                        }
                    />
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
