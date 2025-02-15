function getAccessMessage(user) {
    if (user.role === "admin") {
        return user.active ? "Admin Access Granted!" : "Admin Access Revoked";
    } else if (user.role === "user") {
        return user.active ? "User Access Granted!" : "User Access Revoked";
    } else {
        return "Access Denied";
    }
}


let user1 = { name: "Alice", role: "admin", active: false };
console.log(getAccessMessage(user1));

let user2 = { name: "Bob", role: "user", active: true };
console.log(getAccessMessage(user2)); 

let user3 = { name: "Charlie", role: "guest", active: true };
console.log(getAccessMessage(user3)); 