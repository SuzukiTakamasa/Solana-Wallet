import { 
  Connection,
  LAMPORTS_PER_SOL,
  sendAndConfirmTransaction,
  SystemProgram,
  Transaction,
 } from '@solana/web3.js';
import { useState } from 'react';


const handleTransfer = async (e) => {
  e.preventDefault();

  try{
    setTransactionSig('');

    const connection = new Connection(network, 'confirmed');
    const params = {
      fromPubkey: account.publicKey,
      lamports: 0.5 * LAMPORTS_PER_SOL,
      toPubley: toAddress,
    };
    const signers = [
      {
        publicKey: account.publicKey,
        secretKey: account.secretKey,
      }
    ];

    const transaction = new Transaction();
    transaction.add(SystemProgram.transfer(params));
    const transactionSignature = await sendAndConfirmTransaction(
      connection,
      transaction,
      signers,
    );

    setTransactionSig(transactionSignature);

    await refreshBalance();
  } catch (e) {
    console.error(e);
  }
};

export default function Transfer({ account, network, refreshBalance}) {
  const [transactionSig, setTransactionSig] = useState('');
  const [toAddress, setToAddress] = useState(null);
  return (
    <>
      <form onSubmit={handleTransfer} className="my-6">
        <div>
          <input
            type="text"
            className="w-full text-gray-700 mr-3 p-1 focus:outline-none"
            onChange={(event) => setToAddress(event.target.value)}
          />
          <input
            type="submit"
            className="p-2 text-white bg-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg cursor-pointer"
            value="Transfer"
           />
        </div>
      </form>
      {transactionSig && (
        <>
          <span className="text-red-600">Transfer token has been completed!</span>
          <a
            href={`https://explorer.solana.com/tx/${transactionSig}?clusters=${network}`}
            className="border-double border-b-4 border-b-indigo-600"
            target="_blank"
            rel="noopener noreferrer"
          >
            Confirm Transaction by Solana Block Explorer
          </a>
        </>
      )}
    </>
  );
}