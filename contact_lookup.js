var contacts = [
    {
        "fname": "shawal",
        "lname": "arefin",
        "number": "019135933838",
        "likes": ["coding", "workout", "burgers"]
    },
    {
        "fname": "mahian",
        "lname": "masnoor",
        "number": "017135933838",
        "likes": ["sleeping", "sleeping", "burgers"]
    },
    {
        "fname": "adiyat",
        "lname": "nisab",
        "number": "018135933838",
        "likes": ["coding", "basketball", "burgers"]
    },
    {
        "fname": "alif",
        "lname": "dhali",
        "number": "016135933838",
        "likes": ["designing", "earning", "burgers"]
    },
]
function lookProfile(name, prop){
    for(var i = 0; i <= contacts.length; i++){
        if (contacts[i].fname === name){
            return contacts[i][prop] || "no contact matched"
        }
    }
    return "no contact matched";   
}
var data = lookProfile("alif", "lname")
console.log(data) 
