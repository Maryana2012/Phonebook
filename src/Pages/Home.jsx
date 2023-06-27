import css from './Home.module.css'
export default function Home(){
    return (
        <>
          <h1 className={css.title}>Hello!!!</h1>
          
          <span className={css.main_text}> text of main page  </span>
        </>
    )
}