<script>
    // export let name = '';
    export let groupSize = 5;
    export let food = 'both';
    export let sport = 'both';
    
    const toggleSport = () => {
        let status = '';
        if (sport === 'both') {
            status = true;
        } else if (sport === true) {
            status = false;
        } else {
            status = 'both';
        }

        sport = status;
    }
</script>

<section class="filters flex justify-center">
    <!-- <div class="filters__section mr-4">
        <label for="name">Pub name</label>
        <input bind:value={name} type="text" id="name" class="filters__input" />
    </div> -->

    <div class="filters__section mr-4">
        <label for="max_group">Group size</label>
        <input bind:value={groupSize} type="number" id="max_group" class="filters__input" />
    </div>

    <div class="filters__section mr-4">
        <label for="food">Food?</label>

        <select name="food" bind:value={food}>
            <option value="{'both'}">Don't care</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
        </select>
    </div>

    <div class="filters__section mr-4">
        <label for="sport">Shows sport?</label>

        <select name="food" bind:value={sport}>
            <option value="{'both'}">Don't care</option>
            <option value="{true}">Yes</option>
            <option value="{false}">No</option>
        </select>
    </div>
</section>

<style type="scss">

</style>