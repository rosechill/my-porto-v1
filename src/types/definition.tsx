import { Dispatch, SetStateAction } from 'react'

export interface FormContact {
  name: string
  phoneNumber: string
  email: string
  subject: string
  message: string
}

export type BlurredModalProps = {
  selectedImage: string | null
  setImage: Dispatch<SetStateAction<string | null>>
}
