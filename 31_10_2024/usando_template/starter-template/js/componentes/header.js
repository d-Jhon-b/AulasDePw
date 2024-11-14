export default function navBar(){
    const navBar = document.createElement('nav')

    navBar.classList.add('light-blue','lighten-1')
    navBar.innerHTML = `
<div role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo">Logo</a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Navbar Link</a></li>
        <li><a href="#home">Navbar home</a></li>
        <li><a href="#contatos">Navbar contato</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Navbar Link</a></li>
        <li><a href="#home">Navbar home</a></li>
        <li><a href="#contatos">Navbar contato</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
</div>
`
return navBar
}
