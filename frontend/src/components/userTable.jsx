import { Table } from '@mantine/core';


function UserTable( { userRecords } ) { 

      let rowNum = 0;
      const rows = userRecords.map((user) => (
          <tr key={user._id}>
            <td className='font-medium'>{++rowNum}</td>
            <td className='font-extralight'>{user.discord}</td>
            <td className='font-extralight'>{user.instagram}</td>
            <td className='font-extralight'>{user.file_name}</td>
          </tr>
        ));

return(<>

    {/* implement mantine Skeleton loading overlay */}

    <div className='userTable'>
        <table>
            <thead>
                <tr className='bg-gradient-to-r from-cyan-500 to-blue-600'>
                    <th>&nbsp;#&nbsp;</th>
                    <th>Discord</th>
                    <th>Instagram</th>
                    <th>File Name</th>
                </tr>
            </thead>
            <tbody>
                {rows}
            </tbody>
        </table>
    </div>

</>)

}


export default UserTable;