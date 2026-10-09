export type ProjectCategory = 'Full-Stack' | 'Frontend' | 'Quality Assurance'
export type ProjectTheme = 'pickle' | 'apartment' | 'meal' | 'find'
export interface ProjectScreenshot {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
}
export interface Project {
  id: string
  name: string
  title: string
  date: string
  role: string
  description: string
  summary: string
  categories: ProjectCategory[]
  technologies: string[]
  features: string[]
  contributions: string[]
  scopeNote?: string
  theme: ProjectTheme
  featured?: boolean
  githubUrl?: string
  liveUrl?: string
  screenshots: ProjectScreenshot[]
}
export interface Skill {
  name: string
  icon: string
  exposure?: boolean
}
export interface SkillGroup {
  id: string
  title: string
  description: string
  skills: Skill[]
}
