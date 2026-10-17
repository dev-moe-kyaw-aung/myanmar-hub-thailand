import type { Metadata } from "next";
import "./globals.css";
import { I18nProvider } from "@/lib/i18n";
import { StoreProvider } from "@/lib/store";

export const metadata: Metadata = {
  title: "Myanmar Hub Thailand — Golden Journey · Safe Harbor · Business Circle",
  description:
    "ထိုင်းရောက် မြန်မာများအတွက် ပြည့်စုံသော super-app — ဘဝလမ်းညွှန်၊ ဘေးကင်းကာကွယ်ရေး၊ စီးပွားရေးစီမံခန့်ခွဲမှု။",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="my">
      <body>
        <I18nProvider>
          <StoreProvider>{children}</StoreProvider>
        </I18nProvider>
      </body>
    </html>
  );
}
