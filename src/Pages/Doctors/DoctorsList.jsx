// // import React, { useEffect, useState } from "react";
// // import axiosInstance from "../../api/axiosInstance";
// // import DropdownFilter from "../../components/DropdownList/DropdownFilter";
// // import DoctorCard from "../../components/Doctors/DoctorsCard";
// // import SearchBox from "../../components/Search/SearchBox";
// // import { useNavigate } from "react-router-dom";

// // const DoctorList = () => {
// //   const [doctors, setDoctors] = useState([]);
// //   const [specialization, setSpecialization] = useState("");
// //   const [sortBy, setSortBy] = useState("createdAt-desc");
// //   const [page, setPage] = useState(1);
// //   const [totalPages, setTotalPages] = useState(1);
// //   const [keyword, setKeyword] = useState("");
// //   const navigate = useNavigate();

// //   const [specializationOptions, setSpecializationOptions] = useState([
// //     { label: "All", value: "" },
// //   ]);

// //   const sortOptions = [
// //     { label: "Newest", value: "createdAt-desc" },
// //     { label: "Top Rated", value: "averageRating-desc" },
// //     { label: "Lowest Rated", value: "averageRating-asc" },
// //   ];

// //   useEffect(() => {
// //     const fetchSpecializations = async () => {
// //       try {
// //         const { data } = await axiosInstance.get("/doctor/specializations");

// //         const dynamicOptions = Array.isArray(data)
// //           ? data.map((spec) => ({
// //             label: spec,
// //             value: spec,
// //           }))
// //           : [];
// //         setSpecializationOptions([{ label: "All", value: "" }, ...dynamicOptions]);

// //         setSpecializationOptions([{ label: "All", value: "" }, ...dynamicOptions]);
// //       } catch (err) {
// //         console.error("Error fetching specializations:", err);
// //       }
// //     };

// //     fetchSpecializations();
// //   }, []);


// //   const fetchSuggestions = async (query) => {
// //     try {
// //       const { data } = await axiosInstance.get(`/search/doctors?keyword=${query}`);

// //       const suggestions = [];

// //       data.doctors.forEach((doc) => {
// //         const fullName = `Dr. ${doc.user.firstName} ${doc.user.lastName}`;
// //         suggestions.push({
// //           label: fullName,
// //           value: doc._id,
// //           type: "doctor",
// //         });
// //       });

// //       return suggestions;
// //     } catch (err) {
// //       console.error("Error fetching suggestions:", err);
// //       return [];
// //     }
// //   };



// //   const fetchDoctors = async () => {
// //     try {
// //       const query = new URLSearchParams();

// //       if (specialization) query.append("specialization", specialization);

// //       if (sortBy) {
// //         const [field, order] = sortBy.split("-");
// //         query.append("sortBy", field);
// //         query.append("order", order);
// //       }

// //       if (keyword) {
// //         query.append("keyword", keyword);
// //       }

// //       query.append("page", page);
// //       query.append("limit", 6);

// //       const { data } = await axiosInstance.get(`/doctor?${query.toString()}`);
// //       console.log("Doctors API response:", data);
// //       setDoctors(data?.doctors || []);
// //       setTotalPages(Math.ceil(data.total / 6));
// //     } catch (err) {
// //       console.error("Error fetching doctors:", err);
// //     }
// //   };

// //   useEffect(() => {

// //     fetchDoctors();
// //   }, [specialization, sortBy, page, keyword]);

// //   const handleSuggestionSelect = (type, value) => {
// //     if (type === "doctor") {
// //       navigate(`/doctor/${value}`);
// //     } 
// //   };

// //   return (
// //     <div className="container mx-auto px-4 py-8">
// //       <div className="mb-6">

// //         <SearchBox
// //   placeholder="Search doctors or specializations..."
// //   fetchSuggestions={fetchSuggestions}
// //   onSelect={handleSuggestionSelect}
// // />


// //       </div>

// //       <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">
// //         Browse Our Dentists
// //       </h1>

