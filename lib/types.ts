export type LessonCategory =
  | 'us-higher-education'
  | 'admissions-prep'
  | 'scholarships'
  | 'visa-preparation'
  | 'ai-technologies'

export interface Lesson {
  id: string
  slug: string
  title: string
  category: LessonCategory
  duration: string
  videoUrl: string
  summary: string
  keyTakeaways: string[]
  pdfLabel: string
  pdfFile: string
}

export interface QuizQuestion {
  id: string
  question: string
  options: string[]
  correctIndex: number
}

export interface Assessment {
  id: string
  slug: string
  title: string
  category: string
  questions: QuizQuestion[]
}

export type ResourceCategory = 'admissions' | 'scholarships' | 'visa' | 'career'

export interface Resource {
  id: string
  title: string
  category: ResourceCategory
  description: string
  pdfFile: string
}

export interface Testimonial {
  id: string
  name: string
  state: string
  university: string
  quote: string
  cohort: string
}

export type ApplicationStatus = 'Completed' | 'In Progress' | 'Pending'

export interface Scholar {
  name: string
  cohort: string
  state: string
  school: string
  intendedMajor: string
  intendedDegree: string
  careerGoal: string
  progress: { topic: string; percent: number }[]
  applicationStatus: { step: string; status: ApplicationStatus }[]
  upcomingActivities: { title: string; date: string; type: string }[]
}
