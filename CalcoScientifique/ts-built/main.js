var affichage = document.getElementById('affichage');
var scientifique = document.getElementById('scientifique');
var modeScientifique = true;
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
    catch (e) {
        affichage.value = 'Erreur';
    }
}
function puissance() {
    affichage.value += '**';
}
function factoriel() {
    var n = parseInt(affichage.value);
    if (isNaN(n) || n < 0) {
        affichage.value = 'Erreur';
        return;
    }
    var result = 1;
    for (var i = 2; i <= n; i++) {
        result *= i;
    }
    affichage.value = result.toString();
}
function racine() {
    affichage.value = Math.sqrt(parseFloat(affichage.value)).toString();
}
function conversion() {
    var n = parseInt(affichage.value);
    affichage.value = 'Bin: ' + n.toString(2) + ' Hex: ' + n.toString(16) + ' Dec: ' + n.toString();
}
function afficherHeure() {
    document.getElementById('heure').innerText = new Date().toLocaleTimeString();
}
function toggleMode() {
    if (modeScientifique) {
        scientifique.style.display = 'none';
    }
    else {
        scientifique.style.display = 'grid';
    }
    modeScientifique = !modeScientifique;
}
setInterval(afficherHeure, 1000);
afficherHeure();
