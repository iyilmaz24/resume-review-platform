

// this function displays the chosen file's name with passed useState hook


function uploadFileName(event, setFileName) {
    let fileName = event.target.files[0].name;
    setFileName(fileName);
    // alert('The file "' + fileName +  '" has been selected.');
}


export default uploadFileName;
