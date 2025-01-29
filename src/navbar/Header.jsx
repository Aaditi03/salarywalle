import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Menu as MUI_Menu,
  MenuItem,
  Button,
} from '@mui/material';
import Menu from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import ApplyNowIcon from '@mui/icons-material/Assignment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CalculateIcon from '@mui/icons-material/Calculate';  // Added Calculator icon
import { keyframes } from '@mui/system';

import logo from '../assets/image/Artboard 1.svg';

// Smooth scale animation for hover effects
const scaleIn = keyframes`
  0% { transform: scale(0.9); }
  100% { transform: scale(1); }
`;

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <AppBar
        position="sticky"
        elevation={4}
        sx={{
          paddingTop: '10px',
          // background: 'linear-gradient(135deg, #f9f9f9 5%, #cccccc 70%)',
          background: 'linear-gradient(10deg, #ffffff 5%, #dcdcdc 50%, #ffffff 95%)',

          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          transition: 'background 0.3s ease',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'nowrap',
            minHeight: '80px',
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={scrollToTop}
            style={{
              display: 'flex',
              alignItems: 'center',
              zIndex: 10,
              transition: 'transform 0.3s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <img
              src={logo}
              alt="Logo"
              style={{
                width: '80%',
                height: '50%',
                objectFit: 'contain',
              }}
            />
          </Link>

          {/* Mobile Menu Button */}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleMenu}
            sx={{ display: { xs: 'block', md: 'none' }, color: '#0b2747' }}
          >
            <Menu />
          </IconButton>

          {/* Mobile Menu */}
          <MUI_Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            sx={{
              display: { xs: 'block', md: 'none' },
              '& .MuiPaper-root': {
                zIndex: 900,
              },
            }}
          >
            {/* Mobile menu items */}
            <MenuItem onClick={handleClose}>
              <Link
                to="/"
                onClick={scrollToTop}
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}
              >
                <HomeIcon sx={{ mr: 1 }} /> Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/about-us"
                onClick={scrollToTop}
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}
              >
                <InfoIcon sx={{ mr: 1 }} /> About Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/contact-us"
                onClick={scrollToTop}
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}
              >
                <ContactPageIcon sx={{ mr: 1 }} /> Contact Us
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link
                to="/apply-now"
                onClick={scrollToTop}
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}
              >
                <ApplyNowIcon sx={{ mr: 1 }} /> Apply Now
              </Link>
            </MenuItem>
            {/* Calculator link added in mobile menu */}
            <MenuItem onClick={handleClose}>
              <Link
                to="/calculator"
                onClick={scrollToTop}
                style={{ color: '#0b2747', display: 'flex', alignItems: 'center' }}
              >
                <CalculateIcon sx={{ mr: 1 }} /> Calculator
              </Link>
            </MenuItem>
          </MUI_Menu>

          {/* Desktop Navigation */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '1.5rem',
                flexGrow: 1,
              }}
            >
              <Link
                to="/"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  textDecoration: 'none',
                  padding: '8px',
                  fontWeight: '700',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <HomeIcon sx={{ mr: 1 }} />
                Home
              </Link>

              <Link
                to="/about-us"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  textDecoration: 'none',
                  padding: '8px',
                  fontWeight: '700',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <InfoIcon sx={{ mr: 1 }} />
                About Us
              </Link>

              <Link
                to="/contact-us"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  textDecoration: 'none',
                  padding: '8px',
                  fontWeight: '700',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <ContactPageIcon sx={{ mr: 1 }} />
                Contact Us
              </Link>

              {/* Calculator link added in desktop navigation */}
              <Link
                to="/calculator"
                onClick={scrollToTop}
                style={{
                  color: '#0b2747',
                  textDecoration: 'none',
                  padding: '8px',
                  fontWeight: '700',
                  fontFamily: 'Roboto, sans-serif',
                  transition: 'all 0.3s ease',
                  position: 'relative',
                  borderRadius: '4px',
                  '&:hover': {
                    backgroundColor: '#f4f4f4',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                  },
                }}
              >
                <CalculateIcon sx={{ mr: 1 }} />
                Calculator
              </Link>

            </Box>

            {/* "Apply Now" Button with #D5E1EA Color */}
            <Button
              component={Link}
              to="/apply-now"
              variant="contained"
              sx={{
                backgroundColor: '#D5E1EA', // Light grayish-blue
                color: '#0b2747', // Dark text for contrast
                padding: '10px 20px',
                borderRadius: '50px',
                fontWeight: 'bold',
                fontFamily: 'Roboto, sans-serif',
                textTransform: 'none',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                transition: 'all 0.3s ease',
                '&:hover': {
                  backgroundColor: '#B7CFDB', // Slightly darker grayish-blue on hover
                  boxShadow: '0 6px 15px rgba(0, 0, 0, 0.2)',
                },
              }}
            >
              Apply Now
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
