const Footer = () => {
  return (
    <footer className="h-14 mt-10 flex justify-center items-center bg-black text-white border-t border-white">
      <div className="text-center">
        © {new Date().getFullYear()} Bamboo-task. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
