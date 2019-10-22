const db = require("./conn");

class User {
    constructor(first_name, last_name, email_address, password) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email_address = email_address;
        this.password = password;
    }

    async login() {
        try {
            console.log("This is the login method", this.email_address);
        } catch (err) {
            return err.message;
        }
    }

    async save() {
        console.log("This is the save method", this.email_address);
    }
}

module.exports = User;