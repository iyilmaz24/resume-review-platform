import { Button } from '@mantine/core';


function FileModal( { setShowResume, currentResume } ) {


return(<>

    <div className='flex flex-col modalBody'>
        <div className='flex place-self-end'>
            <Button onClick={() => setShowResume(false)} size='compact-md' variant='light'>
                Close
            </Button>
        </div>
        <div className='flex place-self-center'>
            {currentResume == null ? 
            (<h1 className="title-style">Spin Wheel First.</h1>)
            : currentResume }
        </div>
    </div>

</>)

}


export default FileModal;