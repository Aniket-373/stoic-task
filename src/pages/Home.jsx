import UserCard from "../components/UserCard";

export default function Home({ users }) {
  return (
    <div className="flex flex-col items-center p-8 mt-8">
      <h1 className="text-4xl font-extrabold text-emerald-600 mb-8 text-center">
        Welcome to Home Page
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-center">
        {users.map((user, index) => (
          <UserCard 
            key={index} 
            username={user.username} 
            email={user.email} 
          />
        ))}
      </div>
    </div>
  );
}
