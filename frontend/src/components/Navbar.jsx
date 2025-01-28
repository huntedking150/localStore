import { Button } from './ui/button';
import { Bell, ShoppingCart, User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-lime-300/50">
      <div className="flex items-center w-auto space-x-4">
        <a href="/" className="text-2xl font-semibold w-11 h-auto ">
          <img src="/assets/sahaj_logo.png" alt="Loading" />
        </a>
        <p className="text-2xl font-semibold">Sahaj</p>
      </div>
      <nav className="hidden md:flex items-center space-x-6">
        <a href="/" className="text-lg">
          Home
        </a>
        <a href="/about" className="text-lg">
          About
        </a>
        <a href="/login" className="text-lg">
          Login
        </a>
        <a href="" className="text-lg">
          Support
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon">
          <User className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <ShoppingCart className="h-5 w-5" />
        </Button>
      </div>
    </header>
  );
};

export default Navbar;
