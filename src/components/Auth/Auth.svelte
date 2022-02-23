<script>
    import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
    export let userDetails = null;

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    getAuth().onAuthStateChanged(user => {
        if (user) {
            console.log('User is signed in.')
            console.log(user);
            userDetails = user;
        } else {
            console.log(' User is signed out.');
        }
    });

    const signInTrigger = () => {
        signInWithPopup(auth, provider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            userDetails = result.user;
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
        });
    }

    const signOutTrigger = () => {
        signOut(auth).then(() => {
        // Sign-out successful
            console.log('signed ou');
            userDetails = null;
        }).catch((error) => {
        // An error happened.
        });
    }

    // reactive helper variable
    $: loggedIn = userDetails !== null;
</script>

<!-- we will expose all required methods and properties on our slot -->
<div>
    <slot {userDetails} {loggedIn}></slot>

    <div class="auth-bar">
        {#if loggedIn}
            <p class="auth-bar__welcome">Welcome {userDetails.displayName}</p>
            <p>🍺</p>
            <p class="auth-bar__login" on:click={signOutTrigger}>SIGN OUT</p>
        {:else}
            <p class="auth-bar__welcome">Hi there</p>
            <p>🍺</p>
            <p class="auth-bar__login" on:click={signInTrigger}>SIGN IN</p>
        {/if}
    </div>
</div>

<style type="scss">
    .auth-bar {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        padding: 1rem 1.5rem;
        background: rgb(255, 193, 255);

        p {
            font-size: 2rem;
            font-weight: 600;
            color: #333;
            align-self: center;
            justify-self: center;

            &.auth-bar__login {
                justify-self: flex-end;
                font-size: 0.8rem;
                border: 1px solid rgb(250, 147, 250);
                padding: 0.5rem 0.75rem;
                border-radius: 4px;

                &:hover,
                &:focus {
                    cursor: pointer;
                    background: rgb(250, 147, 250);
                    color: #000;
                }
            }

            &.auth-bar__welcome {
                justify-self: flex-start;
                font-size: 0.8rem;
            }
        }

        @media (min-width: 768px) {
            padding: 1rem 3rem;

            p {
                font-size: 2rem;
            }

            &.auth-bar__login,
            &.auth-bar__welcome {
                font-size: 1rem;
            }
        }
    }
</style>