<script lang="ts">
    import { getContext, setContext } from "svelte";  
    import { links } from `./store.js`;

    type LinkType = {
      title: string;
      url: string;
      id: string;
    };

    let forms = [{ link: '', linkName: '', showForm: false, id: '' }];

    function handleInputChange(event, index) {
      forms[index].link = event.target.value;
    }

    function handleNameChange(event, index) {
        forms[index].linkName = event.target.value;
    }

    function handleSubmit(index) {
        const newId = Date.now().toString();
        const newLink = {
            title: forms[index].linkName,
            id: newId, 
            url: forms[index].link
        };

        // Update the store
        links.update(currentLinks => [...currentLinks, newLink]);

        forms[index].linkName = '';
        forms[index].link = '';
        forms[index].id = newId;
        forms = [...forms, { link: '', linkName: '', showForm: false, id: '' }];
    }

    function toggleForm(index) {
        forms[index].showForm = !forms[index].showForm;
    }

    function handleDelete(index) {
        const idToDelete = forms[index].id;
        // Update the store
        links.update(currentLinks => currentLinks.filter(link => link.id !== idToDelete));
        forms = forms.filter((_, i) => i !== index);
        if (forms.length === 0) {
            forms = [{ link: '', linkName: '', showForm: false, id: '' }];
        }
    }
</script>

{#each forms as form, index (form.id)}
    {#if form.showForm}
        <div class="bg-black bg-opacity-20 rounded-3xl p-6 mb-4 relative">
            <form on:submit|preventDefault={() => handleSubmit(index)} class="flex flex-col space-y-2 items-center text-white">
                <label for="linkName" class="sr-only">Link Name</label>
                <input
                  type="text"
                  name="linkName"
                  id="linkName"
                  placeholder="Name your link"
                  bind:value={form.linkName}
                  on:input={(event) => handleNameChange(event, index)}
                  class="bg-transparent placeholder-gray-500 border border-white rounded-full px-4 py-2 w-full"
                />
                <label for="links" class="sr-only">Links</label>
                <input
                  type="text"
                  name="link"
                  id="link"
                  placeholder="Add links to your socials"
                  bind:value={form.link}
                  on:input={(event) => handleInputChange(event, index)}
                  class="bg-transparent placeholder-gray-500 border border-white rounded-full px-4 py-2 w-full"
                />
                <button type="submit" class="bg-purple-500 text-white rounded-full px-4 py-2 w-full">Add Link</button>
            </form>
            <button on:click={() => handleDelete(index)} class="absolute bottom-2 right-2 bg-red-500 text-white rounded-full px-2 py-1 text-xs">Delete Link</button>
        </div>
    {/if}
    {#if !form.showForm}
        <button on:click={() => toggleForm(index)} class="bg-purple-500 text-white rounded-full px-4 py-2 w-full mb-4 text-center mx-auto block">+ Add Link</button>
    {/if}
{/each}
