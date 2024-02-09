import './App.css'
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { MantineProvider } from '@mantine/core';
import { useRef, useState } from 'react';

import FileDrop from './components/fileDrop';
import uploadFileName from './scripts/fileName';
import FormInput from './components/formInput';


import { IconFile } from '@tabler/icons-react';


function App() {

  const fileRef = useRef();

  const [discordAt, setDiscordAt] = useState("");
  const [instagramAt, setInstagramAt] = useState("");

  const [fileName, setFileName] = useState("No File Selected.");
  const [fileBtnText, setFileBtnText] = useState("Upload Resume");

  return ( <>
    <MantineProvider>
      
    <h1 id="upload-page-title" className="title-style">Upload a Resume</h1>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}

    <form action="/submission" method="POST" className='min-w-screen min-h-fit 
    flex-row place-items-evenly space-y-4 p-4'>
      
        <FormInput defaultText="Your Discord" eHandler={setDiscordAt}/>

        <FormInput defaultText="Your Instagram" eHandler={setInstagramAt}/>

        <h4>{discordAt}</h4>
        <h4>{instagramAt}</h4>

        <label id="file-button" htmlFor="file-upload" className="custom-file-upload">
          {fileBtnText}
        </label>

        <input id="file-upload" type="file" className='hideItem'
              onChange={(e) => uploadFileName(e, setFileName, setFileBtnText)}/>

        <h4>{fileName}</h4>

      <button type='submit'>Submit</button>
    </form>


    
    </MantineProvider>
    </> )
}

export default App
