import Navbar from "../Component/Navbar";

export default function AddPage() {
  return (
    <main className="min-h-screen bg-slate-50 p-8">
      <Navbar />
      <div className="pt-16">
        <h1 className="text-3xl font-bold">Add</h1>
        <p className="mt-2 text-slate-600">This is the Add page.</p>
      </div>
    </main>
  );
}
