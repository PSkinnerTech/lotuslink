<script>
    import { onMount } from 'svelte';
    let imgSrc = '';
  
    onMount(() => {
      imgSrc = '/src/assets/images/lotuslink-hero.png';
    });
  </script>
  
  <div class="flex justify-between items-center p-10">
    <div class="text-6xl text-gray-300">
      Welcome to LotusLink.<br />
      Own your Links
    </div>
    <img src={imgSrc} alt="LotusLink Hero" class="w-1/2 h-auto" />
  </div>
  