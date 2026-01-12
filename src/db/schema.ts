import {
  pgTable,
  uuid,
  varchar,
  timestamp,
  date,
} from 'drizzle-orm/pg-core'
import { sql, relations } from 'drizzle-orm'

// users table
export const users = pgTable('users', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  username: varchar('username', { length: 100 }).notNull().unique(),
  password: varchar('password', { length: 255 }).notNull(),
  role: varchar('role', { length: 20 }).notNull().default('admin'),
  createdAt: timestamp('created_at').defaultNow(),
})

export const usersRelations = relations(users, ({ many }) => ({
  tokens: many(tokens),
}))

// tokens table
export const tokens = pgTable('tokens', {
  id: uuid('id')
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  userId: uuid('user_id')
    .notNull()
    .references(() => users.id, {
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }),

  token: varchar('token', { length: 255 }).notNull().unique(),
  expiredDate: date('expired_date').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
})

export const tokensRelations = relations(tokens, ({ one }) => ({
  user: one(users, {
    fields: [tokens.userId],
    references: [users.id],
  }),
}))
