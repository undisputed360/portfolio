const connectButton = document.getElementById("connectBtn");
const addressOutput = document.getElementById("walletAddress");
const networkOutput = document.getElementById("networkStatus");
const balanceOutput = document.getElementById("tokenBalance");
const messageOutput = document.getElementById("walletMessage");

const networks = {
  "0x1": "Ethereum Mainnet",
  "0x89": "Polygon",
  "0x2105": "Base",
  "0xaa36a7": "Sepolia",
  "0x14a34": "Base Sepolia",
};

let activeAccount = "";

function showMessage(message, isError) {
  messageOutput.textContent = message;
  messageOutput.classList.toggle("is-error", isError);
}

function formatEther(balanceHex) {
  const wei = BigInt(balanceHex);
  const unit = 10n ** 18n;
  const whole = wei / unit;
  const fraction = (wei % unit).toString().padStart(18, "0").slice(0, 4);
  const trimmedFraction = fraction.replace(/0+$/, "");
  return `${whole}${trimmedFraction ? `.${trimmedFraction}` : ""} ETH`;
}

async function updateWallet(account) {
  const provider = window.ethereum;
  if (!provider) {
    throw new Error("No browser wallet was found. Install one to connect.");
  }

  const [chainId, balanceHex] = await Promise.all([
    provider.request({ method: "eth_chainId" }),
    provider.request({
      method: "eth_getBalance",
      params: [account, "latest"],
    }),
  ]);

  activeAccount = account;
  addressOutput.textContent = `${account.slice(0, 6)}…${account.slice(-4)}`;
  addressOutput.title = account;
  networkOutput.textContent = networks[chainId] || `Network ${chainId}`;
  balanceOutput.textContent = formatEther(balanceHex);
  connectButton.textContent = "Refresh account";
  showMessage("Showing public wallet data only. No signature or transaction was requested.", false);
}

connectButton.addEventListener("click", async () => {
  const provider = window.ethereum;
  if (!provider) {
    showMessage("No browser wallet detected. You can still explore this preview.", true);
    return;
  }

  connectButton.disabled = true;
  connectButton.textContent = "Checking wallet…";
  try {
    const accounts = await provider.request({ method: "eth_requestAccounts" });
    if (!accounts.length) {
      activeAccount = "";
      addressOutput.textContent = "Not connected";
      addressOutput.removeAttribute("title");
      networkOutput.textContent = "Not connected";
      balanceOutput.textContent = "— ETH";
      connectButton.textContent = "Connect wallet";
      showMessage("No account was provided by the wallet.", true);
      return;
    }
    await updateWallet(accounts[0]);
  } catch (error) {
    console.error("Could not read wallet account:", error);
    const message =
      error && error.code === 4001
        ? "Wallet access was declined. No account data was read."
        : "Could not read wallet data. Check your wallet connection and try again.";
    showMessage(message, true);
    connectButton.textContent = activeAccount ? "Refresh account" : "Connect wallet";
  } finally {
    connectButton.disabled = false;
  }
});

if (window.ethereum && typeof window.ethereum.on === "function") {
  window.ethereum.on("accountsChanged", (accounts) => {
    if (!accounts.length) {
      activeAccount = "";
      addressOutput.textContent = "Not connected";
      addressOutput.removeAttribute("title");
      networkOutput.textContent = "Not connected";
      balanceOutput.textContent = "— ETH";
      connectButton.textContent = "Connect wallet";
      showMessage("Wallet disconnected. Connect again to read account details.", false);
      return;
    }
    updateWallet(accounts[0]).catch((error) => {
      console.error("Could not refresh wallet account:", error);
      showMessage("Could not refresh wallet data. Try reconnecting.", true);
    });
  });

  window.ethereum.on("chainChanged", () => {
    if (activeAccount) {
      updateWallet(activeAccount).catch((error) => {
        console.error("Could not refresh wallet network:", error);
        showMessage("Could not refresh network data. Try reconnecting.", true);
      });
    }
  });
}
