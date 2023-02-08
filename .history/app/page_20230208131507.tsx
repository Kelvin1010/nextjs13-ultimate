import React, { Suspense } from 'react'
import TodosList from './(users)/todos/TodosList'

function Page() {
  return (
    <div>
      <Suspense fallback={<p>Loading....</p>}>
        <h1>Load Todo</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>

      <Suspense fallback={<p>Loading 2....</p>}>
        <h1>Load Todo 2</h1>
        <div className='flex space-x-2'>
          {/* @ts-ignore */}
          <TodosList />
        </div>
      </Suspense>
    </div>
  )
}

export default Page