import Friend from "@/components/dexieComponent/Friend";

export default async function Home() {
  return (
    <main>
      <h1>Dexie</h1>
      <p>Friends are stored at indexeddb</p>
      <Friend />
    </main>
  );
}
