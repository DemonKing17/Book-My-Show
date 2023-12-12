const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    const { name, id, salary } = req.body;
    const employee = await Employee.create({
      name,
      id,
      salary,
    });
    console.log(employee);
    res.json({
      status: "success",
      data: employee,
    });
  } catch (error) {
    res.json(error);
  }
};

const getAllemployee = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json({
      status: "success",
      data: employees,
    });
  } catch (error) {
    res.json(error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const findEmp = await Employee.findByIdAndUpdate(req.body);
    res.json({
      status: "success",
      data: "update employee",
    });
  } catch (error) {
    res.json(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const deleteEmp = await Employee.findByIdAndDelete(req.body.id);
    res.json({
      status: "success",
      data: "delete employee",
    });
  } catch (error) {
    res.json(error);
  }
};

const getSingleEmp = async (req, res) => {
  try {
    res.json({
      status: "success",
      data: "get 1 employee",
    });
  } catch (error) {
    res.json(error);
  }
};

module.exports = {
  createEmployee,
  getAllemployee,
  getSingleEmp,
  deleteEmployee,
  updateEmployee,
};
