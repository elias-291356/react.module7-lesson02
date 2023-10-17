import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from 'redux/userOperations'
import { selectUsers } from 'redux/userSelectors'

export const UsersPage = () => {

  const users = useSelector(selectUsers)
  console.log(users)
  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(fetchUsers())

  }, [dispatch])

  return (
    <>
      <ul>

        {users.map(user => {

          return <li key={user.id} >
            <p>{user.name}</p>
            <p>{user.email}</p>
          </li>
        })}
      </ul>
    </>
  )
}
