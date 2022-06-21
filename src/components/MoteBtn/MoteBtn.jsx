import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { updateMote } from '~/redux/slices/moteSlice';

function MoteBtn() {
    const mote = useSelector((state) => state.mote.value);
    const dispatch = useDispatch();
    return (
        <div className=" z-10 fixed right-4 top-2">
            <button
                onClick={() => {
                    dispatch(updateMote());
                }}
                className="bg-toggle relative w-[50px] h-[50px] flex items-center justify-center rounded-full"
            >
                <FontAwesomeIcon
                    opacity={mote === 'light' ? 1 : 0}
                    size="xl"
                    className="absolute text-white transition-all ease-out duration-500"
                    icon={faMoon}
                />
                <FontAwesomeIcon
                    opacity={mote === 'light' ? 0 : 1}
                    size="xl"
                    className="text-white transition-all ease-out duration-500"
                    icon={faLightbulb}
                />
            </button>
        </div>
    );
}

export default MoteBtn;
