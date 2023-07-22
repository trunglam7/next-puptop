import React, { use, useContext, useRef, useState } from 'react'
import styles from '../styles/dialog.module.css'
import { dialogContext } from '../page';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';

export default function Dialog() {

  const {dialogState, setDialogState} = useContext(dialogContext);
  const [dogName, setDogName]= useState('');
  const [dogImage, setDogImage] = useState<File | null>(null);
  const dogImageInput = useRef<HTMLInputElement>(null);

  const addDog = useMutation(api.dogs.addDog);

  const addDogHandler = async () => {

    await addDog({name: dogName, score: 0, image: "duhuwhduwdhudwh"});

    const sendImageUrl = new URL(`${process.env.NEXT_PUBLIC_CONVEX_URL!}/${dogName}`);

    await fetch(sendImageUrl, {
      method: "POST",
      headers: {"Content-Type": dogImage!.type},
      body: dogImage
    });

    setDogImage(null);
    dogImageInput.current!.value = "";
  }

  const closeDialog = () => {
    setDialogState(false);
  }

  return (
    <dialog className={styles.dialogContainer} open={dialogState}>
      <div className={styles.formWrapper}>
        <div className={styles.formContainer}>
          <div className={styles.inputContainer}>
            <label htmlFor='dog-name'>Dog Name</label>
            <input aria-label='dog name' placeholder='Name' id='dog-name' onChange={e => setDogName(e.target.value)}></input>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor='dog-image'>Dog Image</label>
            <input type='file' id='dog-image' ref={dogImageInput} onChange={e => setDogImage(e.target.files![0])}></input>
          </div>

          <button onClick={addDogHandler}>Submit</button>
          <button onClick={closeDialog}>Close</button>
        </div>
      </div>
    </dialog>
  )
}
