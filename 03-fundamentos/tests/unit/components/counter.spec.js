import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'

describe('Counter Component', () => {

    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })
    // test('debe de hacer match con el snapshot', () => { 
        
    //     const wrapper = shallowMount(Counter)
        
    //     expect(wrapper.html()).toMatchSnapshot()

    //  })
    
    //verificar una etiqueta html

    test('h2 debe tener el valor por defecto "Counter', () => { 
        
        expect(wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()

        expect(h2Value).toBe('Counter')
     })

    test('el valor por defecto debe de ser 100 en el p', () => { 
    
        // pTags
        //const pTags = wrapper.findAll('p') data-testId='counter' trae todos
        const value = wrapper.find('[data-testId="counter"]').text() // con identificador. Los [] le dice que es un atributo 

        //expect segundo p === 100
        //expect(pTags[1].text()).toBe('100') busca el segundo
        expect(value).toBe('100') // con identificador

    })

    test('debe incrementar en 1 el valor del contador', async() => { 
       
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button') //desestructura ambos botones en orden

        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await increaseBtn.trigger('click')
        await decreaseBtn.trigger('click')
        await decreaseBtn.trigger('click')

        const value = wrapper.find('[data-testId="counter"]').text()

        expect(value).toBe('101')
    })

    test('debe de establecer el valor por defecto', () => { 
        
        const {start} = wrapper.props()

        const value = wrapper.find('[data-testId="counter"]').text()

        expect( Number(value)).toBe(start)

     })

     test('debe de mostrar la prop title', () => { 
        
        const title = 'Hola Mundo'
        
        const wrapper = shallowMount(Counter, {
            props: {
                title,
            }
        })        

        expect(wrapper.find('h2').text()).toBe(title)
    })

})