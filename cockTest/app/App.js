import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BottomTabs from './modules/navigation/bottomTab';
import LaunchScreen from './views/launchScreen/index';
import { runWatcher } from './views/launchScreen/saga/actions';

const App = () => {

    const dispatch = useDispatch();
    const launchEnd = useSelector(state => state.reducerLaunch.launchEnd);
       
    useEffect(() => {
        dispatch(runWatcher());  
    }, []);

    return (
        <>
        {launchEnd ? <LaunchScreen/> : <BottomTabs/>}
        </>
    )
}


export default App;