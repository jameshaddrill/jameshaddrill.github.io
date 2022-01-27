<script>
    import { initializeApp } from "firebase/app";
    import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

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

    let fullList = [];

    async function readCollection() {
        const allPubs = [];
        const querySnapshot = await getDocs(collection(db, "Pubs"));
        querySnapshot.forEach((doc) => {
            console.log(doc.data());
            allPubs.push(doc.data());
            console.log(allPubs)
        });

        fullList = allPubs;
        console.log(fullList);
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
	<div class="flex-row">
        <div class="flex-column">
            <h1>Pubs</h1>
            <ul>
                {#each fullList as item }
                    <li>
                        <b>{item.name}</b> - group size = {item.max_group}
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</main>

<style>
	
</style>