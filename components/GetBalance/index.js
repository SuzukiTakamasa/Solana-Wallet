export default function GetBalance({ refreshBalance }) {
  return (
    <button
      clasName="p-2 my-6 text-white bg-indigo-500 focus:ring focus:ring-indigo-300 rounded-lg cursor-pointer"
      onClick={refreshBalance}
    >
      Fetch the balance
    </button>
  );
}