'use client'

import { useEffect } from 'react'
import { CheckCircle2, BookOpen, Circle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useProgressStore } from '@/lib/store'

interface Props {
  slug: string
}

const statusConfig = {
  'not-started': { icon: Circle, label: 'Not Started', className: 'text-gray-400' },
  'in-progress': { icon: BookOpen, label: 'In Progress', className: 'text-brand-blue' },
  completed: { icon: CheckCircle2, label: 'Completed', className: 'text-brand-green' },
}

export default function LessonProgressTracker({ slug }: Props) {
  const { getLessonProgress, setLessonProgress } = useProgressStore()
  const status = getLessonProgress(slug)
  const { icon: Icon, label, className } = statusConfig[status]

  useEffect(() => {
    if (status === 'not-started') {
      setLessonProgress(slug, 'in-progress')
    }
  }, [slug, status, setLessonProgress])

  return (
    <div className="flex items-center gap-3">
      <span className={`flex items-center gap-1.5 text-sm font-medium ${className}`}>
        <Icon className="w-4 h-4" />
        {label}
      </span>
      {status !== 'completed' && (
        <Button
          size="sm"
          className="bg-brand-green hover:bg-green-700 text-white text-xs"
          onClick={() => setLessonProgress(slug, 'completed')}
        >
          <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />
          Mark Complete
        </Button>
      )}
    </div>
  )
}
