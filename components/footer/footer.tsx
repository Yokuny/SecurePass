import { Link } from "@nextui-org/link";

const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center py-4">
      <Link isExternal className="flex items-center gap-1 text-current" href="https://" title="rights">
        <span className="text-default-600">© 2023.</span>
        <p className="text-primary"></p>
      </Link>
    </footer>
  );
};
export default Footer;
