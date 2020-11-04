document.getElementById("mainForm").onsubmit = function (event) {
    event.preventDefault();

    let obj = {}
    for (let i = 0; i < event.target.length - 1; i++) {
        if (event.target[i].name == "gendr"){
            if (document.getElementById('gendrm').checked == true){
                obj[event.target[i].name] = "male";
            }
            else{
                obj[event.target[i].name] = "female";
            }
        }
        if (event.target[i].name == "hobby"){
            if (document.getElementById('hobby1').checked == true){
                obj[event.target[i].name] += "Swimming, ";
            }
            if (document.getElementById('hobby2').checked == true){
                obj[event.target[i].name] += "Reading, ";
            }
            if (document.getElementById('hobby3').checked == true){
                obj[event.target[i].name] += "Cycling, ";
            }
            if (document.getElementById('hobby4').checked == true){
                obj[event.target[i].name] += "Listening to music, ";
            }
            if (document.getElementById('hobby5').checked == true){
                obj[event.target[i].name] += "Walking, ";
            }
            break;
        }
        else {
            obj[event.target[i].name] = event.target[i].value;
        }
    }
    let json = JSON.stringify(obj)

    localStorage.setItem('data', json)
    console.log(obj)


    document.getElementById('surname').value = reverseString(document.getElementById("surname").value);
    document.getElementById('name').value = reverseString(document.getElementById("name").value);
    document.getElementById('ot').value = reverseString(document.getElementById("ot").value);
    document.getElementById('login').value = reverseString(document.getElementById("login").value);
    document.getElementById('password').value = "";
    document.getElementById('password2').value = "";
    document.getElementById('birth').value = reverseString(document.getElementById("birth").value);
    document.getElementById('age').value = reverseString(document.getElementById("age").value);
    document.getElementById('email').value = reverseString(document.getElementById("email").value);
    if (document.getElementById('gendrm').checked == true){
        document.getElementById('gendrm').checked = false;
        document.getElementById('gendrf').checked = true;
    }
    else{
        document.getElementById('gendrm').checked = true;
        document.getElementById('gendrf').checked = false;
    }

    if (document.getElementById('hobby1').checked == true){
        document.getElementById('hobby1').checked = false;
    }
    else{
        document.getElementById('hobby1').checked = true;
    }

    if (document.getElementById('hobby2').checked == true){
        document.getElementById('hobby2').checked = false;
    }
    else{
        document.getElementById('hobby2').checked = true;
    }
    if (document.getElementById('hobby3').checked == true){
        document.getElementById('hobby3').checked = false;
    }
    else{
        document.getElementById('hobby3').checked = true;
    }
    if (document.getElementById('hobby4').checked == true){
        document.getElementById('hobby4').checked = false;
    }
    else{
        document.getElementById('hobby4').checked = true;
    }
    if (document.getElementById('hobby5').checked == true){
        document.getElementById('hobby5').checked = false;
    }
    else{
        document.getElementById('hobby5').checked = true;
    }
}



function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}