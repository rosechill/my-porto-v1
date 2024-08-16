'use client'

import React, { useState } from 'react'
import * as yup from 'yup'
import { Resolver, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Button, Input, Textarea } from '@nextui-org/react'
import { FormContact } from '../app/definition'
import toast, { Toaster } from 'react-hot-toast'

const schema = yup.object({
  name: yup.string().required('Nama harus diisi').min(3, 'Masukkan Nama yang valid'),
  phoneNumber: yup.string().required('Nomor telephone harus diisi').min(10, 'Masukkan nomor telephone yang valid'),
  email: yup.string().email().required('Email harus diisi').min(8, 'Masukkan Email yang valid'),
  subject: yup.string().required('Subject harus diisi').min(5, 'Masukkan Subject yang valid'),
  message: yup.string().required('Pesan harus diisi').min(5, 'Masukkan Pesan yang valid'),
})

export default function ContactHeaderSection() {
  const [loading, setLoading] = useState(false)
  const notify = () => toast.success('Berhasil mengirimkan formulir')

  const form = useForm<FormContact>({
    defaultValues: {
      name: '',
      phoneNumber: '',
      email: '',
      subject: '',
      message: '',
    },
    resolver: yupResolver(schema) as Resolver<FormContact>,
    mode: 'onChange',
  })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = form

  const buttonColor = isValid ? 'bg-red-700 text-white cursor-pointer' : 'bg-gray-200 text-black cursor-not-allowed'

  const onSubmitted = async (data: FormContact) => {
    const body = {
      name: data.name,
      phoneNumber: data.phoneNumber,
      email: data.email,
      subject: data.subject,
      message: data.message,
    }

    try {
      setLoading(true)
      await sendContactForm(body)
    } catch (error) {
      throw error
    } finally {
      setTimeout(() => {
        setLoading(false)
        reset()
        notify()
      }, 3000)
    }
  }

  const sendContactForm = async (data: FormContact) =>
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    }).then(async res => {
      if (!res.ok) throw new Error('Failed to send message')
      const responseData = await res.json()
      return responseData
    })

  return (
    <section className="lg:py-16 py-8 bg-[#F5F5F5] space-y-4 " id="section4">
      <div className="w-full pt-5 lg:pb-10 pb-5 flex gap-4 justify-center items-center text-center">
        <div className="w-3/12 lg:h-[4px] h-[2px] bg-red-700"></div>
        <h2 className="sertif-transition lg:text-5xl text-xl text-red-500 z-10">Let's get in touch</h2>
        <div className="w-3/12 lg:h-[4px] h-[2px] bg-red-700"></div>
      </div>
      {/* Form */}
      <form onSubmit={handleSubmit(onSubmitted)} className="flex flex-col gap-2 lg:w-2/4 w-full lg:px-0 px-4 m-0-auto">
        <div className="flex flex-col gap-2">
          <Input {...register('name')} label="Nama Lengkap" variant="bordered" className="border-[#2E3E78]" />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">{errors.name?.message}</p>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-2">
            <Input
              {...register('phoneNumber')}
              label="Nomor Telephone"
              variant="bordered"
              className="border-[#2E3E78]"
            />
            <p className="ms-3 text-xs text-red-500 min-h-[20px]">{errors.phoneNumber?.message}</p>
          </div>
          <div className="flex flex-col gap-2">
            <Input {...register('email')} label="Email" variant="bordered" className="border-[#2E3E78]" />
            <p className="ms-3 text-xs text-red-500 min-h-[20px]">{errors.email?.message}</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <Input {...register('subject')} label="Subject" variant="bordered" className="border-[#2E3E78]" />
          <p className="ms-3 text-xs text-red-500 min-h-[20px] ">{errors.subject?.message}</p>
        </div>
        <div className="flex flex-col gap-2">
          <Textarea
            {...register('message')}
            label="Masukkan pesan anda"
            variant="bordered"
            className="border-[#2E3E78]"
          />
          <p className="ms-3 text-xs text-red-500 min-h-[20px]">{errors.message?.message}</p>
        </div>

        <Button className={`${buttonColor} w-2/4 m-0-auto `} type="submit" disabled={!isValid} isLoading={loading}>
          Submit
        </Button>
      </form>

      <Toaster />
    </section>
  )
}
