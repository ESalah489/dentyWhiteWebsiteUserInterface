// import { useNavigate } from "react-router-dom";
// import ButtonSubmit from "../../components/Buttons/ButtonSubmit";

// const ServiceCard = ({ service }) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/services/${service._id}`);
//   };

//   const handleReadMore = (e) => {
//     navigate(`/services/${service._id}`);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="cursor-pointer bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group"
//       style={{
//         backgroundColor: "#ffffff",
//         boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
//       }}
//     >
//       <div className="p-6">
//         {/* Image/Icon */}
//         <div className="flex justify-center mb-4">
//           <div
//             className="w-24 h-24 rounded-full flex items-center justify-center shadow-md overflow-hidden"
//             style={{ backgroundColor: "#e8f2ff" }}
//           >
//             <img
//               src={service.image}
//               alt={service.name}
//               className="w-full h-full object-cover rounded-full"
//             />
//           </div>
//         </div>

//         {/* Title */}
//         <h3
//   className="text-xl font-bold text-center mb-2 group-hover:text-blue-600 transition-colors duration-300"
//   style={{
//     color: " #000",
//     whiteSpace: "nowrap",
//     overflow: "hidden",
//     textOverflow: "ellipsis",
//   }}
//   title={service.name} 
// >
//   {service.name}
// </h3>


//         {/* Description */}
//         <p
//   className="text-sm text-center mb-4"
//   style={{
//     color: "#707070",
//     display: "-webkit-box",
//     WebkitLineClamp: 2,
//     WebkitBoxOrient: "vertical",
//     overflow: "hidden",
//   }}
//   title={service.description}
// >
//   {service.description}
// </p>


//         {/* Category and Price */}
//         <div className="flex justify-between items-center text-sm mb-4">
//           <span
//             className="px-3 py-1 rounded-full"
//             style={{
//               backgroundColor: "#e8f2ff",
//               color: "#707070",
//               fontWeight: 500,
//             }}
//           >
//             {service.category}
//           </span>
//           <span
//             className="font-semibold"
//             style={{ color: "#88ad35ba", fontWeight: 600 }}
//           >
//             {service.price} EGP
//           </span>
//         </div>

//         {/* Read More */}
//         <div className="text-center">
//           <ButtonSubmit
//             name="Read more"
//             onClick={handleReadMore}
//             disabled={false}
//           />
//         </div>
//       </div>
//     </div>



///////////////////////////
{/* <div className="p-6">
  <div className="flex flex-col items-center space-y-4">
    {/* Image */}
//     <div className="w-24 h-24 rounded-full flex items-center justify-center shadow-md overflow-hidden" style={{ backgroundColor: "#e8f2ff" }}>
//       <img
//         src={service.image}
//         alt={service.name}
//         className="w-full h-full object-cover rounded-full"
//       />
//     </div>

//     {/* Title */}
//     <h3
//       className="text-xl font-bold text-center group-hover:text-blue-600 transition-colors duration-300"
//       style={{
//         color: "#1e293b",
//         whiteSpace: "nowrap",
//         overflow: "hidden",
//         textOverflow: "ellipsis",
//       }}
//       title={service.name}
//     >
//       {service.name}
//     </h3>

//     {/* Description */}
//     <p
//       className="text-sm text-center"
//       style={{
//         color: "#64748b",
//         display: "-webkit-box",
//         WebkitLineClamp: 2,
//         WebkitBoxOrient: "vertical",
//         overflow: "hidden",
//       }}
//       title={service.description}
//     >
//       {service.description}
//     </p>

//     {/* Category and Price */}
//     <div className="flex justify-between w-full px-2 text-sm">
//       <span
//         className="px-3 py-1 rounded-full"
//         style={{
//           backgroundColor: "#e8f2ff",
//           color: "#3b82f6",
//           fontWeight: 500,
//         }}
//       >
//         {service.category}
//       </span>
//       <span
//         className="font-semibold"
//         style={{ color: "#88ad35ba", fontWeight: 600 }}
//       >
//         {service.price} EGP
//       </span>
//     </div>
//   </div>

//   {/* Read More Button */}
//   <div className="text-center mt-6">
//     <ButtonSubmit
//       name="Read more"
//       onClick={handleReadMore}
//       disabled={false}
//     />
//   </div>
// </div>



//   );
// };

// export default ServiceCard; */}
////////////////////


import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";

const ServiceCard = ({ service }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/services/${service._id}`);
  };

  return (
    <motion.div
      onClick={handleClick}
      className="p-6 cursor-pointer transition-transform duration-300 hover:-translate-y-2 bg-white rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex flex-col items-center space-y-4">
        {/* Image */}
        <div
          className="w-24 h-24 rounded-full flex items-center justify-center overflow-hidden shadow-lg"
          style={{ backgroundColor: "var(--color-Secound)" }}
        >
          <img
            src={service.image}
            alt={service.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Title */}
        <h3
          className="text-lg font-bold text-center"
          style={{
            color: "var(--color-headline)",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={service.name}
        >
          {service.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm text-center"
          style={{
            color: "var(--color-Gray)",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
          title={service.description}
        >
          {service.description}
        </p>

        {/* Category & Price */}
        <div className="flex justify-between w-full px-2 text-sm">
          <span
            className="px-3 py-1 rounded-full"
            style={{
              backgroundColor: "var(--color-Secound)",
              color: "var(--color-Buttons)",
              fontWeight: 500,
            }}
          >
            {service.category}
          </span>
          <span
            className="font-semibold"
            style={{
              color: "var(--color-green-dark)",
              fontWeight: 600,
            }}
          >
            {service.price} EGP
          </span>
        </div>
      </div>

      {/* Read More Icon */}
      <div className="text-center mt-5">
        <button
          onClick={(e) => {
            e.stopPropagation();
            navigate(`/services/${service._id}`);
          }}
          className="flex items-center gap-2 mx-auto text-sm font-medium text-blue-700 hover:text-blue-500 transition-colors duration-300"
        >
          Read more <FaArrowRightLong />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
