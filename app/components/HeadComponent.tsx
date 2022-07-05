import Head from 'next/head'
import React from 'react'

function HeadComponent({title}:{title:string}) {
  return (
    <Head>
        <title>Ecommerce | {title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  )
}

export default HeadComponent