import styles from './Repositorio.module.css'
import { RepoPros } from "../../types/repo"
import { BsCodeSlash } from "react-icons/bs"
import { AiOutlineStar, AiOutlineFork } from "react-icons/ai";
import { RiGitRepositoryLine } from "react-icons/ri"

export const Repositorio = ({ name, language, html_url, forks_count, stargazers_count }: RepoPros) => {
  return (
    <div className={styles.repo}>
      <h3>{name}</h3>
      <p className={styles.language}>
        <BsCodeSlash />
        {language}
      </p>
      <div className={styles.stats}>
        <div>
          <AiOutlineStar />
          <span>{stargazers_count}</span>
        </div>
        <div>
          <AiOutlineFork />
          <span>{forks_count}</span>
        </div>
      </div>
      <a href={html_url} target="_blank" className={styles.repo_btn}>
        <span>Ver código</span>
        <RiGitRepositoryLine />
      </a>
    </div>
  )
}
