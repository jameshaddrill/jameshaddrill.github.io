<script>
    // export let name = '';
    export let groupSize = 5;
    export let food = 'both';
    export let sport = 'both';
    
    let showFilters = true;
    
    const toggleFilters = () => {
        showFilters = !showFilters;
    }

    const filterClasses = () => {
        if (!showFilters) {
            return 'hidden';
        } else {
            return 'block'
        }
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
    <div class="filters__section text-center md:text-left md:mr-4 mb-4 md:mb-0">
        <label for="max_group">Group size</label>
        <input bind:value={groupSize} type="number" id="max_group" class="filters__input w-full md:w-auto" />
    </div>

    <div class="filters__section text-center md:text-left  md:mr-4 mb-4 md:mb-0">
        <label for="food">Food?</label>

        <select name="food" bind:value={food} class="w-full md:w-auto">
            <option value="{'both'}">Don't care</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
        </select>
    </div>

    <div class="filters__section  text-center md:text-left md:mr-4 mb-4 md:mb-0">
        <label for="sport">Shows sport?</label>

        <select name="food" bind:value={sport} class=" w-full md:w-auto">
            <option value="{'both'}">Don't care</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
        </select>
    </div>
    {/if}
</section>

<style type="scss">

</style>