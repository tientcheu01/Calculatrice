var affichage = document.getElementById('affichage');
function ajouter(valeur) {
    affichage.value += valeur;
}
function effacer() {
    affichage.value = '';
}
function calculer() {
    try {
        affichage.value = eval(affichage.value);
    }
    catch (_a) {
        affichage.value = 'Erreur';
    }
}
