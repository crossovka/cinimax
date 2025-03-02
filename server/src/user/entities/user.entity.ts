/* eslint-disable indent */
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm'

@Entity('users')
export class User {
	@PrimaryGeneratedColumn('uuid')
	id: string

	@CreateDateColumn({ name: 'created_at' })
	createdAt: Date

	@UpdateDateColumn({ name: 'updated_at' })
	updatedAt: Date

	@Column({ unique: true })
	email: string

	@Column()
	password: string

	@Column({ unique: true })
	name: string

	@Column({ name: 'avatar_path', default: '/uploads/default-avatar.png' })
	avatarPath: string

	@Column({ default: '' })
	phone: string
}
