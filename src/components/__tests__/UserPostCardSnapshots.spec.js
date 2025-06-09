// tests/UserPostCard.spec.js
import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserPostCard from '@/components/UserPostCard.vue'

describe('UserPostCard', () => {
  it('matches the snapshot', () => {
    const wrapper = mount(UserPostCard, {
      // Provide any props or global mocks here if needed
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
})
