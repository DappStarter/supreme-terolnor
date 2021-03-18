require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inflict process broken skull stone note spice purity hunt gloom orange tornado'; 
let testAccounts = [
"0x0f1bad4ae638ef134d8f4aee9bf39da6d6687d8282fb0e9bd2c97e93dbf9190b",
"0xfe09f1a7e79aa5ad2d95ca32ef535ecd99b5d8a7df208dbddffa5051e857e146",
"0x94d66c442397caae61683bdfe1701346d49455059d6b201c69dff2e4980a42c5",
"0xee7a49ab14810c9c325bb2689cc8ea98212cb5f5f9921081f092837f4e83650b",
"0x08a540cf89e137001d963eb3747eec8be269e8849c96252ce90e9a120c660563",
"0xcce5760945e009c05db19529afbde205621e42c84c473311f78849e9578331ed",
"0xecc21978e6bea5dabd194603a946dd2d0fd329faad25ccd2c743c2cdf47ccd9d",
"0x2ffcca59c793f5f6558aaccf256af0d32aab9d06dcdde928eb69c18eb014af1b",
"0x4aa164ef61b1e36b6419fd57eb4124bf654dc6947456c9d405f78e8b30380f7c",
"0x3d865d813a8c2dbf5a0dfc8d6a41bb0d267ba7a933e67fb13ec15186576ffbd8"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

