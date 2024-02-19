import { Navigate } from "react-router-dom";
import { useState } from 'react';


function Home() {

    const [toReview, setToReview] = useState(false);
    const [toForm, setToForm] = useState(false);

    if (toReview === true) {
      return <Navigate to="/review" />;
    };
    if (toForm === true) {
      return <Navigate to="/form" />;
    };


    return (<>
    
    <div className="flex flex-col place-content-center space-y-4 p-4">

        <h1 className="title-style">Welcome to ResuShare.io</h1>
        
        <div className="place-self-center text-center max-w-72">
            Seamlessly upload your professional credentials, 
            and let our platform do the rest. Our user-friendly interface 
            ensures a hassle-free experience, no strings attached.
        </div>

        <div className="flex flex-col p-4 space-y-4 place-items-center">
            <button onClick={() => setToForm(true)} className="defaultButton">Submit a Resume</button>
            <button onClick={() => setToReview(true)} className="defaultButton">Conduct Review</button>
        </div>

    </div>


    <header className="pageHeader min-h-12 bg-gradient-to-r from-blue-500 to-cyan-500 ">
      {/* insert links, socials, etc. */}
    </header>

    <footer className="pageFooter min-h-12 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* insert links, socials, etc. */}
    </footer>

    </>)
}

export default Home;