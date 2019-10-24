const express = require("express"),
    router = express.Router(),
    restaurantClass = require("../models/indexModel");

router.get("/", async (req, res, next) => {
    restaurantAllData = await restaurantClass.getAll();

    res.render("template", {
        locals: {
            title: "Index Page",
            restaurantInfo: restaurantAllData,
            isLoggedIn: req.session.is_logged_in,
            userName: req.session.first_name
        },
        partials: {
            partial: "partial-index"
        }
    });
});

router.get("/:restaurant_id", async (req, res, next) => {
    const { restaurant_id } = req.params;
    // const theRestaurant = await restaurantClass.getById(restaurant_id);
    // Array Data Test Code
    const theRestaurantArray = await restaurantClass.getArrayAnswer(
        restaurant_id
    );

    const theAnswerObj = theRestaurantArray;
    console.log("Testing if I passed the answer obj from the model", theAnswerObj);
    
    // For testing purposes, don't care about seeing anything in the browser

    // res.render("template", {
    //     locals: {
    //         title: "This is one restaurant",
    //         restaurantData: theRestaurant,
    //         isLoggedIn: req.session.is_logged_in
    //     },
    //     partials: {
    //         partial: "partial-single-restaurant"
    //     }
    // });
});

module.exports = router;
