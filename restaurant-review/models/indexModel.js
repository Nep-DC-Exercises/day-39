const db = require("./conn");

class Restaurant {
    constructor(name, street, city, state, zipcode, picture, array_data) {
        this.name = name;
        this.street = street;
        this.city = city;
        this.state = state;
        this.zipcode = zipcode;
        this.picture = picture;
        this.array_data = array_data;
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

    // don't think this needs to be async as this is a helper/util function. Data already retrieved in getArrayAnswer(id).
    
    static convertArrayDataToObj(obj) {
        const objectToConvert = obj;
        const objLength = objectToConvert.length;
        let objAnswer = new Object();

        // Assuming the array in the database will ALWAYS be an even length and the answers are in pairs e.g a, 3, b, 7
        // This loop dynamically travels the length of the array data and populates key/value pairs and returns an object
        for (let i = 0; i < objLength; i += 2) {
            let key = objectToConvert[i];
            let value = objectToConvert[i + 1];

            objAnswer[key] = value;
        }

        return objAnswer;
    }

    static async getArrayAnswer(id) {
        // SQL starts counting from 1 instead of 0
        try {
            const response = await db.one(
                `SELECT array_data FROM restaurants WHERE id = $1;`,
                [id]
            );
            const arrayObj = response.array_data;
            const convertedAnswer = this.convertArrayDataToObj(arrayObj);

            return convertedAnswer;

        } catch (err) {
            return err.message;
        }
    }
}

module.exports = Restaurant;
