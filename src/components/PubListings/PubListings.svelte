<script>
    export let data;

    import PubListing from './PubListing.svelte';
    import Filters from '../Filters/Filters.svelte';

    let name;
    let groupSize;
    let food;
    let sport;

    $: filteredList = data.filter(item => 
        (typeof groupSize === 'undefined' || item.max_group >= groupSize)
        && ((typeof food === 'undefined' || item.food === food) || food === 'both')
        && ((typeof sport === 'undefined' || item.sport === sport) || sport === 'both')
    );
</script>

<section class="pub-listings">
    <Filters
        bind:name={name}
        bind:groupSize={groupSize}
        bind:food={food}
        bind:sport={sport}
    />
    
    <ul>
        {#each filteredList as item }
            <PubListing pubData={item} />
        {/each}
    </ul>
</section>
