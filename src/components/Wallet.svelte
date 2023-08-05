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
  
      activeAddress = await window.arweaveWallet.getActiveAddress();
    });
  
    async function connectWallet() {
      const permissions = await window.arweaveWallet.getPermissions();
  
      if (permissions.length === 0) {
        await window.arweaveWallet.connect(
          ['ACCESS_ADDRESS'], // request permissions to read the active address
          {
            name: "Your App Name", // provide some extra info for our app
            logo: "URL to your app logo"
          }
        );
      }
  
      activeAddress = await window.arweaveWallet.getActiveAddress();
      router.goto('/active');
    }
  
    async function disconnectWallet() {
      await window.arweaveWallet.disconnect();
      activeAddress = '';
      router.goto('/');
    }
  </script>
  
  <div class="p-4 flex flex-col items-center">
    {#if !activeAddress}
      <button class="px-4 py-2 text-gray-300 border-2 border-gray-300 rounded mb-2" on:click={connectWallet}>Connect Wallet</button>
    {/if}
    {#if activeAddress}
      <p class="py-2 text-gray-300">Active Address: {activeAddress}</p>
      <button class="px-4 py-2 text-gray-300 border-2 border-gray-300 rounded" on:click={disconnectWallet}>Disconnect Wallet</button>
    {/if}
  </div>
  