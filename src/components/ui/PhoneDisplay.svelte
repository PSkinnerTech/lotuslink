<script lang="ts">
    export let links = [
      { title: 'Link 1', url: '#' },
      { title: 'Link 2', url: '#' },
      // Add more links as needed
    ];
</script>

  
  <div class="h-[700px] rounded-[50px] bg-center bg-no-repeat bg-cover border-8 border-black w-full sm:w-96 sm:mx-auto md:scale-90 md:fixed md:right-8 lg:right-20 xl:right-32 2xl:right-52 top-36 overflow-auto">


    <div class="p-4">
      <h2 class="mb-4 text-xl font-semibold">Your Page Title</h2>
        <ul>
          {#each links as link (link.id)}
            <li>
              <a href={link.url} class="block text-white border border-white rounded-full px-4 py-2 bg-transparent w-full text-center">{link.title}</a>
            </li>
          {/each}
       </ul>    
    </div>
  </div>
  
  <style>
    .phone-display {
      /* Add any additional styles for the phone display here */
    }
  </style>
  