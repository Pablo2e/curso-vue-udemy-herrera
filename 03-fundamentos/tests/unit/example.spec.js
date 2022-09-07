import { shallowMount } from '@vue/test-utils'

describe('Example component', () => {
  test('Debe de ser mayor a 10', () => {

    // Arreglar
    let value = 10

    // Estímulo
    value = value + 2

    // Observar el resultado
    expect(value).toBeGreaterThan(10)
  })
})
