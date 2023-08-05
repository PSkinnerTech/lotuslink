<script>
    // You can import any additional components or modules here
    let links = [
      { title: 'Link 1', url: '#' },
      { title: 'Link 2', url: '#' },
      // Add more links as needed
    ];
  </script>
  
  <div class="h-[700px] rounded-[50px] bg-center bg-no-repeat bg-cover border-8 border-black w-full sm:w-96 sm:mx-auto md:scale-90 md:fixed md:right-8 lg:right-20 xl:right-32 2xl:right-52 top-36 overflow-auto">


    <div class="p-4">
      <h2 class="mb-4 text-xl font-semibold">Your Page Title</h2>
      <ul>
        {#each links as link (link.title)}
          <li>
            <a href={link.url} class="block py-2 px-4 bg-blue-500 text-white rounded mb-2">{link.title}</a>
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
  