import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import classNames from 'classnames';

function Button(props) {
    const mode = useSelector((state) => state.mote.value);
    const path = useLocation().pathname;

    return (
        <Link className=" flex items-center" to={props.link}>
            <div
                className={classNames(
                    'group relative hover:bg-main bg-toggle rounded-full w-[50px] h-[50px] z-20 leading-[50px] ease-[ease] duration-300 transition-all',
                    {
                        'bg-main': path === props.link,
                        'bg-lightBg': mode === 'light' && path === props.link,
                        'hover:bg-lightBg bg-lightBg': mode === 'light',
                    },
                )}
            >
                {props.children}
                <p
                    className={classNames(
                        'phone:hidden text-white absolute rounded-3xl top-0 right-0 px-10 font-bold text-[15px] uppercase z-[-1] bg-main opacity-0 group-hover:opacity-100 group-hover:right-2 ease-[ease] duration-300 transition-all',
                        { 'bg-lightBg': mode === 'light' },
                    )}
                >
                    {props.title}
                </p>
            </div>
        </Link>
    );
}

Button.propTypes = {
    title: PropTypes.string,
    link: PropTypes.string,
    children: PropTypes.object.isRequired,
};

Button.defaultProps = {
    title: 'Home',
    link: '/',
};

export default Button;
