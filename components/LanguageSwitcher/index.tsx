import { useRouter } from 'next/router'
import s from './LanguageSwicther.module.scss' 

function LanguageSwitcher({displayLang}) {
  const router = useRouter()

  const handleLanguageChange = (lang) => {
    const newPath = router.asPath;
    window.location.href = `/${lang}${newPath}`;
  };

  return (
    <ul className={displayLang ? s.languageSwitcherOpen : s.languageSwitcher}>
        <li>
            <button onClick={() => handleLanguageChange('es')}>Español</button>
        </li>
        <li>
            <button onClick={() => handleLanguageChange('ca')}>Català</button>
        </li>
        <li>
            <button onClick={() => handleLanguageChange('en')}>English</button>
        </li>
        <li>
            <button onClick={() => handleLanguageChange('fr')}>Français</button>
        </li>

      {/* add more language options as needed */}
    </ul>
  )
}

export default LanguageSwitcher