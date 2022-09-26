import { shallowMount } from '@vue/test-utils'
import PokemonPicture from '@/components/PokemonPicture'

describe('PokemonPicture component', () => { 
    
    test('debe de hacer match con el snapshot', () => {
        //importar el componentey sus props
        const wrapper = shallowMount(PokemonPicture, {  
           props: { 
            pokemonId: 1,
            showPokemon: false
           } 
        })

        expect( wrapper.html() ).toMatchSnapshot()
        
    })

    test('debe de mostrar la imagen oculta y el pokemon 100', () => {
        
        const wrapper = shallowMount(PokemonPicture, {
            props: {
             pokemonId: 100,
             showPokemon: false
            } 
        })

        //busca todas las img
        const [ img1, img2 ] = wrapper.findAll('img')

        // busca que sea verdad que exista
        expect( img1.exists() ).toBeTruthy() 
        expect( img2 ).toBe(undefined)

        //classes() busca las clases dentro de ese img
        expect( img1.classes('hidden-pokemon') ).toBeTruthy() 
        //attributes() busca los atributos dentro de ese img
        expect( img1.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')        
        
    })

    test('debe de mostrar el pokemon si showPokemon:true', () => {
        
        const wrapper = shallowMount(PokemonPicture, {
            props: {
             pokemonId: 100,
             showPokemon: true
            } 
        })

        //busca el tag img
        const img1 = wrapper.find('img')

        expect( img1.exists() ).toBeTruthy()

        //classes() busca las clases dentro de ese img
        expect( img1.classes('hidden-pokemon') ).toBe(false) 
        //diferente forma de validad a la de arriba
        expect( img1.classes('fade-in') ).toBe(true)

    })

 })