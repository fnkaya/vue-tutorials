import {createLocalVue, shallowMount} from "@vue/test-utils";
import Vuex from "vuex";
import {state, getters, actions, mutations} from "@/store";
import Counter from "@/Counter";

describe('Counter.vue', () => {

    it('should component exists', () => {
        const wrapper = mountComponent()
        expect(wrapper.exists()).toBeTruthy()
    })

    describe('Buttons', () => {

        for (const buttonText of ['Increase', 'Decrease']) {

            it(`should ${buttonText} button exists`, () => {
                const wrapper = mountComponent()
                const button = wrapper.findAll('button').filter(button => button.text() === buttonText)
                expect(button.exists()).toBeTruthy()
            })
        }
    })

    describe('Methods', () => {

        it('should increase method call when increase button clicked', async () => {
            const wrapper = mountComponent()
            const mockFn = jest.fn() // const mockFn = jest.spyOn(wrapper.vm, 'increase')
            wrapper.setMethods({increase: mockFn})
            const button = wrapper.findAll('button').filter(button => button.text() === 'Increase')
            await button.trigger('click')
            expect(mockFn).toHaveBeenCalled()
        })

        it('should decrease method call when decrease button clicked', async () => {
            const wrapper = mountComponent()
            const mockFn = jest.fn() // const mockFn = jest.spyOn(wrapper.vm, 'increase')
            wrapper.setMethods({decrease: mockFn})
            const button = wrapper.findAll('button').filter(button => button.text() === 'Decrease')
            await button.trigger('click')
            expect(mockFn).toHaveBeenCalled()
        })

        it('should increment action invoke when increase button clicked', () => {
            const dispatch = jest.fn()
            const localThis = {
                $store: {
                    dispatch
                }
            }
            Counter.methods.increase.call(localThis)
            expect(dispatch).toHaveBeenCalledWith('increment')
        })

        it('should count decrease when decrease button clicked', () => {
            const dispatch = jest.fn()
            const localThis = {
                $store: {
                    dispatch
                }
            }
            Counter.methods.decrease.call(localThis)
            expect(dispatch).toHaveBeenCalledWith('decrement')
        })

        it('should addToCount mutation call when increment action or decrement action invoked', () => {
            const context = {
                commit: jest.fn()
            }
            actions.increment(context)
            expect(context.commit).toHaveBeenCalledWith('addToCount', 1)
            actions.decrement(context)
            expect(context.commit).toHaveBeenCalledWith('addToCount', -1)
        })

        it('should count value be 1 when increase action invoked 2 times and decrease action 1 time', () => {
            const mockState = {...state}
            mutations.addToCount(mockState, 1)
            mutations.addToCount(mockState, 1)
            mutations.addToCount(mockState, -1)
            expect(mockState.count).toEqual(1)
        })
    })

    describe('Count text', () => {

        it('should count text be visible', () => {
            const wrapper = mountComponent()
            const countElement = wrapper.find('span')
            expect(countElement.exists()).toBeTruthy()
            expect(countElement.isVisible()).toBeTruthy()
            expect(countElement.text()).toMatch("0k")
        });
    })

    const mountComponent = () => {
        const localVue = createLocalVue()
        localVue.use(Vuex)

        return shallowMount(Counter, {
            localVue,
            store: new Vuex.Store({
                state: {...state},
                getters: {...getters}
            })
        })
    }
})