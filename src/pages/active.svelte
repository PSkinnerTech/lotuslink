<script lang="ts">
  import PhoneDisplay from '../components/ui/PhoneDisplay.svelte';
  import Links from '../components/ui/Links.svelte';
  import BalanceCheck from '../components/ui/BalanceCheck.svelte';
  import { setContext } from 'svelte';

  type LinkType = {
    title: string;
    url: string;
    id: string;
  };

  let link = '';
  let links: LinkType[] = [];
  const setLink = value => link = value;
  const setLinks = value => links = value;
  const handleSubmit = () => { /* implementation */ };
  const handleDelete = id => { /* implementation */ };

  setContext('StateContext', { link, links, setLink, setLinks, handleSubmit, handleDelete });
</script>

<div class="main">
  <div class="content">
    <div class="overlay">
      <BalanceCheck {walletAddress} />
      <PhoneDisplay {links} />
      <Links />
    </div>
  </div>
</div>
