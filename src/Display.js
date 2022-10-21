import React from "react";

// 1 rem = 16px

const Display = (props) => {
    const { personData } = props;//destructuring 

    // Ternaty Operator
    const personList = (personData.length) ? (personData.map((info => {
        return (
            <div className="card" style={{ width: "200px" }} key={info.contact}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{info.firstName}</h5>
                    <p className="card-text">{info.age}</p>
                    <a href="#" className="btn btn-primary">Display Data</a>
                </div>
            </div>
        )
    }))) : (<></>)

    return (
        <>
            {personList}
        </>
    )
}
export default Display;