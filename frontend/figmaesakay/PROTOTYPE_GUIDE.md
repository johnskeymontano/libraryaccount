# 🎬 eSakay Gensan - Interactive Prototype Guide

## Complete Clickable Prototype for AVP Recording

This is a **fully interactive, clickable prototype** designed specifically for demonstration, user testing, and Audio-Visual Presentation (AVP) recording. Every button, link, and interactive element is connected to its correct destination with smooth transitions.

---

## 🎯 Prototype Features

### ✅ Complete User Journey
- **Splash Screen** → **Onboarding (3 screens)** → **Login/Register** → **Main App**
- All screens are linked and clickable
- Realistic transitions between screens
- Toast notifications for interaction feedback

### ✅ Interactive Elements
Every clickable element includes:
- **Trigger**: On Click/Tap
- **Action**: Navigate To (destination screen)
- **Animation**: Slide In, Fade, or Dissolve transitions
- **Feedback**: Visual hover states and notifications

### ✅ Three Complete User Modes
1. **Commuter Mode** - Full end-user experience
2. **Driver Mode** - Driver dashboard and trip management
3. **Admin Mode** - Web-based admin panel

---

## 🎮 Prototype Controls

### Main Control Panel (Bottom Center)
Located at the bottom center of the screen with dark navy background:

- **Current Screen Indicator** - Shows which screen you're on
- **Play/Pause Button** - Control the prototype flow
- **Reset Flow Button** - Return to splash screen (start over)
- **Recording Indicator** - Shows recording status (red dot)
- **Hide/Show Toggle** - Minimize controls for clean recording

### Mode Switcher (Top Right)
Three buttons to switch between user types:
- **👤 Commuter** - Blue highlight when active
- **🚗 Driver** - Yellow highlight when active
- **⚙️ Admin** - Green highlight when active

### Transition Controls (Top Right - Below Mode Switcher)
Choose your animation style:
- **Slide** - Screens slide in from the side
- **Fade** - Smooth fade in/out
- **Dissolve** - Scale and fade effect

### Screen Flow History (Top Left)
Real-time history tracker showing:
- All screens visited
- Current step number
- Last 10 screens in the journey
- Perfect reference for AVP narration

### Hints Toggle (Top Right)
- **💡 Hints: ON** - Shows toast notifications for each action
- **💡 Hints: OFF** - Clean mode for recording

---

## 📱 Complete Screen Map & Clickable Elements

### 1. SPLASH SCREEN
**Screen Name**: `01_SplashScreen`

**Interactive Elements**:
- ⏱️ Auto-advances after 2.5 seconds
- Shows eSakay logo, tagline, and loading spinner

**Navigation Flow**:
- **Auto** → Onboarding Screen 1

---

### 2. ONBOARDING FLOW (3 Screens)
**Screen Names**: `02_Onboarding_1`, `03_Onboarding_2`, `04_Onboarding_3`

**Interactive Elements**:

#### Screen 1 - "Find rides faster"
- 🔘 **Skip Button** (Top Right) → Login Screen
- 🔵 **Next Button** → Onboarding Screen 2
- 📍 Features GPS tracking icon

#### Screen 2 - "Real-time GPS tracking"
- 🔘 **Skip Button** → Login Screen
- 🔵 **Next Button** → Onboarding Screen 3
- 📱 Features smartphone icon

#### Screen 3 - "Safety + SOS"
- 🔘 **Skip Button** → Login Screen
- 🔵 **Get Started Button** → Login Screen
- 🛡️ Features shield icon

**Dot Indicators**: Show current screen (1 of 3, 2 of 3, 3 of 3)

---

### 3. LOGIN/REGISTER SCREEN
**Screen Name**: `05_LoginRegister`

**Interactive Elements**:

**Login Mode**:
- 📧 **Email Input Field** - Text input
- 🔒 **Password Input Field** - Password with show/hide toggle
- 👁️ **Eye Icon** - Toggle password visibility
- 🔵 **Login Button** → Home Dashboard
- 🔗 **Forgot Password Link** - Hover effect
- 🌐 **Continue with Google Button** → Home Dashboard
- 💳 **Continue with GCash Button** → Home Dashboard
- 🔗 **Create Account Link** → Switches to Register Mode

**Register Mode**:
- 👤 **Full Name Input Field**
- 📧 **Email Input Field**
- 🔒 **Password Input Field**
- 🔵 **Create Account Button** → Home Dashboard
- 🌐 **Continue with Google Button** → Home Dashboard
- 💳 **Continue with GCash Button** → Home Dashboard
- 🔗 **Login Link** → Switches to Login Mode

