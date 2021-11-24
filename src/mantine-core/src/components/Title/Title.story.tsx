import React from 'react';
import { storiesOf } from '@storybook/react';
import { MantineProvider } from '@mantine/styles';
import { Title } from './Title';

storiesOf('@mantine/core/Title', module)
  .add('General usage', () => (
    <div style={{ padding: 20 }}>
      <Title order={1}>h1 title</Title>
      <Title order={2}>h2 title</Title>
      <Title order={3}>h3 title</Title>
      <Title order={4}>h4 title</Title>
      <Title order={5}>h5 title</Title>
      <Title order={6}>h6 title</Title>
    </div>
  ))
  .add('Styles API on MantineProvider', () => (
    <div style={{ padding: 20 }}>
      <MantineProvider
        styles={{
          Title: (theme) => ({
            root: {
              color: theme.colorScheme === 'dark' ? 'blue' : 'red',
            },
          }),
        }}
      >
        <Title order={1}>MantineProvider styles</Title>
      </MantineProvider>
    </div>
  ));
