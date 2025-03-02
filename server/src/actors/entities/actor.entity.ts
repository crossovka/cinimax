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

@Entity('actors')
export class Actor {
	@PrimaryGeneratedColumn()
	id: number

	@Column({ unique: true })
	name: string

	@Column({ unique: true })
	slug: string

	@Column({ nullable: true })
	photo: string

	@Column({ type: 'text', nullable: true })
	bio: string

	@BeforeInsert()
	@BeforeUpdate()
	generateSlug() {
		if (this.name) {
			this.slug = slugify(this.name)
		}
	}

	@ManyToMany(() => Movie, (movie) => movie.actors, { nullable: true })
	movies: Movie[]
}
