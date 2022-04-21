import React, {  useState } from 'react';
import AddClock from './AddClock';
import ClockList from './ClockList';

function Clocks() {

    const [state, setstate] = useState({nameClock: '', timeZone: ''});
    const [clocksArr, setclocksArr] = useState([]);
    const [addClock, setaddClock] = useState(false);

    const handlerChenge = (e) => {
        setstate(prev => ({...prev, [e.target.name]: e.target.value}));
    };

    const onClickClock = () => {
        setclocksArr(prev => ([...prev, {nameClock: state.nameClock, timeZone: state.timeZone}]))
        setstate({nameClock: '', timeZone: ''})
        setaddClock(false)
    };

    const remove = (e) => {
        setclocksArr(prev => ([...prev.filter(itm => itm.nameClock !== e.target.name)]))
    };

    return (
        <div style={{width: '400px', marginLeft: 'auto', marginRight: 'auto'}}>
            <button onClick={() => setaddClock(!addClock)} style={{display: 'block', marginLeft: 'auto', marginRight: 'auto'}}>Добавить часы</button>
            {addClock && <AddClock onClickClock= {onClickClock} handlerChenge = {handlerChenge} nameClock = {state.nameClock} timeZone ={state.timeZone}/>}
            {clocksArr.length > 0 && <h2>Часы</h2>}
            <ClockList list = {clocksArr} remove = {remove}/>
        </div>
    );
};

export default Clocks;
