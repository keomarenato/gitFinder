import { FaSpinner } from 'react-icons/fa'
import styles from './Loading.module.css'

export const Loading = () => {
  return (
    <>
      <FaSpinner className={styles.loader} />
    </>
  )
}
