
export default function Home() {
  return (
    <>
      {/* <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start"> */}
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
        <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
          Superblog
        </h1>
        <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
          <li className="mb-2">Alice</li>
          <li>Bob</li>
        </ol>
      </div>
      {/* </main>
      </div> */}
    </>
  );
}
