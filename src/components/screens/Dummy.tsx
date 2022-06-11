import {Head} from "@/components/shared/Head";

function Page404() {
  return (
    <>
      <Head title={'Dummy Page'}></Head>
      <div className="hero min-h-screen bg-gray-800">
        <div className="text-center hero-content text-3xl font-bold">
          <div>
            <h1>
              Dummy page
            </h1>
            <div className='mt-4'>
              <a href='/' className='link-primary'>Home</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Page404
