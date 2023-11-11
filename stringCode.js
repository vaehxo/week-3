function checkCreds(){
    //input validation 
    console.log("checkCreds() started");
    document.getElementById("loginStatus").innerHTML = "Status of Login";
   //variables needed
    var firstName;
    var lastName;
    var zipCode;
    var fullName;
    var fullNameLength;
    var zipCodeNumb;
    //fill variables
    //input first name
    firstName = document.getElementById("fName").value;
    console.log("The first name was inputted as " + firstName);
    //input last name
    lastName = document.getElementById("lName").value;
    console.log("The last name was inputted as "+ lastName);
    //input zipcode
    zipCode = document.getElementById("zipCode").value;
    console.log("The zipCode was inputted as " + zipCode);

    fullName = firstName + " " + lastName;
    console.log("The full name was inputted as" + fullName);

    fullNameLength = fullName.length;
    console.log("The full name has " + fullNameLength + " characters.");

    zipCodeNumb = parseInt(zipCode);
    console.log("The zip code number is " + zipCodeNumb);

    //full name length less than 20 characters
    //zip code less than 5 digits
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid full name";
     } else if(zipCode.length != 5){
        document.getElementById("loginStatus").innerHTML = "Invalid zipcode";
     } else {
        alert("User credientals passed, welcome to the site, " + fullName);
     }
}