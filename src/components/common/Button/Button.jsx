import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

function Button(props) {
    const mode = useSelector((state) => state.mote.value);
    return (
        <Link
            download={props.download}
            file={props.file}
            to={props.href}
            className={classNames('relative group flex items-center border-main border rounded-full h-[50px] w-fit', {
                'border-lightBg': mode === 'light',
            })}
            onClick={props.handle}
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
                    'z-40 phone:z-10 text-white uppercase font-semibold text-[15px] pl-[64px] pr-8 group-hover:pr-[64px] group-hover:pl-8 ease-[ease] duration-300 transition-all ',
                    { 'text-lightText': mode === 'light', 'group-hover:text-white': mode === 'light' },
                )}
            >
                {props.title}
            </p>
        </Link>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    href: PropTypes.string,
    handle: PropTypes.func,
};

Button.defaultProps = {
    title: 'Home',
    handle: () => {},
};

export default Button;
