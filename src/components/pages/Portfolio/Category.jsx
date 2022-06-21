import classNames from 'classnames';
import propTypes from 'prop-types';

function Category(props) {
    return (
        <div
            onClick={props.handle}
            className={classNames(
                'cursor-pointer hover:bg-main mx-2 py-2 px-3 text-[14px] capitalize font-semibold text-white bg-toggle rounded-[10px] ease-[ease] duration-300 transition-all',
                { 'bg-main': props.active },
            )}
        >
            {props.name}
        </div>
    );
}

Category.propTypes = {
    name: propTypes.string.isRequired,
    handle: propTypes.func,
};

export default Category;
