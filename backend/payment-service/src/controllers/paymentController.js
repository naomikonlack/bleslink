const Web3 = require('web3');
const contractABI = require('../contracts/PaymentContract.json');  // ABI for your smart contract

// Initialize Web3 with the correct provider (Infura or a local blockchain)
const provider = new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/YOUR_INFURA_PROJECT_ID');  // Replace with your Infura endpoint or local blockchain
const web3 = new Web3(provider);
const contractAddress = 'YOUR_DEPLOYED_CONTRACT_ADDRESS';  // Replace with your deployed smart contract address

// Create a new payment on the blockchain
const createPayment = async (req, res) => {
  const { sender, traveler, amount } = req.body;
  const account = web3.eth.accounts.privateKeyToAccount('YOUR_PRIVATE_KEY');  // Replace with sender's private key

  const contract = new web3.eth.Contract(contractABI, contractAddress, {
    from: sender
  });

  // Send transaction to create payment
  const tx = contract.deploy({
    data: contractABI.bytecode,
    arguments: [traveler]
  });

  try {
    const gas = await tx.estimateGas({ from: sender, value: web3.utils.toWei(amount, 'ether') });
    const receipt = await tx.send({
      from: sender,
      value: web3.utils.toWei(amount, 'ether'),
      gas
    });

    res.status(200).json({ success: true, transactionHash: receipt.transactionHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Release payment to traveler
const releasePayment = async (req, res) => {
  const { sender } = req.body;
  const contract = new web3.eth.Contract(contractABI, contractAddress);

  try {
    const receipt = await contract.methods.releasePayment().send({ from: sender });
    res.status(200).json({ success: true, transactionHash: receipt.transactionHash });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createPayment, releasePayment };
