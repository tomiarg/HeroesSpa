import { render } from "@testing-library/react"
import { AuthContext } from "../../../src/auth"
import { MemoryRouter } from "react-router-dom"
import { AppRouter } from "../../../src/router/AppRouter"

describe('pruebas en el <AppRouter/>', () => { 
    test('debe de mostrar el login si no está autenticado', () => { 
        const contextValue = {
            logged: false,
        }
        render(
            <MemoryRouter initialEntries={'/marvel'}>
                <AuthContext.Provider value={contextValue}>
                    <AppRouter/>
                </AuthContext.Provider>   

            </MemoryRouter>
            
        )
     })
 })