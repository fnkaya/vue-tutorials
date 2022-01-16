import {shallowMount} from "@vue/test-utils"
import Home from '@/views/Home';

describe("Home.vue", () => {
    it('should component exits', () => {
        const wrapper = shallowMount(Home);
        expect(wrapper.exists()).toBeTruthy();
    });
});