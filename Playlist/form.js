document.getElementById("mainForm").onsubmit = function (event) {
    event.preventDefault();

    console.log(event)

    let obj = {}

    for (let i = 0; i < event.target.length; i++) {
        obj[event.target[i].name] = event.target[i].value;
    }

    console.log(obj)

    let json = JSON.stringify(obj)

    localStorage.setItem('dat', json)
}

window.onload = function () {
    if (localStorage.getItem('dat')) {
        let array = [
            "login",
            "password",
        ]
        let json = localStorage.getItem('dat')
    }
}