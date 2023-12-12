const express = require("express");
const router = express.Router();
const {
  createEmployee,
  getAllemployee,
  getSingleEmp,
  deleteEmployee,
  updateEmployee,
} = require("../controller/employeeCtrl");

router.post("/", createEmployee);

router.get("/", getAllemployee);

//put employee
router.put("/:id", updateEmployee);

//delete employee
router.delete("/:id", deleteEmployee);

//get 1 employee
router.get("/:id", getSingleEmp);
module.exports = router;
