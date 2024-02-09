

// this function displays the chosen file's name with passed useState hook


function uploadFileName(event, setFileName, setFileBtnText) {
    let fileName = event.target.files[0].name;
    setFileName(fileName);
    setFileBtnText("Upload Successful");

    document.getElementById("file-button").classList.add("successBgColor");
    // alert('The file "' + fileName +  '" has been selected.');
}


export default uploadFileName;
