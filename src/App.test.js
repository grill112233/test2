import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

var assert = require('assert');

const calculate = require("App").default

describe('Test Calculator', function () {
    describe('functions plus', function () {
        it('1 + 1 should be 2', function () {
            assert.equal(2, calculate.plus(1, 1))
        });
    });

    describe('functions minus', function () {
        it('1 - 1 should be 0', function () {
            assert.equal(0, calculate.minus(1, 1))
        });
    });

    describe('functions multiply', function () {
        it('1 * 1 should be 1', function () {
            assert.equal(1, calculate.multiply(1, 1))
        });
    });

    describe('functions devide', function () {
        it('1 / 1 should be 1', function () {
            assert.equal(1, calculate.devide(1, 1))
        });
    });

    describe('functions devide by zero', function () {
        it('1 / 0 should be 0', function () {
            assert.equal(0, calculate.devide(1, 0))
        });
    });
});

