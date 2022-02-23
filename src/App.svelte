<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
    import PubListings from "./components/PubListings/PubListings.svelte";
    import AddPubs from "./components/AddPubs/AddPubs.svelte";
    import Auth from './components/Auth/Auth.svelte';
    import "./styles/main.scss";

    let showForm = false;
    let loggedIn = false;

    const firebaseApp = initializeApp({
        apiKey: "AIzaSyD7IVKm4pg_IG3FIYjzqrjVVet7KocGKcM",
        authDomain: "edinburgh-pubs-24942.firebaseapp.com",
        projectId: "edinburgh-pubs-24942",
        storageBucket: "edinburgh-pubs-24942.appspot.com",
        messagingSenderId: "600769056466",
        appId: "1:600769056466:web:ae2e55b79a8c7661eea70b",
        measurementId: "G-HC10EHXZBN"
    });

    const db = getFirestore();
    let fullList = new Array;

    // database stuff
    const readCollection = async() => {
        const allPubs = [];
        const querySnapshot = await getDocs(collection(db, "Pubs"));
        querySnapshot.forEach((doc) => {
            allPubs.push(doc.data());
        });

        fullList = allPubs;
    }

    const submitNewPub = (event) => {
        console.log(event.detail);
        let payload = event.detail;
        payload.submittedBy = user.email;
        push(payload)
    }

    const push = async(payload) => {
        try {
        const docRef = await addDoc(collection(db, "Pubs"), payload);
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

     const toggleAddPub = () => {
            showForm = !showForm;
     }

    readCollection();
</script>

<main>
    <Auth
        let:userDetails
        let:loggedIn
        let:loginWithGoogle
        let:loginWithEmailPassword
        let:logout
    >
        {#if loggedIn}
            <button on:click="{toggleAddPub}">Add pub</button>
        {/if}
    </Auth>

    <div class="app-container container {showForm ? 'form-visible' : ''}">
        

        <h1 class="text-center text-4xl md:text-5xl p-6">Edinburgh Pub Finder</h1>
        
        {#key fullList}
            <PubListings data={fullList} />
        {/key}

        {#if showForm}
            <AddPubs bind:formOpen={showForm} on:form-submit={submitNewPub}></AddPubs>
        {/if}
    </div>
</main>

<style type="scss"> 
    .app-container {
        background: #3333;
        padding: 0.75rem;
        margin: 0 auto;

        &.form-visible {
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
    }
    button {
        background: rgb(243, 214, 52);
        border-radius: 4px 0 0;
        border-color: rgb(250, 214, 7);
        position: fixed;
        bottom: 0;
        right: 0;
        padding: 1rem 1.25rem;
        font-size: 0.75rem;
    }
</style>
