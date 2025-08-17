import { motion } from "framer-motion";

function UserCard({ username, email }) {
  return (
    <motion.div
      className="bg-opacity-50 shadow-lg rounded-2xl p-6 border border-gray-200 cursor-pointer w-full hover:shadow-xl transition-shadow duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-2xl font-extrabold font-mono text-emerald-500 flex justify-center">{username}</h2>
      <p className="text-emerald-400 flex justify-center">{email}</p>
    </motion.div>
  );
}

export default UserCard;
