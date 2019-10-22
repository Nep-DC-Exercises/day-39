const db = require("./conn");

class Restaurant {
    constructor(name, street, city, state, zipcode, picture) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.picture = picture;
    }

    static async getAll() {
        try {
            const query = await db.any(`SELECT * FROM restaurants`);
            return query;
        } catch (err) {
            return err.message;
        }
    }

    static async getById(id) {
        try {
            const response = await db.one(
                `SELECT * FROM restaurants WHERE id = $1;`,
                [id]
            );
            return response;
        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Restaurant;
