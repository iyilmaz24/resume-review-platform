import { useState } from 'react';
import uploadFileName from '../scripts/fileName';
import FormInput from '../components/formInput';
import { Button } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';
import { Navigate } from "react-router-dom";


function UserForm() {

  const [discordAt, setDiscordAt] = useState("");
  const [instagramAt, setInstagramAt] = useState("");
  const [fileName, setFileName] = useState("No File Selected.");

  const [fileBtnText, setFileBtnText] = useState("Upload Resume");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [pageTitle, setPageTitle] = useState("Upload a Resume");
  const [toHome, setToHome] = useState(false);
  if (toHome === true) {
    return <Navigate to="/" />;
  };

  async function handleSubmit() {
      if(discordAt == "" || instagramAt == "") {
        setErrorMsg( (discordAt == "" ? "Discord" : 
        "Instagram") );
        return;
      };
      setErrorMsg("");

      if(fileName == "No File Selected.") {
        document.getElementById("fileNameDisplay").style.color = "red";
        return;
      }
      document.getElementById("fileNameDisplay").style.color = "";

      
      setIsUploading(true);
      setPageTitle("Thanks!");

      fetch("http://localhost:3001/users")
      .then(res => console.log(res.json()));
        // .then(res => res.json())
        // .then(res => console.log(JSON.stringify(res)));
      
      // if request fails setPageTitle to retry submit and allow re-submission of form
      // setPageTitle("Retry Submission")
      // can also turn setPageTitle text dark red
      setTimeout(() => {setToHome(true)}, 2000)
  }

  return ( <>
      
    <h1 className="title-style">{pageTitle}</h1>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}

    <form className='min-w-screen min-h-fit 
    flex-row place-items-evenly space-y-4 p-4'>
      
        <FormInput defaultText="Discord" eHandler={setDiscordAt} eMsg={errorMsg}/>

        <FormInput defaultText="Instagram" eHandler={setInstagramAt} eMsg={errorMsg}/>

        {/* <h4>{discordAt}</h4>
        <h4>{instagramAt}</h4> */}

        {/* <input type="text" value={discordAt}/>
        <input type="text" value={instagramAt}/> */}

        <label id="file-button" htmlFor="file-upload" className="custom-file-upload">
          {fileBtnText}
        </label>

        <input id="file-upload" type="file" className='hideItem'
              onChange={(e) => uploadFileName(e, setFileName, setFileBtnText)}/>

        <h4 id='fileNameDisplay'>{fileName}</h4>
      
      <div className='p-16'>
        {isUploading === true ?
          <Button id='formButton'
              onClick={handleSubmit} loading>
              Submitting Info
          </Button> :
          <Button id='formButton'
              onClick={handleSubmit} >
              Submit Info&nbsp;<IconSend2 size={18}/>
          </Button> }
      </div>

    </form>

    </> )
}

export default UserForm;