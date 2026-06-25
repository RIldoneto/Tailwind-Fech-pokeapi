async function fetchData() {
    const nome = document.getElementById("pokemonName").value.trim().toLowerCase();
    if (!nome) return alert("Digite o nome de um Pokémon!");

    const img = document.getElementById("pokemonSprite");
    const nomeDisplay = document.getElementById("pokemonNameDisplay");
    const placeholder = document.getElementById("placeholder");
    const statusDiv = document.getElementById("status-info");
    const movesDiv = document.getElementById("moves-info");

    statusDiv.innerHTML = "";
    movesDiv.innerHTML = "";

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${nome}`);
        if (!res.ok) throw new Error();

        const data = await res.json();

        // Imagem
        img.src = data.sprites.other["official-artwork"].front_default || data.sprites.front_default;
        img.classList.remove("hidden");
        placeholder.classList.add("hidden");

        // Nome
        nomeDisplay.textContent = data.name.toUpperCase();

        // Status
        data.stats.forEach(s => {
            const div = document.createElement("div");
            div.className = "flex justify-between bg-slate-800 p-3 rounded-xl";
            div.innerHTML = `<span>${s.stat.name}</span><span class="font-bold">${s.base_stat}</span>`;
            statusDiv.appendChild(div);
        });

        // Movimentos
        data.moves.slice(0, 8).forEach(m => {
            const div = document.createElement("div");
            div.className = "bg-slate-800 p-3 rounded-xl text-sm";
            div.textContent = m.move.name.replace("-", " ");
            movesDiv.appendChild(div);
        });

    } catch (e) {
        alert("Pokémon não encontrado!");
        img.classList.add("hidden");
        placeholder.classList.remove("hidden");
        nomeDisplay.textContent = "nome";
    }
}

// Buscar com Enter
document.getElementById("pokemonName").addEventListener("keypress", (e) => {
    if (e.key === "Enter") fetchData();
});
