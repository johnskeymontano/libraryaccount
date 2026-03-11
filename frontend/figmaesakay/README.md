# eSakay Gensan - Complete Transportation App

A comprehensive mobile transportation app for Filipino commuters in General Santos City, built with React, TypeScript, and Tailwind CSS following the Figma design system.

## 🎬 INTERACTIVE PROTOTYPE MODE

This application is a **fully clickable, interactive prototype** designed for demonstration, user testing, and Audio-Visual Presentation (AVP) recording. Every screen, button, and interaction is connected with professional transitions.

### Prototype Features
✅ **Complete User Journey** - Splash → Onboarding → Login → Main App  
✅ **Screen Transitions** - Smooth animations (Slide, Fade, Dissolve)  
✅ **Three User Modes** - Commuter, Driver, and Admin interfaces  
✅ **Interactive Controls** - Prototype controller with reset and recording features  
✅ **Screen History Tracking** - Real-time flow documentation  
✅ **Toast Notifications** - Interaction feedback system  
✅ **AVP-Ready** - Optimized for professional recording  

### Quick Start Guide
1. **Launch the app** - It starts at the Splash Screen
2. **Click through naturally** - Every element is interactive
3. **Use the controls**:
   - **Mode Switcher** (top right) - Switch between Commuter/Driver/Admin
   - **Transition Selector** - Choose animation style (Slide/Fade/Dissolve)
   - **Prototype Controller** (bottom) - Reset flow, track screens
   - **Screen History** (top left) - See your journey
4. **Record your AVP** - Follow the guides in `/PROTOTYPE_GUIDE.md`

### Documentation
- 📖 **[PROTOTYPE_GUIDE.md](/PROTOTYPE_GUIDE.md)** - Complete interaction map and recording instructions
- 🎨 **[STORYBOARD.md](/STORYBOARD.md)** - Visual flow diagrams and screen connections
- 🎬 **[AVP_SCRIPT.md](/AVP_SCRIPT.md)** - Professional narration script for recording

## 🎨 Design System

The app follows a cohesive design system based on Filipino-friendly colors and mobile-first design:

### Brand Colors
- **Primary Blue**: `#0156D1` - Main brand color
- **Primary Yellow**: `#FEC400` - Accent and highlights
- **Eco Green**: `#2DBA4E` - Success and active states
- **Dark Navy**: `#0C1A36` - Dark text and headers
- **Light Gray**: `#F5F5F5` - Backgrounds
- **Error Red**: `#C62828` - Warnings and SOS
- **Success Green**: `#2E7D32` - Confirmations

### Typography
- Font Family: System fonts (Inter/Poppins fallback)
- Sizes: H1 (32px), H2 (24px), H3 (18px), Body (16px)

### Components
- Border Radius: 12px (buttons), 16px (cards), 2xl (containers)
- Shadows: Elevation system for depth
- Padding: Consistent 16px/20px spacing

## 📱 App Features

### Complete User Journey

#### 1. **Splash Screen**
- Brand introduction with animated logo
- Tagline: "Pinoy Mobility for Smart, Safe, and Connected Transport"
- Auto-advances to onboarding

#### 2. **Onboarding (3 Screens)**
- **Screen 1**: Find rides faster with real-time tracking
- **Screen 2**: GPS tracking for accurate arrival times
- **Screen 3**: Safety features and SOS functionality
- Skip option available on each screen

#### 3. **Login/Register**
- Email and password authentication
- Social login options:
  - Google Sign-in
  - GCash integration
- Toggle between login and registration
- Password visibility toggle

#### 4. **Main App (Commuter Mode)**

##### Home Dashboard
- Personalized greeting with user location
- Quick action buttons for all major features
- Emergency SOS quick access button
- Recent trips history
- Service updates and announcements
- Clean navigation bar

##### Live Tracking
- Real-time GPS vehicle tracking
- Interactive map view
- Multiple vehicle types (Tricycles, Jeepneys, Buses)
- Nearby vehicles display
- ETA calculations

##### Fare Calculator
- Vehicle type selection
- Route-based fare calculation
- Automatic discounts for:
  - Students (20% off)
  - Senior Citizens (30% off)
  - PWDs (Persons with Disabilities)
- Clear fare breakdown

##### Route Finder
- Pickup and destination input
- Multiple route options:
  - Fastest route
  - Cheapest route
  - Safest route (highly rated drivers)
- Traffic updates integration
- Turn-by-turn directions

##### Payment Integration
- Multiple payment methods:
  - GCash
  - Maya
  - Beep Card
  - QR Code scanning
