import React, { Suspense } from 'react'

function Page() {
  return (
    <div>
      <Suspense>
        <h1>Load Todo</h1>
        <div className='flex space-x-2'>
          {}
        </div>
      </Suspense>
    </div>
  )
}

export default Page