import React from 'react';
import {screen, render} from '@testing-library/react';

import Main  from "./prueba";
//oli puto bryan termina XD
test("Renders Priority Label", () => {
    render(<Main />);
    const linkElement = screen.getByText("Hola");
    expect(linkElement);
});