- Transaction history
- Auto-reload options
- Receipt generation

##### Safety Center
- Quick SOS button access
- Emergency contacts
- Driver ratings and reviews
- Trip sharing with contacts
- Safety tips and guidelines

##### Community Features
- Incident reporting
- Categories: Accident, Fare Issue, Unsafe Driving, Lost Item, etc.
- Photo upload capability
- Location auto-tagging
- Community feed
- Tips and updates sharing

##### User Profile
- Account information
- Trip history
- Payment methods management
- Settings and preferences
- Student/Senior/PWD verification

#### 5. **SOS Screen (Emergency)**
- Full-screen red alert interface
- Hold-for-3-seconds activation
- Automatic alert to:
  - Police (PNP 911)
  - Barangay Tanod
  - Fire Department
- Live location sharing
- Emergency contact calling
- Safety instructions

### 🚗 Driver App Mode

Complete driver-side interface with:

#### Dashboard
- Online/Offline toggle
- Real-time earnings display
- Trip statistics (today's trips, hours online)
- Driver rating display
- Current route assignment

#### Trip Management
- Active trip display
- Passenger information
- Pickup and destination details
- In-app navigation
- Passenger calling
- Trip completion flow

#### Quick Actions
- QR code scanner for payment
- Navigation to destinations
- Earnings overview
- Route management

#### Statistics
- Daily earnings tracker
- Total trips completed
- Hours online
- Average rating

### 🖥 Admin Dashboard (Web)

Professional admin interface with:

#### Overview Dashboard
- Key metrics cards:
  - Total commuters
  - Verified drivers
  - Active vehicles
  - Active routes
  - Pending reports
  - SOS alerts
- Trend indicators for each metric

#### Real-time Monitoring
- Live vehicle tracking map
- Active routes visualization
- Driver locations
- Terminal markers

#### Management Tables
- Driver verification queue
- Document review system
- Approval/rejection workflow
- User management
- Route management

#### Alert System
- Recent SOS alerts
- Community reports
- Severity indicators
- Quick response actions

#### Analytics
- Performance metrics
- Usage statistics
- Revenue tracking
- Route efficiency

## 🎯 Key Features Implemented

### User Experience
✅ Complete onboarding flow  
✅ Authentication system  
✅ Multiple app modes (Commuter, Driver, Admin)  
✅ Responsive design  
✅ Smooth transitions and animations  
✅ Touch-optimized interface  

### Safety
✅ Emergency SOS system  
✅ Driver ratings  
✅ Trip sharing  
✅ Community reporting  
✅ Live location tracking  

### Payments
✅ Multiple payment options  
✅ QR code support  
✅ Transaction history  
✅ Discount system  

### Community
✅ Incident reporting  
✅ Service announcements  
✅ User feedback  
✅ Tips sharing  

## 🚀 Getting Started

The app is ready to use! Navigate through:

1. **Splash Screen** → **Onboarding** → **Login** → **Main App**
2. Use the mode switcher (top-right buttons) to try:
   - **Commuter Mode**: Full user experience
   - **Driver Mode**: Driver dashboard and trip management
   - **Admin Mode**: Web-based admin dashboard

## 🎨 Component Structure

```
/components
  ├── Splash.tsx          # Welcome screen
  ├── Onboarding.tsx      # 3-screen carousel
  ├── Login.tsx           # Authentication
  ├── Home.tsx            # Main dashboard
  ├── LiveTracking.tsx    # GPS tracking
  ├── FareCalculator.tsx  # Fare computation
  ├── RouteFinder.tsx     # Route planning
  ├── Payment.tsx         # Payment methods
  ├── Safety.tsx          # Safety features
  ├── Community.tsx       # Community features
  ├── Profile.tsx         # User profile
  ├── SOSScreen.tsx       # Emergency screen
  ├── DriverApp.tsx       # Driver interface
  ├── AdminDashboard.tsx  # Admin panel
  └── Navigation.tsx      # Bottom nav bar
```

## 📍 Target Areas

Primarily serving:
- Brgy. Fatima Uhaw
- City Hall
- Lagao
- Gaisano Mall
- Polomolok Highway
- And all of General Santos City

## 🎯 Next Steps

Potential enhancements:
- Integrate real Google Maps API
- Connect to real-time GPS data
- Implement Supabase backend for data persistence
- Add push notifications
- Enable real payment gateway integration
- Multilingual support (Tagalog, Cebuano, English)
- Offline mode capabilities
- Advanced analytics and reporting

---

**Built for the Filipino commuter community** 🇵🇭