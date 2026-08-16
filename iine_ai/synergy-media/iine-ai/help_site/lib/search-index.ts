import { allArticles, plain } from './content';
import type { Block } from '@/content/types';

export type SearchDoc = {
  title: string;
  href: string;
  cat: string;
  desc: string;
  keywords: string;
  body: string;
};

function flatten(blocks: Block[]) {
  const parts: string[] = [];
  for (const b of blocks) {
    switch (b.t) {
      case 'h2':
      case 'h3':
      case 'p':
        parts.push(b.text);
        break;
      case 'ul':
      case 'ol':
        parts.push(b.items.join(' '));
        break;
      case 'steps':
        parts.push(b.items.map((s) => `${s.title} ${[s.body].flat().join(' ')}`).join(' '));
        break;
      case 'note':
        parts.push(`${b.title ?? ''} ${[b.body].flat().join(' ')}`);
        break;
      case 'table':
        parts.push(`${b.head.join(' ')} ${b.rows.flat().join(' ')}`);
        break;
      case 'faq':
        parts.push(b.items.map((f) => `${f.q} ${[f.a].flat().join(' ')}`).join(' '));
        break;
      case 'mini':
        parts.push(b.items.map((m) => `${m.title} ${m.body}`).join(' '));
        break;
      default:
        break;
    }
  }
  return plain(parts.join(' ')).replace(/\s+/g, ' ').slice(0, 1200);
}

export const searchIndex: SearchDoc[] = allArticles.map((a) => ({
  title: a.title,
  href: a.href,
  cat: a.category.title,
  desc: a.desc,
  keywords: (a.keywords ?? []).join(' '),
  body: flatten(a.blocks),
}));

/** ひらがな/カタカナ・大小・全半角を吸収してゆるく当てる */
export function normalize(s: string) {
  return s
    .toLowerCase()
    .replace(/[Ａ-Ｚａ-ｚ０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[ァ-ヴ]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0x60))
    .replace(/[\s　]+/g, '');
}

/** 全語 AND。当たった場所で重み付けする */
export function search(query: string, limit = 30): SearchDoc[] {
  const terms = query.trim().split(/[\s　]+/).filter(Boolean).map(normalize);
  if (!terms.length) return [];
  const scored: { doc: SearchDoc; score: number }[] = [];

  for (const doc of searchIndex) {
    const title = normalize(doc.title);
    const keywords = normalize(doc.keywords);
    const body = normalize(doc.desc + doc.body);
    let score = 0;
    let matchedAll = true;

    for (const term of terms) {
      if (title.startsWith(term)) score += 100;
      else if (title.includes(term)) score += 60;
      else if (keywords.includes(term)) score += 30;
      else if (body.includes(term)) score += 10;
      else {
        matchedAll = false;
        break;
      }
    }
    if (matchedAll) scored.push({ doc, score });
  }

  return scored.sort((a, b) => b.score - a.score).slice(0, limit).map((s) => s.doc);
}

/** 一致箇所の周辺を切り出す */
export function snippet(doc: SearchDoc, query: string) {
  const terms = query.trim().split(/[\s　]+/).filter(Boolean);
  const source = doc.body || doc.desc;
  for (const term of terms) {
    const at = normalize(source).indexOf(normalize(term));
    if (at >= 0) {
      const from = Math.max(0, at - 20);
      return (from > 0 ? '…' : '') + source.slice(from, from + 78) + '…';
    }
  }
  return doc.desc;
}
