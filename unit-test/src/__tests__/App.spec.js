import Vuex from "vuex";
import {createLocalVue, shallowMount} from "@vue/test-utils";
import {getters} from "@/store";
import App from "@/App";

describe('App.vue', () => {

    it('should header exists', () => {
        const wrapper = shallowMount(App, {
            computed: {
                getCount: jest.fn(),
                message: jest.fn()
            }
        })
        const headerElement = wrapper.find('h1')
        expect(headerElement.exists()).toBeTruthy()
    })

    it('should header text equals Daily Corona Cases in Turkey', () => {
        const wrapper = shallowMount(App, {
            computed: {
                getCount: jest.fn(),
                message: jest.fn()
            }
        })
        const headerElement = wrapper.find('h1')
        expect(headerElement.text()).toMatch('Daily Corona Cases in Turkey')
    })

    describe('notification area', () => {
        const classTC = [
            {
                name: 'should class danger when count greater and equal than 10',
                class: 'danger',
                count: 10,
            },
            {
                name: 'should class normal when count greater and equal than 5 and less than 10',
                class: 'normal',
                count: 7,
            },
            {
                name: 'should class safe when count less than 5',
                class: 'safe',
                count: 2,
            }
        ]

        for (const testCase of classTC ) {

            it(testCase.name, () => {
                const wrapper = mountComponent(testCase.count)
                const notificationElement = wrapper.find('.notificationArea')
                expect(notificationElement.classes().includes(testCase.class)).toBeTruthy()
            })
        }

        const messageTC = [
            {
                name: `should notification message danger when count greater and equal than 10`,
                message: `Danger!!! Case count is 10`,
                count: 10,
            },
            {
                name: `should notification message normal when count greater and equal than 5 and less than 10`,
                message: `Life is normal. Case count is 7`,
                count: 7,
            },
            {
                name: `should notification message safe when count less than 5`,
                message: `So safe. Case count is 2`,
                count: 2,
            },
        ]

        for (const testCase of messageTC ) {

            it(testCase.name, () => {
                const wrapper = mountComponent(testCase.count)
                const notificationElement = wrapper.find('.notificationArea')
                expect(notificationElement.text()).toMatch(testCase.message)
            })
        }
    })

    const mountComponent = (count) => {
        const localVue = createLocalVue()
        localVue.use(Vuex)
        return  shallowMount(App, {
            localVue,
            store: new Vuex.Store({
                state: {
                    count
                },
                getters
            })
        })
    }
})