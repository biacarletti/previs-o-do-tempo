import styles from './styles.module.css'

import imageUrl from '../../assets/nebuloso.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import twitter from '../../assets/twitter.png';

export const Header = () => {
    return (
        <header className={styles.header_site}>
            <div className={styles.logo_container} >
                <h1 className={styles.title}>Seu Tempo</h1>
                <img src={imageUrl} alt="logo-site" className={styles.img} />
            </div>
           <div className={styles.social_midia}>
           <img src={facebook} alt="logo facebook" className={styles.midia_facebook}/>
           <img src={instagram} alt="logo instagram" className={styles.midia_instagram} />
           <img src={twitter} alt="logo twitter" className={styles.midia_twitter} />
           </div>
        </header>
    )
}

