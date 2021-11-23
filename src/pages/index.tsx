import { NextPage } from 'next'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { AvoidHeader, PageContainer } from '../components/utils/PageContainer'
import { TalentCard } from '../components/organisms/TalentCard'
import { supabase } from '../helpers/supabase'

const AppHome: NextPage = (props) => {
	const [talents, setTalents] = useState([])
	const [error, setError] = useState<string>(null)

	useEffect(() => {
		const _ = async () => {
			const { data, error } = await supabase
				.from('talents')
				.select('*')
				.limit(10)

			if (error) setError(error.message)
			else setTalents(data)
		}

		_()
	}, [])

	if (error)
		return (
			<div>
				<h1>Could not fetch talent to suggest!</h1>
				<pre>{error}</pre>
			</div>
		)

	return (
		<PageContainer>
			<AvoidHeader>
				<h1>Available Talents</h1>
				<h3>You can hire them, or something</h3>
				{talents.map((talent, i) => (
					<TalentCard
						key={i}
						id={talent.id}
						name={talent.name}
						title={talent.title}
					/>
				))}
			</AvoidHeader>
		</PageContainer>
	)
}

export default AppHome
