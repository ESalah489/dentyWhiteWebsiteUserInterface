import { useState, useEffect } from "react";
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
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import ButtonSubmit from "../Buttons/ButtonSubmit";

const dummyDoctors = [
  { _id: "1", name: "Dr. Ahmed" },
  { _id: "2", name: "Dr. Salma" },
];

const dummyCategories = [
  { _id: "cat1", name: "General" },
  { _id: "cat2", name: "Orthodontics" },
];

function PopupsAddServices() {
  const [open, setOpen] = useState(false);
  const [doctors, setDoctors] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    sessions: "",
    duration: "",
    doctors: [],
    category: "",
    image: "",
  });

  useEffect(() => {
    setDoctors(dummyDoctors);
    setCategories(dummyCategories);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleMultiSelectChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: typeof value === "string" ? value.split(",") : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setOpen(false);
  };

  return (
    <div>
      <div className="w-full">
        <ButtonSubmit
          name="  + Add new Service  "
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
          Add New Service
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
              label="Service Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <TextField
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              multiline
              rows={3}
              required
            />

            <TextField
              label="Price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              required
            />

            <TextField
              label="Number of Sessions"
              name="sessions"
              value={formData.sessions}
              onChange={handleChange}
            />

            <TextField
              label="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />

            <FormControl fullWidth required>
              <InputLabel>Doctors</InputLabel>
              <Select
                multiple
                name="doctors"
                value={formData.doctors}
                onChange={handleMultiSelectChange}
                input={<OutlinedInput label="Doctors" />}
                renderValue={(selected) =>
                  selected
                    .map(
                      (id) =>
                        doctors.find((doc) => doc._id === id)?.name || id
                    )
                    .join(", ")
                }
              >
                {doctors.map((doctor) => (
                  <MenuItem key={doctor._id} value={doctor._id}>
                    <Checkbox
                      checked={formData.doctors.includes(doctor._id)}
                    />
                    <ListItemText primary={doctor.name} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth required>
              <InputLabel>Category</InputLabel>
              <Select
                name="category"
                value={formData.category}
                onChange={handleChange}
              >
                {categories.map((cat) => (
                  <MenuItem key={cat._id} value={cat._id}>
                    {cat.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <TextField
              label="Image URL"
              name="image"
              value={formData.image}
              onChange={handleChange}
              required
            />
            <Button type="submit" variant="contained" color="primary">
              Add Now
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default PopupsAddServices;
