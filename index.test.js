const test = require('node:test');
const assert = require('assert/strict');

const {
    Movie
} = require('./index')

test('it is testing', () => {
    assert(true, "Testing test")
})

test('it has a movie', () => {

    const movie = new Movie()
    assert(movie != null)
})

test('movie has a name', () => {
    const movie = new Movie('Matrix')
    assert(movie != null)
})


