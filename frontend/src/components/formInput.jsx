import { IconAt } from '@tabler/icons-react';
import { TextInput } from '@mantine/core';


function FormInput( { defaultText, eHandler, eMsg} ) {

    return (

        (defaultText == eMsg) ?
          <TextInput size='sm' placeholder={"Invalid " + defaultText}
          onChange={(e) => eHandler(e.currentTarget.value)} 
          leftSection={<IconAt size={16} required />} error/>
        :
          <TextInput size='sm' placeholder={"Your " + defaultText}
          onChange={(e) => eHandler(e.currentTarget.value)}
          leftSection={<IconAt size={16} required />} />


    );
  }


export default FormInput;