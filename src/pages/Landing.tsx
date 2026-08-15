import { useMutation, useQuery } from "convex/react";
import { BookMark, Feather } from "@/components/app/doodles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { api } from "@/convex/_generated/api";
import { useAuth } from "@/hooks/use-auth";
import { cn } from "@/lib/utils";
import {
  BookMarked,
  Brain,
  Clapperboard,
  Library,
  LogOut,
  Network,
  NotebookText,
  Search,
  ShieldCheck,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router";

/** شعار المنصة: مربع حبر + «م» بخط رقعة + نقطة حمراء */
export function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span className="relative flex h-10 w-10 shrink-0 items-center justify-center border-2 border-ink bg-ink shadow-hard-sm">
        <BookMark className="h-6 w-6 text-cream" />
        <span
          aria-hidden="true"
          className="absolute -top-1 -end-1 h-2.5 w-2.5 border border-ink bg-rust"
        />
      </span>
      {!compact && (
        <span className="leading-tight">
          <span className="block font-ruqaa text-lg font-bold text-ink">
            البكالوريا المصرية
          </span>
          <span className="block text-[10px] font-bold tracking-widest text-rust">
            اللغة العربية · الصف الثاني الثانوي
          </span>
        </span>
      )}
    </span>
  );
}

/**
 * هيكل التطبيق بعد تسجيل الدخول: ترويسة عربية RTL + قائمة مستخدم + تذييل.
 */
export function AppShell({
  children,
  active = "home",
}: {
  children: React.ReactNode;
  active?:
    | "home"
    | "library"
    | "mistakes"
    | "curriculum"
    | "refs"
    | "review"
    | "videos"
    | "admin";
}) {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const ensureSeed = useMutation(api.seed.ensureSeed);
  const seededRef = useRef(false);
  const hasUnits = useQuery(api.content.listUnits);

  // بذر البيانات التجريبية مرة واحدة عند أول دخول (آمن للتكرار)
  useEffect(() => {
    if (!seededRef.current && hasUnits && hasUnits.length === 0) {
      seededRef.current = true;
      void ensureSeed();
    }
  }, [hasUnits, ensureSeed]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  const initial =
    user?.name?.trim()?.[0] ?? user?.email?.trim()?.[0] ?? "ط";

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <header className="sticky top-0 z-40 border-b-2 border-ink bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4">
          <Link to="/dashboard" aria-label="الرئيسية">
            <BrandMark />
          </Link>

          <nav className="flex items-center gap-1" aria-label="التنقل الرئيسي">
            <Link
              to="/dashboard"
              className={cn(
                "hidden px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-gold/30 sm:block",
                active === "home" && "bg-gold/40 shadow-hard-sm",
              )}
            >
              الرئيسية
            </Link>
            <Link
              to="/library"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-denim/20",
                active === "library" && "bg-denim/25 shadow-hard-sm",
              )}
            >
              <Search className="size-4" />
              <span className="hidden sm:inline">المكتبة</span>
            </Link>
            <Link
              to="/mistakes"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-rust/20",
                active === "mistakes" && "bg-rust/25 shadow-hard-sm",
              )}
            >
              <NotebookText className="size-4" />
              <span className="hidden md:inline">دفتر الأخطاء</span>
            </Link>
            <Link
              to="/curriculum"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-moss/20",
                active === "curriculum" && "bg-moss/25 shadow-hard-sm",
              )}
            >
              <Network className="size-4" />
              <span className="hidden md:inline">هيكل المنهج</span>
            </Link>
            <Link
              to="/rules"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-gold/30",
                active === "refs" && "bg-gold/40 shadow-hard-sm",
              )}
            >
              <BookMarked className="size-4" />
              <span className="hidden md:inline">المراجع</span>
            </Link>
            <Link
              to="/review"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-moss/20",
                active === "review" && "bg-moss/25 shadow-hard-sm",
              )}
            >
              <Brain className="size-4" />
              <span className="hidden md:inline">المراجعة الذكية</span>
            </Link>
            <Link
              to="/videos"
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-ink transition-colors hover:bg-rust/20",
                active === "videos" && "bg-rust/25 shadow-hard-sm",
              )}
            >
              <Clapperboard className="size-4" />
              <span className="hidden md:inline">الشرح المرئي</span>
            </Link>
            {user?.role === "admin" && (
              <Link
                to="/admin"
                className={cn(
                  "flex items-center gap-1.5 px-3 py-1.5 text-sm font-bold text-gold transition-colors hover:bg-gold/20",
                  active === "admin" && "bg-gold/25 shadow-hard-sm",
                )}
              >
                <ShieldCheck className="size-4" />
                <span className="hidden md:inline">الإدارة</span>
              </Link>
            )}
          </nav>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                type="button"
                className="flex items-center gap-2 border-2 border-ink bg-cream px-2 py-1 shadow-hard-sm transition-transform hover:-translate-y-0.5 focus-visible:outline-none"
              >
                <span className="flex h-7 w-7 items-center justify-center border border-ink bg-ink font-amiri text-sm font-bold text-cream">
                  {initial}
                </span>
                <span className="hidden max-w-28 truncate text-xs font-bold text-ink md:block">
                  {user?.name?.trim() || "طالب"}
                </span>
                <Feather className="hidden h-4 w-4 text-rust sm:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-52 border-2 border-ink shadow-hard-sm">
              <DropdownMenuLabel className="text-ink">
                {user?.name?.trim() || "طالب"}
                {user?.email && (
                  <span className="block text-[11px] font-normal text-muted-foreground">
                    {user.email}
                  </span>
                )}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer text-ink"
              >
                <BookMark className="ms-1 size-4 text-denim" />
                الرئيسية
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/library")}
                className="cursor-pointer text-ink"
              >
                <Library className="ms-1 size-4 text-denim" />
                المكتبة والبحث
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/mistakes")}
                className="cursor-pointer text-ink"
              >
                <NotebookText className="ms-1 size-4 text-rust" />
                دفتر الأخطاء
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/review")}
                className="cursor-pointer text-ink"
              >
                <Brain className="ms-1 size-4 text-moss" />
                المراجعة الذكية
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => navigate("/videos")}
                className="cursor-pointer text-ink"
              >
                <Clapperboard className="ms-1 size-4 text-rust" />
                الشرح المرئي
              </DropdownMenuItem>
              {user?.role === "admin" && (
                <DropdownMenuItem
                  onClick={() => navigate("/admin")}
                  className="cursor-pointer text-ink"
                >
                  <ShieldCheck className="ms-1 size-4 text-gold" />
                  لوحة الإدارة
                </DropdownMenuItem>
              )}
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={handleSignOut}
                className="cursor-pointer text-rust focus:text-rust"
              >
                <LogOut className="ms-1 size-4" />
                تسجيل الخروج
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t-2 border-ink bg-ink text-cream">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-center sm:flex-row sm:items-center sm:justify-between sm:text-start">
          <p className="font-amiri text-base font-bold">
            البكالوريا المصرية · اللغة العربية — الصف الثاني الثانوي
          </p>
          <p className="text-xs text-cream/70">
            اللغةُ العربيةُ تُفهَم، وتُحلَّل، وتُطبَّق، وتُراجَع — ليست للحفظ فقط.
          </p>
        </div>
      </footer>
    </div>
  );
}
