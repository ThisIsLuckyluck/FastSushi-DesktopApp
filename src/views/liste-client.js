export default () => `
    <h1>Liste Client</h1>
    <div class="content">
        <h1>Liste des Clients</h1>
        <input type="search" id="searchInput" placeholder="rechercher un client">
        <table id="client-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Prénom</th>
              <th>Téléphone</th>
              <th>Email</th>
              <th>Nom d'utilisateur</th>
            </tr>
          </thead>
          <tbody id="client-list"></tbody>
        </table>
      </div>
`;