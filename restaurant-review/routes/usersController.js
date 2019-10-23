// Express variables required for it to run
const express = require("express"),
    bcrypt = require("bcryptjs"),
    router = express.Router();

// My Models
const UserModel = require("../models/userModel");

router.get("/login", async (req, res, next) => {
    res.render("template", {
        locals: {
            title: "Login"
        },
        partials: {
            partial: "partial-login"
        }
    });
});

router.get("/signup", async (req, res, next) => {
    res.render("template", {
        locals: {
            title: "Sign Up"
        },
        partials: {
            partial: "partial-sign-up"
        }
    });
});

router.post("/signup", async (req, res, next) => {
    // Ignoring deconstructing the password for now. Able to deconstruct b/c req.body is a js object
    const { first_name, last_name, email_address } = req.body;

    // bcrypt functions to generate salt and hash of the password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    // creating a new user and storing password as the hash
    const user = new UserModel(first_name, last_name, email_address, hash);

    const newUser = await user.save();
    console.log("Was user added?", newUser.id);

    if (newUser) {
        // redirect doesn't care about the current route so we are in which is why we specify /users/login
        res.status(200).redirect("/users/login");
    } else {
        res.status(500)
    }
});

router.post("/login", async (req, res, next) => {
    console.log(req.body);
    res.status(200).redirect("/");
});

module.exports = router;
