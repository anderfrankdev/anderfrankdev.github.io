import { $ } from "@builder.io/qwik";
export const onSubmit = (status: any, elements: any) =>
  $(async (e: any) => {
    e.preventDefault();
    status.isLoading = true;
    status.sent = false;
    status.error = false;

    const data = {};
    //@ts-ignore
    elements.elements.forEach((e: any) => {
      //@ts-ignore
      data[e.name] = e.value;
    });
    const res = await fetch(
      "https://formsubmit.co/ajax/anderfrankdev@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      }
    ).catch(() => {
      status.isLoading = false;
      status.error = true;
    });

    status.isLoading = false;
    if (res?.status === 200) status.sent = true;
    else status.error = true;
  });
