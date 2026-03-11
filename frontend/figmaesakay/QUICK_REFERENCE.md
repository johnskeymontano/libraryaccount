# 🚀 eSakay Gensan - Quick Reference Card

## ⚡ 30-Second Overview

**What**: Interactive prototype of a Filipino transportation app  
**Purpose**: Demo, user testing, and AVP recording  
**Screens**: 16 fully linked screens  
**Modes**: Commuter, Driver, Admin  
**Transitions**: Slide, Fade, Dissolve  

---

## 🎮 Control Panel Guide

### 📱 Mode Switcher (Top Right)
```
[👤 Commuter] [🚗 Driver] [⚙️ Admin]
```
- Click to switch between user types
- Blue = Commuter, Yellow = Driver, Green = Admin

### 🎬 Prototype Controller (Bottom Center)
```
[📺 Current Screen] [⏸️ Pause] [🔄 Reset] [● Recording] [Hide]
```
- **Current Screen**: Shows your location in the flow
- **Pause**: Temporarily pause interactions
- **Reset**: Return to Splash screen
- **Recording Indicator**: Red dot when active
- **Hide**: Minimize for clean recording

### 🎨 Transition Selector (Top Right, Below Modes)
```
[Slide] [Fade] [Dissolve]
```
- Changes animation between screens
- Only visible in Commuter mode

### 📊 Screen History (Top Left)
```
Step 1: Splash Screen
Step 2: Onboarding
Step 3: Login
Step 4: Home Dashboard ← ●
```
- Tracks your journey through the app
- Shows last 10 screens
- Current screen highlighted in blue

### 💡 Hints Toggle (Top Right)
```
[💡 Hints: ON]
```
- Toggle toast notifications
- Turn OFF for clean recording

---

## 🗺️ Screen Navigation Map

### Starting Flow
```
Splash (auto 2.5s) 
  ↓
Onboarding 1 → Onboarding 2 → Onboarding 3
  ↓ (Skip or Get Started)
Login/Register
  ↓
Home Dashboard ← MAIN HUB
```

### From Home Dashboard
```
Home Dashboard
├─ Track Vehicle → Live Tracking
├─ Calculate Fare → Fare Calculator
├─ Find Route → Route Finder
├─ Payment → Payment Methods
├─ Safety → Safety Center → SOS Screen
├─ Community → Community Feed
└─ Profile (icon) → User Profile

Emergency SOS Button → SOS Screen (red fullscreen)
```

### Bottom Navigation (Always Available)
```
[🏠 Home] [📍 Track] [🧮 Fare] [🗺️ Routes] [🛡️ Safety] [👥 Community]
```

---

## 🎬 Recording Shortcuts

### Before Recording
1. Press **F11** (fullscreen browser)
2. Click **💡 Hints: OFF**
3. Click **Hide** on controller (optional)
4. Position on **Splash Screen**
5. Start screen recording

### During Recording
- Move cursor **smoothly**
- **Pause 2-3 seconds** on each screen
- Let transitions **complete fully**
- Click **naturally** (not too fast)

### After Recording
1. Click **Reset Flow** to end at Splash
2. Stop recording
3. Review playback
4. Export in 1080p+

---

## 📱 Screen List (16 Total)

### Auth Flow (4 screens)
1. `Splash` - Auto-advances
2. `Onboarding_1` - Find rides faster
3. `Onboarding_2` - GPS tracking
4. `Onboarding_3` - Safety features
5. `Login/Register` - Authentication

### Main App - Commuter (7 screens)
6. `Home` - Dashboard & quick actions
7. `LiveTracking` - Vehicle map
8. `FareCalculator` - Fare computation
9. `RouteFinder` - Route planning
10. `Payment` - Payment methods
11. `Safety` - Safety center
12. `Community` - Reports & feed
13. `Profile` - User settings

### Special (1 screen)
14. `SOS` - Emergency screen (red)

### Other Modes (2 screens)
15. `DriverApp` - Driver dashboard
16. `AdminDashboard` - Admin panel (web view)

---

## 🎯 Critical Interactions

### Must-Show Features
✅ Splash auto-advance  
✅ Onboarding skip option  
✅ Login with social options  
✅ Home quick actions (6 buttons)  
✅ SOS hold-to-activate  
✅ Fare calculator with discounts  
✅ Route finder (3 options)  
✅ Driver online toggle  
✅ Admin verification table  
✅ Reset to beginning  

---

## 🔧 Troubleshooting

### Issue: Screen won't advance
- **Fix**: Click the correct button/link
- **Check**: Is element actually clickable?

### Issue: No toast notifications
- **Fix**: Turn Hints ON (💡 toggle)

### Issue: Controller disappeared
- **Fix**: Look for floating Smartphone icon (bottom center)

### Issue: Wrong screen after click
- **Fix**: Click Reset Flow, start over

