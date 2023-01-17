import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
let page = links.map((page)=>{
  return <a key={page}href={"#"+page}>{page}</a>
})
  return <nav>{}
    {page}
  </nav>;
}

export default NavBar;
