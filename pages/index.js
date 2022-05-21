import Head from 'next/head'
import homeStyles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>Welcome</title>
				<meta name='description' content='next application' />
			</Head>

			<div className={homeStyles.heroSection}>
				<h1>
					Welcome to <span>NextJS Application</span>
				</h1>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis architecto alias dicta culpa,
					natus voluptatem pariatur aliquid temporibus obcaecati aperiam atque dolorem deserunt id quae?
					Assumenda perferendis voluptates illo! Ab!
				</p>
			</div>
		</>
	)
}
