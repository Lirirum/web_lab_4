// Footer.js
import React from 'react';

const Footer = ({ selectedCount }) => {
  return (
    <footer>
      <p>Обрано товарів: {selectedCount}</p>
    </footer>
  );
};

export default Footer;