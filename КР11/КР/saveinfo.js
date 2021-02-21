document.getElementById("mainForm").onsubmit = function (event) {
    event.preventDefault();

    console.log(event)

    let obj = {}
    for (let i = 0; i < event.target.length - 1; i++) {
        obj[event.target[i].name] = event.target[i].value;
        
    }
    document.getElementById('surname').value = reverseString(document.getElementById("surname").value);
    document.getElementById('name').value = reverseString(document.getElementById("name").value);
    document.getElementById('ot').value = reverseString(document.getElementById("ot").value);
    document.getElementById('login').value = reverseString(document.getElementById("login").value);
    document.getElementById('password').value = reverseString(document.getElementById("password").value);
    document.getElementById('birth').value = reverseString(document.getElementById("birth").value);
    document.getElementById('age').value = reverseString(document.getElementById("age").value);
    document.getElementById('email').value = reverseString(document.getElementById("email").value);
    document.getElementById('gengr').value = reverseString(document.getElementById("gengr").value);
    document.getElementById('hobby1').value = reverseString(document.getElementById("hobby1").value);
    document.getElementById('hobby2').value = reverseString(document.getElementById("hobby2").value);
    document.getElementById('hobby3').value = reverseString(document.getElementById("hobby3").value);
    document.getElementById('hobby4').value = reverseString(document.getElementById("hobby4").value);
    document.getElementById('hobby5').value = reverseString(document.getElementById("hobby5").value);
    console.log(obj)

    let json = JSON.stringify(obj)

    localStorage.setItem('data', json)

}

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
