/* eslint-disable no-undef */
import axios from 'axios'
import PostCard from '../PostCard.vue'
import { mount, flushPromises } from '@vue/test-utils'

const mockPost = {
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
}

describe('Post Card Component', () => {
  test('before fetching data, post card show loading', async () => {
    vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockPost })
    const wrapper = mount(PostCard)
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('with valid data', async () => {
    vi.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockPost })
    const wrapper = mount(PostCard)
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot()
  })

  test('displays an error message if fetching a post fails', async () => {
    vi.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error occurred'))
    const wrapper = mount(PostCard)
    await flushPromises()
    expect(wrapper.html()).toMatchSnapshot()
  })
})