// //       {/* Filters */}
// //       <div className="flex flex-wrap justify-center gap-4 mb-8">
// //         <DropdownFilter
// //           label="Specialization"
// //           options={specializationOptions}
// //           selected={specialization}
// //           onChange={setSpecialization}
// //         />
// //         <DropdownFilter
// //           label="Sort By"
// //           options={sortOptions}
// //           selected={sortBy}
// //           onChange={setSortBy}
// //         />
// //       </div>

// //       {/* Doctor Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {doctors.map((doc) => (
// //           <DoctorCard key={doc._id} doctor={doc} />
// //         ))}
// //       </div>

// //       {/* Pagination */}
// //       <div className="flex justify-center mt-10 gap-4">
// //         <button
// //           onClick={() => setPage((p) => Math.max(1, p - 1))}
// //           className="px-4 py-2 border rounded hover:bg-gray-200"
// //           disabled={page === 1}
// //         >
// //           Previous
// //         </button>
// //         <span className="text-blue-900 font-semibold">Page {page}</span>
// //         <button
// //           onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
// //           className="px-4 py-2 border rounded hover:bg-gray-200"
// //           disabled={page === totalPages}
// //         >
// //           Next
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default DoctorList;




// //  {/* <SearchBox
// //           placeholder="Search doctors or specializations..."
// //           onSearch={(val) => {
// //             setKeyword(val);
// //             setPage(1);
// //           }}
// //           onSelectSuggestion={handleSuggestionSelect}
// //           searchType="doctors"
// //         /> */}
// //   // doc.specialization.forEach((spec) => {
// //         //   suggestions.push({
// //         //     label: spec,
// //         //     value: spec,
// //         //     type: "specialization",
// //         //   });
// //         // });


// import React, { useEffect, useState } from "react";
// import axiosInstance from "../../api/axiosInstance";
// import DropdownFilter from "../../components/DropdownList/DropdownFilter";
// import DoctorCard from "../../components/Doctors/DoctorsCard";
// import SearchBox from "../../components/Search/SearchBox";
// import { useNavigate } from "react-router-dom";

// const DoctorList = () => {
//   const [doctors, setDoctors] = useState([]);
//   const [specialization, setSpecialization] = useState("");
//   const [sortBy, setSortBy] = useState("createdAt-desc");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);
//   const [keyword, setKeyword] = useState("");
//   const navigate = useNavigate();

//   const [specializationOptions, setSpecializationOptions] = useState([
//     { label: "All", value: "" },
//   ]);

//   const sortOptions = [
//     { label: "Newest", value: "createdAt-desc" },
//     { label: "Top Rated", value: "averageRating-desc" },
//     { label: "Lowest Rated", value: "averageRating-asc" },
//   ];

//   useEffect(() => {
//     const fetchSpecializations = async () => {
//       try {
//         const { data } = await axiosInstance.get("/doctor/specializations");

//         const dynamicOptions = Array.isArray(data)
//           ? data.map((spec) => ({
//             label: spec,
//             value: spec,
//           }))
//           : [];
//         setSpecializationOptions([{ label: "All", value: "" }, ...dynamicOptions]);
//       } catch (err) {
//         console.error("Error fetching specializations:", err);
//       }
//     };

//     fetchSpecializations();
//   }, []);

//   const fetchSuggestions = async (query) => {
//     try {
//       const { data } = await axiosInstance.get(`/search/doctors?keyword=${query}`);

//       const suggestions = [];

//       data.doctors.forEach((doc) => {
//         const fullName = `Dr. ${doc.user.firstName} ${doc.user.lastName}`;
//         suggestions.push({
//           label: fullName,
//           value: doc._id,
//           type: "doctor",
//         });
//       });

//       return suggestions;
//     } catch (err) {
//       console.error("Error fetching suggestions:", err);
//       return [];
//     }
//   };

//   const fetchDoctors = async () => {
//     try {
//       const query = new URLSearchParams();

//       if (specialization) query.append("specialization", specialization);

//       if (sortBy) {
//         const [field, order] = sortBy.split("-");
//         query.append("sortBy", field);
//         query.append("order", order);
//       }

