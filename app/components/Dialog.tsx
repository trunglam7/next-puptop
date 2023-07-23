import React, { use, useContext, useRef, useState } from 'react'
import styles from '../styles/dialog.module.css'
import { dialogContext } from '../page';
import { useMutation } from 'convex/react';
import { api } from '@/convex/_generated/api';
import { generateUploadUrl } from '@/convex/messages';

export default function Dialog() {

  const {dialogState, setDialogState} = useContext(dialogContext);
  const [dogName, setDogName]= useState('');
  const [dogImage, setDogImage] = useState<File | null>(null);
  const dogImageInput = useRef<HTMLInputElement>(null);

  const addDog = useMutation(api.dogs.addDog);
  const generateUploadUrl = useMutation(api.messages.generateUploadUrl);
  const sendImage = useMutation(api.messages.sendImage);

  const addDogHandler = async () => {

    const postUrl = await generateUploadUrl();
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": dogImage!.type },
      body: dogImage
    });

    const json = await result.json();

    if(!result.ok){
      throw new Error(`Upload failed: ${JSON.stringify(json)}`);
    }
    const {storageId} = json;

    await sendImage({storageId});
    await addDog({name: dogName, score: 0, image: storageId});


    setDogImage(null);
    dogImageInput.current!.value = "";
    setDialogState(false);

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
