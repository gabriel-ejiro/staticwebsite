export default function Header() {
  return (
    <header className="flex justify-between items-center py-4 px-6 shadow-sm bg-white sticky top-0 z-50">
      <h1 className="font-bold text-lg">Gabriel Ejiro</h1>
      <nav className="space-x-4 text-sm">
        <a href="#projects" className="hover:text-blue-600">Projects</a>
        <a href="#about" className="hover:text-blue-600">About</a>
        <a href="#contact" className="hover:text-blue-600">Contact</a>
      </nav>
    </header>
  );
}

