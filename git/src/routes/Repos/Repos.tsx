import styles from './Repos.module.css'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { BackBtn } from '../../components/BackBtn/BackBtn'
import { Repositorio } from '../../components/Repositorio/Repositorio'
import { RepoPros } from '../../types/repo'
import { Loading } from '../../components/Loading/Loading'



export const Repos = () => {
  const { username } = useParams()

  const [repos, setRepos] = useState<RepoPros[] | [] | null>(null)

  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const loadRepos = async function (username: string) {
      setIsLoading(true)

      const res = await fetch(`https://api.github.com/users/${username}/repos`)

      const data = await res.json()

      let orderedRepos = data.sort((a: RepoPros, b: RepoPros) => b.stargazers_count - a.stargazers_count)
      orderedRepos = orderedRepos.slice(0, 10)

      setIsLoading(false)
      setRepos(data)
    }
    if (username) {
      loadRepos(username)
    }
  }, [])

  if (!repos && isLoading) return <Loading />

  return (
    <div className={styles.repos}>
      <BackBtn />
      <h2>Explore os repositórios do usuários: {username}</h2>
      {repos && repos.length === 0 && <p>Não há repositorios</p>}
      {repos && repos.length > 0 && (
        <div className={styles.repos_container}>
          {repos.map((repo: RepoPros) => (
            <Repositorio key={repo.name}
              name={repo.name}
              language={repo.language}
              html_url={repo.html_url}
              forks_count={repo.forks_count}
              stargazers_count={repo.stargazers_count}
            />
          ))}
        </div>
      )}
    </div>
  )
}
