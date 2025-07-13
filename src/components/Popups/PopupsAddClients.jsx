import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  FormControl,
  Select,
  MenuItem,
  Button,
  IconButton,
} from "@mui/material";
import { IoMdClose } from "react-icons/io";
import ButtonSubmit from "../Buttons/ButtonSubmit";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function PopupsAddClients() {
  const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
    role: "client",
    age: "",
    clientWork: "",
    address: {
      city: "",
      street: "",
      country: "",
      postalCode: "",
    },
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (["city", "street", "country", "postalCode"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        address: {
          ...prev.address,
          [name]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Sending data:", formData);
    const token = localStorage.getItem("token");
    try {
      const res = await fetch("http://localhost:5000/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("User created successfully");
        setOpen(false);
      } else {
        toast.error(`Error: ${data.message}`);
      }
    } catch (err) {
      console.error(err);
      toast.error("Network error");
    }
  };

  return (
    <div>
      <div className="w-full">
        <ButtonSubmit
          name="  + Add new Client  "
          onClick={() => setOpen(true)}
        />
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>
          Add New Client
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
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
            <TextField
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              label="Age"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
            />
            <TextField
              label="Client Work"
              name="clientWork"
              value={formData.clientWork}
              onChange={handleChange}
            />

            <FormControl fullWidth required>
              <Select name="role" value={formData.role} onChange={handleChange}>
                <MenuItem value="client">Client</MenuItem>
                <MenuItem value="doctor">Doctor</MenuItem>
                <MenuItem value="admin">Admin</MenuItem>
              </Select>
            </FormControl>

            <TextField
              label="City"
              name="city"
              value={formData.address.city}
              onChange={handleChange}
              required
            />
            <TextField
              label="Street"
              name="street"
              value={formData.address.street}
              onChange={handleChange}
              required
            />
            <TextField
              label="Country"
              name="country"
              value={formData.address.country}
              onChange={handleChange}
              required
            />
            <TextField
              label="Postal Code"
              name="postalCode"
              value={formData.address.postalCode}
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

export default PopupsAddClients;
