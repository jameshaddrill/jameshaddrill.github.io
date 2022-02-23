<script>
    import { createEventDispatcher } from 'svelte';
    export let formOpen = false;

    const dispatch = createEventDispatcher();

    let name;
    let max_group;
    let food;
    let sport;
    let music;
    let non_beer;
    let drink_choice;

    let payload = {};

    const submitted = (e) => {
        e.preventDefault();
        
        payload = {
            name,
            max_group,
            food,
            sport,
            music,
            non_beer,
            drink_choice,
        }

        // console.log(payload);
        dispatch("form-submit", payload);
    }

    const closeForm = () => {
        formOpen = false;
    }
</script>

<section class="add-pub__container"> 
    <p class="add-pub__close" on:click={closeForm}>Close x</p>

    <h1>Add a pub</h1>

    <form on:submit="{submitted}" class="add-pub__form">
        <div class="add-pub__input-group">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" bind:value={name} />
        </div>

        <div class="add-pub__input-group">
            <label for="max_group">Max group size</label>
            <input type="text" name="max_group" id="max_group" bind:value={max_group} />
        </div>

        <div class="add-pub__input-group">
            <label for="food">Food</label>
            <select name="food" id="food" bind:value={food}>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>

        <div class="add-pub__input-group">
            <label for="sport">Sport</label>
            <select name="sport" id="sport" bind:value={sport}>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>

        <div class="add-pub__input-group">
            <label for="music">Music</label>
            <select name="music" id="music" bind:value={music}>
                <option value="true">Yes</option>
                <option value="false">No</option>
            </select>
        </div>

        <div class="add-pub__input-group">
            <label for="drink_quality">Drink quality</label>
            <select name="drink_quality" id="drink_quality" bind:value={non_beer}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <div class="add-pub__input-group">
            <label for="drink_choice">Drink variety</label>
            <select name="drink_choice" id="drink_choice" bind:value={drink_choice}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>

        <input type="submit" value="submit" />
    </form>
</section>

<style type="scss">
    .add-pub {
        &__container {
            background: rgba(0,0,0,0.9);
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            overflow: scroll;
            padding: 4rem 2rem;
        }

        &__close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: #fff;
            padding: 0.25rem 0.5rem;
            color: #333;
            border-radius: 3px;
        }

        &__form {
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        &__input-group {
            margin-bottom: 2rem;

            input, select {
                width: 100%;
            }
        }

        p, label {
            color: #333;
        }

        @media (min-width: 768px) {
            &__container {
                justify-content: center;
            }

            &__form {
                width: 60vw;
            }
        }

        input[type="submit"] { 
            background: rgb(243, 214, 52);
            position: absolute;
            bottom: 0;
            right: 0;
            padding: 1rem 1.25rem;
            font-size: 0.75rem;
        }
    }
</style>