//       if (keyword) {
//         query.append("keyword", keyword);
//       }

//       query.append("page", page);
//       query.append("limit", 6);

//       const { data } = await axiosInstance.get(`/doctor?${query.toString()}`);
//       console.log("Doctors API response:", data);
//       setDoctors(data?.doctors || []);
//       setTotalPages(Math.ceil(data.total / 6));
//     } catch (err) {
//       console.error("Error fetching doctors:", err);
//     }
//   };

//   useEffect(() => {
//     fetchDoctors();
//   }, [specialization, sortBy, page, keyword]);

//   const handleSuggestionSelect = (type, value) => {
//     if (type === "doctor") {
//       navigate(`/doctor/${value}`);
//     } 
//   };

//   // console.log("doctor.experience:", doctors.experience);

//   return (
//     <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
//       {/* Hero Section */}
//       <div 
//         className="relative py-20 px-4"
//         style={{ 
//           background: 'linear-gradient(135deg, #e8f2ff 0%, #f1f8ff 100%)'
//         }}
//       >
//         <div className="container mx-auto text-center">
//           <p 
//             className="text-lg font-medium mb-2"
//             style={{ color: '#3b82f6' }}
//           >
//             Meet Our Dental Team
//           </p>
//           <h1 
//             className="text-5xl font-bold mb-4"
//             style={{ color: '#1e293b' }}
//           >
//             Committed to Your Smile
//           </h1>
//           <p 
//             className="text-lg max-w-2xl mx-auto"
//             style={{ color: '#64748b' }}
//           >
//             Our experienced dental team is here to make every visit positive and personalized. With gentle hands and caring hearts.
//           </p>
          
//           {/* Breadcrumb */}
//           <div className="flex items-center justify-center space-x-2 text-sm mt-6">
//             <span 
//               className="hover:text-blue-600 cursor-pointer transition-colors"
//               style={{ color: '#64748b' }}
//               onClick={() => navigate('/')}
//             >
//               Home
//             </span>
//             <span style={{ color: '#64748b' }}>›</span>
//             <span style={{ color: '#1e293b' }}>Dentists</span>
//           </div>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-12">
//         {/* Search Box */}
//         <div className="mb-8">
//           <SearchBox
//             placeholder="Search doctors..."
//             fetchSuggestions={fetchSuggestions}
//             onSelect={handleSuggestionSelect}
//           />
//         </div>

//         {/* Filters */}
//         <div 
//           className="bg-white rounded-2xl p-6 mb-12 shadow-lg"
//           style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
//         >
//           <div className="flex flex-wrap justify-center gap-6">
//             <div className="min-w-48">
//               <label 
//                 className="block mb-2 font-semibold text-sm"
//                 style={{ color: '#1e293b' }}
//               >
//                 Specialization
//               </label>
//               <DropdownFilter
//                 label=""
//                 options={specializationOptions}
//                 selected={specialization}
//                 onChange={setSpecialization}
//               />
//             </div>
//             <div className="min-w-48">
//               <label 
//                 className="block mb-2 font-semibold text-sm"
//                 style={{ color: '#1e293b' }}
//               >
//                 Sort By
//               </label>
//               <DropdownFilter
//                 label=""
//                 options={sortOptions}
//                 selected={sortBy}
//                 onChange={setSortBy}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Doctor Cards */}
//         {doctors.length > 0 ? (
//           <>
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//               {doctors.map((doc) => (
//                 <DoctorCard key={doc._id} doctor={doc} />
//               ))}
//             </div>

