import { Navigate } from "react-router-dom";
import { useState } from 'react';
import { Button } from '@mantine/core';
import { IconWheel } from '@tabler/icons-react';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';

function Records() {

    const [userRecords, setUserRecords] = useState("");
    const [toReview, setToReview] = useState(false);
    if (toReview === true) {
      return <Navigate to="/review" />;
    };

    function getUsers() {
        fetch("http://localhost:3001/admin/submissions", {
          }).then(res => res.json()).then(res => setUserRecords(res))
    }

    function DisplayUsers() {
        return(<> 
            <div className="flex flex-col p-4 space-y-4 place-items-center max-w-48">
                <ul>
                    {userRecords == "" ? "Request Data Below" : 
                    userRecords.map(item => (<li key={item._id}>{item.file_name}</li>))}
                </ul>
            </div>
        </>)
    }

    return(<>

    <div className="flex flex-col place-content-evenly space-y-4 p-4 min-h-screen min-w-screen">

        <h1 className="title-style">All Entries</h1>

        <DisplayUsers />

        <Button onClick={() => getUsers()} color="rgb(24, 99, 229)" size='compact-md'>
            Get Entries&nbsp;
        </Button>

        <div className="flex flex-col p-4 space-y-4 place-items-center">
            <Button onClick={() => setToReview(true)} size='compact-md' variant='light'>
                Back to Wheel&nbsp;<IconWheel size={18}/>
            </Button>
        </div>

    </div>

    </>)

}


export default Records;