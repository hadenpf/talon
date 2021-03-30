import { Suspense, useEffect, useState } from 'react'
import { GetServerSideProps, NextPage } from 'next'
import { TalentHeader } from '../../components/TalentHeader'
import { supabase } from '../../helpers/supabase'
import { useRouter } from 'next/dist/client/router'
import { Talent } from '../../helpers/data/talent'
import { PageContainer } from '../../components/PageContainer'

interface TalentPageProps {
  talent: Talent
}

const TalentPage: NextPage<TalentPageProps> = (props) => {
  const { talent } = props

  console.log(talent)

  if (!talent) return <div>Loading talent profile...</div>
  // todo: make fancier

  return (
    <PageContainer>
      <TalentHeader
        id={talent.id}
        accent={`#${talent.accent_color}`}
        background={
          'https://pbs.twimg.com/profile_banners/1146614554064912384/1612653823/1500x500'
        }
        name={talent.name}
        title={talent.title}
        quote={talent.blurb}
        trailer={{
          thumbnail:
            'https://pbs.twimg.com/media/EujMmJUU4AE92Bi?format=jpg&name=medium',
          video: 'TODO: add url',
        }}
        pricing={{
          amount: '$5 per hour of content',
          type: 'base',
        }}
      />
    </PageContainer>
  )
}

export default TalentPage

export const getServerSideProps: GetServerSideProps<TalentPageProps> = async (
  ctx
) => {
  const q = await supabase
    .from('talents')
    .select('*')
    .limit(1)
    .eq('id', ctx.params?.id.toString())

  console.log(q)

  if (!q.data?.length)
    return {
      notFound: true,
    }

  return {
    props: { talent: q.data[0] },
  }
}
