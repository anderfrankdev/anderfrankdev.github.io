import { component$ } from "@builder.io/qwik";
import styles from "./invitation.module.css";
import { Building } from "../ui/Building";
import { InvitationMessage } from "./InvitationMessage";

export const Invitation = component$(() => {
  return (
    <section class={styles.container}>
      <InvitationMessage />
      <Building />
    </section>
  );
});
