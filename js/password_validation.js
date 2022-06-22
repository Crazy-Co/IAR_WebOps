function matchPassword(){

    const  inputValue1 = document.getElementById('p1').value;
    const inputValue2 = document.getElementById('p2').value;

    if(inputValue1 == inputValue2){
        // alert("Password created successfully :)");
        return true;
    }

    else{
        alert("Password didn't match :/");
    return false;
    }
}