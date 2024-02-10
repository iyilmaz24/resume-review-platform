import { useState } from 'react';
import uploadFileName from '../scripts/fileName';
import FormInput from '../components/formInput';



import { Link } from 'react-router-dom';
import { Button } from '@mantine/core';
import { IconSend2 } from '@tabler/icons-react';

function UserForm() {

  const [discordAt, setDiscordAt] = useState("");
  const [instagramAt, setInstagramAt] = useState("");

  const [fileName, setFileName] = useState("No File Selected.");
  const [fileBtnText, setFileBtnText] = useState("Upload Resume");

  const [isUploading, setIsUploading] = useState(false);

  async function handleSubmit() {
      setIsUploading(true);
      fetch("http://localhost:3001/users")
      .then(res => console.log(res.json()));
        // .then(res => res.json())
        // .then(res => console.log(JSON.stringify(res)));
  }

  return ( <>
      
    <h1 className="title-style">Upload a Resume</h1>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}

    <form className='min-w-screen min-h-fit 
    flex-row place-items-evenly space-y-4 p-4'>
      
        <FormInput defaultText="Your Discord" eHandler={setDiscordAt}/>

        <FormInput defaultText="Your Instagram" eHandler={setInstagramAt}/>

        {/* <h4>{discordAt}</h4>
        <h4>{instagramAt}</h4> */}

        {/* <input type="text" value={discordAt}/>
        <input type="text" value={instagramAt}/> */}

        <label id="file-button" htmlFor="file-upload" className="custom-file-upload">
          {fileBtnText}
        </label>

        <input id="file-upload" type="file" className='hideItem'
              onChange={(e) => uploadFileName(e, setFileName, setFileBtnText)}/>

        <h4>{fileName}</h4>
      
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