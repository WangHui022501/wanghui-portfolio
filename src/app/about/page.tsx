'use client'

import Link from 'next/link'
import { useLang, pick } from '@/lib/i18n'

const disciplines = [
  { label: 'Architecture', zh: '建筑', href: '/architecture' },
  { label: 'Maps', zh: '地图', href: '/maps' },
  { label: 'Drawing', zh: '绘画', href: '/drawing' },
  { label: 'Photography', zh: '摄影', href: '/photography' },
  { label: 'Vibecoding', zh: '编程', href: '/vibecoding' },
]

export default function AboutPage() {
  const { lang } = useLang()

  return (
    <div className="max-w-6xl mx-auto px-6 py-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        {/* Bio */}
        <div className="reveal">
          <p className="text-xs tracking-widest text-muted uppercase mb-4">
            {pick(lang, 'About', '关于')}
          </p>
          <h1 className="font-serif text-4xl md:text-5xl font-light tracking-tight mb-8 leading-tight">
            {pick(lang, 'Wang Hui', '王慧')}
            <br />
            <span className="text-periwinkle">{pick(lang, '王慧', 'Wang Hui')}</span>
          </h1>

          <div className="space-y-4 text-[15px] leading-relaxed text-muted max-w-md">
            <p>
              {pick(
                lang,
                'I am a designer and creative practitioner working across drawing, architecture, photography, cartography, and creative code.',
                '我是一名设计师与创作者，工作横跨绘画、建筑、摄影、地图与创意编程。'
              )}
            </p>
            <p>
              {pick(
                lang,
                'My work is connected by an interest in how we perceive and represent space — from a single line on paper to a city’s growth over decades.',
                '我的作品由一条共同的线索贯穿：我们如何感知与再现空间——从纸上的一根线条，到一座城市数十年的生长。'
              )}
            </p>
            <p>{pick(lang, 'Based in China. Open to collaboration.', '现居中国，欢迎合作。')}</p>
          </div>

          {/* Contact */}
          <div className="mt-10 pt-8 border-t border-border">
            <p className="text-xs tracking-widest text-muted uppercase mb-4">
              {pick(lang, 'Contact', '联系')}
            </p>
            <div className="flex flex-col items-start gap-2 text-[15px]">
              <a href="mailto:1262259048@qq.com" className="hover:text-wisteria transition-colors">
                1262259048@qq.com
              </a>
              <a href="mailto:whui2516@gmail.com" className="hover:text-wisteria transition-colors">
                whui2516@gmail.com
              </a>
            </div>
            <div className="flex gap-5 mt-4">
              <a href="https://github.com/WangHui022501" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-wisteria transition-colors">
                GitHub
              </a>
              <a href="https://xhslink.com/m/1OVIVzhF6kq" target="_blank" rel="noopener noreferrer" className="text-xs text-muted hover:text-wisteria transition-colors">
                {pick(lang, 'Rednote', '小红书')}
              </a>
            </div>
          </div>
        </div>

        {/* Disciplines index */}
        <div className="reveal" style={{ animationDelay: '120ms' }}>
          <p className="text-xs tracking-widest text-muted uppercase mb-4">{pick(lang, 'Work', '作品')}</p>
          <ul>
            {disciplines.map((d) => (
              <li key={d.href} className="border-b border-border">
                <Link href={d.href} className="flex items-center justify-between py-4 group">
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-xl font-light group-hover:text-wisteria transition-colors">
                      {pick(lang, d.label, d.zh)}
                    </span>
                    <span className="text-sm text-muted">{pick(lang, d.zh, d.label)}</span>
                  </div>
                  <span className="text-muted group-hover:text-wisteria group-hover:translate-x-1 transition-all text-sm">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {/* CV download */}
          <div className="mt-8 pt-8 border-t border-border">
            <a
              href="/cv.pdf"
              className="inline-flex items-center gap-2 text-xs tracking-widest uppercase border border-ink px-5 py-2.5 hover:bg-ink hover:text-paper transition-colors"
            >
              {pick(lang, 'Download CV', '下载简历')} ↓
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
