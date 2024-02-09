import './App.css'
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { MantineProvider } from '@mantine/core';
import { useRef, useState } from 'react';

import FileDrop from './components/fileDrop';
import uploadFileName from './scripts/fileName';
import FormInput from './components/formInput';


function App() {

  const fileRef = useRef();

  const [fileName, setFileName] = useState("No File Selected.");
  const [fileBtnText, setFileBtnText] = useState("Upload Resume");

  return ( <>
    <MantineProvider>
    
    <h1 id="upload-page-title">Upload a Resume</h1>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}

    <FormInput defaultText="Your Discord" />
    
    <FormInput defaultText="Your Instagram" />


    <label id="file-button" htmlFor="file-upload" className="custom-file-upload">
          {fileBtnText}</label>

    <input id="file-upload" type="file" className='hideItem'
          onChange={(e) => uploadFileName(e, setFileName, setFileBtnText)}/>

    <h4>{fileName}</h4>
    


    
    </MantineProvider>
    </> )
}

export default App
