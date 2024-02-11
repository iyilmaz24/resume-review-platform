import { useState } from 'react';
import uploadFileName from '../scripts/fileName';
import FormInput from '../components/formInput';
import { Button, Select } from '@mantine/core';
import { IconSend2, IconHomeHeart } from '@tabler/icons-react';
import { Navigate } from "react-router-dom";



function UserForm() {

  const [discordAt, setDiscordAt] = useState("");
  const [instagramAt, setInstagramAt] = useState("");
  const [fileName, setFileName] = useState("No File Selected.");

  const [fileBtnText, setFileBtnText] = useState("Upload Resume");
  const [isUploading, setIsUploading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const [reqType, setReqType] = useState("");

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
      
    <div className="title-style">{pageTitle}</div>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}

    <form className='min-w-screen min-h-fit 
    flex-row place-items-evenly space-y-4 m-8'>
      
        <FormInput defaultText="Discord" eHandler={setDiscordAt} eMsg={errorMsg}/>
        <FormInput defaultText="Instagram" eHandler={setInstagramAt} eMsg={errorMsg}/>

        <Select placeholder="Purpose"
          // make a HTTP get request and populate 'data' below with the possible resume collections 
          data={[{ group: 'Education', items: ['Discord Live Stream'] },
                 { group: 'Paid Private', items: [ {value: 'Vinny', label: 'Vinny', disabled: true}, ]} ]}
          onChange={(_value) => setReqType(_value)} />


        <label id="file-button" htmlFor="file-upload" className="custom-file-upload">
          {fileBtnText}
        </label>
        <input id="file-upload" type="file" className='hideItem'
              onChange={(e) => uploadFileName(e, setFileName, setFileBtnText)}/>

        <h4 id='fileNameDisplay'>{fileName}</h4>
  

      <div className="flex flex-col p-4 space-y-20 place-items-center">
        {isUploading === true ?
          <Button id='formSubmitBtn'
              onClick={handleSubmit} loading>
              Submitting Info
          </Button> :
          <Button id='formSubmitBtn'
              onClick={handleSubmit} >
              Submit Info&nbsp;<IconSend2 size={18}/>
          </Button> }

          <Button onClick={() => setToHome(true)} size='compact-md' variant='light'>
            Home&nbsp;<IconHomeHeart size={18}/>
          </Button>
      </div>
    </form>

    </> )
}

export default UserForm;