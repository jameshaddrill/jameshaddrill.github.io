<script>
    // export let name = '';
    export let groupSize = 5;
    export let food = 'both';
    export let sport = 'both';
    
    let showFilters = true;
    
    const toggleFilters = () => {
        showFilters = !showFilters;
    }
</script>

<section class="filters flex flex-col md:flex-row justify-center">
    <h2
        class="text-2xl md:hidden text-center mb-4 border-y-2"
        on:click={toggleFilters}
    >
        Filters 

        {#if showFilters}
            -
        {:else}
            +
        {/if}
    </h2>

    <!-- <div class="filters__section mr-4">
        <label for="name">Pub name</label>
        <input bind:value={name} type="text" id="name" class="filters__input" />
    </div> -->
    {#if showFilters}
    <div class="filters__section">
        <label for="max_group">Group size</label>
        <input bind:value={groupSize} type="number" id="max_group" class="filters__input" />
    </div>

    <div class="filters__section">
        <label for="food">Food?</label>

        <select name="food" bind:value={food} class="filters__input">
            <option value="{'both'}">Don't care</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
        </select>
    </div>

    <div class="filters__section">
        <label for="sport">Shows sport?</label>

        <select name="food" bind:value={sport} class="filters__input">
            <option value="{'both'}">Don't care</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
        </select>
    </div>
    {/if}
</section>

<style type="scss">
    .filters {
        &__section {
            text-align: center;
            margin-bottom: 2rem;
        }
        &__input {
            width: 100%;
            padding: 0.4rem;
        }

        @media (min-width: 768px) {
            &__section {
                text-align: left;
                margin-bottom: 0;
                margin-right: 2rem;

                label {
                    margin-bottom: 0.5rem;
                    text-align: center;
                }
            }

            &__input {
                width: auto;
            }
        }
    }
</style>