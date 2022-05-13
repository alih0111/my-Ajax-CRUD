const getBtn = document.querySelector(".get-data");
const postBtn = document.querySelector(".post-data");

function getData() {
    axios
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then((response) => {
        //         // console.log(response)
        //         return response.json();
        //     })
        //     .then((data) => console.log(data));
        .get("https://jsonplaceholder.typicode.com/users")
        .then((res) => console.log(res.data));
}

function postData() {
    const userData = {
        id: 1,
        name: "ali",
        username: "ali hey",
        email: "ali@ex.com",
    };
    axios
        // fetch("https://jsonplaceholder.typicode.com/users", {
        //         method: "POST",
        //         body: JSON.stringify(userData),
        //         headers: {
        //             "content-Type": "application/json",
        //         },
        //     })
        //     .then((response) => {
        //         return response.json();
        //     })
        //     .then((data) => console.log(data));
        .post("https://jsonplaceholder.typicode.com/users", userData)
        .then((res) => console.log(res.data));
}

getBtn.addEventListener("click", getData);
postBtn.addEventListener("click", postData);