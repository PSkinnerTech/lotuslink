<script>
    import Wallet from './Wallet.svelte';
  </script>
  
  <nav class="bg-black shadow">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <!-- Your logo here -->
            <img class="h-8 w-8" src="URL to your logo" alt="Your App Logo">
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-4">
              <!-- Navigation links here -->
              <a href="https://patrickskinner.tech" class="text-gray-600 hover:text-gray-800">Home</a>
              <a href="https://patrickskinner.tech" class="text-gray-600 hover:text-gray-800">About</a>
              <a href="https://patrickskinner.tech" class="text-gray-600 hover:text-gray-800">Contact</a>
            </div>
          </div>
        </div>
        <div class="hidden md:block">
          <div class="ml-4 flex items-center md:ml-6">
            <Wallet />
          </div>
        </div>
      </div>
    </div>
  </nav>
  