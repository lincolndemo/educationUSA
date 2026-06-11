import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type LessonProgressStatus = 'not-started' | 'in-progress' | 'completed'

interface ProgressStore {
  lessonProgress: Record<string, LessonProgressStatus>
  quizScores: Record<string, number>
  setLessonProgress: (slug: string, status: LessonProgressStatus) => void
  setQuizScore: (slug: string, score: number) => void
  getLessonProgress: (slug: string) => LessonProgressStatus
}

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      lessonProgress: {},
      quizScores: {},
      setLessonProgress: (slug, status) =>
        set((state) => ({
          lessonProgress: { ...state.lessonProgress, [slug]: status },
        })),
      setQuizScore: (slug, score) =>
        set((state) => ({
          quizScores: { ...state.quizScores, [slug]: score },
        })),
      getLessonProgress: (slug) =>
        get().lessonProgress[slug] ?? 'not-started',
    }),
    { name: 'scholar-progress' }
  )
)
