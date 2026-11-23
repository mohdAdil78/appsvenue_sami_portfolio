import { useState, useEffect } from 'react';
import { auth, db, storage } from '../lib/firebase';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [clients, setClients] = useState<{id: string, name: string, logoUrl: string}[]>([]);
  const [name, setName] = useState('');
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    const querySnapshot = await getDocs(collection(db, 'clients'));
    setClients(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any })));
  };

  const handleAddClient = async () => {
    if (!name || !file) return;
    const storageRef = ref(storage, `logos/${file.name}`);
    await uploadBytes(storageRef, file);
    const logoUrl = await getDownloadURL(storageRef);
    await addDoc(collection(db, 'clients'), { name, logoUrl });
    setName('');
    setFile(null);
    fetchClients();
  };

  const handleDeleteClient = async (id: string) => {
    await deleteDoc(doc(db, 'clients', id));
    fetchClients();
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-64 bg-black text-white p-6">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <ul>
          <li className="font-bold underline cursor-pointer">Clients</li>
        </ul>
        <button onClick={() => { signOut(auth); navigate('/admin/login'); }} className="mt-10 underline text-sm text-gray-400">Logout</button>
      </aside>
      <main className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-6">Manage Clients</h1>
        <div className="bg-white p-6 rounded shadow mb-10">
          <h2 className="text-lg font-bold mb-4">Add New Client</h2>
          <input placeholder="Client Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full mb-2" />
          <input type="file" onChange={e => setFile(e.target.files?.[0] || null)} className="mb-4" />
          <button onClick={handleAddClient} className="bg-black text-white p-2 rounded w-full">Add Client</button>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {clients.map(client => (
            <div key={client.id} className="border p-4 bg-white rounded">
              <img src={client.logoUrl} alt={client.name} className="w-20 mb-2" />
              <p className="font-bold">{client.name}</p>
              <button onClick={() => handleDeleteClient(client.id)} className="text-red-500 text-sm">Delete</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
