/* eslint-disable indent */
import {
	BeforeInsert,
	BeforeUpdate,
	Column,
	Entity,
	ManyToMany,
	PrimaryGeneratedColumn
} from 'typeorm'
import { slugify } from 'src/utils/slugify'

import { Movie } from 'src/movies/entities/movie.entity'

@Entity('categories')
export class Category {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ unique: true })
	name: string

	@Column({ unique: true })
	slug: string

	@Column({ type: 'text', nullable: true })
	description: string

	@Column({ nullable: true })
	cover: string

	@BeforeInsert()
	@BeforeUpdate()
	generateSlug() {
		if (this.name) {
			this.slug = slugify(this.name)
		}
	}

	@ManyToMany(() => Movie, (movie) => movie.categories)
	movies: Movie[]
}
