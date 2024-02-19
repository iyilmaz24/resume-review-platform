import { useState } from 'react';
import uploadFileName from '../scripts/fileUpload';
import FormInput from '../components/formInput';
import { Button, Select, LoadingOverlay } from '@mantine/core';
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
  const [userFile, setUserFile] = useState();

  const [toHome, setToHome] = useState(false);
  if (toHome === true) {
    return <Navigate to="/" />;
  };


  async function handleSubmit() {

      if(discordAt == "" || instagramAt == "") {
        setErrorMsg( (discordAt == "" ? "Discord" : 
        "Instagram") );
        return;
      } setErrorMsg("");

      if(reqType == "" || reqType == "empty"){
        setReqType("empty");
        return;
      }

      if(fileName == "No File Selected." || fileName == "File Must Be PDF!") {
        document.getElementById("fileNameDisplay").style.color = "red";
        return;
      } document.getElementById("fileNameDisplay").style.color = "";
      
      setIsUploading(true);

      const formData = new FormData();
      formData.append("instagram", instagramAt);
      formData.append("discord", discordAt);
      formData.append("fileName", fileName);
      formData.append("group", reqType);

      const pdfBlob = new Blob([userFile], { type: "application/pdf" });
      formData.append("file", pdfBlob);

      fetch("http://localhost:3001/users/submission", {
        method: 'POST',
        // headers: {
          // accept: 'application.json',
          // 'Content-Type': 'multipart/form-data'
        // },
        body: formData,
        // cache: 'default'
      })
      // .then(res => console.log(res.text()))

      // if request fails setPageTitle to retry submit and allow re-submission of form
      // setPageTitle("Retry Submission")
      // can also turn setPageTitle text dark red
      setTimeout(() => {setToHome(true)}, 2000)
  }

  return ( <>
    
    <div className="title-style mt-16">{isUploading ? "Resume Submitted!" : "Upload a Resume"}
        <LoadingOverlay visible={isUploading}
            zIndex={1000}
            overlayProps={{ radius: 'sm', blur: 1 }}
            loaderProps={{ color: 'blue', type: 'dots' }}
          />
    </div>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}

    <form className='min-w-screen min-h-fit 
    flex-row place-items-evenly space-y-4 m-8'>


        <FormInput defaultText="Discord" eHandler={setDiscordAt} eMsg={errorMsg}/>
        <FormInput defaultText="Instagram" eHandler={setInstagramAt} eMsg={errorMsg}/>

        {reqType == "empty" ?
        <Select placeholder="Purpose"
          data={[{ group: 'Education', items: ['Discord Live Stream'] },
                 { group: 'Paid Private', items: [ {value: 'Vinny', label: 'Vinny', disabled: true}, ]} ]}
          onChange={(_value) => setReqType(_value)} allowDeselect={false} error/> :
          <Select placeholder="Purpose"
          data={[{ group: 'Education', items: ['Discord Live Stream'] },
                 { group: 'Paid Private', items: [ {value: 'Vinny', label: 'Vinny', disabled: true}, ]} ]}
          onChange={(_value) => setReqType(_value)} allowDeselect={false}/>
        }

        <label id="file-button" htmlFor="file-upload" className="custom-file-upload">
          {fileBtnText}
        </label>
        <input id="file-upload" type="file" className='hideItem'
              onChange={(e) => uploadFileName(e, setFileName, setFileBtnText, setUserFile)}/>

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


    <header className="pageHeader min-h-12 bg-gradient-to-r from-blue-500 to-cyan-500 ">
      {/* insert links, socials, etc. */}
    </header>

    <footer className="pageFooter min-h-12 bg-gradient-to-r from-cyan-500 to-blue-500">
      {/* insert links, socials, etc. */}
    </footer>


    </> )
}

export default UserForm;