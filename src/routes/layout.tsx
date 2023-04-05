import { component$, Slot } from '@builder.io/qwik';
import { Navbar } from '~/components/ui/navbar/Navbar';
import 'animate.css'
import "../global.css"

export default component$(() => {
  return (
    <div class="page">
      <Navbar/>
      <Slot />

    </div>
  );
});
