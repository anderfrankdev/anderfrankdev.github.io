import { component$ } from "@builder.io/qwik";
import type { Project } from "~/data/workUi";

export const ProjectCard = component$(({demoLink,repositoryLink,photo,name,description,stackUsed}:Project)=>{

	return (
		<div class={`
				w-[250px] 
				pb-4 font-normal shadow
				bg-blue-100 dark:bg-red-900
				mx-4 cursor-pointer
				mb-8 hover:bg-red-100 dark:hover:bg-black
			`}

			onClick$={(e:any)=>{
				e.stopPropagation()
				const isRepoLink = e.target.dataset.github==="true"
				if(isRepoLink) return
				window.open(demoLink)
			}}
		>
			<div class={"w-full h-[140.625px]"}>
				<img src={photo} alt="Project photo"/>
			</div>
			<article class="mx-4 mt-4 ">
				<h1 class={"mb-6 text-base flex w-full justify-between font-bold"}>
					{name} 
					<span>
					<a target="_blank" href={repositoryLink}>
					<svg data-github="true" viewBox="0 0 24 24" class="cursor-pointer w-5 h-5" astro-icon="tabler:brand-github">
						<path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/>
					</svg>	
					</a>
					</span>
				</h1>
				<p>{description}</p>
				<div class={"flex flex-row flex-wrap"}>
					{stackUsed.map( technology =>
						<div key={technology} class={"text-sm dark:text-white dark:bg-gray-800  py-2 px-2 mt-4 mr-2 shadow bg-white rounded w-fit"}>{technology}</div>
					)}
				</div>
			</article>
		</div>
	)
})

export const createProjectCard = (project:Project) => <ProjectCard {...project}></ProjectCard>