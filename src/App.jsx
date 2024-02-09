
import './App.css'
import '@mantine/core/styles.css';
import '@mantine/dropzone/styles.css';
import { MantineProvider } from '@mantine/core';
import { useRef } from 'react';

import FileDrop from './components/fileDrop';

function App() {

  const fileRef = useRef();

  return ( <>
    <MantineProvider>
    
    <h1>Upload a Resume</h1>

    <input type='file' className='hideItem'></input>
    <FileDrop fileRef={fileRef}/>
    
    
    
    </MantineProvider>
    </> )
}

export default App
