import React, { useContext } from 'react'
import styles from '../styles/dialog.module.css'
import { dialogContext } from '../page';

export default function Dialog() {

  const {dialogState, setDialogState} = useContext(dialogContext);

  const closeDialog = () => {
    setDialogState(false);
  }

  return (
    <dialog className={styles.dialogContainer} open={dialogState}>
      <button onClick={closeDialog}>Close</button>
    </dialog>
  )
}
