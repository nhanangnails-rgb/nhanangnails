import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const locales = ["vi", "en"];
const defaultLocale = "vi";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bỏ qua các file tĩnh, ảnh, api, v.v.
  if (
    pathname.includes("/images/") ||
    pathname.includes("/_next/") ||
    pathname.includes("/favicon.ico") ||
    pathname.startsWith("/api")
  ) {
    return;
  }

  // Kiểm tra xem URL đã có locale chưa
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // Nếu chưa có locale, điều hướng thẳng về /vi
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // Bỏ qua tất cả các đường dẫn nội bộ và file public
    '/((?!_next/static|_next/image|favicon.ico|images).*)',
  ],
};
