# 📝 Files You Need to Edit - Complete List

This guide shows you exactly which files to edit and what to change.

---

## 🎯 Quick Answer

**Add this class to any element you want to animate:**
```jsx
className="existing-classes animate-on-scroll ANIMATION_TYPE"
```

**Replace ANIMATION_TYPE with:**
- `bounce` (recommended for most things)
- `slide-left` (elements from left)
- `slide-right` (elements from right)
- `rotate` (spinning effect)
- `float` (elegant upward float)

---

## 📁 What Was Done For You (Already Complete)

These files were already updated - **NO CHANGES NEEDED**:

### ✅ src/index.css
- Added 180+ lines of animation CSS
- Scale & shadow hover effects
- 5 different scroll animations
- Automatic stagger delays
- Status: **DONE** ✓

### ✅ src/App.tsx
- Added scroll animation hook
- Initializes animations on app load
- Status: **DONE** ✓

### ✅ src/hooks/useScrollAnimation.ts (NEW)
- Intersection Observer hook
- Auto-detects viewport elements
- Status: **CREATED** ✓

### ✅ src/utils/animationClasses.ts (NEW)
- Helper utilities
- Documentation
- Status: **CREATED** ✓

---

## 🚀 What You Need to Edit

Now you just need to add animation classes to your existing JSX. Here's where:

### 🔴 PRIORITY 1 - Edit These First

#### `src/pages/Index.tsx`
**What to add animations to:**
- Hero section heading and subheading
- CTA buttons
- Featured services cards
- Testimonials
- Any showcase sections

**Example:**
```jsx
// Before
<h1>Welcome to Global Imports</h1>
<button className="btn-gold">Get Started</button>

// After
<h1 className="animate-on-scroll float">Welcome to Global Imports</h1>
<button className="btn-gold animate-on-scroll bounce">Get Started</button>
```

---

#### `src/pages/Services.tsx`
**What to add animations to:**
- Main heading
- Service category cards
- Service grid items
- Descriptions

**Example:**
```jsx
// Before
<div className="service-card">
  <h3>Global Sourcing</h3>
  <p>Description...</p>
</div>

// After
<div className="service-card animate-on-scroll bounce">
  <h3>Global Sourcing</h3>
  <p>Description...</p>
</div>
```

---

#### `src/pages/Products.tsx`
**What to add animations to:**
- Product cards
- Product images
- Product titles
- Grid sections

**Example:**
```jsx
// Before
<div className="product-card">
  <img src="..." alt="..." />
  <h3>Product Name</h3>
</div>

// After
<div className="product-card animate-on-scroll bounce">
  <img src="..." alt="..." />
  <h3>Product Name</h3>
</div>
```

---

### 🟡 PRIORITY 2 - Edit These Next

#### `src/pages/About.tsx`
**What to add animations to:**
- About section heading
- Company description paragraphs
- About content blocks
- Statistics/achievements
- Mission/Vision statements

**Example:**
```jsx
<div className="about-section animate-on-scroll slide-left">
  <h2>Our Story</h2>
  <p>Company description...</p>
</div>
```

---

#### `src/pages/Contact.tsx`
**What to add animations to:**
- Contact form
- Form input sections
- Contact information blocks
- Map container
- Submit button

**Example:**
```jsx
<form className="contact-form animate-on-scroll bounce">
  {/* form fields */}
</form>

<button className="animate-on-scroll bounce">Send Message</button>
```

---

### 🟢 PRIORITY 3 - Service Detail Pages

#### `src/pages/services/GlobalSourcing.tsx`
- Page heading: `animate-on-scroll float`
- Content sections: `animate-on-scroll slide-left`
- Feature cards: `animate-on-scroll bounce`
- CTA button: `animate-on-scroll bounce`

#### `src/pages/services/ExportManagement.tsx`
- Same pattern as GlobalSourcing.tsx

#### `src/pages/services/ImportCompliance.tsx`
- Same pattern as GlobalSourcing.tsx

#### `src/pages/services/LogisticsFreight.tsx`
- Same pattern as GlobalSourcing.tsx

#### `src/pages/services/CustomsDocumentation.tsx`
- Same pattern as GlobalSourcing.tsx

