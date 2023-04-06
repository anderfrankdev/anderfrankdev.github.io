import { component$ } from "@builder.io/qwik"
import styles from "./FunnyText.module.css"
interface TextProps{
	content:string
}
export const FunnyText = component$<TextProps>(({content}) => {

	return (
		<span style={{
			width:`${content.length+1}ch`,
			display:"inline-block"
		}}>
			{...content.split("").map(letter=>{
				const isWhiteSpace = letter === " "
				const whiteSpace = (<>&nbsp;</>)
				const letterEl = <span key={letter} class={styles.letter}>{letter}</span>
				
				return isWhiteSpace ? whiteSpace : letterEl
			})}
		</span> 
	)
})