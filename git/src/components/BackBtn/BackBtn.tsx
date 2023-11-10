import { useNavigate } from "react-router-dom"
import styles from './BackBtn.module.css'

export const BackBtn = () => {
  const navigate = useNavigate()

  return (
    <>
      <button className={styles.back_btn} onClick={() => navigate(-1)}>Voltar</button></>
  )
}
