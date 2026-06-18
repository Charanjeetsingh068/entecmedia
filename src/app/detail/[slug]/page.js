import React from 'react'
import DetailProject from '../../component/datailProject'

export function generateStaticParams() {
    return [
      { slug: "meridian" },
      { slug: "heimdall-power" },
      { slug: "cula" },
      { slug: "arqitel" },
    ];
  }

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <DetailProject slug={slug} />
  )
}


export default page