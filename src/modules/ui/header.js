

const Header =()=>{

    const headerElement = document.createElement('header');
    const logo= document.createElement('h2');
    logo.textContent= 'Todo List';

    headerElement.appendChild(logo);
    return headerElement
}

export  default Header;