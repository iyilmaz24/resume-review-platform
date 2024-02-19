import { Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { Button } from '@mantine/core';
import { IconHomeHeart } from '@tabler/icons-react';
import ResumeWheel from "../components/resumeWheel";

import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';
import Records from "./Records";


function Review() {

    const [toHome, setToHome] = useState(false);
    const [toRecord, setToRecords] = useState(false);
    const [newData, setNewData] = useState(0);
    const [userRecords, setUserRecords] = useState("");

    useEffect(() => {
        getUsers();
    }, [newData]);

    function getUsers() {
        fetch("http://localhost:3001/admin/submissions", {
          }).then(res => res.json()).then(res => setUserRecords(res))
    }

    const spinDeg = useRef(Math.ceil(Math.random() * 3000));

    // if (toRecord === true) {
    //   return <Navigate to="/records" />;
    // };
    if (toHome === true) {
      return <Navigate to="/" />;
    };
    

    return(<>

    {toRecord == true ? <Records navBack={setToRecords} newData={newData} setNewData={setNewData} userRecords={userRecords}/> : 

    <div className="flex flex-col place-content-evenly gap-12 max-h-screen max-w-screen">

        <h1 className="title-style">Resume Wheel</h1>

        <div>
            <ResumeWheel spinDeg={spinDeg}/>
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
    }
    </>)

}


export default Review;