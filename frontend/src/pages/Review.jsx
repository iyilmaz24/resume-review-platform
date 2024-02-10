import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Button } from '@mantine/core';
import { IconHomeHeart } from '@tabler/icons-react';

import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';

function Review() {

    const [toHome, setToHome] = useState(false);
    const [toRecord, setToRecords] = useState(false);

    if (toRecord === true) {
      return <Navigate to="/records" />;
    };
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

        <div className="flex flex-row p-4 space-x-4 place-items-center">
            <Button onClick={() => setToHome(true)} size='compact-md' variant='light'>
                Home&nbsp;<IconHomeHeart size={18}/>
            </Button>
            <Button onClick={() => setToRecords(true)} size='compact-md' variant='light'>
                All Entries
            </Button>
        </div>

    </div>

    </>)

}


export default Review;