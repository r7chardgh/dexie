import Friend from "@/components/dexieComponent/Friend";

export default async function Home() {
  return (
    <main className="p-6 flex flex-col gap-4">
      <h1 className="text-2xl font-semibold">Dexie</h1>
      <p className="p-2 rounded-sm bg-neutral-500">Friends are stored at indexeddb</p>
      <Friend />
    </main>
  );
}
