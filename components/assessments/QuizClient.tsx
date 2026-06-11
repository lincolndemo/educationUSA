'use client'

import { useState } from 'react'
import { Assessment } from '@/lib/types'
import { Button } from '@/components/ui/button'
import { CheckCircle, XCircle, RotateCcw } from 'lucide-react'
import Link from 'next/link'

interface Props {
  assessment: Assessment
}

export default function QuizClient({ assessment }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [answers, setAnswers] = useState<(number | null)[]>(Array(assessment.questions.length).fill(null))
  const [submitted, setSubmitted] = useState(false)

  const question = assessment.questions[currentIndex]
  const isLast = currentIndex === assessment.questions.length - 1

  function handleSelect(optionIndex: number) {
    if (selectedIndex !== null) return // already answered
    setSelectedIndex(optionIndex)
    const newAnswers = [...answers]
    newAnswers[currentIndex] = optionIndex
    setAnswers(newAnswers)
  }

  function handleNext() {
    if (isLast) {
      setSubmitted(true)
    } else {
      setCurrentIndex((prev) => prev + 1)
      setSelectedIndex(null)
    }
  }

  function handleReset() {
    setCurrentIndex(0)
    setSelectedIndex(null)
    setAnswers(Array(assessment.questions.length).fill(null))
    setSubmitted(false)
  }

  if (submitted) {
    const score = answers.filter((a, i) => a === assessment.questions[i].correctIndex).length
    const pct = Math.round((score / assessment.questions.length) * 100)
    const passed = score >= 7

    return (
      <div className="py-12 px-4">
        <div className="container max-w-3xl mx-auto">
          {/* Score Banner */}
          <div className={`rounded-2xl p-8 text-center mb-8 ${passed ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <div className="flex justify-center mb-4">
              {passed
                ? <CheckCircle className="w-14 h-14 text-brand-green" />
                : <XCircle className="w-14 h-14 text-brand-red" />}
            </div>
            <p className="text-5xl font-bold text-gray-900 mb-1">{score} / {assessment.questions.length}</p>
            <p className="text-2xl font-semibold text-gray-600 mb-3">{pct}%</p>
            <p className={`text-lg font-medium ${passed ? 'text-brand-green' : 'text-brand-red'}`}>
              {passed ? 'Excellent work! You passed.' : 'Keep studying. Try again.'}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button
              variant="outline"
              className="border-brand-blue text-brand-blue hover:bg-blue-50"
              onClick={handleReset}
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
            <Button
              className="bg-brand-blue hover:bg-blue-700 text-white"
              render={<Link href="/assessments" />}
            >
              All Assessments
            </Button>
          </div>

          {/* Review */}
          <h2 className="text-xl font-bold text-gray-900 mb-5">Question Review</h2>
          <div className="space-y-4">
            {assessment.questions.map((q, qi) => {
              const userAnswer = answers[qi]
              const correct = q.correctIndex
              const wasCorrect = userAnswer === correct
              return (
                <div key={q.id} className="border rounded-xl p-5">
                  <p className="text-sm font-semibold text-gray-800 mb-3">{qi + 1}. {q.question}</p>
                  <div className="space-y-2">
                    {q.options.map((opt, oi) => {
                      let cls = 'p-2 rounded-lg text-sm border '
                      if (oi === correct) cls += 'bg-green-50 border-green-400 text-green-800 font-medium'
                      else if (oi === userAnswer && !wasCorrect) cls += 'bg-red-50 border-red-300 text-red-700'
                      else cls += 'bg-gray-50 border-gray-200 text-gray-600'
                      return (
                        <div key={oi} className={cls}>
                          {oi === correct && <span className="mr-1">✓</span>}
                          {oi === userAnswer && !wasCorrect && <span className="mr-1">✗</span>}
                          {opt}
                        </div>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-12 px-4">
      <div className="container max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <p className="text-sm text-brand-blue font-medium mb-1">{assessment.title}</p>
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Question {currentIndex + 1} of {assessment.questions.length}</h1>
            <span className="text-sm text-gray-500">{Math.round(((currentIndex) / assessment.questions.length) * 100)}% complete</span>
          </div>
          {/* Progress bar */}
          <div className="mt-3 h-2 bg-gray-200 rounded-full">
            <div
              className="h-2 bg-brand-blue rounded-full transition-all"
              style={{ width: `${((currentIndex) / assessment.questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <p className="text-lg font-semibold text-gray-900 leading-relaxed">{question.question}</p>
        </div>

        {/* Options */}
        <div className="space-y-3 mb-6">
          {question.options.map((option, oi) => {
            let cls = 'w-full text-left p-4 rounded-xl border-2 text-sm font-medium transition-colors '
            if (selectedIndex === null) {
              cls += 'border-gray-200 hover:border-brand-blue hover:bg-blue-50 cursor-pointer bg-white text-gray-800'
            } else if (oi === question.correctIndex) {
              cls += 'border-green-500 bg-green-100 text-green-800'
            } else if (oi === selectedIndex) {
              cls += 'border-red-500 bg-red-100 text-red-800'
            } else {
              cls += 'border-gray-200 bg-gray-50 text-gray-400 cursor-not-allowed'
            }
            return (
              <button
                key={oi}
                className={cls}
                onClick={() => handleSelect(oi)}
                disabled={selectedIndex !== null}
              >
                <span className="inline-flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold shrink-0">
                    {String.fromCharCode(65 + oi)}
                  </span>
                  {option}
                </span>
              </button>
            )
          })}
        </div>

        {/* Next button */}
        {selectedIndex !== null && (
          <Button
            className="w-full bg-brand-blue hover:bg-blue-700 text-white"
            onClick={handleNext}
          >
            {isLast ? 'Finish Quiz' : 'Next Question →'}
          </Button>
        )}
      </div>
    </div>
  )
}
