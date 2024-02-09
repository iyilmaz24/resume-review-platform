

import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';


function FormInput( { defaultText, eHandler} ) {

    return (

        <TextInput size='sm' placeholder={defaultText}
        onChange={(e) => eHandler(e.currentTarget.value)} 
        leftSection={<IconAt size={16} required />} />

    );
  }


export default FormInput;