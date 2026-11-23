import { useState, useEffect } from 'react';
import { auth, googleProvider, db } from '../lib/firebase';
import { signInWithPopup, signOut, onAuthStateChanged, User } from 'firebase/auth';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';

export default function AdminPanel() {
  const [user, setUser] = useState<User | null>(null);
  const [clients, setClients] = useState<{id: string, name: string, logoUrl: string}[]>([]);
  const [name, setName] = useState('');
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        const querySnapshot = await getDocs(collection(db, 'clients'));
        setClients(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any })));
      }
    });
    return unsubscribe;
  }, []);

  const handleLogin = async () => await signInWithPopup(auth, googleProvider);
  const handleLogout = async () => await signOut(auth);

  const addClient = async () => {
    if (!name || !logoUrl) return;
    await addDoc(collection(db, 'clients'), { name, logoUrl });
    setName('');
    setLogoUrl('');
    // refresh
    const querySnapshot = await getDocs(collection(db, 'clients'));
    setClients(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any })));
  };

  const deleteClient = async (id: string) => {
    await deleteDoc(doc(db, 'clients', id));
    setClients(clients.filter(c => c.id !== id));
  };

  if (!user) {
    return <button onClick={handleLogin} className="bg-white p-4">Login with Google</button>;
  }

  return (
    <div className="p-10 text-black bg-white">
      <h1 className="text-2xl font-bold mb-5">CMS - Manage Clients</h1>
      <button onClick={handleLogout} className="mb-5 underline">Logout</button>
      <div className="mb-10 space-y-2">
        <input placeholder="Client Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 w-full" />
        <input placeholder="Logo URL" value={logoUrl} onChange={e => setLogoUrl(e.target.value)} className="border p-2 w-full" />
        <button onClick={addClient} className="bg-black text-white p-2">Add Client</button>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {clients.map(client => (
          <div key={client.id} className="border p-4">
            <img src={client.logoUrl} alt={client.name} className="w-20" />
            <p>{client.name}</p>
            <button onClick={() => deleteClient(client.id)} className="text-red-500">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
