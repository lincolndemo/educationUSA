import { PDFDocument, StandardFonts, rgb } from 'pdf-lib'
import { writeFileSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputDir = join(__dirname, '..', 'public', 'pdfs')
mkdirSync(outputDir, { recursive: true })

const pdfs = [
  { file: 'us-admissions-handbook.pdf', title: 'U.S. Admissions Handbook', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'university-search-guide.pdf', title: 'University Search Guide', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'finding-scholarships.pdf', title: 'Finding Scholarships for International Students', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'financial-aid-strategies.pdf', title: 'Financial Aid Strategies', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'student-visa-guide.pdf', title: 'Student Visa Guide', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'pre-departure-checklist.pdf', title: 'Pre-Departure Checklist', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'ai-career-pathways.pdf', title: 'AI Career Pathways', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'emerging-technologies-guide.pdf', title: 'Emerging Technologies Guide', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'personal-statement-workbook.pdf', title: 'Personal Statement Workbook', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
  { file: 'academic-profile-builder.pdf', title: 'Academic Profile Builder', subtitle: 'EducationUSA Scholars Initiative — Demo Document' },
]

for (const { file, title, subtitle } of pdfs) {
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([612, 792])
  const font = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const bodyFont = await pdfDoc.embedFont(StandardFonts.Helvetica)

  // Blue header bar
  page.drawRectangle({ x: 0, y: 742, width: 612, height: 50, color: rgb(0.102, 0.337, 0.859) })

  // Title
  page.drawText(title, { x: 50, y: 700, size: 20, font, color: rgb(0.067, 0.067, 0.067) })

  // Subtitle
  page.drawText(subtitle, { x: 50, y: 672, size: 12, font: bodyFont, color: rgb(0.4, 0.4, 0.4) })

  // Divider
  page.drawLine({ start: { x: 50, y: 660 }, end: { x: 562, y: 660 }, thickness: 1, color: rgb(0.8, 0.8, 0.8) })

  // Body copy
  page.drawText('This is a demonstration document for the National AI and', { x: 50, y: 630, size: 11, font: bodyFont, color: rgb(0.2, 0.2, 0.2) })
  page.drawText('Emerging Technologies Scholars Initiative grant assessment.', { x: 50, y: 612, size: 11, font: bodyFont, color: rgb(0.2, 0.2, 0.2) })
  page.drawText('Full content will be available in the live programme platform.', { x: 50, y: 594, size: 11, font: bodyFont, color: rgb(0.2, 0.2, 0.2) })

  // Footer
  page.drawText('EducationUSA Nigeria  |  educationusa.state.gov', { x: 50, y: 50, size: 10, font: bodyFont, color: rgb(0.5, 0.5, 0.5) })

  const bytes = await pdfDoc.save()
  writeFileSync(join(outputDir, file), bytes)
  console.log(`Created: ${file}`)
}

console.log('Done — 10 stub PDFs created in public/pdfs/')
