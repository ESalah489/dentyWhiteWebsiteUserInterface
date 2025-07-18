import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";
import axios from "../../api/axiosInstance";

const DoctorSelect = ({ selectedService, selectedDoctor, setSelectedDoctor }) => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    if (!selectedService) return;

    const fetchDoctors = async () => {
      try {
        const res = await axios.get(`/doctor?service=${selectedService}`);
        const fetchedDoctors = res.data.doctors || [];
        setDoctors(fetchedDoctors);

        setSelectedDoctor(""); 
      } catch (err) {
        console.error("❌ Failed to fetch doctors", err);
        setDoctors([]);
        setSelectedDoctor("");
      }
    };

    fetchDoctors();
  }, [selectedService]);

  return (
    <FormControl fullWidth margin="normal" disabled={!selectedService}>
      <InputLabel>Doctor</InputLabel>
      <Select
        value={selectedDoctor}
        label="Doctor"
        onChange={(e) => setSelectedDoctor(e.target.value)}
      >
        {doctors.map((doc) => (
          <MenuItem key={doc._id} value={doc._id}>
            {doc.fullName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default DoctorSelect;
