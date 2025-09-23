import { Link } from "@remix-run/react";

type FooterLink = {
  name: string;
  href: string;
  external?: boolean;
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks: Record<string, FooterLink[]> = {
    블로그: [
      { name: "최신 포스트", href: "/blog" },
      { name: "인기 포스트", href: "/blog/popular" },
      { name: "태그", href: "/tags" },
    ],
    정보: [
      { name: "소개", href: "/about" },
      { name: "연락처", href: "/contact" },
      { name: "개인정보처리방침", href: "/privacy" },
    ],
    소셜: [
      { name: "GitHub", href: "https://github.com", external: true },
      { name: "Twitter", href: "https://twitter.com", external: true },
      { name: "LinkedIn", href: "https://linkedin.com", external: true },
    ],
  };

  return (
    <footer className="bg-secondary-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* 브랜드 섹션 */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">D</span>
              </div>
              <span className="text-xl font-bold">Dairium</span>
            </Link>
            <p className="text-secondary-300 text-sm leading-relaxed">
              현대적이고 눈이 편안한 블로그 플랫폼입니다. Remix와 Supabase로
              구축되었습니다.
            </p>
          </div>

          {/* 링크 섹션들 */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 text-white">
                {category}
              </h3>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-secondary-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 하단 구분선 */}
        <div className="border-t border-secondary-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-secondary-400 text-sm">
              © {currentYear} Dairium Blog. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
