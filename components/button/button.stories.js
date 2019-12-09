import React from 'react'
import { storiesOf } from '@storybook/react'
import Button from './button'

storiesOf('Button', module)
  .add('Default', () => (<Button>Text</Button>))
  .add('Inverted', () => (<Button invert>Text</Button>))
