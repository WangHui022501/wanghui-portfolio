'use client'

import { useLang, pick } from '@/lib/i18n'

export default function Footer() {
  const { lang } = useLang()
  return (
    <footer className="border-t border-border mt-28">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-muted">
        <span className="tracking-wide">
          © {new Date().getFullYear()} {pick(lang, 'Wang Hui', '王慧')} · {pick(lang, 'All rights reserved', '版权所有')}
        </span>
        <div className="flex gap-6">
          <a href="mailto:1262259048@qq.com" className="hover:text-wisteria transition-colors">
            {pick(lang, 'Email', '邮箱')}
          </a>
          <a href="https://github.com/WangHui022501" target="_blank" rel="noopener noreferrer" className="hover:text-wisteria transition-colors">
            GitHub
          </a>
          <a href="https://xhslink.com/m/1OVIVzhF6kq" target="_blank" rel="noopener noreferrer" className="hover:text-wisteria transition-colors">
            {pick(lang, 'Rednote', '小红书')}
          </a>
        </div>
      </div>
    </footer>
  )
}
