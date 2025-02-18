const Footer = () => {
  return (
    <footer className="h-14 flex justify-center items-center !bg-[#3C42C7] text-white border-t border-white">
      <div className="text-center">
        © {new Date().getFullYear()} Bamboo-task. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
