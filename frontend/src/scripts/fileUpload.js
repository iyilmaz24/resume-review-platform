

// this function displays the chosen file's name with passed useState hook
// we also have validation to ensure uploaded file is a PDF


function uploadFileName(event, setFileName, setFileBtnText, setUserFile) {
    if(event.target.files[0].type != 'application/pdf') {
        setFileName("File Must Be PDF!");
        setFileBtnText("Upload Resume");
        document.getElementById("file-button").classList.remove("successBgColor");
        document.getElementById("fileNameDisplay").style.color = "red";
        return;
    } 
    
    document.getElementById("fileNameDisplay").style.color = "";
    let fileName = event.target.files[0].name;
    setFileName(fileName);
    setUserFile(event.target.files[0]);
    setFileBtnText("Upload Successful");

    document.getElementById("file-button").classList.add("successBgColor");
    // alert('The file "' + fileName +  '" has been selected.');
}


export default uploadFileName;
