import resources from '@/data/resources.json'
import { Resource, ResourceCategory } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Download } from 'lucide-react'

const data = resources as Resource[]

const categories: { key: ResourceCategory; label: string; color: string; badgeClass: string }[] = [
  { key: 'admissions', label: 'Admissions Guides', color: 'border-t-brand-blue', badgeClass: 'bg-blue-100 text-brand-blue' },
  { key: 'scholarships', label: 'Scholarship Guides', color: 'border-t-brand-red', badgeClass: 'bg-red-100 text-brand-red' },
  { key: 'visa', label: 'Visa Resources', color: 'border-t-brand-green', badgeClass: 'bg-green-100 text-brand-green' },
  { key: 'career', label: 'Career Resources', color: 'border-t-brand-blue', badgeClass: 'bg-blue-100 text-brand-blue' },
]

export default function ResourcesPage() {
  return (
    <div className="py-12 px-4">
      <div className="container max-w-5xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Resources</h1>
          <p className="text-gray-500 max-w-xl mx-auto">Download guides, checklists, and workbooks to support your U.S. university journey.</p>
        </div>

        <div className="space-y-12">
          {categories.map((cat) => {
            const items = data.filter((r) => r.category === cat.key)
            return (
              <div key={cat.key}>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-1 h-6 rounded-full bg-brand-blue" />
                  <h2 className="text-xl font-bold text-gray-800">{cat.label}</h2>
                  <Badge className={cat.badgeClass}>{items.length} guides</Badge>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {items.map((resource) => (
                    <Card key={resource.id} className={`border-t-4 ${cat.color} hover:shadow-md transition-shadow`}>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-semibold text-gray-800">{resource.title}</CardTitle>
                        <CardDescription className="text-xs">{resource.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Button
                          variant="outline"
                          className="w-full border-brand-blue text-brand-blue hover:bg-blue-50"
                          render={<a href={`/pdfs/${resource.pdfFile}`} download target="_blank" rel="noopener noreferrer" />}
                        >
                          <Download className="w-3.5 h-3.5 mr-1.5" />
                          Download PDF
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
