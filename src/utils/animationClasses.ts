/**
 * Animation Classes Guide
 * ========================
 * 
 * HOVER EFFECTS (Automatic):
 * - Buttons, Links, Images, and Cards automatically get scale & shadow hover effects
 * - No need to add any classes - all interactive elements have smooth 1.05x scale on hover
 * 
 * SCROLL ANIMATIONS (Add to JSX):
 * - animate-on-scroll: Base class for all scroll animations
 * - bounce: Scale and bounce animation with rotation
 * - slide-left: Slide in from left with fade
 * - slide-right: Slide in from right with fade
 * - rotate: Rotate in with scale effect
 * - float: Float up with smooth fade
 * 
 * USAGE EXAMPLES:
 * ===============
 * 
 * 1. Basic bounce animation (most common):
 *    <div className="animate-on-scroll bounce">
 *      Content here
 *    </div>
 * 
 * 2. Cards that slide in from left:
 *    <div className="card animate-on-scroll slide-left">
 *      Card content
 *    </div>
 * 
 * 3. Multiple elements with stagger effect:
 *    <div className="grid gap-4">
 *      <div className="animate-on-scroll slide-right">Item 1</div>
 *      <div className="animate-on-scroll slide-right">Item 2</div>
 *      <div className="animate-on-scroll slide-right">Item 3</div>
 *    </div>
 * 
 * 4. Combine with data attributes for custom delays:
 *    <div className="animate-on-scroll bounce" data-animation="bounce">
 *      Special content
 *    </div>
 * 
 * ANIMATION DELAYS:
 * =================
 * Stagger automatically applies for:
 * - 1st child: 0s
 * - 2nd child: 0.15s
 * - 3rd child: 0.3s
 * - 4th child: 0.45s
 * - 5th child: 0.6s
 * - 6th child: 0.75s
 * 
 * NO ADDITIONAL SETUP NEEDED - Just add the classes and the hook handles it!
 */

export const animationClasses = {
  // Base class that triggers the observer
  base: 'animate-on-scroll',
  
  // Animation types
  bounce: 'bounce',
  slideLeft: 'slide-left',
  slideRight: 'slide-right',
  rotate: 'rotate',
  float: 'float',
} as const;

// Helper function to build animation class string
export const getAnimationClass = (animationType: keyof typeof animationClasses = 'bounce'): string => {
  return `${animationClasses.base} ${animationClasses[animationType]}`;
};
