
function checkPassword() {
    let getcredencials;
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    console.log("Response is here");
    fetch('/checkAdminPassword', {
                method: 'POST',
                headers: {
                    Authorization: 'Bearer abcdxyz',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ 'email':email.value,'password':password.value}),})
        .then((res) => {
            getcredencials = res;
            console.log(res);
            // if (res != undefined) {
                // console.log("Response is ", res);
                if (res.password === password.value) {
                    console.log("Write Password");
                }
                else {
                    console.log("Wrong password");
                    password.style.cssText = `border:1px solid red;`;
                }
            // }
            console.log(getcredencials);
                })
                .catch((e) => console.log(e));
}
console.log(getcredencials);
