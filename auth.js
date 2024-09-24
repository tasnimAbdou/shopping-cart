class Auth{

    constructor(){
        const auth=localStorage.getItem("auth");
        this.validAuth(auth);
    }
    validAuth(auth){

        if(!auth){
            window.location.replace('./index.html');
        }
    }

    logout(){
        localStorage.removeItem("auth");
        

        window.location.replace('./index.html');

    }
}