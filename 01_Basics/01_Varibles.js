const accountId=1444
let accountEmail="rushi@gmail.com"
var accountPassword="1234"
accountCity="pune"
let accountState;

// accountId=2 not allowed

accountEmail="rohit4545@gmail.com"

accountPassword="2121"

accountCity="mumbai"

console.log(accountId);
/*

prefer not to use var
because of issue in block scope and functional scope

*/



console.table([accountId,accountEmail,accountPassword,accountCity,accountState])