#### `src/pages/services/QualityInspection.tsx`
- Same pattern as GlobalSourcing.tsx

---

## 🎨 Animation Type Guide

Use this to pick the right animation:

| Animation | Best For | Example |
|-----------|----------|---------|
| **bounce** | Cards, buttons, products, services | Most common, use this first |
| **slide-left** | Sections coming from left, descriptions | Left-aligned content |
| **slide-right** | Sections coming from right, images | Right-aligned content |
| **rotate** | Special highlights, featured items | Eye-catching elements |
| **float** | Hero text, headings, elegant content | Important text content |

---

## 📊 Stagger Timing (Automatic!)

When you have multiple elements with `animate-on-scroll`:
```
1st element: 0ms      ⚡ appears immediately
2nd element: 150ms    ⚡ waits 150ms
3rd element: 300ms    ⚡ waits 300ms
4th element: 450ms    ⚡ waits 450ms
5th element: 600ms    ⚡ waits 600ms
6th element: 750ms    ⚡ waits 750ms
```

This creates a beautiful wave effect automatically!

---

## 🔥 Real Full Examples

### Example 1: Service Card Grid
```jsx
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <div className="service-card animate-on-scroll bounce">
    <h3>Global Sourcing</h3>
    <p>Find and source products worldwide...</p>
    <a href="#" className="animate-on-scroll bounce">Learn More</a>
  </div>
  
  <div className="service-card animate-on-scroll bounce">
    <h3>Export Management</h3>
    <p>Streamlined export processes...</p>
    <a href="#" className="animate-on-scroll bounce">Learn More</a>
  </div>
  
  <div className="service-card animate-on-scroll bounce">
    <h3>Import Compliance</h3>
    <p>Ensure all regulations are met...</p>
    <a href="#" className="animate-on-scroll bounce">Learn More</a>
  </div>
  {/* Auto-staggers: 0ms, 150ms, 300ms */}
</div>
```

### Example 2: Hero Section
```jsx
<section className="hero">
  <h1 className="animate-on-scroll float">
    Welcome to Global Imports
  </h1>
  
  <p className="animate-on-scroll slide-left">
    Your trusted partner for international trade
  </p>
  
  <button className="btn-gold animate-on-scroll bounce">
    Get Started
  </button>
</section>
```

### Example 3: About Section
```jsx
<section className="about">
  <div className="animate-on-scroll slide-left">
    <h2>Our Story</h2>
    <p>20+ years of excellence in global imports...</p>
  </div>
  
  <div className="animate-on-scroll slide-right">
    <h2>Our Mission</h2>
    <p>To make international trade seamless...</p>
  </div>
  
  <div className="animate-on-scroll rotate">
    <h2>Our Vision</h2>
    <p>Connecting businesses worldwide...</p>
  </div>
</section>
```

---

## ✅ Checklist

Mark these as you complete:

### Phase 1 (Quick Wins)
- [ ] Edit `src/pages/Index.tsx` - Add animations to hero and featured sections
- [ ] Edit `src/pages/Services.tsx` - Animate service cards
- [ ] Edit `src/pages/Products.tsx` - Animate product cards

### Phase 2 (Complete Coverage)
- [ ] Edit `src/pages/About.tsx` - Animate about content
- [ ] Edit `src/pages/Contact.tsx` - Animate contact form

### Phase 3 (Polish)
- [ ] Edit service detail pages (GlobalSourcing, ExportManagement, etc.)

---

## 💡 Tips

1. **Start with Priority 1** - These are the most visible pages
2. **Use `bounce` by default** - It works great for most things
3. **Test as you go** - Add a few, refresh, see it work
4. **Use stagger timing** - Puts multiple items together for wave effect
5. **Mix animations** - Use different ones for visual variety
6. **Hover effects are free** - They work automatically, no code needed!

---

## 🎯 The Simplest Change

If you don't want to think about it, just do this to every card/button/section:

```jsx
className="your-existing-classes animate-on-scroll bounce"
```

That's it! Bounce looks great on everything.

---

**Ready to make your site beautiful? Start with Index.tsx! 🚀**
