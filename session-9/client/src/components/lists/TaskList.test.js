import TaskList from "./TaskList";
import { render, screen } from '@testing-library/react';
import React from "react";

// 0 - Renderiza el componente correctamente
test('0 - Renderiza el componente correctamente', () => { 
    const r = render(<TaskList />);
    expect(r).toBeDefined(); //✅
 });