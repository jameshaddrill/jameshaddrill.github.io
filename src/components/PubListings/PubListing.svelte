<script>
    export let pubData;
    export let headings;
    
    $: labelClasses = (id) => {
        let base = 'flex flex-col md:flex-row justify-center md:justify-start items-center py-4 md:border-b-2';
        let extraClasses = '';
        if (id === 'name') {
            extraClasses = "border-b-2 w-full text-xl"
        } else {
            extraClasses = "w-1/2"
        }

        return `${base} ${extraClasses}`;

    }
</script>

{#each Object.entries(headings) as [id, label]}
<span class="{labelClasses(id)}">
    {#if id !== 'name'}
        <span class="md:hidden">
            {label}
        </span>
    {/if}
    {#if id === 'drink_quality'}
        {#each {length: pubData[id]} as _, i}
            🍺
        {/each}
    {:else if id === 'drink_choice'}
        {#each {length: pubData[id]} as _, i}
            🍸
        {/each}
    {:else if pubData[id] === true}
        👍
    {:else if pubData[id] === false}
        👎
    {:else}
        {pubData[id]}
    {/if}
</span>
{/each}

<style type="scss">
   .pub-listing {
       background: #aaa;

       &:nth-child(even) {
           background: transparent;
       }
   }
</style>


