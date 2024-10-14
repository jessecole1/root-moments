import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { Menu, X } from 'lucide-react';
import logo from '../icons/rootmoments_logo.png';
import { useAppContext } from './AppProvider';

const Navbar = () => {
    const { adminLoggedIn } = useAppContext();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const toggleMenu = () => setMenuOpen(!menuOpen);

    const navItems = [
        { title: 'Order', link: '/order/photo-scanning' },
        { title: 'Pricing', link: '/pricing' },
        { title: 'Solutions', link: '/solutions' },
        { title: 'How It Works', link: '/how-it-works' },
        { title: 'Facts', link: '/facts' },
    ];

    const NavItem = ({ item, mobile = false }) => (
        <Button
            component={Link}
            to={item.link}
            onClick={() => mobile && setMenuOpen(false)}
            sx={{
                color: 'primary.main',
                '&:hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
            }}
        >
            {item.title}
        </Button>
    );

    console.log("CHECK: " + adminLoggedIn);

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    <div className="flex-shrink-0">
                        <Link to="/">
                            <img className="h-24 w-auto" src={logo} alt="Logo" />
                        </Link>
                    </div>
                        <p>test 2</p>

                    {/* Desktop menu */}
                    <div className={`flex flex-row justify-evenly w-[540px] ${windowWidth < 1024 ? "hidden" : ""}`}>
                        {navItems.map((item) => (
                            <NavItem key={item.title} item={item} />
                        ))}
                    </div>

                    {/* Admin Login/Dashboard Link */}
                    {adminLoggedIn ? (
                        <Button component={Link} to="/dashboard" variant="contained" color="primary">
                            Admin Dashboard
                        </Button>
                        // <Link to="/dashboard"><Button variant="contained" color="primary">Admin Dashboard</Button></Link>
                    ) : (
                        <div>
                            <Button sx={{ margin: "auto", color: ""}} size="large" variant="contained">
                                Get Started
                            </Button>
                        </div>
                    )}

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <Button onClick={toggleMenu}>
                            {menuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {menuOpen && (
                <div className="lg:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <NavItem key={item.title} item={item} mobile={true} />
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;