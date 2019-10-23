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
    const theRestaurant = await restaurantClass.getById(restaurant_id);

    res.render("template", {
        locals: {
            title: "This is one restaurant",
            restaurantData: theRestaurant
        },
        partials: {
            partial: "partial-single-restaurant"
        }
    });
});

module.exports = router;
