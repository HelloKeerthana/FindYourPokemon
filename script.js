async function fetchData() {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const imgElement = document.getElementById("pokemonSprite");
        const loadingElement = document.getElementById("loading");

        if (!pokemonName) {
        alert("Please enter a Pokémon name.");
        return; // Stop execution if input is empty
    }
        
        loadingElement.style.display = "block";
        imgElement.style.display = "none";

        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

            if (!response.ok) {
                throw new Error("Pokémon not found");
            }

            const data = await response.json();
            const pokemonSprite = data.sprites.front_default;

            imgElement.src = pokemonSprite;
            imgElement.style.display = "block";
        } catch (error) {
            console.error(error);
            alert("Failed to fetch Pokémon. Please try again.");
        } finally {
           loadingElement.style.display = "none";
        }

        document.getElementById("pokemonName").value = '';
    }
