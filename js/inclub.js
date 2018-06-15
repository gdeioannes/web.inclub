
function changeSubject(val){
    document.getElementById("subject").value=val;
    console.log(document.getElementById("subject").value);
    
    var mailText="mailto:capacitacion@inclub.cl?Subject=*";
    mailText=mailText.replace("*",val)
    document.getElementById("mail-ref").setAttribute('href',mailText);
    
    
}