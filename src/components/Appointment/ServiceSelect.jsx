import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem, Typography, Box, Avatar } from "@mui/material";
import axios from "../../api/axiosInstance";

const ServiceSelect = ({ selectedService, setSelectedService }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await axios.get("/services");
        setServices(res.data.services || []);
      } catch (err) {
        console.error("❌ Failed to fetch services", err);
      }
    };
    fetchServices();
  }, []);

  const handleChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <FormControl fullWidth margin="normal">
      <InputLabel>Service</InputLabel>
      <Select value={selectedService} label="Service" onChange={handleChange}>
        {services.map((service) => (
          <MenuItem key={service._id} value={service._id}>
            <Box display="flex" alignItems="center" gap={2}>
              <Avatar src={service.image} alt={service.name} variant="rounded" sx={{ width: 56, height: 56 }} />
              <Box>
                <Typography variant="body1" fontWeight="bold">{service.name}</Typography>
                <Typography variant="body2" color="text.secondary">{service.price} EGP</Typography>
              </Box>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default ServiceSelect;
