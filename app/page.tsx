import { Button } from "@/components/ui/button"; // Example of Shadcn UI component
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start p-4 font-IRANSans max-w-[1536px] mx-auto">
      <h1 className="text-2xl font-bold text-center mb-6">
        به پروژه Next.js با کامپوننت‌های Shadcn UI خوش آمدید!
      </h1>
      <p className="text-md text-center mb-4 max-w-2xl">
        این پروژه یک اپلیکیشن Next.js است که با استفاده از ابزارهای مدرن و
        کامپوننت‌های رابط کاربری شادسی‌ان (Shadcn/ui) ساخته شده است تا توسعه وب
        را سریع‌تر و مدیریت آن را ساده‌تر کند. همچنین، فونت IRANSans در این
        پروژه به کار گرفته شده است.
      </p>

      <section className="text-base max-w-3xl mb-8">
        <h2 className="text-md font-extrabold text-center mb-4">
          ساختار پروژه
        </h2>
        <p className="mb-4">
          پروژه از دو دایرکتوری اصلی به نام‌های <code>app</code> و{" "}
          <code>components</code> تشکیل شده است. فایل‌های پیکربندی مهمی مانند{" "}
          <code>next.config.mjs</code> برای تنظیمات Next.js و{" "}
          <code>tailwind.config.ts</code> برای پیکربندی Tailwind CSS در ریشه
          پروژه قرار دارند.
        </p>
      </section>

      <section className="text-base max-w-3xl mb-8">
        <h2 className="text-md font-extrabold text-center mb-4">
          وابستگی‌های کلیدی
        </h2>
        <p className="mb-4">
          این پروژه شامل کتابخانه‌ها و ابزارهای کلیدی زیر است:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <code>@radix-ui/react-*</code>: مجموعه‌ای از کامپوننت‌های React برای
            ساخت رابط‌های کاربری قابل تنظیم و در دسترس.
          </li>
          <li>
            <code>react-hook-form</code>: کتابخانه‌ای برای مدیریت فرم‌ها و
            اعتبارسنجی در React.
          </li>
          <li>
            <code>tailwindcss</code>: فریمورکی مبتنی بر CSS برای ساخت سریع و
            مدرن رابط‌های کاربری.
          </li>
          <li>
            <code>@tanstack/react-query</code>: ابزار قوی برای همگام‌سازی و کش
            داده‌ها در React.
          </li>
          <li>
            <code>typescript</code>: زبان تایپ شده‌ای که به JavaScript کامپایل
            می‌شود.
          </li>
        </ul>
      </section>

      <div className="flex gap-x-3">
        <Button asChild>
          <Link href="/docs">شروع به کار</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="https://nextjs.org/docs">مستندات Next.js</Link>
        </Button>
      </div>
    </main>
  );
}
