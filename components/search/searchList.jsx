import React from 'react'
import Link from 'next/link'

function SearchList(data) {
  return (
    <Link href={`/store/${data.data.slug.stringValue}`}>
        <h2>{data.data.name.stringValue}</h2>
    </Link>
  )
}

export default SearchList