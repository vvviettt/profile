import classNames from 'classnames';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

function Heading(props) {
    const mode = useSelector((state) => state.mote.value);
    return (
        <div className="relative flex justify-center items-center py-16">
            <p
                className={classNames('text-[60px] phone:text-[35px] font-black text-white uppercase', {
                    'text-lightText': mode === 'light',
                })}
            >
                {props.title}{' '}
                <span className={classNames('text-main', { 'text-lightBg': mode === 'light' })}>{props.mainTitle}</span>
            </p>
            <p
                className={classNames(
                    'absolute uppercase  w-full font-extrabold top-1/2 translate-y-[-50%] text-[110px] phone:text-[65px] leading-[110px] text-title',
                    { 'text-lightTitle': mode === 'light' },
                )}
            >
                {props.hiddenTitle}
            </p>
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    mainTitle: PropTypes.string.isRequired,
    hiddenTitle: PropTypes.string.isRequired,
};

export default Heading;
