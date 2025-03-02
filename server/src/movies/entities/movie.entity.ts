/* eslint-disable indent */
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	JoinTable,
	ManyToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { slugify } from 'src/utils/slugify'
import { Category } from 'src/categories/entities/category.entity'
import { Actor } from 'src/actors/entities/actor.entity'

@Entity('movies')
export class Movie {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ unique: true })
	name: string

	@Column({ unique: true })
	slug: string

	@Column({ type: 'date' })
	releaseDate: Date

	@Column({ default: 0 })
	likes: number

	@Column({ default: 0 })
	views: number

	@Column()
	videoUrl: string

	@Column({ nullable: true })
	cover: string

	@Column({ type: 'text', nullable: true })
	description: string

	@BeforeInsert()
	@BeforeUpdate()
	generateSlug() {
		if (this.name) {
			this.slug = slugify(this.name)
		}
	}

	@ManyToMany(() => Category, (category) => category.movies, { nullable: true })
	@JoinTable()
	categories: Category[]

	@ManyToMany(() => Actor, (actor) => actor.movies, { nullable: true })
	@JoinTable()
	actors: Actor[]
}
