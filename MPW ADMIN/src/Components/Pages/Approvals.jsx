import user1 from '../../assets/user-01.png'


const users = [
  { id: 1, image: user1 },
  { id: 2, image: user1 },
  { id: 3, image: user1 },
  { id: 4, image: user1 },
  { id: 5, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },
  { id: 6, image: user1 },

];

export default function Approval() {
  return (
    <div className="container mx-auto px-5">
      <button className='px-5 py-2 font-semibold text-white bg-slate-400 rounded-lg text-xl mb-5'>Tenant Approvals</button>
      <div className="flex flex-wrap justify-center md:justify-between">
        {users.map(user => (
          <div key={user.id} className="relative group w-full sm:w-1 md:w-1/2 lg:w-1/4 xl:w-1/6 p-2">
            <div className="w-full">
              <img src={user.image} alt={user.name} className="w-full rounded-full" />
            </div>
            <div className="absolute inset-0 flex flex-col rounded-full items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-red-900 hover:bg-red-800  text-white py-2 px-4 mb-2 rounded">View/Edit Details</button>
              <button className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


