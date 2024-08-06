import React from "react";

function generateLinks(){
  const links = ["home", "about", "projects"]
  return links.map((name,index) => ({id: index +1 , name}))
}

function NavBar() {
   const links = generateLinks()
   console.log(links)
  const linkElements =  links.map((link,index) => {
      return <a key={link.id} href={"#" + link.name}>{link.name}</a>
    })
  

  return <nav>
    {linkElements}
  </nav>;
}

export default NavBar;
