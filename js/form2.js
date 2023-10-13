validate = () =>{ 
    if (document.getElementById('fname').value == '') {
        document.getElementById('error').innerHTML = '!Enter Full Name';
        return false;
    }
    else if(document.getElementById('num').value == ''){
        document.getElementById('error').innerHTML = '!Enter Phone Number';
        return false;
    }
    else if(document.getElementById('mail').value == ''){
        document.getElementById('error').innerHTML = '!Enter Gmail';
        return false;
    }
    else if(document.getElementById('pass').value == ''){
        document.getElementById('error').innerHTML = '!Enter pssword';
        return false;
    }
    else if(document.getElementById('text').value == ''){    
        document.getElementById('error').innerHTML = '!Enter Address';
        return false;
    }
    else if(document.getElementById('file').value == ''){    
        document.getElementById('error').innerHTML = '!Upload Photo';
        return false;
    }
    else{
        document.getElementById('error').innerHTML = '';
       return true;

    }
}

