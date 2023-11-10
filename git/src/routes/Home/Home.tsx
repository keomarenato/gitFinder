import { UserProps } from "../../types/user"
import { useState } from 'react'
import { Search } from "../../components/Search/Search"
import { User } from "../../components/User/User"
import { Erro } from "../../components/Erro/Erro"
import { Loading } from "../../components/Loading/Loading"


export const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null)
  const [error, setError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const loadUser = async (userName: string) => {
    setIsLoading(true)
    setError(false)
    setUser(null)
    setError(false)

    const res = await fetch(`https://api.github.com/users/${userName}`)

    const data = await res.json()

    setIsLoading(false)

    if (res.status === 404) {
      setError(true)
      return
    }

    const userData: UserProps = {
      avatar_url: data.avatar_url,
      login: data.login,
      location: data.location,
      followers: data.followers,
      following: data.following
    }
    setUser(userData)
  }

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoading && <Loading />}
      {user && <User
        login={user.login}
        avatar_url={user.avatar_url}
        followers={user.followers}
        following={user.following}
        location={user.location}
      />}
      {error && <Erro />}
    </div >
  )
}