//             {/* Pagination */}
//             <div className="flex justify-center mt-12 gap-4">
//               <button
//                 onClick={() => setPage((p) => Math.max(1, p - 1))}
//                 className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
//                 disabled={page === 1}
//                 style={{
//                   backgroundColor: page === 1 ? '#e2e8f0' : '#3b82f6',
//                   color: page === 1 ? '#94a3b8' : 'white',
//                   cursor: page === 1 ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Previous
//               </button>
//               <span 
//                 className="px-6 py-3 font-semibold flex items-center"
//                 style={{ color: '#1e293b' }}
//               >
//                 Page {page} of {totalPages}
//               </span>
//               <button
//                 onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
//                 className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
//                 disabled={page === totalPages}
//                 style={{
//                   backgroundColor: page === totalPages ? '#e2e8f0' : '#3b82f6',
//                   color: page === totalPages ? '#94a3b8' : 'white',
//                   cursor: page === totalPages ? 'not-allowed' : 'pointer'
//                 }}
//               >
//                 Next
//               </button>
//             </div>
//           </>
//         ) : (
//           <div className="text-center py-20">
//             <div 
//               className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
//               style={{ backgroundColor: '#e8f2ff' }}
//             >
//               <svg 
//                 className="w-12 h-12"
//                 style={{ color: '#3b82f6' }}
//                 fill="none" 
//                 stroke="currentColor" 
//                 viewBox="0 0 24 24"
//               >
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//               </svg>
//             </div>
//             <p 
//               className="text-lg font-medium"
//               style={{ color: '#64748b' }}
//             >
//               No doctors found for the selected criteria.
//             </p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DoctorList;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import DropdownFilter from "../../components/DropdownList/DropdownFilter";
import DoctorCard from "../../components/Doctors/DoctorsCard";
import SearchBox from "../../components/Search/SearchBox";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const DoctorList = () => {
  const [doctors, setDoctors] = useState([]);
  const [specialization, setSpecialization] = useState("");
  const [sortBy, setSortBy] = useState("createdAt-desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const navigate = useNavigate();

  const [specializationOptions, setSpecializationOptions] = useState([
    { label: "All", value: "" },
  ]);

  const sortOptions = [
    { label: "Newest", value: "createdAt-desc" },
    { label: "Top Rated", value: "averageRating-desc" },
    { label: "Lowest Rated", value: "averageRating-asc" },
  ];

  useEffect(() => {
    const fetchSpecializations = async () => {
      try {
        const { data } = await axiosInstance.get("/doctor/specializations");
        const dynamicOptions = Array.isArray(data)
          ? data.map((spec) => ({
            label: spec,
            value: spec,
          }))
          : [];
        setSpecializationOptions([{ label: "All", value: "" }, ...dynamicOptions]);
      } catch (err) {
        console.error("Error fetching specializations:", err);
      }
    };

    fetchSpecializations();
  }, []);

  const fetchSuggestions = async (query) => {
    try {
      const { data } = await axiosInstance.get(`/search/doctors?keyword=${query}`);
      const suggestions = [];
      data.doctors.forEach((doc) => {
        const fullName = `Dr. ${doc.user.firstName} ${doc.user.lastName}`;
        suggestions.push({
          label: fullName,
          value: doc._id,
          type: "doctor",
        });
      });
      return suggestions;
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      return [];
    }
  };

  const fetchDoctors = async () => {
    try {
      const query = new URLSearchParams();
      if (specialization) query.append("specialization", specialization);
      if (sortBy) {
        const [field, order] = sortBy.split("-");
        query.append("sortBy", field);
        query.append("order", order);
      }
      if (keyword) query.append("keyword", keyword);
      query.append("page", page);
      query.append("limit", 8);

      const { data } = await axiosInstance.get(`/doctor?${query.toString()}`);
      setDoctors(data?.doctors || []);
      setTotalPages(Math.ceil(data.total / 8));
    } catch (err) {
      console.error("Error fetching doctors:", err);
    }
  };

  useEffect(() => {
    fetchDoctors();
  }, [specialization, sortBy, page, keyword]);

  const handleSuggestionSelect = (type, value) => {
    if (type === "doctor") {
      navigate(`/doctor/${value}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Hero Section */}
<div 
  className="relative py-20 px-4"
  style={{ 
    background: 'linear-gradient(135deg, #e8f2ff 0%, #f1f8ff 100%)'
  }}
>
  <div className="container mx-auto text-center">
    <p 
      className="text-lg font-medium mb-2"
      style={{ color: '#3b82f6' }}
    >
      Meet Our Dental Team
    </p>
    <h1 
      className="text-4xl md:text-5xl font-bold mb-4"
      style={{ color: '#1e293b' }}
    >
      Committed to Your Smile
    </h1>
    <p 
      className="text-lg max-w-2xl mx-auto"
      style={{ color: '#64748b' }}
    >
      Our experienced dental team is here to make every visit positive and personalized.
    </p>

    {/* Breadcrumb */}
    <div className="flex items-center justify-center space-x-2 text-sm mt-6">
      <span 
        className="hover:text-blue-600 cursor-pointer transition-colors"
        style={{ color: '#64748b' }}
        onClick={() => navigate('/')}
      >
        Home
      </span>
      <span style={{ color: '#64748b' }}>›</span>
      <span style={{ color: '#1e293b' }}>Dentists</span>
    </div>
  </div>
</div>


      <div className="container mx-auto px-4 py-8">
        {/* Search Box */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <SearchBox
            placeholder="Search doctors ..."
            fetchSuggestions={fetchSuggestions}
            onSelect={handleSuggestionSelect}
          />
        </motion.div>

        {/* Mobile Filter Button */}
        {/* <div className="lg:hidden mb-6">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="flex items-center justify-center w-full py-3 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
            </svg>
            Filters & Sort
          </button>
        </div> */}

        <div className="lg:hidden mb-6 flex justify-end">
  <button
    onClick={() => setShowMobileFilters(!showMobileFilters)}
    className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-[var(--color-white)] bg-[var(--color-Buttons)] rounded-md shadow hover:bg-[var(--color-Buttons-disabled)] transition-colors"
  >
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 4h18M6 8h12M10 12h4M12 16h0"
      />
    </svg>
                 Filters & Sort

  </button>
</div>


        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <motion.div 
            className="hidden lg:block lg:w-1/4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-lg p-6 shadow-sm space-y-6">
              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-700">Specialization</label>
                <DropdownFilter
                  label=""
                  options={specializationOptions}
                  selected={specialization}
                  onChange={setSpecialization}
                />
              </div>
              <div>
                <label className="block mb-3 text-sm font-semibold text-gray-700">Sort By</label>
                <DropdownFilter
                  label=""
                  options={sortOptions}
                  selected={sortBy}
                  onChange={setSortBy}
                />
              </div>
            </div>
          </motion.div>

          {/* Mobile Filters Dropdown */}
          <AnimatePresence>
            {showMobileFilters && (
              <motion.div
                className="lg:hidden mb-6 bg-white rounded-lg p-6 shadow-sm"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="space-y-6">
                  <div>
                    <label className="block mb-3 text-sm font-semibold text-gray-700">Specialization</label>
                    <DropdownFilter
                      label=""
                      options={specializationOptions}
                      selected={specialization}
                      onChange={setSpecialization}
                    />
                  </div>
                  <div>
                    <label className="block mb-3 text-sm font-semibold text-gray-700">Sort By</label>
                    <DropdownFilter
                      label=""
                      options={sortOptions}
                      selected={sortBy}
                      onChange={setSortBy}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Doctor Cards */}
          <div className="flex-1">
            {doctors.length > 0 ? (
              <>
               <motion.div 
  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.4, delay: 0.2 }} // أخف وأنعم
>
  {doctors.map((doc, index) => (
    <motion.div
      key={doc._id}
      initial={{ opacity: 0, y: 20 }} // خفّضنا الحركة الرأسية كمان
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 * index }} // سريعة وسلسة
    >
      <DoctorCard doctor={doc} />
    </motion.div>
  ))}
</motion.div>


                {/* Pagination */}
                {totalPages > 1 && (
                  <motion.div 
                    className="flex justify-center mt-12 gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={page === 1}
                    >
                      Previous
                    </button>
                    
                    <div className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg">
                      Page {page} of {totalPages}
                    </div>
                    
                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={page === totalPages}
                    >
                      Next
                    </button>
                  </motion.div>
                )}
              </>
            ) : (
              <motion.div 
                className="text-center py-20"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <p className="text-lg font-medium text-gray-500">
                  No doctors found for the selected criteria.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorList;
