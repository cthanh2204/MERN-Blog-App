const Footer = () => {
  return (
    <footer
      className="footer footer-center bg-slate-50  text-base-content p-4 absolute left-0 right-0 bottom-0 text-center	"
      style={{
        color: `#1890ff`,
      }}>
      <p>Copyright © {new Date().getFullYear()} - cthanh2204 Blog app</p>
    </footer>
  );
};

export default Footer;
