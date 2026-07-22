import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const canvasRef = useRef(null);
  const mouseCoords = useRef({ x: 0, y: 0 });
  const lastMouseCoords = useRef({ x: 0, y: 0 });
  const isHovered = useRef(false);
  const hasMoved = useRef(false);
  const isTouchDevice = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    const particles = [];
    const maxParticles = 150;

    // Track mouse coordinates and set initial positions
    const onMouseMove = (e) => {
      mouseCoords.current = { x: e.clientX, y: e.clientY };
      if (!hasMoved.current) {
        hasMoved.current = true;
        lastMouseCoords.current = { x: e.clientX, y: e.clientY };
        cursorCoords.x = e.clientX;
        cursorCoords.y = e.clientY;
      }
    };

    // Detect touch input and hide the cursor canvas
    const onTouchStart = () => {
      isTouchDevice.current = true;
      if (canvasRef.current) {
        canvasRef.current.style.display = 'none';
      }
    };

    // Check if hovering clickable elements
    const onMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      const isClickable =
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive') ||
        target.classList.contains('btn') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.classList.contains('filter-btn') ||
        target.classList.contains('project-card') ||
        target.closest('.project-card') ||
        target.classList.contains('theme-toggle') ||
        target.classList.contains('scroll-to-top');

      isHovered.current = !!isClickable;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseover', onMouseOver);
    window.addEventListener('touchstart', onTouchStart, { passive: true });

    // Keep an interpolated cursor position for smooth lag effect
    const cursorCoords = { x: 0, y: 0 };

    class Particle {
      constructor(x, y, isHoveredState) {
        this.x = x;
        this.y = y;
        
        const angle = Math.random() * Math.PI * 2;
        const speed = isHoveredState 
          ? Math.random() * 2.5 + 0.8
          : Math.random() * 1.2 + 0.3;
        
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        
        if (isHoveredState) {
          this.vy -= 0.3;
        }

        this.size = isHoveredState 
          ? Math.random() * 4.5 + 2.5
          : Math.random() * 2.5 + 1.2;
        
        this.maxLife = isHoveredState ? 35 : 25;
        this.life = this.maxLife;
        this.alpha = 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life--;
        this.alpha = Math.max(0, this.life / this.maxLife);
        this.size = Math.max(0.1, this.size * 0.95);
      }

      draw() {
        if (this.alpha <= 0) return;
        ctx.beginPath();
        const ageRatio = this.life / this.maxLife;
        const hue = 180 + (1 - ageRatio) * 95; 
        
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        
        if (this.size > 2.5) {
          ctx.fillStyle = `hsla(${hue}, 100%, 65%, ${this.alpha * 0.12})`;
          ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
          ctx.fill();
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        }
        
        ctx.fillStyle = `hsla(${hue}, 100%, 60%, ${this.alpha})`;
        ctx.fill();
      }
    }

    let frameId;
    let spawnTimer = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isTouchDevice.current || !hasMoved.current) {
        frameId = requestAnimationFrame(animate);
        return;
      }

      // Lerp mouse coordinates to make the inner cursor head drag smoothly
      cursorCoords.x += (mouseCoords.current.x - cursorCoords.x) * 0.18;
      cursorCoords.y += (mouseCoords.current.y - cursorCoords.y) * 0.18;

      // Spawn trail particles based on mouse movement speed
      const dx = mouseCoords.current.x - lastMouseCoords.current.x;
      const dy = mouseCoords.current.y - lastMouseCoords.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      lastMouseCoords.current = { ...mouseCoords.current };

      if (dist > 0.5) {
        const numParticles = Math.min(5, Math.floor(dist / 3) + 1);
        for (let i = 0; i < numParticles; i++) {
          const ratio = i / numParticles;
          const px = lastMouseCoords.current.x - dx * ratio;
          const py = lastMouseCoords.current.y - dy * ratio;
          if (particles.length < maxParticles) {
            particles.push(new Particle(px, py, isHovered.current));
          }
        }
      }

      spawnTimer++;
      if (spawnTimer % 2 === 0) {
        if (particles.length < maxParticles) {
          const count = isHovered.current ? 2 : 1;
          for (let i = 0; i < count; i++) {
            const offsetAngle = Math.random() * Math.PI * 2;
            const offsetRadius = Math.random() * (isHovered.current ? 12 : 3);
            const px = cursorCoords.x + Math.cos(offsetAngle) * offsetRadius;
            const py = cursorCoords.y + Math.sin(offsetAngle) * offsetRadius;
            particles.push(new Particle(px, py, isHovered.current));
          }
        }
      }

      // Render all particles with additive blending
      ctx.globalCompositeOperation = 'lighter';
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw();
        if (p.life <= 0 || p.size <= 0.2) {
          particles.splice(i, 1);
        }
      }

      // Draw the core glowing cursor point
      ctx.beginPath();
      ctx.globalCompositeOperation = 'source-over';
      const coreHue = isHovered.current ? 275 : 180;
      const coreSize = isHovered.current ? 5 : 6;
      
      // Draw outer glowing ring for core point
      ctx.arc(cursorCoords.x, cursorCoords.y, coreSize * (isHovered.current ? 3.0 : 2.0), 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${coreHue}, 100%, 65%, 0.18)`;
      ctx.fill();

      // Draw inner core point
      ctx.beginPath();
      ctx.arc(cursorCoords.x, cursorCoords.y, coreSize, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${coreHue}, 100%, 60%, 0.95)`;
      ctx.fill();

      frameId = requestAnimationFrame(animate);
    };

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', onMouseOver);
      window.removeEventListener('touchstart', onTouchStart);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="custom-cursor-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 999999,
        mixBlendMode: 'screen',
      }}
    />
  );
}
