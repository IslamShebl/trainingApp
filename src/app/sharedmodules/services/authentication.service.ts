
export class AuthService{
token:boolean=false;
setToken(tokenValue){
    this.token=tokenValue;
}
getToken(){
    return this.token;
}

}