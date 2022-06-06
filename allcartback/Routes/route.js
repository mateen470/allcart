const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const Food = require("../model/schema");

// THIS WILL SHOW ALLL THE FOOD ITEMS IN THE DATABASE AT SIMPLE HOME PAGE
router.get("/home", async (req, res) => {
  try {
    const allFood = await Food.find();
    res.status(201).json(allFood);
    console.log("THIS IS ALL THE DATA FROM SIMPLE HOME PAGE :", allFood);
  } catch (error) {
    console.log("HOME DATA SHOWING API FAILED");
    res.status(422).send(error);
  }
});

// THIS WILL SHOW ALLL THE FOOD ITEMS IN THE DATABASE AT ADMIN HOME PAGE
router.get("/homeadmin", async (req, res) => {
  try {
    const allfood = await Food.find();
    console.log("THIS IS ALL THE DATA FROM ADMIN HOME PAGE :", allfood);
    res.status(201).json(allfood);
  } catch (error) {
    console.log("HOME ADMIN DATA SHOWING API FAILED");
    res.status(422).send(error);
  }
});

// TO ADD THE FOOD ITEM FROM ADD PAGE
router.post("/add", async (req, res) => {
  const { product, quantity, id, bestbefore } = req.body;
  try {
    const alreadyExist = await Food.findOne({ id: id });
    if (alreadyExist) {
      res.status(422).json("THE FOOD ITEM WITH THE GIVEN ID ALREADY EXISTS!");
    } else {
      const newItem = new Food({
        product,
        quantity,
        id,
        bestbefore,
      });
      await newItem.save();
      console.log(
        "THIS CONSOLE IS FROM ADD API AFTER SUCCESSFULLY ADDING AND SAVING DATA"
      );
      res.status(201).json(newItem);
    }
  } catch (error) {
    console.log("ADD API FAILED");
    res.status(422).send(error);
  }
});

// TO VIEW A SINGLE RECORD AGAINST THAT USER'S ID
router.get("/view:id", async (req, res) => {
  try {
    const { id } = req.params;
    const singleRead = await Food.findById({ _id: id });
    console.log("THIS CONSOLE IS FROM SINGLE VIEW API AFTER WORKING PROPERLY");
    res.status(201).json(singleRead);
  } catch (error) {
    console.log("VIEW API FAILED");
    res.status(422).send(error);
  }
});

// TO UPDATE A SINGLE RECORD AGAINST IT'S ID
router.put("/update:id", async (req, res) => {
  try {
    const { id } = req.params;
    const updateItem = await Food.findOneAndUpdate({ id }, req.body, {
      new: true,
    });
    console.log("THIS IS FROM UPDATE API AFTER SUCCESS");
    res.status(201).json(updateItem);
  } catch (error) {
    console.log("UPDATE API FAILED");
    res.status(422).send(error);
  }
});

// TO REMOVE A FOODITEM AGAINST IT'S ID
router.delete("/remove:id", async (req, res) => {
  try {
    const { id } = req.params;
    const removeItem = await Food.findOneAndDelete({ _id: id });
    console.log("DELETE API SUCCESSFUL");
    res.status(201).json(removeItem);
  } catch (error) {
    console.log("DELETE API FAILED");
    res.status(422).send(error);
  }
});

module.exports = router;
