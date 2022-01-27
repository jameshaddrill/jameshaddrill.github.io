<script>
    export let name = '';
    export let groupSize = 5;
    export let food = 'both';
    export let sport = 'both';

    import Icon from 'svelte-awesome';
    import { faFutbol } from '@fortawesome/free-regular-svg-icons';
    
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

<section class="filters flex justify-start">
    {sport}
    <div class="filters__section mr-4">
        <label for="name">Pub name</label>
        <input bind:value={name} type="text" id="name" class="filters__input" />
    </div>

    <div class="filters__section mr-4">
        <label for="max_group">Group size</label>
        <input bind:value={groupSize} type="number" id="max_group" class="filters__input" />
    </div>

    <div class="filters__section mr-4">
        <p>Food?</p>

        <label>
            <input type="radio" bind:group={food} name="food" value={true} >
            Yes
        </label>
        <label>
            <input type="radio" bind:group={food} name="food" value={false} >
            No
        </label>
        <label>
            <input type="radio" bind:group={food} name="food" value={'both'} >
            Don't care
        </label>
    </div>

    <div class="filters__section mr-4">
        <div class="filters__icon" on:click="{toggleSport}">
            <Icon data={faFutbol} scale="2" />
        </div>

        <!-- <label>
            <input type="radio" bind:group={sport} name="sport" value={true} >
            Yes
        </label>
        <label>
            <input type="radio" bind:group={sport} name="sport" value={false} >
            No
        </label>
        <label>
            <input type="radio" bind:group={sport} name="sport" value={'both'} >
            Don't care
        </label> -->
    </div>
</section>

<style type="scss">
    .sr-only {
        display: none;
    }

    .filters__icon {
        opacity: 1;
        position: relative;

        &--off {
           opacity: 0.2; 
        }

        &--both {
            &::before {
                content: '?';
                position: absolute;
                width: 100%;
                height: 100%;
                font-size: 24px;
                color: red;
                left: 10px;
                top: -2px;
                font-weight: bold;
            }
        }
    }
</style>