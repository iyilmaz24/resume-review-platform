import { Button } from '@mantine/core';


function FileModal( { setShowResume } ) {


return(<>

    <div className='flex flex-col modalBody'>
        <div className='flex place-self-end'>
            <Button onClick={() => setShowResume(false)} size='compact-md' variant='light'>
                Close
            </Button>
        </div>
        <div className='flex place-self-center'>
            Hello world
        </div>
    </div>

</>)

}


export default FileModal;