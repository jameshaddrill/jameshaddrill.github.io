<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";
    import PubListings from "./components/PubListings/PubListings.svelte";
    import "./styles/main.scss";

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

    const readCollection = async() => {
        const allPubs = [];
        const querySnapshot = await getDocs(collection(db, "Pubs"));
        querySnapshot.forEach((doc) => {
            allPubs.push(doc.data());
        });

        fullList = allPubs;
    }

    const push = async() => {
        try {
        const docRef = await addDoc(collection(db, "Pubs"), {
            name: "Bow Bar",
            atmosphere: 5,
            drink_choice: 5,
            max_group_size: 5,
        });
        console.log("Document written with ID: ", docRef.id);
        } catch (e) {
        console.error("Error adding document: ", e);
        }
    }

    readCollection();
</script>

<main>
	<div class="container mx-auto">
        <h1 class="text-center text-4xl md:text-5xl p-6">Edinburgh Pub Finder</h1>

        {#key fullList}
            <PubListings data={fullList} />
        {/key}
    </div>
</main>
