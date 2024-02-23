import { Button, Loader } from '@mantine/core';
import { IconWheel } from '@tabler/icons-react';
import UserTable from '../components/userTable';
import '@mantine/core/styles/UnstyledButton.css';
import '@mantine/core/styles/Button.css';


function Records( { navBack, newData, setNewData, userRecords, isLoading, setIsLoading } ) {

    return(<>

    <div className="flex flex-col place-content-evenly space-y-4 p-4 min-h-screen min-w-screen">

        <h1 className="title-style">All Entries</h1>

        <div className="flex flex-col place-items-center overflow-y-scroll overflow-x-scroll" >
            {userRecords.length == 0 || isLoading == true ? <Loader color="blue" type="bars" /> : 
            <UserTable userRecords={userRecords} />}
        </div>

        <Button className='max-w-48 place-self-center defaultButton' onClick={() => {setIsLoading(true);
            (newData == 0) ? setNewData(1) : setNewData(0)}} color="rgb(24, 99, 229)" >
            Refresh Users&nbsp;
        </Button>

        <div className="flex flex-col p-4 space-y-4 place-items-center">
            <Button onClick={() => navBack(false)} size='compact-md' variant='light'>
                Back to Wheel&nbsp;<IconWheel size={18}/>
            </Button>
        </div>

    </div>

    </>)

}


export default Records;