---

### 4. HOME DASHBOARD
**Screen Name**: `06_HomeDashboard`

**Interactive Elements**:

**Header Section**:
- 🔔 **Notification Bell** - Hover effect
- 👤 **Profile Icon** → Profile Screen

**Quick Action Grid** (6 buttons):
- 📍 **Track Vehicle** → Live Tracking Screen
- 🧮 **Calculate Fare** → Fare Calculator Screen
- 🗺️ **Find Route** → Route Finder Screen
- 💳 **Payment** → Payment Screen
- 🛡️ **Safety** → Safety Center Screen
- 👥 **Community** → Community Screen

**Emergency Access**:
- 🚨 **Emergency SOS Button** (Red gradient) → SOS Screen

**Recent Trips** (3 cards):
- Each trip card is clickable
- Shows from/to locations, fare, type
- Hover effect on cards

**Service Updates**:
- Information card with announcement
- Shows traffic updates

**Bottom Navigation**:
- 🏠 **Home** - Currently active
- 📍 **Track**
- 🧮 **Fare**
- 🗺️ **Routes**
- 🛡️ **Safety**
- 👥 **Community**

---

### 5. LIVE TRACKING SCREEN
**Screen Name**: `07_LiveTracking`

**Interactive Elements**:
- 🔙 **Back Button** (Top Left) → Previous screen
- 🔍 **Search Bar** - Text input for destinations
- 🗺️ **Map View** - Interactive map area
- 🚲 **Vehicle Type Filters** (Tricycle, Jeepney, Bus)
- 📍 **Vehicle Markers** on map
- 📊 **Nearby Vehicles List** (Scrollable)
- 🔵 **View Details Buttons** on each vehicle

**Bottom Navigation**: All tabs clickable

---

### 6. FARE CALCULATOR SCREEN
**Screen Name**: `08_FareCalculator`

**Interactive Elements**:
- 🔙 **Back Button** → Previous screen
- 🚗 **Vehicle Type Dropdown** (Tricycle, Jeepney, Bus)
- 📍 **Pickup Location Input**
- 📍 **Destination Input**
- 🔵 **Calculate Fare Button**
- 💰 **Fare Results Card**:
  - Regular fare display
  - Student discount (20% off)
  - Senior discount (30% off)
  - PWD discount
- 📊 **Distance and Time Estimates**

**Bottom Navigation**: All tabs clickable

---

### 7. ROUTE FINDER SCREEN
**Screen Name**: `09_RouteFinder`

**Interactive Elements**:
- 🔙 **Back Button**
- 📍 **Pickup Input Field**
- 📍 **Destination Input Field**
- 🔄 **Swap Locations Button**
- 🔍 **Find Route Button**

**Route Results** (3 cards):
- ⚡ **Fastest Route Card** → View on Map
- 💰 **Cheapest Route Card** → View on Map
- 🛡️ **Safest Route Card** → View on Map
- Each card shows: Time, Fare, Distance

**Bottom Navigation**: All tabs clickable

---

### 8. PAYMENT SCREEN
**Screen Name**: `10_Payment`

**Interactive Elements**:

**Payment Methods** (4 cards):
- 💳 **GCash Card** - Select/Active state
- 💳 **Maya Card** - Select/Active state
- 💳 **Beep Card** - Select/Active state
- 📱 **QR Code Card** - Select/Active state

**Actions**:
- ➕ **Add Payment Method Button**
- 📋 **Transaction History List** (Scrollable)
- 🔵 **Top Up Button**
- ⚙️ **Settings Icon**

**Bottom Navigation**: All tabs clickable

---

### 9. SAFETY CENTER SCREEN
**Screen Name**: `11_SafetyCenter`

**Interactive Elements**:
- 🔙 **Back Button**
- 🚨 **Large SOS Button** → SOS Screen (hold interaction)
- 📞 **Emergency Contacts List**:
  - Call Police button
  - Call Barangay Tanod button
  - Call Fire Department button
- 📤 **Share Trip Button**
- ⭐ **Rate Driver Button**
- 📜 **Safety Tips Section** (Expandable)

**Bottom Navigation**: All tabs clickable

---

### 10. COMMUNITY SCREEN
**Screen Name**: `12_Community`

**Interactive Elements**:
- 🔙 **Back Button**

**Report Categories** (6 buttons):
- 🚗 **Accident**
- 💰 **Fare Issue**
- ⚠️ **Unsafe Driving**
- 🔍 **Lost Item**
- 🚫 **No Rides**
- ℹ️ **Other**

