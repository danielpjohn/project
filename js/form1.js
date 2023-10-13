validate = () => {
    console.log();
        document.getElementById('error').innerHTML = '';
        if (document.getElementById('fname').value == '') {
            document.getElementById('error').innerHTML = '!Enter Full Name';
        }
        else if(document.getElementById('num').value == ''){
            document.getElementById('error').innerHTML = '!Enter Phone Number';
        }
        else if(document.getElementById('mail').value == ''){
            document.getElementById('error').innerHTML = '!Enter Gmail';
        }
        else if(document.getElementById('pass').value == ''){
            document.getElementById('error').innerHTML = '!Enter pssword';
        }
        else if(document.getElementById('text').value == ''){    
            document.getElementById('error').innerHTML = '!Enter Address';
        }
        else if(document.getElementById('file').value == ''){    
            document.getElementById('error').innerHTML = '!Upload Photo';
        }
        else{   
            document.getElementById('form').submit();
    
        }
    }