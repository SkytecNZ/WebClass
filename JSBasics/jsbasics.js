console.log("Hello, World!");
console.log(Date());

const myBusinessname = "My Awesome Business";
console.log ("My Business name is front page  "  + myBusinessname);
console.log ("My Business name is last page  "  + myBusinessname);
console.log ("My Business name is contract page "  + myBusinessname);

let outletAddress;
outletAddress = "Blockhouse Bay"
console.log ("Outlet address 1 is "  + outletAddress);
outletAddress = "New Market"
console.log ("Outlet address 2 is "  + outletAddress);
outletAddress = "City"
console.log ("Outlet address 3 is "  + outletAddress);

if (outletAddress == "Blockhouse Bay") {
    console.log ("Large Store");
}
else if (outletAddress == "New Market") {
    console.log ("Head Office");
}
else if (outletAddress == "City") {
    console.log ("Mega Store");
}

console.log ("===================");
switch (outletAddress) {
    case "Blockhouse Bay":
        console.log ("Large Store");
        break;
    case "New Market":
        console.log ("Head Office");
        break;
    case "City":
        console.log ("Mega Store");
        break;
}
console.log ("===================");