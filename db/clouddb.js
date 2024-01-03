/**
 * Setup the Database URL
 */

 // mongodb+srv://admin:<password>@cluster0-46e5h.mongodb.net/test?retryWrites=true&w=majority

 //mongodb+srv://vithejny:<password>@cluster0.yvehn72.mongodb.net/?retryWrites=true&w=majority

const DB_USER = "vithejny"
const DB_PASSWORD = "admin123"
const DB_NAME = "acmetravel"
const CLUSTER_HOST = "cluster0.yvehn72.mongodb.net"

// Setup the DB URI
exports.DB_URI= "mongodb+srv://"+DB_USER+":"+DB_PASSWORD+"@"+CLUSTER_HOST+"/"+DB_NAME+"?retryWrites=true&w=majority"