// function deployFunc(hre){
//     console.log("Hi")
// }

// module.exports.default = deployFunc

module.exports = async (hre) => {
    const { getNamedAccounts, deployments } = hre
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    const chainId = network.config.chainId

    // when going for localhost or hardhat network we want to use a mock
    // what happens when we want to change chains?
}
