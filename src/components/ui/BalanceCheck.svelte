<script>
  import { onMount } from 'svelte';
  import Arweave from 'arweave';

  export let walletAddress = '';

  let balance = 0;
  let isEnough = false;

  onMount(async () => {
    const arweave = Arweave.init({
      host: 'arweave.net',
      port: 443,          
      protocol: 'https',  
      timeout: 20000,     
    });

    balance = await arweave.wallets.getBalance(walletAddress);
    balance = arweave.ar.winstonToAr(balance);
    isEnough = balance >= 1.6;
  });
</script>

<div class={`text-white rounded-full p-2 text-center ${isEnough ? 'bg-green-500' : 'bg-red-500'}`}>
  {#if isEnough}
    You have enough AR to create your LotusLink
  {:else}
    You don't have enough AR to create your LotusLink
  {/if}
</div>
