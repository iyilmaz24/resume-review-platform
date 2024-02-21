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
    const [userRecords, setUserRecords] = useState([]);
    const [currentResume, setCurrentResume] = useState(null);
    const [currentBlob, setCurrentBlob] = useState(null);
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

    // useRef hook to be passed as prop for resumeWheel component
    const spinDeg = useRef(Math.ceil(Math.random() * 3000));

    // if (toRecord === true) {
    //   return <Navigate to="/records" />;
    // };
    if (toHome === true) {
      return <Navigate to="/" />;
    };

    function chooseResume() {
        const choice = Math.floor(Math.random() * userRecords.length);
        setCurrentResume(userRecords[choice].file_name);
        // console.log(choice)
        // console.log(userRecords[choice].file_name)

        const pdf = new Blob([new Uint8Array(userRecords[choice].fileBuffer.data).buffer], { type: 'application/pdf' });
        setCurrentBlob(pdf);

    }


    function blobToPdf(pdf, fileName="pdfName") {
        try {
            const url = window.URL.createObjectURL(pdf);
            const link = document.createElement('a');
            if (link.download !== undefined) { 
                link.setAttribute('href', url);
                // link.setAttribute('download', fileName);    
                link.setAttribute('target', '_blank');  
                // link.style.visibility = 'hidden';
                // document.body.appendChild(link);
                link.click();
                // document.body.removeChild(link);
            }
        } catch (e) {
            console.error('BlobToSaveAs error', e);
        }
    }
    

    return(<>

    {toRecord == true ? <Records navBack={setToRecords} newData={newData} setNewData={setNewData} 
    userRecords={userRecords} isLoading={isLoading} setIsLoading={setIsLoading}/> : 

    <div className="flex flex-col place-content-evenly gap-12 max-h-screen max-w-screen">

        <h1 className="title-style">Resume Wheel</h1>

        <div>
            <ResumeWheel spinDeg={spinDeg} chooseResume={chooseResume} setShowResume={setShowResume}/>
        </div>

        {(showResume == true ? 
        <div className="bg">
            <FileModal setShowResume={setShowResume} currentResume={currentResume} 
            blobToPdf={blobToPdf} currentBlob={currentBlob} />
        </div> 
        : 
        <div className="hidden">
            <FileModal setShowResume={setShowResume} currentResume={currentResume} 
            blobToPdf={blobToPdf} currentBlob={currentBlob} />
        </div>  )}

        <div className="flex flex-row p-4 space-x-4 place-content-evenly">
            <Button onClick={() => setToHome(true)} size='compact-md' variant='light'>
                Home&nbsp;<IconHomeHeart size={18}/>
            </Button>
            <Button onClick={() => setToRecords(true)} size='compact-md' variant='light'>
                All Entries
            </Button>
        </div>

    </div>
    }
    
    <header className="pageHeader min-h-6 bg-gradient-to-r from-blue-600 to-cyan-500 ">
      {/* insert links, socials, etc. */}
    </header>

    <footer className="pageFooter min-h-6 bg-gradient-to-r from-cyan-600 to-blue-600">
      {/* insert links, socials, etc. */}
    </footer>

    </>)

}


export default Review;