import { db } from '@/db'
import { users } from '@/db/schema'
import { eq } from 'drizzle-orm/pg-core/expressions'

export const getUsers = async (
    { page = 1, limit = 10 }: 
    { page: number, limit: number }
) => {
    const offset = (page - 1) * limit
    const usersData = await db
        .select({
        id: users.id,
        username: users.username,
        role: users.role,
        })
        .from(users)
        .limit(limit)
        .offset(offset)
    return usersData
}

export const getUserById = async (userId: string) => {
    const [user] = await db
        .select({ id: users.id, username: users.username, role: users.role })
        .from(users)
        .where(eq(users.id, userId))
    return user
}

export const insertUser = async ({ username, password, role }: {
    username: string
    password: string
    role?: string
}) => {
    const [user] = await db
        .insert(users)
        .values({ username, password, role })
        .returning()
    return user
}

export const updatePasswordUser = async ({ userId, password }: {
    userId: string,
    password: string
}) => {
    const [user] = await db
        .update(users)
        .set({ password })
        .where(eq(users.id, userId))
        .returning()
    return user
}

export const updateRoleUser = async ({ userId, role }: {
    userId: string,
    role: string
}) => {
    const [user] = await db
        .update(users)
        .set({ role })
        .where(eq(users.id, userId))
        .returning()
    return user
}

export const removeUser = async (userId: string) => {
    const [user] = await db
        .delete(users)
        .where(eq(users.id, userId))
        .returning();
    return user
}