import { addAddress, getAddressBookList } from '@/api'
import { defineStore } from 'pinia'

export const useAddressBookStore = defineStore('addressBook', {
  state: (): any => ({
    addressBookList: [],
    // addressInfo: {},
  }),
  actions: {
    async fetchAddressBookList() {
      const res = await getAddressBookList()
      this.addressBookList = res.data
    },
    // async fetchAddAddress(data: any) {
    //   const res = await addAddress(data)
    //   this.addressInfo = res.data
    // },
  },
})
