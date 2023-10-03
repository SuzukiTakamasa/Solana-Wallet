import * as bip39 from 'bip39';
import { Keypair } from '@solana/web.js';
import { useState } from 'react';

console.log('newAccount', newAccount.publicKey.toString());

export default function GenerateWallet() {
  //generate account keypair
  const generatedMnemonic = bip39.generatedMnemonic();
  const seed = bip39.mnemonicToSeedSync(generatedMnemonic).slice(0, 32);
  const newAccount = Keypair.fromSeed(new Uint8Array(seed));

  setMnemonic(generatedMnemonic);
  setAccount(newAccount);

  return (
    <div>GenerateWallet Component</div>
  )
}