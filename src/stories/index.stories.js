/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf  } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { checkA11y } from '@storybook/addon-a11y'
import { withKnobs, text, number } from '@storybook/addon-knobs'
import MyButton from '@/components/MyButton.vue'


storiesOf('Button', module)
  .addDecorator(checkA11y)
  .addDecorator(withKnobs)
  .add('with text', () => ({
    components: { MyButton },
    template:   '<my-button @click="action">Hello Button</my-button>',
    methods:    { action: action('clicked') }
  }))
  .add('with JSX', () => ({
    components: { MyButton },
    render() {
      return <my-button onClick={this.action}>With JSX</my-button>
    },
    methods: { action: linkTo('Button', 'with some emoji') }
  }))
  .add('with some emoji', () => ({
    components: { MyButton },
    template:   '<my-button @click="action">😀 😎 👍 💯</my-button>',
    methods:    { action: action('clicked') }
  }))
  .add('With a property', () => {
    const name = text('Name', 'Jon Snyder')
    const age = number('Age', 89)
    return {
      template: `<div>I am ${name} and I'm ${age} years old.</div>`
    }
  })