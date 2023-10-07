import * as bip39 from 'bip39';
import { Keypair } from '@solana/web3.js';
import { useState } from 'react';


export default function GenerateWallet({ setAccount }) {
  //generate account keypair of Hierarchy Deterministic
  const [mnemonic, setMnemonic] = useState(null);

  const generateWallet = () => {
    const generatedMnemonic = bip39.generateMnemonic();
    const seed = bip39.mnemonicToSeedSync(generatedMnemonic).slice(0, 32);
    const newAccount = Keypair.fromSeed(new Uint8Array(seed));

    console.log('newAccount', newAccount.publicKey.toString());

    setMnemonic(generatedMnemonic);
    setAccount(newAccount);
  }

  return (
    <>
      <button
        className="p-2 my-6 text-white bg-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg cursor-pointer"
        onClick={generateWallet}
      >
        Create a wallet
      </button>
      {mnemonic && (
        <>
          <div className="mt-1 p-4 border border-gray-300 bg-gray-200">
            {mnemonic}
          </div>
          <strong className="text-xs">
            Please make sure that you will save this phrase and keep it safe and secret. If this phrase is made public, anyone will be able to access to your assets.
          <br/>
            You should consider it the password of the online bank.
          </strong>
        </>
      )}
    </>
  );
}