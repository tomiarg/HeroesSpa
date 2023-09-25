import {render, screen} from "@testing-library/react"
import { PublicRoute } from "../../../src/router/PublicRoute"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter, Route, Routes } from "react-router-dom"

describe('pruebas en el <PublicRoute/>', () => { 
    test('if log is true should show the children', () => { 
        const contextValue = {
            logged: false
        } 
        render(
        <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Pública</h1>
                </PublicRoute>
        </AuthContext.Provider>      
        );
        expect(screen.getByText('Ruta Pública')).toBeTruthy();
    })
    test('debe de navegar si está autenticado', () => { 

        const contextValue = {
            logged: true,
            user:{
                name: 'pipo gorosito',
                id: '121212'
            }
        } 
        render(
        <AuthContext.Provider value={contextValue}>
            <MemoryRouter initialEntries={['/login']}>
                <Routes>
                    <Route path='login' element={
                    <PublicRoute>
                      <h1>Ruta Pública</h1>
                    </PublicRoute>
                    }/>
                    <Route path='marvel' element={<h1>Página de MArvel</h1>}/>
                </Routes>
            </MemoryRouter>
                
        </AuthContext.Provider>      
        );
        expect(screen.getByText('Página de MArvel')).toBeTruthy();

     })
 })