import { useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  IconButton,
  OutlinedInput,
  Checkbox,
  ListItemText,
  Typography,
  Grid,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import axios from "../../api/axiosInstance";

const allSpecializations = [
  "Dentist",
  "Orthodontist",
  "Surgeon",
  "Neurologist",
];
const allCertifications = ["MBBS", "PhD", "FRCS", "DDS"];
const allDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function PopupsAddDoctors() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    specialization: [],
    experience: "",
    certifications: [],
    bio: "",
    availableTimes: [],
    profileImage: null,
    workImages: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAvailableTimeChange = (index, field, value) => {
    const updatedTimes = [...formData.availableTimes];
    updatedTimes[index] = {
      ...updatedTimes[index],
      [field]: value,
      slots: updatedTimes[index].slots || [{ from: "", to: "" }],
    };
    setFormData((prev) => ({ ...prev, availableTimes: updatedTimes }));
  };

  const handleSlotChange = (dayIndex, slotIndex, field, value) => {
    const updatedTimes = [...formData.availableTimes];
    updatedTimes[dayIndex].slots[slotIndex][field] = value;
    setFormData((prev) => ({ ...prev, availableTimes: updatedTimes }));
  };

  const addAvailableDay = () => {
    setFormData((prev) => ({
      ...prev,
      availableTimes: [
        ...prev.availableTimes,
        { day: "", slots: [{ from: "", to: "" }] },
      ],
    }));
  };

  const addSlotToDay = (dayIndex) => {
    const updatedTimes = [...formData.availableTimes];
    updatedTimes[dayIndex].slots.push({ from: "", to: "" });
    setFormData((prev) => ({ ...prev, availableTimes: updatedTimes }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const formDataToSend = new FormData();

      formDataToSend.append("userId", formData.userId);
      formDataToSend.append("experience", formData.experience);
      formDataToSend.append("bio", formData.bio);

      formData.specialization.forEach((item) =>
        formDataToSend.append("specialization[]", item)
      );
      formData.certifications.forEach((item) =>
        formDataToSend.append("certifications[]", item)
      );
      formDataToSend.append(
        "availableTimes",
        JSON.stringify(formData.availableTimes)
      );

      if (formData.profileImage) {
        formDataToSend.append("profileImage", formData.profileImage);
      }

      formData.workImages.forEach((file) => {
        formDataToSend.append("workImages", file);
      });

      const response = await axios.post("/doctor", formDataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Doctor created:", response.data);
      setOpen(false);
    } catch (error) {
      console.error("Error creating doctor:", error.response?.data || error);
    }
  };

  return (
    <div>
      <div className="w-full">
        <ButtonSubmit
          name={"  + Add new Doctor  "}
          onClick={() => setOpen(true)}
        />
      </div>
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          Add New Doctor
          <IconButton
            onClick={() => setOpen(false)}
            sx={{ position: "absolute", right: 8, top: 8 }}
          >
            <IoMdClose />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
              marginTop: 16,
            }}
          >
            <TextField
              label="User ID"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
            />
            <FormControl fullWidth>
              <InputLabel>Specializations</InputLabel>
              <Select
                multiple
                name="specialization"
                value={formData.specialization}
                onChange={handleChange}
                input={<OutlinedInput label="Specializations" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {allSpecializations.map((spec) => (
                  <MenuItem key={spec} value={spec}>
                    <Checkbox
                      checked={formData.specialization.includes(spec)}
                    />
                    <ListItemText primary={spec} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Experience (Years)"
              name="experience"
              type="number"
              value={formData.experience}
              onChange={handleChange}
              required
            />

            <FormControl fullWidth>
              <InputLabel>Certifications</InputLabel>
              <Select
                multiple
                name="certifications"
                value={formData.certifications}
                onChange={handleChange}
                input={<OutlinedInput label="Certifications" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {allCertifications.map((cert) => (
                  <MenuItem key={cert} value={cert}>
                    <Checkbox
                      checked={formData.certifications.includes(cert)}
                    />
                    <ListItemText primary={cert} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Bio"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              multiline
              rows={3}
              required
            />
            <Box>
              <Typography variant="subtitle1" mt={2}>
                Profile Image
              </Typography>
              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    profileImage: e.target.files[0],
                  }))
                }
              />

              <Typography variant="subtitle1" mt={2}>
                Work Images
              </Typography>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    workImages: Array.from(e.target.files),
                  }))
                }
              />
            </Box>

            <Box>
              <Typography variant="h6" mb={1}>
                Available Times
              </Typography>
              {formData.availableTimes.map((day, dayIndex) => (
                <Box
                  key={dayIndex}
                  mb={2}
                  p={2}
                  border="1px solid #ccc"
                  borderRadius={2}
                >
                  <FormControl fullWidth sx={{ mb: 1 }}>
                    <InputLabel>Day</InputLabel>
                    <Select
                      value={day.day}
                      onChange={(e) =>
                        handleAvailableTimeChange(
                          dayIndex,
                          "day",
                          e.target.value
                        )
                      }
                    >
                      {allDays.map((d) => (
                        <MenuItem key={d} value={d}>
                          {d}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>

                  {day.slots.map((slot, slotIndex) => (
                    <Grid container spacing={2} key={slotIndex}>
                      <Grid item xs={6}>
                        <TextField
                          label="From"
                          type="time"
                          fullWidth
                          value={slot.from}
                          onChange={(e) =>
                            handleSlotChange(
                              dayIndex,
                              slotIndex,
                              "from",
                              e.target.value
                            )
                          }
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <TextField
                          label="To"
                          type="time"
                          fullWidth
                          value={slot.to}
                          onChange={(e) =>
                            handleSlotChange(
                              dayIndex,
                              slotIndex,
                              "to",
                              e.target.value
                            )
                          }
                          InputLabelProps={{ shrink: true }}
                        />
                      </Grid>
                    </Grid>
                  ))}

                  <Button onClick={() => addSlotToDay(dayIndex)} sx={{ mt: 1 }}>
                    + Add Slot
                  </Button>
                </Box>
              ))}
              <Button onClick={addAvailableDay}>+ Add Day</Button>
            </Box>

            <Button type="submit" variant="contained" color="primary">
              Add Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PopupsAddDoctors;
