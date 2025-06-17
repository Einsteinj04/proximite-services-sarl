'use client'
import Link from 'next/link'
import { APP_ROUTES, ASSETS } from '@/config'
import { Image } from '@/components'
import { 
  Facebook,
  Instagram,
  Twitter,
  Pinterest,
  Email,
  Phone,
  Room,
  Send
} from '@mui/icons-material'
import { Box, Container, Grid, Typography, Divider, TextField, Button } from '@mui/material'

const Footer = () => {
  const quickLinks = [
    { title: 'Home', href: APP_ROUTES.HOME },
    { title: 'About Us', href: APP_ROUTES.ABOUT },
    { title: 'Tour Packages', href: APP_ROUTES.TOURS },
    { title: 'Contact', href: APP_ROUTES.CONTACT }
  ]

  const services = [
    'Flight Bookings',
    'Hotel Reservations',
    'Tour Packages',
    'Visa Assistance',
    'Travel Insurance',
    'Cruise Packages'
  ]

  const contactInfo = [
    { icon: <Email sx={{ mr: 1 }} />, text: 'proximiteservices.az@gmail.com' },
    { icon: <Phone sx={{ mr: 1 }} />, text: '+(234) 97-13-35-34 / 63-30-23-05' },
    { icon: <Room sx={{ mr: 1 }} />, text: '123 Sacrecoeur Opposite Green Horse Hotel' }
  ]

  return (
    <Box 
      component="footer" 
      sx={{
        // background: 'linear-gradient(135deg, #1a365d 0%, #153e75 100%)',
        background:'#1d293d',
        color: 'white',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          background: 'linear-gradient(90deg, #f6ad55, #f687b3, #63b3ed)'
        }
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Column 1: Logo & About */}
          <Grid item xs={12} md={4}>
            <Box sx={{ 
              mb: 3, 
              // border:'2px solid red' 
              }}>
              <Link href={APP_ROUTES.HOME}>
                <Image 
                  alt="Proximite Services Travel Agency" 
                  src={ASSETS.LOGO} 
                  className='max-w-[200px]'
                />
              </Link>
            </Box>
            <Typography variant="body1" sx={{ 
              mb: 3, 
              color: 'rgba(255,255,255,0.8)',
              lineHeight: 1.7,
              width:'80%'
            }}>
              Creating unforgettable travel experiences since 2010. We specialize in personalized vacations that turn dreams into reality.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, mb: 4 }}>
              {[
                { icon: <Facebook />, color: '#4267B2' },
                { icon: <Instagram />, color: '#E1306C' },
                { icon: <Twitter />, color: '#1DA1F2' },
                { icon: <Pinterest />, color: '#E60023' }
              ].map((social, index) => (
                <Box
                  key={index}
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    backgroundColor: social.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'transform 0.3s',
                    '&:hover': {
                      transform: 'translateY(-3px)'
                    }
                  }}
                >
                  {social.icon}
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: 'bold',
              fontSize: '1.1rem',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '40px',
                height: '3px',
                background: '#f6ad55'
              }
            }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index} 
                  href={link.href}
                  className="hover:text-amber-300 transition-colors"
                >
                  <Typography 
                    variant="body1" 
                    sx={{ 
                      color: 'rgba(255,255,255,0.8)',
                      '&:hover': { color: '#f6ad55' },
                      transition: 'color 0.3s'
                    }}
                  >
                    {link.title}
                  </Typography>
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Column 3: Services */}
          <Grid item xs={6} md={2}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: 'bold',
              fontSize: '1.1rem',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '40px',
                height: '3px',
                background: '#f687b3'
              }
            }}>
              Our Services
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              {services.map((service, index) => (
                <Typography 
                  key={index} 
                  variant="body1" 
                  sx={{ 
                    color: 'rgba(255,255,255,0.8)',
                    '&:hover': { color: '#f687b3' },
                    transition: 'color 0.3s',
                    cursor: 'pointer'
                  }}
                >
                  {service}
                </Typography>
              ))}
            </Box>
          </Grid>

          {/* Column 4: Contact & Newsletter */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ 
              mb: 3, 
              fontWeight: 'bold',
              fontSize: '1.1rem',
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: 0,
                width: '40px',
                height: '3px',
                background: '#63b3ed'
              }
            }}>
              Contact Us
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              {contactInfo.map((item, index) => (
                <Box 
                  key={index} 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    mb: 2,
                    '& svg': {
                      color: '#63b3ed'
                    }
                  }}
                >
                  {item.icon}
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>
            
            <Typography variant="h6" sx={{ 
              mb: 2, 
              fontWeight: 'bold',
              fontSize: '1.1rem'
            }}>
              Newsletter
            </Typography>
            <Typography variant="body1" sx={{ mb: 2, color: 'rgba(255,255,255,0.8)' }}>
              Subscribe for travel tips and exclusive offers
            </Typography>
            
            <Box component="form" sx={{ display: 'flex', gap: 1 }}>
              <TextField
                variant="outlined"
                placeholder="Your email"
                size="small"
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: 'rgba(255,255,255,0.3)'
                    },
                    '&:hover fieldset': {
                      borderColor: 'rgba(255,255,255,0.5)'
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#63b3ed'
                    },
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '4px'
                  },
                  '& .MuiInputBase-input': {
                    color: 'white',
                    py: 1.5
                  }
                }}
              />
              <Button
                variant="contained"
                endIcon={<Send />}
                sx={{
                  backgroundColor: '#f6ad55',
                  '&:hover': {
                    backgroundColor: '#f59e0b'
                  },
                  whiteSpace: 'nowrap',
                  px: {sm: 6, xs:3}
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 4, 
          borderColor: 'rgba(255,255,255,0.1)',
          borderBottomWidth: '2px'
        }} />

        {/* Copyright */}
        <Box sx={{ 
          display: 'flex', 
          flexDirection: { xs: 'column', sm: 'row' }, 
          justifyContent: 'space-between', 
          alignItems: 'center',
          gap: 2
        }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
            © {new Date().getFullYear()} Proximite Services Sarl. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              Privacy Policy
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              Terms of Service
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              Cookie Policy
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

