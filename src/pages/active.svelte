<script lang='ts'>
  import PhoneDisplay from '../components/ui/PhoneDisplay.svelte';
  import Links from '../components/ui/Links.svelte';
  import { setContext } from 'svelte';

  let link = '';
  let links = [];
  const setLink = value => link = value;
  const setLinks = value => links = value;
  const handleSubmit = () => { /* implementation */ };
  const handleDelete = id => { /* implementation */ };

  setContext('StateContext', { link, links, setLink, setLinks, handleSubmit, handleDelete });
</script>

<div class="main">
  <div class="content">
    <div class="overlay">
      <PhoneDisplay />
      <Links />
    </div>
  </div>
</div>
