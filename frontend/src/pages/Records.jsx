import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Button } from '@mantine/core';
import { IconWheel } from '@tabler/icons-react';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';

function Records() {

    const [toReview, setToReview] = useState(false);
    if (toReview === true) {
      return <Navigate to="/review" />;
    };


    return(<>

    <div className="flex flex-col place-content-evenly space-y-4 p-4 min-h-screen min-w-screen">

        <h1 className="title-style">All Entries</h1>




        <div className="flex flex-col p-4 space-y-4 place-items-center">
            <Button onClick={() => setToReview(true)} size='compact-md' variant='light'>
                Back to Wheel&nbsp;<IconWheel size={18}/>
            </Button>
        </div>

    </div>

    </>)

}


export default Records;