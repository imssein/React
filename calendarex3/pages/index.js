import Head from 'next/head'
import Image from 'next/image'
import Calendar from '../components/Calendar'
import DietData from '../components/DietData'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
   <div>
      달력연습 
      <Calendar />
      <DietData />
   </div>
  )
}
