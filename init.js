const auth=new Auth();
const logoutButtn=document.getElementById("logout");
logoutButtn.addEventListener("click",function(e){

    auth.logout();
})