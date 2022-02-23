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
            headerCount = (Object.keys(data[0]).length) - 3;
            return true;
        };
    };

    $: gridTemplate = `grid-template-columns: repeat(${headerCount}, 1fr);`;        
    
    const categories = {
        name: 'Name',
        max_group: 'Max group size',
        food: 'Food?', 
        sport: 'Sport?',
        music: 'Music',
        drink_quality: 'Drink quality',
        drink_choice: 'Drink variety',
    }
</script>

<section class="pub-listings">
    <Filters
        bind:name={name}
        bind:groupSize={groupSize}
        bind:food={food}
        bind:sport={sport}
    />

    {#if filteredList.length > 0 && dataLoaded()}
        <div class="pub-listings__container" style="{gridTemplate}">
            {#each Object.entries(categories) as [id, label]}
                <span class="pub-listings__header">{label}</span>
            {/each}
           
            
            {#each filteredList as item }
                <PubListing
                    pubData={item}
                    headings={categories}
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
    .pub-listings {
        &__container {
            display: flex;
            flex-wrap: wrap;
        }

        &__header {
            font-size: 1.25rem;
            display: none;
        }

        @media (min-width: 768px) {
            &__container {
                display: grid;
                margin-top: 3rem;
            }

            &__header {
                display: block;
            }
        }
    }
</style>
