import { mount } from '@vue/test-utils'
import NotificationToast from '@/components/NotificationToast/NotificationToast.vue'
import { describe, expect, test } from 'vitest'

describe('Notification component', () => {
  test('renders the correct style for error', () => {
    const status = 'error'
    const wrapper = mount(NotificationToast, {
      props: { status }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })

   test('renders correct style for success', () => {
      const status = 'success'
      const wrapper = mount(NotificationToast, {
        props: { status }
      })
      // My notes: You need plugin to see inline html highlighted
      // There are various approaches on IDE or plugin level (requires dive in)
      // Some options 1) add plugin es6-string-html in VS Code and add html before ` and configure it to be empty 
      // or 2) Intellij + team config
        expect(wrapper.html()).toMatchInlineSnapshot(`
          "<div role="alert" class="notification notification--success">
            <p class="notification__text"></p><button title="close" class="notification__button"> ✕ </button>
          </div>"
        `)
    })

})