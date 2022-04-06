import React from "react";

const History = (props) => {
    console.log(props.history)
    return (
        <div className="card history-card m-1">
            <div className="card-header">Search History</div>
            <div className="card-body history-body">
                {
                    props.history.map( item => (
                        <p key={item[1]}>{item[0]}   {item[1].toString()}</p>
                    ))
                }
            </div>
        </div>
    );
}

export default History;