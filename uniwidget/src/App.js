import './App.css';
//Store some state variables.
import { useState } from 'react';
//connect to our infura endpoint
import { providers, ethers } from 'ethers';
//check if metamask is installed in the browser.
import detectEthereumProvider from '@metamask/detect-provider';
//uniswap widgets library
import { SwapWidget } from '@uniswap/widgets';
import 'bootstrap/dist/css/bootstrap.css';


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


  const tokenList = "https://tokens.coingecko.com/uniswap/all.json";




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
    <div className="container-fluid">

    <div className='row'>

    <div class="col-4 mx-auto"></div>

      <div class="col-4 mt-5 mx-auto">
        <button className='btn btn-success btn-style' onClick={connectWallet}>Connect wallet</button>
      </div>

      <div class="col-4 mx-auto"></div>   
      </div>  

    <div className="row mt-5 mb-5 border-black Uniswap">

      <div class="col-4 mx-auto"></div>
        <div class="col-4 mx-auto">

          <SwapWidget
              provider={account.provider}
              JsonRpcEndpoint={jsonRpcEndpoint}
              width={800}
              tokenList={tokenList} />

        </div>
      <div class="col-4 mx-auto"></div>
      </div> 
    </div>
  );
}

export default App;
