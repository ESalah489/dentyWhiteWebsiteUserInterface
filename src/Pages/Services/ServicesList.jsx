import React, { useEffect, useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import CategorySidebar from "../../components/Categories/CategorySidebar";
import ServiceCard from "../../components/Services/ServicesCard";
import SearchBox from "../../components/Search/SearchBox";
import { useNavigate } from "react-router-dom";

const ServicesList = () => {
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [sortBy, setSortBy] = useState("createdAt-desc");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [keyword, setKeyword] = useState("");
  const navigate = useNavigate();

  const sortOptions = [
    { label: "Newest", value: "createdAt-desc" },
    { label: "Price: Low to High", value: "price-asc" },
    { label: "Price: High to Low", value: "price-desc" },
  ];

  const fetchSuggestionsServices = async (query) => {
    try {
      const { data } = await axiosInstance.get(`/search?keyword=${query}`);

      const suggestions = [];

      data.services.forEach((service) => {
        suggestions.push({
          label: service.name,
          value: service._id,
          type: "service",
        });
      });

      return suggestions;
    } catch (err) {
      console.error("Error fetching service suggestions:", err);
      return [];
    }
  };

  const fetchServices = async () => {
    try {
      const query = new URLSearchParams();

      if (selectedCategory) {
        query.append("category", selectedCategory);
      }

      if (sortBy) {
        const [field, order] = sortBy.split("-");
        query.append("sortBy", field);
        query.append("order", order);
      }

      if (keyword) {
        query.append("keyword", keyword);
      }

      query.append("page", page);
      query.append("limit", 6);

      const { data } = await axiosInstance.get(`/services?${query.toString()}`);
      setServices(data.services || []);
      setTotalPages(Math.ceil(data.total / 6));
    } catch (error) {
      console.error("Error fetching services", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, [selectedCategory, sortBy, page, keyword]);

  const handleSuggestionSelect = (type, value) => {
    if (type === "service") {
      navigate(`/services/${value}`);
    } 
  };

  return (
    <div style={{ backgroundColor: '#f8fafc', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div 
        className="relative py-20 px-4"
        style={{ 
          background: 'linear-gradient(135deg, #e8f2ff 0%, #f1f8ff 100%)'
        }}
      >
        <div className="container mx-auto text-center">
          <h1 
            className="text-5xl font-bold mb-4"
            style={{ color: '#1e293b' }}
          >
            Our Services
          </h1>
          
          {/* Breadcrumb */}
          <div className="flex items-center justify-center space-x-2 text-sm">
            <span 
              className="hover:text-blue-600 cursor-pointer transition-colors"
              style={{ color: '#64748b' }}
              onClick={() => navigate('/')}
            >
              Home
            </span>
            <span style={{ color: '#64748b' }}>›</span>
            <span style={{ color: '#1e293b' }}>Our Services</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 grid grid-cols-12 gap-6">
        {/* Search Box */}
        <div className="col-span-12 mb-6">
          <SearchBox
            placeholder="Search services..."
            fetchSuggestions={fetchSuggestionsServices}
            onSelect={handleSuggestionSelect}
          />
        </div>

        {/* Sidebar */}
        <div className="col-span-12 md:col-span-3">
          <div 
            className="bg-white rounded-2xl p-6 shadow-lg"
            style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)' }}
          >
            <CategorySidebar
              selectedCategory={selectedCategory}
              onSelectCategory={(value) => {
                setSelectedCategory(value);
                setPage(1);
              }}
            />

            {/* Sort Dropdown */}
            <div className="mt-6">
              <label 
                className="block mb-3 font-semibold"
                style={{ color: '#1e293b' }}
              >
                Sort by
              </label>
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value);
                  setPage(1);
                }}
                className="w-full border-2 p-3 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2"
                style={{
                  borderColor: '#e2e8f0',
                  backgroundColor: '#ffffff',
                  color: '#1e293b'
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = '#3b82f6';
                  e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#e2e8f0';
                  e.target.style.boxShadow = 'none';
                }}
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Service Cards */}
        <div className="col-span-12 md:col-span-9">
          {services.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <ServiceCard key={service._id} service={service} />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12 gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  disabled={page === 1}
                  style={{
                    backgroundColor: page === 1 ? '#e2e8f0' : '#3b82f6',
                    color: page === 1 ? '#94a3b8' : 'white',
                    cursor: page === 1 ? 'not-allowed' : 'pointer'
                  }}
                >
                  Previous
                </button>
                <span 
                  className="px-6 py-3 font-semibold flex items-center"
                  style={{ color: '#1e293b' }}
                >
                  Page {page} of {totalPages}
                </span>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  className="px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-lg transform hover:scale-105"
                  disabled={page === totalPages}
                  style={{
                    backgroundColor: page === totalPages ? '#e2e8f0' : '#3b82f6',
                    color: page === totalPages ? '#94a3b8' : 'white',
                    cursor: page === totalPages ? 'not-allowed' : 'pointer'
                  }}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div className="text-center py-20">
              <div 
                className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{ backgroundColor: '#e8f2ff' }}
              >
                <svg 
                  className="w-12 h-12"
                  style={{ color: '#3b82f6' }}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.674-2.64" />
                </svg>
              </div>
              <p 
                className="text-lg font-medium"
                style={{ color: '#64748b' }}
              >
                No services found for this category.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
