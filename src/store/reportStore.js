import { defineStore } from 'pinia'

export const useReportStore = defineStore('report', {
  state: () => ({
    basicInfo: {
      title: '',
      type: '',
      status: '',
      date: ''
    },
    actionDetails: [],
    checklist: [],
    customerInfo: {
      name: '',
      nationalId: '',
      email: '',
      phone: '',
      address: ''
    },
    companyInfo: {
      name: '',
      address: ''
    },
    engineerInfo: {
      name: '',
      nationalId: ''
    },
    spareParts: [],
    rating: 0,
    signatures: {
      customer: null,
      engineer: null
    }
  }),

  getters: {
    isComplete: (state) => {
      return (
        state.basicInfo.title &&
        state.basicInfo.type &&
        state.basicInfo.status &&
        state.customerInfo.name &&
        state.engineerInfo.name
      )
    },
    checklistCount: (state) => state.checklist.length,
    hasCustomerSigned: (state) => !!state.signatures.customer,
    hasEngineerSigned: (state) => !!state.signatures.engineer,
    actionDetailsCount: (state) => state.actionDetails.length
  },

  actions: {
    updateBasicInfo(info) {
      this.basicInfo = { ...this.basicInfo, ...info }
    },
    updateCustomerInfo(info) {
      this.customerInfo = { ...this.customerInfo, ...info }
    },
    updateCompanyInfo(info) {
      this.companyInfo = { ...this.companyInfo, ...info }
    },
    updateEngineerInfo(info) {
      this.engineerInfo = { ...this.engineerInfo, ...info }
    },


    addChecklistItem(item) {
      this.checklist.push(item)
    },
    removeChecklistItem(index) {
      this.checklist.splice(index, 1)
    },


    addSparePart(part) {
      this.spareParts.push(part)
    },
    removeSparePart(index) {
      this.spareParts.splice(index, 1)
    },


    addActionDetail(detail) {
      this.actionDetails.push(detail)
    },
    updateActionDetail(index, detail) {
      this.actionDetails[index] = { ...this.actionDetails[index], ...detail }
    },
    removeActionDetail(index) {
      this.actionDetails.splice(index, 1)
    },


    setRating(value) {
      this.rating = value
    },
    setSignature(type, signature) {
      if (type === 'customer' || type === 'engineer') {
        this.signatures[type] = signature
      }
    },

    resetReport() {
      this.$reset()
    }
  }
})
