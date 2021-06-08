import { shallowMount } from '@vue/test-utils'
import UIButton from '@/components/ui/UIButton.vue'

describe('UIButton.vue', () => {
  it('renders props.msg when passed', () => {
    const text = 'new message'
    const wrapper = shallowMount(UIButton, {
      propsData: { text }
    })
    expect(wrapper.text()).toMatch(text)
  })
})
