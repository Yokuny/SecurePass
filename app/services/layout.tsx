const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen container mx-auto max-w-7xl pt-16 px-6 flex-grow">{children}</section>
  );
};
export default Layout;
