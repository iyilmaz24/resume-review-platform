import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';


function FormInput( { defaultText } ) {
    return (

        <TextInput size='sm' placeholder={defaultText} leftSection={<IconAt size={16} required />} />

    );
  }



export default FormInput;