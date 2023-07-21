import React, { useContext } from 'react'
import styles from '../styles/footer.module.css'
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { dialogContext } from '../page'
export default function Footer() {

  // const addDog = useMutation(api.dogs.addDog);

  // const handleSubmit = async () => {
  //   await addDog({name: "Rosie", score: 0, image: "duhuwhduwdhudwh"});
  // }

  const {setDialogState} = useContext(dialogContext);

  const openDialog = () => {
    setDialogState(true);
  }

  return (
    <footer className={styles.footer}>
        <button onClick={openDialog} className={styles.addBtn}>Add</button>
    </footer>
  )
}
