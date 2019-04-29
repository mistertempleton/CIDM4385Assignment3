import React from 'react';

const JumbotronComponent = (props) => {

    return (
        <div className="jumbotron jumbotron-fluid text-center">
            <h1 className="display-4">{props.app_name}!</h1>
            <p className="lead">Cheap Pizza. Fast.</p>
            <p>{props.order_date.toDateString()}</p>
        </div>
    );    
}

export default JumbotronComponent;