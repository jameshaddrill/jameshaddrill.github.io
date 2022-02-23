<script>
    export let pubData;
    export let headings;
</script>

{#each Object.entries(headings) as [id, label]}
<span class="listing {id === 'name' ? 'listing--name' : ''}">
    {#if id !== 'name'}
        <span class="md:hidden">
            {label}
        </span>
    {/if}
    
    <span class="listing__value {id === 'max_group' ? 'listing__value--max-group' : ''}">
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
</span>
{/each}

<style type="scss">
    .listing {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1.5rem 0;
        width: 50%;

        &--name {
            border-bottom: 2px solid #d4d4d4;
            width: 100%;
            font-size: 1.25rem;
        }

        &__value {
            font-size: 1.25rem;
        }

        @media (min-width: 768px) {
            flex-direction: flex-row;
            justify-content: flex-start;
            border-bottom: 2px solid #d4d4d4;
            width: 100%;
            align-items: flex-start;

            &--name {
                text-align: left;
                padding-right: 1rem;
            }
            &__value {
                &--max-group {
                    text-align: center;
                }
            }
        }
    }
</style>


