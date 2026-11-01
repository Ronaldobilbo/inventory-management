import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
// import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {

    return (
       <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </BrowserRouter>
    );
    // // Menyimpan daftar barang
    // const [barang, setBarang] = useState([
    //     { id: 1, nama: 'Buku', harga: 10000 },
    //     { id: 2, nama: 'Pensil', harga: 5000 },
    //     { id: 3, nama: 'Penghapus', harga: 3000 },
    // ]);

    // // Menyimpan input pengguna
    // const [nama, setNama] = useState('');
    // const [harga, setHarga] = useState('');

    // function tambahBarang(event) {
    //     event.preventDefault();

    //     if (!nama.trim() || harga === '') {
    //         alert('Nama dan harga harus diisi!');
    //         return;
    //     }

    //     const barangBaru = {
    //         id: Date.now(),
    //         nama: nama,
    //         harga: Number(harga),
    //     };
    //     setBarang([...barang, barangBaru]);

    //     setNama('');
    //     setHarga('');
    // }

    // function editedBarang(id, namaLama, hargaLama) {
    //     const namaBaru = prompt('Masukkan nama baru:', namaLama);

    //     if(namaBaru === null || namaBaru.trim() === "") {
    //         alert('Nama tidak boleh kosong!');
    //         return;
    //     } ;

    //     const hargaBaru = prompt('Masukkan harga baru:', hargaLama);

    //     if(hargaBaru === null || hargaBaru.trim() === "" || !Number.isFinite(Number(hargaBaru)) || Number(hargaBaru) < 0) {
    //         alert('Harga tidak valid!');
    //         return;
    //     }
    //     const updatedBarang = barang.map(item => {
    //         if (item.id === id) {
    //             return { 
    //                 ...item, 
    //                 nama: namaBaru.trim(),
    //                 harga: Number(hargaBaru) };
    //         }
    //         return item;
    //     });
    //     setBarang(updatedBarang);
    // }

    // function HapusBarang(id) {
    //     setBarang((prevBarang) => prevBarang.filter((item) => item.id !== id));
    // }

    // return (
    //     <div>
    //         <h1 className="text-2xl font-bold mb-4 font-serif text-center">Inventory Management System</h1>

    //         <h2>Tambah Barang</h2>

    //         <form onSubmit={tambahBarang}>
    //             <input
    //                 type="text"
    //                 placeholder="Nama barang"
    //                 value={nama}
    //                 onChange={(event) => setNama(event.target.value)}
    //             />

    //             <input
    //                 type="number"
    //                 placeholder="Harga barang"
    //                 value={harga}
    //                 onChange={(event) => setHarga(event.target.value)}
    //             />

    //             <button className='pr-4' type="submit">
    //                 Tambah Barang
    //             </button>

    //         </form>
               

    //         <h2 className="text-xl font-semibold mb-2 mt-8">Daftar Barang</h2>
    //         <table className="w-full border-collapse border border-gray-300">
    //             <thead>
    //                 <tr className="bg-gray-200">
    //                   <th className="text-left border border-gray-300 px-4 py-2">No</th>
    //                     <th className="border border-gray-300 px-4 py-2">Nama</th>
    //                     <th className="border border-gray-300 px-4 py-2">Harga</th>
    //                     <th className="border border-gray-300 px-4 py-2">Aksi</th>
    //                   </tr>
    //                 </thead>
    //                 <tbody>
    //                   {barang.map((item, index) => (
    //                     <tr key={item.id} className="border-b border-gray-300">
    //                       <td className="text-left border border-gray-300 px-4 py-2"> {index + 1 }</td>
    //                       <td className="text-center border border-gray-300 px-4 py-2">{item.nama}</td>
    //                       <td className="text-center border border-gray-300 px-4 py-2">Rp{item.harga.toLocaleString('id-ID')}</td>
    //                       <td className="text-center border border-gray-300 px-4 py-2 flex justify-center gap-2">
    //                        <div className="flex justify-center gap-2">
    //                             <button className='cursor-pointer ' type="button" onClick={() => HapusBarang(item.id)}>
    //                                 Hapus
    //                             </button>
    //                             <button className='cursor-pointer border-l border-gray-500 pl-2' type="button" onClick={() => editedBarang(item.id, item.nama, item.harga)}>
    //                                 Edit
    //                             </button>
    //                        </div>
    //                       </td>
    //                     </tr>
    //                   ))}
                      
    //                 </tbody>
                    
    //         </table>
                
    //     </div>
    // );
}

export default App;
