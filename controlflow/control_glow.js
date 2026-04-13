let userRole="admin";
let accessLevel;

if(userRole === "admin"){
    accessLevel = "full access granted";
}
else if(userRole === "manager"){
    accessLevel = "limited access granted";
}
else{
    accessLevel = "no access granted";
}

console.log("access level: " + accessLevel);

/*----------------------------------------------*/
isLoggedIn = true;
let userMessage;

if (isLoggedIn){
    if (userRole === "admin"){
        userMessage = "Welcome, admin!";
    }
    else{
        userMessage = "Welcome, user!";
    }    
}
else{
    userMessage = "Please log in to access system.";
}
console.log("User Message:", userMessage);

/*----------------------------------------------*/
let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown;"
}
console.log("User Category:", userCategory);

/*----------------------------------------------*/
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not Authenticated";

console.log("Authentication Status:", authenticationStatus);