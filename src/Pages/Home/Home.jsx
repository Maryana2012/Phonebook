import image from './mainPage.jpg';
import css from './Home.module.css'
export default function Home(){
    return (
        <main className={css.main}>
          <h1 className={css.title}>Phone Book</h1>
          <img src={image} alt='phone' className={css.heroImage} />
        </main>
    )
}