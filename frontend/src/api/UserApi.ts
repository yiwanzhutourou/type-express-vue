import api from './api'
import { User } from './model'

export const getUser = async (id: number) => {
    return await api.get<User>(`/api/user/${id}`)
}
