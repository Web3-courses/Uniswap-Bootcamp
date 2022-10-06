import './App.css';
//Store some state variables.
import { useState } from 'react';
//connect to our infura endpoint
import { providers, ethers } from 'ethers';
//check if metamask is installed in the browser.
import detectEthereumProvider from '@metamask/detect-provider';
//uniswap widgets library
import { SwapWidget } from '@uniswap/widgets';


const App = () => {

  // Variables


  const jsonRpcEndpoint = process.env.REACT_APP_ALCHEMY_ID;
  const jsonRpcProvider = new providers.JsonRpcProvider(jsonRpcEndpoint);
  const provider        = new ethers.providers.Web3Provider(jsonRpcProvider);

  console.log(provider);

  const [account,setAccount] = useState({
    address:'',
    provider: provider,
  });


// Connect wallet
const connectWallet = async () =>{

  const ethereumProvider = await detectEthereumProvider();
  if (ethereumProvider) {
  //prompt user to connect their wallet
  const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
     const address = accounts[0];
     setAccount({
        address: address,
        provider: ethereumProvider
     })
  }

}

  
  return (
    <div className="App">

    <div>

      <button onClick={connectWallet}>Connect wallet</button>
      
    </div>  

    <div className="Uniswap">
    <SwapWidget
        provider={account.provider}
        JsonRpcEndpoint={jsonRpcEndpoint} />
    </div>
      
    </div>
  );
}

export default App;
