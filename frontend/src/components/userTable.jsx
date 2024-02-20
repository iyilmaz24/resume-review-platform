import { Table } from '@mantine/core';


function UserTable( { userRecords } ) { 

    let rowNum = 0;
    const rows = userRecords.map((user) => (
        <Table.Tr key={user._id}>
          <Table.Td>{++rowNum}</Table.Td>
          <Table.Td>{user.discord}</Table.Td>
          <Table.Td>{user.instagram}</Table.Td>
          <Table.Td>{user.file_name}</Table.Td>
        </Table.Tr>
      ));

return(<>

    {/* implement mantine Skeleton loading overlay */}

    <div className='userTable'>

      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>&nbsp;#&nbsp;</Table.Th>
            <Table.Th>Discord</Table.Th>
            <Table.Th>Instagram</Table.Th>
            <Table.Th>File Name</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>

    </div>


</>)

}


export default UserTable;