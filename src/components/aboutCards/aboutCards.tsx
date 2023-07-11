import { component$ } from "@builder.io/qwik";

export const AboutCard = component$(({ title, content }: any) => {
  return (
    <div>
      <span class="block mx-8 max-w-sm mt-8 mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h3>
        <p class="font-normal text-gray-700 dark:text-gray-400">{content}</p>
      </span>
    </div>
  );
});

export const AboutCards = component$(({ cardsInfo }: any) => {
  return (
    <div class={"flex flex-wrap items-center justify-center"}>
      {cardsInfo.map((cardInfo: any, i: any) => (
        <AboutCard key={i} {...cardInfo} />
      ))}
    </div>
  );
});
