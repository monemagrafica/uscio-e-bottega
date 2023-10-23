import React from 'react'
import Link from 'next/link'



/**
 * Componente lista ricerca
 * @date 23/10/2023 - 18:07:48
 *
 * @param {*} data
 * @returns {*}
 */

function SearchList(data) {

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