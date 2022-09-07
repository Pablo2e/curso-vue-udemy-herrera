import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {
    // test('debe de hacer match con el snapshot', () => { 
        
    //     const wrapper = shallowMount(Counter)
        
    //     expect(wrapper.html()).toMatchSnapshot()

    //  })
    
    //verificar una etiqueta html

    test('h2 debe tener el valor por defecto "Counter', () => { 
        
        const wrapper = shallowMount(Counter)

        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
     })

     test('el valor por defecto debe de ser 100 en el p', () => { 
        
        const wrapper = shallowMount(Counter)
        // pTags
        //const pTags = wrapper.findAll('p') data-testId='counter' trae todos
        const value = wrapper.find('[data-testId="counter"]').text() // con identificador. Los [] le dice que es un atributo 

        //expect segundo p === 100
        //expect(pTags[1].text()).toBe('100') busca el segundo
        expect(value).toBe('100') // con identificador

      })

})