import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('contenuto footer testo e logo', () => {
    render(<Footer />);
    const logoImage = screen.getByAltText('Durotar logo');
    expect(logoImage).toBeInTheDocument();
    expect(logoImage).toHaveAttribute('src', '/assets/imgs/forTheHorde.webp');
});


