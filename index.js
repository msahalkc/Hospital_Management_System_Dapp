const { ethers } = require("ethers");

// ABI of the smart contract
var abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hospital_id",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_hospital_name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospital_address",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_hospital_spec",
				"type": "string"
			}
		],
		"name": "store_doctor_details",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "hospital_id",
				"type": "uint256"
			}
		],
		"name": "retreive_hospital_details",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Address of the deployed smart contract
const contractAddress = "0x92B4E5Df7D53C6F7F80C2451CA8DD810cD149Fb2";

// Provider instance connected to the Ethereum network
const provider = new ethers.JsonRpcProvider("HTTP://127.0.0.1:7545");

// Signer instance to send transactions
const signer = new ethers.Wallet("0xb6ae2c8b1612f51f8fa06e65ce5c580da0f5af18d5ad4a2129fb789ef6060e1d", provider);

// Contract instance
const contract = new ethers.Contract(contractAddress, abi, signer);

// Function to call the retreive_hospital_details function
async function storeHospitalDetails() {
    try {
        // Call the contract function
        // const result = await contract.store_doctor_details(1, "MIMS", "Kuttippuram", "GM");
        const result = await contract.retreive_hospital_details(1)

        // Log the result
        console.log("Hospital Name:", result);
    } catch (error) {
        console.error("Error retrieving hospital details:", error);
    }
}

// Call the function with a hospital ID
storeHospitalDetails();
