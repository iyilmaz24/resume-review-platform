
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { MantineProvider } from '@mantine/core';
import { useRef, useState } from 'react';

import FileDrop from './components/fileDrop';
import uploadFileName from './scripts/fileName';

function App() {

  const fileRef = useRef();

  const [fileName, setFileName] = useState("No File Selected.");

  return ( <>
    <MantineProvider>
    
    <h1>Upload a Resume</h1>

    {/* <input type='file' className='hideItem'></input> */}
    {/* <input type='file'></input>
    <FileDrop fileRef={fileRef}/> */}


    <label htmlFor="file-upload" className="custom-file-upload">Add Resume</label>
    <input id="file-upload" type="file" className='hideItem'
        onChange={(e) => uploadFileName(e, setFileName)}/>
    <h4>{fileName}</h4>
    


    
    </MantineProvider>
    </> )
}

export default App
