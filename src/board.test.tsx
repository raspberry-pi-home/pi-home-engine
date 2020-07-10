import { Board } from './board'
const validBoard = require('./__fixtures__/board.json')

test('basic instantiation', () => {
  expect(() => new Board(validBoard)).not.toThrow()
})

test('devices', () => {
  expect(new Board(validBoard).devices()).toEqual([
    { pin: 2 },
    { pin: 3 },
    { pin: 4 },
    { pin: 5 },
    { pin: 6 },
    { pin: 7 },
    { pin: 8 },
    { pin: 9 },
    { pin: 10 },
    { pin: 11 },
    { pin: 12 },
    { pin: 13 },
    { pin: 14 },
    { pin: 15 },
    { pin: 16 },
    { label: 'Led 17', pin: 17, type: 'led' },
    { label: 'Led 18', pin: 18, type: 'led' },
    { pin: 19 },
    { pin: 20 },
    { pin: 21 },
    { label: 'Button 22', pin: 22, type: 'onOffButton' },
    { pin: 23 },
    { pin: 24 },
    { pin: 25 },
    { pin: 26 },
    { label: 'Push Button 27', pin: 27, type: 'pushButton' },
  ])
})

test('dependencies', () => {
  expect(new Board(validBoard).dependencies()).toEqual([
    { inputPin: 22, outputPin: 17 },
    { inputPin: 27, outputPin: 18 },
  ])
})
