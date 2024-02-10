import { Navigate } from "react-router-dom";
import { useState } from 'react';


function Review() {

    const [toHome, setToHome] = useState(false);
    if (toHome === true) {
      return <Navigate to="/" />;
    };


    return(<>

    <div className="flex flex-col place-content-evenly space-y-4 p-4 min-h-screen min-w-screen">

        <h1 className="title-style">Resume Wheel</h1>

        <div>
            Resume Wheel

            <button className="defaultButton">Spin</button>
        </div>

        <div className="flex flex-col p-4 space-y-4 place-items-center">
            <button onClick={() => setToHome(true)} className="defaultButton">Home Page</button>
        </div>

    </div>

    </>)

}


export default Review;