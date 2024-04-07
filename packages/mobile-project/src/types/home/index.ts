interface TagText {
  text: string
  color: string
  border: any
  tips: any
  background: Background
}

interface Background {
  color: string
  image: any
  gradientColor: any
}

export interface HotSuggest {
  tagText: TagText
  tagDesc: any
  tagCode: number
  tagLink: string
  aloneLine: boolean
  childTags: any
  checkBubble: boolean
}

export type HotSuggests = HotSuggest[]
