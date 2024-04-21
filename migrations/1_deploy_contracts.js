const Records = artifacts.require("records.sol");
const Patient = artifacts.require("patient.sol");
const Hospital = artifacts.require("hospital.sol");
const Doctor = artifacts.require("doctor.sol");
const BodyExamine = artifacts.require("body_examine.sol");

module.exports = function(deployer) {
  deployer.deploy(Records);
  deployer.deploy(Patient);
  deployer.deploy(Hospital);
  deployer.deploy(Doctor);
  deployer.deploy(BodyExamine);
};
