import { Button } from '@mantine/core';


function FileModal( { setShowResume, currentResume, blobToPdf, currentBlob } ) {



    return(<>

        <div className='flex flex-col modalBody place-items-center'>
            <div className='flex place-self-end'>
                <Button onClick={() => setShowResume(false)} size='compact-md' variant='light'>
                    Close
                </Button>
            </div>
            <div className='flex flex-row place-items-center min-h-full'>
                {currentResume == null ? 
                (<h1 className="title-style">Spin Wheel First.</h1>)
                : <div className='flex flex-col gap-12'> 
                    <h1 className="title-style">{currentResume}</h1>
                    <button className='defaultButton'>Open In New Tab</button>
                </div>

             }
            </div>


            {/* <iframe className='min-h-full min-w-full' name="resumeFrame">
                {blobToPdf(currentBlob)}
            </iframe> */}

        </div>

</>)

}


export default FileModal;