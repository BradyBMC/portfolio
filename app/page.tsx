import Biography from "@/components/Biography"
import Languages from "@/components/Languages"

export default function Home() {
  return (
    <main className="mx-auto">
      <div className="flex justify-between h-screen overflow-y-hidden w-full pt-16">
        <div className="flex flex-1">
          <div className="flex-none w-96 bg-red-500">asdf
            <div className="bg-green-950 grid h-screen overflow-y-auto no-scrollbar">
              <Biography />
              <div className="h-96">last scroll</div>
            </div>
          </div>
          <div className="flex-1 grow bg-red-800">har
            <div className="bg-blue-950 h-screen overflow-y-auto divide-y divide-blue-200 no-scrollbar">
              <Languages />
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