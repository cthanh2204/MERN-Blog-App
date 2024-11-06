const Footer = () => {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4 absolute left-0 right-0 bottom-0 text-center	">
      <p>
        Copyright © {new Date().getFullYear()} - All right reserved by ACME
        Industries Ltd
      </p>
    </footer>
  );
};

export default Footer;
