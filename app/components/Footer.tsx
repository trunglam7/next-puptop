import React from 'react'
import styles from '../styles/footer.module.css'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
export default function Footer() {

  const addDog = useMutation(api.dogs.addDog);
  console.log(addDog);

  const handleSubmit = async () => {
    await addDog({name: "Rosie", score: 0, image: "duhuwhduwdhudwh"});
  }

  return (
    <footer className={styles.footer}>
        <button onClick={handleSubmit} className={styles.addBtn}>Add</button>
    </footer>
  )
}
