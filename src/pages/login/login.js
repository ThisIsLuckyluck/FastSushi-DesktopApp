      // Importation de la fonction getLogin depuis le fichier API_POST.js situé dans le dossier parent de ce script
      import { getLogin } from '../../utils/API_POST.js';
  
      // Ajout d'un écouteur d'événement sur la soumission du formulaire avec l'id 'loginForm'
      document.getElementById('loginForm').addEventListener('submit', async function (event) {
          event.preventDefault(); // Empêche le rechargement de la page
  
          try {
              // Récupération des valeurs des champs d'entrée pour le nom d'utilisateur et le mot de passe
              const username = document.getElementById('username').value;
              const password = document.getElementById('password').value;
  
              // Attente de la réponse de la fonction asynchrone getLogin
              const token = await getLogin(username, password);
  
              // Utilisation des données de la réponse : stockage du jeton (token) dans sessionStorage
              sessionStorage.setItem('token', token);
              window.location.href = "../index.html";
          } catch (e) {
              // En cas d'erreur, une alerte est affichée avec le message d'erreur capturé
              alert('Error: ' + e.message);
          }
      });