import {render, screen} from "@testing-library/react";
import { AuthContext } from "../../../src/auth";
import { MemoryRouter } from "react-router-dom"
import { PrivateRoute } from "../../../src/router/PrivateRoute";

describe('pruebas en el <PrivateRoute/>', () => { 
    test('if log is true should show the children', () => { 
        Storage.prototype.setItem = jest.fn()
        const contextValue = {
            logged: true,
            user:{
                name:'pepito cibrian',
                id: 'balaas'
            }
        } 
        render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <PrivateRoute>
                    <h1>Ruta Privada</h1>
                </PrivateRoute>
            </MemoryRouter>
                
        </AuthContext.Provider>      
        );
        expect(screen.getByText('Ruta Privada')).toBeTruthy();
        expect(localStorage.setItem).toHaveBeenCalledWith("lastPath","/search?q=batman");
    })
 })