**Report Form**:
- 📷 **Add Photo Button**
- ✍️ **Description Text Area**
- 📍 **Auto Location Tag Display**
- 🔵 **Submit Report Button**

**Community Feed**:
- Scrollable list of reports
- Each post has like/comment buttons
- Filter buttons (All, Reports, Tips, Updates)

**Bottom Navigation**: All tabs clickable

---

### 11. USER PROFILE SCREEN
**Screen Name**: `13_Profile`

**Interactive Elements**:
- 🔙 **Back Button**
- 📷 **Profile Picture** (Tap to change)
- ✏️ **Edit Profile Button**

**Profile Sections**:
- 👤 **Personal Information Card**
- 🎫 **Discount Card** (Student/Senior/PWD verification)
- 📜 **Trip History** → View All
- 💳 **Payment Methods** → Payment Screen
- ⚙️ **Settings**
- 📱 **App Version Info**
- 🚪 **Logout Button**

**Bottom Navigation**: All tabs clickable

---

### 12. SOS EMERGENCY SCREEN
**Screen Name**: `14_SOSEmergency`

**Interactive Elements**:
- ❌ **Close Button** (Top Right) → Previous screen
- 🚨 **Large SOS Button** (Hold for 3 seconds)
  - Shows countdown when pressed
  - Sends alert when held
- 📞 **Emergency Contact Buttons**:
  - Call Police (911)
  - Call Barangay Tanod
  - Call Fire Department
- 📤 **Share Live Location Button**
- 📍 **Current Location Display**

**States**:
- Initial state with instructions
- Pressing state with countdown
- Alert sent state with confirmation

---

### 13. DRIVER APP MODE
**Screen Name**: `15_DriverDashboard`

**Interactive Elements**:

**Header**:
- ☰ **Menu Button**
- ⚙️ **Settings Button**
- 🔘 **Online/Offline Toggle Switch**

**Stats Cards** (4 cards):
- 💰 Today's Earnings
- 📈 Total Trips
- ⏰ Hours Online
- ⭐ Rating

**Current Route Card**:
- Route information display
- 📊 Capacity indicator

**Active Trip Card** (when trip is active):
- Passenger information
- 📍 Pickup location
- 📍 Destination
- 💰 Fare amount
- 📞 **Call Passenger Button**
- ✅ **Complete Trip Button**

**Quick Actions** (4 buttons):
- 📱 **Scan QR**
- 🧭 **Navigation**
- 💵 **Earnings**
- 🗺️ **My Route**

**Simulate Button**:
- 🎬 **Simulate New Trip** - Creates demo trip

---

### 14. ADMIN DASHBOARD MODE
**Screen Name**: `16_AdminDashboard`

**Interactive Elements**:

**Sidebar Navigation** (10 menu items):
- 📊 **Dashboard** - Active
- 👥 **Users**
- 🚗 **Drivers**
- 🚙 **Vehicles**
- 🗺️ **Routes**
- 💰 **Fares**
- 🚨 **SOS Alerts**
- 💬 **Reports**
- 🛡️ **Payments**
- ⚙️ **Settings**

**Top Header**:
- 📄 **Export Report Button**
- 👤 **Admin Profile Icon**

**Stats Cards** (6 cards):
- 👥 Total Commuters
- ✅ Verified Drivers
- 🚗 Active Vehicles
- 🗺️ Active Routes
- 📋 Pending Reports
- 🚨 SOS Alerts

**Recent Alerts Section**:
- List of 3 recent alerts
- 🔵 **View Button** on each alert
- 🔗 **View All Link**

**Driver Verification Table**:
- Table with 4 pending drivers
- 🔍 **Review Button** on each row
- ✅ **Approve Button** on each row
- 🔗 **View All Link**

**Live Map Section**:
- 🗺️ Large map placeholder
- Vehicle count display

---

## 🎬 AVP Recording Instructions

### Pre-Recording Checklist
✅ Close unnecessary browser tabs  
✅ Hide desktop icons  
✅ Set browser to full screen (F11)  
✅ Test screen recording software  
✅ Prepare narration script  
✅ Set "Hints" to OFF for clean recording  

### Recording Flow Suggestion

**Act 1: Introduction (0:00 - 0:30)**
1. Start at Splash Screen
2. Narrate: "Welcome to eSakay Gensan..."
3. Show auto-transition to Onboarding

**Act 2: Onboarding (0:30 - 1:30)**
1. Click through 3 onboarding screens
2. Explain each feature as it appears
3. Click "Get Started"

**Act 3: Authentication (1:30 - 2:00)**
1. Show login screen
2. Toggle to registration view
3. Demonstrate social login buttons
4. Click login

