import { getAddressBookList, getDefaultAddress } from '@/api'
import { defineStore } from 'pinia'

export const useAddressBookStore = defineStore('addressBook', {
  state: (): any => ({
    addressBookList: [],
    // addressInfo: {},
    addressDefaultInfo: {},
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
    async fetchDefaultAddress() {
      const res = await getDefaultAddress()
      this.addressDefaultInfo = res.data
    },
  },
})
