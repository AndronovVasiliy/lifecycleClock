import React from 'react';

function AddClock(props) {


    const hendlerOnChenge = (e) => {
        props.handlerChenge(e)
    };

    const onSubmit = (e) => {
        e.preventDefault();
        props.onClickClock();
    };

    return (
        <form onSubmit={onSubmit}>
            <div style={{width: '400px', display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
                <span >Название: </span><input onChange={hendlerOnChenge} name='nameClock' value={props.nameClock} />
            </div>
            <div style={{width: '400px', display: 'flex', justifyContent: 'space-between', marginTop: '5px'}}>
                <span>Плюс к вашему времени: </span><input onChange={hendlerOnChenge} name='timeZone' value={props.timeZone} />
            </div>
            <div>
                <button style={{display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: '5px'}}>Add Clock</button>
            </div>
        </form>
    );
}

export default AddClock;
