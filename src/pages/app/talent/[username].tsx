import * as React from 'react'
import { NextPage } from 'next'
import { TalentHeader } from '../../../components/TalentHeader'

const TalentPage: NextPage = (props) => {
  return (
    <React.Fragment>
      <TalentHeader
        accent={'#0086ff'}
        background={
          'https://pbs.twimg.com/profile_banners/1146614554064912384/1612653823/1500x500'
        }
        name={'Kaapalkeens'}
        quote={
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse vitae congue magna. Cras gravida erat tristique, elementum turpis in, mollis tellus.'
        }
        title={'Video editor'}
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
    </React.Fragment>
  )
}

export default TalentPage