### Issue: Animation looks choppy
- **Fix**: Close other browser tabs
- **Fix**: Try different transition type

### Issue: Can't find a feature
- **Fix**: Check PROTOTYPE_GUIDE.md for screen map
- **Fix**: Use Screen History to see where you've been

---

## 📄 Document Guide

### Quick Reading (5 min)
→ **THIS FILE** - Quick Reference

### Complete Understanding (30 min)
→ **PROTOTYPE_GUIDE.md** - Full interaction map

### Visual Learning (15 min)
→ **STORYBOARD.md** - Flow diagrams

### Recording Prep (45 min)
→ **AVP_SCRIPT.md** - Narration script

### Feature Overview (10 min)
→ **README.md** - App features & design system

---

## 🎨 Color Reference

| Color | Hex | Usage |
|-------|-----|-------|
| Primary Blue | `#0156D1` | Buttons, highlights |
| Primary Yellow | `#FEC400` | Accents, alerts |
| Eco Green | `#2DBA4E` | Success, active |
| Error Red | `#C62828` | SOS, warnings |
| Dark Navy | `#0C1A36` | Text, headers |
| Light Gray | `#F5F5F5` | Backgrounds |

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| F11 | Fullscreen browser |
| Esc | Exit fullscreen |
| Tab | Navigate elements |
| Enter | Activate button |
| Space | Scroll down |
| Home | Scroll to top |

---

## 📊 Demo Flow (Quick 3-min Version)

```
1. Splash (5s)
   ↓
2. Onboarding → Skip (10s)
   ���
3. Login (10s)
   ↓
4. Home Dashboard (20s)
   - Show quick actions
   - Click Track Vehicle
   ↓
5. Live Tracking (20s)
   - Show map
   - Show vehicles
   ↓
6. Back to Home (10s)
   - Click Emergency SOS
   ↓
7. SOS Screen (30s)
   - Hold button demo
   - Show emergency contacts
   ↓
8. Switch to Driver (20s)
   - Show stats
   - Toggle online
   ↓
9. Switch to Admin (30s)
   - Show dashboard
   - Show verification
   ↓
10. Reset Flow (5s)

TOTAL: ~3 minutes
```

---

## 🎯 Success Checklist

### Before Demo
- [ ] Browser in fullscreen
- [ ] Hints turned OFF
- [ ] Controller visible
- [ ] On Splash screen
- [ ] Recording software ready
- [ ] Audio levels checked
- [ ] Script prepared

### During Demo
- [ ] Smooth cursor movement
- [ ] Natural clicking pace
- [ ] Clear narration
- [ ] Show all key features
- [ ] Demonstrate transitions
- [ ] Switch between modes
- [ ] Use SOS feature

### After Demo
- [ ] Review recording
- [ ] Check audio sync
- [ ] Verify quality
- [ ] Export correctly
- [ ] Test on devices
- [ ] Share with team

---

## 🆘 Emergency Contacts (For Questions)

### Documentation
- **Prototype Guide**: `/PROTOTYPE_GUIDE.md`
- **Storyboard**: `/STORYBOARD.md`
- **AVP Script**: `/AVP_SCRIPT.md`
- **README**: `/README.md`

### Common Questions

**Q: How do I start over?**  
A: Click "Reset Flow" button in controller

**Q: Can I skip onboarding?**  
A: Yes, click "Skip" on any onboarding screen

**Q: How do I record?**  
A: Use OBS, Loom, or any screen recorder. Follow AVP_SCRIPT.md

**Q: How long should the recording be?**  
A: 8-10 minutes (full), 3-5 minutes (quick), 15+ minutes (detailed)

**Q: Can I customize the prototype?**  
A: Yes, edit `/components/PrototypeApp.tsx`

---

## 🌟 Pro Tips

💡 **Recording**: Do a practice run first  
💡 **Audio**: Use a good microphone  
💡 **Pacing**: Speak at 120-150 words/minute  
💡 **Transitions**: Let them complete fully  
💡 **Features**: Show discounts in Fare Calculator  
💡 **Drama**: Demo the SOS hold feature  
💡 **Modes**: Switch to all 3 modes  
💡 **Ending**: Reset to Splash for clean close  

---

## 🎓 Learning Path

### Beginner (First Time User)
1. Read this Quick Reference
2. Click through the app naturally
3. Explore all 3 modes
4. Use Reset Flow to practice

### Intermediate (Preparing Demo)
1. Read PROTOTYPE_GUIDE.md
2. Review STORYBOARD.md
3. Practice the flow 2-3 times
4. Do a test recording

### Advanced (AVP Recording)
1. Study AVP_SCRIPT.md
2. Prepare narration points
3. Set up recording environment
4. Record professional AVP

---

**📌 Bookmark this page for quick access during demos!**

🎬 **Ready to present? Let's go!** 🚀
