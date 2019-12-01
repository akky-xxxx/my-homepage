const PREF_MAP = {
  "01": "北海道",
  "05": "秋田県",
  "06": "山形県",
  "11": "埼玉県",
  "13": "東京都",
  "14": "神奈川県",
  "17": "石川県",
  "20": "長野県",
  "21": "岐阜県",
  "26": "京都府",
} as const

export type PrefCode = keyof typeof PREF_MAP

export default PREF_MAP
