import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auth reducer', () => {
    it ('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    });

    it ('should store the token when login', () => {
        expect(reducer({
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        }, { 
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-id',
        })).toEqual({
            token: 'some-token',
            userId: 'some-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        })
    })
})