const PREF_MAP = {
  "01": "北海道",
  "05": "秋田県",
  "14": "神奈川県",
} as const

export type PrefCode = keyof typeof PREF_MAP

export default PREF_MAP
