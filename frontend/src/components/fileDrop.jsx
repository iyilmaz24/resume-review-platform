import { useRef } from 'react';
import { Button, Group, defaultOptionsFilter } from '@mantine/core';
import { Dropzone } from '@mantine/dropzone';



function FileDrop( { fileRef }) {
  const openRef = useRef(fileRef);

  return (
    <Dropzone openRef={openRef} onDrop={() => {}} activateOnClick={false}>
      <Group justify="center">
        <Button onClick={() => openRef.current?.()} style={{ pointerEvents: 'all' }}>
          Select files
        </Button>
      </Group>
    </Dropzone>
  );
}

export default FileDrop