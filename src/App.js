import '~/App.css';
import Sidebar from './components/Sidebar';
import MoteBtn from './components/MoteBtn';
import classNames from 'classnames';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

function App() {
    const mode = useSelector((state) => state.mote.value);

    return (
        <div className={classNames('App bg-dark min-h-screen', { 'bg-white': mode === 'light' })}>
            <MoteBtn />
            <Sidebar />
            <div className="px-[30px] phone:px-[14px] phone:py-16">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
