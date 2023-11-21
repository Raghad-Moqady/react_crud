export const validationUserData =(users)=>{
    let errors ={};
    if(users.name.trim()==""){//trim==الصافي منها 
        errors.name="username is required"
    }else if(users.name.trim().length<3){
        errors.name="username must be at least 3 char"
    }
    if(users.email.trim()==""){
        errors.email="email is required"
    }else if(users.email.trim().length<9){
        errors.email="email must be at least 9 char"
    }
    if(users.password.trim()==""){
        errors.password="password is required"
    }else if(users.password.trim().length<3){
        errors.password="password must be at least 3 char"
    }
    return errors;
}