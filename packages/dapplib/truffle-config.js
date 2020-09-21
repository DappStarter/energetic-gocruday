require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace industry frame solution firm cruise million provide hunt breeze outer silk'; 
let testAccounts = [
"0x426729ddbae61ebbf255841231ccaf09d2d41da890c8020962ddb000f9591d1b",
"0x6a11011b72477c1756f1d348066da38c7845f97c477795e1bae72f7b36d250fb",
"0x88f83400d4bd5f3b8b3a7b04398b178d1fdb00ac78680f85339d0de5a6134c98",
"0xd6f99832448a88378ef97b5cc9eba0679fdfc003590a7ebf774fdecf301a2a52",
"0x66c3623fd706b5cd5f6c28d352a008194f9bca858afc101ab1033b33c6218137",
"0x945c4c50c1fc7d4e66c4fe2a508267f320fe4b302e0c7ef76a7698acd5afa617",
"0xc2df03a88e28ba2b4c063fdc9214a1d9a5e0f95d499414466dccf51ccfd335b1",
"0xe5ade44b80f7f99a51109f6f1355dd57346a2a7193c05540144e12612bb63d78",
"0xb80b7d31747332a8b9ec557108fe2399d3030163136343b4a2b09abf7d083e8d",
"0x1a307a012fbc4b396c5b4cdc37257816c7f530d28a9d97c16ae313129a4c0bd1"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
