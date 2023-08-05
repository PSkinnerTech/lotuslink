<script lang="ts">
  import { Route as TinroRoute, router } from 'tinro';
  import Announcer from './components/announcer.svelte';
  import Transition from './components/transition.svelte';
  import Home from './pages/home.svelte';
  import Active from './pages/active.svelte';
  import Navbar from './components/Navbar.svelte';
  router.mode.hash();
  router.subscribe((_) => window.scrollTo(0, 0));
  const Route: any = TinroRoute;
</script>

<Navbar />

<main />

<Announcer />
<Transition>
  <Route path="/">
    <Home />
  </Route>
  <Route path="/active">
    <Active />
  </Route>
</Transition>

<style>
</style>
