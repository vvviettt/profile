import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import { useSelector } from 'react-redux';

function EducationItem(props) {
    const mode = useSelector((state) => state.mote.value);
    return (
        <div className="w-1/2 pr-2 mb-8 phone:w-full">
            <div className="flex overflow-">
                <div
                    className={classNames(' w-[60px] flex-grow flex-none border-r-2 border-toggle', {
                        'border-lightText opacity-60': mode === 'light',
                    })}
                >
                    <div
                        className={classNames(
                            'relative w-10 h-10 rounded-full z-[2] bg-main flex items-center justify-center',
                            {
                                'bg-lightBg': mode === 'light',
                            },
                        )}
                    >
                        <FontAwesomeIcon
                            icon={faBriefcase}
                            className={classNames('text-white z-50', { 'text-lightText': mode === 'light' })}
                        />
                    </div>
                </div>
                <div className={classNames('text-left text-white pl-3', { 'text-lightText': mode === 'light' })}>
                    <span
                        className={classNames(
                            'bg-toggle px-[10px] py-[1px] rounded-full text-[12px] mb-3 inline-block',
                            {},
                        )}
                    >
                        {props.timing}
                    </span>
                    <h3 className={classNames('flex text-[16px] font-semibold uppercase mb-[10px]')}>
                        {props.name}
                        <div
                            className={classNames('w-[10px] h-[2px] bg-white opacity-70 my-auto mx-2', {
                                'bg-lightText': mode === 'light',
                            })}
                        ></div>
                        <span className="text-[15px] opacity-70">{props.step}</span>
                    </h3>
                    <p className="text-[14px]">{props.description}</p>
                </div>
            </div>
        </div>
    );
}

export default EducationItem;
