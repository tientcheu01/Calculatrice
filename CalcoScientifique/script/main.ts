let affichage = document.getElementById('affichage') as HTMLInputElement;
let scientifique = document.getElementById('scientifique') as HTMLElement;
let modeScientifique = true;

function ajouter(valeur: string): void {
    affichage.value += valeur;
}

function effacer(): void {
    affichage.value = '';
}

function calculer(): void {
    try {
        affichage.value = eval(affichage.value);
    } catch (e) {
        affichage.value = 'Erreur';
    }
}

function puissance(): void {
    affichage.value += '**';
}

function factoriel(): void {
    let n = parseInt(affichage.value);
    if (isNaN(n) || n < 0) {
        affichage.value = 'Erreur';
        return;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    affichage.value = result.toString();
}

function racine(): void {
    affichage.value = Math.sqrt(parseFloat(affichage.value)).toString();
}

function conversion(): void {
    let n = parseInt(affichage.value);
    affichage.value = 'Bin: ' + n.toString(2) + ' Hex: ' + n.toString(16) + ' Dec: ' + n.toString();
}

function afficherHeure(): void {
    document.getElementById('heure')!.innerText = new Date().toLocaleTimeString();
}

function toggleMode(): void {
    if (modeScientifique) {
        scientifique.style.display = 'none';
    } else {
        scientifique.style.display = 'grid';
    }
    modeScientifique = !modeScientifique;
}

setInterval(afficherHeure, 1000);
afficherHeure();
