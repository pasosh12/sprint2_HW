import React, {ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3'

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string,
                      setName: Dispatch<SetStateAction<string>>,
                      setError: Dispatch<SetStateAction<string>>) => void
}

export const pureAddUser = (
    name: string,
    setError: Dispatch<SetStateAction<string>>,
    setName: Dispatch<SetStateAction<string>>,
    addUserCallback: Function
) => {
    if (name.trim().length === 0) {
        setError("Ошибка! Введите имя!")
    }
    else {
        setError("")
        addUserCallback(name)
        setName('')
    }

}

export const pureOnBlur = (name: string, setError: Dispatch<SetStateAction<string>>) => { // если имя пустое - показать ошибку

    if (name.trim().length === 0) {
        setError("Ошибка! Введите имя!")
    }// если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser:()=>void) => {
    if (e.key === 'Enter') {
        addUser()
    }
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
                                                                     users,
                                                                     addUserCallback,
                                                                 }) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string>('')

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        let name = e.currentTarget.value
        setName(name)
        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: KeyboardEvent<HTMLInputElement>) => {
        pureOnEnter(e, addUser)
    }

    const totalUsers = users.length
    const lastUserName = totalUsers !== 0 ? users[totalUsers - 1].name : ''

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
