import * as bip39 from 'bip39';
import { Keypair } from '@solana/web.js';
import { useState } from 'react';

console.log('newAccount', newAccount.publicKey.toString());

export default function GenerateWallet({ setAccount }) {
  //generate account keypair of Hierarchy Deterministic
  const [mnemonic, setMnemonin] = useState(null);

  const generatedMnemonic = bip39.generatedMnemonic();
  const seed = bip39.mnemonicToSeedSync(generatedMnemonic).slice(0, 32);
  const newAccount = Keypair.fromSeed(new Uint8Array(seed));

  setMnemonic(generatedMnemonic);
  setAccount(newAccount);

  return (
    <>
      <button
        className="p-2 my-6 text-white bg-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg cursor-pointer"
        onClick={GenerateWallet}
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