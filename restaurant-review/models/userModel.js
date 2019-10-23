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
        try {
            const response = await db.one(
                `INSERT INTO users (first_name, last_name, email, password) VALUES ($1, $2, $3, $4) RETURNING id;`,
                [
                    this.first_name,
                    this.last_name,
                    this.email_address,
                    this.password
                ]
            );

            return response
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = User;
