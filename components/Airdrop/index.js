import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js';

export default function Airdrop({ account, network, refreshBalance }) {

  const handleAirdrop = async () => {
    try {
      const connection = new Connection(network, 'confirmed');
      const signature = await connection.requestAirdrop(
        account.publicKey,
        1 * LAMPORTS_PER_SOL,
      );

      const latesetBlockHash = await connection.getLatestBlockhash();
      await connection.confirmTransaction(
        {
        signature,
        blockhash: latestBlockHasg.blockhash,
        lastValidBlockHeight: latesetBlockHash.lastValidBlockHeight,
        },
        'confirmed',
      )
      .then((resp) => {
        const signatureResult = response.value;
        if (signatureResult.err) {
          console.error('Transaction failed: ', signatureResult.err);
        }
      });
    } catch(e) {
      console.error(e);
    }
    await refreshBalance();
  }

  return (
    <button
      className="p-2 my-6 text-white bg-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg cursor-pointer"
      onClick={handleAirdrop}>
      Airdrop
    </button>
  );
}