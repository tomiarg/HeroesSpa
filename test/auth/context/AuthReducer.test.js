import { render } from "@testing-library/react"
import { AuthReducer, types } from "../../../src/auth"

describe('testing in AuthReducer.js', () => { 
    test('el reducer regresar el estado inicial', () => { 
        const state = AuthReducer({logged:false}, {})
        expect(state).toEqual({logged:false})
    })
    test('should call the login made the authentication and said who is the user', () => { 
        const action = {
           type: types.login,
           payload: {
            name: 'pepito sivoran',
            id: 'el 24'
           }
        }
        const state = AuthReducer({logged: false}, action);
        expect(state).toEqual({
            logged: true,
            user: action.payload

        })
     })
 })