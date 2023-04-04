import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <>
      <p>My portfolio is currently in development with github actions</p>
    </>
  );
});

export const head: DocumentHead = {
  title: 'Ander Frank Carrasco: Fullstack web developer',
  meta: [
    {
      name: 'description',
      content: 'This is my future portfolio',
    },
  ],
};
