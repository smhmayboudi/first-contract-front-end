import "./App.css";
import { TonConnectButton } from "@tonconnect/ui-react";
import { useMainContract } from "./hooks/useMainContract";
// import { useTonConnect } from "./hooks/useTonConnect";
import "@twa-dev/sdk";

function App() {
  // const { connected } = useTonConnect();
  const {
    contract_address,
    counter_value,
    recent_sender,
    owner_address,
    contract_balance,
  } = useMainContract();

  return (
    <div>
      <div>
        <TonConnectButton />
      </div>
      <div>
        <div className='Card'>
          <b>Our contract Address</b>
          <div className='Hint'>{contract_address?.slice(0, 30) + "..."}</div>
          <b>Our contract Balance</b>
          <div className='Hint'>{contract_balance}</div>
        </div>
        <div className='Card'>
          <b>Counter Value</b>
          <div>{counter_value ?? "Loading..."}</div>
        </div>
        <div className='Card'>
          <b>Recent Sender</b>
          <div>{recent_sender?.toString()}</div>
        </div>
        <div className='Card'>
          <b>Owner Address</b>
          <div>{owner_address?.toString()}</div>
        </div>
      </div>
    </div>

  );
}

export default App;
