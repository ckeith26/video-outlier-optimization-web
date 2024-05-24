import React from 'react';

function Header({ title, authors }) {
  return (
    <header>
      <h1>{title}</h1>
      <div>
        {authors.map((author, index) => (
          <p key={index}>{author}</p>
        ))}
      </div>
    </header>
  );
}

export default Header;
