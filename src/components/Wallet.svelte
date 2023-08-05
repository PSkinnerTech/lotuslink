<script lang="ts">
  import { onMount } from 'svelte';
  import { router } from 'tinro';

  interface WalletSwitchEventDetail {
    address: string;
  }

  let activeAddress = '';

  onMount(async () => {
    window.addEventListener('walletSwitch', (e) => {
      const event = e as CustomEvent<WalletSwitchEventDetail>;
      activeAddress = event.detail.address;
    });

    activeAddress = await (window as any).arweaveWallet.getActiveAddress();
  });

  async function connectWallet() {
    const permissions = await (window as any).arweaveWallet.getPermissions();

    if (permissions.length === 0) {
      await (window as any).arweaveWallet.connect(
        ['ACCESS_ADDRESS'], // request permissions to read the active address
        {
          name: "Your App Name", // provide some extra info for our app
          logo: "URL to your app logo"
        }
      );
    }

    activeAddress = await (window as any).arweaveWallet.getActiveAddress();
    router.goto('/active');
  }

  async function disconnectWallet() {
    await (window as any).arweaveWallet.disconnect();
    activeAddress = '';
    router.goto('/');
  }
</script>

<div class="flex items-center justify-between p-4">
  {#if !activeAddress}
    <button class="px-4 py-2 text-gray-300 border-2 border-gray-300 rounded mb-2" on:click={connectWallet}>Connect Wallet</button>
  {/if}
  {#if activeAddress}
    <div class="flex items-center">
      <button class="px-4 py-2 text-gray-300 border-2 border-gray-300 rounded mr-4" on:click={disconnectWallet}>Disconnect Wallet</button>
      <p class="text-gray-300">Connected to: ...{activeAddress.slice(-4)}</p>
    </div>
  {/if}
</div>
