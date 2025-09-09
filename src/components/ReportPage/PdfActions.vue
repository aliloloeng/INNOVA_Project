<template>
  <div class="mt-4 p-4 rounded-lg w-[90%] flex flex-col items-center gap-3">
    <h2 class="font-bold text-lg text-gray-700 mb-2">{{ $t('pdf_actions.title') }}</h2>

    <button
      @click="downloadPdf"
      class="py-2 bg-green-700 text-white rounded hover:bg-green-600 w-full"
    >
      {{ $t('pdf_actions.download_button') }}
    </button>

    <button
      @click="sendPdfEmail"
      class="py-2 bg-blue-700 text-white rounded hover:bg-blue-600 w-full"
    >
      {{ $t('pdf_actions.send_email_button') }}
    </button>
  </div>
</template>

<script setup>
import jsPDF from 'jspdf'

const props = defineProps({
  reportData: {
    type: Array,
    required: true
  }
})

function generatePdf() {
  const doc = new jsPDF()
  doc.setFontSize(14)
  doc.text("Bericht Details", 10, 10)

  props.reportData.forEach((action, index) => {
    const y = 20 + index * 30
    doc.text(`${index + 1}. Tag: ${action.dayOfWeek || '-'}`, 10, y)
    doc.text(`Artikel: ${action.remark || '-'}`, 10, y + 6)
    doc.text(`Stunden: ${action.hour || '-'}`, 10, y + 12)
    doc.text(`Von: ${action.startHour || '-'} Bis: ${action.endHour || '-'}`, 10, y + 18)
    doc.text(`Status: ${action.status || '-'}`, 10, y + 24)
  })

  return doc
}

function downloadPdf() {
  const doc = generatePdf()
  doc.save('report.pdf') // این فایل را مستقیم روی سیستم دانلود می‌کند
}

function sendPdfEmail() {
  const doc = generatePdf()
  const pdfBlob = doc.output('blob')

  const fileReader = new FileReader()
  fileReader.onload = function () {
    const base64 = fileReader.result.split(',')[1]
    console.log('PDF Base64:', base64) // این base64 آماده ارسال ایمیل است
  }
  fileReader.readAsDataURL(pdfBlob)
}
</script>
