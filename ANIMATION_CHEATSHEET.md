# 🎬 Animation Quick Reference

## Copy & Paste Ready Examples

### Cards (Most Common)
```jsx
<div className="card animate-on-scroll bounce">Content</div>
```

### Slide From Left
```jsx
<div className="animate-on-scroll slide-left">Content</div>
```

### Slide From Right
```jsx
<div className="animate-on-scroll slide-right">Content</div>
```

### Rotate In
```jsx
<div className="animate-on-scroll rotate">Content</div>
```

### Float Up (Elegant)
```jsx
<div className="animate-on-scroll float">Content</div>
```

---

## Hover Effects (Already Working!)

All these automatically get scale + shadow on hover:
- ✅ Buttons
- ✅ Links  
- ✅ Images
- ✅ Cards
- ✅ Service cards
- ✅ Product cards

**No code needed - it's automatic!**

---

## Files You Need to Edit

| Priority | File | What to Add |
|----------|------|------------|
| 🔴 High | `src/pages/Index.tsx` | Hero, featured items, testimonials |
| 🟡 Med | `src/pages/Services.tsx` | Service cards |
| 🟡 Med | `src/pages/Products.tsx` | Product cards |
| 🟢 Low | `src/pages/About.tsx` | About content sections |
| 🟢 Low | `src/pages/Contact.tsx` | Form elements |

---

## Auto-Stagger Delay (Automatic!)

When you add `animate-on-scroll` to multiple siblings:
```
Item 1: 0ms    ⚡
Item 2: 150ms  ⚡
Item 3: 300ms  ⚡
Item 4: 450ms  ⚡
Item 5: 600ms  ⚡
Item 6: 750ms  ⚡
```

No extra code needed!

---

## Real Example

```jsx
// Before
<div className="grid grid-cols-3">
  <div className="card">Service 1</div>
  <div className="card">Service 2</div>
  <div className="card">Service 3</div>
</div>

// After (Just add this!)
<div className="grid grid-cols-3">
  <div className="card animate-on-scroll bounce">Service 1</div>
  <div className="card animate-on-scroll bounce">Service 2</div>
  <div className="card animate-on-scroll bounce">Service 3</div>
</div>

// Result: Cards bounce in with automatic stagger! ✨
```

---

## Animation Settings

All animations:
- Duration: 0.8s (smooth but not slow)
- Easing: Cubic-bezier curves for natural feel
- Trigger: When element enters viewport
- Repeat: One time only (loads once)

---

**That's all you need to know! Start adding the classes and watch your site come alive! 🚀**
