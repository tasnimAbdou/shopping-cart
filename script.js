var users=[
    {
        "id":"1",

        "firstName": "Alice",
        "lastName": "Smith",
        "email": "alice.smith@example.com",
        "password": "password123"
    },
    {
        "id":"2",

        "firstName": "Bob",
        "lastName": "Johnson",
        "email": "bob.johnson@example.com",
        "password": "securepass456"
    },
    {
        "id":"3",

        "firstName": "Charlie",
        "lastName": "Williams",
        "email": "charlie.williams@example.com",
        "password": "mypassword789"
    },
    {
        "id":"4",
       
        "firstName": "Diana",
        "lastName": "Brown",
        "email": "diana.brown@example.com",
        "password": "passw0rd101"
    },
    {
        "id":"5",
        "firstName": "Ethan",
        "lastName": "Jones",
        "email": "ethan.jones@example.com",
        "password": "letmein2023"
    }
];
const loginForm=document.getElementById('loginForm');
const loginButton=document.getElementById('loginButton');

loginButton.addEventListener("click",function(e){
    e.preventDefault();
users.forEach(item=>{
if(loginForm.email.value===item.email&&loginForm.password.value==item.password)
{
    localStorage.setItem("auth", JSON.stringify(item));

    window.location.replace('./home.html');

}
else{
    console.log('error')
}
});

})


