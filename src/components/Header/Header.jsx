import React from 'react';

function Header() {
  return (
    <header className="header" style={{ background: 'red'}}>
      <div className="container">
       
        <form>
          <input 
            type="search"
            placeholder="Buscar Produtos"
            className="search_input"
            required
          />
        </form>

      </div>
    </header>
  );
}

export default Header;
