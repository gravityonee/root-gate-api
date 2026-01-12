import { insertUser } from "@/repositories/user.repository"
import { hashPassword } from "@/utils/encrypt"

export const createUser = async (
    { username, password, role} : 
    { username: string, password: string, role: string }) => {
    try {
        const hashedPassword = await hashPassword(password)
        const user = await insertUser({ username, password: hashedPassword, role })
        return user
    } catch (error) {
        throw error
    }
}