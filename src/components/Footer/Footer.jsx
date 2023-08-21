import css from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={css.footer}>
      <div className={css.footerContainer}>
        <p className={css.footerText}>Created By</p>
        <a
          className={css.footerLink}
          href="https://github.com/MsYuliia"
          target="_blank"
          rel="noreferrer"
        >
          Yuliia Romanovych
        </a>
      </div>
    </footer>
  );
};

export default Footer;
