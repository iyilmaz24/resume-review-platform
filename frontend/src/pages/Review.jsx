import { Navigate } from "react-router-dom";
import { useState, useRef, useEffect } from 'react';
import { Button } from '@mantine/core';
import { IconHomeHeart } from '@tabler/icons-react';
import ResumeWheel from "../components/resumeWheel";
import Records from "./Records";
import FileModal from "../components/fileModal";
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';



function Review() {

    const [toHome, setToHome] = useState(false);
    const [toRecord, setToRecords] = useState(false);
    const [newData, setNewData] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [userRecords, setUserRecords] = useState("");
    const [currentResume, setCurrentResume] = useState();
    const [showResume, setShowResume] = useState(false);

    useEffect(() => {
        getUsers();
    }, [newData]);

    function getUsers() {
        setIsLoading(true);

        fetch("http://localhost:3001/admin/submissions", {
          }).then(res => res.json()).then(res => setUserRecords(res))

        setIsLoading(false);
    }

    const spinDeg = useRef(Math.ceil(Math.random() * 3000));

    // if (toRecord === true) {
    //   return <Navigate to="/records" />;
    // };
    if (toHome === true) {
      return <Navigate to="/" />;
    };

    function chooseResume() {
        const resumeList = ["resume1", "resume2", "resume3", "resume4"];
        const choice = Math.floor(Math.random() * resumeList.length);

        console.log(resumeList[choice]);
        setCurrentResume(resumeList[choice]);
    };
    

    return(<>

    {toRecord == true ? <Records navBack={setToRecords} newData={newData} setNewData={setNewData} 
    userRecords={userRecords} isLoading={isLoading} setIsLoading={setIsLoading}/> : 

    <div className="flex flex-col place-content-evenly gap-12 max-h-screen max-w-screen">

        <h1 className="title-style">Resume Wheel</h1>

        <div>
            <ResumeWheel spinDeg={spinDeg} chooseResume={chooseResume}/>
        </div>



        <FileModal />



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