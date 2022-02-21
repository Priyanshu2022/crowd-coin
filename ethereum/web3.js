import Web3 from 'web3';

let web3;
if(typeof window!=='undefined' && typeof window.web3!==undefined){
    // We are in the browser and metamask is running
    web3=new Web3(window.web3.currentProvider);
}else{
    // we are on the server or the use is not using metamask
    const provider=new Web3.providers.HttpProvider(
        'https://rinkeby.infura.io/v3/b2a349aa021449dca1bb5a4ecd1a56cc'
    );
    web3=new Web3(provider);
}

export default web3;