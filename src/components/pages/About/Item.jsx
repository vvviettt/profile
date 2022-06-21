import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

function Item(props) {
    const mode = useSelector((state) => state.mote.value);
    return (
        <div className={classNames('w-1/2', { 'pl-1': props.left, 'pr-1': props.right })}>
            <div
                className={classNames(
                    'mb-[30px] pt-5 pr-[30px] pb-[25px] pl-10 text-start border-[0.5px]  border-lightText rounded-md',
                )}
            >
                <div className={classNames('text-main text-[50px] font-bold', { 'text-lightBg': mode === 'light' })}>
                    {props.timing}
                    <FontAwesomeIcon icon={faPlus} className="w-6 font-extrabold" />
                </div>
                <div
                    className={classNames('flex text-white text-[15px] uppercase font-semibold', {
                        'text-lightText': mode === 'light',
                    })}
                >
                    <div className=" flex items-center w-[30%} flex-grow">
                        <div className="w-[50%] h-[2px]  bg-lightText"></div>
                    </div>
                    <p className="w-[70%]">
                        {props.name}
                        <br /> {props.keyword}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Item;
