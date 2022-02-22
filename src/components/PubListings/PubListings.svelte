<script>
    export let data;

    import PubListing from './PubListing.svelte';
    import Filters from '../Filters/Filters.svelte';

    let name;
    let groupSize;
    let food;
    let sport;

    let headerCount;

    $: filteredList = data.filter(item => 
        (typeof groupSize === 'undefined' || item.max_group >= groupSize)
        && ((typeof food === 'undefined' || item.food === food) || food === 'both')
        && ((typeof sport === 'undefined' || item.sport === sport) || sport === 'both')
    );

    $: dataLoaded = () => {
        if (data.length > 0) {
            headerCount = (Object.keys(data[0]).length) - 2;
            return true;
        };
    };

    $: gridTemplate = `grid-template-columns: repeat(${headerCount}, 1fr);`;
    
    const headings = ['name', 'max_group', 'food', 'sport', 'music', 'non_beer', 'drink_quality', 'drink_choice']
</script>

<section class="pub-listings">
    <Filters
        bind:name={name}
        bind:groupSize={groupSize}
        bind:food={food}
        bind:sport={sport}
    />

    {#if filteredList.length > 0 && dataLoaded()}
        <div class="grid table" style="{gridTemplate}">
            <span class="table__header">Name</span>
            <span class="table__header">Group size</span>
            <span class="table__header">Food?</span>
            <span class="table__header">Sports?</span>
            <span class="table__header">Music?</span>
            <span class="table__header">Non-beer choice</span>
            <span class="table__header">Drink quality</span>
            <span class="table__header">Drink choice</span>
            
            {#each filteredList as item }
                <PubListing
                    pubData={item}
                    headings={headings}
                />
            {/each}
        </div>
    {:else if !dataLoaded()}
        <p>Loading</p>
    {:else}
        <p>Sorry there are no pubs that match your criteria</p>
    {/if}
</section>

<style type="scss">

</style>
