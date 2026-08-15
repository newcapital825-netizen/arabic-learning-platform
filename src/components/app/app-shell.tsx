/* ============================================================
   «البكالوريا المصرية | اللغة العربية — الصف الثاني الثانوي»
   هوية عربية معاصرة: واجهة داكنة فاخرة، حواف حادة، حدود قوية،
   تلوين مسطح بألوان نابضة (كهرماني/تركوازي/أحمر/أزرق).
   ============================================================ */
@import "tailwindcss";
@import "tw-animate-css";
@custom-variant dark (&:is(.dark *));

@theme inline {
  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);
  --color-chart-1: var(--chart-1);
  --color-chart-2: var(--chart-2);
  --color-chart-3: var(--chart-3);
  --color-chart-4: var(--chart-4);
  --color-chart-5: var(--chart-5);
  --color-sidebar: var(--sidebar);
  --color-sidebar-foreground: var(--sidebar-foreground);
  --color-sidebar-primary: var(--sidebar-primary);
  --color-sidebar-primary-foreground: var(--sidebar-primary-foreground);
  --color-sidebar-accent: var(--sidebar-accent);
  --color-sidebar-accent-foreground: var(--sidebar-accent-foreground);
  --color-sidebar-border: var(--sidebar-border);
  --color-sidebar-ring: var(--sidebar-ring);

  /* ألوان المنصة */
  --color-ink: var(--ink);
  --color-paper: var(--paper);
  --color-cream: var(--cream);
  --color-rust: var(--rust);
  --color-denim: var(--denim);
  --color-gold: var(--gold);
  --color-moss: var(--moss);
  /* نص داكن ثابت فوق الأسطح الذهبية / الفاتحة */
  --color-gold-fg: var(--gold-fg);
  --color-gold-deep: var(--gold-deep);

  /* الخطوط العربية */
  --font-sans: "Cairo", "Segoe UI", system-ui, sans-serif;
  --font-amiri: "Amiri", "Noto Naskh Arabic", serif;
  --font-ruqaa: "Aref Ruqaa", "Amiri", serif;
}

:root {
  /* زوايا حادة */
  --radius: 0px;

  /* سطوح داكنة + حبر فاتح */
  --paper: #12100c;
  --cream: #1b1813;
  --ink: #f2ebd9;
  /* ألوان نابضة على الداكن */
  --rust: #e2604f; /* تصحيحات وتأكيد */
  --denim: #6c9ce8; /* معلومات وروابط */
  --gold: #e8b84c; /* تلميح وتمييز */
  --moss: #3fbf8e; /* صح وتقدم */
  --gold-fg: #1a1204; /* نص داكن على كهرماني مصمت */
  --gold-deep: #9a6b12; /* كهرماني داكن للنص على الأشرطة الفاتحة */

  --background: #12100c;
  --foreground: #f2ebd9;
  --card: #1b1813;
  --card-foreground: #f2ebd9;
  --popover: #1f1c16;
  --popover-foreground: #f2ebd9;
  --primary: #e8b84c;
  --primary-foreground: #1a1204;
  --secondary: #26221a;
  --secondary-foreground: #f2ebd9;
  --muted: #26221a;
  --muted-foreground: #a79c85;
  --accent: #2a251c;
  --accent-foreground: #f2ebd9;
  --destructive: #e2604f;
  --border: #f2ebd9;
  --input: #f2ebd9;
  --ring: #e8b84c;

  --chart-1: #e8b84c;
  --chart-2: #3fbf8e;
  --chart-3: #e2604f;
  --chart-4: #6c9ce8;
  --chart-5: #f2ebd9;

  --sidebar: #1b1813;
  --sidebar-foreground: #f2ebd9;
  --sidebar-primary: #e8b84c;
  --sidebar-primary-foreground: #1a1204;
  --sidebar-accent: #26221a;
  --sidebar-accent-foreground: #f2ebd9;
  --sidebar-border: #f2ebd9;
  --sidebar-ring: #e8b84c;
}

/* الوضع الداكن الافتراضي — الواجهة داكنة دائمًا */
.dark {
  --paper: #12100c;
  --cream: #1b1813;
  --ink: #f2ebd9;
  --rust: #e2604f;
  --denim: #6c9ce8;
  --gold: #e8b84c;
  --moss: #3fbf8e;
  --gold-fg: #1a1204;
  --gold-deep: #9a6b12;

  --background: #12100c;
  --foreground: #f2ebd9;
  --card: #1b1813;
  --card-foreground: #f2ebd9;
  --popover: #1f1c16;
  --popover-foreground: #f2ebd9;
  --primary: #e8b84c;
  --primary-foreground: #1a1204;
  --secondary: #26221a;
  --secondary-foreground: #f2ebd9;
  --muted: #26221a;
  --muted-foreground: #a79c85;
  --accent: #2a251c;
  --accent-foreground: #f2ebd9;
  --destructive: #e2604f;
  --border: #f2ebd9;
  --input: #f2ebd9;
  --ring: #e8b84c;
}

@layer base {
  * {
    @apply border-border outline-ring/50;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-background text-foreground;
    font-family: var(--font-sans);
    -webkit-font-smoothing: antialiased;
  }
  button:not([disabled]),
  [role="button"]:not([disabled]) {
    cursor: pointer;
  }
  ::selection {
    background: var(--gold);
    color: var(--gold-fg);
  }
}

/* ============ الظلال الصلبة (حدود ضوئية على الداكن) ============ */

@utility shadow-hard {
  box-shadow: 5px 5px 0 0 var(--ink);
}
@utility shadow-hard-sm {
  box-shadow: 3px 3px 0 0 var(--ink);
}
@utility shadow-hard-lg {
  box-shadow: 9px 9px 0 0 var(--ink);
}
@utility shadow-hard-rust {
  box-shadow: 5px 5px 0 0 var(--rust);
}
@utility shadow-hard-denim {
  box-shadow: 5px 5px 0 0 var(--denim);
}
@utility shadow-hard-gold {
  box-shadow: 5px 5px 0 0 var(--gold);
}
@utility shadow-hard-moss {
  box-shadow: 5px 5px 0 0 var(--moss);
}

/* سطور كراسة + خط هامش أحمر */
@utility paper-lines {
  background-image: linear-gradient(
      to right,
      rgba(226, 96, 79, 0.35) 0px,
      rgba(226, 96, 79, 0.35) 1px,
      transparent 1px
    ),
    repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 31px,
      rgba(242, 235, 217, 0.07) 31px,
      rgba(242, 235, 217, 0.07) 32px
    );
}

/* خلفية نقطية خفيفة */
@utility paper-dots {
  background-image: radial-gradient(
    rgba(242, 235, 217, 0.1) 1px,
    transparent 1px
  );
  background-size: 22px 22px;
}

/* شريط متحرك */
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
.animate-marquee {
  animation: marquee 45s linear infinite;
}

/* ختم صح/خطأ */
@keyframes stamp-pop {
  0% {
    transform: scale(1.6) rotate(-14deg);
    opacity: 0;
  }
  100% {
    transform: scale(1) rotate(-8deg);
    opacity: 1;
  }
}
.animate-stamp {
  animation: stamp-pop 0.28s ease-out both;
}
