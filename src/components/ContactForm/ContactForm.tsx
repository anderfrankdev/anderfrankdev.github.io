import { component$, useContext } from "@builder.io/qwik";
import styles from "./contactform.module.css";
import { LanContext } from "~/routes/layout";

export const ContactForm = component$<any>(() => {
  
  const lan = useContext(LanContext);
  

  return (
    <section class={styles.container}>
      <h2>{lan.value==="en"?"Get in touch":"Contactame"}</h2>
      <div>
       <div>
        <h3>{lan.value==="en"?"Don't be shy":"Con confianza"}</h3>
         <p>{
          lan.value==="en"
          ?"Feel free to get in touch with me."
          :"Puedes sentirte libre de ponerte en contacto conmigo."}</p>
         <div>
          <a target="_blank" href="https://www.linkedin.com/in/anderfrankdev">
           <img src="/linkedin.svg" width={32} height={32} alt=""/>
          </a>
          <a href="https://twitter.com/anderfrankdev" target="_blank">
           <img src="/twitter.svg" width={32} height={32} alt=""/>
          </a>
         </div>
       </div>
       <form action="">
          <div>
            <input placeholder={lan.value==="en"?"Your name":"Tu nombre"} type="text" name="name"/>
            <input placeholder={lan.value==="en"?"Your email":"Tu email"} type="email" name="email"/>
          </div>
          <input type="text" name="subject" placeholder={lan.value==="en"?"Your subject":"Tu motivo"}/>
          <textarea name="message" id="" placeholder={lan.value==="en"?"Your message":"Tu mensaje"} cols={30} rows={10}></textarea>
          <input type="submit" value={lan.value==="en"?"SEND MESSAGE":"ENVIAR"} />
       </form>
      </div>
    </section>
  )
});
