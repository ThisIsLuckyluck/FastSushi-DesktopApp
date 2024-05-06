export default function NavBar() {
    return (
        <nav className="NavBar">
            <ul>
                <li><a href="#">Accueil</a></li>
                <li><a href="#">Liste des clients</a></li>
                <li><a href="#">Les Menus</a></li>
                <ul>
                    <li><a href="#">Entrées</a></li>
                    <li><a href="#">Plats</a></li>
                    <li><a href="#">Desserts</a></li>
                </ul>
            </ul>
        </nav>
    )
}