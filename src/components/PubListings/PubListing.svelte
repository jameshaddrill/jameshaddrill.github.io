<script>
    export let pubData;
    export let headings;
    // const headings = ['name', 'max_group', 'food', 'sport', 'music', 'non_beer', 'drink_quality', 'drink_choice']
</script>

{#each headings as heading }
<span>
    <b>{pubData[heading]}</b>
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


