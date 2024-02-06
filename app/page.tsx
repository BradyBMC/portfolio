import Biography from "@/components/Biography"

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="flex justify-between h-screen overflow-y-hidden w-full pt-16">
        <div className="flex flex-1">
          <div className="flex-none w-96 bg-red-500">asdf
            <div className="bg-green-950 h-screen overflow-y-auto">
              <div className="h-96">last scroll</div>
            </div>
          </div>
          <div className="flex-1 grow bg-red-800">
            <div className="bg-blue-950 h-screen overflow-y-auto divide-y divide-blue-200 no-scrollbar">
              <Biography />
              <div className="h-96">scroll</div>
              <div className="h-96">scroll</div>
              <div className="h-96">scroll</div>
              <div className="h-96">scroll</div>
              <div className="h-96">scroll</div>
              <div className="h-96">last scroll</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}