**Act 4: Main Features Tour (2:00 - 5:00)**
1. **Home Dashboard** - Show quick actions
2. **Track Vehicle** - Demonstrate live tracking
3. **Calculate Fare** - Show discount calculations
4. **Find Route** - Display route options
5. **Payment** - Show payment methods
6. **Safety Center** - Access safety features
7. **Community** - Show reporting system

**Act 5: Emergency Demo (5:00 - 5:30)**
1. Click Emergency SOS button
2. Demonstrate hold-to-activate
3. Show emergency contacts
4. Close SOS screen

**Act 6: Driver Mode (5:30 - 6:30)**
1. Switch to Driver mode (top right)
2. Toggle online/offline
3. Show trip simulation
4. Demonstrate trip completion

**Act 7: Admin Mode (6:30 - 7:30)**
1. Switch to Admin mode
2. Navigate sidebar menu
3. Show driver verification
4. Display analytics dashboard

**Act 8: Conclusion (7:30 - 8:00)**
1. Click "Reset Flow"
2. Return to splash screen
3. Narrate closing thoughts

### Pro Tips for AVP Recording
- 🎤 **Audio**: Use clear narration explaining each click
- 🖱️ **Mouse**: Move cursor smoothly, pause on important elements
- ⏱️ **Pace**: Don't rush - let transitions complete
- 💡 **Highlights**: Use the Screen History panel as a teleprompter
- 🔄 **Practice**: Do a test run before final recording
- 📹 **Quality**: Record at 1080p minimum

---

## 🔗 Interaction Map Summary

| Screen | Clickable Elements | Destinations |
|--------|-------------------|--------------|
| Splash | Auto-advance | Onboarding 1 |
| Onboarding 1-3 | Next, Skip | Next screen / Login |
| Login | Login, Register, Social | Home Dashboard |
| Home | 6 Quick Actions, SOS | All main screens |
| Live Tracking | Vehicle markers, Filters | Vehicle details |
| Fare Calculator | Calculate button | Results |
| Route Finder | Find button | 3 Route options |
| Payment | 4 Payment cards | Payment details |
| Safety | SOS, Emergency calls | SOS screen / Calls |
| Community | 6 Categories, Submit | Report submission |
| Profile | Settings, History | Detail screens |
| SOS | Close, Call buttons | Previous / Phone |
| Driver | Toggle, Complete trip | Trip flow |
| Admin | 10 Sidebar items | Admin sections |

---

## 🎨 Transition Styles Used

- **Splash → Onboarding**: Fade (0.3s)
- **Onboarding → Login**: Slide Right (0.3s)
- **Login → Home**: Slide Up (0.3s)
- **Navigation between main screens**: User-selectable (Slide/Fade/Dissolve)
- **SOS Screen**: Scale In (0.3s)
- **Mode Switching**: Fade (0.3s)

---

## 📊 Prototype Testing Checklist

Before recording your AVP, test these interactions:

### Core Flow
- [ ] Splash screen auto-advances
- [ ] All 3 onboarding screens work
- [ ] Skip button on onboarding works
- [ ] Login/Register toggle works
- [ ] Social login buttons are clickable
- [ ] Home dashboard loads

### Navigation
- [ ] All 6 quick action buttons work
- [ ] Bottom navigation works on all screens
- [ ] Back buttons return to previous screen
- [ ] Profile icon opens profile screen

### Features
- [ ] Fare calculator computes correctly
- [ ] Route finder shows 3 options
- [ ] Payment methods are selectable
- [ ] Community report categories work
- [ ] SOS button activates emergency screen

### Mode Switching
- [ ] Commuter → Driver switch works
- [ ] Commuter → Admin switch works
- [ ] Modes persist until changed

### Transitions
- [ ] All transitions are smooth
- [ ] No flickering or jumping
- [ ] Toast notifications appear
- [ ] Screen history updates

### Controls
- [ ] Reset flow returns to splash
- [ ] Transition type selector works
- [ ] Hints toggle works
- [ ] Control panel can hide/show

---

## 🎓 Learning Objectives Achieved

✅ **Screen Organization**: All screens named and organized  
✅ **Prototype Mode**: Interactive mode with full linking  
✅ **Connection Creation**: All buttons linked to destinations  
✅ **Interaction Configuration**: Triggers, actions, and animations set  
✅ **User Flow Testing**: Complete journey is clickable  
✅ **AVP Ready**: Optimized for recording and presentation  

---

**Your prototype is now production-ready for:**
- Client presentations
- User testing sessions
- Stakeholder demos
- Marketing videos
- Training materials
- Development handoff

🎉 **Happy Recording!** 🎬
