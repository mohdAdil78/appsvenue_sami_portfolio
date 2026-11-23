import { useState, useEffect } from 'react';
import { db } from '../lib/firebase';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Clients() {
  const [clients, setClients] = useState<{id: string, name: string, logoUrl: string}[]>([]);

  useEffect(() => {
    const q = collection(db, 'clients');
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setClients(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() as any })));
    });
    return unsubscribe;
  }, []);

  return (
    <section id="clients" className="px-20 py-10 bg-black/[0.02]">
      <div className="max-w-4xl mx-auto">
        <span className="text-xl uppercase tracking-[0.2em] mb-10 block">Trusted by Industry Leaders</span>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {clients.map((client) => (
            <div 
              key={client.id} 
              className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-8 flex items-center justify-center aspect-[3/2] mt-2 transition-transform duration-300 hover:-translate-y-1"
            >
              <img src={client.logoUrl} alt={client.name} className="w-full h-full object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
