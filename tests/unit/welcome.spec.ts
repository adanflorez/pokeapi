import { mount } from '@vue/test-utils';
import Welcome from '@/views/Welcome.vue';

describe('Welcome.vue', () => {
  it('Welcome image exists', () => {
    const wrapper = mount(Welcome);
    const img = wrapper.find('.welcome-img');
    expect(img.exists()).toBeTruthy;
  });

  it('Welcome title exists', () => {
    const wrapper = mount(Welcome);
    const img = wrapper.find('.welcome-title');
    expect(img.exists()).toBeTruthy;
  });

  it('Welcome description exists', () => {
    const wrapper = mount(Welcome);
    const img = wrapper.find('.welcome-desc');
    expect(img.exists()).toBeTruthy;
  });
});