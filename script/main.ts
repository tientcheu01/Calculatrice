let affichage = document.getElementById('affichage') as HTMLInputElement;

function ajouter(valeur: string): void {
    affichage.value += valeur;
}

function effacer(): void {
    affichage.value = '';
}

function calculer(): void {
    try {
        affichage.value = eval(affichage.value);
    } catch {
        affichage.value = 'Erreur';
    }
}
