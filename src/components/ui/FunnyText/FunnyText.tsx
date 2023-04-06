import { component$ } from "@builder.io/qwik"
import styles from "./FunnyText.module.css"
interface TextProps{
	content:string,
	letterClass:String
}
export const FunnyText = component$<TextProps>(({content,letterClass}) => {

	return (
		<span style={{
			width:`${content.length+1}ch`,
			display:"inline-block"
		}}>
			{...content.split("").map(letter=>{
				const isWhiteSpace = letter === " "
				const whiteSpace = (<>&nbsp;</>)
				const itemClass = `${styles.letter } ${letterClass}`
				const letterEl = 
					<span 
						key={letter} 
						class={itemClass}
					>
						{letter}
					</span>
				
				return isWhiteSpace ? whiteSpace : letterEl
			})}
		</span> 
	)
})