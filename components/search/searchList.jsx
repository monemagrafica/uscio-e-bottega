import React from 'react'
import Link from 'next/link'

function SearchList(data) {
  console.log(data, 'data')
  return (
    <Link href={{
      pathname: `/store/${data.data.slug}`,
      query: { id: data.data.id }
    }}>
      <h2>{data.data.name}</h2>
    </Link>
  )
}

export default SearchList